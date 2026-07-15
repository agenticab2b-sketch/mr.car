# Engine repair page localization

- Owner: Codex
- Branch: `codex/engine-page-localization`
- Status: complete and reviewed; owner-approved for production

## Scope

- use the complete Russian engine-repair page as the semantic source;
- replace the short Estonian and English engine-repair objects with full `service-deep-dive-v2` pages;
- write native Estonian and European/British automotive-service copy rather than literal translations;
- preserve the existing URLs, global navigation, lead form and Firebase configuration;
- keep claims aligned with the reviewed Russian page and remove unsupported legacy promises;
- rebuild and verify generated HTML, schema.org, hreflang, internal links and responsive rendering.

## URLs

- RU reference: `/ru/services/remont-dvigatelya`
- ET target: `/services/mootoriremont`
- EN target: `/en/services/engine-repair`

## Out of scope

- changing the Russian source page;
- changing URLs or redirects;
- deploying to production without a separate owner instruction.

## Verification

- `node build.js` completed successfully and is idempotent;
- `npm run quality-gate` passed for 92 HTML files;
- ET and EN source/render parity verified for all deep-page sections, anchors and cross-links;
- JSON-LD verified as valid `AutoRepair`, `Service`, `FAQPage` and `Article` graphs;
- canonical and `hreflang` links verified for ET, RU, EN and `x-default`;
- Russian reference output remains unchanged;
- desktop (1280×720) and mobile (375×844) browser checks passed with no horizontal overflow, missing images or console warnings/errors;
- English FAQ interaction verified;
- production integration and Firebase deployment were explicitly approved by the owner in the follow-up request on 2026-07-15.
