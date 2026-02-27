'use client';

import Image from 'next/image';
import { HeroV2 } from '@/types/hero-v2';
import { heroImageFromName } from '@/lib/image-urls';
import AttributeIndicator from './attribute-indicator';

interface HeroCardProps {
  hero: HeroV2;
  onClick?: (hero: HeroV2) => void;
}

export default function HeroCard({ hero, onClick }: HeroCardProps) {
  return (
    <div
      className="relative rounded-md overflow-hidden cursor-pointer transition-all duration-200 border-2 border-transparent hover:border-accent hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(233,69,96,0.3)]"
      onClick={() => onClick?.(hero)}
    >
      <Image
        src={heroImageFromName(hero.name)}
        alt={hero.name_loc}
        width={256}
        height={144}
        className="w-full block aspect-video object-cover"
        loading="lazy"
      />
      <AttributeIndicator
        attr={hero.primary_attr}
        className="absolute top-1 right-1"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent pt-4 px-1.5 pb-1 text-[0.7rem] text-center font-semibold uppercase tracking-wide">
        {hero.name_loc}
      </div>
    </div>
  );
}
