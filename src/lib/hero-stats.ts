import { HeroV2, HeroStats, StatDimension } from '@/types/hero-v2';

export const XP_PER_MINUTE = 360;
export const LEVEL_XP = [0, 230, 600, 1080, 1660, 2260, 2980, 3820, 4780, 5860, 7060];

export function getLevelAtMinute(minute: number): number {
  const totalXP = minute * XP_PER_MINUTE;
  let level = 1;
  for (let i = 0; i < LEVEL_XP.length; i++) {
    if (totalXP >= LEVEL_XP[i]) level = i + 1;
    else break;
  }
  return Math.min(level, 11);
}

export function getAttributes(h: HeroV2, level: number) {
  const gained = level - 1;
  return {
    str: h.str_base + h.str_gain * gained,
    agi: h.agi_base + h.agi_gain * gained,
    int: h.int_base + h.int_gain * gained,
  };
}

export function getPrimaryBonus(h: HeroV2, strGained: number, agiGained: number, intGained: number): number {
  if (h.primary_attr === 0) return strGained;
  if (h.primary_attr === 1) return agiGained;
  if (h.primary_attr === 2) return intGained;
  return (strGained + agiGained + intGained) * 0.7; // universal
}

export function calcHP(h: HeroV2, str: number): number {
  return h.max_health + (str - h.str_base) * 22;
}

export function calcMana(h: HeroV2, int: number): number {
  return h.max_mana + (int - h.int_base) * 12;
}

export function calcArmor(h: HeroV2, agi: number): number {
  return h.armor + (agi - h.agi_base) * 0.167;
}

export function calcMR(h: HeroV2, int: number): number {
  return h.magic_resistance + (int - h.int_base) * 0.1;
}

export function calcHPRegen(h: HeroV2, str: number): number {
  return h.health_regen + (str - h.str_base) * 0.1;
}

export function calcManaRegen(h: HeroV2, int: number): number {
  return h.mana_regen + (int - h.int_base) * 0.05;
}

export function calcDamage(h: HeroV2, str: number, agi: number, int: number): number {
  const baseDmg = (h.damage_min + h.damage_max) / 2;
  const strGained = str - h.str_base;
  const agiGained = agi - h.agi_base;
  const intGained = int - h.int_base;
  return baseDmg + getPrimaryBonus(h, strGained, agiGained, intGained);
}

export function calcAtkFreq(h: HeroV2, agi: number): number {
  return (100 + agi) / (h.attack_rate * 100);
}

export function calcDPS(h: HeroV2, damage: number, agi: number): number {
  return damage * calcAtkFreq(h, agi);
}

export function calcEHPPhys(hp: number, armor: number): number {
  return hp * (1 + 0.06 * armor);
}

export function calcEHPMagic(hp: number, mr: number): number {
  return hp / (1 - mr / 100);
}

export function calcHeroStats(h: HeroV2, level: number): HeroStats {
  const { str, agi, int } = getAttributes(h, level);
  const hp = calcHP(h, str);
  const mana = calcMana(h, int);
  const armor = calcArmor(h, agi);
  const mr = calcMR(h, int);
  const hpRegen = calcHPRegen(h, str);
  const manaRegen = calcManaRegen(h, int);
  const damage = calcDamage(h, str, agi, int);
  const dps = calcDPS(h, damage, agi);
  const ehpPhys = calcEHPPhys(hp, armor);
  const ehpMagic = calcEHPMagic(hp, mr);

  return { str, agi, int, hp, mana, armor, mr, hpRegen, manaRegen, damage, dps, ehpPhys, ehpMagic, level };
}

export function calcStat(h: HeroV2, dim: StatDimension, level: number): number {
  const { str, agi, int } = getAttributes(h, level);
  switch (dim) {
    case 'hp': return calcHP(h, str);
    case 'mana': return calcMana(h, int);
    case 'armor': return calcArmor(h, agi);
    case 'mr': return calcMR(h, int);
    case 'dmg': return calcDamage(h, str, agi, int);
    case 'hpregen': return calcHPRegen(h, str);
    case 'manaregen': return calcManaRegen(h, int);
    case 'ms': return h.movement_speed;
    case 'atkfreq': return calcAtkFreq(h, agi);
    case 'range': return h.attack_range;
  }
}

export function formatStat(value: number, dim: StatDimension): string {
  if (dim === 'armor' || dim === 'hpregen' || dim === 'manaregen' || dim === 'atkfreq') return value.toFixed(2);
  if (dim === 'mr') return value.toFixed(1) + '%';
  return Math.round(value).toString();
}
