'use client';

import { useState, useEffect } from 'react';
import { Hero } from '@/types/hero';
import { HEROES } from '@/data/heroes';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import FilterBar from '@/components/filter-bar';
import HeroCard from '@/components/hero-card';
import HeroDetailModal from './hero-detail-modal';

const FILTERS = [
  { value: 'all-heroes', label: 'All' },
  { value: 'str', label: 'Strength', colorClass: 'bg-attr-str border-attr-str' },
  { value: 'agi', label: 'Agility', colorClass: 'bg-attr-agi border-attr-agi' },
  { value: 'int', label: 'Intelligence', colorClass: 'bg-attr-int border-attr-int' },
  { value: 'all', label: 'Universal', colorClass: 'bg-attr-uni border-attr-uni' },
];

export default function HeroesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all-heroes');
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  useEffect(() => {
    trackEvent('open page', { page: 'Hero Stats' });
  }, []);

  const filtered = HEROES.filter((h) => {
    const matchName = h.localized_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchAttr = activeFilter === 'all-heroes' || h.primary_attr === activeFilter;
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
