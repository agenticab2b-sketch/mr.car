/**
 * Applies consistent spacing and fixes the stats strip alignment
 * across all 3 About Us pages. Runs as a one-off script.
 *
 * Fixes:
 * 1. Stats strip: all 4 cells get equal padding, same font sizes, same label style
 *    — "Anet Eesti OÜ" value font-size 2rem → matches others
 *    — All cells: padding: 28px 16px (was 24px, same visual weight)
 * 2. Section paddings: inline style overrides replaced by site standard
 *    — seo-intro: remove padding override (let .seo-intro class handle it = 80px)
 *    — steps section: padding: var(--space-section) 0
 *    — services section: same
 *    — values section: same
 *    — CTA section: padding: var(--space-section) 0
 */
const fs = require('fs');
const path = require('path');

const files = ['meist.html', 'ru/o-nas.html', 'en/about.html'];

// Replacement map: [searchPattern, replacement]
// These are EXACT string segments to find per file
const patches = [
    // FIX 1: "Anet Eesti OÜ" block — make font-size same as others (2rem)
    // and normalize padding to match the other cells
    {
        search: 'font-family: var(--font-heading); font-size: 1.2rem; font-weight: 900; color: var(--accent-primary); line-height: 1;',
        replace: 'font-family: var(--font-heading); font-size: 2rem; font-weight: 900; color: var(--accent-primary); line-height: 1;',
    },
    // FIX 2: Remove padding override on seo-intro section — let class default (--space-section 80px) handle it
    {
        search: 'class="seo-intro" style="padding-top: var(--space-4xl); padding-bottom: var(--space-xxl);"',
        replace: 'class="seo-intro"',
    },
    // FIX 3: Steps section — standardize padding to --space-section
    {
        search: 'style="background: var(--bg-surface); padding: var(--space-3xl) 0; border-top: 1px solid var(--border-grid); border-bottom: 1px solid var(--border-grid);"',
        replace: 'style="background: var(--bg-surface); padding: var(--space-section) 0; border-top: 1px solid var(--border-grid); border-bottom: 1px solid var(--border-grid);"',
    },
    // FIX 4: Services section — remove inline padding override, use class standard
    {
        search: 'class="services-section" style="padding-top: var(--space-3xl); padding-bottom: var(--space-3xl);"',
        replace: 'class="services-section"',
    },
    // FIX 5: Services section header margin — use class standard (margin-bottom handled by .services-section__header)
    {
        search: 'class="services-section__header site-container" style="margin-bottom: var(--space-xl);"',
        replace: 'class="services-section__header site-container"',
    },
    // FIX 6: Values section — standardize to --space-section
    {
        search: 'style="background: var(--bg-surface); border-top: 1px solid var(--border-grid); border-bottom: 1px solid var(--border-grid); padding: var(--space-3xl) 0;"',
        replace: 'style="background: var(--bg-surface); border-top: 1px solid var(--border-grid); border-bottom: 1px solid var(--border-grid); padding: var(--space-section) 0;"',
    },
    // FIX 7: Values section header margin — standardize
    {
        search: 'class="services-section__header site-container" style="margin-bottom: var(--space-xl);"',
        replace: 'class="services-section__header site-container"',
    },
    // FIX 8: CTA section — standardize padding
    {
        search: 'class="site-container reveal" style="padding: var(--space-4xl) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--space-lg);"',
        replace: 'class="site-container reveal" style="padding: var(--space-section) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--space-lg);"',
    },
    // FIX 9: Steps section header — use standard margin-bottom
    {
        search: 'class="section-header" style="margin-bottom: var(--space-xl);"',
        replace: 'class="section-header" style="margin-bottom: var(--space-2xl);"',
    },
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = 0;
    patches.forEach(({ search, replace }) => {
        if (content.includes(search)) {
            content = content.split(search).join(replace);
            changed++;
        }
    });
    fs.writeFileSync(file, content, 'utf8');
    console.log(`${file}: applied ${changed} patches`);
});

console.log('Done');
