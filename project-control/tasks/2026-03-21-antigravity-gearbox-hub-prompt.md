# Title

Prompt for Antigravity - Gearbox hub

## Status

`todo`

## Owner

Codex

## Reviewer

Owner

## Goal

Provide a ready-to-send prompt that asks Antigravity to implement the gearbox hub strictly inside the approved structure while preserving strong creative freedom in UI, UX, and visual execution.

## Prompt

```text
Read these files first:

1. `project-control/ANTIGRAVITY_RULES.md`
2. `project-control/ANTIGRAVITY_PAGE_TEMPLATE.md`
3. `project-control/DECISIONS.md`
4. `project-control/STRUCTURE.md`
5. `project-control/GEARBOX_ROLLOUT_APPROVED.md`
6. `project-control/tasks/2026-03-21-antigravity-gearbox-hub.md`

You are implementing one approved Mr.Car page inside an already approved site structure.

Your role on this task:
- implement the page
- shape layout, UI, UX, and visual direction
- make the page feel intentional, trustworthy, and clear

Your role is not:
- inventing new pages
- changing the approved URL logic
- changing the approved H1 logic
- redesigning the gearbox / AKPP / manual architecture
- expanding scope into CVT, brand/model, or error-code branches

This task is only for the gearbox hub page.

This implementation pass is ET only.
Do not build RU or EN in this step.

What you must preserve:
- this page remains the broad gearbox hub
- it must route users toward the AKPP priority branch
- it must keep the manual branch lighter
- DSG and ZF may be visible, but only as controlled supporting entities
- the existing global service sidebar stays in place

What you should optimize hard:
- clarity for ordinary drivers
- trust
- urgency framing
- CTA clarity
- mobile usability
- reusable visual logic for later transmission pages
- a future transmission-local navigation pattern that can later work inside AKPP pages only

What you may be creative with:
- page composition
- section order
- block hierarchy
- visual storytelling
- trust block design
- CTA presentation
- FAQ presentation
- image/art direction

Content guidance:
- write for users who have a problem with the car and want to understand what to do next
- explain symptoms, risks, urgency, and next steps
- be deep, but not overly technical
- do not turn the page into an encyclopedia

Important cleanup:
- remove active CVT / variator messaging from the ET gearbox hub
- clean it from head/meta/schema/body where it currently conflicts with the approved structure

Required output:
1. implement the ET gearbox hub page
2. keep it inside the approved page role
3. add a short rationale for your chosen block structure
4. add a short note on the reusable UI pattern this page establishes for later transmission pages
5. add a short note on how future transmission-only internal navigation should work without replacing the global service sidebar
6. if something is unclear, list it as an open point instead of silently changing architecture

Do not move to other pages in this task.
Do not propose a new cluster.
Do not start copywriting for the whole transmission branch.
Do not implement RU or EN in this task.
Implement only the approved ET gearbox hub page.
```

## Notes

Use this prompt as the first live handoff to Antigravity.

If the result is good, reuse the same pattern for:

- AKPP pillar
- AKPP diagnostics
- first-wave AKPP symptom pages
