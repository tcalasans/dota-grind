'use client';

import Image from 'next/image';
import { HeroV2 } from '@/types/hero-v2';
import { heroImageFromName } from '@/lib/image-urls';

const slotLabels: Record<string, string> = {
  offlaner: 'Offlaner (Pos 3)',
  pos4: 'Soft Support (Pos 4)',
  carry: 'Carry (Pos 1)',
  pos5: 'Hard Support (Pos 5)',
};

const slotRoleLabels: Record<string, string> = {
  offlaner: 'Pos 3',
  pos4: 'Pos 4',
  carry: 'Pos 1',
  pos5: 'Pos 5',
};

interface HeroSlotProps {
  slotId: string;
  hero: HeroV2 | null;
  onOpen: () => void;
  onClear: () => void;
}

export default function HeroSlot({ slotId, hero, onOpen, onClear }: HeroSlotProps) {
  if (!hero) {
    return (
      <div
        className="min-h-[58px] border-2 border-dashed border-border rounded-lg cursor-pointer transition-all duration-200 hover:border-accent flex items-center justify-center"
        onClick={onOpen}
      >
        <div className="flex items-center gap-3 text-text-dim">
          <span className="text-2xl w-10 text-center">+</span>
          <span className="text-sm">{slotLabels[slotId]}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-[58px] border-2 border-border rounded-lg cursor-pointer transition-all duration-200 hover:border-accent"
      onClick={onOpen}
    >
      <div className="flex items-center gap-3 p-2">
        <Image
          src={heroImageFromName(hero.name)}
          alt={hero.name_loc}
          width={60}
          height={34}
          className="rounded object-cover"
        />
        <div className="flex-1">
          <div className="font-semibold text-sm">{hero.name_loc}</div>
          <div className="text-xs text-text-muted">{slotRoleLabels[slotId]}</div>
        </div>
        <button
          className="bg-transparent border-none text-text-dim text-xl cursor-pointer hover:text-accent"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}
