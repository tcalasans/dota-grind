'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { ItemV2, ITEM_QUALITY_LABELS } from '@/types/item-v2';
import { ITEMS_V2 } from '@/data/items-v2';
import { itemImageFromName } from '@/lib/image-urls';

const QUALITY_FILTERS = [
  { value: 'all', label: 'All' },
  { value: '0', label: 'Consumable' },
  { value: '2', label: 'Common' },
  { value: '3', label: 'Rare' },
  { value: '4', label: 'Epic' },
  { value: '5', label: 'Artifact' },
  { value: '6', label: 'Secret' },
];

interface ItemPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (item: ItemV2) => void;
}

export default function ItemPicker({ open, onClose, onSelect }: ItemPickerProps) {
  const [search, setSearch] = useState('');
  const [qualityFilter, setQualityFilter] = useState('all');

  useEffect(() => {
    if (open) {
      setSearch('');
      setQualityFilter('all');
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

  const items = useMemo(() => {
    return ITEMS_V2.filter(
      (item) =>
        item.name_loc &&
        item.item_cost > 0 &&
        !item.name.includes('recipe') &&
        item.name !== 'item_courier' &&
        item.name !== 'item_flying_courier'
    ).sort((a, b) => a.name_loc.localeCompare(b.name_loc));
  }, []);

  if (!open) return null;

  const filtered = items.filter((item) => {
    const matchName = item.name_loc.toLowerCase().includes(search.toLowerCase());
    const matchQuality = qualityFilter === 'all' || item.item_quality === Number(qualityFilter);
    return matchName && matchQuality;
  });

  return (
    <div
      className="fixed inset-0 bg-black/85 z-500 flex justify-center items-start p-5 pt-[5vh]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-header rounded-xl max-w-[900px] w-full max-h-[85vh] border border-border shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col">
        <div className="flex justify-between items-center px-5 py-4 border-b border-border">
          <h3 className="text-lg font-bold">Select Item</h3>
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
            placeholder="Search items..."
            className="px-3 py-1.5 rounded-md border border-border bg-primary text-text-primary text-sm w-[200px] outline-none focus:border-accent"
            autoFocus
          />
          {QUALITY_FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setQualityFilter(f.value)}
              className={`px-3 py-1.5 rounded-md border text-xs cursor-pointer transition-all duration-200 ${
                qualityFilter === f.value
                  ? 'bg-accent border-accent text-white'
                  : 'bg-primary border-border text-text-primary hover:bg-border'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,40px)] gap-2 p-5 overflow-y-auto flex-1 justify-center">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative w-[40px] h-[40px] rounded cursor-pointer border-2 border-transparent bg-primary transition-all duration-200 hover:border-accent hover:z-10"
              onClick={() => {
                onSelect(item);
                onClose();
              }}
            >
              <Image
                src={itemImageFromName(item.name)}
                alt={item.name_loc}
                width={40}
                height={40}
                className="w-full h-full block object-cover rounded bg-[#0f1a2e]"
                loading="lazy"
              />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-black/90 text-text-primary text-[0.6rem] font-semibold px-2 py-1 rounded whitespace-nowrap pointer-events-none z-20">
                {item.name_loc}
                <span className="text-[#e4ae39] ml-1">{item.item_cost}</span>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-text-muted py-10">No items found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
