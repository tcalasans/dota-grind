'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { ItemV2 } from '@/types/item-v2';
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

// Dota 2 shop categories by item name (without "item_" prefix)
const SHOP_SECTIONS: { title: string; subsections: { title: string; items: string[] }[] }[] = [
  {
    title: 'Basic',
    subsections: [
      {
        title: 'Consumables',
        items: [
          'tango', 'tango_single', 'clarity', 'flask', 'enchanted_mango', 'faerie_fire',
          'smoke_of_deceit', 'tome_of_knowledge', 'dust', 'ward_observer', 'ward_sentry',
          'ward_dispenser', 'blood_grenade', 'bottle', 'tpscroll', 'aghanims_shard',
          'gem', 'famango', 'greater_famango', 'great_famango', 'elixer',
        ],
      },
      {
        title: 'Attributes',
        items: [
          'branches', 'gauntlets', 'slippers', 'mantle', 'circlet', 'crown', 'diadem',
          'belt_of_strength', 'boots_of_elves', 'robe', 'ogre_axe', 'blade_of_alacrity',
          'staff_of_wizardry', 'ultimate_orb',
        ],
      },
      {
        title: 'Equipment',
        items: [
          'boots', 'gloves', 'blades_of_attack', 'chainmail', 'helm_of_iron_will',
          'javelin', 'broadsword', 'claymore', 'mithril_hammer', 'quarterstaff',
        ],
      },
      {
        title: 'Miscellaneous',
        items: [
          'ring_of_protection', 'quelling_blade', 'infused_raindrop', 'blight_stone',
          'orb_of_venom', 'wind_lace', 'ring_of_regen', 'sobi_mask', 'magic_stick',
          'fluffy_hat', 'ring_of_tarrasque', 'blitz_knuckles', 'cloak', 'voodoo_mask',
          'ring_of_health', 'void_stone', 'shadow_amulet',
        ],
      },
      {
        title: 'Secret Shop',
        items: [
          'energy_booster', 'vitality_booster', 'point_booster', 'cornucopia',
          'platemail', 'talisman_of_evasion', 'hyperstone', 'demon_edge',
          'mystic_staff', 'reaver', 'eagle', 'relic',
        ],
      },
    ],
  },
  {
    title: 'Upgrades',
    subsections: [
      {
        title: 'Accessories',
        items: [
          'magic_wand', 'bracer', 'wraith_band', 'null_talisman', 'soul_ring',
          'falcon_blade', 'pavise', 'power_treads', 'phase_boots', 'arcane_boots',
          'tranquil_boots', 'boots_of_bearing', 'travel_boots', 'travel_boots_2',
          'samurai_tabi', 'hermes_sandals', 'oblivion_staff', 'pers',
          'hand_of_midas', 'moon_shard',
        ],
      },
      {
        title: 'Support',
        items: [
          'ring_of_basilius', 'headdress', 'buckler', 'medallion_of_courage',
          'urn_of_shadows', 'mekansm', 'holy_locket', 'spirit_vessel', 'pipe',
          'guardian_greaves', 'vladmir', 'wraith_pact', 'ancient_janggo',
          'solar_crest', 'glimmer_cape', 'force_staff',
        ],
      },
      {
        title: 'Magical',
        items: [
          'veil_of_discord', 'witch_blade', 'phylactery', 'aether_lens', 'cyclone',
          'rod_of_atos', 'orchid', 'dagon', 'dagon_2', 'dagon_3', 'dagon_4', 'dagon_5',
          'ultimate_scepter', 'ultimate_scepter_2', 'refresher', 'sheepstick',
          'octarine_core', 'wind_waker', 'bloodstone', 'specialists_array',
          'revenants_brooch', 'meteor_hammer',
        ],
      },
      {
        title: 'Armor',
        items: [
          'hood_of_defiance', 'blade_mail', 'vanguard', 'crimson_guard', 'aeon_disk',
          'black_king_bar', 'lotus_orb', 'shivas_guard', 'hurricane_pike', 'sphere',
          'assault', 'heart', 'eternal_shroud', 'mage_slayer', 'harpoon',
          'angels_demise', 'overwhelming_blink', 'arcane_blink', 'swift_blink',
        ],
      },
      {
        title: 'Weapons',
        items: [
          'lesser_crit', 'armlet', 'invis_sword', 'basher', 'bfury',
          'monkey_king_bar', 'greater_crit', 'butterfly', 'silver_edge', 'rapier',
          'abyssal_blade', 'bloodthorn', 'nullifier', 'radiance', 'fallen_sky',
          'devastator', 'mask_of_madness',
        ],
      },
      {
        title: 'Armaments',
        items: [
          'orb_of_corrosion', 'echo_sabre', 'maelstrom', 'diffusal_blade',
          'dragon_lance', 'sange', 'yasha', 'kaya', 'lunar_crest',
          'manta', 'sange_and_yasha', 'kaya_and_sange', 'yasha_and_kaya',
          'heavens_halberd', 'desolator', 'satanic', 'mjollnir', 'skadi',
          'disperser', 'gungir', 'trident', 'helm_of_the_dominator',
          'helm_of_the_overlord', 'ethereal_blade', 'soul_booster', 'blink',
        ],
      },
    ],
  },
];

