# Title

OpenClaw implementation - RU brake parent page

## Status

`ready`

## Owner

OpenClaw

## Reviewer

Codex

## Goal

Replace the current Russian mixed `ходовая + тормоза` service page with one Russian parent page for brakes.

Approved parent page:

- URL: `/ru/services/tormoznaya-sistema`
- file: `ru/services/tormoznaya-sistema.html`
- H1: `Ремонт и обслуживание тормозных систем в Таллине`
- compact menu label where needed: `Обслуживание и ремонт тормозов`

This is a Russian-only and parent-only implementation pass.

Do not create the disc-brake page file yet. Do not create the drum-brake page file yet. Those are separate future tasks after owner approval.

Important owner update: the parent page, top megamenu, and homepage may immediately use direct links to the reserved future child URLs:

- `/ru/services/diskovye-tormoza`
- `/ru/services/barabannye-tormoza`

If a temporary quality check fails only because these two future pages do not exist yet, report that clearly instead of creating the child pages in this parent-page task. Any other broken link must be fixed.

## Current repository state to verify before work

At preparation time on 2026-05-03:

- remote: `https://github.com/agenticab2b-sketch/mr.car.git`
- checked commit: `50c2f9f0301ca709449cabaa9c3ed603426ac6e9`
- `main`, `origin/main`, and `origin/HEAD` matched after `git fetch --prune origin`
- `npm run quality-gate` passed with `74 HTML files checked`

OpenClaw must still verify this again before editing:

```powershell
git fetch --prune origin
git status --short --branch
git rev-parse HEAD
git rev-parse origin/main
npm run quality-gate
```

If local `HEAD` and `origin/main` differ, do not assume either side is safe. Stop and report the exact commits.

## Work branch rule

Do not work directly on `main`.

## External server / fresh GitHub checkout rule

OpenClaw is expected to work on an external server, not in Codex's local workspace. Do not use an old copied checkout.

Start from the current GitHub repository:

```powershell
git clone https://github.com/agenticab2b-sketch/mr.car.git mr-car-openclaw
cd mr-car-openclaw
git fetch --prune origin
git switch main
git pull --ff-only origin main
git status --short --branch
git rev-parse HEAD
git rev-parse origin/main
```

If the repository already exists on the external server, verify it first:

```powershell
git remote -v
git fetch --prune origin
git status --short --branch
git rev-parse HEAD
git rev-parse origin/main
```

Required origin:

```text
https://github.com/agenticab2b-sketch/mr.car.git
```

If the existing server checkout is dirty, behind, ahead, has a different remote, or cannot fast-forward cleanly to `origin/main`, do not edit it. Clone a fresh copy into a new directory and work there.

After the fresh checkout is confirmed, create a feature branch for this task.

Use one agent-owned implementation branch, for example:

```powershell
git switch -c ag/brake-parent-ru
```

If the branch already exists or the worktree is dirty, stop and report the state before editing.

## Source of truth

Read these first:

1. `project-control/README.md`
2. `project-control/STRUCTURE.md`
3. `project-control/DECISIONS.md`
4. `project-control/ANTIGRAVITY_ONBOARDING.md`
5. `project-control/ANTIGRAVITY_RULES.md`
6. this task file
7. current examples:
   - `ru/services/remont-kpp.html`
   - `ru/services/remont-akpp.html`
   - `ru/services/remont-mkpp.html`
   - `ru/services/hodovaya-tormoza.html`
   - `ru/services/services-data.js`
   - `build.js`
   - `firebase.json`

If chat history conflicts with current repo files or this task, use the current repo files and this task.

The approved Russian source copy in this task is the content authority for the new parent page.

## Existing Russian mixed page to remove from active structure

This page currently mixes suspension/chassis and brakes and must not remain as the active Russian service page:

| Language | Old URL | Old file | Current issue |
|---|---|---|---|
| RU | `/ru/services/hodovaya-tormoza` | `ru/services/hodovaya-tormoza.html` | mixed `ходовая + тормоза` |

Required behavior:

