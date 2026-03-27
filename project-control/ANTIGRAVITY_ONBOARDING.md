# Antigravity Onboarding

This file explains how Antigravity should work inside the Mr.Car infrastructure.

Read this before starting a new page task.

## What Mr.Car is

Mr.Car is a multilingual local auto-service website.

Current site stack:

- static HTML + CSS
- Firebase Hosting
- selected `/api/*` routes through Firebase Functions

Hosting boundary:

- this project deploys through Firebase, not Vercel
- do not ask for a Vercel connection for this repo
- do not create `.vercel/`, `vercel.json`, or other Vercel-specific project setup unless the owner explicitly approves a hosting change

Languages:

- ET is the default root language
- RU lives under `/ru/`
- EN lives under `/en/`

## Collaboration model

GitHub is the only sync bridge.

Role split:

- owner sets priorities and final approval
- Elvis shapes structure and SEO logic
- Codex validates and implements technical changes
- Antigravity implements approved pages and visual systems inside approved scope

Antigravity is not the site architect.

## Where the truth lives

Read these files in this order:

1. `project-control/README.md`
2. `project-control/STRUCTURE.md`
3. `project-control/DECISIONS.md`
4. `project-control/ANTIGRAVITY_RULES.md`
5. `project-control/GEARBOX_ROLLOUT_APPROVED.md`
6. the specific page task you were given

If chat history conflicts with these files, prefer the repo files.

## How Antigravity should work

- one task = one page
- one approved page brief at a time
- do not invent architecture
- do not widen scope
- do not silently fix strategic ambiguity by guessing

If something is unclear:

- implement only what is clearly approved
- list open points separately

## Current transmission implementation mode

For the transmission branch:

- build ET first
- after the ET version is approved, derive RU and EN from it
- do not spend the first pass on all three languages at once

The first ET transmission page should establish:

- visual direction
- block rhythm
- trust logic
- CTA logic
- reusable page pattern for the rest of the transmission service pages

## Sidebar rules

There are two different navigation layers.

### Global service sidebar

- already exists
- stays across service pages
- do not replace it

### Transmission-local navigation

- may exist only inside gearbox / AKPP topic pages
- used for internal linking inside the transmission topic
- should not appear on unrelated services

## What Antigravity is allowed to do

- design page composition
- decide section order
- shape UI and UX
- improve scannability
- design CTA treatment
- design trust block presentation
- establish reusable visual patterns
- propose how a future transmission-local navigation block should look

## What Antigravity must not do

- invent new pages
- invent new branches
- change approved URLs
- change approved H1 logic
- request or set up Vercel for this project
- turn DSG or ZF into an oversized branch
- reintroduce CVT / variator pages
- introduce brand/model or error-code page sprawl

## Expected output style

For each page task, return:

- the implementation
- a short rationale for the chosen block structure
- a short note on reusable visual logic
- any open points that need approval

## First action after onboarding

Before implementing a page, briefly restate:

- what page you are working on
- what is locked
- what is flexible
- what you are not allowed to invent

Then start implementation.
