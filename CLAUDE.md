# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dota 2 hero analysis dashboard — a static site with no build step, no bundler, and no dependencies. Each page is a self-contained HTML file with inline CSS and inline JavaScript.

## Development

Open any `.html` file inside `app/` directly in a browser. No server, build, or install step required. There are no tests or linters configured.

## Architecture

- **`app/`** — public-facing folder containing all HTML pages and data files
- **No external libraries** — pure vanilla HTML/CSS/JS, no frameworks, no chart libraries
- **Single-file pages** — each page contains all its own styles (`<style>`) and logic (`<script>`); shared data lives in `app/resources/`
- **Data source** — hero data is pre-fetched and stored in `app/resources/heroes.js` (run `/fetch-heroes` to refresh from the OpenDota API); meta picks per role are in `app/resources/meta.js`; ability data in `app/resources/abilities.js` and `app/resources/hero-abilities.js`; hero images use the Steam CDN (`https://cdn.cloudflare.steamstatic.com`)
- **Dark theme** — consistent palette: background `#1a1a2e`, sidebar `#0f1a2e`, accent `#e94560`, borders `#0f3460`

## Pages

- `app/index.html` — Hero Stats: searchable/filterable hero grid with detail modal
- `app/compare.html` — Hero Comparison: tier-list ranking by stat dimension and level
- `app/lane-matchup.html` — Lane Matchup: 2v2 lane analysis with spells comparison

## Conventions

- Sidebar nav is duplicated in every page (update all pages when adding a new nav link)
- Each page has its own sidebar toggle logic for mobile (<768px)
- Stat formulas follow Dota 2 mechanics: STR gives 22 HP, AGI gives 0.167 armor, INT gives 12 mana, etc. — see `hero-stats.js` for shared calculations
- Attribute filter values: `str`, `agi`, `int`, `all` (universal); `all-heroes` means no filter
- Charts are drawn with Canvas 2D API with `devicePixelRatio` scaling for retina displays