- remove the old Russian mixed page from RU menus, RU service listings, RU sitemap, and RU internal links
- delete or stop publishing `ru/services/hodovaya-tormoza.html` if it is no longer needed
- add Firebase 301 redirects from the old RU clean URL to the new RU brake parent URL
- add the old `.html` redirect too if that path can still be requested
- do not create or modify the future suspension/chassis page in this task
- do not replace ET `/services/veermik-pidurid` or EN `/en/services/chassis-brakes` in this pass

## Approved current page

Create only this Russian page now:

| Page | URL | File | H1 | Role |
|---|---|---|---|---|
| Brake parent | `/ru/services/tormoznaya-sistema` | `ru/services/tormoznaya-sistema.html` | `Ремонт и обслуживание тормозных систем в Таллине` | broad brake-service entry page |

Use clean URLs in public links. Do not use `.html` in public internal links, canonical, hreflang, or sitemap entries.

## Reserved future pages

These pages are planned but must not be created in this parent-page task:

| Future page | Future URL | Future H1 | When to create |
|---|---|---|---|
| Disc brakes | `/ru/services/diskovye-tormoza` | `Дисковые тормоза` | separate future task |
| Drum brakes | `/ru/services/barabannye-tormoza` | `Барабанные тормоза` | separate future task after disc brakes |

Direct links to these future URLs are allowed and required now because the owner will create those pages immediately after the parent page. Use them in:

- the parent-page gearbox-style choice block
- the parent-page `Подробнее` CTAs
- the RU top megamenu brake cluster
- the RU homepage path to the brake child pages where the current menu/homepage pattern supports it

Do not create placeholder child HTML files to satisfy links. If `npm run quality-gate` fails only because these two links point to pages that are not created yet, report that as an expected temporary failure and do not widen scope.

## Mandatory design transfer from gearbox page

The new brake parent page must be designed as a close sibling of the Russian gearbox hub:

- live reference: `/ru/services/remont-kpp`
- file reference: `ru/services/remont-kpp.html`

OpenClaw must transfer the design system, not just reuse isolated text blocks. This means:

- same overall service-page shell and rhythm
- same dark technical visual mood
- same orange-accent palette and contrast logic
- same block pacing and section density
- same `sd-*` + `gb-*` visual language where appropriate
- same local navigation treatment
- same gearbox-style choice-card pattern, adapted to `Дисковые тормоза` and `Барабанные тормоза`
- same trust / urgency / diagnostics / FAQ / CTA design logic
- same Iconify/Material Design icon style
- same button, card, table/list, and CTA feel

The result should feel like the brake-system page belongs to the same cluster-quality design system as `Ремонт КПП`, not like a generic generated service article.

## Required repository changes

### Standalone RU parent page

Create:

- `ru/services/tormoznaya-sistema.html`

The old mixed file should not remain an active public Russian service page:

- `ru/services/hodovaya-tormoza.html`

If it is kept temporarily for comparison, it must not be linked from RU menus/sitemap and must not appear as the current canonical RU service page.

### `ru/services/services-data.js`

Replace the old `hodovaya-tormoza` service entry with a brake parent entry:

- slug: `tormoznaya-sistema`
- allSlugs for future parity: `{ ru: "tormoznaya-sistema", ee: "pidurisusteemi-hooldus-ja-remont", en: "brake-system-service-and-repair" }`
- category: do not use a visible category label that says `Ходовая и тормоза` for the brake parent
- navTitle: `Обслуживание и ремонт тормозов`
- heroTitle: `Ремонт и обслуживание тормозных систем в Таллине`
- service copy must be about brakes only, not suspension/chassis

Do not add `diskovye-tormoza` or `barabannye-tormoza` as normal service-data rows in this parent-page task unless the owner explicitly expands the task to create those pages too.

Do not edit `ee/services-data.js` or `en/services/services-data.js` in this pass except for a clearly necessary technical reason.

### `build.js`

Update generator support. Do not only edit generated HTML menus manually.

Required areas:

