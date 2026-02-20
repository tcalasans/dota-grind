---
name: generate-quizzes
description: Generates hero trivia quiz bank from heroes.js and saves to app/resources/quizzes.js
---

# Generate Quizzes

## Instructions

### Step 1: Read hero data
- Read `app/resources/heroes.js` to understand the hero data structure

### Step 2: Write and run quiz generator script
- Write a temporary Node.js script at `app/resources/_gen-quizzes.tmp.js` that:
  - Reads `heroes.js` by stripping the `const HEROES = ` prefix (and preceding comments/blank lines) and parsing the rest as JSON
  - Generates questions for all 5 types:

| Type | Logic | Approx count |
|------|-------|------|
| `primaryAttr` | 1 per hero — "What is X's primary attribute?" Options: shuffled [Strength, Agility, Intelligence, Universal] | 127 |
| `attackType` | 1 per hero — "Is X Melee or Ranged?" Options: [Melee, Ranged] | 127 |
| `identifyHero` | 1 per hero — "Who is this hero?" Options: shuffled [correct + 3 random others] | 127 |
| `roleCheck` | 2 random roles per hero — "Is X a Y?" Options: [Yes, No] | ~254 |
| `statComparison` | ~100 random pairs — "Who has higher base STR/AGI/INT?" Options: shuffled [h1, h2]. Skip pairs where stats are equal. Shows h1's image. | ~100 |

  - Each question object: `{ img, text, options, answer }`
    - `img` stores the hero's CDN path (e.g. `/apps/dota2/images/...`) — **no** CDN base URL prefix
    - `options` are pre-shuffled where applicable
    - `answer` is always one of the `options` values
  - Shuffles the entire array at the end
  - Writes output to `app/resources/quizzes.js` as:
    ```js
    // Auto-generated hero trivia quiz bank
    // Source: app/resources/heroes.js
    // Generated: <date>
    // Total: <N> questions
    const QUIZZES = [ ... ];
    ```
  - Pretty-print with 2-space indentation
- Run the script with `node app/resources/_gen-quizzes.tmp.js`

### Step 3: Clean up
- Delete the temporary script `app/resources/_gen-quizzes.tmp.js`

### Step 4: Report
- Report the total question count from the generated file
