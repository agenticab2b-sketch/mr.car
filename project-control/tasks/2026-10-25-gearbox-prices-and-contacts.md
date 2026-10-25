# Прайсы коробок передач и единый контакт — пакет к публикации

Дата: 25.10.2026. Статус: полный пакет реализован; владелец поручил публикацию 25.10.2026.

## Что подготовлено

- АКПП: 14 согласованных услуг в исходном порядке, на RU/ET/EN.
- МКПП: 9 исходных услуг и дефектовка валов КПП за 45 €/час, вставленная сразу после дефектовки МКПП (итого 10).
- Прайсы размещены на шести страницах услуг и трёх общих страницах цен: `hinnad.html`, `ru/tseny.html`, `en/prices.html`.
- Сохранены полные примечания о НДС 24%, зависимости окончательной цены, отдельной оплате запчастей и расходников и согласовании дополнительных работ.
- Сборка указана отдельно; дефектовка явно не включает сборку. Разборка не добавлена в формулировки дефектовки.

## Контакты по уточнению владельца

Единый номер во всех публичных контактных блоках: **+372 5646 1210**; ссылка `tel:+37256461210`.

- ET: **Klienditeenindus**.
- RU: **Обслуживание клиентов**.
- EN: **Customer service**.

Имена сотрудников и номер +372 5850 3960 убраны из контактных карточек, карты, подвала и активных источников генерации. Персональные описания языков и специализаций сотрудников также удалены. Кнопки звонка сохраняют свои подписи и получают доступное название службы поддержки. В шапке и мобильном меню показан полный единый номер.

## Согласованность карточек услуг

Вне таблиц также исправлены старые цены: диагностика МКПП EN — от €50, масло МКПП EN — от €45, гидротрансформатор RU — от 300 €. В карточках работ, для которых в согласованном списке нет отдельной цены (гидроблок, полный капитальный ремонт АКПП, комплексный DSG/PDK, синхронизаторы и подшипники), старые неподтверждённые суммы заменены на «После диагностики» / «After diagnostics». Названия и описания этих услуг сохранены.

## Проверки

- `npm run quality-gate`: успешно, 92 HTML-страницы.
- Повторный `node build.js` не меняет подготовленные файлы; старые цены и контакты не возвращаются.
- 45 сочетаний страницы и ширины экрана (1440, 390 и 320 px): цены, порядок, примечания, телефонные ссылки и отсутствие горизонтального переполнения проверены в браузере.
- 504 телефонные ссылки в 102 активных/поддерживаемых HTML-файлах ведут на единый номер; 104 непустых блока JSON-LD синтаксически корректны. Старый исключённый из публикации `ru/services/service.html` содержит пустой динамический JSON-LD; он не относится к этому пакету.
- Локальные снимки и результаты браузерной проверки: `tmp/gearbox-package/`.
- Во время браузерной проверки внешние запросы заблокированы; реальные заявки и звонки не выполнялись.

## Публикация

Владелец поручил реализовать подготовленный пакет 25.10.2026. Публикация выполняется через существующий Firebase workflow из main, как предписывают неизменённые hooks этого клона. После завершения workflow проверяются опубликованные прайсы и контакты. Настройки Firebase и маршруты страниц не изменены.

## Точный состав прайсов

### АКПП — RU

Файл: `ru/services/remont-akpp.html`.

**Диагностика и ремонт автоматических коробок передач**

| № | Услуга | Цена |
|---:|---|---|
| 1 | Диагностика АКПП | от 50 € |
| 2 | Снятие и установка АКПП (передний / задний привод) | от 300 € |
| 3 | Снятие и установка АКПП (полный привод) | от 350 € |
| 4 | Дефектовка АКПП (сборка не входит в стоимость) | от 100 € |
| 5 | Сборка АКПП (без ремонта) | от 200 € |
| 6 | Ремонт АКПП | от 350 € |
| 7 | Замена сальников АКПП | от 50 € |
| 8 | Замена масла в АКПП | от 90 € |
| 9 | Снятие и установка мехатроника | от 200 € |
| 10 | Дефектовка мехатроника | от 150 € |
| 11 | Ремонт мехатроника | от 250 € |
| 12 | Ремонт гидротрансформатора | от 300 € |
| 13 | Замена сцепления DSG DQ200 | от 140 € |
| 14 | Адаптация DSG DQ200 | от 70 € |

Примечание: Все цены включают НДС 24%. Окончательная стоимость зависит от модели автомобиля, характера неисправности и объёма необходимых работ. Запасные части и расходные материалы оплачиваются отдельно. Дополнительные работы предварительно согласовываются с клиентом.

### АКПП — ET

Файл: `services/automaatkasti-remont.html`.

**Automaatkäigukastide diagnostika ja remondi hinnakiri**

| № | Услуга | Цена |
|---:|---|---|
| 1 | Automaatkäigukasti diagnostika | alates 50 € |
| 2 | Automaatkäigukasti eemaldamine ja paigaldamine (esi- või tagavedu) | alates 300 € |
| 3 | Automaatkäigukasti eemaldamine ja paigaldamine (nelikvedu) | alates 350 € |
| 4 | Automaatkäigukasti defekteerimine (kokkupanek ei sisaldu hinnas) | alates 100 € |
| 5 | Automaatkäigukasti kokkupanek (ilma remondita) | alates 200 € |
| 6 | Automaatkäigukasti remont | alates 350 € |
| 7 | Automaatkäigukasti õlitihendite vahetus | alates 50 € |
| 8 | Automaatkäigukasti õlivahetus | alates 90 € |
| 9 | Mehhatroonikaploki eemaldamine ja paigaldamine | alates 200 € |
| 10 | Mehhatroonikaploki defekteerimine | alates 150 € |
| 11 | Mehhatroonikaploki remont | alates 250 € |
| 12 | Pöördemomendimuunduri remont | alates 300 € |
| 13 | DSG DQ200 siduri vahetus | alates 140 € |
| 14 | DSG DQ200 käigukasti adapteerimine | alates 70 € |

