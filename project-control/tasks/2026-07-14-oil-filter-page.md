# Oil and filter service page

- Owner: Codex
- Branch: `codex/oil-filter-page`
- Scope: deepen the existing RU/ET/EN oil-change service pages without changing their URLs.

## Approved URLs

- ET: `/services/olivahetus`
- RU: `/ru/services/zamena-masla`
- EN: `/en/services/oil-change`

## Work

- replace the current short service data with a full `service-deep-dive-v2` page in all three languages;
- use the existing Mr.Car design system and generator;
- use the current official price list: oil + oil filter labour 45 €, oil + all filters labour 65 €;
- keep materials separate from labour pricing and state approximate service duration accurately;
- add useful technical, local, SEO, AEO and FAQ content without copying competitor wording;
- preserve clear intent separation from transmission-oil services and the parent maintenance page;
- rebuild and verify navigation, sitemap, hreflang, schema, links and responsive rendering.

## Out of scope

- changing URLs or redirects;
- changing the lead form or Firebase configuration;
- creating transmission-oil pages.

## Status

Completed and reviewed on `codex/oil-filter-page`. Production integration and Firebase deployment were explicitly approved by the owner in the follow-up request on 2026-07-14; no Firebase configuration changes are required.

## Verification

- official Mr.Car price page checked on 2026-07-14;
- `node build.js` completed successfully;
- `npm run quality-gate` passed for 92 HTML files;
- RU/ET/EN canonical URLs, hreflang, internal links and JSON-LD checked;
- browser verification passed on desktop and at a 375 × 844 mobile viewport;
- no console errors, error overlays or horizontal overflow detected.
