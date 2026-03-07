/**
 * Fixes 3 layout issues across all 3 About Us pages:
 * 1. Services section header: meta + h2 → proper section-header column (left-aligned, stacked)
 * 2. Values section header: same fix, proper section-header column
 * 3. CTA section: add border-top + more vertical breathing room, fix phone btn
 */
const fs = require('fs');

const files = ['meist.html', 'ru/o-nas.html', 'en/about.html'];

// Each patch: { search, replace } - simple string replacement
const universalPatches = [
    // FIX 1: Services section header
    // BEFORE: flat services-section__header with meta + h2 siblings (space-between flex, meta and h2 side by side)
    // AFTER: header div contains a section-header div (column of meta then h2)
    {
        id: 'services-header-et',
        search: `            <div class="services-section__header site-container">\r\n                <span class="meta text-accent">/// Meie teenused</span>\r\n                <h2>Autoteeninduse teenused Tallinnas</h2>\r\n            </div>`,
        replace: `            <div class="services-section__header site-container">\r\n                <div class="section-header">\r\n                    <span class="meta text-accent">/// Meie teenused</span>\r\n                    <h2>Autoteeninduse teenused Tallinnas</h2>\r\n                </div>\r\n            </div>`,
    },
    {
        id: 'services-header-ru',
        search: `            <div class="services-section__header site-container">\r\n                <span class="meta text-accent">/// Наши услуги</span>\r\n                <h2>Услуги автосервиса в Таллинне</h2>\r\n            </div>`,
        replace: `            <div class="services-section__header site-container">\r\n                <div class="section-header">\r\n                    <span class="meta text-accent">/// Наши услуги</span>\r\n                    <h2>Услуги автосервиса в Таллинне</h2>\r\n                </div>\r\n            </div>`,
    },
    {
        id: 'services-header-en',
        search: `            <div class="services-section__header site-container">\r\n                <span class="meta text-accent">/// Our Services</span>\r\n                <h2>Car Service in Tallinn</h2>\r\n            </div>`,
        replace: `            <div class="services-section__header site-container">\r\n                <div class="section-header">\r\n                    <span class="meta text-accent">/// Our Services</span>\r\n                    <h2>Car Service in Tallinn</h2>\r\n                </div>\r\n            </div>`,
    },

    // FIX 2: Values section header (Russian)
    {
        id: 'values-header-ru',
        search: `            <div class="services-section__header site-container">\r\n                <span class="meta text-accent">/// Почему выбирают нас</span>\r\n                <h2>Почему клиенты доверяют Mr.Car</h2>\r\n            </div>`,
        replace: `            <div class="services-section__header site-container">\r\n                <div class="section-header">\r\n                    <span class="meta text-accent">/// Почему выбирают нас</span>\r\n                    <h2>Почему клиенты доверяют Mr.Car</h2>\r\n                </div>\r\n            </div>`,
    },
    // FIX 2: Values section header (Estonian)
    {
        id: 'values-header-et',
        search: `            <div class="services-section__header site-container">\r\n                <span class="meta text-accent">/// Miks meid valitakse</span>\r\n                <h2>Miks kliendid usaldavad Mr.Car</h2>\r\n            </div>`,
        replace: `            <div class="services-section__header site-container">\r\n                <div class="section-header">\r\n                    <span class="meta text-accent">/// Miks meid valitakse</span>\r\n                    <h2>Miks kliendid usaldavad Mr.Car</h2>\r\n                </div>\r\n            </div>`,
    },
    // FIX 2: Values section header (English)
    {
        id: 'values-header-en',
        search: `            <div class="services-section__header site-container">\r\n                <span class="meta text-accent">/// Why Choose Us</span>\r\n                <h2>Why Clients Trust Mr.Car</h2>\r\n            </div>`,
        replace: `            <div class="services-section__header site-container">\r\n                <div class="section-header">\r\n                    <span class="meta text-accent">/// Why Choose Us</span>\r\n                    <h2>Why Clients Trust Mr.Car</h2>\r\n                </div>\r\n            </div>`,
    },

    // FIX 3: CTA section — add border-top, bigger padding, and fix phone btn
    // Russian
    {
        id: 'cta-ru',
        search: `        <!-- CTA -->\r\n        <section class="site-container reveal"\r\n            style="padding: var(--space-4xl) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--space-lg);">\r\n            <span class="meta text-accent">/// Готовы начать?</span>\r\n            <h2 style="margin: 0; max-width: 480px;">Запишитесь или позвоните нам</h2>\r\n            <p style="max-width: 520px; color: var(--text-dimmed); margin: 0;">Оставьте заявку — перезвоним в течение 24\r\n                часов в рабочее время. Kopli 82a, 10412 Tallinn — Пн–Пт 09:00–18:00.</p>\r\n            <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">\r\n                <a href="/ru/kontakt" class="btn btn-primary">Записаться <span class="arrow">↗</span></a>\r\n                <a href="tel:+37256461210" class="btn btn-secondary"><iconify-icon icon="mdi:phone" width="16"\r\n                        aria-hidden="true"></iconify-icon> +372 5646 1210</a>\r\n            </div>\r\n        </section>`,
        replace: `        <!-- CTA -->\r\n        <section style="border-top: 1px solid var(--border-grid);">\r\n            <div class="site-container reveal"\r\n                style="padding: var(--space-section) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--space-lg);">\r\n                <div class="section-header" style="align-items: center;">\r\n                    <span class="meta text-accent">/// Готовы начать?</span>\r\n                    <h2 style="margin: 0; max-width: 480px;">Запишитесь или позвоните нам</h2>\r\n                </div>\r\n                <p style="max-width: 520px; color: var(--text-dimmed); margin: 0;">Оставьте заявку — перезвоним в течение 24\r\n                    часов в рабочее время. Kopli 82a, 10412 Tallinn — Пн–Пт 09:00–18:00.</p>\r\n                <div style="display: flex; gap: var(--space-lg); flex-wrap: wrap; justify-content: center; align-items: center;">\r\n                    <a href="/ru/kontakt" class="btn btn-primary">Записаться <span class="arrow">↗</span></a>\r\n                    <a href="tel:+37256461210" style="display: inline-flex; align-items: center; gap: 8px; color: var(--accent-primary); font-family: var(--font-mono); font-weight: 700; font-size: 1rem; text-decoration: none; white-space: nowrap; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--accent-primary-hover)'" onmouseout="this.style.color='var(--accent-primary)'"><iconify-icon icon="mdi:phone" width="18" aria-hidden="true"></iconify-icon> +372 5646 1210</a>\r\n                </div>\r\n            </div>\r\n        </section>`,
    },
    // Estonian
    {
        id: 'cta-et',
        search: `        <!-- CTA -->\r\n        <section class="site-container reveal"\r\n            style="padding: var(--space-4xl) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--space-lg);">\r\n            <span class="meta text-accent">/// Valmis alustama?</span>\r\n            <h2 style="margin: 0; max-width: 480px;">Broneeri aeg või helista meile</h2>\r\n            <p style="max-width: 520px; color: var(--text-dimmed); margin: 0;">Jäta päring — helistame tagasi 24 tunni jooksul\r\n                tööajal. Kopli 82a, 10412 Tallinn — E–R 09:00–18:00.</p>\r\n            <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">\r\n                <a href="/kontakt" class="btn btn-primary">Broneeri aeg <span class="arrow">↗</span></a>\r\n                <a href="tel:+37256461210" class="btn btn-secondary"><iconify-icon icon="mdi:phone" width="16"\r\n                        aria-hidden="true"></iconify-icon> +372 5646 1210</a>\r\n            </div>\r\n        </section>`,
        replace: `        <!-- CTA -->\r\n        <section style="border-top: 1px solid var(--border-grid);">\r\n            <div class="site-container reveal"\r\n                style="padding: var(--space-section) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--space-lg);">\r\n                <div class="section-header" style="align-items: center;">\r\n                    <span class="meta text-accent">/// Valmis alustama?</span>\r\n                    <h2 style="margin: 0; max-width: 480px;">Broneeri aeg või helista meile</h2>\r\n                </div>\r\n                <p style="max-width: 520px; color: var(--text-dimmed); margin: 0;">Jäta päring — helistame tagasi 24 tunni jooksul\r\n                    tööajal. Kopli 82a, 10412 Tallinn — E–R 09:00–18:00.</p>\r\n                <div style="display: flex; gap: var(--space-lg); flex-wrap: wrap; justify-content: center; align-items: center;">\r\n                    <a href="/kontakt" class="btn btn-primary">Broneeri aeg <span class="arrow">↗</span></a>\r\n                    <a href="tel:+37256461210" style="display: inline-flex; align-items: center; gap: 8px; color: var(--accent-primary); font-family: var(--font-mono); font-weight: 700; font-size: 1rem; text-decoration: none; white-space: nowrap; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--accent-primary-hover)'" onmouseout="this.style.color='var(--accent-primary)'"><iconify-icon icon="mdi:phone" width="18" aria-hidden="true"></iconify-icon> +372 5646 1210</a>\r\n                </div>\r\n            </div>\r\n        </section>`,
    },
    // English
    {
        id: 'cta-en',
        search: `        <!-- CTA -->\r\n        <section class="site-container reveal"\r\n            style="padding: var(--space-4xl) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--space-lg);">\r\n            <span class="meta text-accent">/// Ready to start?</span>\r\n            <h2 style="margin: 0; max-width: 480px;">Book a service or give us a call</h2>\r\n            <p style="max-width: 520px; color: var(--text-dimmed); margin: 0;">Leave a request — we'll call you back within 24\r\n                hours during working hours. Kopli 82a, 10412 Tallinn — Mon–Fri 09:00–18:00.</p>\r\n            <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;">\r\n                <a href="/en/contact" class="btn btn-primary">Book a service <span class="arrow">↗</span></a>\r\n                <a href="tel:+37256461210" class="btn btn-secondary"><iconify-icon icon="mdi:phone" width="16"\r\n                        aria-hidden="true"></iconify-icon> +372 5646 1210</a>\r\n            </div>\r\n        </section>`,
        replace: `        <!-- CTA -->\r\n        <section style="border-top: 1px solid var(--border-grid);">\r\n            <div class="site-container reveal"\r\n                style="padding: var(--space-section) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--space-lg);">\r\n                <div class="section-header" style="align-items: center;">\r\n                    <span class="meta text-accent">/// Ready to start?</span>\r\n                    <h2 style="margin: 0; max-width: 480px;">Book a service or give us a call</h2>\r\n                </div>\r\n                <p style="max-width: 520px; color: var(--text-dimmed); margin: 0;">Leave a request — we'll call you back within 24\r\n                    hours during working hours. Kopli 82a, 10412 Tallinn — Mon–Fri 09:00–18:00.</p>\r\n                <div style="display: flex; gap: var(--space-lg); flex-wrap: wrap; justify-content: center; align-items: center;">\r\n                    <a href="/en/contact" class="btn btn-primary">Book a service <span class="arrow">↗</span></a>\r\n                    <a href="tel:+37256461210" style="display: inline-flex; align-items: center; gap: 8px; color: var(--accent-primary); font-family: var(--font-mono); font-weight: 700; font-size: 1rem; text-decoration: none; white-space: nowrap; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--accent-primary-hover)'" onmouseout="this.style.color='var(--accent-primary)'"><iconify-icon icon="mdi:phone" width="18" aria-hidden="true"></iconify-icon> +372 5646 1210</a>\r\n                </div>\r\n            </div>\r\n        </section>`,
    },
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let applied = [];

    universalPatches.forEach(({ id, search, replace }) => {
        if (content.includes(search)) {
            content = content.split(search).join(replace);
            applied.push(id);
        }
    });

    fs.writeFileSync(file, content, 'utf8');
    console.log(`${file}: applied [${applied.join(', ')}]`);
});

console.log('Done');
