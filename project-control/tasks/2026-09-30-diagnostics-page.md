# Russian diagnostics service page

- Owner: Codex
- Branch: prepared on `codex/diagnostics-page`; published through `main` as required by this clone's Git hooks.
- Status: implementation and site integration verified
- Source: user-supplied `MrCar_diagnostika_RU_final.docx` and subsequent owner-approved copy revisions.

## Scope

Replace the existing placeholder at `/ru/services/diagnostika` with the full Russian text supplied by the owner. Preserve the shared navigation, service sidebar, request form and Firebase lead flow. Reuse the site's Inter typography, navy surfaces, amber accents, square borders and service-page components.

The DOCX is editorial source material. Its SEO notes, CTA labels and internal-link markers are not public body copy. No translations or new service URLs are part of this task.

## Implementation

The page is maintained as standalone HTML, like the site's existing custom service pages. Its service-data entry uses `standalone: true` to preserve its editorial layout during regeneration while retaining navigation and sitemap inclusion. Page-specific layout rules are isolated in `ru/services/diagnostika.css`; shared CSS is unchanged. The existing electrical diagnostics photograph is reused.

## Site integration — 2026-10-01

Checked against GitHub `origin/main` at `7e81b5a`. The existing clean URL `/ru/services/diagnostika` is retained. Desktop and mobile service menus already link to it on all 31 Russian pages with the shared navigation; no duplicate menu item is added.

- Replaced the catalog's development placeholder with the final scope and 25 € / from 50 € distinction. Added a short `listingDescription` fallback to the generator so the catalog can use concise copy without shortening the page hero.
- Corrected two homepage diagnostic links that pointed to the maintenance page and aligned the featured card with the approved diagnostic scope and prices.
- Added contextual incoming links from electrical repair, engine repair/endoscopy, gearbox repair, general car repair, pre-purchase inspection and all three price-list tabs.
- Retained existing relevant links from maintenance, oil change and timing belt/chain replacement. Verified incoming content links from 11 pages, including homepage, catalog and prices.
- Updated the old standalone computer-diagnostics price on the maintenance page from 35 € to the approved starting price of 50 €.
- Fixed the Russian catalog mobile submenu using the wrong `active` class instead of the shared `is-open` class; closing and Escape now reset it consistently.
- Ran the maintained full generator and updated sitemap modification dates for changed pages. ET and EN content is unchanged.

## Verification

- `npm run quality-gate`: passed for all 92 HTML files.
- 126 paragraph, heading and table-cell checks against the DOCX plus owner-approved revisions passed. All remaining public content and prices retained; editor notes and placeholder text excluded.
- One H1, valid local assets/links/anchors, no duplicate IDs, eight FAQ entries matching JSON-LD, and seven pricing rows verified. Structured opening hours corrected to the supplied 09:00–18:00.
- Browser checks at 320, 375, 390, 768, 1024 and 1440 px: no text clipping or horizontal overflow; no JavaScript errors or missing local assets. Desktop/mobile screenshots reviewed.
- Anchor navigation, keyboard/mouse FAQ controls, mobile service navigation and mobile menu passed.
- Existing form validation and successful submission tested using an intercepted local `/api/lead` response. No real lead sent.
- Full generator simulated with writes intercepted in memory: diagnostics content and page stylesheet preserved; sitemap URL retained; other locale pages remain generated normally.
- Page-specific mobile fixes cover the phone-link hit area and wrapping of the longer submit label.
- Full build output is synchronized and idempotent, matching the GitHub Actions generated-output check.
- Incoming links, their destination anchors, all three price tabs, the shared menus, catalog filter and clean URL/sitemap registration verified. Downloadable HTML matches the final page body and embeds its styles, fonts, hero and icons.

The owner explicitly requested integration into the site after approving the page copy. This clone's `pre-commit` and `pre-push` hooks permit only commits on `main` and `main -> origin/main`; the feature-branch commit/push was rejected before any remote change. After local content, build and browser review, the verified changes are published through that enforced path and the existing Firebase workflow. The hooks are unchanged.
