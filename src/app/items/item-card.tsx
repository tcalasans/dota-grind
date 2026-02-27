'use client';

import Image from 'next/image';
import { Item } from '@/types/item';
import { itemImageUrl } from '@/lib/image-urls';

interface ItemCardProps {
  item: Item & { key: string };
  onClick: (item: Item & { key: string }) => void;
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  return (
    <div
      className="relative rounded-md overflow-hidden cursor-pointer border-2 border-transparent bg-header transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(233,69,96,0.3)] hover:border-accent"
      onClick={() => onClick(item)}
    >
      <Image
        src={itemImageUrl(item.img)}
        alt={item.dname || ''}
        width={88}
        height={64}
        className="w-full block object-cover bg-[#0f1a2e]"
        style={{ aspectRatio: '88/64' }}
        loading="lazy"
      />
      <span className="absolute top-1 right-1 bg-black/75 text-[#e4ae39] text-[0.65rem] font-bold px-1.5 py-0.5 rounded">
        {item.cost}
      </span>
      <div className="text-[0.7rem] uppercase text-center py-1.5 px-1 tracking-wide font-semibold">
        {item.dname}
      </div>
    </div>
  );
}
