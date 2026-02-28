'use client';

import { useState, useEffect } from 'react';
import { HeroV2 } from '@/types/hero-v2';
import { HEROES_V2 } from '@/data/heroes-v2';
import HeroCard from './hero-card';

const ATTR_FILTERS = [
  { value: -1 as number, label: 'All' },
  { value: 0, label: 'STR', colorClass: 'bg-attr-str border-attr-str' },
  { value: 1, label: 'AGI', colorClass: 'bg-attr-agi border-attr-agi' },
  { value: 2, label: 'INT', colorClass: 'bg-attr-int border-attr-int' },
  { value: 3, label: 'UNI', colorClass: 'bg-attr-uni border-attr-uni' },
];

interface HeroPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (hero: HeroV2) => void;
  title?: string;
  metaHeroes?: string[];
}

export default function HeroPicker({ open, onClose, onSelect, title = 'Select Hero', metaHeroes }: HeroPickerProps) {
  const [search, setSearch] = useState('');
  const [attrFilter, setAttrFilter] = useState(-1);
  const [metaFilter, setMetaFilter] = useState(false);

  useEffect(() => {
    if (open) {
      setSearch('');
      setAttrFilter(-1);
      setMetaFilter(false);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const metaList = metaFilter && metaHeroes ? metaHeroes : null;

  let filtered = HEROES_V2.filter((h) => {
    const matchName = h.name_loc.toLowerCase().includes(search.toLowerCase());
    const matchAttr = attrFilter === -1 || h.primary_attr === attrFilter;
    const matchMeta = !metaList || metaList.includes(h.name_loc);
    return matchName && matchAttr && matchMeta;
  });

  if (metaList) {
    filtered.sort((a, b) => metaList.indexOf(a.name_loc) - metaList.indexOf(b.name_loc));
  }

  return (
    <div
      className="fixed inset-0 bg-black/85 z-500 flex justify-center items-start p-5 pt-[5vh]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-header rounded-xl max-w-[800px] w-full max-h-[85vh] border border-border shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col">
        <div className="flex justify-between items-center px-5 py-4 border-b border-border">
          <h3 className="text-lg font-bold">{title}</h3>
          <button
            className="bg-transparent border-none text-text-muted text-2xl cursor-pointer hover:text-accent"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="flex gap-2 px-5 py-3 flex-wrap items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search heroes..."
            className="px-3 py-1.5 rounded-md border border-border bg-primary text-text-primary text-sm w-[200px] outline-none focus:border-accent"
            autoFocus
          />
          {ATTR_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setAttrFilter(f.value)}
              className={`px-3 py-1.5 rounded-md border text-xs cursor-pointer transition-all duration-200 ${
                attrFilter === f.value
                  ? f.colorClass
                    ? `${f.colorClass} text-white`
                    : 'bg-accent border-accent text-white'
                  : 'bg-primary border-border text-text-primary hover:bg-border'
              }`}
            >
              {f.label}
            </button>
          ))}
          {metaHeroes && (
            <button
              onClick={() => setMetaFilter(!metaFilter)}
              className={`px-3 py-1.5 rounded-md border text-xs cursor-pointer transition-all duration-200 ${
                metaFilter
                  ? 'bg-[#f39c12] border-[#f39c12] text-white'
                  : 'bg-primary border-border text-text-primary hover:bg-border'
              }`}
            >
              META
            </button>
          )}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2 p-5 overflow-y-auto flex-1">
          {filtered.map((hero) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              onClick={() => {
                onSelect(hero);
                onClose();
              }}
            />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-text-muted py-10">No heroes found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
