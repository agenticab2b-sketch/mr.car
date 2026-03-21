# Title
Current state verification for Mr.Car

# Status
todo

# Owner
Elvis

# Reviewer
Codex

# Goal
Verify the current `main` state of Mr.Car and identify the first correction batch that should be handled before broader growth work.

# Context
This task starts after Elvis onboarding.

Known context:
- Mr.Car is a static multilingual site on HTML, CSS, and JavaScript.
- Hosting runs through Firebase Hosting.
- Backend form and helper logic runs through Firebase Functions.
- ET is the default language in `/`, with RU in `/ru/` and EN in `/en/`.
- GitHub is the only sync bridge.
- No direct work in `main`.

# Why this task exists
We already know the project has technical debt, but not every older audit finding is still true in current `main`.

Before choosing a larger cleanup direction, we need a short reality check that separates:
- current confirmed risks
- stale or historical findings
- urgent issues vs lower-priority cleanup

# Scope
Review current `main` with focus on:
- source of truth
- trust-critical visible issues
- critical SEO/routing areas
- lead-flow reliability
- process and delivery risk

# Specific questions to answer
1. What should be treated as the current source of truth for this project?
2. Which 3 to 5 risks are confirmed right now in current `main`?
3. Which older concerns appear stale or need revalidation before action?
4. What should be the first practical correction batch?

# Constraints
- Do not change site code in this task.
- Do not create commits in this task.
- Do not invent a migration or rewrite plan.
- Do not assume older audit artifacts are automatically current.

# Expected output
- a short current-state assessment
- a split between confirmed issues and stale/unverified issues
- a recommended first correction batch
- a proposed first implementation branch name for Elvis
