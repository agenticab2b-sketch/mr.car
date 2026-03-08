# Implementation Plan: Audit and Quality Gate Rollout

## Purpose
- Audit the current `mr.car-main` website.
- Establish a clean baseline before introducing blocking checks.
- Roll out a practical Quality Gate without locking the project on legacy issues.

Business goal of the site:
- local SEO for Tallinn, Estonia;
- trust and credibility for the auto service;
- conversion into calls and form submissions.

Technical goal of this plan:
- identify current real defects;
- separate legacy issues from future regressions;
- introduce automated checks only after normalization.

## Current Delivery Flow
1. Antigravity or Gemini CLI prepares changes.
2. Changes go to GitHub.
3. GitHub triggers Firebase deployment.
4. Firebase publishes the site to the live domain.

Main risk:
- there is no reliable blocking layer between "change prepared" and "change deployed".

## Operating Model
Roles:
- Antigravity / Gemini CLI: fast content, layout, and page generation work.
- Codex: audit, technical validation, regression control, SEO and routing hardening, Quality Gate implementation.
- Project owner: confirms business truth.

Business truth includes:
- address, phone, hours, services, prices, offers, languages, real team facts, real photos, trust claims.

Work rule:
- no direct production changes from generated output into `main`;
- all meaningful changes go through branch -> review -> checks -> merge -> deploy.

## Audit Scope
1. Routing and indexing
- canonical URLs
- hreflang consistency
- redirects
- `sitemap.xml`
- `robots.txt`
- 404 and non-canonical paths

2. Lead flow
- contact form behavior
- service page form behavior
- server-side validation
- spam resistance
- endpoint reliability

3. Trust and conversion
- reality of visuals and claims
- clarity of CTAs
- consistency of contact information
- language quality on ET / RU / EN pages

4. Delivery and maintainability
- generators vs hand-edited files
- ad-hoc `fix_*` scripts
- CI/CD behavior
- missing automated checks

## Phase Plan
### Phase 0. Audit Freeze and Preparation
Objective:
- stabilize the repository long enough to assess the current state.

Actions:
- avoid direct deploys to `main` during the audit window;
- collect current source of truth for business facts;
- define which environment is treated as production truth;
- confirm whether the local repo matches the current GitHub `main`.

Deliverables:
- confirmed audit target revision;
- confirmed business facts checklist.

Exit criteria:
- the repo under audit is the same one that is deployed or intended for deployment.

### Phase 1. Baseline Audit
Objective:
- determine what is already correct and what is already broken before any Quality Gate becomes blocking.

Actions:
- inspect key ET / RU / EN pages;
- inspect service pages and contact pages;
- inspect Firebase config and functions;
- verify current SEO signals;
- verify current link integrity;
- verify current form path and response behavior;
- classify findings by severity:
  - blocking business risk
  - SEO degradation
  - trust/conversion weakness
  - technical debt without immediate business impact

Deliverables:
- baseline audit report;
- list of confirmed defects;
- list of non-issues that should not consume time.

Exit criteria:
- every future Quality Gate rule maps either to a known-good invariant or to a known-bad legacy issue tracked until fixed.

### Phase 2. Cleanup and Normalization
Objective:
- bring the project into a state where automated enforcement becomes useful.

Priority cleanup order:
1. lead form reliability and safety;
2. canonical / hreflang / redirect correctness;
3. sitemap consistency;
4. removal of route drift and legacy URL leakage;
5. trust-critical content problems;
6. generator and output synchronization issues.

Actions:
- fix current confirmed defects;
- reduce reliance on one-off `fix_*` scripts where possible;
- decide which files are generated artifacts and which are source files;
- align generated output with final production URLs.

Deliverables:
- corrected baseline;
- explicit map of source files vs generated files;
- reduced set of unstable behaviors.

Exit criteria:
- the project can pass a minimal set of critical checks without false failures.

### Phase 3. Soft Quality Gate
Objective:
- introduce automated checks in warning mode before making them blocking.

Initial soft checks:
1. route integrity check
2. canonical and hreflang check
3. sitemap consistency check
4. lead form smoke test
5. generated-files-in-sync check
6. SEO minimum contract check
7. external dependency inventory check

Behavior:
- checks run on pull request;
- failures are visible;
- merge is still possible during calibration if the failure is a known legacy item.

Deliverables:
- first CI-based audit layer;
- failure logs that show what still needs cleanup;
- calibrated thresholds with low noise.

Exit criteria:
- checks are stable and useful;
- false positives are understood and reduced.

### Phase 4. Hard Quality Gate
Objective:
- prevent dangerous regressions from reaching production.

Checks that should become blocking first:
1. no broken critical internal routes
2. no bad canonical / hreflang on key pages
3. `sitemap.xml` matches deployable pages
4. lead forms on key pages complete smoke test
5. generated output stays in sync with source

Checks that may remain warning-only at first:
- Lighthouse budgets
- asset weight thresholds
- number of external requests
- non-critical UI polish issues

Deliverables:
- enforced blocking gate on pull requests and merge path;
- branch protection aligned with critical checks.

Exit criteria:
- a pull request cannot be merged when it introduces a production-critical regression.

### Phase 5. Steady-State Workflow
Objective:
- establish a durable working method across Antigravity, Codex, and the project owner.

Standard workflow:
1. Antigravity prepares change in a feature branch.
2. Codex reviews branch output and fixes structural issues if needed.
3. CI runs all checks.
4. Project owner validates business truth and trustworthiness.
5. Merge to `main`.
6. Firebase deploys only after green checks.

Deliverables:
- repeatable release process;
- lower regression rate;
- less need for emergency patch scripts.

Exit criteria:
- releases are predictable and no longer depend only on manual attention.

## Recommended First Quality Gate Rules
1. Route Integrity
- fail if critical internal links lead to `301`, `404`, or wrong-language targets.

2. Canonical and Hreflang Integrity
- fail if key pages are missing canonical;
- fail if canonical points to legacy `.html` URLs where final clean URLs are expected;
- fail if ET / RU / EN alternates are inconsistent.

3. Sitemap Integrity
- fail if any sitemap URL is non-existent or non-canonical.

4. Lead Form Smoke Test
- fail if forms on `/kontakt`, `/ru/kontakt`, `/en/contact`, and selected service pages do not validate and submit as expected.

5. Generated Output Synchronization
- fail if regeneration changes tracked artifacts unexpectedly.

## Audit Artifacts
- baseline findings report;
- source-of-truth checklist for business facts;
- source-vs-generated file map;
- Quality Gate specification;
- CI implementation plan;
- open issues list separated into:
  - must-fix before hard gate;
  - acceptable warning items;
  - backlog items.

## Risks
Main rollout risks:
- existing legacy problems may be accidentally treated as valid baseline;
- too many noisy checks can make the gate ignored;
- business facts may be technically consistent but factually wrong;
- generated files may overwrite manual fixes if ownership is not clarified.

Mitigation:
- baseline audit before blocking checks;
- phased rollout;
- owner approval on all real-world facts;
- clear decision on what is generated and what is edited directly.

## Immediate Next Steps
1. confirm this repo revision as the audit baseline;
2. run the baseline audit and record findings;
3. fix current critical defects;
4. define the first 5 automated checks;
5. implement soft gate in GitHub Actions;
6. promote critical checks to hard gate after stabilization.

## Definition of Success
- the site is technically aligned with its actual production truth;
- critical SEO signals are correct and stable;
- the lead form is reliable and protected against obvious regressions;
- future changes from Antigravity cannot silently break production-critical behavior;
- deploys become controlled rather than reactive.