- `SERVICE_NAV_ORDER`: add future ET key `pidurisusteemi-hooldus-ja-remont` near the old suspension/brakes position so the new RU parent sorts correctly
- `SKIP_FILES`: add `tormoznaya-sistema` because this is a standalone page
- remove old RU mixed slug from active generated service paths by updating `ru/services/services-data.js`
- `STATIC_SERVICE_SITEMAP_PATHS.ru`: add `/ru/services/tormoznaya-sistema`

Do not add child page static sitemap paths until those pages exist.

Do not add ET/EN brake static sitemap paths until those pages exist.

After `node build.js`, sitemap must contain `/ru/services/tormoznaya-sistema` and must not contain `/ru/services/hodovaya-tormoza`. ET `/services/veermik-pidurid` and EN `/en/services/chassis-brakes` may remain until translation.

### `firebase.json`

Add 301 redirects from the old Russian mixed page to the new Russian brake parent:

- `/ru/services/hodovaya-tormoza` -> `/ru/services/tormoznaya-sistema`
- `/ru/services/hodovaya-tormoza.html` -> `/ru/services/tormoznaya-sistema`

Do not redirect ET or EN old mixed pages in this RU-only pass.

### RU global menu and duplicated headers

The repository has duplicated static headers and mobile menus. `build.js` handles generated service pages, but many public pages have hand-written header markup.

In this first pass:

- RU megamenu should link to the parent page `Обслуживание и ремонт тормозов`
- RU megamenu may also immediately include child links:
  - `Дисковые тормоза` -> `/ru/services/diskovye-tormoza`
  - `Барабанные тормоза` -> `/ru/services/barabannye-tormoza`
- update RU static headers/menus consistently
- use `node update-headers.js` only after reviewing its behavior
- do not use `update_menus.py` as-is; it is legacy flat-menu tooling and can remove submenu behavior
- inspect the diff after any bulk header update

### RU homepage and service listings

Update Russian internal links:

- `ru/index.html`
- `ru/uslugi.html`
- `ru/tseny.html`
- `ru/prices.html` if still present and linked
- Russian service sidebars and mobile sidebars
- any Russian body copy that links to `/ru/services/hodovaya-tormoza`

For this first pass:

- link homepage/service listing to the new parent page
- homepage may also include direct links to `/ru/services/diskovye-tormoza` and `/ru/services/barabannye-tormoza` if that matches the existing homepage/service-card pattern

No public RU internal link should point to `/ru/services/hodovaya-tormoza` after the change.

### CSS

The page must be visually based on the Russian gearbox hub:

- example: `/ru/services/remont-kpp`
- file: `ru/services/remont-kpp.html`

Allowed approaches:

1. Reuse the existing service/gearbox block language (`sd-*`, `gb-*`) and link the existing cluster CSS where appropriate.
2. Create a narrowly scoped `services/brakes.css` if brake-specific blocks are needed.

Guardrails:

- do not make broad global CSS changes unless necessary
- if CSS is scoped with a body class, add that body class to the RU brake parent page
- do not rely on `body.service-kpp-page`, `body.service-akpp-page`, or `body.service-mkpp-page` for brake pages
- preserve the gearbox design rhythm, palette, spacing, card language, CTA style, and MD/Iconify icon approach
- keep layout responsive and verify mobile
- update CSS cache query strings if a shared CSS file is changed

## Approved source content for the parent page

Use the following content as the approved copy. Keep the meaning, order, pricing, reviews, contact details, and schema consistent with this content while adapting markup to the existing Mr.Car page shell and gearbox visual system.

### Page metadata

- Page: `Ремонт и обслуживание тормозных систем в Таллине`
- URL: `/ru/services/tormoznaya-sistema`

### Block 1 - Hero

Eyebrow: `/// Автосервис Mr.Car`

H1: `Ремонт и обслуживание тормозных систем в Таллине`

Lead:

`Скрип, вибрация педали, увод в сторону — диагностируем и устраняем любые неисправности тормозов. Замена колодок, дисков, суппортов, замена жидкости, диагностика ABS. Дисковые и барабанные системы. Гарантия 12 месяцев.`

