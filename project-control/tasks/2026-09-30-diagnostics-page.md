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

## Pre-index technical SEO audit — 2026-10-02

The published RU page returns HTTP 200 without a redirect. HTTP, non-www, `.html` and trailing-slash variants permanently redirect to its self-canonical HTTPS/www URL. Live robots.txt permits crawling, no `noindex` meta or X-Robots-Tag blocks the page, and sitemap.xml contains one canonical entry. Title, description, Russian language, one H1, static HTML content, breadcrumb microdata, social metadata and 31 live internal destination URLs were checked.

Google Rich Results Test successfully fetched the smartphone version and initially reported five valid items (breadcrumbs, two LocalBusiness and two Organization interpretations), with optional-property warnings. The Service provider now references the complete AutoRepair node through one stable `@id`, removing the duplicate incomplete business description. No business price range was invented to silence an optional warning.

Verified the actual Mr.Car Google Maps listing at Kopli 82a: latitude `59.450346`, longitude `24.7115448`. Replaced this page's old coordinates and old embed with the official Google Maps embed for that business. The page's text, prices, form and layout are preserved.

Deferred the parser-blocking Iconify loader and gave the preloaded hero image high fetch priority. Initial mobile Lighthouse lab scores were SEO 100/100 and performance 44/100 (FCP 3.8 s, LCP 7.8 s, TBT 820 ms, CLS 0); these are lab observations, not field Core Web Vitals or a guarantee of indexing. Broader mobile performance optimization remains a follow-up.

The ET and EN diagnostics URLs respond successfully and have reciprocal hreflang, but their body content remains a development placeholder, not a translation of the completed RU page. Translation work is outside the current RU scope. FAQ Schema.org markup still matches the eight visible answers; Google retired FAQ rich results from May 7, 2026, so their absence from Rich Results Test is expected. Indexing requests are left to the owner as requested.

## ET and EN translation — 2026-10-05

Translated the approved RU page directly RU→ET and RU→EN into the existing URLs `/services/diagnostika` and `/en/services/diagnostics`, replacing the development placeholders. Structure, IDs, classes, form, Firebase lead flow, page stylesheet (`/ru/services/diagnostika.css`, language-neutral), hero image, prices and conditions match the RU page. Shared header, mobile menu, service sidebars and footer come from the generated locale pages. Content links point to the locale equivalents of the RU links (engine, electrical, transmission, Webasto, suspension, pre-purchase inspection); canonical, og:url, JSON-LD URL, breadcrumbs, form `lang` and Google Maps embed language are localized; hreflang graph unchanged.

- `ee/services-data.js` and `en/services/services-data.js`: diagnostics entries marked `standalone: true` with final hero, listing and SEO copy; `node build.js` regenerated `teenused.html` and `en/services.html` catalog cards. Sitemap lastmod for both URLs set to 2026-10-05.
- Terms: veakoodide lugemine ja kustutamine / fault code reading and clearing; arvutidiagnostika / computer diagnostics; juhtplokid / control units; reaalajas parameetrid / live data; veermiku diagnostika / suspension diagnostics; ostueelne kontroll / pre-purchase inspection; администратор → administraator / service adviser. EN locale: British (tyre, labour), prices as €25.
- Checks: page_guard on translated content (no digit, placeholder, JSON-LD or slot findings; justified data-label/lang overrides; script diff limited to four UI strings); no Cyrillic except the language switcher; JSON-LD parses with 8 FAQ entries; `npm run quality-gate` passed for 92 files; no horizontal overflow or JS errors at 320–1440 px.
- Review: self-review only (no native ET editor). ET/EN homepage and price-list contextual links to the diagnostics page were not changed.

### Translation review — 2026-10-05 (self-review, same context; no independent reviewer)

Full coverage of title, meta, JSON-LD, all visible copy, attributes, form, map, FAB and script strings (282 aligned segments per language). Prices, units, price basis and conditions match RU in both languages. Verdict before revision: REVISE; after revision: no open critical/major findings (not native-approved).

- Fixed (major, ET): FAQ «Не каждая … неисправность формирует код» was «Iga … rike ei tekita veakoodi» (readable as "no fault sets a code") → «Mitte iga … rike ei tekita veakoodi».
- Fixed (minor, ET): «diagnostikale spetsialiseerunud meister» → «selle valdkonna spetsialist» (page + services-data); «aktuaalsete veakoodidega» → «hetkel salvestatud veakoodidega».
- Fixed (minor, EN): endoscopy sentence with mixed construction rewritten.
- Open: SOURCE-ISSUE — «лимит расходов без дополнительного согласования» translated as a limit within which no further approval is needed; owner to confirm. Unverified terms: administraator / service adviser (администратор), kriimustused silindriseintel (задиры), ladestused (отложения). Site uses both «Mr.Caris» and «Mr.Car-is».

## Localization completed and reviewed — 2026-10-14

