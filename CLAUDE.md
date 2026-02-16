# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dota 2 hero analysis dashboard — a static site with no build step, no bundler, and no dependencies. Each page is a self-contained HTML file with inline CSS and inline JavaScript.

## Development

Open any `.html` file directly in a browser. No server, build, or install step required. There are no tests or linters configured.

## Architecture

- **No external libraries** — pure vanilla HTML/CSS/JS, no frameworks, no chart libraries
- **Single-file pages** — each page contains all its own styles (`<style>`) and logic (`<script>`), nothing is shared across files
- **Data source** — all hero data is fetched at runtime from the OpenDota API (`https://api.opendota.com/api/heroStats`); hero images use the Steam CDN (`https://cdn.cloudflare.steamstatic.com`)
- **Dark theme** — consistent palette: background `#1a1a2e`, sidebar `#0f1a2e`, accent `#e94560`, borders `#0f3460`

## Pages

- `index.html` — Hero Stats: searchable/filterable hero grid with detail modal
- `compare.html` — Hero Comparison: tier-list ranking by stat dimension and level
- `lane-matchup.html` — Lane Matchup: 2v2 lane analysis with charts and minute-by-minute stat table

## Conventions

- Sidebar nav is duplicated in every page (update all pages when adding a new nav link)
- Each page has its own sidebar toggle logic for mobile (<768px)
- Stat formulas follow Dota 2 mechanics: STR gives 22 HP, AGI gives 0.167 armor, INT gives 12 mana, etc. — see `calcStat()` in `compare.html` or `calcHeroStats()` in `lane-matchup.html`
- Attribute filter values: `str`, `agi`, `int`, `all` (universal); `all-heroes` means no filter
- Charts are drawn with Canvas 2D API with `devicePixelRatio` scaling for retina displays
