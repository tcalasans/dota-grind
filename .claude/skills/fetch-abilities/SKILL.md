---
name: fetch-abilities
description: Fetches hero abilities from OpenDota API and saves to resources/hero-abilities.js and resources/abilities.js
---

# Fetch Abilities

## Instructions

### Step 1: Fetch hero_abilities mapping
- Fetch `https://api.opendota.com/api/constants/hero_abilities`
- This returns a mapping of hero internal names (e.g. `npc_dota_hero_antimage`) to their ability list

### Step 2: Fetch abilities data
- Fetch `https://api.opendota.com/api/constants/abilities`
- This returns detailed info for every ability (name, description, cooldown, mana cost, etc.)

### Step 3: Write hero-abilities.js
- Write the hero_abilities JSON into `resources/hero-abilities.js` as `const HERO_ABILITIES = { ... }`
- Add a header comment with the source URL and the current date
- Pretty-print with 2-space indentation

### Step 4: Write abilities.js
- Write the abilities JSON into `resources/abilities.js` as `const ABILITIES = { ... }`
- Add a header comment with the source URL and the current date
- Pretty-print with 2-space indentation
- Note: this file will be large (~3MB+)