// Build a set of all categorized item names for quick lookup
const CATEGORIZED_ITEMS = new Set(
  SHOP_SECTIONS.flatMap((s) => s.subsections.flatMap((ss) => ss.items.map((n) => `item_${n}`)))
);

interface ItemPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (item: ItemV2) => void;
}

function ItemTile({ item, onSelect, onClose }: { item: ItemV2; onSelect: (item: ItemV2) => void; onClose: () => void }) {
  return (
    <div
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
  );
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

  const itemMap = useMemo(() => {
    const map = new Map<string, ItemV2>();
    for (const item of ITEMS_V2) {
      if (
        item.name_loc &&
        item.item_cost > 0 &&
        !item.name.includes('recipe') &&
        item.name !== 'item_courier' &&
        item.name !== 'item_flying_courier'
      ) {
        map.set(item.name, item);
      }
    }
    return map;
  }, []);

  const allItems = useMemo(() => {
    return Array.from(itemMap.values()).sort((a, b) => a.name_loc.localeCompare(b.name_loc));
  }, [itemMap]);

  if (!open) return null;

  const searchLower = search.toLowerCase();
  const isSearching = searchLower.length > 0;
  const showSections = qualityFilter === 'all' && !isSearching;

  const filtered = allItems.filter((item) => {
    const matchName = item.name_loc.toLowerCase().includes(searchLower);
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

        <div className="overflow-y-auto flex-1 p-5">
          {showSections ? (
            <div className="flex flex-col gap-6">
              {SHOP_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-accent mb-3 border-b border-border pb-1">
                    {section.title}
                  </h4>
                  <div className="flex flex-col gap-3 pl-2">
                    {section.subsections.map((sub) => {
                      const subItems = sub.items
                        .map((name) => itemMap.get(`item_${name}`))
                        .filter((it): it is ItemV2 => !!it);
                      if (subItems.length === 0) return null;
                      return (
                        <div key={sub.title}>
                          <div className="text-[0.65rem] uppercase tracking-wide text-text-dim mb-1.5">
                            {sub.title}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {subItems.map((item) => (
                              <ItemTile key={item.id} item={item} onSelect={onSelect} onClose={onClose} />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              {/* Uncategorized items */}
              {(() => {
                const uncategorized = allItems.filter((it) => !CATEGORIZED_ITEMS.has(it.name));
                if (uncategorized.length === 0) return null;
                return (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-accent mb-3 border-b border-border pb-1">
                      Other
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pl-2">
                      {uncategorized.map((item) => (
                        <ItemTile key={item.id} item={item} onSelect={onSelect} onClose={onClose} />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,40px)] gap-2 justify-center">
              {filtered.map((item) => (
                <ItemTile key={item.id} item={item} onSelect={onSelect} onClose={onClose} />
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center text-text-muted py-10">No items found.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
