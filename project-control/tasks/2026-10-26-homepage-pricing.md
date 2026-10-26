# Homepage popular service prices — 2026-10-26

The owner reported that RU/EN homepages still displayed different popular services from ET. Confirmed directly from the live HTML of /, /ru/ and /en/; the discrepancy existed in the published source, rather than being inferred to be a browser cache issue.

## Change

- Synchronize the same three services across the three homepages: engine oil/oil filter change, Webasto diagnostics and fault-code reading/clearing.
- Oil labour is 50 EUR, drawn from each maintenance page's first pricing row. Explicitly state oil/filter are charged separately, matching the updated maintenance pricing note.
- Preserve the reference ET Webasto teaser rate of from 45 EUR and its diagnostics/technical inspection description.
- Fault-code reading/clearing is 25 EUR fixed, matching the reviewed diagnostics pages. Replace the stale ET teaser of from 45 EUR as well as obsolete RU/EN diagnostics and tire-service cards.
- Correct ET “luugemine” to “lugemine”.
- Centralize generation in build.js so a normal build synchronizes all three blocks and derives the oil price from the maintenance data.

## Review

Self-review, same context. Only these three homepage teaser blocks and their generator are changed. Each language retains its local wording and currency formatting. Terms and exclusions follow existing reviewed maintenance/diagnostics content. ET/EN are translated directly from the corresponding service meaning; no whole-homepage translation is claimed.

## Verification

- Browser checks at 1440, 390 and 320 px for all three languages: three equivalent services, prices [50,45,25], oil/materials condition and no horizontal overflow.
- npm run quality-gate passes for 92 HTML files.
- A second build changes no files; homepage pricing synchronization reports 0 updates.
- Screenshots and evidence saved under tmp/homepage-prices/. Reveal animations are disabled only for stable final screenshots.
- Publication uses the existing Firebase workflow. Post-deployment checks compare all three live teaser blocks against the prepared local versions.
