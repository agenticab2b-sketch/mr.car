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
