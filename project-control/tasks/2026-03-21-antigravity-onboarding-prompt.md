# Title

Prompt for Antigravity - onboarding

## Status

`todo`

## Owner

Codex

## Reviewer

Owner

## Goal

Provide a ready-to-send onboarding prompt that teaches Antigravity how to use the Mr.Car infrastructure before any page implementation starts.

## Prompt

```text
Read these files in order:

1. `project-control/README.md`
2. `project-control/STRUCTURE.md`
3. `project-control/DECISIONS.md`
4. `project-control/ANTIGRAVITY_ONBOARDING.md`
5. `project-control/ANTIGRAVITY_RULES.md`
6. `project-control/GEARBOX_ROLLOUT_APPROVED.md`
7. `project-control/tasks/2026-03-21-antigravity-onboarding.md`

This is an onboarding step only.
Do not implement a page yet.

Your job here is to understand how Mr.Car expects Antigravity to work.

Return only these sections:
1. Workflow understanding
2. Role understanding
3. Source of truth
4. Locked vs flexible
5. Sidebar understanding
6. Stop conditions

Important:
- GitHub is the only sync bridge
- you are not the site architect
- you implement one approved page at a time
- transmission pages start in ET first
- RU and EN are derived only after ET approval
- the global service sidebar remains in place
- transmission-local navigation belongs only inside gearbox / AKPP pages
- do not invent new pages, branches, URLs, or extra SEO sprawl

If something is unclear, mark it as an open point.
Do not start implementation in this onboarding step.
```

## Notes

After this onboarding response is reviewed, Antigravity can receive the first real page task:

- [2026-03-21-antigravity-gearbox-hub.md](C:/Users/Admin/Documents/GitHub/MrCar%20in%20github/mr.car-main%20(1)/mr.car-main/project-control/tasks/2026-03-21-antigravity-gearbox-hub.md)
