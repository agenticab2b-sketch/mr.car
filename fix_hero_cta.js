/**
 * Fixes 4 UI issues on all 3 About Us pages:
 * 1. H1 / hero section: adds proper horizontal padding (matching hinnad.html standard)
 * 2. Hero description: adds font-size + margin-top gap before stats strip
 * 3. Phone CTA button: removes border + underline, makes text slightly bigger (plain accent link style)
 */
const fs = require('fs');

const files = ['meist.html', 'ru/o-nas.html', 'en/about.html'];

const patches = [
    // FIX 1: Hero section — add proper padding so H1 and breadcrumbs aren't flush to edges
    // The prices-hero CSS lives in hinnad.html's local <style>, not style.css
    // So we add the padding inline here to match the standard: "120px var(--container-padding) 60px"
    {
        search: '<section class="prices-hero">',
        replace: '<section class="prices-hero" style="padding: 120px var(--container-padding) 60px; background: var(--bg-surface); border-bottom: 1px solid var(--border-grid); text-align: center;">',
    },

    // FIX 2: Hero description — add margin-top, correct font-size and color matching prices page standard
    // Estonian version
    {
        search: '<p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">Kaasaegne ja usaldusväärne autoteenindus Tallinnas, kus saad kindel olla kvaliteedis ja selges suhtluses.</p>',
        replace: '<p class="prices-hero__desc" style="max-width: 600px; margin: 1rem auto 0; font-size: 1.125rem; color: var(--text-dimmed); line-height: 1.7;">Kaasaegne ja usaldusväärne autoteenindus Tallinnas, kus saad kindel olla kvaliteedis ja selges suhtluses.</p>',
    },
    // Russian version
    {
        search: '<p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">Современный и надёжный автосервис, в котором клиент может быть уверен в качестве работ и открытом общении.</p>',
        replace: '<p class="prices-hero__desc" style="max-width: 600px; margin: 1rem auto 0; font-size: 1.125rem; color: var(--text-dimmed); line-height: 1.7;">Современный и надёжный автосервис, в котором клиент может быть уверен в качестве работ и открытом общении.</p>',
    },
    // English version
    {
        search: '<p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">A modern, reliable car service in Tallinn where you can trust the quality of work and transparent communication.</p>',
        replace: '<p class="prices-hero__desc" style="max-width: 600px; margin: 1rem auto 0; font-size: 1.125rem; color: var(--text-dimmed); line-height: 1.7;">A modern, reliable car service in Tallinn where you can trust the quality of work and transparent communication.</p>',
    },

    // FIX 3 + 4: Replace phone .btn-secondary with a clean accent phone link (no border, no underline, bigger text)
    // Russian
    {
        search: `<a href="tel:+37256461210" class="btn btn-secondary"><iconify-icon icon="mdi:phone"\r\n                                    width="16" aria-hidden="true"></iconify-icon> +372 5646 1210</a>`,
        replace: `<a href="tel:+37256461210" style="display: inline-flex; align-items: center; gap: 8px; color: var(--accent-primary); font-family: var(--font-mono); font-weight: 700; font-size: 1rem; text-decoration: none; padding: var(--space-md) 0; white-space: nowrap; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--accent-primary-hover)'" onmouseout="this.style.color='var(--accent-primary)'"><iconify-icon icon="mdi:phone" width="18" aria-hidden="true"></iconify-icon> +372 5646 1210</a>`,
    },
    // Estonian (different href format check)
    {
        search: `<a href="tel:+37256461210" class="btn btn-secondary"><iconify-icon icon="mdi:phone"\r\n                                    width="16" aria-hidden="true"></iconify-icon> +372 5646 1210</a>`,
        replace: `<a href="tel:+37256461210" style="display: inline-flex; align-items: center; gap: 8px; color: var(--accent-primary); font-family: var(--font-mono); font-weight: 700; font-size: 1rem; text-decoration: none; padding: var(--space-md) 0; white-space: nowrap; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--accent-primary-hover)'" onmouseout="this.style.color='var(--accent-primary)'"><iconify-icon icon="mdi:phone" width="18" aria-hidden="true"></iconify-icon> +372 5646 1210</a>`,
    },
    // English
    {
        search: `<a href="tel:+37256461210" class="btn btn-secondary"><iconify-icon icon="mdi:phone"\r\n                                    width="16" aria-hidden="true"></iconify-icon> +372 5646 1210</a>`,
        replace: `<a href="tel:+37256461210" style="display: inline-flex; align-items: center; gap: 8px; color: var(--accent-primary); font-family: var(--font-mono); font-weight: 700; font-size: 1rem; text-decoration: none; padding: var(--space-md) 0; white-space: nowrap; transition: color var(--transition-fast);" onmouseover="this.style.color='var(--accent-primary-hover)'" onmouseout="this.style.color='var(--accent-primary)'"><iconify-icon icon="mdi:phone" width="18" aria-hidden="true"></iconify-icon> +372 5646 1210</a>`,
    },
];

// Per-file targeted patches (for unique content per language)
const perFile = {
    'meist.html': [
        {
            search: '<p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">',
            replace: '<p class="prices-hero__desc" style="max-width: 600px; margin: 1rem auto 0; font-size: 1.125rem; color: var(--text-dimmed); line-height: 1.7;">',
        },
    ],
    'ru/o-nas.html': [
        {
            search: '<p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">',
            replace: '<p class="prices-hero__desc" style="max-width: 600px; margin: 1rem auto 0; font-size: 1.125rem; color: var(--text-dimmed); line-height: 1.7;">',
        },
    ],
    'en/about.html': [
        {
            search: '<p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">',
            replace: '<p class="prices-hero__desc" style="max-width: 600px; margin: 1rem auto 0; font-size: 1.125rem; color: var(--text-dimmed); line-height: 1.7;">',
        },
    ],
};

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = 0;

    // Global patches
    patches.forEach(({ search, replace }) => {
        if (content.includes(search)) {
            content = content.split(search).join(replace);
            changed++;
        }
    });

    // Per-file patches
    if (perFile[file]) {
        perFile[file].forEach(({ search, replace }) => {
            if (content.includes(search)) {
                content = content.split(search).join(replace);
                changed++;
            }
        });
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`${file}: applied ${changed} patches`);
});

console.log('Done');
