'use client';

import { useState, useEffect, useMemo } from 'react';
import { Item } from '@/types/item';
import { ITEMS } from '@/data/items';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import FilterBar from '@/components/filter-bar';
import ItemCard from './item-card';
import ItemDetailModal from './item-detail-modal';

type ItemWithKey = Item & { key: string };

const QUALITY_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'consumable', label: 'Consumable', colorClass: 'bg-[#008080] border-[#008080]' },
  { value: 'component', label: 'Component', colorClass: 'bg-[#666] border-[#666]' },
  { value: 'common', label: 'Common', colorClass: 'bg-[#aaa] border-[#aaa] text-black' },
  { value: 'rare', label: 'Rare', colorClass: 'bg-[#5b8af7] border-[#5b8af7]' },
  { value: 'epic', label: 'Epic', colorClass: 'bg-[#b369f0] border-[#b369f0]' },
  { value: 'artifact', label: 'Artifact', colorClass: 'bg-[#e4ae39] border-[#e4ae39] text-black' },
  { value: 'secret_shop', label: 'Secret Shop', colorClass: 'bg-[#27ae60] border-[#27ae60]' },
];

export default function ItemsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<ItemWithKey | null>(null);

  useEffect(() => {
    trackEvent('open page', { page: 'Items' });
  }, []);

  const items = useMemo(() => {
    return Object.entries(ITEMS)
      .map(([key, item]) => ({ ...item, key }))
      .filter(
        (item) =>
          item.dname &&
          item.cost !== null &&
          item.cost > 0 &&
          !('tier' in item) &&
          item.key !== 'courier' &&
          item.key !== 'flying_courier'
      )
      .sort((a, b) => (a.dname || '').localeCompare(b.dname || ''));
  }, []);

  const filtered = items.filter((item) => {
    const matchName = (item.dname || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchQual = activeFilter === 'all' || item.qual === activeFilter;
    return matchName && matchQual;
  });

  return (
    <>
      <PageHeader title="Items" />
      <FilterBar
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search items..."
        filters={QUALITY_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2 p-5 max-w-[1400px] mx-auto max-sm:grid-cols-[repeat(auto-fill,minmax(100px,1fr))]">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-text-muted py-10 text-lg">No items found.</div>
        ) : (
          filtered.map((item) => (
            <ItemCard key={item.key} item={item} onClick={setSelectedItem} />
          ))
        )}
      </div>
      <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
