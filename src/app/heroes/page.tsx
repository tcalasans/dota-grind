'use client';

import { useState, useEffect } from 'react';
import { HeroV2 } from '@/types/hero-v2';
import { HEROES_V2 } from '@/data/heroes-v2';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import FilterBar from '@/components/filter-bar';
import HeroCard from '@/components/hero-card';
import HeroDetailModal from './hero-detail-modal';

const FILTERS = [
  { value: 'all-heroes', label: 'All' },
  { value: '0', label: 'Strength', colorClass: 'bg-attr-str border-attr-str' },
  { value: '1', label: 'Agility', colorClass: 'bg-attr-agi border-attr-agi' },
  { value: '2', label: 'Intelligence', colorClass: 'bg-attr-int border-attr-int' },
  { value: '3', label: 'Universal', colorClass: 'bg-attr-uni border-attr-uni' },
];

export default function HeroesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all-heroes');
  const [selectedHero, setSelectedHero] = useState<HeroV2 | null>(null);

  useEffect(() => {
    trackEvent('open page', { page: 'Hero Stats' });
  }, []);

  const filtered = HEROES_V2.filter((h) => {
    const matchName = h.name_loc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchAttr = activeFilter === 'all-heroes' || h.primary_attr === Number(activeFilter);
    return matchName && matchAttr;
  });

  return (
    <>
      <PageHeader title="Hero Stats" />
      <FilterBar
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search heroes..."
        filters={FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-2 p-5 max-w-[1400px] mx-auto max-sm:grid-cols-[repeat(auto-fill,minmax(90px,1fr))]">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-text-muted py-10 text-lg">No heroes found.</div>
        ) : (
          filtered.map((hero) => (
            <HeroCard key={hero.id} hero={hero} onClick={setSelectedHero} />
          ))
        )}
      </div>
      <HeroDetailModal hero={selectedHero} onClose={() => setSelectedHero(null)} />
    </>
  );
}
