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
- risk of cannibalization
- usefulness for users
- commercial value
- ability to make the page genuinely strong, not thin

### Focus areas

Check especially:

- existing transmission / gearbox pages already present in Mr.Car
- whether `repair`, `diagnostics`, `oil change`, `pricing`, and `symptom` pages are already partially covered
- whether DSG and CVT / variator should stay inside the same cluster or be treated as separate service branches
- whether brand pages are justified now or should be deferred

### Required output format

Return the result in this shape:

1. `Confirmed current coverage`
2. `Pages to create in first wave`
3. `Pages to create in second wave`
4. `Pages to defer or drop`
5. `ET / RU / EN rollout logic`
6. `Cannibalization risks`
7. `Stop-gate verdict`

### Stop-gate rule

Do not move on to content planning until this validation is complete.

### Guardrails

- Do not jump into copywriting.
- Do not propose pages only because they contain keywords.
- Do not duplicate pages with the same intent under slightly different names.
- If the recovered structure is changed, explain each important change directly.
- If current Mr.Car already covers a page partially, say whether it should be expanded, split, or left as is.