CTA: `Отправить заявку ↗`

### Block 2 - Stats strip

- `1 200+` - `тормозных систем обслужено`
- `15+` - `лет специализации`
- `30 мин` - `время ответа на заявку`

### Block 3 - Anchor navigation

- `Симптомы`
- `Диагностика`
- `Услуги и цены`
- `Отзывы`
- `FAQ`

### Block 4 - Intro

H2: `Тормоза — это не та система, с которой ждут`

`Тормозная система — единственное, что останавливает автомобиль. Её исправность напрямую влияет на тормозной путь: изношенные колодки увеличивают расстояние до полной остановки на 30–40%. При этом деградация происходит постепенно — водитель привыкает к изменениям и не замечает, насколько хуже стала система.`

`Mr.Car выполняет полное обслуживание тормозной системы: от плановой замены колодок и жидкости до диагностики ABS и ремонта суппортов. Определяем точно, что требует вмешательства — чтобы не менять то, что ещё работает. Работаем с дисковыми и барабанными системами на всех марках автомобилей.`

H3: `Выберите тип вашей тормозной системы:`

Choice card 1:

- title: `Дисковые тормоза`
- href: `/ru/services/diskovye-tormoza`
- text: `Замена колодок и дисков, ремонт суппортов, обслуживание EPB, диагностика ABS. Стандарт для передней оси всех современных авто и обеих осей на BMW, Audi, Mercedes-Benz.`

Choice card 2:

- title: `Барабанные тормоза`
- href: `/ru/services/barabannye-tormoza`
- text: `Замена колодок и цилиндров, восстановление механизма самоподвода, регулировка стояночного тормоза. Задняя ось городских авто и электрокаров.`

### Block 5 - Causes

H3: `Почему выходит из строя тормозная система?`

- `Естественный износ колодок` - `самая частая причина. В городском трафике Таллина ресурс передних колодок составляет 25 000–40 000 км. При толщине менее 3 мм — замена обязательна`
- `Коррозия из-за дорожных реагентов` - `противогололёдные смеси на таллинских дорогах ускоряют коррозию суппортов и рабочих цилиндров. Автомобиль, простоявший несколько дней на морозе, может «прихватить» — колодки примерзают к диску или барабану`
- `Старение тормозной жидкости` - `жидкость DOT4 поглощает влагу из воздуха. Уже через 2 года содержание воды достигает 2–3%, что снижает температуру кипения со штатных 230°C до 130°C. При экстренном торможении жидкость закипает — педаль проваливается в пол`
- `Заклинивание суппортов` - `повреждённые пыльники, дорожная соль и редкое обслуживание ведут к коррозии поршней и постоянному контакту колодки с диском`
- `Неравномерный износ` - `дешёвые колодки или замена без соблюдения попарного принципа ведут к деформации диска и биению педали`

Callout:

`Замена колодок стоит от 45 €. Если колодки «дошли до металла» и повредили диск — добавляется замена дисков от 120 € за ось. Каждая неделя промедления увеличивает стоимость ремонта. Запишитесь при первом симптоме.`

### Block 6 - Symptoms

H3: `Основные симптомы неисправности тормозной системы`

Card 1 title: `Скрип и писк при торможении`

`Высокочастотный звук — сигнал датчика износа: осталось менее 3 мм фрикционного материала. Можно доехать до сервиса, но не откладывайте дольше 1–2 недель. Металлический скрежет означает, что колодка уже «до металла» — диск повреждается при каждом нажатии на педаль.`

Card 2 title: `Вибрация или пульсация педали`

`Педаль ритмично пульсирует при торможении — признак деформации тормозного диска (биение run-out более 0,05 мм). Часто возникает после перегрева или резкого охлаждения горячего диска водой. Диск требует замены.`

Card 3 title: `Мягкая или проваливающаяся педаль`

`Педаль уходит глубоко или почти до пола, прежде чем появляется торможение. Причина — воздух в гидравлической системе или критически старая тормозная жидкость с высоким содержанием влаги. Требует немедленной диагностики.`

