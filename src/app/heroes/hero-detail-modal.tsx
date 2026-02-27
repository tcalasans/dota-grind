'use client';

import Image from 'next/image';
import { HeroV2, ATTR_LABELS, ATTACK_TYPE_LABELS, ROLE_NAMES } from '@/types/hero-v2';
import { heroImageFromName } from '@/lib/image-urls';
import { calcHeroStats } from '@/lib/hero-stats';
import Modal from '@/components/modal';

const attrBadgeClass: Record<number, string> = {
  0: 'bg-attr-str',
  1: 'bg-attr-agi',
  2: 'bg-attr-int',
  3: 'bg-attr-uni',
};

const LEVELS = [1, 5, 10, 15, 20, 25, 30];

interface HeroDetailModalProps {
  hero: HeroV2 | null;
  onClose: () => void;
}

export default function HeroDetailModal({ hero, onClose }: HeroDetailModalProps) {
  if (!hero) return null;

  const s1 = calcHeroStats(hero, 1);
  const roles = hero.role_levels
    .map((level, i) => (level > 0 ? ROLE_NAMES[i] : null))
    .filter(Boolean);

  return (
    <Modal open={!!hero} onClose={onClose}>
      <div className="bg-header rounded-xl max-w-[700px] w-full max-h-[90vh] overflow-y-auto border border-border shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="flex items-center gap-5 p-6 border-b border-border max-sm:flex-col max-sm:text-center">
          <Image
            src={heroImageFromName(hero.name)}
            alt={hero.name_loc}
            width={180}
            height={101}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-[1.6rem] mb-1.5 font-bold">{hero.name_loc}</h2>
            <span
              className={`inline-block px-3 py-0.5 rounded-xl text-[0.75rem] font-semibold uppercase tracking-wide text-white ${attrBadgeClass[hero.primary_attr]}`}
            >
              {ATTR_LABELS[hero.primary_attr]}
            </span>
            <div className="text-[0.75rem] text-text-muted mt-0.5">
              {ATTACK_TYPE_LABELS[hero.attack_capability]} | Range: {hero.attack_range}
            </div>
            <div className="mt-2 flex gap-1.5 flex-wrap max-sm:justify-center">
              {roles.map((r) => (
                <span
                  key={r}
                  className="bg-primary px-2.5 py-0.5 rounded-[10px] text-[0.7rem] text-[#aaa]"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Base Stats */}
          <div className="mb-5">
            <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
              Base Stats (Level 1)
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2.5">
              <StatItem label="HP" value={Math.round(s1.hp)} />
              <StatItem label="Mana" value={Math.round(s1.mana)} />
              <StatItem label="Armor" value={s1.armor.toFixed(1)} />
              <StatItem label="Magic Res" value={`${s1.mr.toFixed(1)}%`} />
              <StatItem label="Damage" value={Math.round(s1.damage)} />
              <StatItem label="Move Speed" value={hero.movement_speed} />
              <StatItem label="HP Regen" value={s1.hpRegen.toFixed(1)} />
              <StatItem label="Mana Regen" value={s1.manaRegen.toFixed(2)} />
              <StatItem label="Attack Rate" value={hero.attack_rate} />
              <StatItem label="Attack Range" value={hero.attack_range} />
            </div>
          </div>

          {/* Attributes */}
          <div className="mb-5">
            <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
              Attributes
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2.5">
              <StatItem label="Strength" value={`${hero.str_base} + ${hero.str_gain}`} valueClass="text-[#e74c3c]" />
              <StatItem label="Agility" value={`${hero.agi_base} + ${hero.agi_gain}`} valueClass="text-[#2ecc71]" />
              <StatItem label="Intelligence" value={`${hero.int_base} + ${hero.int_gain}`} valueClass="text-[#3498db]" />
            </div>
          </div>

          {/* Level Progression */}
          <div>
            <h3 className="text-[0.85rem] uppercase tracking-wide text-accent mb-3 border-b border-border pb-1.5 font-semibold">
              Stats by Level
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-[0.8rem] mt-2">
                <thead>
                  <tr>
                    {['Lvl', 'STR', 'AGI', 'INT', 'HP', 'Mana', 'Armor'].map((h) => (
                      <th
                        key={h}
                        className="px-2.5 py-1.5 text-center border-b border-border bg-primary text-text-muted uppercase text-[0.7rem] tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {LEVELS.map((lvl) => {
                    const s = calcHeroStats(hero, lvl);
                    return (
                      <tr key={lvl} className="hover:bg-accent/5">
                        <td className="px-2.5 py-1.5 text-center border-b border-border font-semibold">{lvl}</td>
                        <td className="px-2.5 py-1.5 text-center border-b border-border">{Math.round(s.str)}</td>
                        <td className="px-2.5 py-1.5 text-center border-b border-border">{Math.round(s.agi)}</td>
                        <td className="px-2.5 py-1.5 text-center border-b border-border">{Math.round(s.int)}</td>
                        <td className="px-2.5 py-1.5 text-center border-b border-border">{Math.round(s.hp)}</td>
                        <td className="px-2.5 py-1.5 text-center border-b border-border">{Math.round(s.mana)}</td>
                        <td className="px-2.5 py-1.5 text-center border-b border-border">{s.armor.toFixed(1)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function StatItem({ label, value, valueClass = '' }: { label: string; value: string | number; valueClass?: string }) {
  return (
    <div className="flex justify-between px-3 py-2 bg-primary rounded-md text-[0.85rem]">
      <span className="text-text-muted">{label}</span>
      <span className={`font-semibold text-white ${valueClass}`}>{value}</span>
    </div>
  );
}
