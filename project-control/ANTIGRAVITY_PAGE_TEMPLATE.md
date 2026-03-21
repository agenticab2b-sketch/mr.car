# Antigravity Page Template

Use this template when handing one approved page to Antigravity.

The goal is to let Antigravity build one page at a time without inventing extra architecture.

## Usage Rules

- one task = one page
- use only after page structure is approved
- Antigravity may shape UI, UX, content blocks, and visual direction
- Antigravity must not invent:
  - new URLs
  - new page roles
  - new parent/child relationships
  - extra pages outside the approved structure
- if something is unclear, Antigravity should mark it as an open point, not silently decide it

## Copy Template

```md
# Title

Antigravity implementation - [Page name]

## Status

`todo`

## Owner

Antigravity

## Reviewer

Codex

## Goal

Explain what this page must achieve for users and for the site structure.

## Approved page role

- page type:
- parent:
- phase:
- locale scope:
- locale implementation order:

## Locked fields

- approved URL:
- approved H1:
- primary intent:
- entity focus:
- sidebar rule:

## What Antigravity may design

- page layout
- section order
- block hierarchy
- CTA presentation
- trust blocks
- FAQ structure
- image direction
- visual style within site constraints
- reusable local topic navigation inside the approved page family

## What Antigravity must not invent

- extra pages
- extra intent targets
- alternate URL logic
- alternate H1 logic
- new branch logic
- unsupported SEO entities

## Required page outcomes

- what the page must help the user understand
- what action the page should drive
- what trust it must build
- what internal links it must support

## Required blocks

- hero
- symptom / problem framing
- risk / urgency framing
- diagnostics / process block
- solution / next-step block
- trust / proof block
- CTA block
- FAQ block

## Content guidance

- write for ordinary drivers, not transmission engineers
- be deep, but not overly technical
- explain symptoms, risks, urgency, and next steps
- avoid fluff and generic filler

## SEO / structure guardrails

- keep one clear primary intent
- avoid synonym cannibalization
- keep internal links aligned with the approved structure
- do not broaden scope beyond the approved page role

## UI / UX guardrails

- page must feel intentional and trustworthy
- CTA must be easy to find
- risk and urgency must be scannable
- mobile layout must remain strong
- sections should reduce anxiety, not create overload

## Inputs Antigravity should read first

- `project-control/ANTIGRAVITY_ONBOARDING.md`
- `project-control/ANTIGRAVITY_RULES.md`
- `project-control/GEARBOX_ROLLOUT_APPROVED.md`
- relevant rollout table row
- related cluster / structure task
- current live or current repo page if one exists
- `project-control/DECISIONS.md`
- `project-control/STRUCTURE.md`

## Output expected from Antigravity

- final page implementation
- brief rationale for the chosen block structure
- note on whether the page establishes a reusable pattern for later pages
- note about any unresolved constraint or ambiguity
- no extra architecture proposals unless explicitly requested

## Review checklist

- URL respected
- H1 respected
- intent respected
- no architecture drift
- no scope creep
- blocks support the approved page role
- CTA and trust are present
- content is understandable to non-specialists
```
