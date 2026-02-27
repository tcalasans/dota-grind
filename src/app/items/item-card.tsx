'use client';

import Image from 'next/image';
import { ItemV2 } from '@/types/item-v2';
import { itemImageFromName } from '@/lib/image-urls';

const STAT_TOKENS: Record<string, { label: string; color?: string }> = {
  '$str': { label: 'STR', color: 'var(--color-attr-str)' },
  '$agi': { label: 'AGI', color: 'var(--color-attr-agi)' },
  '$int': { label: 'INT', color: 'var(--color-attr-int)' },
  '$all': { label: 'All Stats', color: 'var(--color-attr-uni)' },
  '$damage': { label: 'DMG' },
  '$armor': { label: 'Armor' },
  '$health': { label: 'HP', color: 'var(--color-attr-str)' },
  '$mana': { label: 'Mana', color: 'var(--color-attr-int)' },
  '$attack': { label: 'AS', color: 'var(--color-attr-agi)' },
  '$attack_pct': { label: 'AS', color: 'var(--color-attr-agi)' },
  '$move_speed': { label: 'MS' },
  '$hp_regen': { label: 'HP Regen', color: 'var(--color-attr-str)' },
  '$mana_regen': { label: 'Mana Regen', color: 'var(--color-attr-int)' },
  '$spell_resist': { label: 'Magic Res' },
  '$evasion': { label: 'Evasion', color: 'var(--color-attr-agi)' },
  '$lifesteal': { label: 'Lifesteal' },
  '$spell_lifesteal': { label: 'Spell Lifesteal' },
  '$cast_range': { label: 'Cast Range' },
  '$attack_range': { label: 'Atk Range' },
  '$cooldown_reduction': { label: 'CDR' },
  '$primary_attribute': { label: 'Primary' },
  '$selected_attrib': { label: 'Attribute' },
};

function formatHeading(heading: string): { label: string; color?: string } {
  for (const [token, info] of Object.entries(STAT_TOKENS)) {
    if (heading.includes(token)) return info;
  }
  return { label: heading.replace(/\+/g, '').replace(/<[^>]+>/g, '').trim() };
}

interface ItemCardProps {
  item: ItemV2;
  onClick: (item: ItemV2) => void;
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  const bonuses = item.special_values
    .filter((sv) => sv.heading_loc && sv.values_float[0])
    .slice(0, 3)
    .map((sv) => {
      const val = sv.values_float[0];
      const { label, color } = formatHeading(sv.heading_loc);
      return { text: `+${val}${sv.is_percentage ? '%' : ''} ${label}`, color };
    });

  return (
    <div
      className="relative rounded-md overflow-hidden cursor-pointer border-2 border-transparent bg-header transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(233,69,96,0.3)] hover:border-accent"
      onClick={() => onClick(item)}
    >
      <Image
        src={itemImageFromName(item.name)}
        alt={item.name_loc}
        width={88}
        height={64}
        className="w-full block object-cover bg-[#0f1a2e]"
        style={{ aspectRatio: '88/64' }}
        loading="lazy"
      />
      <span className="absolute top-1 right-1 bg-black/75 text-[#e4ae39] text-[0.65rem] font-bold px-1.5 py-0.5 rounded">
        {item.item_cost}
      </span>
      <div className="text-[0.7rem] uppercase text-center py-1.5 px-1 tracking-wide font-semibold">
        {item.name_loc}
      </div>
      {bonuses.length > 0 && (
        <div className="px-1.5 pb-1.5 flex flex-col gap-0.5">
          {bonuses.map((b) => (
            <span
              key={b.text}
              className="text-[0.6rem] leading-tight text-center"
              style={{ color: b.color || '#8cb4d8' }}
            >
              {b.text}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
