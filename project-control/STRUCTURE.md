# Structure

This file stores the current working truth about the site structure.

## Platform

- Static HTML + CSS site
- Firebase Hosting handles public hosting
- Firebase Functions handle selected `/api/*` routes

## Languages

- ET is the default language at `/`
- RU lives under `/ru/`
- EN lives under `/en/`

## Main content areas observed in the repository

- home
- services
- prices
- contact
- gallery
- about
- privacy / terms

## Important folders

- `services/`
- `ru/`
- `en/`
- `.github/`
- `partials/`
- `functions/`
- `scripts/`
- `project-control/`

## Current structure rules

- ET remains the default language root
- localized pages should stay structurally aligned where practical
- service-page expansion should follow an approved page map before bulk generation
- no new URL should be introduced without checking redirects, existing equivalents, and intent overlap
- `partials/` and `temp_docs/` are source/build artifacts, not public runtime surface
- root-level maintenance scripts are not part of the default workflow unless a task explicitly says so
- `ru/services/service.html` is a legacy shell and should not be treated as the canonical current service-page implementation

## Review-required changes

Review is required before merge if a task changes:

- URL structure
- redirects
- canonical or hreflang logic
- routing behavior
- forms or lead flow
- Firebase config
- shared service-page structure
