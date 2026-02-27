'use client';

import { useState, useEffect, useMemo } from 'react';
import { StatDimension } from '@/types/hero-v2';
import { HEROES_V2 } from '@/data/heroes-v2';
import { META_ALL } from '@/data/meta';
import { calcStat } from '@/lib/hero-stats';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import LevelSelector from '@/components/level-selector';
import TierColumn from './tier-column';

const DIMENSIONS: { key: StatDimension; label: string }[] = [
  { key: 'hp', label: 'HP' },
  { key: 'mana', label: 'Mana' },
  { key: 'armor', label: 'Base Armor' },
  { key: 'mr', label: 'Magic Resistance' },
  { key: 'dmg', label: 'Base Damage' },
  { key: 'hpregen', label: 'HP Regen' },
  { key: 'manaregen', label: 'Mana Regen' },
  { key: 'ms', label: 'Move Speed' },
  { key: 'atkfreq', label: 'Attacks/Sec' },
  { key: 'range', label: 'Range' },
];

export default function ComparePage() {
  const [selectedDim, setSelectedDim] = useState<StatDimension>('hp');
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [metaFilter, setMetaFilter] = useState(false);

  useEffect(() => {
    trackEvent('open page', { page: 'Hero Comparison' });
  }, []);

  const metaHeroNames = useMemo(
    () => new Set(META_ALL.flatMap((arr) => arr.slice(0, 6))),
    []
  );

  const heroes = useMemo(
    () => [...HEROES_V2].sort((a, b) => a.name_loc.localeCompare(b.name_loc)),
    []
  );

  const buckets = useMemo(() => {
    const pool = metaFilter ? heroes.filter((h) => metaHeroNames.has(h.name_loc)) : heroes;
    const entries = pool.map((h) => ({
      hero: h,
      value: calcStat(h, selectedDim, selectedLevel),
    }));

    const sorted = [...entries].sort((a, b) => a.value - b.value);
    const n = sorted.length;
    const p25 = sorted[Math.floor(n * 0.25)].value;
    const p50 = sorted[Math.floor(n * 0.5)].value;
    const p75 = sorted[Math.floor(n * 0.75)].value;

    const result: { hero: typeof entries[0]['hero']; value: number }[][] = [[], [], [], []];
    for (const entry of entries) {
      if (entry.value >= p75) result[0].push(entry);
      else if (entry.value >= p50) result[1].push(entry);
      else if (entry.value >= p25) result[2].push(entry);
      else result[3].push(entry);
    }

    for (const bucket of result) {
      bucket.sort((a, b) => b.value - a.value);
    }

    return result;
  }, [heroes, selectedDim, selectedLevel, metaFilter, metaHeroNames]);

  return (
    <>
      <PageHeader title="Hero Comparison Tool" />
      <div className="bg-header px-5 py-4 flex flex-col gap-3 items-center">
        {/* Dimension selector */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          <span className="text-[0.8rem] text-text-muted uppercase tracking-wide min-w-[70px] font-semibold">Dimension</span>
          {DIMENSIONS.map((d) => (
            <button
              key={d.key}
              onClick={() => setSelectedDim(d.key)}
              className={`px-4 py-2 rounded-md border text-[0.85rem] cursor-pointer transition-all duration-200 ${
                selectedDim === d.key
                  ? 'bg-accent border-accent text-white'
                  : 'bg-primary border-border text-text-primary hover:bg-border'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Meta filter */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          <span className="text-[0.8rem] text-text-muted uppercase tracking-wide min-w-[70px] font-semibold">Filter</span>
          <button
            onClick={() => setMetaFilter(!metaFilter)}
            className={`px-4 py-2 rounded-md border text-[0.85rem] cursor-pointer transition-all duration-200 ${
              metaFilter
                ? 'bg-[#f39c12] border-[#f39c12] text-white'
                : 'bg-primary border-border text-text-primary hover:bg-border'
            }`}
          >
            META
          </button>
        </div>

        {/* Level selector */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          <span className="text-[0.8rem] text-text-muted uppercase tracking-wide min-w-[70px] font-semibold">Level</span>
          <LevelSelector selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 p-5 max-w-[1400px] mx-auto max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">
        {buckets.map((bucket, i) => (
          <TierColumn key={i} tierIndex={i} entries={bucket} dim={selectedDim} />
        ))}
      </div>
    </>
  );
}
