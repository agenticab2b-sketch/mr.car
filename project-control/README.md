# Project Control

This folder is the lightweight working layer for Mr.Car.

## Core rules

- Nobody works directly in `main`.
- One task equals one branch.
- One task equals one owner.
- GitHub is the only sync bridge between local work, Elvis, Codex, Antigravity, and Gemini CLI.
- Deploy happens only from reviewed `main` and only by the owner.

## Branch prefixes

- `user/<task>`
- `elvis/<task>`
- `codex/<task>`
- `ag/<task>`
- `gemini/<task>`

## What lives here

- `STRUCTURE.md`: current working truth about site structure
- `DECISIONS.md`: important decisions worth remembering
- `tasks/`: one file per task

## Minimal workflow

1. Create a task file in `project-control/tasks/`.
2. The owner of the task creates a branch.
3. Work happens only in that branch.
4. Review is required for architecture, routing, URL, SEO-global, forms, and deploy-related changes.
5. Merge to `main` only after review.
6. Deploy only from `main`.

## Role boundaries

- Owner: priorities, final approval, merge/deploy decision
- Elvis: structure, SEO architecture, task shaping
- Codex: technical validation, implementation, regression control
- Antigravity and Gemini CLI: draft generation and bulk execution inside approved scope

## Keep it simple

- If a rule is not helping real work, remove it.
- If a document is not used, do not add another one.
- If task context fits in the task file, do not create a separate handoff layer.
