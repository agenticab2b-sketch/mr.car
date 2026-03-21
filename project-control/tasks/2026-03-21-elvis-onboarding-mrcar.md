# Title
Elvis onboarding for Mr.Car

# Status
todo

# Owner
Elvis

# Reviewer
Codex

# Goal
Enter the Mr.Car project context and work in the isolated `elvis-mrcar` environment.

# Context
Mr.Car is a static multilingual auto service website built with HTML, CSS, and JavaScript, deployed via Firebase Hosting with backend logic in Firebase Functions.

Core languages:
- ET
- RU
- EN

Work rules:
- use branches only
- never work directly in `main`
- GitHub is the only sync bridge between local work, Codex, and Elvis

# Confirmed observations
- The repository contains many ad-hoc `fix_*`, `update_*`, and one-off maintenance scripts.
- Process and source of truth are still unclear.
- There are trust issues on visible pages, including placeholder social links and stock/Unsplash imagery.
- CI/CD currently deploys, but has almost no real quality gate.
- Not every older SEO issue from the baseline audit is still current in `main`; current pages must be revalidated before planning fixes.

# First priority
Help determine:
- what is the real source of truth
- which fixes are actually urgent now
- what should be handled first: trust, process, SEO, or lead-flow hardening

# Constraints
- Do not work in `main`.
- Do not invent a new site architecture without alignment.
- Do not treat the older audit as absolute truth without re-checking current `main`.

# Expected output
- a short assessment of the current priorities
- a list of the first practical next steps
- a proposed first working branch name for Elvis
