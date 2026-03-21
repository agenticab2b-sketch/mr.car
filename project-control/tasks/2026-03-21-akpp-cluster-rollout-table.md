# Title

Build AKPP rollout table for implementation

## Status

`todo`

## Owner

Elvis

## Reviewer

Codex

## Goal

Turn the validated AKPP cluster into a concrete implementation table that Mr.Car can use for page creation, internal linking, and multilingual rollout planning.

## Scope

- validated AKPP cluster only
- general gearbox hub
- lighter manual branch
- first-wave and second-wave pages
- ET / RU / EN rollout mapping
- URL planning
- H1 planning
- parent page mapping
- internal linking plan

## Output

- one implementation-ready AKPP page table
- page rows for core and approved supporting pages
- explicit notes for deferred pages
- internal-linking targets for each kept page

## Notes

### Prerequisite

Use these tasks first:

- [2026-03-21-akpp-cluster-recovery.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/tasks/2026-03-21-akpp-cluster-recovery.md)
- [2026-03-21-akpp-cluster-validation.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/tasks/2026-03-21-akpp-cluster-validation.md)

Do not produce this rollout table until the validation task is complete.

### What this task is for

This is the bridge between architecture and production.

The result should be concrete enough that:

- Codex can implement the structure safely
- Antigravity can generate pages inside approved boundaries
- you can review the rollout without re-reading long strategy discussions

### Required table columns

For each approved page include:

1. `Status`
   - existing
   - create first wave
   - create second wave
   - defer

2. `Locale rollout`
   - ET only for now
   - ET + RU
   - ET + RU + EN
   - defer locale expansion

3. `Page type`
   - core
   - gearbox hub
   - supporting symptom
   - supporting procedure
   - supporting commercial
   - manual branch page

4. `Suggested URL`
5. `Suggested H1`
6. `Primary intent`
7. `Parent page`
8. `Main internal links out`
9. `Main internal links in`
10. `Reason this page should exist`
11. `Notes / risks`

### Required decision rules

- One page = one clear intent.
- Avoid near-duplicate pages under different wording.
- The whole structure must fit this hierarchy:
  - gearbox hub
  - AKPP priority branch
  - lighter manual branch
- If a page is already partially covered by Mr.Car, say whether to:
  - expand current page
  - split current page
  - keep current page as is
- If a page should exist only in one locale first, explain why.
- If a page is deferred, keep it in the table with a short reason.

### Required structure of the result

Return:

1. `Gearbox hub table`
2. `AKPP core pages table`
3. `AKPP supporting pages first wave table`
4. `AKPP supporting pages second wave table`
5. `Manual branch table`
6. `Deferred pages table`
7. `Key internal-linking rules`
8. `Rollout notes for Antigravity`

### Rollout notes for Antigravity must include

- which pages are safe to generate after approval
- which page fields must not be invented freely
- which items must stay aligned with the approved table:
  - URL
  - H1
  - intent
  - parent page
  - internal links
  - locale rollout

### Guardrails

- Do not write full page copy.
- Do not invent extra pages outside the validated cluster.
- Do not produce vague generic labels instead of real page definitions.
- Do not recommend multilingual duplication unless it is justified.
- If URL naming is still uncertain, mark it as provisional instead of pretending it is final.
- Do not include variator / CVT pages.
- Do not include brand / model pages.
- Do not include error-code pages.
- Do not over-specialize the table around engineering-level topics if the user-facing job can be done better by a broader symptom / risk / next-step page.
