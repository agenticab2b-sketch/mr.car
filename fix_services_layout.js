/**
 * Rewrites the Services section in all 3 About Us pages to match
 * the 2-column layout (sd-main) used on service detail pages:
 * LEFT: section-header with title + short description
 * RIGHT: sd-sidebar with categorized service links
 */
const fs = require('fs');

// ─── RUSSIAN VERSION ──────────────────────────────────────────────────────────

const ruServicesBlock = `        <!-- SERVICES GRID -->
        <section class="services-section">
            <div class="sd-main site-container reveal">
                <!-- LEFT: Header + description -->
                <div class="sd-content">
                    <div class="section-header">
                        <span class="meta text-accent">/// Наши услуги</span>
                        <h2>Услуги автосервиса в Таллинне</h2>
                    </div>
                    <p style="color: var(--text-dimmed); font-size: 0.95rem; line-height: 1.8; max-width: 520px; margin: 0;">
                        Мы предлагаем полный спектр услуг по техническому обслуживанию и ремонту автомобилей — от
                        плановой замены масла до сложного ремонта двигателя. Все работы выполняются по стандартам
                        производителей.
                    </p>
                    <a href="/ru/kontakt" class="btn btn-primary" style="width: fit-content;">Записаться на ремонт <span class="arrow">↗</span></a>
                </div>

                <!-- RIGHT: Services sidebar -->
                <aside class="sd-sidebar">
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Диагностика и электрика</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/ru/services/elektrika" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:lightning-bolt" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Автоэлектрика</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Двигатель и агрегаты</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/ru/services/remont-dvigatelya" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:engine" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Ремонт двигателя</span>
                            </a></li>
                            <li><a href="/ru/services/remont-kpp" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-shift-pattern" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Ремонт КПП</span>
                            </a></li>
                            <li><a href="/ru/services/glushiteli-svarka" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:fire" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Глушители и сварка</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Ходовая и тормоза</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/ru/services/hodovaya-tormoza" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-brake-alert" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Ходовая и тормоза</span>
                            </a></li>
                            <li><a href="/ru/services/shinomontazh" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:tire" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Шиномонтаж</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Обслуживание</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/ru/services/tehobsluzhivanie-diagnostika" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-cog" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>ТО и диагностика</span>
                            </a></li>
                            <li><a href="/ru/services/zamena-masla" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:oil" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Замена масла и фильтров</span>
                            </a></li>
                            <li><a href="/ru/services/proverka-pered-pokupkoy" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:file-search-outline" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Проверка перед покупкой</span>
                            </a></li>
                            <li><a href="/ru/services/autoremont" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:wrench" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Общий авторемонт</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Климат и доп. оборудование</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/ru/services/klimat-konditsioner" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:snowflake" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Климат и кондиционер</span>
                            </a></li>
                            <li><a href="/ru/services/webasto" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:radiator" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Ремонт Webasto</span>
                            </a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>`;

// ─── ESTONIAN VERSION ─────────────────────────────────────────────────────────

const etServicesBlock = `        <!-- ===== SERVICES GRID ===== -->
        <section class="services-section">
            <div class="sd-main site-container reveal">
                <!-- LEFT: Header + description -->
                <div class="sd-content">
                    <div class="section-header">
                        <span class="meta text-accent">/// Mida pakume</span>
                        <h2>Autoteeninduse teenused Tallinnas</h2>
                    </div>
                    <p style="color: var(--text-dimmed); font-size: 0.95rem; line-height: 1.8; max-width: 520px; margin: 0;">
                        Pakume täielikku valiku sõiduauto hooldusteenuseid ja remonditöid — alates regulaarsest
                        õlivahetusest kuni keeruka mootoriremonti. Kõik tööd tehakse vastavalt tootjate standarditele.
                    </p>
                    <a href="/kontakt" class="btn btn-primary" style="width: fit-content;">Broneeri aeg <span class="arrow">↗</span></a>
                </div>

                <!-- RIGHT: Services sidebar -->
                <aside class="sd-sidebar">
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Diagnostika ja elektrika</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/services/elektritood" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:lightning-bolt" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Elektritööd</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Mootor ja agregaadid</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/services/mootoriremont" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:engine" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Mootori remont</span>
                            </a></li>
                            <li><a href="/services/kaigukastiremont" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-shift-pattern" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Käigukasti remont</span>
                            </a></li>
                            <li><a href="/services/summutid-keevitus" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:fire" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Summutid ja keevitus</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Veermik ja pidurid</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/services/veermik-pidurid" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-brake-alert" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Veermiku ja pidurite remont</span>
                            </a></li>
                            <li><a href="/services/rehvitood" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:tire" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Rehvitööd</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Hooldus</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/services/hooldus-diagnostika" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-cog" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Hooldus ja diagnostika</span>
                            </a></li>
                            <li><a href="/services/olivahetus" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:oil" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Õli ja filtrite vahetus</span>
                            </a></li>
                            <li><a href="/services/ostueelne-kontroll" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:file-search-outline" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Enne ostu kontroll</span>
                            </a></li>
                            <li><a href="/services/autoremont" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:wrench" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Üldine autoremont</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Kliima ja varustus</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/services/kliimahooldus" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:snowflake" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Kliima ja konditsioneer</span>
                            </a></li>
                            <li><a href="/services/webasto-diagnostika" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:radiator" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Webasto remont</span>
                            </a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>`;

