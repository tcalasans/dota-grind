'use client';

import { useState, useRef, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { HeroV2 } from '@/types/hero-v2';
import { HEROES_V2 } from '@/data/heroes-v2';
import { ITEMS } from '@/data/items';
import { heroImageFromName } from '@/lib/image-urls';
import { trackEvent } from '@/lib/mixpanel';
import HeroPicker from '@/components/hero-picker';
import BootSelector, { BootItem } from './boot-selector';
import { useSimulation } from './use-simulation';

const DEFAULT_TURN_RATE = 0.6;
const BOOT_KEYS = ['boots', 'phase_boots', 'power_treads', 'travel_boots', 'travel_boots_2', 'arcane_boots', 'tranquil_boots', 'guardian_greaves', 'boots_of_bearing'];

function SimulatorContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [screen, setScreen] = useState<'pregame' | 'game'>('pregame');
  const [selectedHero, setSelectedHero] = useState<HeroV2 | null>(null);
  const [selectedBoot, setSelectedBoot] = useState<BootItem | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);

  const { start, stop, handleMouseDown, handleMouseMove, handleStop } = useSimulation(canvasRef, containerRef);

  const bootItems = useMemo(() => {
    return BOOT_KEYS
      .filter((k) => ITEMS[k])
      .map((k) => {
        const item = ITEMS[k];
        let ms = 0;
        for (const attr of item.attrib || []) {
          if (['bonus_movement_speed', 'bonus_movement', 'bonus_movement_speed_melee'].includes(attr.key)) {
            ms = Math.max(ms, parseInt(attr.value) || 0);
          }
        }
        return { key: k, dname: item.dname || k, img: item.img, ms };
      })
      .sort((a, b) => a.ms - b.ms);
  }, []);

  // Load from URL params on mount
  useEffect(() => {
    trackEvent('open page', { page: 'Simulator' });
    const heroParam = searchParams.get('hero');
    if (heroParam) {
      const hero = HEROES_V2.find(
        (h) =>
          h.name_loc.toLowerCase() === heroParam.toLowerCase() ||
          h.name === heroParam ||
          h.name === 'npc_dota_hero_' + heroParam
      );
      if (hero) {
        setSelectedHero(hero);
        const bootsParam = searchParams.get('boots');
        if (bootsParam) {
          const boot = bootItems.find((b) => b.key === bootsParam) || null;
          setSelectedBoot(boot);
        }
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const syncURL = (hero: HeroV2 | null, boot: BootItem | null) => {
    const params = new URLSearchParams();
    if (hero) {
      params.set('hero', hero.name_loc);
      if (boot) params.set('boots', boot.key);
    }
    const qs = params.toString();
    router.replace(qs ? `?${qs}` : '/simulator', { scroll: false });
  };

  const getBootMoveSpeed = (hero: HeroV2) => {
    return hero.movement_speed + (selectedBoot?.ms || 0);
  };

  const startSimulation = () => {
    if (!selectedHero) return;
    setScreen('game');
    trackEvent('start tool', { tool: 'Simulator' });
    setTimeout(() => {
      const ms = getBootMoveSpeed(selectedHero);
      const tr = selectedHero.turn_rate;
      start(ms, tr);
    }, 50);
  };

  const changeHero = () => {
    stop();
    setScreen('pregame');
  };

  // Keyboard handler for stop
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (screen === 'game' && !pickerOpen && (e.key === 's' || e.key === 'S')) {
        handleStop();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [screen, pickerOpen, handleStop]);

  const moveSpeed = selectedHero ? getBootMoveSpeed(selectedHero) : 0;
  const turnRate = selectedHero?.turn_rate ?? DEFAULT_TURN_RATE;

  return (
    <>
      {screen === 'pregame' && (
        <div className="flex-1 flex justify-center items-center p-10 max-md:p-6">
          <div className="bg-gradient-to-br from-header to-header-end border border-border rounded-2xl p-10 max-w-[480px] w-full text-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] max-md:p-6">
            <h2 className="text-[1.8rem] text-accent mb-3 tracking-wide font-bold max-md:text-[1.4rem]">Movement Simulator</h2>
            <p className="text-text-muted text-[0.95rem] leading-relaxed mb-6">
              Pick a hero and watch how it moves on the battlefield. Click the canvas to issue move commands — the hero turns using its turn rate, then walks at its move speed, just like in Dota 2.
            </p>

            <div className="min-h-[100px] flex flex-col items-center justify-center mb-6">
              {selectedHero ? (
                <>
                  <Image
                    src={heroImageFromName(selectedHero.name)}
                    alt={selectedHero.name_loc}
                    width={180}
                    height={101}
                    className="rounded-lg border-2 border-border mb-3"
                  />
                  <span className="text-[1.1rem] font-semibold">{selectedHero.name_loc}</span>
                  <span className="text-[0.8rem] text-text-muted mt-1">
                    Move Speed: {moveSpeed} &nbsp;|&nbsp; Turn Rate: {turnRate}
                  </span>
                </>
              ) : (
                <span className="text-text-dim text-[0.9rem]">No hero selected</span>
              )}
            </div>

            {selectedHero && (
              <BootSelector boots={bootItems} selectedBoot={selectedBoot} onSelect={(boot) => {
                setSelectedBoot(boot);
                syncURL(selectedHero, boot);
              }} />
            )}

            <div className="flex justify-center gap-3 flex-wrap">
              <button
                className="px-7 py-3 rounded-lg border border-[#1a4a7a] bg-border text-text-primary text-[0.95rem] font-semibold cursor-pointer uppercase tracking-wide transition-all duration-200 hover:bg-[#1a4a7a]"
                onClick={() => setPickerOpen(true)}
              >
                Select a Hero
              </button>
              <button
                disabled={!selectedHero}
                onClick={startSimulation}
                className={`px-7 py-3 rounded-lg border-none text-[0.95rem] font-semibold uppercase tracking-wide transition-all duration-200 ${
                  selectedHero ? 'bg-accent text-white cursor-pointer hover:brightness-110' : 'bg-accent/40 text-white/50 cursor-not-allowed'
                }`}
              >
                Start Simulation
              </button>
            </div>
          </div>
        </div>
      )}

      {screen === 'game' && (
        <div className="flex-1 flex flex-col">
          <div className="bg-gradient-to-br from-header to-header-end border-b-2 border-accent px-5 py-3 flex items-center gap-6 z-10 flex-wrap max-md:gap-3 max-md:px-3.5">
            <span className="text-[1.1rem] text-accent font-semibold">{selectedHero?.name_loc}</span>
            <span className="text-[0.85rem] text-text-muted">Move Speed: <span className="text-text-primary font-semibold">{moveSpeed}</span></span>
            <span className="text-[0.85rem] text-text-muted">Turn Rate: <span className="text-text-primary font-semibold">{turnRate}</span></span>
            <span className="text-[0.85rem] text-text-muted">Boots: <span className="text-text-primary font-semibold">{selectedBoot?.dname || 'None'}</span></span>
            <span className="flex-1" />
            <button
              className="px-4 py-2 rounded-md border border-border bg-primary text-text-primary text-[0.8rem] cursor-pointer transition-all duration-200 hover:bg-border hover:border-accent"
              onClick={changeHero}
            >
              Change Hero
            </button>
          </div>
          <div className="flex-1 relative overflow-hidden" ref={containerRef}>
            <canvas
              ref={canvasRef}
              className="block cursor-crosshair"
              onContextMenu={(e) => e.preventDefault()}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
            />
          </div>
        </div>
      )}

      <HeroPicker
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={(hero) => {
          setSelectedHero(hero);
          syncURL(hero, selectedBoot);
        }}
        title="Select Hero"
      />
    </>
  );
}

export default function SimulatorPage() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-text-muted">Loading...</div>}>
      <SimulatorContent />
    </Suspense>
  );
}
