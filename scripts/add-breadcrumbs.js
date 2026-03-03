const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

const configs = [
    // ET
    { file: 'prices.html', locale: 'et', type: 'flat' },
    { file: 'tingimused.html', locale: 'et', type: 'flat' },
    // RU
    { file: 'ru/prices.html', locale: 'ru', type: 'flat' },
    { file: 'ru/tingimused.html', locale: 'ru', type: 'flat' },
    // EN
    { file: 'en/prices.html', locale: 'en', type: 'flat' },
    { file: 'en/tingimused.html', locale: 'en', type: 'flat' }
];

// Add services
const serviceDirs = [
    { dir: 'services', locale: 'et' },
    { dir: 'ru/services', locale: 'ru' },
    { dir: 'en/services', locale: 'en' }
];

serviceDirs.forEach(({ dir, locale }) => {
    const fullPath = path.join(rootDir, dir);
    if (fs.existsSync(fullPath)) {
        const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.html'));
        files.forEach(f => {
            configs.push({ file: path.join(dir, f).replace(/\\/g, '/'), locale, type: 'service' });
        });
    }
});

const homeLabels = {
    et: 'Avaleht',
    ru: 'Главная',
    en: 'Home'
};

const homeUrls = {
    et: '/',
    ru: '/ru/',
    en: '/en/'
};

const servicesLabels = {
    et: 'Teenused',
    ru: 'Услуги',
    en: 'Services'
};

const servicesUrls = {
    et: '/#services',
    ru: '/ru/#services',
    en: '/en/#services'
};

configs.forEach(({ file, locale, type }) => {
    const filePath = path.join(rootDir, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Skip if already contains breadcrumbs (useful for ET prices/tingimused)
    if (content.includes('class="breadcrumbs"')) {
        console.log(`Skipping (already has breadcrumbs): ${file}`);
        return;
    }

    let breadcrumbHtml = '';

    if (type === 'service') {
        // Find H1 to get the title and injection point
        const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (!h1Match) return;

        const title = h1Match[1].trim().replace(/<[^>]*>/g, ''); // strip inline tags if any

        breadcrumbHtml = `
      <nav aria-label="Breadcrumb" style="margin-top: var(--space-md); margin-bottom: var(--space-md);">
        <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="${homeUrls[locale]}" class="breadcrumbs__link" itemprop="item"><span itemprop="name">${homeLabels[locale]}</span></a>
            <meta itemprop="position" content="1" />
          </li>
          <li class="breadcrumbs__item"><span class="breadcrumbs__separator">›</span></li>
          <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="${servicesUrls[locale]}" class="breadcrumbs__link" itemprop="item"><span itemprop="name">${servicesLabels[locale]}</span></a>
            <meta itemprop="position" content="2" />
          </li>
          <li class="breadcrumbs__item"><span class="breadcrumbs__separator">›</span></li>
          <li class="breadcrumbs__item breadcrumbs__item--current" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span itemprop="name">${title}</span>
            <meta itemprop="position" content="3" />
          </li>
        </ol>
      </nav>
        `;

        // Insert after </h1>
        content = content.replace(/(<\/h1>)/i, `$1${breadcrumbHtml}`);

    } else if (type === 'flat') {
        const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        if (!h1Match) return;

        const title = h1Match[1].trim().replace(/<[^>]*>/g, '').replace(/\n/g, '').replace(/\s+/g, ' ');
        const h1Full = h1Match[0];

        breadcrumbHtml = `
      <nav aria-label="Breadcrumb" style="margin-bottom: var(--space-lg); display: flex; justify-content: center;">
        <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
          <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <a href="${homeUrls[locale]}" class="breadcrumbs__link" itemprop="item"><span itemprop="name">${homeLabels[locale]}</span></a>
            <meta itemprop="position" content="1" />
          </li>
          <li class="breadcrumbs__item"><span class="breadcrumbs__separator">›</span></li>
          <li class="breadcrumbs__item breadcrumbs__item--current" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <span itemprop="name">${title}</span>
            <meta itemprop="position" content="2" />
          </li>
        </ol>
      </nav>
        `;

        if (file.includes('prices')) {
            // prices has section.prices-hero
            content = content.replace(/(<h1[^>]*class="prices-hero__title"[^>]*>)/i, `${breadcrumbHtml}\n            $1`);
        } else if (file.includes('tingimused')) {
            content = content.replace(/(<h1)/i, `${breadcrumbHtml.replace('justify-content: center;', '')}\n        $1`);
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Added breadcrumbs to: ${file}`);
});
