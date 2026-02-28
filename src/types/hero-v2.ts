/** Lightweight hero entry from the herolist endpoint */
export interface HeroListEntry {
  id: number;
  name: string;
  name_loc: string;
  name_english_loc: string;
  /** 0 = STR, 1 = AGI, 2 = INT, 3 = UNIVERSAL */
  primary_attr: number;
  /** 1 = Easy, 2 = Medium, 3 = Hard */
  complexity: number;
}

export interface HeroFacet {
  color: number;
  title_loc: string;
  description_loc: string;
  name: string;
  icon: string;
  gradient_id: number;
  index: number;
}

export interface SpecialValueBonus {
  name: string;
  value: number | string;
  operation: number;
}

export interface SpecialValueFacetBonus {
  name: string;
  values: number[];
  operation: number;
}

export interface AbilitySpecialValue {
  name: string;
  values_float: number[];
  is_percentage: boolean;
  heading_loc: string;
  bonuses: SpecialValueBonus[];
  values_shard: number[];
  values_scepter: number[];
  facet_bonus: SpecialValueFacetBonus;
  required_facet: string;
}

export interface HeroAbilityV2 {
  id: number;
  name: string;
  name_loc: string;
  desc_loc: string;
  lore_loc: string;
  notes_loc: string[];
  shard_loc: string;
  scepter_loc: string;
  facets_loc: string[];
  type: number;
  behavior: string;
  target_team: number;
  target_type: number;
  flags: number;
  damage: number;
  immunity: number;
  dispellable: number;
  max_level: number;
  cast_ranges: number[];
  cast_points: number[];
  channel_times: number[];
  cooldowns: number[];
  durations: number[];
  damages: number[];
  mana_costs: number[];
  gold_costs: number[];
  health_costs: number[];
  special_values: AbilitySpecialValue[];
  is_item: boolean;
  ability_has_scepter: boolean;
  ability_has_shard: boolean;
  ability_is_granted_by_scepter: boolean;
  ability_is_granted_by_shard: boolean;
  ability_is_innate: boolean;
  item_cost: number;
  item_initial_charges: number;
  item_neutral_tier: number;
  item_stock_max: number;
  item_stock_time: number;
  item_quality: number;
}

export type HeroTalent = HeroAbilityV2;

export interface FacetAbilities {
  abilities: HeroAbilityV2[];
}

export interface HeroV2 {
  id: number;
  name: string;
  order_id: number;
  name_loc: string;
  bio_loc: string;
  hype_loc: string;
  npe_desc_loc: string;
  str_base: number;
  str_gain: number;
  agi_base: number;
  agi_gain: number;
  int_base: number;
  int_gain: number;
  /** 0 = STR, 1 = AGI, 2 = INT, 3 = UNIVERSAL */
  primary_attr: number;
  /** 1 = Easy, 2 = Medium, 3 = Hard */
  complexity: number;
  attack_capability: number;
  role_levels: number[];
  damage_min: number;
  damage_max: number;
  attack_rate: number;
  attack_range: number;
  projectile_speed: number;
  armor: number;
  magic_resistance: number;
  movement_speed: number;
  turn_rate: number;
  sight_range_day: number;
  sight_range_night: number;
  max_health: number;
  health_regen: number;
  max_mana: number;
  mana_regen: number;
  facets: HeroFacet[];
  abilities: HeroAbilityV2[];
  talents: HeroTalent[];
  facet_abilities: FacetAbilities[];
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
  | 'range'
  | 'turn_rate';

export const ROLE_NAMES = ['Carry', 'Support', 'Nuker', 'Disabler', 'Jungler', 'Durable', 'Escape', 'Pusher', 'Initiator'];

export const ATTR_LABELS: Record<number, string> = {
  0: 'Strength',
  1: 'Agility',
  2: 'Intelligence',
  3: 'Universal',
};

export const ATTACK_TYPE_LABELS: Record<number, string> = {
  1: 'Melee',
  2: 'Ranged',
};
