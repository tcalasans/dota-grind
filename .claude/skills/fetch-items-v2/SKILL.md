---
name: fetch-items-v2
description: Fetches complete item data (abilities, recipes, costs) from the official Dota 2 website API and saves to src/data/items-v2.ts
---

# Fetch Items V2

Fetches item data from the official Dota 2 website API (`dota2.com/datafeed`), which provides the complete authoritative item dataset including ability details, special values, recipes, and costs.

## Instructions

### Step 1: Create types

- Write `src/types/item-v2.ts` with interfaces matching the official API shape:
  - `ItemListRecipe` — recipe entry (items: number[])
  - `ItemListEntry` — lightweight item from the list endpoint (id, name, name_loc, name_english_loc, neutral_item_tier, is_pregame_suggested, is_earlygame_suggested, is_lategame_suggested, recipes[])
  - `ItemV2` — full item data from itemdata endpoint (same shape as HeroAbilityV2: id, name, name_loc, desc_loc, lore_loc, notes_loc[], shard_loc, scepter_loc, facets_loc[], type, behavior, target_team, target_type, flags, damage, immunity, dispellable, max_level, cast_ranges[], cast_points[], channel_times[], cooldowns[], durations[], damages[], mana_costs[], gold_costs[], health_costs[], special_values[], is_item, ability_has_scepter, ability_has_shard, ability_is_granted_by_scepter, ability_is_granted_by_shard, ability_is_innate, item_cost, item_initial_charges, item_neutral_tier, item_stock_max, item_stock_time, item_quality)
  - Reuse `AbilitySpecialValue`, `SpecialValueBonus`, `SpecialValueFacetBonus` from `@/types/hero-v2`

### Step 2: Fetch item list

- Fetch the item list endpoint: `https://www.dota2.com/datafeed/itemlist?language=english`
- Use curl to download the JSON
- Extract `result.data.itemabilities` from the response
- Write to `src/data/itemlist.ts` as `export const ITEM_LIST: ItemListEntry[]`
- Add a header comment with: source URL, current date, total item count
- Import `ItemListEntry` from `@/types/item-v2`

### Step 3: Fetch all item data

- Write a temporary Node.js script at `src/data/_fetch-items-v2.tmp.mjs` that:
  - Fetches the item list from `https://www.dota2.com/datafeed/itemlist?language=english`
  - For each item, fetches `https://www.dota2.com/datafeed/itemdata?language=english&item_id=<id>`
  - Uses batches of 10 concurrent requests with `Promise.allSettled`
  - Collects all item data, sorts by id
  - Writes to `src/data/items-v2.ts` as `export const ITEMS_V2: ItemV2[]`
  - Adds header comment with: source URL, current date, total item count
  - Import `ItemV2` from `@/types/item-v2`
  - Reports progress and any failures to stdout
- Run the script with `node src/data/_fetch-items-v2.tmp.mjs`

### Step 4: Clean up

- Delete the temporary script `src/data/_fetch-items-v2.tmp.mjs`

### Step 5: Verify

- Run `npx tsc --noEmit` to confirm types are correct
- Verify `src/data/itemlist.ts` has ~560 entries
- Verify `src/data/items-v2.ts` has ~560 full item objects with special values and costs
