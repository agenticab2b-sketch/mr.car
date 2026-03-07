const fs = require('fs');

const files = [
    {
        path: 'ru/o-nas.html',
        marker: '<!-- SERVICES GRID -->',
        texts: {
            title: 'Услуги автосервиса в Таллинне',
            meta: '/// Наши услуги',
            intro: 'Мы предлагаем полный спектр услуг по техническому обслуживанию и ремонту автомобилей — от плановой замены масла до сложного ремонта двигателя. Все работы выполняются по стандартам производителей.'
        },
        sidebarStartPattern: `<div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Диагностика и электрика</div>`
    },
    {
        path: 'meist.html',
        marker: '<!-- ===== SERVICES GRID ===== -->',
        texts: {
            title: 'Autoteeninduse teenused Tallinnas',
            meta: '/// Mida pakume',
            intro: 'Pakume täielikku valikut sõiduauto hooldusteenuseid ja remonditöid — alates regulaarsest õlivahetusest kuni keeruka mootoriremondini. Kõik tööd tehakse vastavalt tootjate standarditele.'
        },
        sidebarStartPattern: `<div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Diagnostika ja elektrika</div>`
    },
    {
        path: 'en/about.html',
        marker: '<!-- SERVICES GRID -->',
        texts: {
            title: 'Our Car Repair Services in Tallinn',
            meta: '/// What We Offer',
            intro: 'We offer a full range of car maintenance and repair services — from scheduled oil changes to complex engine repairs. All work is carried out to manufacturer standards.'
        },
        sidebarStartPattern: `<div class="sd-sidebar__category">
                        <div class="sd-sidebar__cat-title">Diagnostics & Electrical</div>`
    }
];

// Helper to get sidebar HTML for each language (copying from the appropriate ru/services/tehobsluzhivanie-diagnostika.html)
const getSidebarHtml = (lang) => {
    if (lang === 'ru') {
        return `
                <!-- RIGHT: Services sidebar -->
                <aside class="sd-sidebar" style="position: sticky; top: 120px;">
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
                </aside>`;
    } else if (lang === 'et') {
        return `
                <!-- RIGHT: Services sidebar -->
                <aside class="sd-sidebar" style="position: sticky; top: 120px;">
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
                </aside>`;
    } else {
        return `
                <!-- RIGHT: Services sidebar -->
                <aside class="sd-sidebar" style="position: sticky; top: 120px;">
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
                </aside>`;
    }
};

files.forEach(fileInfo => {
    let html = fs.readFileSync(fileInfo.path, 'utf8');

    // Extract the existing grid
    const gridMatch = html.match(/<div class="services-all__grid">[\s\S]*?<\/div>\s*<\/div>/);
    if (!gridMatch) {
        console.log(`Grid not found in ${fileInfo.path}, perhaps already modified.`);
        return;
    }
    const innerGrid = html.match(/<div class="services-all__grid">[\s\S]*?<\/div>/)[0];

    // Find the whole section
    const sectionPattern = new RegExp(`${fileInfo.marker}[\\s\\S]*?<!-- (?:===== )?VALUES CARDS (?:===== )?-->`);
    const sectionMatch = html.match(sectionPattern);

    if (sectionMatch) {
        const lang = fileInfo.path.includes('ru') ? 'ru' : (fileInfo.path.includes('en') ? 'en' : 'et');
        const sidebarHtml = getSidebarHtml(lang);
        const markerVals = fileInfo.marker === '<!-- ===== SERVICES GRID ===== -->' ? '<!-- ===== VALUES CARDS ===== -->' : '<!-- VALUES CARDS -->';

        const newSection = `${fileInfo.marker}
        <section class="services-section">
            <div class="sd-main site-container reveal">
                <!-- LEFT: Content -->
                <article class="sd-content">
                    <div class="section-header">
                        <span class="meta text-accent">${fileInfo.texts.meta}</span>
                        <h2>${fileInfo.texts.title}</h2>
                    </div>
                    <p style="color: var(--text-dimmed); font-size: 0.95rem; line-height: 1.8; margin: 0 0 1.5rem 0; max-width: 600px;">
                        ${fileInfo.texts.intro}
                    </p>
                    ${innerGrid}
                </article>
${sidebarHtml}
            </div>
        </section>

        ${markerVals}`;

        html = html.replace(sectionPattern, newSection);
        fs.writeFileSync(fileInfo.path, html, 'utf8');
        console.log(`Successfully updated ${fileInfo.path}`);
    } else {
        console.log(`Section bounds not found for ${fileInfo.path}`);
    }
});
