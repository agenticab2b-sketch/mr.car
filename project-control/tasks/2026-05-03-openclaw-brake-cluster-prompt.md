# Title

Prompt for OpenClaw - RU brake parent page

## Status

`ready`

## Owner

Codex

## Reviewer

Owner

## Goal

Provide a ready-to-send prompt that prepares OpenClaw to replace the Russian mixed `ходовая + тормоза` page with one Russian parent page: `Ремонт и обслуживание тормозных систем в Таллине`.

## Prompt

```text
You are working in the Mr.Car repository.

Before editing anything, read these files in this order:

1. project-control/README.md
2. project-control/STRUCTURE.md
3. project-control/DECISIONS.md
4. project-control/ANTIGRAVITY_ONBOARDING.md
5. project-control/ANTIGRAVITY_RULES.md
6. project-control/tasks/2026-05-03-openclaw-brake-cluster.md
7. build.js
8. ru/services/services-data.js
9. ru/services/remont-kpp.html
10. ru/services/remont-akpp.html
11. ru/services/remont-mkpp.html
12. ru/services/hodovaya-tormoza.html
13. firebase.json

Treat current repo files and the brake task file as stronger than chat history.

OpenClaw is on an external server and must not rely on an old local checkout.

Start from the current GitHub repository. If the repo is not already present on the server, clone it fresh:

git clone https://github.com/agenticab2b-sketch/mr.car.git mr-car-openclaw
cd mr-car-openclaw

If a checkout already exists on the server, verify it before editing:

git remote -v
git fetch --prune origin
git status --short --branch
git rev-parse HEAD
git rev-parse origin/main

Required origin:

https://github.com/agenticab2b-sketch/mr.car.git

If the existing server checkout is dirty, behind, ahead, has a different remote, or cannot fast-forward cleanly to origin/main, do not edit it. Clone a fresh copy into a new directory and work there.

Then verify the fresh repo:

git fetch --prune origin
git switch main
git pull --ff-only origin main
git status --short --branch
git rev-parse HEAD
git rev-parse origin/main
npm run quality-gate

Do not work directly on main. If you are on main and the worktree is clean, create one implementation branch, for example:

git switch -c ag/brake-parent-ru

If HEAD and origin/main differ, or if the worktree is dirty before starting, stop and report the exact state.

Important scope:

- Current implementation is Russian only.
- Current implementation creates only the parent page.
- Replace /ru/services/hodovaya-tormoza with the parent page Ремонт и обслуживание тормозных систем в Таллине.
- Create /ru/services/tormoznaya-sistema as the parent page.
- Do not create Дисковые тормоза now.
- Do not create Барабанные тормоза now.
- Do not create ET or EN brake pages now.
- Do not replace /services/veermik-pidurid or /en/services/chassis-brakes now.
- Suspension/chassis will get a separate page later, outside this task.

Create only this RU page:

- URL: /ru/services/tormoznaya-sistema
- file: ru/services/tormoznaya-sistema.html
- H1: Ремонт и обслуживание тормозных систем в Таллине
- compact menu label where needed: Обслуживание и ремонт тормозов
- role: broad brake-service parent page

Reserved future child pages, link to them now but do not create their files now:

- /ru/services/diskovye-tormoza, H1: Дисковые тормоза
- /ru/services/barabannye-tormoza, H1: Барабанные тормоза

Use direct href links to these two child URLs in the parent-page choice block, in the parent-page Подробнее CTAs, in the RU top megamenu, and on the RU homepage if the current homepage pattern supports those child links.

Do not create placeholder child HTML files just to satisfy those links. If npm run quality-gate fails only because these two child pages do not exist yet, report that exact temporary failure and stop. Fix or report any other quality-gate failure.

Repository requirements:

- Replace the old hodovaya-tormoza service entry in ru/services/services-data.js with the new brake parent entry.
- Shared allSlugs for future parity can be:
  { ru: "tormoznaya-sistema", ee: "pidurisusteemi-hooldus-ja-remont", en: "brake-system-service-and-repair" }
- Do not add diskovye-tormoza or barabannye-tormoza as service-data rows in this parent-page task unless the owner explicitly expands the task to create those pages too.
- Do not edit ee/services-data.js or en/services/services-data.js in this RU-only pass unless there is a clearly necessary technical reason.
- In build.js:
  - add future ET key pidurisusteemi-hooldus-ja-remont to SERVICE_NAV_ORDER near the old suspension/brakes position so the new RU parent sorts correctly
  - add tormoznaya-sistema to SKIP_FILES
  - add /ru/services/tormoznaya-sistema to STATIC_SERVICE_SITEMAP_PATHS.ru
  - do not add child static sitemap paths until those child pages exist
- In firebase.json, add 301 redirects:
  - /ru/services/hodovaya-tormoza -> /ru/services/tormoznaya-sistema
  - /ru/services/hodovaya-tormoza.html -> /ru/services/tormoznaya-sistema
- Update Russian static headers, mobile menus, service listings, sidebars, sitemap, and internal links so no public RU link points to /ru/services/hodovaya-tormoza.
- Do not use update_menus.py as-is; it is old flat-menu tooling and can break submenu behavior.

Mandatory design transfer:

- Use /ru/services/remont-kpp as the mandatory visual and structural example.
- Transfer the design system, vibe, rhythm, block sequence, color palette, and Mr.Car MD/Iconify visual language to the new brake page.
- The page must feel like a close sibling of Ремонт КПП:
  - same dark technical mood
  - same orange accent and contrast logic
  - same section density and pacing
  - same sd-* + gb-* style language where appropriate
  - same local navigation treatment
  - same gearbox-style choice cards, adapted to Дисковые тормоза and Барабанные тормоза
  - same trust, urgency, diagnostics, FAQ, final CTA, form, and map treatment
- Do not make a generic service article. Build it as a designed Mr.Car service page.

Page shell requirements:

- include GTM/noscript, canonical, valid metadata, JSON-LD, navbar, mobile menu, sd-hero, breadcrumbs, mobile sidebar, sd-main, global service sidebar, contact form at #request, map, floating contact button, and /api/lead form wiring
- this is RU-only now: do not add ET/EN hreflang links to brake equivalents that do not exist yet
- clean URLs only; no .html in public internal links, canonical, hreflang, or sitemap

Content requirements:

- Use the full approved source content from project-control/tasks/2026-05-03-openclaw-brake-cluster.md.
- Keep the approved H1, URL, block order, prices, reviews, contact details, and JSON-LD meaning.
- Required block order:
  1. Hero
  2. Stats strip
  3. Anchor navigation
  4. Intro with gearbox-style choice cards linking to Дисковые тормоза and Барабанные тормоза
  5. Causes
  6. Symptoms
  7. Why not delay
  8. Five-step process
  9. Services and prices
  10. Disc and drum sections with direct Подробнее links
  11. Reviews
  12. Trust bar
  13. FAQ
  14. Form
  15. Map/contact

Verification after implementation:

node build.js
npm run quality-gate
git status --short

Then report:

1. files changed
2. how the RU menu now points to the parent page and prepared child links
3. how the old RU mixed URL redirects
4. whether sitemap contains /ru/services/tormoznaya-sistema and excludes /ru/services/hodovaya-tormoza
5. whether quality-gate passed, or whether it failed only because the two future child pages are linked but not created yet
6. confirmation that disc/drum files were not created
7. any open points

Stop instead of guessing if:

- the branch or repo state is unclear
- a URL conflict appears
- old RU mixed links remain after attempted replacement
- a bulk menu update changes unexpected areas
- you are about to create the disc or drum page
- quality-gate fails for anything other than the two approved temporary child links
```

## Notes

Send the prompt as a single parent-page task. The disc and drum pages must be separate future tasks, but links to their reserved URLs are intentionally allowed now.