Card 4 title: `Увод при торможении`

`Автомобиль тянет влево или вправо при нажатии на тормоз. Признак заклинивания суппорта или неравномерного износа колодок на оси. Особенно опасно на мокрой дороге и в повороте.`

Card 5 title: `Горит лампа ABS или ESP`

`Система антиблокировки деактивирована. На скользкой дороге колёса заблокируются — автомобиль потеряет управляемость при экстренном торможении. Причина — неисправный датчик скорости колеса, насос ABS или электронный блок.`

Card 6 title: `Запах горелого после езды`

`Запах горящих накладок или нагретого металла после обычной поездки — признак заклинившего суппорта или рабочего цилиндра. Компонент удерживает колодку в постоянном контакте с диском или барабаном. Ведёт к перегреву и разрушению подшипника ступицы.`

### Block 7 - Why not delay

Callout:

`Тормозная система деградирует по цепочке. Изношенная колодка разрушает диск. Коррозия суппорта ведёт к неравномерному торможению и повреждению обоих дисков на оси. Влажная тормозная жидкость при экстренном торможении может закипеть — педаль провалится в пол. Потёкший цилиндр попадает жидкостью на колодки и лишает их эффективности. Каждый этап увеличивает стоимость ремонта в 2–3 раза по сравнению с предыдущим.`

### Block 8 - Process

H2: `Как проходит обслуживание тормозной системы в Mr.Car?`

Step 01 title: `Диагностика`

`Снимаем колёса, замеряем толщину колодок и дисков, проверяем биение дисков индикатором (допустимый run-out — до 0,05 мм). Осматриваем суппорты и пыльники, проверяем ход поршней. Считываем коды ошибок ABS и ESP. Тестируем тормозную жидкость на содержание влаги.`

Step 02 title: `Честная смета`

`Сообщаем, что именно требует замены или обслуживания — детали и работа отдельно. Если диски ещё в допуске — не навязываем замену. Если достаточно замены жидкости и регулировки — делаем только это. До начала любых работ.`

Step 03 title: `Обслуживание и ремонт по стандартам`

`Меняем только изношенные компоненты. Используем качественные колодки и диски проверенных брендов: Brembo, TRW, ATE, Bosch. Смазываем направляющие суппортов высокотемпературной смазкой. На авто с электромеханическим стояночным тормозом (EPB) — активируем сервисный режим через сканер.`

Step 04 title: `Прокачка и финальная проверка`

`После замены колодок, дисков или цилиндров прокачиваем тормозную систему свежей жидкостью нужного класса (DOT4 или DOT5.1). Проверяем свободный ход педали, симметричность торможения на оси, отсутствие утечек.`

Step 05 title: `Гарантия 12 месяцев`

`Письменная гарантия на детали и выполненные работы. После замены колодок и дисков объясняем правила притирки: первые 200 км — плавные торможения без экстренных остановок. Это обеспечивает правильный перенос фрикционного материала на диск и максимальный ресурс.`

### Block 9 - Services and prices

H2: `Услуги и ориентировочные цены`

| Услуга | Цена от |
|---|---|
| Диагностика тормозной системы | 30 € |
| Замена передних тормозных колодок (работа) | 45 € |
| Замена задних тормозных колодок (работа) | 50 € |
| Замена тормозного диска, пара / одна ось (работа) | 80 € |
| Ремонт суппорта (ремкомплект + работа) | 60 € |
| Замена рабочего тормозного цилиндра (работа) | 55 € |
| Замена тормозной жидкости (прокачка всей системы) | 35 € |
| Диагностика и ремонт ABS | 80 € |

Footnote:

`Цены указаны за работу без учёта стоимости запчастей. Точная стоимость деталей зависит от марки и модели автомобиля. Стоимость согласовывается до начала ремонта.`

### Block 10 - Disc and drum sections

H3: `Дисковые тормоза`

