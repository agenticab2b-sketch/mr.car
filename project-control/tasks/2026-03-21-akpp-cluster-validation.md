# Title

Validate recovered AKPP cluster against current Mr.Car

## Status

`todo`

## Owner

Elvis

## Reviewer

Codex

## Goal

Take the recovered AKPP cluster structure from task `2026-03-21-akpp-cluster-recovery.md`, compare it against the current Mr.Car site, and produce a validated rollout plan instead of restarting the cluster design from zero.

## Scope

- current Mr.Car transmission-related pages in ET / RU / EN
- recovered AKPP cluster map
- general gearbox hub logic
- AKPP priority branch
- lighter manual gearbox branch
- page intent overlap
- first wave / second wave / defer prioritization
- multilingual rollout logic
- parent-child and internal-linking fit

## Output

- validated AKPP cluster decision table
- list of pages already covered by current Mr.Car
- list of pages that should be created next
- list of pages to defer
- rollout logic for ET / RU / EN
- note on any renamed, merged, or dropped pages with explicit reasons

## Notes

### Primary input

Start from:

- [2026-03-21-akpp-cluster-recovery.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/tasks/2026-03-21-akpp-cluster-recovery.md)

Do not rebuild the AKPP cluster from scratch.

### Current expectation

The recovered task is treated as the restored working draft.  
Your job is to validate it against the actual Mr.Car structure and current transmission-related pages.

The validated result must follow the owner-approved scope:

- one general gearbox hub page
- automatic transmission as the priority branch
- manual transmission as a lighter secondary branch
- no variator / CVT pages in this phase
- no brand / model pages in this phase
- no error-code pages in this phase
- `DSG` and `ZF` should not be ignored, but they also should not explode into a separate oversized branch by default
- pages must be deep and helpful for ordinary drivers, not overly specialized for transmission professionals
- ET is the primary default locale on the domain, but ET / RU / EN should converge to parity in structural depth and seriousness

### Required method

For each important page or cluster item, determine one of these states:

- `already covered`
- `create in first wave`
- `create in second wave`
- `defer`
- `merge into another page`
- `drop`

### Required decision criteria

Use these criteria explicitly:

- search intent uniqueness
- fit with current Mr.Car service structure
- ET / RU / EN parity needs
- local default-locale logic vs final multilingual parity
- risk of cannibalization
- usefulness for users
- commercial value
- ability to make the page genuinely strong, not thin

### Focus areas

Check especially:

- existing transmission / gearbox pages already present in Mr.Car
- whether the current generic gearbox page should act as the top hub
- how automatic-transmission pages should branch from that hub
- how much manual-transmission coverage is needed without building a large separate cluster
- whether `repair`, `diagnostics`, `oil change`, `pricing`, and `symptom` pages are already partially covered
- whether `DSG` and `ZF` should remain visible as sections, entity-focused supporting pages, or narrower sub-branches
- which topics should stay as sections instead of standalone pages

### Required output format

Return the result in this shape:

1. `Confirmed current coverage`
2. `Recommended gearbox hub structure`
3. `AKPP pages to create in first wave`
4. `AKPP pages to create in second wave`
5. `Manual branch scope`
6. `Pages to defer or drop`
7. `ET / RU / EN rollout logic`
8. `ET / RU / EN parity notes`
9. `Cannibalization risks`
10. `Stop-gate verdict`

### Stop-gate rule

Do not move on to content planning until this validation is complete.

### Guardrails

- Do not jump into copywriting.
- Do not propose pages only because they contain keywords.
- Do not duplicate pages with the same intent under slightly different names.
- If the recovered structure is changed, explain each important change directly.
- If current Mr.Car already covers a page partially, say whether it should be expanded, split, or left as is.
- Do not keep variator / CVT pages in this phase.
- Do not keep brand / model pages in this phase.
- Do not keep error-code pages in this phase.
- Prefer pages that help users understand symptoms, risk, urgency, and next steps.
- Move overly narrow technical ideas into sections or FAQs unless there is a strong reason for a standalone page.
- `DSG` and `ZF` may survive as searchable entities, but only in a controlled way that does not distort the main user-facing structure.
- Do not treat EN as a permanently compact or “lite” branch. If rollout is phased, mark it as phased, not as lower-value.
