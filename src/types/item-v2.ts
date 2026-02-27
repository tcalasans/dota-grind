import { AbilitySpecialValue } from './hero-v2';

export interface ItemListRecipe {
  items: number[];
}

/** Lightweight item entry from the itemlist endpoint */
export interface ItemListEntry {
  id: number;
  name: string;
  name_loc: string;
  name_english_loc: string;
  /** -1 = not neutral, 0-4 = neutral tier */
  neutral_item_tier: number;
  is_pregame_suggested: boolean;
  is_earlygame_suggested: boolean;
  is_lategame_suggested: boolean;
  recipes: ItemListRecipe[];
}

/** Full item data from the itemdata endpoint */
export interface ItemV2 {
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

export const ITEM_QUALITY_LABELS: Record<number, string> = {
  0: 'Consumable',
  1: 'Component',
  2: 'Common',
  3: 'Rare',
  4: 'Epic',
  5: 'Artifact',
  6: 'Secret Shop',
};

export const ITEM_QUALITY_BADGE_CLASS: Record<number, string> = {
  0: 'bg-[#008080]',
  1: 'bg-[#666]',
  2: 'bg-[#aaa] text-black',
  3: 'bg-[#5b8af7]',
  4: 'bg-[#b369f0]',
  5: 'bg-[#e4ae39] text-black',
  6: 'bg-[#27ae60]',
};
