---
name: generate-hero-trivia-quizzes
description: Generates hero trivia quiz bank from heroes-v2.ts and saves to src/data/hero-trivia-quizzes.ts
---

# Generate Hero Trivia Quizzes

## Instructions

### Step 1: Read hero data
- Read `src/data/heroes-v2.ts` to understand the hero data structure
- Heroes use the `HeroV2` type: `name_loc` for display name, `primary_attr` as number (0=STR, 1=AGI, 2=INT, 3=UNIVERSAL), `attack_capability` as number (1=Melee, 2=Ranged), `role_levels` as number array, `name` for image derivation

### Step 2: Write and run quiz generator script
- Write a temporary Node.js script at `src/data/_gen-hero-trivia-quizzes.tmp.mjs` that:
  - Reads `heroes-v2.ts` by stripping the TypeScript import and export prefix and parsing the JSON array
  - Generates questions for all 5 types:

| Type | Logic | Approx count |
|------|-------|------|
| `primaryAttr` | 1 per hero — "What is X's primary attribute?" Options: shuffled [Strength, Agility, Intelligence, Universal] | 127 |
| `attackType` | 1 per hero — "Is X Melee or Ranged?" Options: [Melee, Ranged] | 127 |
| `identifyHero` | 1 per hero — "Who is this hero?" Options: shuffled [correct + 3 random others] | 127 |
| `roleCheck` | 2 random roles per hero — "Is X a Y?" Options: [Yes, No] | ~254 |
| `statComparison` | ~100 random pairs — "Who has higher base STR/AGI/INT?" Options: shuffled [h1, h2]. Skip pairs where stats are equal. Shows h1's image. | ~100 |

  - Each question object: `{ img, text, options, answer }`
    - `img` stores the hero image path derived from `name`: `/apps/dota2/images/dota_react/heroes/{slug}.png` where slug = name without `npc_dota_hero_` prefix — **no** CDN base URL prefix
    - `options` are pre-shuffled where applicable
    - `answer` is always one of the `options` values
  - Shuffles the entire array at the end
  - Writes output to `src/data/hero-trivia-quizzes.ts` as:
    ```ts
    import { TriviaQuestion } from '@/types/trivia';
    // Auto-generated hero trivia quiz bank
    // Source: src/data/heroes-v2.ts
    // Generated: <date>
    // Total: <N> questions
    export const HERO_TRIVIA_QUIZZES: TriviaQuestion[] = [ ... ];
    ```
  - Pretty-print with 2-space indentation
- Run the script with `node src/data/_gen-hero-trivia-quizzes.tmp.mjs`

### Step 3: Clean up
- Delete the temporary script `src/data/_gen-hero-trivia-quizzes.tmp.mjs`

### Step 4: Report
- Report the total question count from the generated file
