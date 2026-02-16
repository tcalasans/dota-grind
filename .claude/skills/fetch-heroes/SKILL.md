---
name: fetch-heroes
description: Fetches hero stats from OpenDota API and saves to app/resources/heroes.js
---

# Fetch Heroes

## Instructions

### Step 1: Fetch hero data
- Fetch the OpenDota hero stats API at `https://api.opendota.com/api/heroStats`
- Use curl to download the JSON

### Step 2: Write heroes.js
- Write the JSON response into `app/resources/heroes.js` as a `const HEROES` array
- Add a header comment with the source URL and the current date
- Add a comment with the total hero count
- Pretty-print the JSON with 2-space indentation
- Replace existing file content completely
