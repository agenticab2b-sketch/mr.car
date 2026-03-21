# Title

Recover AKPP cluster structure from Elvis history

## Status

`todo`

## Owner

Elvis

## Reviewer

Codex

## Goal

Restore the previously developed AKPP page architecture from recovered OpenClaw history and continue from that structure instead of rebuilding it from scratch.

## Scope

- AKPP / transmission cluster planning for Mr.Car
- core pages
- supporting pages
- parent-child structure
- internal linking logic
- menu vs non-menu visibility
- rollout priority

## Output

- confirmed recovered AKPP cluster map
- first-wave pages for implementation
- second-wave pages to defer
- notes on what should be adapted specifically for Mr.Car

## Notes

### Recovered source

Recovered from OpenClaw session history, not from current UI memory:

- agent: `main`
- session file: `/home/openclaw/.openclaw/agents/main/sessions/8357f49f-1178-44cb-b33e-e54a3131d974.jsonl`
- key messages:
  - message line `28`: competitor model analysis around `rekpp.ru`
  - message line `34`: detailed AKPP cluster map

### Owner-approved scope corrections

These corrections override the historical draft where they conflict:

- Use one general gearbox repair hub page as the top entry point.
- Automatic transmission is the priority branch.
- Manual transmission should exist as a lighter secondary branch, not a full equal cluster at this stage.
- Remove variator / CVT pages from the active scope.
- Remove brand / model pages from the active scope.
- Remove error-code / code-number pages from the active scope.
- Do not ignore gearbox-family search entities such as `DSG` and `ZF`; keep them as supporting searchable entities where justified.
- Do not turn `DSG` / `ZF` into a large separate branch by default.
- ET is the primary default locale because the site is in Estonia.
- RU and EN must not become permanently reduced versions; the target state is parity of structure and depth across ET / RU / EN.
- Prefer deep user-facing pages about symptoms, risks, diagnostics, and next steps over overly technical specialist pages.
- Content should help normal drivers understand what is happening and what to do next, not read like a transmission engineer handbook.

### Recovered structural principle

- Build a cluster architecture, not a page dump.
- Core pages are the main commercial nodes.
- Supporting pages target symptoms, procedures, prices, questions, and specific types.
- Every page must have:
  - its own intent
  - a parent page
  - explicit outgoing links
  - a clear question set it answers

### Historical recovered core pages

1. Repair automatic transmission
2. Automatic transmission diagnostics
3. Automatic transmission oil change
4. Automatic transmission teardown / defect inspection
5. Automatic transmission repair pricing
6. Valve body repair
7. Torque converter repair
8. Transmission repair by brand / model

Do not treat this list as fully approved in its original form. It still contains items that must now be dropped or demoted.

### Recovered supporting clusters

#### Cluster 1. Symptoms

1. АКПП пинается / дёргается при переключении
2. Шум в АКПП
3. Пробуксовка АКПП
4. АКПП не переключает передачи
5. АКПП не едет вперёд / назад
6. Вибрация АКПП
7. Перегрев АКПП
8. Толчки при включении `D` или `R`

#### Cluster 2. Diagnostics and checks

9. Компьютерная диагностика АКПП
10. Проверка давления АКПП
11. Ошибки АКПП / коды неисправностей
12. Когда нужна диагностика АКПП

#### Cluster 3. Maintenance

13. Когда менять масло в АКПП
14. Частичная замена масла АКПП
15. Полная замена масла АКПП
16. Горелое масло в АКПП
17. Проверка уровня масла АКПП

#### Cluster 4. Repair procedures

18. Что такое дефектовка АКПП
19. Капитальный ремонт АКПП
20. Адаптация АКПП после ремонта
21. Ремонт соленоидов АКПП / замена соленоидов

#### Cluster 5. Price and commercial clarifiers

22. Сколько стоит диагностика АКПП
23. Сколько стоит ремонт АКПП
24. Гарантия на ремонт АКПП
25. Сроки ремонта АКПП

#### Cluster 6. Brands and transmission types

26. Ремонт АКПП Toyota / BMW / Mercedes / Kia and similar
27. Ремонт DSG
28. Ремонт вариатора

Items in historical cluster 6 are not automatically approved. Variator is now out of scope, brand pages are out of scope for this phase, and `DSG` / `ZF` should be treated as controlled searchable entities, not as a default large standalone cluster.

### Recovered menu logic

#### Keep in main or side menu

- Ремонт АКПП
- Диагностика АКПП
- Замена масла в АКПП
- Дефектовка АКПП
- Стоимость ремонта АКПП
- Ремонт гидроблока АКПП
- Ремонт DSG
- Контакты / Цены / Запись

#### Do not put in main menu, but do create

- symptom pages
- narrow procedure pages
- narrow price / warranty / timing pages
- expert diagnostic clarifiers

### Recovered linking logic

- Every supporting page must link back to its main commercial parent.
- Every supporting page should link to one to three related pages.
- No orphan pages.
- Typical hub pattern:
  - `Repair automatic transmission` -> diagnostics, pricing, teardown, oil change, valve body, symptoms
  - `Diagnostics` -> computer diagnostics, pressure test, error codes, symptom pages, repair
  - `Oil change` -> when to change, partial vs full, burnt oil, oil level check, diagnostics
  - symptom page -> diagnostics, oil change, valve body, repair, pricing
  - pricing page -> diagnostics, teardown, capital repair, brand pages

### Recovered first-wave implementation set

#### Core

1. Ремонт АКПП
2. Диагностика АКПП
3. Замена масла в АКПП
4. Дефектовка АКПП
5. Стоимость ремонта АКПП
6. Ремонт гидроблока АКПП

#### Supporting pages first

7. АКПП пинается
8. Шум в АКПП
9. Пробуксовка АКПП
10. АКПП не переключает передачи
11. Когда менять масло в АКПП
12. Частичная замена масла АКПП
13. Полная замена масла АКПП
14. Горелое масло в АКПП
15. Компьютерная диагностика АКПП
16. Проверка давления АКПП
17. Что такое дефектовка АКПП
18. Капитальный ремонт АКПП
19. Сколько стоит диагностика АКПП
20. Гарантия на ремонт АКПП

### Guardrails

- Do not restart the cluster from zero.
- Do not jump straight into copywriting.
- Do not add pages with overlapping intent just for keyword count.
- If any recovered page should be renamed, merged, or removed for Mr.Car, explain why explicitly.
- Treat this file as recovered working context that must be verified against current Mr.Car structure, not as auto-approved final truth.
- Do not keep variator / CVT pages in the active rollout.
- Do not keep brand / model pages in the active rollout.
- Do not keep error-code pages in the active rollout.
- Remember that the site needs one general gearbox hub plus a deeper AKPP branch and a lighter manual branch.
- Keep `DSG` / `ZF` visible where they help real search intent, but prefer sections, entity blocks, FAQs, or a tightly justified supporting page over a whole separate branch.
- Treat ET / RU / EN as a parity target even if rollout happens in phases.

### What Elvis should do next

1. Confirm which parts of the recovered AKPP structure still fit Mr.Car.
2. Mark pages as:
   - first wave
   - second wave
   - defer
3. Propose ET / RU / EN rollout logic.
4. Identify where existing Mr.Car transmission pages already cover part of this cluster.
5. Reframe the recovered AKPP-only structure into:
   - general gearbox hub
   - AKPP priority branch
   - lighter manual branch
6. Only after that propose content work.
