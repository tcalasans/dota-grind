'use client';

import Image from 'next/image';
import { Hero, StatDimension } from '@/types/hero';
import { heroImageUrl } from '@/lib/image-urls';
import { formatStat } from '@/lib/hero-stats';

interface TierEntry {
  hero: Hero;
  value: number;
}

const TIER_META = [
  { label: '75 - 100', cls: 'bg-[#27ae60]' },
  { label: '50 - 75', cls: 'bg-[#f39c12]' },
  { label: '25 - 50', cls: 'bg-[#e67e22]' },
  { label: '0 - 25', cls: 'bg-[#c0392b]' },
];

interface TierColumnProps {
  tierIndex: number;
  entries: TierEntry[];
  dim: StatDimension;
}

export default function TierColumn({ tierIndex, entries, dim }: TierColumnProps) {
  const meta = TIER_META[tierIndex];

  return (
    <div className="bg-header rounded-lg overflow-hidden border border-border">
      <div className={`px-3.5 py-2.5 text-center text-[0.85rem] font-bold uppercase tracking-wide text-white ${meta.cls}`}>
        {meta.label}
      </div>
      <div className="p-2 flex flex-col gap-1">
        {entries.map((e) => (
          <div
            key={e.hero.id}
            className="flex items-center gap-2 px-2 py-1.5 bg-primary rounded transition-colors duration-150 hover:bg-border"
          >
            <Image
              src={heroImageUrl(e.hero.img)}
              alt={e.hero.localized_name}
              width={40}
              height={22}
              className="object-cover rounded-sm shrink-0"
              loading="lazy"
            />
            <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-[0.8rem]">
              {e.hero.localized_name}
            </span>
            <span className="font-semibold text-accent whitespace-nowrap text-[0.8rem]">
              {formatStat(e.value, dim)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