- Working branch: `codex/diagnostics-localization`. Existing uncommitted ET/EN drafts and catalog/data changes were preserved, backed up under `tmp/diagnostics/localization-2026-10-14/before/`, then completed and reviewed. No commit, push or deployment was performed for this translation task.
- Approved source: fetched the live RU page and confirmed an exact content match to the local file before editing. Both translations were read completely against Russian, then edited in the target language and compared again. Review mode: **self-review, same context**; no separate agent or native human approval is claimed. Verdict: **READY for local review and publication**, with post-deployment checks still to be run after publication.
- Preserved all seven prices and their bases (25 €, from 50 €, from 15 € per cylinder, 80 €), the 20+ year specialist experience, conditional programming/software-update availability, electric-vehicle/high-voltage exclusions, agreement of extra work, and the limits of endoscopy. Corrected ET paint-coating terminology (`lakikihi` → `värvikihi`), clarified cylinder scoring descriptively, and edited EN calques (`fully in order`, `niche specialist`, `finished car`). EN uses `engine borescope inspection`; technical equipment names remain intact.
- Source spending-limit wording is rendered as a cap within which further approval is not required. No additional approval mechanism was invented; the separate paragraphs requiring agreement of additional work remain. This records the interpretation of the original phrase rather than silently changing the Russian offer.
- SEO: separate existing target URLs, `lang`, self-canonical, translated title/description/OG/Twitter, localized breadcrumbs, static indexable content, synchronized eight-question FAQ JSON-LD, one shared complete AutoRepair entity with a referenced provider, correct business coordinates, reciprocal ET/RU/EN/x-default hreflang, and one sitemap entry per language with `lastmod` 2026-10-14. Existing menu/catalog links include both target pages. No redirects, Firebase settings or real lead handler changed.
- Fixed the desktop/mobile language-switch links on these **three diagnostics pages only**, and preserved that behavior in `build.js`. Other global navigation and its partials keep their existing behavior. The only RU HTML change is six language-switch hrefs; all Russian text, metadata, schema, styles and functional scripts match the fetched published source. Its sitemap date reflects the link update.
- Technical evidence: the skill's conservative `page_guard` checked 569 aligned editorial/head/form/map/footer/FAB elements plus scripts, with 246 text slots per language. Raw `CODE_CHANGED` findings are retained in the reports and resolved by comparing all executable code after reverting exactly four localized UI string occurrences. No structural, number, placeholder, business-data, attribute or JSON-LD discrepancies remain. Unchanged-copy warnings were reviewed as equipment names, contacts, identifiers, branded footer text and site-standard English `Email`, not untranslated service copy. Only the intentional language-switch name `Русский` remains Cyrillic.
- Local route/asset checks: 67 unique URLs return 200; local file targets and fragment anchors verified. Build synchronization/idempotence passed; the full site quality gate passed for 92 HTML files. The standalone entries preserve all translated content and the shared language-neutral diagnostics stylesheet during regeneration.
- Browser review: both languages inspected from narrow mobile to desktop. Requested viewport overrides 320/390/1440/1600 corresponded to observed content widths 277/341/1295/1441 in this browser; no horizontal overflow was observed. Hero, long body blocks, pricing, FAQs, service sidebar and full navigation checked. Mobile language switching EN→ET stays on diagnostics. Required-field validation and failure/success messages tested against a **local mock API only**; mock requests carried `lang=et`/`en`, existing honeypot/timestamp and upload field names. No real lead or attachment was transmitted. No browser JavaScript errors were reported during these checks.
- Deliverables: `services/diagnostika.html`, `en/services/diagnostics.html`; standalone review copies `tmp/diagnostics/MrCar_diagnostika_ET.html` and `tmp/diagnostics/MrCar_diagnostics_EN.html` embed fonts, CSS, the hero and 38 icons. Exported form submission is disabled and points to the live contact form. Glossary: `project-control/tasks/2026-10-14-diagnostics-localization-glossary.json`. Source inventory, exact policies, raw/resolved guard reports, revision pairs, HTTP checks and screenshots: `tmp/diagnostics/localization-2026-10-14/`.

The technical preparation is complete locally. Production Google fetch/structured-data testing and Search Console indexing are pending publication; no Google indexing result is claimed. Broader mobile performance optimization remains the follow-up identified in the RU audit, not a completed performance claim for these new pages.

## Publication authorized — 2026-10-14

The owner explicitly requested publication of the prepared ET/EN pages. Reconfirmed all 92 HTML quality checks, bilingual technical integrity, build synchronization and the change scope; `origin/main` matches the starting commit `4572be8`, with no intervening remote changes. This clone's unchanged hooks only allow commits on `main` and pushes `main -> origin/main`, so the reviewed localization is published through that enforced path and the existing Firebase workflow. No real lead submission or Search Console indexing request is part of publication. Post-deployment evidence is saved under `tmp/diagnostics/localization-2026-10-14/`.
