'use client';

import Image from 'next/image';

export interface BootItem {
  key: string;
  dname: string;
  img: string;
  ms: number;
}

interface BootSelectorProps {
  boots: BootItem[];
  selectedBoot: BootItem | null;
  onSelect: (boot: BootItem | null) => void;
}

export default function BootSelector({ boots, selectedBoot, onSelect }: BootSelectorProps) {
  if (!boots.length) return null;

  return (
    <div className="mb-6">
      <label className="block text-[0.8rem] text-text-muted uppercase tracking-wide mb-2">Boots</label>
      <div className="flex gap-1.5 justify-center flex-wrap">
        <div
          className={`bg-primary border-2 rounded-lg p-1.5 cursor-pointer transition-all duration-200 flex flex-col items-center w-[72px] ${
            !selectedBoot ? 'border-accent bg-accent/10' : 'border-border hover:border-[#1a4a7a]'
          }`}
          onClick={() => onSelect(null)}
        >
          <div className="w-9 h-[27px] flex items-center justify-center text-xl text-text-dim mb-1">&times;</div>
          <span className={`text-[0.55rem] text-center leading-tight ${!selectedBoot ? 'text-text-primary' : 'text-text-muted'}`}>None</span>
        </div>
        {boots.map((boot) => (
          <div
            key={boot.key}
            className={`bg-primary border-2 rounded-lg p-1.5 cursor-pointer transition-all duration-200 flex flex-col items-center w-[72px] ${
              selectedBoot?.key === boot.key ? 'border-accent bg-accent/10' : 'border-border hover:border-[#1a4a7a]'
            }`}
            onClick={() => onSelect(boot)}
          >
            <Image
              src={boot.img}
              alt={boot.dname}
              width={36}
              height={27}
              className="object-cover rounded mb-1"
              loading="lazy"
            />
            <span className={`text-[0.55rem] text-center leading-tight ${selectedBoot?.key === boot.key ? 'text-text-primary' : 'text-text-muted'}`}>
              {boot.dname}
            </span>
            <span className="text-[0.5rem] text-[#27ae60] mt-0.5">+{boot.ms}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
