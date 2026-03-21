# Decisions

Record only decisions that affect future work.

## Format

```md
## YYYY-MM-DD - Title
- Decision:
- Why:
- Approved by:
- Related task:
```

## 2026-03-21 - Use Git branches instead of direct main edits

- Decision: all work happens in feature branches; nobody works directly in `main`.
- Why: `main` must stay stable and deployable.
- Approved by: owner
- Related task: process bootstrap

## 2026-03-21 - Use GitHub as the only collaboration bridge

- Decision: local work, Elvis server work, and agent work sync only through GitHub.
- Why: this prevents multiple parallel versions of the truth.
- Approved by: owner
- Related task: process bootstrap

## 2026-03-21 - Keep project-control minimal

- Decision: start with only `README.md`, `STRUCTURE.md`, `DECISIONS.md`, and `tasks/`.
- Why: the team needs clarity without heavy process overhead.
- Approved by: owner
- Related task: process bootstrap

## 2026-03-21 - Use repo code plus project-control as the current source of truth

- Decision: treat the shipped site code, Firebase config, CI workflows, and `project-control/*` as the current working truth; old root docs and legacy scripts do not override current code behavior.
- Why: the previous root README and historical maintenance files no longer accurately described the live project.
- Approved by: owner
- Related task: fourth correction item

## 2026-03-21 - Treat root maintenance scripts as reviewed-only tooling

- Decision: root `fix_*`, `update_*`, `check_*`, `generate_*`, `clean_*`, and similar one-off scripts are legacy maintenance tooling and are not part of the default workflow.
- Why: this reduces accidental reliance on ad-hoc historical scripts and clarifies ownership of the normal workflow.
- Approved by: owner
- Related task: fourth correction item
