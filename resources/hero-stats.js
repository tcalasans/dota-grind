// Shared hero stat calculations — Dota 2 mechanics
// STR: 22 HP, 0.1 HP regen
// AGI: 0.167 armor
// INT: 12 mana, 0.05 mana regen, 0.1 magic resistance

// XP model
const XP_PER_MINUTE = 360;
const LEVEL_XP = [0, 230, 600, 1080, 1660, 2260, 2980, 3820, 4780, 5860, 7060];

function getLevelAtMinute(minute) {
  const totalXP = minute * XP_PER_MINUTE;
  let level = 1;
  for (let i = 0; i < LEVEL_XP.length; i++) {
    if (totalXP >= LEVEL_XP[i]) level = i + 1;
    else break;
  }
  return Math.min(level, 11);
}

// Attribute scaling
function getAttributes(h, level) {
  const gained = level - 1;
  return {
    str: h.base_str + h.str_gain * gained,
    agi: h.base_agi + h.agi_gain * gained,
    int: h.base_int + h.int_gain * gained,
  };
}

// Primary attribute bonus damage
function getPrimaryBonus(h, str, agi, int) {
  if (h.primary_attr === 'str') return str;
  if (h.primary_attr === 'agi') return agi;
  if (h.primary_attr === 'int') return int;
  return (str + agi + int) * 0.7; // universal
}

// Individual stat formulas
function calcHP(h, str) { return h.base_health + str * 22; }
function calcMana(h, int) { return h.base_mana + int * 12; }
function calcArmor(h, agi) { return h.base_armor + agi * 0.167; }
function calcMR(h, int) { return h.base_mr + int * 0.1; }
function calcHPRegen(h, str) { return h.base_health_regen + str * 0.1; }
function calcManaRegen(h, int) { return h.base_mana_regen + int * 0.05; }

function calcDamage(h, str, agi, int) {
  const baseDmg = (h.base_attack_min + h.base_attack_max) / 2;
  return baseDmg + getPrimaryBonus(h, str, agi, int);
}

function calcAtkFreq(h, agi) {
  return (h.base_attack_time + agi) / (h.attack_rate * 100);
}

function calcDPS(h, damage, agi) {
  return damage * calcAtkFreq(h, agi);
}

function calcEHPPhys(hp, armor) {
  return hp * (1 + 0.06 * armor);
}

function calcEHPMagic(hp, mr) {
  return hp / (1 - mr / 100);
}

// Full stat block at a given level
function calcHeroStats(h, level) {
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

// Single dimension stat (used by compare tool)
function calcStat(h, dim, level) {
  const { str, agi, int } = getAttributes(h, level);
  switch (dim) {
    case 'hp': return calcHP(h, str);
    case 'mana': return calcMana(h, int);
    case 'armor': return calcArmor(h, agi);
    case 'mr': return calcMR(h, int);
    case 'dmg': return calcDamage(h, str, agi, int);
    case 'hpregen': return calcHPRegen(h, str);
    case 'manaregen': return calcManaRegen(h, int);
    case 'ms': return h.move_speed;
    case 'atkfreq': return calcAtkFreq(h, agi);
    case 'range': return h.attack_range;
  }
}

// Formatting
function formatStat(value, dim) {
  if (dim === 'armor' || dim === 'hpregen' || dim === 'manaregen' || dim === 'atkfreq') return value.toFixed(2);
  if (dim === 'mr') return value.toFixed(1) + '%';
  return Math.round(value);
}
