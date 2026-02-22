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

## CLient-side tracking
we track things using mixpanel, we instantiate the object by adding this segment just before </header> on every page:

```
<!-- Paste this right before your closing head tag -->
<script type="text/javascript">
    (function (f, b) { if (!b.__SV) { var e, g, i, h; window.mixpanel = b; b._i = []; b.init = function (e, f, c) { function g(a, d) { var b = d.split("."); 2 == b.length && ((a = a[b[0]]), (d = b[1])); a[d] = function () { a.push([d].concat(Array.prototype.slice.call(arguments, 0))); }; } var a = b; "undefined" !== typeof c ? (a = b[c] = []) : (c = "mixpanel"); a.people = a.people || []; a.toString = function (a) { var d = "mixpanel"; "mixpanel" !== c && (d += "." + c); a || (d += " (stub)"); return d; }; a.people.toString = function () { return a.toString(1) + ".people (stub)"; }; i = "disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split( " "); for (h = 0; h < i.length; h++) g(a, i[h]); var j = "set set_once union unset remove delete".split(" "); a.get_group = function () { function b(c) { d[c] = function () { call2_args = arguments; call2 = [c].concat(Array.prototype.slice.call(call2_args, 0)); a.push([e, call2]); }; } for ( var d = {}, e = ["get_group"].concat( Array.prototype.slice.call(arguments, 0)), c = 0; c < j.length; c++) b(j[c]); return d; }; b._i.push([e, f, c]); }; b.__SV = 1.2; e = f.createElement("script"); e.type = "text/javascript"; e.async = !0; e.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === f.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js"; g = f.getElementsByTagName("script")[0]; g.parentNode.insertBefore(e, g); } })(document, window.mixpanel || []);
 
    // Create an instance of the Mixpanel object
    mixpanel.init("YOUR_PROJECT_TOKEN", {
        autocapture: true,
        track_pageview: true,
        record_sessions_percent: 100, //records 100% of all sessions
        record_heatmap_data: true,
    });
</script>
```

Events we report:
open page
start tool (with tool name)
end tool