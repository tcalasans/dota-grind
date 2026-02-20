---
name: fetch-items
description: Fetches all Dota 2 items from OpenDota API and saves to app/resources/items.js
---

# Fetch Items

## Instructions

### Step 1: Fetch items data
- Fetch `https://api.opendota.com/api/constants/items`
- Use curl to download the JSON
- This returns an object keyed by item internal name (e.g. `blink`, `overwhelming_blink`) with details like id, dname, cost, img, components, abilities, attrib, cd, mc, lore, etc.

### Step 2: Write items.js
- Write the JSON response into `app/resources/items.js` as `const ITEMS = { ... }`
- Add a header comment with the source URL and the current date
- Count the total number of items (top-level keys) and add a comment with the count
- Pretty-print the JSON with 2-space indentation
- Replace existing file content completely
