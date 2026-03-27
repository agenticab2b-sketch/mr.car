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

## 2026-03-21 - Use one gearbox hub with AKPP priority and lighter manual branch

- Decision: for transmission-related expansion, use one general gearbox repair hub page, then split into a primary automatic-transmission branch and a lighter manual-transmission branch. Exclude variator pages, brand/model pages, and error-code pages from the current phase. Keep gearbox-family identifiers such as `DSG` and `ZF` visible where justified, but do not turn them into a large standalone branch by default.
- Why: Mr.Car is a general auto service, not a narrow transmission-only specialist. The content must help normal drivers understand symptoms, risks, and next steps without drifting into overly specialized or thin SEO pages.
- Approved by: owner
- Related task: AKPP cluster recovery / validation

## 2026-03-21 - ET is primary by domain, but ET/RU/EN must reach parity

- Decision: Estonian remains the default language on the main domain because the business is in Estonia, but ET, RU, and EN must ultimately be structurally and content-wise equivalent in seriousness, depth, and completeness. Rollout may be phased, but the target state is parity, not a permanently reduced English version.
- Why: the site must look equally trustworthy and complete across all three languages while still reflecting the local reality that the default domain opens in Estonian.
- Approved by: owner
- Related task: AKPP cluster validation / rollout

## 2026-03-21 - Hand off page implementation to Antigravity one page at a time

- Decision: after structure approval, Antigravity receives one approved page at a time through a fixed page-handoff template. Antigravity may design content blocks, UI, and visual treatment for that page, but must not invent new architecture, URLs, or cluster expansion outside the approved page map.
- Why: Antigravity should help with production and design, not become a second architect. Step-by-step page handoff reduces context overload and keeps structure, UX, and content aligned.
- Approved by: owner
- Related task: Antigravity page implementation workflow

## 2026-03-21 - Build transmission pages ET-first, then derive RU and EN

- Decision: each new transmission-related page is first implemented in Estonian only. After the ET version is approved visually and structurally, Russian and English versions are built from that approved ET source as a second pass.
- Why: this keeps Antigravity focused on one strong implementation at a time, preserves token budget for visual and UX quality, and avoids splitting design attention across three locales before the page pattern is stable.
- Approved by: owner
- Related task: Antigravity transmission implementation workflow

## 2026-03-21 - The first ET transmission page establishes the reusable service-page pattern

- Decision: the first ET transmission page must establish the reusable visual and structural pattern for the rest of the transmission service pages. This includes block rhythm, trust logic, CTA treatment, and how transmission-specific internal navigation should later work.
- Why: later pages should inherit a strong approved pattern instead of being redesigned from scratch each time.
- Approved by: owner
- Related task: Antigravity transmission implementation workflow

## 2026-03-21 - Keep the existing global service sidebar and add transmission-local navigation only inside transmission pages

- Decision: the current main service sidebar remains the global sidebar across service pages. A second, transmission-local sidebar or internal navigation block may be designed for gearbox / AKPP pages only, and must not leak into unrelated services.
- Why: the global sidebar preserves site-wide service navigation, while transmission pages need their own deeper internal-linking system without polluting the rest of the service section.
- Approved by: owner
- Related task: Antigravity transmission implementation workflow

## 2026-03-27 - Keep Firebase as the only hosting target for the current repo

- Decision: this repository remains on Firebase Hosting plus Firebase Functions, and it must not be linked or configured for Vercel unless the owner explicitly changes the hosting strategy.
- Why: the live project already deploys through Firebase, and allowing Vercel prompts or setup creates unnecessary confusion and the wrong execution path for Antigravity and other agents.
- Approved by: owner
- Related task: remove Vercel prompts from project workflow
