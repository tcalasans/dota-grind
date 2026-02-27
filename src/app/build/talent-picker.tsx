'use client';

import { useMemo } from 'react';
import { HeroAbilityV2, HeroTalent } from '@/types/hero-v2';

/**
 * Build a lookup: talentName -> { placeholderKey -> bonusValue }
 * Abilities reference talents via special_values[].bonuses[].name === talent.name,
 * and the placeholder key in name_loc is "bonus_" + special_values[].name.
 */
function buildBonusLookup(abilities: HeroAbilityV2[]): Record<string, Record<string, number>> {
  const lookup: Record<string, Record<string, number>> = {};
  for (const ability of abilities) {
    for (const sv of ability.special_values) {
      for (const b of sv.bonuses) {
        if (!lookup[b.name]) lookup[b.name] = {};
        lookup[b.name]['bonus_' + sv.name] = Number(b.value);
      }
    }
  }
  return lookup;
}

function formatNum(num: number): string {
  return num % 1 === 0 ? String(num) : num.toFixed(1);
}

function resolveTalentName(talent: HeroTalent, bonusLookup: Record<string, Record<string, number>>): string {
  const talentBonuses = bonusLookup[talent.name] || {};

  return talent.name_loc.replace(/\{s:(\w+)\}/g, (_, key: string) => {
    // First: check the talent's own special_values
    const sv = talent.special_values.find((v) => v.name === key);
    if (sv && sv.values_float.length > 0) return formatNum(sv.values_float[0]);

    // Second: check ability bonus lookup (keyed by "bonus_" + sv.name)
    if (talentBonuses[key] !== undefined) return formatNum(talentBonuses[key]);

    return key;
  });
}

const TALENT_TIERS = [
  { level: 10, indices: [0, 1] },
  { level: 15, indices: [2, 3] },
  { level: 20, indices: [4, 5] },
  { level: 25, indices: [6, 7] },
];

interface TalentPickerProps {
  abilities: HeroAbilityV2[];
  talents: HeroTalent[];
  selected: ('L' | 'R' | null)[];
  onSelectedChange: (selected: ('L' | 'R' | null)[]) => void;
}

export default function TalentPicker({ abilities, talents, selected, onSelectedChange }: TalentPickerProps) {
  if (talents.length < 8) return null;

  const bonusLookup = useMemo(() => buildBonusLookup(abilities), [abilities]);

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
                {resolveTalentName(left, bonusLookup)}
              </button>

              <button
                onClick={() => pick(tierIdx, 'R')}
                className={`flex-1 px-3 py-2 rounded-md border text-xs text-left transition-all duration-200 ${
                  sel === 'R'
                    ? 'border-accent bg-accent/15 text-accent'
                    : 'border-border bg-header hover:border-accent/50 cursor-pointer'
                }`}
              >
                {resolveTalentName(right, bonusLookup)}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
