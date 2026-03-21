# Title

Antigravity implementation - Gearbox hub

## Status

`todo`

## Owner

Antigravity

## Reviewer

Codex

## Goal

Rebuild the existing gearbox page as a broad, trustworthy entry page that helps ordinary drivers understand gearbox problems, urgency, and next steps, then directs them into the approved automatic-transmission priority branch and the lighter manual branch.

## Approved page role

- page type: gearbox hub
- parent: root service structure
- phase: 1
- locale scope: ET only for this implementation pass
- locale implementation order: ET first, RU and EN only after ET approval

## Locked fields

- approved URL:
  - ET: `/services/kaigukastiremont`
- approved H1:
  - ET: `Käigukasti remont`
- primary intent: broad gearbox repair entry page
- entity focus: broad gearbox intent with controlled `DSG` / `ZF` visibility
- sidebar rule:
  - keep the existing global service sidebar
  - do not replace it
  - define a reusable pattern for future transmission-local navigation, but only for transmission pages

## What Antigravity may design

- page layout
- section order
- section hierarchy
- trust block format
- CTA presentation
- FAQ presentation
- visual direction
- reusable block logic that can later support AKPP pages
- the future visual pattern for a transmission-local sidebar / internal navigation block

## What Antigravity must not invent

- no new URLs
- no AKPP cluster redesign
- no extra branch logic
- no CVT / variator branch
- no brand / model expansion
- no error-code pages
- no synonym-based extra symptom pages
- no RU or EN implementation in this task

## Required page outcomes

- explain gearbox problems in simple language
- help users understand urgency and risk
- explain that diagnosis is the correct next step when symptoms appear
- route users toward:
  - AKPP priority branch
  - lighter manual branch
- build trust without sounding like a narrow transmission-only workshop
- establish the ET visual and structural pattern that later transmission pages can inherit

## Required blocks

- hero with broad gearbox framing
- symptom overview:
  - jerks / kicks
  - slipping
  - delayed shifting or not shifting
  - noise / hum
  - oil leak
  - emergency mode
- urgency / risk block:
  - when to act urgently
  - when not to delay
  - what can get worse
- diagnostics block:
  - what initial diagnosis is for
  - what it helps clarify
- branch-routing block:
  - automatic transmission
  - manual transmission
- controlled entity block:
  - DSG
  - ZF
- existing global service sidebar remains present
- trust / proof block
- CTA block
- FAQ block

## Content guidance

- write for normal car owners
- explain symptoms, risks, and next steps
- keep depth high but avoid workshop jargon overload
- do not turn the page into an encyclopedia
- do not let DSG / ZF dominate the page

## SEO / structure guardrails

- keep this page broad
- do not let it absorb the full AKPP pillar role
- do not over-expand manual branch content
- clean current ET page messaging so CVT / variator no longer appears as an active branch in:
  - title
  - meta description
  - OG / Twitter descriptions
  - schema service description
  - hero lead
  - main intro copy
- use internal links to support the approved hierarchy:
  - gearbox hub -> AKPP pillar
  - gearbox hub -> manual branch section
  - gearbox hub -> AKPP diagnostics

## UI / UX guardrails

- the page should feel calm, expert, and easy to scan
- users should quickly understand:
  - what may be wrong
  - how urgent it is
  - what they should do next
- mobile CTA visibility matters
- visual system should be reusable for future transmission pages
- the page should preserve the current global sidebar behavior while also making room for future transmission-only internal navigation

## Inputs Antigravity should read first

- [ANTIGRAVITY_PAGE_TEMPLATE.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/ANTIGRAVITY_PAGE_TEMPLATE.md)
- [ANTIGRAVITY_RULES.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/ANTIGRAVITY_RULES.md)
- [DECISIONS.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/DECISIONS.md)
- [GEARBOX_ROLLOUT_APPROVED.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/GEARBOX_ROLLOUT_APPROVED.md)
- [STRUCTURE.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/STRUCTURE.md)

## Output expected from Antigravity

- one implemented ET gearbox hub page update
- one short note explaining the chosen block structure
- one short note describing the reusable UI system this page establishes for later transmission pages
- one short note describing how the future transmission-local sidebar should work without replacing the global service sidebar
- no extra architecture proposals unless clearly marked as optional follow-up

## Review checklist

- approved URL preserved
- approved ET H1 preserved
- broad gearbox role preserved
- AKPP branch receives clear priority
- manual branch remains lighter
- DSG / ZF visible but controlled
- no CVT / brand / model / error-code drift
- no RU / EN implementation attempted in this task
- CTA and trust are clearly present
- content remains understandable to non-specialists