`Стандарт для передней оси всех современных автомобилей и для обеих осей на BMW, Audi, Mercedes-Benz, Volvo. Открытая конструкция обеспечивает быстрое охлаждение и короткий тормозной путь в любых условиях. При обслуживании обязательно проверяем толщину дисков: минимальный допуск для большинства авто составляет 20–22 мм для переднего диска — ниже этого значения замена обязательна независимо от внешнего вида.`

CTA text: `Подробнее: Ремонт дисковых тормозов в Таллине`

CTA href: `/ru/services/diskovye-tormoza`

H3: `Барабанные тормоза`

`Используются на задней оси большинства городских автомобилей, электрокаров и малотоннажных коммерческих авто. Закрытая конструкция защищает компоненты от соли и грязи — важное преимущество для эстонских зим. Ресурс барабанных колодок — 60 000–80 000 км, но механизм самоподвода, возвратные пружины и рабочие цилиндры требуют проверки каждые 30 000–40 000 км.`

CTA text: `Подробнее: Ремонт барабанных тормозов в Таллине`

CTA href: `/ru/services/barabannye-tormoza`

### Block 11 - Reviews

Summary: `4.9 · Google Reviews · на основе 120+ отзывов`

Review 1:

`★★★★★`

`«Начали скрипеть тормоза на Skoda Octavia — сильный металлический звук. Приехал в Mr.Car, диагностировали за полчаса: колодки стёрты до металла, передние диски в бороздах. Заменили всё за один день. Смета совпала с реальным счётом точь-в-точь.»`

`— Михаил Р., Skoda Octavia A7`

Review 2:

`★★★★★`

`«Горела лампа ABS на Mercedes C-класса. В другом месте сразу говорили про замену блока за 800 €. Здесь диагностировали — оказался датчик скорости колеса за 60 €. Сделали за день. Никакого лишнего.»`

`— Елена В., Mercedes-Benz C200 W205`

Review 3:

`★★★★★`

`«Обратился с жалобой на увод при торможении. Выяснилось — заклинил задний суппорт, колодка стёрлась неравномерно. Починили суппорт, прокачали жидкость — она оказалась почти чёрной и с высоким содержанием влаги. Теперь тормозит ровно и чётко.»`

`— Андрей К., Toyota RAV4`

### Block 12 - Trust bar

- `Гарантия 12 месяцев` - `письменная гарантия на детали и выполненные работы`
- `Brembo, TRW, ATE, Bosch` - `только проверенные производители колодок и дисков`
- `Прозрачные цены` - `смета до начала ремонта, детали и работа — отдельно`

### Block 13 - FAQ

H2: `Частые вопросы`

Question: `Как часто нужно менять тормозные колодки?`

Answer: `Передние колодки в городских условиях Таллина служат 25 000–40 000 км, задние — 40 000–60 000 км. Точный срок зависит от стиля езды, марки колодок и типа автомобиля. При каждом ТО рекомендуем проверять толщину: менее 3 мм — замена обязательна, 3–5 мм — планируйте замену в ближайшие 5 000–10 000 км.`

Question: `Нужно ли менять диски при замене колодок?`

Answer: `Не всегда. Если толщина диска выше минимально допустимого значения производителя и нет биения — диски можно оставить. Минимальная толщина обычно указана на торце диска (20–22 мм для передних дисков среднего авто). Если ниже допуска или есть биение более 0,05 мм — замена обязательна. Диски меняем парами на оси.`

Question: `Можно ли ездить, если скрипят тормоза?`

Answer: `Высокочастотный писк — сигнал датчика износа. До сервиса доехать можно, но не откладывайте дольше 1–2 недель. Если скрежет металлический — колодка уже «до металла», диск повреждается при каждом торможении. В этом случае ехать нельзя: риск для безопасности.`

Question: `Как часто менять тормозную жидкость?`

Answer: `Раз в 2 года или каждые 40 000 км — независимо от того, как выглядит жидкость. Тормозная жидкость поглощает влагу: уже через 2 года содержание воды достигает 2–3%, что снижает температуру кипения DOT4 со штатных 230°C до 130°C. При экстренном торможении перегретая жидкость закипает, образуется паровая пробка — педаль проваливается. Проверяем жидкость тестером при каждом визите.`

