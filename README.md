# Mr.Car Autoremont Tallinn — website

Static website (HTML + CSS) deployed via Netlify with auto-deploy from GitHub.

## Languages (planned)
The website will be multilingual:
- **ET (Estonian)** — primary language (default)
- RU (Russian)
- EN (English)

Target structure (recommended):
- `/` → Estonian (default)
- `/ru/` → Russian
- `/en/` → English

Example pages:
- `/` (ET)
- `/ru/`
- `/en/`
- `/ru/contacts/`, `/en/contacts/`, etc. (if needed later)

## Repository structure (current)
- `index.html` — main entry point (Netlify)
- `style.css` — styles
- (optional later) `assets/` — images, icons, fonts

## Current deployment (Netlify)
This repo is connected to Netlify.
Every push to the `main` branch triggers an automatic deploy.

Netlify settings for the current static version:
- Branch: `main`
- Base directory: *(empty)*
- Build command: *(empty)*
- Publish directory: `.`

## How to update the site
1. Edit files
2. Commit & push to `main`
3. Netlify redeploys automatically

## Multilingual rollout plan (static phase)
When adding RU/EN in the static version, keep the structure clear:
- ET remains the default entry (`/`)
- RU and EN live in their own folders (`/ru/`, `/en/`)
- Use consistent URLs for the same page across languages (e.g. Contacts)

A simple language switcher should link to:
- ET → `/`
- RU → `/ru/`
- EN → `/en/`

## Planned migration to Next.js (future)
When migrating to Next.js, ensure multilingual support keeps ET as the default language and preserves stable URLs:
- Default language: ET
- Secondary languages: RU, EN
- Prefer the same URL layout: `/`, `/ru/`, `/en/`

Recommended workflow:
- Keep `main` stable
- Create a staging branch (e.g. `nextjs`) for the migration
- Deploy previews and switch production only when everything matches the static version
