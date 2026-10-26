# Maintenance price corrections — 2026-10-26

The owner supplied a maintenance-page screenshot and requested the corrections on all three languages: 45 → 50 €, 65 → 70 €, from 43 → from 45 €, and 55 → 80 €.

## Scope

- RU: updated the maintenance service object only, including summary stats, service cards, pricing rows, and the endoscopy FAQ/JSON-LD. The general title “ТО от 45 €” remains accurate because several maintenance jobs now start at 45 €.
- ET/EN: these existing pages had no prices. Added the same eight pricing rows and the labour/materials note, translated directly from the Russian maintenance pricing block. Added optional pricing output to the existing default service template; pages without pricing rows keep their output unchanged.
- All service URLs, forms, contact data, unrelated service prices and hosting configuration are preserved.

## Final amounts, in row order

| Service | Price | Basis |
|---|---:|---|
| Oil and oil filter replacement | 50 € | labour |
| Oil and main filters replacement | 70 € | labour |
| Spark/glow plug replacement | from 45 € | labour |
| Brake fluid replacement | from 45 € | labour |
| Coolant replacement | from 45 € | labour |
| Separate computer diagnostics | from 50 € | unchanged |
| Endoscopic inspection with photo report | from 70 € | updated wherever previously 65 € |
| Full vehicle condition inspection with basic computer diagnostics | 80 € | updated |

## Translation review

Scope: eight ET/EN rows and their pricing note; no full-page translation is claimed. Review mode: self-review, same context. English uses neutral international wording with “labour”, matching existing site conventions. The price basis, lower bounds, photo report, basic computer diagnostics, separate material charges and service interval reset are preserved.

Terminology: масляный фильтр → oil filter / õlifilter; свечи зажигания или накаливания → spark plugs or glow plugs / süüte- või hõõgküünlad; антифриз → coolant / jahutusvedelik; технический осмотр in this service context → vehicle condition inspection / tehnilise seisukorra kontroll (not a claim to provide statutory roadworthiness testing).

The targets retain their existing layout, metadata and language routes. Since the pages are generated from JavaScript and the ET/EN layouts already differ from RU, verification covers the bounded new pricing blocks and generator diff, rather than claiming full-page structural equivalence. No unresolved major findings in the edited blocks under this self-review.

## Verification

- Quality gate passes for 92 HTML pages.
- Browser checks passed for all three pages at 320, 390 and 1440 px: eight ordered prices, notes, no horizontal overflow, and retained forms.
- RU summary, service-card prices and endoscopy FAQ also verified.
- A second build changes no files. Screenshot and browser evidence are under tmp/maintenance-prices/.

Publication follows the existing Firebase Hosting workflow and this clone's unchanged main-only commit/push hooks. Post-publication verification checks the three affected URLs.