Question: `Горит лампа ABS — насколько это опасно?`

Answer: `При горящей лампе ABS система антиблокировки деактивирована. На сухой дороге разница незначительна. На мокрой или скользкой — колёса могут заблокироваться при экстренном торможении, и вы потеряете управление. Диагностика ABS в Mr.Car — от 80 €.`

Question: `Сколько стоит полная замена колодок и дисков?`

Answer: `Замена передних колодок и дисков на среднем европейском автомобиле (Golf, Octavia, Focus) — от 180–220 € с запчастями. На премиальных марках (BMW, Mercedes, Audi) — от 300–400 € в зависимости от модели. Точную стоимость называем после диагностики и выбора запчастей.`

### Block 14 - Form

Eyebrow: `/// Забронировать время`

H2: `Запись на диагностику тормозов`

Text: `Оставьте заявку — перезвоним в течение 30 минут`

Phone: `+372 5646 1210`

Form fields:

- `Имя`
- `Номер автомобиля`
- `E-mail`
- `Телефон`
- `Сообщение`

Button: `Отправить заявку ↗`

### Block 15 - Map

Eyebrow: `/// Как нас найти`

H2: `Мы находимся рядом`

- Address: `Kopli 82a, 10412 Tallinn`
- Hours: `Понедельник–Пятница 09:00–18:00 / Суббота–Воскресенье: Закрыто`
- Phone: `+372 5646 1210`
- Email: `info@mrcar.ee`

## Schema.org

Use JSON-LD equivalent to these approved blocks. Ensure URLs, canonical, and service names match `/ru/services/tormoznaya-sistema`.

### AutoRepair + LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "name": "Mr.Car Autoremont",
  "url": "https://www.mrcar.ee/ru/services/tormoznaya-sistema",
  "telephone": "+37256461210",
  "email": "info@mrcar.ee",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kopli 82a",
    "addressLocality": "Tallinn",
    "postalCode": "10412",
    "addressCountry": "EE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 59.4425,
    "longitude": 24.7182
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "areaServed": "Tallinn",
  "priceRange": "$$"
}
```

### Service with OfferCatalog

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ремонт и обслуживание тормозных систем в Таллине",
  "provider": {
    "@type": "AutoRepair",
    "name": "Mr.Car Autoremont"
  },
  "areaServed": "Tallinn",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Услуги по тормозным системам",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Диагностика тормозной системы"}, "price": "30", "priceCurrency": "EUR"},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Замена передних тормозных колодок"}, "price": "45", "priceCurrency": "EUR"},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Замена задних тормозных колодок"}, "price": "50", "priceCurrency": "EUR"},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Замена тормозных дисков (пара, одна ось)"}, "price": "80", "priceCurrency": "EUR"},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Ремонт суппорта"}, "price": "60", "priceCurrency": "EUR"},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Замена тормозной жидкости"}, "price": "35", "priceCurrency": "EUR"},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Диагностика и ремонт ABS"}, "price": "80", "priceCurrency": "EUR"}
    ]
  }
}
```

### FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Как часто нужно менять тормозные колодки?",
      "acceptedAnswer": {"@type": "Answer", "text": "Передние колодки в городских условиях Таллина служат 25 000–40 000 км, задние — 40 000–60 000 км. При толщине менее 3 мм замена обязательна."}
    },
    {
      "@type": "Question",
      "name": "Нужно ли менять диски при замене колодок?",
      "acceptedAnswer": {"@type": "Answer", "text": "Не всегда. Если толщина диска выше минимально допустимого значения и нет биения — диски можно оставить. Диски меняем парами на оси."}
    },
    {
      "@type": "Question",
      "name": "Как часто менять тормозную жидкость?",
      "acceptedAnswer": {"@type": "Answer", "text": "Раз в 2 года или каждые 40 000 км. Содержание влаги 2–3% снижает температуру кипения DOT4 со 230°C до 130°C — риск паровой пробки при экстренном торможении."}
    },
    {
      "@type": "Question",
      "name": "Горит лампа ABS — насколько это опасно?",
      "acceptedAnswer": {"@type": "Answer", "text": "При горящей лампе ABS система антиблокировки деактивирована. На скользкой дороге колёса могут заблокироваться при экстренном торможении. Диагностика ABS — от 80 €."}
    },
    {
      "@type": "Question",
      "name": "Сколько стоит полная замена колодок и дисков?",
      "acceptedAnswer": {"@type": "Answer", "text": "На среднем европейском автомобиле — от 180–220 € с запчастями. На BMW, Mercedes, Audi — от 300–400 €. Точную стоимость называем после диагностики."}
    },
    {
      "@type": "Question",
      "name": "Можно ли ездить, если скрипят тормоза?",
      "acceptedAnswer": {"@type": "Answer", "text": "Писк — сигнал датчика износа, до сервиса доехать можно. Металлический скрежет означает износ до металла — ехать нельзя, диск повреждается при каждом торможении."}
    }
  ]
}
```

## SEO and hreflang guardrails

- The page has one clear intent: `Ремонт и обслуживание тормозных систем в Таллине`.
- Do not create synonym duplicates.
- This is RU-only now: do not add ET/EN hreflang links to brake equivalents that do not exist yet.
- Use canonical and RU self-reference where appropriate.
- No `.html` in canonical, hreflang, sitemap, or internal clean URLs.
- Keep title under roughly 65 characters and meta description under roughly 158 characters where practical.
- Add the RU parent page to `sitemap.xml` through `build.js`, then verify the generated sitemap.
- Old RU mixed URL should redirect and should not remain in sitemap.

## Verification required

Run after implementation:

```powershell
node build.js
npm run quality-gate
git status --short
```

Also manually inspect:

- the new RU parent page exists and loads through the clean URL
- the parent page links to `/ru/services/diskovye-tormoza` and `/ru/services/barabannye-tormoza`
- no `diskovye-tormoza.html` or `barabannye-tormoza.html` files were created in this parent-page task
- old RU mixed URL is redirected in `firebase.json`
- RU menu links point to the new brake parent and prepared child URLs
- local navigation anchors exist
- form posts to `/api/lead`
- contact/map/floating CTA are still present
- no RU public link points to `/ru/services/hodovaya-tormoza`
- `sitemap.xml` contains `/ru/services/tormoznaya-sistema` and not `/ru/services/hodovaya-tormoza`
- ET/EN mixed pages remain untouched unless a necessary technical change was reported

Temporary exception:

- If `npm run quality-gate` fails only because `/ru/services/diskovye-tormoza` and `/ru/services/barabannye-tormoza` are linked but their pages are not created yet, report this exact temporary failure and stop. Do not create the child pages to make the parent task pass.

## Stop gates

Stop and report instead of guessing if:

- local `main` is behind/ahead of `origin/main`
- worktree is dirty before starting
- a proposed URL conflicts with an existing page
- the old RU mixed page remains linked from many places after attempted replacement
- a bulk header/menu update touches unexpectedly many unrelated areas
- OpenClaw is about to create the disc or drum page in this parent-page task
- `npm run quality-gate` fails for anything other than the two known future child links

## Review checklist

- branch is not `main`
- old RU mixed page is removed from active Russian service structure
- exactly one new RU brake page exists in this task
- no disc/drum page files were created
- URL/H1/page role match the approved current page table
- old RU mixed clean URL redirects to the new RU brake parent URL
- parent page contains a gearbox-style choice block with direct links to `Дисковые тормоза` and `Барабанные тормоза`
- generated and static RU menus are consistent
- sitemap includes the new RU parent page and excludes old RU mixed page
- no missing service links except the two approved temporary child URLs if those pages are not created yet
- no unsupported ET/EN hreflang links
- form and lead flow remain wired
- content is useful for ordinary drivers, not thin SEO filler
