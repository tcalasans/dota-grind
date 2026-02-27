export type PrimaryAttr = 'str' | 'agi' | 'int' | 'all';
export type AttackType = 'Melee' | 'Ranged';

export interface Hero {
  id: number;
  name: string;
  primary_attr: PrimaryAttr;
  attack_type: AttackType;
  roles: string[];
  img: string;
  icon: string;
  base_health: number;
  base_health_regen: number | null;
  base_mana: number;
  base_mana_regen: number | null;
  base_armor: number;
  base_mr: number;
  base_attack_min: number;
  base_attack_max: number;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  attack_range: number;
  projectile_speed: number;
  attack_rate: number;
  base_attack_time: number;
  attack_point: number;
  move_speed: number;
  turn_rate: number | null;
  cm_enabled: boolean;
  legs: number;
  day_vision: number;
  night_vision: number;
  localized_name: string;
  '1_pick': number;
  '1_win': number;
  '2_pick': number;
  '2_win': number;
  '3_pick': number;
  '3_win': number;
  '4_pick': number;
  '4_win': number;
  '5_pick': number;
  '5_win': number;
  '6_pick': number;
  '6_win': number;
  '7_pick': number;
  '7_win': number;
  '8_pick': number;
  '8_win': number;
  [key: string]: unknown;
}

export interface HeroStats {
  str: number;
  agi: number;
  int: number;
  hp: number;
  mana: number;
  armor: number;
  mr: number;
  hpRegen: number;
  manaRegen: number;
  damage: number;
  dps: number;
  ehpPhys: number;
  ehpMagic: number;
  level: number;
}

export type StatDimension =
  | 'hp'
  | 'mana'
  | 'armor'
  | 'mr'
  | 'dmg'
  | 'hpregen'
  | 'manaregen'
  | 'ms'
  | 'atkfreq'
  | 'range';
