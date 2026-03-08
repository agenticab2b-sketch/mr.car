# Baseline Audit Report

Date: 2026-03-08
Audit scope: current local workspace of `mr.car-main`
Status: baseline established, not yet normalized for Hard Quality Gate

## Audit Method
This baseline is based on:
- source review of HTML, JS, Firebase Hosting, and Firebase Functions;
- existing local scripts and artifacts already present in the repo;
- targeted automated scans run locally during the audit.

Executed local checks:
- `node check_links_all.js` -> result: `No broken links found!`
- deployable HTML scan
- canonical / hreflang / legacy URL scan
- external dependency scan
- placeholder social link scan

Limitation:
- Git revision could not be pinned from the shell because `git` is not available in the current tool environment.
- This report therefore applies to the current local tree as audited on 2026-03-08.

## Baseline Facts
Confirmed by local automated scans:
- Deployable HTML pages: 68
- `run.app` hardcoded endpoints in deployable HTML: 45
- Deployable pages using Unsplash assets: 42
- Deployable pages with placeholder social links (`facebook.com/`, `instagram.com/`): 36
- Deployable pages with canonical pointing to `.html`: 3
- Deployable hreflang links pointing to `.html`: 12
- Deployable pages missing canonical: 5
- Deployable pages without JSON-LD schema: 25

Current deployable canonical `.html` pages:
- `meist.html`
- `ru/o-nas.html`
- `en/about.html`

Current deployable pages missing canonical:
- `404.html`
- `ru/services/service.html`
- `ru/services/webasto-simptomy.html`
- `services/webasto-diagnostika.html`
- `services/webasto-sumptomid.html`

## Confirmed Findings

### 1. Lead flow is functional but insufficiently hardened
Severity: High

What is confirmed:
- Forms exist on core pages and include a honeypot plus a timestamp field.
- Server-side validation only requires `carNumber`, `email`, and `message`.
- Anti-spam protection is basic.
- The endpoint is public with open CORS and sends an auto-reply directly to the submitted email address.
- `lead` runs in `us-central1`, not in an EU-near region.

Why it matters:
- the most valuable business action on the site is the lead form;
- current implementation is vulnerable to spam abuse and deliverability problems;
- latency and data locality are not aligned with the Estonia-based use case.

Key references:
- `functions/index.js:280`
- `functions/index.js:316`
- `functions/index.js:395`
- `index.html:1149`
- `index.html:1388`

### 2. SEO routing is still inconsistent in the current baseline
Severity: High

What is confirmed:
- current deployable pages still contain canonical and hreflang values ending in `.html` for the about pages;
- 5 deployable pages are missing canonical entirely;
- there are 45 deployable pages hardcoding `run.app` endpoints instead of using site-local integration paths;
- existing repo scans show 96 legacy route references across the tree, though not all of them are deployable or current-production relevant.

Why it matters:
- this weakens canonical clarity and increases the chance of route drift returning after future edits;
- it makes the future Quality Gate fail immediately unless baseline cleanup happens first.

Key references:
- `meist.html:35`
- `ru/o-nas.html:42`
- `en/about.html:42`
- `sitemap.xml:47`
- `build.js:112`
- `build.js:124`
- `build.js:183`
- `build.js:252`
- `firebase.json:124`
- `firebase.json:154`

### 3. Trust layer is visually polished but not fully authentic
Severity: High

What is confirmed:
- 42 deployable pages use Unsplash imagery;
- 36 deployable pages link to placeholder social profiles;
- homepage team cards use stock-style portraits with first-name placeholders.

Why it matters:
- for a local Tallinn auto service, trust depends heavily on perceived reality;
- stock visuals and placeholder social links create a "designed" impression, but not necessarily a credible local-business impression;
- this directly affects conversion, especially for new visitors deciding whether to call or submit a form.

Key references:
- `homepage.html:217`
- `homepage.html:480`
- `services/autoremont.html:34`
- `services/autoremont.html:277`
- `en/services/general-car-repair.html:670`
- `index.html:1140`

### 4. Delivery remains reactive rather than guarded
Severity: High

What is confirmed:
- root `package.json` has no real audit/test/build gate scripts;
- GitHub workflows deploy but do not validate critical invariants before merge or production deployment;
- the repository still contains many one-off `fix_*` scripts, which indicates post-regression patching as a repeated maintenance pattern.

Why it matters:
- future good SEO and UX work can be silently degraded by later edits;
- the project currently depends more on human attention than on enforced system rules.

Key references:
- `package.json:1`
- `.github/workflows/firebase-hosting-merge.yml:4`
- `.github/workflows/firebase-hosting-pull-request.yml:4`

### 5. Structured data coverage is incomplete
Severity: Medium

What is confirmed:
- 25 deployable pages have no JSON-LD schema in the current repo scan.
- This affects many flat pages, including core informational pages.

Why it matters:
- schema is already part of the project's SEO strategy on some pages;
- partial coverage is better than none, but inconsistent coverage means the site is not yet normalized enough for a strict SEO gate.

Examples from scan:
- `en/index.html`
- `en/contact.html`
- `kontakt.html`
- `meist.html`
- `galerii.html`

### 6. Some crawl errors in repo artifacts appear historical, not currently reproducible in code
Severity: Informational

What is confirmed:
- historical SERanking artifacts report issues such as `/en/privacy/` and related 404s;
- current HTML scan does not reproduce `/en/privacy/` or `/ru/privaatsus/` links in deployable HTML;
- this suggests at least part of the crawl evidence reflects an older state of the project.

Why it matters:
- baseline must distinguish current defects from old artifact noise;
- otherwise the future Quality Gate may be calibrated against stale problems.

Key references:
- `Seranking/links_mrcar.ee_2026-03-06_18-41-53.csv:2`
- `fix_seo_links_batch.js:31`

## Confirmed Strengths
- Firebase Hosting is configured with `cleanUrls` and reasonable static cache headers.
- Core lead forms are present and accessible on key pages.
- Core business contact details are visible and repeated consistently.
- Service-link integrity check passed for the current repo via `node check_links_all.js`.
- The site has strong service-page coverage for local SEO targeting.

Key references:
- `firebase.json:3`
- `firebase.json:16`
- `index.html:1142`
- `en/contact.html:376`
- `services/autoremont.html:282`

## Baseline Readiness for Quality Gate
Hard Gate readiness: No

Reason:
- the current baseline still contains confirmed SEO normalization issues, hardcoded external runtime dependencies, incomplete trust assets, and an under-hardened lead flow.

Soft Gate readiness: Yes

Recommended first Soft Gate checks:
1. route integrity
2. canonical / hreflang integrity
3. sitemap integrity
4. lead form smoke test
5. generated output synchronization

## Must-Fix Before Hard Gate
1. Normalize canonical and hreflang on current deployable pages.
2. Add canonical coverage to deployable pages currently missing it.
3. Remove or encapsulate hardcoded `run.app` endpoints.
4. Harden the lead function against spam and delivery abuse.
5. Replace trust-damaging placeholders: stock team visuals, root social links, non-real trust signals.

## Recommended Immediate Next Actions
1. Treat this report as the working baseline for current local tree.
2. Start cleanup with lead flow and canonical/hreflang normalization.
3. Define the first 5 Soft Gate checks against the cleaned baseline.
4. Only after cleanup, make critical checks blocking in CI.