Märkus: Kõik hinnad sisaldavad käibemaksu 24%. Lõplik hind sõltub sõiduki mudelist, rikke iseloomust ja vajalike tööde mahust. Varuosad ja kulumaterjalid tasutakse eraldi. Lisatööd kooskõlastatakse kliendiga enne nende tegemist.

### АКПП — EN

Файл: `en/services/automatic-transmission-repair.html`.

**Automatic Transmission Diagnostics and Repair — Price List**

| № | Услуга | Цена |
|---:|---|---|
| 1 | Automatic transmission diagnostics | from €50 |
| 2 | Automatic transmission removal and installation (front-wheel or rear-wheel drive) | from €300 |
| 3 | Automatic transmission removal and installation (all-wheel drive) | from €350 |
| 4 | Automatic transmission fault assessment (reassembly not included in the price) | from €100 |
| 5 | Automatic transmission reassembly (without repairs) | from €200 |
| 6 | Automatic transmission repair | from €350 |
| 7 | Automatic transmission oil seal replacement | from €50 |
| 8 | Automatic transmission oil change | from €90 |
| 9 | Mechatronic unit removal and installation | from €200 |
| 10 | Mechatronic unit fault assessment | from €150 |
| 11 | Mechatronic unit repair | from €250 |
| 12 | Torque converter repair | from €300 |
| 13 | DSG DQ200 clutch replacement | from €140 |
| 14 | DSG DQ200 transmission adaptation | from €70 |

Note: All prices include 24% VAT. The final price depends on the vehicle model, the nature of the fault and the scope of work required. Spare parts and consumables are charged separately. Any additional work is agreed with the customer in advance.

### МКПП — RU

Файл: `ru/services/remont-mkpp.html`.

**Диагностика и ремонт МКПП**

| № | Услуга | Цена |
|---:|---|---|
| 1 | Диагностика МКПП | от 50 € |
| 2 | Снятие и установка МКПП (передний / задний привод) | от 300 € |
| 3 | Снятие и установка МКПП (полный привод) | от 350 € |
| 4 | Дефектовка МКПП (сборка не входит в стоимость) | от 100 € |
| 5 | Дефектовка валов КПП | 45 €/час |
| 6 | Сборка МКПП (без ремонта) | от 200 € |
| 7 | Капитальный ремонт МКПП | от 600 € |
| 8 | Замена сальников МКПП | от 50 € |
| 9 | Замена масла в МКПП | от 45 € |
| 10 | Замена сцепления | от 300 € |

Примечание: Все цены включают НДС 24%. Окончательная стоимость зависит от модели автомобиля, характера неисправности и объёма необходимых работ. Запасные части и расходные материалы оплачиваются отдельно. Дополнительные работы предварительно согласовываются с клиентом.

### МКПП — ET

Файл: `services/kasikasti-remont.html`.

**Manuaalkäigukastide diagnostika ja remondi hinnakiri**

| № | Услуга | Цена |
|---:|---|---|
| 1 | Manuaalkäigukasti diagnostika | alates 50 € |
| 2 | Manuaalkäigukasti eemaldamine ja paigaldamine (esi- või tagavedu) | alates 300 € |
| 3 | Manuaalkäigukasti eemaldamine ja paigaldamine (nelikvedu) | alates 350 € |
| 4 | Manuaalkäigukasti defekteerimine (kokkupanek ei sisaldu hinnas) | alates 100 € |
| 5 | Käigukasti võllide defekteerimine | 45 €/tund |
| 6 | Manuaalkäigukasti kokkupanek (ilma remondita) | alates 200 € |
| 7 | Manuaalkäigukasti kapitaalremont | alates 600 € |
| 8 | Manuaalkäigukasti õlitihendite vahetus | alates 50 € |
| 9 | Manuaalkäigukasti õlivahetus | alates 45 € |
| 10 | Siduri vahetus | alates 300 € |

Märkus: Kõik hinnad sisaldavad käibemaksu 24%. Lõplik hind sõltub sõiduki mudelist, rikke iseloomust ja vajalike tööde mahust. Varuosad ja kulumaterjalid tasutakse eraldi. Lisatööd kooskõlastatakse kliendiga enne nende tegemist.

### МКПП — EN

Файл: `en/services/manual-transmission-repair.html`.

**Manual Transmission Diagnostics and Repair — Price List**

| № | Услуга | Цена |
|---:|---|---|
| 1 | Manual transmission diagnostics | from €50 |
| 2 | Manual transmission removal and installation (front-wheel or rear-wheel drive) | from €300 |
| 3 | Manual transmission removal and installation (all-wheel drive) | from €350 |
| 4 | Manual transmission fault assessment (reassembly not included in the price) | from €100 |
| 5 | Gearbox Shaft Inspection | €45/hour |
| 6 | Manual transmission reassembly (without repairs) | from €200 |
| 7 | Complete manual transmission overhaul | from €600 |
| 8 | Manual transmission oil seal replacement | from €50 |
| 9 | Manual transmission oil change | from €45 |
| 10 | Clutch replacement | from €300 |

Note: All prices include 24% VAT. The final price depends on the vehicle model, the nature of the fault and the scope of work required. Spare parts and consumables are charged separately. Any additional work is agreed with the customer in advance.
