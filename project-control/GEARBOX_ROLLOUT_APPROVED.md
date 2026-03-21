# Gearbox Rollout Approved

This file is the current approved transmission implementation source of truth.

Use it for implementation handoff.

Do not treat historical chats as a stronger source than this file.

## Global rules

- ET is the first implementation locale for new transmission pages
- RU and EN are built only after the ET page is approved
- the first ET transmission page must establish the reusable page pattern
- the existing global service sidebar stays in place
- transmission-local navigation belongs only inside gearbox / AKPP topic pages
- `CVT / variator`, brand/model pages, and error-code pages are out of scope
- `DSG` and `ZF` are controlled entities, not a separate branch by default

## Approved implementation table

| Page | Role | Status | ET URL | ET H1 | RU URL | RU H1 | EN URL | EN H1 | Locale workflow | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| Gearbox hub | broad gearbox entry page | approved for implementation now | `/services/kaigukastiremont` | `Käigukasti remont` | `/ru/services/remont-kpp` | `Ремонт коробки передач` | `/en/services/transmission-repair` | `Transmission repair` | build ET first, then derive RU and EN after ET approval | keep current URL; rewrite scope; remove active CVT branch messaging; preserve global sidebar |
| AKPP pillar | main automatic-transmission page under gearbox hub | approved structure, not yet implementation-ready | `/services/automaatkasti-remont` | `Automaatkasti remont` | `/ru/services/remont-akpp` | `Ремонт АКПП` | `/en/services/automatic-transmission-repair` | `Automatic transmission repair` | ET first after gearbox hub signoff | this is the next major page after the hub |
| AKPP diagnostics | commercial next-step page | approved structure, not yet implementation-ready | `/services/automaatkasti-diagnostika` | `Automaatkasti diagnostika` | `/ru/services/diagnostika-akpp` | `Диагностика АКПП` | `/en/services/automatic-transmission-diagnostics` | `Automatic transmission diagnostics` | ET first after AKPP pillar signoff | links from hub and AKPP pillar |
| AKPP jerks / kicks | first-wave symptom page | approved structure, not yet implementation-ready | `/services/automaatkast-jonksutab` | `Automaatkast jõnksutab` | `/ru/services/pinaetsya-akpp` | `Пинается АКПП` | `/en/services/automatic-transmission-jerks` | `Automatic transmission jerks` | ET first after page pattern is stable | one consolidated symptom page, no synonym duplicates |
| AKPP slipping | first-wave symptom page | approved structure, not yet implementation-ready | `/services/automaatkast-libiseb` | `Automaatkast libiseb` | `/ru/services/probuksovka-akpp` | `Пробуксовка АКПП` | `/en/services/transmission-slipping` | `Transmission slipping` | ET first after page pattern is stable | distinct symptom intent only |
| AKPP emergency mode | first-wave symptom page | approved structure, not yet implementation-ready | `/services/automaatkast-avariireziim` | `Automaatkast avariirežiimis` | `/ru/services/avarijnyj-rezhim-akpp` | `Аварийный режим АКПП` | `/en/services/transmission-emergency-mode` | `Transmission emergency mode` | ET first after page pattern is stable | high urgency page |
| AKPP oil leak | first-wave symptom page | approved structure, not yet implementation-ready | `/services/automaatkasti-olileke` | `Automaatkasti õlileke` | `/ru/services/techet-maslo-akpp` | `Течь масла АКПП` | `/en/services/transmission-oil-leak` | `Transmission oil leak` | ET first after page pattern is stable | strong risk framing |
| AKPP oil change | first-wave service page | approved structure, not yet implementation-ready | `/services/automaatkasti-oli-vahetus` | `Automaatkasti õlivahetus` | `/ru/services/zamena-masla-akpp` | `Замена масла в АКПП` | `/en/services/transmission-oil-change` | `Transmission oil change` | ET first after page pattern is stable | must stay separate from general oil-change intent |

## Navigation rules

### Global sidebar

- keep the current service sidebar pattern
- keep it on gearbox pages just as on other service pages
- do not replace it with topic-only navigation

### Transmission-local navigation

- may be introduced only inside gearbox / AKPP pages
- should help internal linking between approved transmission pages
- should not appear on unrelated service pages
- the first ET gearbox hub should help establish the visual logic for this future component

## Immediate implementation note

The first active Antigravity task is:

- ET gearbox hub only

That task should:

- clean the page scope
- remove active CVT / variator messaging from title/meta/schema/hero/intro
- preserve the existing service URL
- preserve the global sidebar
- create the visual foundation for later transmission pages
