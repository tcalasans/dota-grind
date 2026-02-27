'use client';

import { HeroTalent } from '@/types/hero-v2';

const TALENT_TIERS = [
  { level: 10, indices: [0, 1] },
  { level: 15, indices: [2, 3] },
  { level: 20, indices: [4, 5] },
  { level: 25, indices: [6, 7] },
];

interface TalentPickerProps {
  talents: HeroTalent[];
  selected: ('L' | 'R' | null)[];
  onSelectedChange: (selected: ('L' | 'R' | null)[]) => void;
}

export default function TalentPicker({ talents, selected, onSelectedChange }: TalentPickerProps) {
  if (talents.length < 8) return null;

  function pick(tierIndex: number, side: 'L' | 'R') {
    const next = [...selected];
    next[tierIndex] = next[tierIndex] === side ? null : side;
    onSelectedChange(next);
  }

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-3">
        Talents
      </h3>

      <div className="flex flex-col gap-2">
        {TALENT_TIERS.map((tier, tierIdx) => {
          const left = talents[tier.indices[0]];
          const right = talents[tier.indices[1]];
          const sel = selected[tierIdx];

          return (
            <div key={tier.level} className="flex items-center gap-2">
              <span className="text-xs text-text-muted w-[32px] text-right shrink-0">
                Lv {tier.level}
              </span>

              <button
                onClick={() => pick(tierIdx, 'L')}
                className={`flex-1 px-3 py-2 rounded-md border text-xs text-left transition-all duration-200 ${
                  sel === 'L'
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-border bg-header hover:border-accent/50 cursor-pointer'
                }`}
              >
                {left.name_loc}
              </button>

              <button
                onClick={() => pick(tierIdx, 'R')}
                className={`flex-1 px-3 py-2 rounded-md border text-xs text-left transition-all duration-200 ${
                  sel === 'R'
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-border bg-header hover:border-accent/50 cursor-pointer'
                }`}
              >
                {right.name_loc}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
