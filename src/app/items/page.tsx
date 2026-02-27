'use client';

import { useState, useEffect, useMemo } from 'react';
import { ItemV2 } from '@/types/item-v2';
import { ITEMS_V2 } from '@/data/items-v2';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import FilterBar from '@/components/filter-bar';
import ItemCard from './item-card';
import ItemDetailModal from './item-detail-modal';

const QUALITY_FILTERS = [
  { value: 'all', label: 'All' },
  { value: '0', label: 'Consumable', colorClass: 'bg-[#008080] border-[#008080]' },
  { value: '1', label: 'Component', colorClass: 'bg-[#666] border-[#666]' },
  { value: '2', label: 'Common', colorClass: 'bg-[#aaa] border-[#aaa] text-black' },
  { value: '3', label: 'Rare', colorClass: 'bg-[#5b8af7] border-[#5b8af7]' },
  { value: '4', label: 'Epic', colorClass: 'bg-[#b369f0] border-[#b369f0]' },
  { value: '5', label: 'Artifact', colorClass: 'bg-[#e4ae39] border-[#e4ae39] text-black' },
  { value: '6', label: 'Secret Shop', colorClass: 'bg-[#27ae60] border-[#27ae60]' },
];

export default function ItemsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<ItemV2 | null>(null);

  useEffect(() => {
    trackEvent('open page', { page: 'Items' });
  }, []);

  const items = useMemo(() => {
    return ITEMS_V2
      .filter(
        (item) =>
          item.name_loc &&
          item.item_cost > 0 &&
          !item.name.includes('recipe') &&
          item.name !== 'item_courier' &&
          item.name !== 'item_flying_courier'
      )
      .sort((a, b) => a.name_loc.localeCompare(b.name_loc));
  }, []);

  const filtered = items.filter((item) => {
    const matchName = item.name_loc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchQual = activeFilter === 'all' || item.item_quality === Number(activeFilter);
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
            <ItemCard key={item.id} item={item} onClick={setSelectedItem} />
          ))
        )}
      </div>
      <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}
