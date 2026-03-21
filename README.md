# Mr.Car Website

Mr.Car is a static multilingual auto service website built with HTML, CSS, and JavaScript.

Production hosting runs through Firebase Hosting, and selected backend routes are handled by Firebase Functions.

## Current site model

- ET is the default language at `/`
- RU lives under `/ru/`
- EN lives under `/en/`
- service pages live under:
  - `/services/`
  - `/ru/services/`
  - `/en/services/`

This repository is the active source tree for the current static site. It is not a single-page app and it is not currently a Next.js app.

## Source of truth

Use these files as the working truth:

- site structure and working rules:
  - [project-control/README.md](./project-control/README.md)
  - [project-control/STRUCTURE.md](./project-control/STRUCTURE.md)
  - [project-control/DECISIONS.md](./project-control/DECISIONS.md)
- hosting and public routing:
  - [firebase.json](./firebase.json)
- backend and lead flow:
  - [functions/index.js](./functions/index.js)
- CI/deploy behavior:
  - [.github/workflows/firebase-hosting-pull-request.yml](./.github/workflows/firebase-hosting-pull-request.yml)
  - [.github/workflows/firebase-hosting-merge.yml](./.github/workflows/firebase-hosting-merge.yml)

If a document conflicts with the actual shipped site code or Firebase configuration, the code and config win until the docs are updated.

## Important folders

- `/` — default ET pages
- `/ru/` — RU pages
- `/en/` — EN pages
- `/services/`, `/ru/services/`, `/en/services/` — service pages
- `/functions/` — Firebase Functions
- `/scripts/` — utility scripts
- `/partials/` — source fragments for generation/build work, not public runtime surface
- `/project-control/` — lightweight operating docs for the team

## Script ownership

### Public runtime assets

These files are part of the live site surface and may be referenced directly by public pages:

- `style.css`
- `gallery.css`
- `gallery.js`
- `services-listing.css`
- `gallery-data.json`
- `ee/services-data.js`
- `ru/services/services-data.js`
- `en/services/services-data.js`
- `scripts/services-filter.js`

### Active operational scripts

These scripts are part of the current workflow or clearly retained tooling:

- `.github/scripts/quality-gate.js`
- `build.js`
- `update-headers.js`

Run them intentionally and review their effects before deploy.

### Legacy or one-off maintenance scripts

The repository root also contains many historical scripts such as:

- `fix_*`
- `update_*`
- `check_*`
- `generate_*`
- `clean_*`
- `extract_*`

These are not the default workflow and should not be run casually. Treat them as legacy maintenance tooling unless a task explicitly calls for them and the scope is reviewed first.

## Deploy path

1. Work in a feature branch.
2. Review before merge for routing, SEO-global, forms, Firebase, and deploy-related changes.
3. Merge to `main`.
4. Deploy only from reviewed `main`.

Firebase Hosting now includes a minimal predeploy quality gate in CI before preview/live deploy.