// ─── ENGLISH VERSION ──────────────────────────────────────────────────────────

const enServicesBlock = `        <!-- SERVICES GRID -->
        <section class="services-section">
            <div class="sd-main site-container reveal">
                <!-- LEFT: Header + description -->
                <div class="sd-content">
                    <div class="section-header">
                        <span class="meta text-accent">/// What We Offer</span>
                        <h2>Our Car Repair Services in Tallinn</h2>
                    </div>
                    <p style="color: var(--text-dimmed); font-size: 0.95rem; line-height: 1.8; max-width: 520px; margin: 0;">
                        We offer a full range of car maintenance and repair services — from scheduled oil changes to
                        complex engine repairs. All work is carried out to manufacturer standards.
                    </p>
                    <a href="/en/contact" class="btn btn-primary" style="width: fit-content;">Book a service <span class="arrow">↗</span></a>
                </div>

                <!-- RIGHT: Services sidebar -->
                <aside class="sd-sidebar">
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Diagnostics & Electrical</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/en/services/electrical-repair" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:lightning-bolt" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Electrical repair</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Engine & Drivetrain</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/en/services/engine-repair" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:engine" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Engine repair</span>
                            </a></li>
                            <li><a href="/en/services/transmission-repair" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-shift-pattern" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Transmission repair</span>
                            </a></li>
                            <li><a href="/en/services/exhaust-welding" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:fire" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Exhaust & welding</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Chassis & Brakes</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/en/services/chassis-brakes" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-brake-alert" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Brakes & suspension</span>
                            </a></li>
                            <li><a href="/en/services/tire-service" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:tire" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Tire service</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Maintenance</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/en/services/maintenance-diagnostics" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:car-cog" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Maintenance & diagnostics</span>
                            </a></li>
                            <li><a href="/en/services/oil-change" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:oil" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Oil & filter change</span>
                            </a></li>
                            <li><a href="/en/services/pre-purchase-inspection" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:file-search-outline" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Pre-purchase inspection</span>
                            </a></li>
                            <li><a href="/en/services/general-car-repair" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:wrench" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>General car repair</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Climate & Equipment</div>
                        <ul class="sd-sidebar__list">
                            <li><a href="/en/services/ac-service" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:snowflake" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>AC & climate service</span>
                            </a></li>
                            <li><a href="/en/services/webasto-repair" class="sd-sidebar__link">
                                <iconify-icon icon="mdi:radiator" width="18" height="18" aria-hidden="true"></iconify-icon>
                                <span>Webasto repair</span>
                            </a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>`;

// ─── APPLY PATCHES ────────────────────────────────────────────────────────────

function replaceSection(file, searchStart, searchEnd, newBlock) {
    let content = fs.readFileSync(file, 'utf8');
    const startIdx = content.indexOf(searchStart);
    if (startIdx === -1) {
        console.log(`  ⚠ Could not find start marker in ${file}`);
        return;
    }
    const endIdx = content.indexOf(searchEnd, startIdx);
    if (endIdx === -1) {
        console.log(`  ⚠ Could not find end marker in ${file}`);
        return;
    }
    // Include the searchEnd string
    const endFull = endIdx + searchEnd.length;
    content = content.slice(0, startIdx) + newBlock + content.slice(endFull);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  ✓ Replaced services section in ${file}`);
}

// RU: search for the services section comment and the closing </section>
replaceSection(
    'ru/o-nas.html',
    '        <!-- SERVICES GRID -->',
    '        </section>\n\n        <!-- VALUES CARDS -->',
    ruServicesBlock + '\n\n        <!-- VALUES CARDS -->'
);

// ET: search for the services section comment and the closing tag before VALUES
replaceSection(
    'meist.html',
    '        <!-- ===== SERVICES GRID ===== -->',
    '        </section>\n\n        <!-- ===== VALUES CARDS ===== -->',
    etServicesBlock + '\n\n        <!-- ===== VALUES CARDS ===== -->'
);

// EN: search for the services section comment
replaceSection(
    'en/about.html',
    '        <!-- SERVICES GRID -->',
    '        </section>\n\n        <!-- VALUES CARDS -->',
    enServicesBlock + '\n\n        <!-- VALUES CARDS -->'
);

console.log('Done');
