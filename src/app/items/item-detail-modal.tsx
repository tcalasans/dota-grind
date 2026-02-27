'use client';

import Image from 'next/image';
import { Item, ItemQuality } from '@/types/item';
import { ITEMS } from '@/data/items';
import { itemImageUrl } from '@/lib/image-urls';
import Modal from '@/components/modal';

const qualLabel: Record<string, string> = {
  consumable: 'Consumable',
  component: 'Component',
  common: 'Common',
  rare: 'Rare',
  epic: 'Epic',
  artifact: 'Artifact',
  secret_shop: 'Secret Shop',
};

const qualBadgeClass: Record<string, string> = {
  consumable: 'bg-[#008080]',
  component: 'bg-[#666]',
  common: 'bg-[#aaa] text-black',
  rare: 'bg-[#5b8af7]',
  epic: 'bg-[#b369f0]',
  artifact: 'bg-[#e4ae39] text-black',
  secret_shop: 'bg-[#27ae60]',
};

interface ItemDetailModalProps {
  item: (Item & { key: string }) | null;
  onClose: () => void;
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  if (!item) return null;

  const displayAttribs = (item.attrib || []).filter((a) => a.display);

  return (
    <Modal open={!!item} onClose={onClose}>
      <div className="bg-header rounded-xl max-w-[700px] w-full max-h-[90vh] overflow-y-auto border border-border shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="flex items-center gap-5 p-6 border-b border-border max-sm:flex-col max-sm:text-center">
          <Image
            src={itemImageUrl(item.img)}
            alt={item.dname || ''}
            width={128}
            height={93}
            className="rounded-lg bg-[#0f1a2e]"
          />
          <div>
            <h2 className="text-[1.6rem] mb-1.5 font-bold">{item.dname}</h2>
            {item.qual && (
              <span
                className={`inline-block px-3 py-0.5 rounded-xl text-[0.75rem] font-semibold uppercase tracking-wide ${qualBadgeClass[item.qual] || 'bg-[#666]'}`}
              >
                {qualLabel[item.qual] || item.qual}
              </span>
            )}
            <div className="mt-2 text-[#e4ae39] text-[1.1rem] font-bold">{item.cost} Gold</div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Abilities */}
          {item.abilities && item.abilities.length > 0 && (
            <div className="mb-5">
              <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
                Abilities
              </h3>
              {item.abilities.map((ability, i) => (
                <div key={i} className="bg-primary rounded-lg p-3.5 mb-2.5">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[0.65rem] uppercase tracking-wide ${
                        ability.type === 'active' ? 'bg-[#2980b9]' : 'bg-[#27ae60]'
                      }`}
                    >
                      {ability.type}
                    </span>
                    <span className="font-bold text-[0.95rem]">{ability.title}</span>
                  </div>
                  <p className="text-[0.85rem] text-[#bbb] leading-relaxed whitespace-pre-line">
                    {ability.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Attributes */}
          {displayAttribs.length > 0 && (
            <div className="mb-5">
              <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
                Attributes
              </h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2.5">
                {displayAttribs.map((a, i) => (
                  <div key={i} className="flex justify-between px-3 py-2 bg-primary rounded-md text-[0.85rem]">
                    <span className="text-text-muted">
                      {a.display ? a.display.replace('{value}', a.value) : a.key}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          {(item.mc || item.cd || item.charges) && (
            <div className="flex gap-4 flex-wrap mb-5">
              {item.mc !== false && item.mc !== undefined && (
                <div className="flex items-center gap-1.5 bg-primary px-3.5 py-1.5 rounded-md text-[0.85rem]">
                  <span className="text-text-muted">Mana Cost</span>
                  <span className="font-semibold text-white">{String(item.mc)}</span>
                </div>
              )}
              {item.cd !== false && item.cd !== undefined && (
                <div className="flex items-center gap-1.5 bg-primary px-3.5 py-1.5 rounded-md text-[0.85rem]">
                  <span className="text-text-muted">Cooldown</span>
                  <span className="font-semibold text-white">{item.cd}s</span>
                </div>
              )}
              {item.charges !== false && item.charges !== undefined && (
                <div className="flex items-center gap-1.5 bg-primary px-3.5 py-1.5 rounded-md text-[0.85rem]">
                  <span className="text-text-muted">Charges</span>
                  <span className="font-semibold text-white">{String(item.charges)}</span>
                </div>
              )}
            </div>
          )}

          {/* Components */}
          {item.created && item.components && item.components.length > 0 && (
            <div className="mb-5">
              <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
                Components
              </h3>
              <div className="flex gap-2.5 flex-wrap">
                {item.components.map((compKey, i) => {
                  const comp = ITEMS[compKey];
                  if (!comp) return null;
                  return (
                    <div key={i} className="flex items-center gap-2 bg-primary px-3 py-1.5 rounded-md">
                      <Image
                        src={itemImageUrl(comp.img)}
                        alt={comp.dname || compKey}
                        width={32}
                        height={23}
                        className="rounded bg-[#0f1a2e]"
                      />
                      <span className="text-[0.8rem] text-[#ccc]">{comp.dname || compKey}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Lore */}
          {item.lore && (
            <div className="italic text-[#888] text-[0.85rem] leading-relaxed p-3.5 bg-primary rounded-lg border-l-3 border-accent">
              {item.lore}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
