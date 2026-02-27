'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { HeroV2 } from '@/types/hero-v2';
import { HEROES_V2 } from '@/data/heroes-v2';
import { META_CARRY, META_OFFLANER, META_SOFT_SUPPORT, META_HARD_SUPPORT } from '@/data/meta';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import LevelSelector from '@/components/level-selector';
import HeroPicker from '@/components/hero-picker';
import HeroSlot from './hero-slot';
import MatchupComparison from './matchup-comparison';

const SLOT_META: Record<string, string[]> = {
  carry: META_CARRY,
  offlaner: META_OFFLANER,
  pos4: META_SOFT_SUPPORT,
  pos5: META_HARD_SUPPORT,
};

type SlotId = 'offlaner' | 'pos4' | 'carry' | 'pos5';

function LaneMatchupContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [slots, setSlots] = useState<Record<SlotId, HeroV2 | null>>({
    offlaner: null,
    pos4: null,
    carry: null,
    pos5: null,
  });
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<SlotId | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Load from URL on mount
  useEffect(() => {
    trackEvent('open page', { page: 'Lane Matchup' });
    const newSlots: Record<SlotId, HeroV2 | null> = { offlaner: null, pos4: null, carry: null, pos5: null };
    for (const slot of Object.keys(newSlots) as SlotId[]) {
      const id = parseInt(searchParams.get(slot) || '');
      if (id) {
        const hero = HEROES_V2.find((h) => h.id === id);
        if (hero) newSlots[slot] = hero;
      }
    }
    setSlots(newSlots);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const syncURL = useCallback(
    (newSlots: Record<SlotId, HeroV2 | null>) => {
      const params = new URLSearchParams();
      for (const [slot, hero] of Object.entries(newSlots)) {
        if (hero) params.set(slot, String(hero.id));
      }
      const qs = params.toString();
      router.replace(qs ? `?${qs}` : '/lane-matchup', { scroll: false });
    },
    [router]
  );

  const setSlot = (slotId: SlotId, hero: HeroV2 | null) => {
    const newSlots = { ...slots, [slotId]: hero };
    setSlots(newSlots);
    syncURL(newSlots);
  };

  const openPicker = (slotId: SlotId) => {
    setActiveSlot(slotId);
    setPickerOpen(true);
  };

  const hasCores = slots.offlaner && slots.carry;
  const hasSupports = slots.pos4 && slots.pos5;
  const canAnalyze = hasCores || hasSupports;

  return (
    <>
      <PageHeader title="Lane Matchup Analysis" />

      <div className="p-5 max-w-[1000px] mx-auto">
        {/* Team selection */}
        <div className="grid grid-cols-2 gap-8 mb-6 max-sm:grid-cols-1">
          {/* Dire side */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-3 text-center">Dire (Offlane)</h3>
            <div className="flex flex-col gap-2">
              <HeroSlot slotId="offlaner" hero={slots.offlaner} onOpen={() => openPicker('offlaner')} onClear={() => setSlot('offlaner', null)} />
              <HeroSlot slotId="pos4" hero={slots.pos4} onOpen={() => openPicker('pos4')} onClear={() => setSlot('pos4', null)} />
            </div>
          </div>

          {/* Radiant side */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#27ae60] mb-3 text-center">Radiant (Safelane)</h3>
            <div className="flex flex-col gap-2">
              <HeroSlot slotId="carry" hero={slots.carry} onOpen={() => openPicker('carry')} onClear={() => setSlot('carry', null)} />
              <HeroSlot slotId="pos5" hero={slots.pos5} onOpen={() => openPicker('pos5')} onClear={() => setSlot('pos5', null)} />
            </div>
          </div>
        </div>

        {/* Analyze button */}
        <div className="text-center mb-6">
          <button
            disabled={!canAnalyze}
            onClick={() => {
              setShowResults(true);
              trackEvent('start tool', { tool: 'Lane Matchup' });
            }}
            className={`px-8 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
              canAnalyze
                ? 'bg-accent text-white cursor-pointer hover:brightness-110'
                : 'bg-border text-text-dim cursor-not-allowed'
            }`}
          >
            Analyze Matchup
          </button>
        </div>

        {/* Results */}
        {showResults && (
          <div>
            <div className="mb-6 flex justify-center">
              <LevelSelector selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />
            </div>

            {hasCores && (
              <MatchupComparison
                leftHero={slots.offlaner!}
                rightHero={slots.carry!}
                level={selectedLevel}
                title="Core Matchup"
                subtitle="Offlaner vs Carry"
              />
            )}

            {hasSupports && (
              <MatchupComparison
                leftHero={slots.pos4!}
                rightHero={slots.pos5!}
                level={selectedLevel}
                title="Support Matchup"
                subtitle="Pos 4 vs Pos 5"
              />
            )}
          </div>
        )}
      </div>

      <HeroPicker
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={(hero) => {
          if (activeSlot) setSlot(activeSlot, hero);
        }}
        title={activeSlot ? `Select ${activeSlot === 'offlaner' ? 'Offlaner (Pos 3)' : activeSlot === 'pos4' ? 'Soft Support (Pos 4)' : activeSlot === 'carry' ? 'Carry (Pos 1)' : 'Hard Support (Pos 5)'}` : 'Select Hero'}
        metaHeroes={activeSlot ? SLOT_META[activeSlot] : undefined}
      />
    </>
  );
}

export default function LaneMatchupPage() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-text-muted">Loading...</div>}>
      <LaneMatchupContent />
    </Suspense>
  );
}
