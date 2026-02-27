---
name: fetch-heroes-v2
description: Fetches complete hero data (abilities, talents, facets, lore) from the official Dota 2 website API and saves to src/data/heroes-v2.ts
---

# Fetch Heroes V2

Fetches hero data from the official Dota 2 website API (`dota2.com/datafeed`), which provides the complete authoritative hero dataset including abilities, talents, facets, and bio text.

## Instructions

### Step 1: Create types

- Write `src/types/hero-v2.ts` with interfaces matching the official API shape:
  - `HeroListEntry` — lightweight hero from the list endpoint (id, name, name_loc, name_english_loc, primary_attr as number, complexity)
  - `HeroFacet` — facet data (color, title_loc, description_loc, name, icon, gradient_id, index)
  - `SpecialValueBonus` — bonus within a special value (name, value, operation)
  - `SpecialValueFacetBonus` — facet bonus within a special value (name, values[], operation)
  - `AbilitySpecialValue` — nested special values within abilities (name, values_float[], is_percentage, heading_loc, bonuses[], values_shard[], values_scepter[], facet_bonus, required_facet)
  - `HeroAbilityV2` — full ability data (id, name, name_loc, desc_loc, lore_loc, notes_loc[], shard_loc, scepter_loc, facets_loc[], type, behavior, target_team, target_type, flags, damage, immunity, dispellable, max_level, cast_ranges[], cast_points[], channel_times[], cooldowns[], durations[], damages[], mana_costs[], gold_costs[], health_costs[], special_values[], is_item, ability_has_scepter, ability_has_shard, ability_is_granted_by_scepter, ability_is_granted_by_shard, ability_is_innate, item_cost, item_initial_charges, item_neutral_tier, item_stock_max, item_stock_time, item_quality)
  - `HeroTalent` — same shape as HeroAbilityV2 (use type alias)
  - `FacetAbilities` — facet abilities object (abilities[])
  - `HeroV2` — complete hero object (id, name, order_id, name_loc, bio_loc, hype_loc, npe_desc_loc, str_base, str_gain, agi_base, agi_gain, int_base, int_gain, primary_attr, complexity, attack_capability, role_levels[], damage_min, damage_max, attack_rate, attack_range, projectile_speed, armor, magic_resistance, movement_speed, turn_rate, sight_range_day, sight_range_night, max_health, health_regen, max_mana, mana_regen, facets[], abilities[], talents[], facet_abilities[])
- Keep `primary_attr` as a number (0=STR, 1=AGI, 2=INT, 3=UNIVERSAL) — transformation belongs in the consumer layer

### Step 2: Fetch hero list

- Fetch the hero list endpoint: `https://www.dota2.com/datafeed/herolist?language=english`
- Use curl to download the JSON
- Extract `result.data.heroes` from the response
- Write to `src/data/herolist.ts` as `export const HERO_LIST: HeroListEntry[]`
- Add a header comment with: source URL, current date, total hero count
- Import `HeroListEntry` from `@/types/hero-v2`

### Step 3: Fetch all hero data

- Write a temporary Node.js script at `src/data/_fetch-heroes-v2.tmp.mjs` that:
  - Fetches the hero list from `https://www.dota2.com/datafeed/herolist?language=english`
  - For each hero, fetches `https://www.dota2.com/datafeed/herodata?language=english&hero_id=<id>`
  - Uses batches of 10 concurrent requests with `Promise.allSettled`
  - Collects all hero data, sorts by id
  - Writes to `src/data/heroes-v2.ts` as `export const HEROES_V2: HeroV2[]`
  - Adds header comment with: source URL, current date, total hero count
  - Import `HeroV2` from `@/types/hero-v2`
  - Reports progress and any failures to stdout
- Run the script with `node src/data/_fetch-heroes-v2.tmp.mjs`

### Step 4: Clean up

- Delete the temporary script `src/data/_fetch-heroes-v2.tmp.mjs`

### Step 5: Verify

- Run `npx tsc --noEmit` to confirm types are correct
- Verify `src/data/herolist.ts` has ~127+ entries
- Verify `src/data/heroes-v2.ts` has ~127+ full hero objects with abilities, talents, and facets
