'use client';

import Image from 'next/image';
import { HeroV2, StatDimension, ATTR_LABELS } from '@/types/hero-v2';
import { HEROES_V2 } from '@/data/heroes-v2';
import { heroImageFromName } from '@/lib/image-urls';
import { calcStat, formatStat } from '@/lib/hero-stats';

const STATS: { key: StatDimension; label: string }[] = [
  { key: 'hp', label: 'HP' },
  { key: 'mana', label: 'Mana' },
  { key: 'armor', label: 'Armor' },
  { key: 'mr', label: 'Magic Res' },
  { key: 'dmg', label: 'Damage' },
  { key: 'hpregen', label: 'HP Regen' },
  { key: 'manaregen', label: 'Mana Regen' },
  { key: 'ms', label: 'Move Speed' },
  { key: 'atkfreq', label: 'Atk/Sec' },
  { key: 'range', label: 'Range' },
];

function getPercentileTier(value: number, allValues: number[]) {
  const sorted = [...allValues].sort((a, b) => a - b);
  const n = sorted.length;
  const p25 = sorted[Math.floor(n * 0.25)];
  const p50 = sorted[Math.floor(n * 0.5)];
  const p75 = sorted[Math.floor(n * 0.75)];
  if (value >= p75) return { label: 'high', cls: 'text-[#27ae60]' };
  if (value >= p50) return { label: 'med-high', cls: 'text-[#f39c12]' };
  if (value >= p25) return { label: 'med-low', cls: 'text-[#e67e22]' };
  return { label: 'low', cls: 'text-[#c0392b]' };
}

interface MatchupComparisonProps {
  leftHero: HeroV2;
  rightHero: HeroV2;
  level: number;
  title: string;
  subtitle: string;
}

export default function MatchupComparison({ leftHero, rightHero, level, title, subtitle }: MatchupComparisonProps) {
  const allStatValues: Record<string, number[]> = {};
  for (const stat of STATS) {
    allStatValues[stat.key] = HEROES_V2.map((h) => calcStat(h, stat.key, level));
  }

  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold mb-4">
        {title} <span className="text-text-muted text-sm font-normal">{subtitle}</span>
      </h2>

      {/* Hero headers */}
      <div className="flex items-center gap-4 mb-4">
        <HeroHeader hero={leftHero} />
        <div className="text-text-muted font-bold text-lg px-4">VS</div>
        <HeroHeader hero={rightHero} />
      </div>

      {/* Stat rows */}
      <div className="flex flex-col gap-1">
        {STATS.map((stat) => {
          const leftVal = calcStat(leftHero, stat.key, level);
          const rightVal = calcStat(rightHero, stat.key, level);
          const maxVal = Math.max(leftVal, rightVal);
          const leftPct = maxVal > 0 ? (leftVal / maxVal) * 100 : 0;
          const rightPct = maxVal > 0 ? (rightVal / maxVal) * 100 : 0;
          const leftWins = leftVal > rightVal;
          const rightWins = rightVal > leftVal;
          const leftTier = getPercentileTier(leftVal, allStatValues[stat.key]);
          const rightTier = getPercentileTier(rightVal, allStatValues[stat.key]);

          return (
            <div key={stat.key} className="flex items-center gap-0">
              {/* Left cell */}
              <div
                className={`flex-1 relative h-9 flex items-center justify-end px-3 ${
                  leftWins ? 'text-accent' : ''
                }`}
              >
                <div
                  className={`absolute top-0 right-0 h-full rounded-l transition-all duration-300 ${
                    leftWins ? 'bg-accent/15' : 'bg-border/50'
                  }`}
                  style={{ width: `${leftPct}%` }}
                />
                <span className="relative z-10 text-[0.8rem] font-semibold">
                  {formatStat(leftVal, stat.key)}{' '}
                  <span className={`text-[0.7rem] ${leftTier.cls}`}>({leftTier.label})</span>
                </span>
              </div>

              {/* Label */}
              <div className="w-24 text-center text-[0.75rem] text-text-muted font-semibold uppercase tracking-wide shrink-0">
                {stat.label}
              </div>

              {/* Right cell */}
              <div
                className={`flex-1 relative h-9 flex items-center justify-start px-3 ${
                  rightWins ? 'text-accent' : ''
                }`}
              >
                <div
                  className={`absolute top-0 left-0 h-full rounded-r transition-all duration-300 ${
                    rightWins ? 'bg-accent/15' : 'bg-border/50'
                  }`}
                  style={{ width: `${rightPct}%` }}
                />
                <span className="relative z-10 text-[0.8rem] font-semibold">
                  {formatStat(rightVal, stat.key)}{' '}
                  <span className={`text-[0.7rem] ${rightTier.cls}`}>({rightTier.label})</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HeroHeader({ hero }: { hero: HeroV2 }) {
  return (
    <div className="flex items-center gap-3 flex-1">
      <Image
        src={heroImageFromName(hero.name)}
        alt={hero.name_loc}
        width={80}
        height={45}
        className="rounded object-cover"
      />
      <div>
        <div className="font-semibold">{hero.name_loc}</div>
        <div className="text-xs text-text-muted">{ATTR_LABELS[hero.primary_attr]}</div>
      </div>
    </div>
  );
}
