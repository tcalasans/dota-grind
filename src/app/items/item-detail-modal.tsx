'use client';

import Image from 'next/image';
import { ItemV2, ITEM_QUALITY_LABELS, ITEM_QUALITY_BADGE_CLASS } from '@/types/item-v2';
import { ITEMS_V2 } from '@/data/items-v2';
import { ITEM_LIST } from '@/data/itemlist';
import { itemImageFromName } from '@/lib/image-urls';
import Modal from '@/components/modal';

const STAT_TOKENS: Record<string, { label: string; color?: string }> = {
  '$str': { label: 'Strength', color: 'var(--color-attr-str)' },
  '$agi': { label: 'Agility', color: 'var(--color-attr-agi)' },
  '$int': { label: 'Intelligence', color: 'var(--color-attr-int)' },
  '$all': { label: 'All Attributes', color: 'var(--color-attr-uni)' },
  '$damage': { label: 'Damage' },
  '$armor': { label: 'Armor' },
  '$health': { label: 'Health', color: 'var(--color-attr-str)' },
  '$mana': { label: 'Mana', color: 'var(--color-attr-int)' },
  '$attack': { label: 'Attack Speed', color: 'var(--color-attr-agi)' },
  '$attack_pct': { label: 'Attack Speed', color: 'var(--color-attr-agi)' },
  '$move_speed': { label: 'Move Speed' },
  '$hp_regen': { label: 'HP Regen', color: 'var(--color-attr-str)' },
  '$mana_regen': { label: 'Mana Regen', color: 'var(--color-attr-int)' },
  '$spell_resist': { label: 'Magic Resistance' },
  '$evasion': { label: 'Evasion', color: 'var(--color-attr-agi)' },
  '$lifesteal': { label: 'Lifesteal' },
  '$spell_lifesteal': { label: 'Spell Lifesteal' },
  '$cast_range': { label: 'Cast Range' },
  '$attack_range': { label: 'Attack Range' },
  '$cooldown_reduction': { label: 'Cooldown Reduction' },
  '$primary_attribute': { label: 'Primary Attribute' },
  '$selected_attrib': { label: 'Selected Attribute' },
};

function resolveHeading(heading: string): { label: string; color?: string } {
  for (const [token, info] of Object.entries(STAT_TOKENS)) {
    if (heading.includes(token)) return info;
  }
  return { label: heading.replace(/\+/g, '').replace(/<[^>]+>/g, '').trim() };
}

interface ItemDetailModalProps {
  item: ItemV2 | null;
  onClose: () => void;
}

function stripHtml(html: string): string {
  return html
    .replace(/<h1>.*?<\/h1>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/%%/g, '%')
    .trim();
}

function resolveDescription(item: ItemV2): string {
  let desc = item.desc_loc;
  for (const sv of item.special_values) {
    const val = sv.values_float.join(' / ');
    desc = desc.replaceAll(`%${sv.name}%`, val);
  }
  return stripHtml(desc);
}

function getAbilityTitle(descLoc: string): string | null {
  const match = descLoc.match(/<h1>([^<]*)<\/h1>/i);
  return match ? match[1] : null;
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  if (!item) return null;

  const title = getAbilityTitle(item.desc_loc);
  const description = resolveDescription(item);
  const displayAttribs = item.special_values.filter((sv) => sv.heading_loc);
  const cooldown = item.cooldowns.find((c) => c > 0);
  const manaCost = item.mana_costs.find((m) => m > 0);
  const charges = item.item_initial_charges > 0 ? item.item_initial_charges : null;

  // Find components from itemlist recipes
  const listEntry = ITEM_LIST.find((e) => e.id === item.id);
  const componentIds = listEntry?.recipes?.[0]?.items ?? [];
  const components = componentIds
    .map((id) => ITEMS_V2.find((i) => i.id === id))
    .filter((c): c is ItemV2 => !!c);

  return (
    <Modal open={!!item} onClose={onClose}>
      <div className="bg-header rounded-xl max-w-[700px] w-full max-h-[90vh] overflow-y-auto border border-border shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="flex items-center gap-5 p-6 border-b border-border max-sm:flex-col max-sm:text-center">
          <Image
            src={itemImageFromName(item.name)}
            alt={item.name_loc}
            width={128}
            height={93}
            className="rounded-lg bg-[#0f1a2e]"
          />
          <div>
            <h2 className="text-[1.6rem] mb-1.5 font-bold">{item.name_loc}</h2>
            <span
              className={`inline-block px-3 py-0.5 rounded-xl text-[0.75rem] font-semibold uppercase tracking-wide ${ITEM_QUALITY_BADGE_CLASS[item.item_quality] || 'bg-[#666]'}`}
            >
              {ITEM_QUALITY_LABELS[item.item_quality] || 'Unknown'}
            </span>
            <div className="mt-2 text-[#e4ae39] text-[1.1rem] font-bold">{item.item_cost} Gold</div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Description */}
          {description && (
            <div className="mb-5">
              <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
                {title || 'Description'}
              </h3>
              <div className="bg-primary rounded-lg p-3.5">
                <p className="text-[0.85rem] text-[#bbb] leading-relaxed whitespace-pre-line">
                  {description}
                </p>
              </div>
            </div>
          )}

          {/* Attributes */}
          {displayAttribs.length > 0 && (
            <div className="mb-5">
              <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
                Attributes
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2.5">
                {displayAttribs.map((sv) => {
                  const { label, color } = resolveHeading(sv.heading_loc);
                  return (
                    <div key={sv.name} className="flex justify-between px-3 py-2 bg-primary rounded-md text-[0.85rem]">
                      <span className="text-text-muted">{label}</span>
                      <span className="font-semibold" style={{ color: color || 'white' }}>
                        +{sv.values_float.join(' / ')}{sv.is_percentage ? '%' : ''}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stats */}
          {(manaCost || cooldown || charges) && (
            <div className="flex gap-4 flex-wrap mb-5">
              {manaCost && (
                <div className="flex items-center gap-1.5 bg-primary px-3.5 py-1.5 rounded-md text-[0.85rem]">
                  <span className="text-text-muted">Mana Cost</span>
                  <span className="font-semibold text-white">{manaCost}</span>
                </div>
              )}
              {cooldown && (
                <div className="flex items-center gap-1.5 bg-primary px-3.5 py-1.5 rounded-md text-[0.85rem]">
                  <span className="text-text-muted">Cooldown</span>
                  <span className="font-semibold text-white">{cooldown}s</span>
                </div>
              )}
              {charges && (
                <div className="flex items-center gap-1.5 bg-primary px-3.5 py-1.5 rounded-md text-[0.85rem]">
                  <span className="text-text-muted">Charges</span>
                  <span className="font-semibold text-white">{charges}</span>
                </div>
              )}
            </div>
          )}

          {/* Components */}
          {components.length > 0 && (
            <div className="mb-5">
              <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
                Components
              </h3>
              <div className="flex gap-2.5 flex-wrap">
                {components.map((comp) => (
                  <div key={comp.id} className="flex items-center gap-2 bg-primary px-3 py-1.5 rounded-md">
                    <Image
                      src={itemImageFromName(comp.name)}
                      alt={comp.name_loc}
                      width={32}
                      height={23}
                      className="rounded bg-[#0f1a2e]"
                    />
                    <span className="text-[0.8rem] text-[#ccc]">{comp.name_loc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lore */}
          {item.lore_loc && (
            <div className="italic text-[#888] text-[0.85rem] leading-relaxed p-3.5 bg-primary rounded-lg border-l-3 border-accent">
              {item.lore_loc}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
