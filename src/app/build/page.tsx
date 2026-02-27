'use client';

import { useState, useEffect, useCallback, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { HeroV2 } from '@/types/hero-v2';
import { ItemV2 } from '@/types/item-v2';
import { HEROES_V2 } from '@/data/heroes-v2';
import { ITEMS_V2 } from '@/data/items-v2';
import { ITEM_LIST } from '@/data/itemlist';
import { heroImageFromName, itemImageFromName } from '@/lib/image-urls';
import { trackEvent } from '@/lib/mixpanel';
import PageHeader from '@/components/page-header';
import HeroPicker from '@/components/hero-picker';
import SkillBuilder from './skill-builder';
import TalentPicker from './talent-picker';
import ItemPicker from './item-picker';

/** Build a map: componentItemId -> list of items it upgrades into */
function buildUpgradeLookup(): Map<number, ItemV2[]> {
  const itemByName = new Map(ITEMS_V2.map((i) => [i.name, i]));
  const lookup = new Map<number, ItemV2[]>();

  for (const entry of ITEM_LIST) {
    if (entry.recipes.length === 0 || !entry.name.includes('recipe')) continue;
    const builtName = entry.name.replace('_recipe', '');
    const builtItem = itemByName.get(builtName);
    if (!builtItem || !builtItem.name_loc) continue;

    for (const recipe of entry.recipes) {
      for (const compId of recipe.items) {
        const list = lookup.get(compId) || [];
        if (!list.some((u) => u.id === builtItem.id)) {
          list.push(builtItem);
        }
        lookup.set(compId, list);
      }
    }
  }
  return lookup;
}

const UPGRADE_LOOKUP = buildUpgradeLookup();

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
  /** Index of the parent item this was upgraded from, or null for base items */
  upgradeOf: number | null;
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
  const [upgradeMenuIndex, setUpgradeMenuIndex] = useState<number | null>(null);

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
          const parsed = itemsParam.split(',').map((token) => {
            // Format: itemId:timing or itemId:timing>parentIdx
            const [main, parentStr] = token.split('>');
            const [id, timing] = main.split(':').map(Number);
            const upgradeOf = parentStr !== undefined ? parseInt(parentStr) : null;
            return { itemId: id, timing: timing || 0, upgradeOf: isNaN(upgradeOf as number) ? null : upgradeOf };
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
        params.set(
          'items',
          state.items.map((i) => {
            const base = `${i.itemId}:${i.timing}`;
            return i.upgradeOf !== null ? `${base}>${i.upgradeOf}` : base;
          }).join(',')
        );
      }
      const qs = params.toString();
      router.replace(qs ? `?${qs}` : '/build', { scroll: false });
    },
    [router]
  );

  // Close upgrade menu on outside click
  useEffect(() => {
    if (upgradeMenuIndex === null) return;
    const handleClick = () => setUpgradeMenuIndex(null);
    // Delay to avoid closing immediately from the button click
    const timer = setTimeout(() => document.addEventListener('click', handleClick), 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, [upgradeMenuIndex]);

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
    const newItems = [...items, { itemId: item.id, timing: 0, upgradeOf: null }];
    setItems(newItems);
    syncURL({ hero, facetIndex, role, skills, talents, items: newItems });
  }

  function removeItem(index: number) {
    // Collect indices to remove: the item itself + any upgrades that reference it
    const toRemove = new Set<number>([index]);
    // Cascade: also remove upgrades of upgrades, etc.
    let changed = true;
    while (changed) {
      changed = false;
      for (let i = 0; i < items.length; i++) {
        if (!toRemove.has(i) && items[i].upgradeOf !== null && toRemove.has(items[i].upgradeOf!)) {
          toRemove.add(i);
          changed = true;
        }
      }
    }

    const newItems: BuildItem[] = [];
    // Map old indices to new indices for upgradeOf references
    const indexMap = new Map<number, number>();
    for (let i = 0; i < items.length; i++) {
      if (!toRemove.has(i)) {
        indexMap.set(i, newItems.length);
        newItems.push({ ...items[i] });
      }
    }
    // Remap upgradeOf references
    for (const item of newItems) {
      if (item.upgradeOf !== null) {
        item.upgradeOf = indexMap.get(item.upgradeOf) ?? null;
      }
    }

    setItems(newItems);
    syncURL({ hero, facetIndex, role, skills, talents, items: newItems });
  }

  function updateItemTiming(index: number, timing: number) {
    const newItems = items.map((item, i) => (i === index ? { ...item, timing } : item));
    setItems(newItems);
    syncURL({ hero, facetIndex, role, skills, talents, items: newItems });
  }

  function upgradeItem(parentIndex: number, upgrade: ItemV2) {
    // Insert the upgrade right after the parent
    const newItem: BuildItem = { itemId: upgrade.id, timing: 0, upgradeOf: parentIndex };
    const insertAt = parentIndex + 1;
    const newItems = [...items].map((item) => ({ ...item }));
    newItems.splice(insertAt, 0, newItem);
    // Adjust upgradeOf references for items that shifted
    for (let i = 0; i < newItems.length; i++) {
      if (i === insertAt) continue; // skip the newly inserted item
      if (newItems[i].upgradeOf !== null && newItems[i].upgradeOf! >= insertAt) {
        newItems[i].upgradeOf = newItems[i].upgradeOf! + 1;
      }
    }
    setItems(newItems);
    setUpgradeMenuIndex(null);
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
              abilities={hero.abilities}
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
                  const upgrades = UPGRADE_LOOKUP.get(buildItem.itemId);
                  const showUpgradeMenu = upgradeMenuIndex === idx;
                  const isUpgrade = buildItem.upgradeOf !== null;
                  const parentData = isUpgrade
                    ? ITEMS_V2.find((i) => i.id === items[buildItem.upgradeOf!]?.itemId)
                    : null;

                  return (
                    <div
                      key={`${buildItem.itemId}-${idx}`}
                      className={`relative flex items-center gap-3 bg-primary rounded-lg p-2 border border-border ${
                        isUpgrade ? 'ml-8' : ''
                      }`}
                    >
                      {/* Upgrade link indicator */}
                      {isUpgrade && (
                        <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-text-dim text-xs">↳</span>
                      )}

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
                        <div className="text-[0.65rem] text-[#e4ae39]">
                          {itemData.item_cost} gold
                          {parentData && (
                            <span className="text-text-dim ml-1.5">
                              (from {parentData.name_loc})
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Upgrade button */}
                      {upgrades && upgrades.length > 0 && (
                        <button
                          onClick={() => setUpgradeMenuIndex(showUpgradeMenu ? null : idx)}
                          className="text-[0.7rem] px-2 py-1 rounded border border-border bg-header text-text-muted hover:text-accent hover:border-accent cursor-pointer transition-all"
                          title="Upgrade item"
                        >
                          ⬆
                        </button>
                      )}

                      {/* Upgrade dropdown */}
                      {showUpgradeMenu && upgrades && (
                        <div className="absolute right-0 top-full mt-1 z-50 bg-header border border-border rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.5)] min-w-[200px]">
                          <div className="px-3 py-2 border-b border-border text-[0.65rem] text-text-muted uppercase tracking-wide">
                            Upgrade to
                          </div>
                          {upgrades.map((upgrade) => (
                            <button
                              key={upgrade.id}
                              onClick={() => upgradeItem(idx, upgrade)}
                              className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-accent/10 cursor-pointer transition-colors"
                            >
                              <Image
                                src={itemImageFromName(upgrade.name)}
                                alt={upgrade.name_loc}
                                width={32}
                                height={24}
                                className="rounded bg-[#0f1a2e]"
                                loading="lazy"
                              />
                              <div>
                                <div className="text-xs font-semibold">{upgrade.name_loc}</div>
                                <div className="text-[0.6rem] text-[#e4ae39]">{upgrade.item_cost} gold</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}

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
                        title={isUpgrade ? 'Remove upgrade' : 'Remove item'}
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
