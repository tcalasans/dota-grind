'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { HeroV2 } from '@/types/hero-v2';
import { ItemV2 } from '@/types/item-v2';
import { HEROES_V2 } from '@/data/heroes-v2';
import { ITEMS_V2 } from '@/data/items-v2';
import { heroImageFromName, itemImageFromName } from '@/lib/image-urls';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import HeroPicker from '@/components/hero-picker';
import SkillBuilder from './skill-builder';
import TalentPicker from './talent-picker';
import ItemPicker from './item-picker';

type Role = 'carry' | 'offlaner' | 'midlaner' | 'sup4' | 'sup5';

const ROLES: { value: Role; label: string }[] = [
  { value: 'carry', label: 'Carry' },
  { value: 'midlaner', label: 'Midlaner' },
  { value: 'offlaner', label: 'Offlaner' },
  { value: 'sup4', label: 'Sup 4' },
  { value: 'sup5', label: 'Sup 5' },
];

interface BuildItem {
  itemId: number;
  timing: number;
}

function BuildContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [hero, setHero] = useState<HeroV2 | null>(null);
  const [facetIndex, setFacetIndex] = useState<number | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [skills, setSkills] = useState<number[]>([]);
  const [talents, setTalents] = useState<('L' | 'R' | null)[]>([null, null, null, null]);
  const [items, setItems] = useState<BuildItem[]>([]);

  const [heroPickerOpen, setHeroPickerOpen] = useState(false);
  const [itemPickerOpen, setItemPickerOpen] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);

  // Load from URL on mount
  useEffect(() => {
    trackEvent('open page', { page: 'Build Builder' });

    const heroId = parseInt(searchParams.get('hero') || '');
    if (heroId) {
      const found = HEROES_V2.find((h) => h.id === heroId);
      if (found) {
        setHero(found);

        const fi = parseInt(searchParams.get('facet') || '');
        if (!isNaN(fi) && fi >= 0 && fi < found.facets.length) {
          setFacetIndex(fi);
        } else if (found.facets.length === 1) {
          setFacetIndex(0);
        }

        const r = searchParams.get('role') as Role | null;
        if (r && ROLES.some((ro) => ro.value === r)) {
          setRole(r);
        }

        const skillsParam = searchParams.get('skills');
        if (skillsParam) {
          const parsed = skillsParam.split(',').map(Number).filter((n) => !isNaN(n));
          setSkills(parsed);
        }

        const talentsParam = searchParams.get('talents');
        if (talentsParam && talentsParam.length === 4) {
          setTalents(
            talentsParam.split('').map((c) => (c === 'L' ? 'L' : c === 'R' ? 'R' : null))
          );
        }

        const itemsParam = searchParams.get('items');
        if (itemsParam) {
          const parsed = itemsParam.split(',').map((pair) => {
            const [id, timing] = pair.split(':').map(Number);
            return { itemId: id, timing: timing || 0 };
          }).filter((i) => !isNaN(i.itemId));
          setItems(parsed);
        }
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const syncURL = useCallback(
    (state: {
      hero: HeroV2 | null;
      facetIndex: number | null;
      role: Role | null;
      skills: number[];
      talents: ('L' | 'R' | null)[];
      items: BuildItem[];
    }) => {
      const params = new URLSearchParams();
      if (state.hero) params.set('hero', String(state.hero.id));
      if (state.facetIndex !== null) params.set('facet', String(state.facetIndex));
      if (state.role) params.set('role', state.role);
      if (state.skills.length > 0) params.set('skills', state.skills.join(','));
      const talentStr = state.talents.map((t) => t || '_').join('');
      if (talentStr !== '____') params.set('talents', talentStr);
      if (state.items.length > 0) {
        params.set('items', state.items.map((i) => `${i.itemId}:${i.timing}`).join(','));
      }
      const qs = params.toString();
      router.replace(qs ? `?${qs}` : '/build', { scroll: false });
    },
    [router]
  );

  // Track first hero selection
  useEffect(() => {
    if (hero && !hasTracked) {
      trackEvent('start tool', { tool: 'Build Builder' });
      setHasTracked(true);
    }
  }, [hero, hasTracked]);

  function selectHero(h: HeroV2) {
    setHero(h);
    const fi = h.facets.length === 1 ? 0 : null;
    setFacetIndex(fi);
    setRole(null);
    setSkills([]);
    setTalents([null, null, null, null]);
    setItems([]);
    syncURL({ hero: h, facetIndex: fi, role: null, skills: [], talents: [null, null, null, null], items: [] });
  }

  function selectFacet(idx: number) {
    setFacetIndex(idx);
    syncURL({ hero, facetIndex: idx, role, skills, talents, items });
  }

  function selectRole(r: Role) {
    setRole(r);
    syncURL({ hero, facetIndex, role: r, skills, talents, items });
  }

  function updateSkills(newSkills: number[]) {
    setSkills(newSkills);
    syncURL({ hero, facetIndex, role, skills: newSkills, talents, items });
  }

  function updateTalents(newTalents: ('L' | 'R' | null)[]) {
    setTalents(newTalents);
    syncURL({ hero, facetIndex, role, skills, talents: newTalents, items });
  }

  function addItem(item: ItemV2) {
    const newItems = [...items, { itemId: item.id, timing: 0 }];
    setItems(newItems);
    syncURL({ hero, facetIndex, role, skills, talents, items: newItems });
  }

  function removeItem(index: number) {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    syncURL({ hero, facetIndex, role, skills, talents, items: newItems });
  }

  function updateItemTiming(index: number, timing: number) {
    const newItems = items.map((item, i) => (i === index ? { ...item, timing } : item));
    setItems(newItems);
    syncURL({ hero, facetIndex, role, skills, talents, items: newItems });
  }

  function moveItem(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const newItems = [...items];
    [newItems[index], newItems[target]] = [newItems[target], newItems[index]];
    setItems(newItems);
    syncURL({ hero, facetIndex, role, skills, talents, items: newItems });
  }

  const setupComplete = hero && facetIndex !== null && role;

  // Get non-innate abilities for skill builder
  const heroAbilities = hero
    ? hero.abilities.filter((a) => !a.ability_is_innate && !a.ability_is_granted_by_scepter && !a.ability_is_granted_by_shard)
    : [];

  return (
    <>
      <PageHeader title="Build Builder" />

      <div className="p-5 max-w-[1000px] mx-auto">
        {/* Step 1: Hero Setup */}
        <div className="bg-header/50 rounded-xl border border-border p-5 mb-5">
          <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-4">Hero Setup</h3>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Hero select */}
            {hero ? (
              <div
                className="flex items-center gap-3 bg-primary rounded-lg p-2 pr-4 cursor-pointer border border-border hover:border-accent transition-all duration-200"
                onClick={() => setHeroPickerOpen(true)}
              >
                <Image
                  src={heroImageFromName(hero.name)}
                  alt={hero.name_loc}
                  width={64}
                  height={36}
                  className="rounded"
                />
                <span className="font-bold text-sm">{hero.name_loc}</span>
              </div>
            ) : (
              <button
                onClick={() => setHeroPickerOpen(true)}
                className="px-5 py-3 rounded-lg border-2 border-dashed border-border bg-primary text-text-muted text-sm hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer"
              >
                + Select Hero
              </button>
            )}

            {/* Facet selector */}
            {hero && hero.facets.length > 1 && (
              <div className="flex gap-2">
                {hero.facets.map((facet, idx) => (
                  <button
                    key={facet.name}
                    onClick={() => selectFacet(idx)}
                    className={`px-3 py-2 rounded-md border text-xs transition-all duration-200 cursor-pointer ${
                      facetIndex === idx
                        ? 'border-accent bg-accent/15 text-accent font-semibold'
                        : 'border-border bg-primary text-text-primary hover:border-accent/50'
                    }`}
                    title={facet.description_loc}
                  >
                    {facet.title_loc}
                  </button>
                ))}
              </div>
            )}

            {hero && hero.facets.length === 1 && (
              <span className="text-xs text-text-muted bg-primary px-3 py-2 rounded-md border border-border">
                {hero.facets[0].title_loc}
              </span>
            )}
          </div>

          {/* Role selector */}
          {hero && facetIndex !== null && (
            <div className="mt-4 flex gap-2 flex-wrap">
              <span className="text-xs text-text-muted self-center mr-1">Role:</span>
              {ROLES.map((r) => (
                <button
                  key={r.value}
                  onClick={() => selectRole(r.value)}
                  className={`px-4 py-2 rounded-md border text-xs transition-all duration-200 cursor-pointer ${
                    role === r.value
                      ? 'border-accent bg-accent/15 text-accent font-semibold'
                      : 'border-border bg-primary text-text-primary hover:border-accent/50'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Step 2: Skill Build */}
        {setupComplete && heroAbilities.length > 0 && (
          <div className="bg-header/50 rounded-xl border border-border p-5 mb-5">
            <SkillBuilder
              abilities={heroAbilities}
              skills={skills}
              onSkillsChange={updateSkills}
            />
          </div>
        )}

        {/* Step 3: Talents */}
        {setupComplete && hero.talents.length >= 8 && (
          <div className="bg-header/50 rounded-xl border border-border p-5 mb-5">
            <TalentPicker
              talents={hero.talents}
              selected={talents}
              onSelectedChange={updateTalents}
            />
          </div>
        )}

        {/* Step 4: Itemization */}
        {setupComplete && (
          <div className="bg-header/50 rounded-xl border border-border p-5 mb-5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-accent mb-3">
              Itemization
            </h3>

            {items.length > 0 && (
              <div className="flex flex-col gap-2 mb-4">
                {items.map((buildItem, idx) => {
                  const itemData = ITEMS_V2.find((i) => i.id === buildItem.itemId);
                  if (!itemData) return null;
                  return (
                    <div
                      key={`${buildItem.itemId}-${idx}`}
                      className="flex items-center gap-3 bg-primary rounded-lg p-2 border border-border"
                    >
                      {/* Reorder buttons */}
                      <div className="flex flex-col gap-0.5">
                        <button
                          onClick={() => moveItem(idx, -1)}
                          disabled={idx === 0}
                          className={`text-[0.6rem] leading-none px-1 py-0.5 rounded transition-all ${
                            idx === 0
                              ? 'text-text-dim/30 cursor-not-allowed'
                              : 'text-text-muted hover:text-accent cursor-pointer'
                          }`}
                        >
                          ▲
                        </button>
                        <button
                          onClick={() => moveItem(idx, 1)}
                          disabled={idx === items.length - 1}
                          className={`text-[0.6rem] leading-none px-1 py-0.5 rounded transition-all ${
                            idx === items.length - 1
                              ? 'text-text-dim/30 cursor-not-allowed'
                              : 'text-text-muted hover:text-accent cursor-pointer'
                          }`}
                        >
                          ▼
                        </button>
                      </div>

                      <Image
                        src={itemImageFromName(itemData.name)}
                        alt={itemData.name_loc}
                        width={44}
                        height={32}
                        className="rounded bg-[#0f1a2e]"
                        loading="lazy"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold leading-tight">{itemData.name_loc}</div>
                        <div className="text-[0.65rem] text-[#e4ae39]">{itemData.item_cost} gold</div>
                      </div>

                      {/* Timing input */}
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          min={0}
                          max={120}
                          value={buildItem.timing}
                          onChange={(e) => updateItemTiming(idx, parseInt(e.target.value) || 0)}
                          className="w-[50px] px-2 py-1 rounded border border-border bg-header text-text-primary text-xs text-center outline-none focus:border-accent"
                        />
                        <span className="text-[0.65rem] text-text-muted">min</span>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(idx)}
                        className="text-text-muted hover:text-accent text-lg leading-none px-1 cursor-pointer transition-colors"
                        title="Remove item"
                      >
                        &times;
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            <button
              onClick={() => setItemPickerOpen(true)}
              className="px-4 py-2 rounded-md border-2 border-dashed border-border bg-primary text-text-muted text-sm hover:border-accent hover:text-accent transition-all duration-200 cursor-pointer"
            >
              + Add Item
            </button>
          </div>
        )}

        {/* Placeholder when no hero */}
        {!hero && (
          <div className="text-center text-text-muted py-16">
            <p className="text-lg mb-2">Select a hero to start building</p>
            <p className="text-sm">Create skill builds, talent choices, and item timings — then share via URL</p>
          </div>
        )}
      </div>

      <HeroPicker
        open={heroPickerOpen}
        onClose={() => setHeroPickerOpen(false)}
        onSelect={selectHero}
        title="Select Hero"
      />

      <ItemPicker
        open={itemPickerOpen}
        onClose={() => setItemPickerOpen(false)}
        onSelect={addItem}
      />
    </>
  );
}

export default function BuildPage() {
  return (
    <Suspense fallback={<div className="text-center p-10 text-text-muted">Loading...</div>}>
      <BuildContent />
    </Suspense>
  );
}
