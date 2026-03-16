#!/usr/bin/env node
/**
 * Mr.Car — Static Service Page Generator
 *
 * Reads services-data.js for each language (ET/RU/EN) and generates
 * fully static HTML files for each service.
 *
 * Output:
 *   ee/services/{slug}.html  — 11 files
 *   ru/services/{slug}.html  — 11 files
 *   en/services/{slug}.html  — 11 files
 *
 * Webasto standalone pages (webasto-diagnostika.html, webasto-sumptomid.html)
 * are NOT touched — they are excluded via SKIP_FILES constant.
 *
 * Run: node build.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

// Load partials
const FORM_PARTIAL = fs.readFileSync(path.join(ROOT, 'partials/form.html'), 'utf8');
const MAP_PARTIAL = fs.readFileSync(path.join(ROOT, 'partials/map.html'), 'utf8');

// ─── Configuration ────────────────────────────────────────────────────────────

const PROD_ORIGIN = 'https://www.mrcar.ee';
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
const SERVICE_NAV_ORDER = [
  'autoremont',
  'summutid-keevitus',
  'veermik-pidurid',
  'rehvitood',
  'hooldus-diagnostika',
  'kaigukastiremont',
  'elektritood',
  'mootoriremont',
  'olivahetus',
  'ostueelne-kontroll',
  'kliimahooldus',
  'webasto-diagnostika'
];
const SERVICE_NAV_RANK = new Map(SERVICE_NAV_ORDER.map((slug, index) => [slug, index]));

// These standalone Webasto landing pages are NOT generated — they stay as-is.
const SKIP_FILES = new Set([
  'webasto-diagnostika',
  'webasto-sumptomid',
  'webasto-simptomy',
  'webasto-symptoms'
]);

const LANGS = [
  {
    lang: 'et',
    prefix: '',                  // canonical: /services/{slug}
    dir: 'services',
    dataFile: 'ee/services-data.js',
    navLinks: [
      { href: '/teenused', label: '[01] Teenused', style: 'color:var(--accent-primary)' },
      { href: '/meist', label: '[02] Meist' },
      { href: '/hinnad', label: '[03] Hinnad' },
      { href: '/kontakt', label: '[04] Kontakt' },
      { href: '/galerii', label: '[05] Galerii' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    headerCtaLabel: 'Jäta päring',
    headerCtaHref: '/kontakt',
    bookLabel: 'Broneeri aeg',
    fabCall: 'Helista',
    fabBook: 'Broneeri aeg',
    formSubmit: 'Saada päring',
    formMeta: 'Broneeri aeg',
    formSending: 'Saatmine...',
    formLabels: {
      name: 'Nimi',
      carNumber: 'Autonumber*',
      email: 'E-post*',
      phone: 'Telefon',
      message: 'Sõnum*',
    },
    formPlaceholder: {
      name: 'Teie nimi',
      carNumber: '123 ABC',
      email: 'teie@email.ee',
      phone: '+372 ...',
      message: 'Kirjeldage probleemi...',
    },
    formValidation: 'Palun täitke kõik kohustuslikud väljad',
    formError: 'Päringut ei õnnestunud saata. Proovige uuesti.',
    formSuccess: 'Aitäh! Päring on saadetud.',
    sidebarTitle: 'Vali teenus',
    otherLangs: [
      { href: '/ru/', code: 'RU', flag: 'circle-flags:ru', title: 'Русский' },
      { href: '/en/', code: 'EN', flag: 'circle-flags:en', title: 'English' },
    ],
    selfLang: { href: '/', flag: 'circle-flags:ee', title: 'Eesti keel' },
    mapLabel: 'Kopli 82a, Tallinn',
    mapTranslations: {
      meta: 'Kuidas meid leida',
      title: 'Oleme lähedal',
      addressLabel: 'Aadress',
      hoursLabel: 'Lahtiolekuajad',
      phoneLabel: 'Telefon',
      emailLabel: 'Email',
      openBtn: 'Ava kaart',
      iframeTitle: 'Mr.Car kaardil',
      iframeLabel: 'Mr.Car asukoht kaardil'
    },
    hreflangSelf: 'et',
    serviceBase: '/services/',
    ruServiceBase: '/ru/services/',
    enServiceBase: '/en/services/',
    footer: {
      contacts: 'Kontaktid',
      details: 'Rekvisiidid',
      hours: 'Lahtiolekuajad',
      workdays: 'Esmaspäev – Reede',
      weekend: 'Laupäev – Pühapäev',
      closed: 'Suletud',
      privacy: 'Privaatsuspoliitika',
      privacyHref: '/privaatsus',
      terms: 'Üldtingimused',
      termsHref: '/tingimused'
    }
  },
  {
    lang: 'ru',
    prefix: '/ru',
    dir: 'ru/services',
    dataFile: 'ru/services/services-data.js',
    navLinks: [
      { href: '/ru/uslugi', label: '[01] Услуги', style: 'color:var(--accent-primary)' },
      { href: '/ru/o-nas', label: '[02] О нас' },
      { href: '/ru/tseny', label: '[03] Цены' },
      { href: '/ru/kontakt', label: '[04] Контакты' },
      { href: '/ru/galereya', label: '[05] Галерея' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    headerCtaLabel: 'Оставить заявку',
    headerCtaHref: '/ru/kontakt',
    bookLabel: 'Записаться',
    fabCall: 'Позвонить',
    fabBook: 'Записаться',
    formSubmit: 'Отправить заявку',
    formMeta: 'Запись на ремонт',
    formSending: 'Отправка...',
    formLabels: {
      name: 'Имя',
      carNumber: 'Госномер*',
      email: 'E-mail*',
      phone: 'Телефон',
      message: 'Сообщение*',
    },
    formPlaceholder: {
      name: 'Ваше имя',
      carNumber: '123 ABC',
      email: 'vash@email.ru',
      phone: '+372 ...',
      message: 'Опишите проблему...',
    },
    formValidation: 'Необходимо заполнить выделенные поля',
    formError: 'Не удалось отправить заявку. Попробуйте ещё раз.',
    formSuccess: 'Спасибо! Заявка отправлена.',
    sidebarTitle: 'Выбрать услугу',
    otherLangs: [
      { href: '/', code: 'ET', flag: 'circle-flags:ee', title: 'Eesti keel' },
      { href: '/en/', code: 'EN', flag: 'circle-flags:en', title: 'English' },
    ],
    selfLang: { href: '/ru/', flag: 'circle-flags:ru', title: 'Русский' },
    mapLabel: 'Kopli 82a, Таллинн',
    mapTranslations: {
      meta: 'Как нас найти',
      title: 'Мы рядом',
      addressLabel: 'Адрес',
      hoursLabel: 'Часы работы',
      phoneLabel: 'Телефон',
      emailLabel: 'Email',
      openBtn: 'Открыть карту',
      iframeTitle: 'Mr.Car на карте',
      iframeLabel: 'Расположение Mr.Car на карте'
    },
    hreflangSelf: 'ru',
    serviceBase: '/ru/services/',
    ruServiceBase: '/ru/services/',
    enServiceBase: '/en/services/',
    footer: {
      contacts: 'Контакты',
      details: 'Реквизиты',
      hours: 'Часы работы',
      workdays: 'Понедельник – Пятница',
      weekend: 'Суббота – Воскресенье',
      closed: 'Закрыто',
      privacy: 'Политика конфиденциальности',
      privacyHref: '/ru/privaatsus',
      terms: 'Условия',
      termsHref: '/ru/tingimused'
    }
  },
  {
    lang: 'en',
    prefix: '/en',
    dir: 'en/services',
    dataFile: 'en/services/services-data.js',
    navLinks: [
      { href: '/en/services', label: '[01] Services', style: 'color:var(--accent-primary)' },
      { href: '/en/about', label: '[02] About' },
      { href: '/en/prices', label: '[03] Prices' },
      { href: '/en/contact', label: '[04] Contact' },
      { href: '/en/gallery', label: '[05] Gallery' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    headerCtaLabel: 'Send request',
    headerCtaHref: '/en/contact',
    bookLabel: 'Book Now',
    fabCall: 'Call Us',
    fabBook: 'Book Now',
    formSubmit: 'Send Request',
    formMeta: 'Book a Repair',
    formSending: 'Sending...',
    formLabels: {
      name: 'Name',
      carNumber: 'Car plate number*',
      email: 'E-mail*',
      phone: 'Phone',
      message: 'Message*',
    },
    formPlaceholder: {
      name: 'Your name',
      carNumber: '123 ABC',
      email: 'your@email.com',
      phone: '+372 ...',
      message: 'Describe your problem...',
    },
    formValidation: 'Please fill in all required fields',
    formError: 'Failed to send request. Please try again.',
    formSuccess: 'Thank you! Your request has been sent.',
    sidebarTitle: 'Select service',
    otherLangs: [
      { href: '/', code: 'ET', flag: 'circle-flags:ee', title: 'Eesti keel' },
      { href: '/ru/', code: 'RU', flag: 'circle-flags:ru', title: 'Русский' },
    ],
    selfLang: { href: '/en/', flag: 'circle-flags:en', title: 'English' },
    mapLabel: 'Kopli 82a, Tallinn',
    mapTranslations: {
      meta: 'How to find us',
      title: 'We are close by',
      addressLabel: 'Address',
      hoursLabel: 'Opening Hours',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      openBtn: 'Open map',
      iframeTitle: 'Mr.Car on map',
      iframeLabel: 'Mr.Car location on map'
    },
    hreflangSelf: 'en',
    serviceBase: '/en/services/',
    ruServiceBase: '/ru/services/',
    enServiceBase: '/en/services/',
    footer: {
      contacts: 'Contacts',
      details: 'Details',
      hours: 'Opening Hours',
      workdays: 'Monday – Friday',
      weekend: 'Saturday – Sunday',
      closed: 'Closed',
      privacy: 'Privacy Policy',
      privacyHref: '/privaatsus',
      terms: 'Terms & Conditions',
      termsHref: '/en/tingimused'
    }
  },
];

// ─── Load services-data.js ────────────────────────────────────────────────────

function loadServices(dataFile) {
  const filePath = path.join(ROOT, dataFile);
  const src = fs.readFileSync(filePath, 'utf8');
  // Eval in a sandboxed way: the files expose `const SERVICES = [...]`
  const sandbox = {};
  // eslint-disable-next-line no-new-func
  new Function('exports', src + '\nexports.SERVICES = SERVICES;')(sandbox);
  return [...sandbox.SERVICES].sort((a, b) => {
    const aKey = a?.allSlugs?.ee || a?.slug || '';
    const bKey = b?.allSlugs?.ee || b?.slug || '';
    const aRank = SERVICE_NAV_RANK.has(aKey) ? SERVICE_NAV_RANK.get(aKey) : Number.MAX_SAFE_INTEGER;
    const bRank = SERVICE_NAV_RANK.has(bKey) ? SERVICE_NAV_RANK.get(bKey) : Number.MAX_SAFE_INTEGER;

    if (aRank !== bRank) return aRank - bRank;
    return aKey.localeCompare(bKey);
  });
}

// ─── HTML helpers ─────────────────────────────────────────────────────────────

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getLangLocale(lang) {
  if (lang === 'ru') return 'ru-RU';
  if (lang === 'et') return 'et-EE';
  return 'en-US';
}

const SIDEBAR_CASE_EXCEPTIONS = {
  ru: [
    { pattern: /(^|[^\p{L}\p{N}])(то)(?=$|[^\p{L}\p{N}])/giu, replacement: '$1ТО' }
  ],
  et: [],
  en: [
    { pattern: /(^|[^\p{L}\p{N}])(ac)(?=$|[^\p{L}\p{N}])/giu, replacement: '$1AC' }
  ]
};

function toSentenceCaseLabel(value, lang) {
  const text = String(value || '').trim();
  if (!text) return '';

  const locale = getLangLocale(lang);
  const chars = Array.from(text.toLocaleLowerCase(locale));
  const firstLetterIndex = chars.findIndex(char => /\p{L}/u.test(char));

  if (firstLetterIndex === -1) {
    return applySidebarCaseExceptions(chars.join(''), lang);
  }

  chars[firstLetterIndex] = chars[firstLetterIndex].toLocaleUpperCase(locale);
  return applySidebarCaseExceptions(chars.join(''), lang);
}

function applySidebarCaseExceptions(text, lang) {
  const replacements = SIDEBAR_CASE_EXCEPTIONS[lang] || [];
  return replacements.reduce(
    (result, { pattern, replacement }) => result.replace(pattern, replacement),
    text
  );
}

function buildSymptomCards(symptoms) {
  return symptoms.map(s => `
      <div class="sd-symptom">
        <iconify-icon icon="${esc(s.icon)}" width="28" height="28" aria-hidden="true"></iconify-icon>
        <span>${esc(s.text)}</span>
      </div>`).join('');
}

function buildServicesList(list) {
  return list.map(item => `
        <li><iconify-icon icon="mdi:check-circle-outline" width="18" height="18" aria-hidden="true"></iconify-icon>${esc(item)}</li>`).join('');
}

function buildNavLinks(navLinks) {
  return navLinks.map(n =>
    `<a href="${esc(n.href)}" class="navbar__link"${n.style ? ` style="${esc(n.style)}"` : ''}>${esc(n.label)}</a>`
  ).join('\n            ');
}

function buildSidebar(services, currentSlug, cfg) {
  // Group by category
  const cats = {};
  for (const s of services) {
    if (!cats[s.category]) cats[s.category] = [];
    cats[s.category].push(s);
  }
  let html = '';
  for (const [cat, items] of Object.entries(cats)) {
    html += `\n          <div class="sd-sidebar__category">
            <div class="sd-sidebar__cat-title">${esc(toSentenceCaseLabel(cat, cfg.lang))}</div>
            <ul class="sd-sidebar__list">`;
    for (const s of items) {
      const active = s.slug === currentSlug ? ' active' : '';
      html += `\n              <li><a href="${cfg.serviceBase}${esc(s.slug)}" class="sd-sidebar__link${active}">
                <iconify-icon icon="${esc(s.icon)}" width="18" height="18" aria-hidden="true"></iconify-icon>
                <span>${esc(toSentenceCaseLabel(s.navTitle, cfg.lang))}</span>
              </a></li>`;
    }
    html += `\n            </ul>
          </div>`;
  }
  return html;
}

function buildMegaMenu(services, cfg) {
  return services.map(s =>
    `<a href="${cfg.serviceBase}${esc(s.slug)}" class="mega-menu__item">
              <iconify-icon icon="${esc(s.icon)}" width="20" height="20" aria-hidden="true"></iconify-icon>
              <span>${esc(s.navTitle)}</span>
            </a>`
  ).join('\n            ');
}

function buildMobileMegaMenu(services, cfg) {
  return services.map(s =>
    `<a href="${cfg.serviceBase}${esc(s.slug)}" class="mobile-mega-menu__item">
              <iconify-icon icon="${esc(s.icon)}" aria-hidden="true"></iconify-icon>
              <span>${esc(s.navTitle)}</span>
            </a>`
  ).join('\n            ');
}

function buildHreflang(s, cfg) {
  const eeSlug = s.allSlugs.ee;
  const ruSlug = s.allSlugs.ru;
  const enSlug = s.allSlugs.en;
  return `
    <link rel="canonical" href="${PROD_ORIGIN}${cfg.serviceBase}${s.slug}">
    <link rel="alternate" hreflang="et" href="${PROD_ORIGIN}/services/${eeSlug}">
    <link rel="alternate" hreflang="ru" href="${PROD_ORIGIN}/ru/services/${ruSlug}">
    <link rel="alternate" hreflang="en" href="${PROD_ORIGIN}/en/services/${enSlug}">
    <link rel="alternate" hreflang="x-default" href="${PROD_ORIGIN}/services/${eeSlug}">`;
}

function buildJsonLd(s, cfg) {
  const canonicalUrl = `${PROD_ORIGIN}${cfg.serviceBase}${s.slug}`;
  const absImage = s.heroImage && s.heroImage.startsWith('http') ? s.heroImage
    : `${PROD_ORIGIN}/${s.heroImage}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "name": "Mr.Car Autoremont",
        "url": `${PROD_ORIGIN}/`,
        "telephone": "+372 5646 1210",
        "image": absImage,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kopli 82a",
          "addressLocality": "Tallinn",
          "postalCode": "10412",
          "addressCountry": "EE"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        "geo": { "@type": "GeoCoordinates", "latitude": 59.4428, "longitude": 24.7367 }
      },
      {
        "@type": "Service",
        "name": s.heroTitle,
        "description": s.seo && s.seo.description ? s.seo.description : s.heroLead,
        "provider": { "@type": "AutoRepair", "name": "Mr.Car", "url": `${PROD_ORIGIN}/` },
        "url": canonicalUrl,
        "areaServed": { "@type": "City", "name": "Tallinn" }
      }
    ]
  };
  return JSON.stringify(ld, null, 2);
}

// ─── Main HTML template ───────────────────────────────────────────────────────

function renderPage(s, services, cfg) {
  const seoTitle = (s.seo && s.seo.title) ? s.seo.title : `${s.heroTitle} — Mr.Car, Tallinn`;
  const seoDesc = (s.seo && s.seo.description) ? s.seo.description : `${s.heroTitle} Mr.Car autoteeninduses. Kopli 82a, Tallinn. +372 5646 1210`;
  const canonicalUrl = `${PROD_ORIGIN}${cfg.serviceBase}${s.slug}`;
  const ogImage = s.heroImage || `${PROD_ORIGIN}/android-chrome-512x512.png`;

  const sidebarHtml = buildSidebar(services, s.slug, cfg);
  const megaMenuHtml = buildMegaMenu(services, cfg);
  const mobileMegaMenu = buildMobileMegaMenu(services, cfg);
  const navLinksHtml = buildNavLinks(cfg.navLinks);
  const hreflangHtml = buildHreflang(s, cfg);
  const jsonLd = buildJsonLd(s, cfg);
  const symptomCards = buildSymptomCards(s.symptoms || []);
  const servicesListHtml = buildServicesList(s.servicesList || []);

  // Prepare Form Partial
  let renderedForm = FORM_PARTIAL
    .replace(/{{lang}}/g, esc(cfg.lang))
    .replace(/{{form_meta}}/g, esc(cfg.formMeta))
    .replace(/{{form_title}}/g, esc(s.form.title))
    .replace(/{{form_subtitle}}/g, esc(s.form.subtitle))
    .replace(/{{formValidation}}/g, esc(cfg.formValidation))
    .replace(/{{formLabels_name}}/g, esc(cfg.formLabels.name))
    .replace(/{{formPlaceholder_name}}/g, esc(cfg.formPlaceholder.name))
    .replace(/{{formLabels_carNumber}}/g, esc(cfg.formLabels.carNumber))
    .replace(/{{formPlaceholder_carNumber}}/g, esc(cfg.formPlaceholder.carNumber))
    .replace(/{{formLabels_email}}/g, esc(cfg.formLabels.email))
    .replace(/{{formPlaceholder_email}}/g, esc(cfg.formPlaceholder.email))
    .replace(/{{formLabels_phone}}/g, esc(cfg.formLabels.phone))
    .replace(/{{formPlaceholder_phone}}/g, esc(cfg.formPlaceholder.phone))
    .replace(/{{formLabels_message}}/g, esc(cfg.formLabels.message))
    .replace(/{{formPlaceholder_message}}/g, esc(cfg.formPlaceholder.message))
    .replace(/{{formSubmit}}/g, esc(cfg.formSubmit));

  // Prepare Map Partial
  let renderedMap = MAP_PARTIAL
    .replace(/{{map_meta}}/g, esc(cfg.mapTranslations.meta))
    .replace(/{{map_title}}/g, esc(cfg.mapTranslations.title))
    .replace(/{{map_address_label}}/g, esc(cfg.mapTranslations.addressLabel))
    .replace(/{{map_hours_label}}/g, esc(cfg.mapTranslations.hoursLabel))
    .replace(/{{map_workdays}}/g, esc(cfg.footer.workdays))
    .replace(/{{map_weekend}}/g, esc(cfg.footer.weekend))
    .replace(/{{map_closed}}/g, esc(cfg.footer.closed))
    .replace(/{{map_phone_label}}/g, esc(cfg.mapTranslations.phoneLabel))
    .replace(/{{map_email_label}}/g, esc(cfg.mapTranslations.emailLabel))
    .replace(/{{map_open_btn}}/g, esc(cfg.mapTranslations.openBtn))
    .replace(/{{map_iframe_title}}/g, esc(cfg.mapTranslations.iframeTitle))
    .replace(/{{map_iframe_label}}/g, esc(cfg.mapTranslations.iframeLabel));

  const promoBanner = s.promoBanner && s.promoBanner.enabled ? `
        <div class="sd-promo">
          <div class="sd-promo__content">
            <iconify-icon icon="mdi:tag-outline" width="28" height="28" aria-hidden="true"></iconify-icon>
            <p class="sd-promo__text">${esc(s.promoBanner.text)}</p>
          </div>
        </div>` : '';

  const allLangs = [
    { href: '/', code: 'et', flag: 'circle-flags:ee', title: 'Eesti keel' },
    { href: '/ru/', code: 'ru', flag: 'circle-flags:ru', title: 'Русский' },
    { href: '/en/', code: 'en', flag: 'circle-flags:en', title: 'English' }
  ];

  const desktopLangsHtml = allLangs.map(l => {
    const isActive = l.code === cfg.lang ? ' active' : '';
    return `<a href="${l.href}" class="lang-link${isActive}" title="${esc(l.title)}"><iconify-icon icon="${l.flag}" width="24" height="24"></iconify-icon></a>`;
  }).join('\n            ');

  const mobileLangsHtml = allLangs.map(l => {
    const isActive = l.code === cfg.lang ? ' active' : '';
    return `<a href="${l.href}" class="mobile-lang-link${isActive}"><iconify-icon icon="${l.flag}" width="32" height="32"></iconify-icon><span>${esc(l.title)}</span></a>`;
  }).join('\n            ');

  return `<!DOCTYPE html>
<html lang="${esc(cfg.lang)}">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-W48VVTPC');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(seoTitle)}</title>
  <meta name="description" content="${esc(seoDesc)}">

  <!-- Canonical + hreflang -->${hreflangHtml}

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(seoTitle)}">
  <meta property="og:description" content="${esc(seoDesc)}">
  <meta property="og:image" content="${esc(ogImage)}">
  <meta property="og:url" content="${esc(canonicalUrl)}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(seoTitle)}">
  <meta name="twitter:description" content="${esc(seoDesc)}">
  <meta name="twitter:image" content="${esc(ogImage)}">

  <!-- JSON-LD -->
  <script type="application/ld+json">
${jsonLd}
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="/style.css?v=3">

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="shortcut icon" href="/favicon.ico">

  <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
</head>
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W48VVTPC"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- NAVBAR -->
  <header class="navbar" id="navbar">
    <a href="${cfg.prefix || '/'}" class="navbar__logo">Mr.Car</a>
    <nav class="navbar__nav">
      <div class="navbar__item has-dropdown">
        ${navLinksHtml.split('\n').find(l => l.includes('services') || l.includes('Teenused') || l.includes('Услуги') || l.includes('Services')) || ''}
        <div class="mega-menu" id="megaMenuDesktop">
          ${megaMenuHtml}
        </div>
      </div>
      ${navLinksHtml.split('\n').filter(l => !l.includes('services') && !l.includes('Teenused') && !l.includes('Услуги') && !l.includes('Services')).join('\n      ')}
      <a href="tel:${cfg.phoneHref}" class="navbar__phone">${cfg.phone}</a>
    </nav>
    <div class="navbar__cta">
      <a href="${esc(cfg.headerCtaHref)}" class="btn btn-primary">${esc(cfg.headerCtaLabel)}</a>
    </div>
    <button class="navbar__burger" id="burgerBtn" aria-label="Ava menüü">
      <span></span><span></span><span></span>
    </button>
    <div class="navbar__lang desktop-only">
      ${desktopLangsHtml}
    </div>
  </header>

  <!-- MOBILE MENU -->
  <div class="mobile-menu" id="mobileMenu">
    <button class="mobile-menu__close" id="closeMenu" aria-label="Sulge menüü">&times;</button>
    <nav aria-label="Mobiilne navigatsioon">
      <a href="${cfg.navLinks[0].href}" class="mobile-menu__link" onclick="toggleMobileMegaMenu(event)">
        ${cfg.navLinks[0].label}
        <iconify-icon icon="mdi:chevron-down" class="mobile-menu__toggle-icon" width="24" height="24"></iconify-icon>
      </a>
      <div class="mobile-mega-menu" id="mobileMegaMenu">
        ${mobileMegaMenu}
      </div>
      ${cfg.navLinks.slice(1).map(n => `<a href="${n.href}" class="mobile-menu__link" onclick="closeMobileMenu()">${esc(n.label)}</a>`).join('\n      ')}
    </nav>
    <a href="tel:${cfg.phoneHref}" class="mobile-menu__link" style="color:var(--accent-primary)">${cfg.phone}</a>
    <div class="mobile-menu__lang">
      ${mobileLangsHtml}
    </div>
  </div>

  <!-- HERO -->
  <section class="sd-hero" style="background-image:url('${esc(s.heroImage)}')">
    <div class="sd-hero__overlay"></div>
    <div class="sd-hero__content site-container">
      <span class="sd-hero__meta">/// Mr.Car Autoteenindus</span>
      <h1 class="sd-hero__title">${esc(s.heroTitle)}</h1>
      <p class="sd-hero__lead">${esc(s.heroLead)}</p>
      <a href="#request" class="btn btn-primary sd-hero__cta">${esc(cfg.formSubmit)} <span class="arrow">↗</span></a>
    </div>
  </section>

  <!-- MOBILE SIDEBAR TOGGLE -->
  <div class="sd-sidebar-mobile site-container" id="sidebarMobile">
    <button class="sd-sidebar-mobile__toggle" id="sidebarToggle" aria-expanded="false">
      <span>${esc(cfg.sidebarTitle)}</span>
      <iconify-icon icon="mdi:chevron-down" width="24" height="24"></iconify-icon>
    </button>
    <div class="sd-sidebar-mobile__content" id="sidebarMobileContent">
      ${sidebarHtml}
    </div>
  </div>

  <!-- MAIN CONTENT (2 columns) -->
  <section class="sd-main site-container">
    <!-- LEFT: Content -->
    <article class="sd-content">

      <!-- Intro -->
      <div class="sd-intro">
        <h2 class="sd-intro__title">${esc(s.introTitle)}</h2>
        <div class="sd-intro__text">
          ${(s.introText || []).map(p => `<p>${esc(p)}</p>`).join('\n          ')}
        </div>
      </div>

      <!-- Symptoms -->
      <div class="sd-symptoms">
        <h3 class="sd-symptoms__title">${esc(s.symptomsTitle)}</h3>
        <div class="sd-symptoms__grid">
          ${symptomCards}
        </div>
        <p class="sd-symptoms__after">${esc(s.afterSymptomsText || '')}</p>
      </div>

      <!-- Services list -->
      <div class="sd-services-list">
        <h3 class="sd-services-list__title">${esc(s.servicesListTitle)}</h3>
        <ul class="sd-services-list__items">
          ${servicesListHtml}
        </ul>
        <p class="sd-services-list__after">${esc(s.afterListText || '')}</p>
      </div>

      ${promoBanner}
    </article>

    <!-- RIGHT: Sidebar -->
    <aside class="sd-sidebar" id="sidebarDesktop">
      ${sidebarHtml}
    </aside>
  </section>

  <!-- CONTACT FORM -->
  <section class="contact-section" id="request">
    ${renderedForm}
  </section>

  <!-- MAP + LOCATION -->
  <section class="location-section" id="location">
    ${renderedMap}
  </section>

  <!-- SNACKBAR -->
  <div id="snackbar" class="snackbar">${esc(cfg.formSuccess)}</div>

  <!-- FAB Contact -->
  <div class="fab-contact" id="fabContact">
    <div class="fab-contact__menu">
      <a href="tel:${cfg.phoneHref}" class="fab-contact__action" id="fabCall">
        <iconify-icon icon="mdi:phone" width="20" height="20" aria-hidden="true"></iconify-icon>
        <span>${esc(cfg.fabCall)}</span>
      </a>
      <a href="#request" class="fab-contact__action" id="fabForm" onclick="closeFab()">
        <iconify-icon icon="mdi:email-outline" width="20" height="20" aria-hidden="true"></iconify-icon>
        <span>${esc(cfg.fabBook)}</span>
      </a>
    </div>
    <button class="fab-contact__trigger" id="fabTrigger" aria-label="Võta ühendust">
      <span class="fab-contact__icon-wrap">
        <span class="fab-contact__icon fab-contact__icon--phone">
          <iconify-icon icon="mdi:phone" width="24" height="24" aria-hidden="true"></iconify-icon>
        </span>
        <span class="fab-contact__icon fab-contact__icon--envelope">
          <iconify-icon icon="mdi:email-outline" width="24" height="24" aria-hidden="true"></iconify-icon>
        </span>
        <span class="fab-contact__icon fab-contact__icon--close">
          <iconify-icon icon="mdi:close" width="24" height="24" aria-hidden="true"></iconify-icon>
        </span>
      </span>
    </button>
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-grid site-container">
      <div>
        <div class="footer__col-title">${esc(cfg.footer.contacts)}</div>
        <div class="footer__text">
          <a href="tel:${cfg.phoneHref}">${cfg.phone}</a><br>
          <a href="mailto:info@mrcar.ee">info@mrcar.ee</a><br>
          Kopli 82a, 10412 Tallinn
        </div>
        <div class="footer__socials">
          <a href="https://www.facebook.com/" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener">
            <iconify-icon icon="mdi:facebook" aria-hidden="true"></iconify-icon>
          </a>
          <a href="https://www.instagram.com/" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener">
            <iconify-icon icon="mdi:instagram" aria-hidden="true"></iconify-icon>
          </a>
        </div>
      </div>
      <div>
        <div class="footer__col-title">${esc(cfg.footer.details)}</div>
        <div class="footer__text footer__text--rekvisiidid">
          ANET EESTI OÜ<br>
          Reg. nr: 10233521<br>
          KMKR: EE100321511<br>
          LHV: EE54 7700 7710 0969 0559<br>
          SEB: EE10 1010 0520 0108 4005
        </div>
      </div>
      <div>
        <div class="footer__col-title">${esc(cfg.footer.hours)}</div>
        <div class="footer__text">
          ${esc(cfg.footer.workdays)}<br>
          <strong style="color: var(--text-main);">09:00 – 18:00</strong><br><br>
          ${esc(cfg.footer.weekend)}<br>
          <span style="color: var(--text-dimmed);">${esc(cfg.footer.closed)}</span>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 Mr.Car Autoremont Tallinn</span>
      <a href="${esc(cfg.footer.termsHref)}">${esc(cfg.footer.terms)}</a>
      <a href="${esc(cfg.footer.privacyHref)}">${esc(cfg.footer.privacy)}</a>
      <span>Designed by <a href="https://agentica.ee" target="_blank" rel="noopener">Agentica</a></span>
    </div>
  </footer>

  <script>
    // Mobile menu
    const burger   = document.getElementById('burgerBtn');
    const mobMenu  = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeMenu');

    burger.addEventListener('click', () => { mobMenu.classList.add('active'); document.body.style.overflow = 'hidden'; });
    closeBtn.addEventListener('click', closeMobileMenu);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && mobMenu.classList.contains('active')) closeMobileMenu(); });

    function closeMobileMenu() {
      mobMenu.classList.remove('active');
      document.body.style.overflow = '';
      const mm = document.getElementById('mobileMegaMenu');
      const tl = document.querySelector('.mobile-menu__link[onclick="toggleMobileMegaMenu(event)"]');
      if (mm) mm.classList.remove('is-open');
      if (tl) tl.classList.remove('is-open');
    }

    function toggleMobileMegaMenu(e) {
      e.preventDefault();
      document.getElementById('mobileMegaMenu').classList.toggle('is-open');
      e.currentTarget.classList.toggle('is-open');
    }

    // Mobile sidebar toggle
    document.getElementById('sidebarToggle').addEventListener('click', function () {
      const content  = document.getElementById('sidebarMobileContent');
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      content.classList.toggle('is-open');
      this.classList.toggle('is-open');
    });

    // Navbar scroll accent
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').style.borderBottomColor = window.scrollY > 100 ? 'var(--accent-primary)' : '';
    });

    // Form handling
    const form = document.getElementById('serviceForm');
    if (form) {
      // Set initial timestamp
      const tsStartInput = document.getElementById('tsStart');
      if (tsStartInput) tsStartInput.value = Date.now();

      const requiredFields = form.querySelectorAll('[required]');
      const formErrorBanner = document.getElementById('formError');

      const clearFieldError = (field) => {
        field.classList.remove('form-error');
        const allRequiredFilled = Array.from(requiredFields).every(f => f.value.trim() !== '');
        if (allRequiredFilled && formErrorBanner) {
          formErrorBanner.style.display = 'none';
        }
      };

      requiredFields.forEach(field => {
        field.addEventListener('input', () => clearFieldError(field));
        field.addEventListener('change', () => clearFieldError(field));
      });

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let hasError = false;
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            field.classList.add('form-error');
            hasError = true;
          } else {
            field.classList.remove('form-error');
          }
        });

        if (hasError) {
          if (formErrorBanner) formErrorBanner.style.display = 'block';
          return;
        }

        const btn  = this.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '${esc(cfg.formSending)}';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.pageUrl = window.location.href;

        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
          if (result.success) {
            showSnackbar('${esc(cfg.formSuccess)}');
            form.reset();
            if (tsStartInput) tsStartInput.value = Date.now();
          } else {
            showSnackbar('${esc(cfg.formError)}', true);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          showSnackbar('${esc(cfg.formError)}', true);
        })
        .finally(() => {
          btn.disabled = false;
          btn.innerHTML = orig;
        });
      });
    }

    function showSnackbar(message, isError = false) {
      var x = document.getElementById("snackbar");
      if (!x) return;
      if (message) x.innerText = message;
      x.className = "snackbar show";
      if (isError) x.style.backgroundColor = "var(--error)";
      else x.style.backgroundColor = "";
      
      setTimeout(function () { 
        x.className = x.className.replace("show", ""); 
      }, 4000);
    }

    // FAB
    (function() {
      const fab     = document.getElementById('fabContact');
      const trigger = document.getElementById('fabTrigger');
      let iconInterval;

      function startIconCycle() { iconInterval = setInterval(() => trigger.classList.toggle('icon-swap'), 3000); }
      function stopIconCycle()  { clearInterval(iconInterval); trigger.classList.remove('icon-swap'); }

      trigger.addEventListener('click', () => {
        const isOpen = fab.classList.toggle('is-open');
        isOpen ? stopIconCycle() : startIconCycle();
      });
      document.addEventListener('keydown', e => { if (e.key === 'Escape' && fab.classList.contains('is-open')) closeFab(); });
      document.addEventListener('click', e => { if (fab.classList.contains('is-open') && !fab.contains(e.target)) closeFab(); });
      startIconCycle();
    })();

    function closeFab() {
      document.getElementById('fabContact').classList.remove('is-open');
      document.getElementById('fabTrigger').classList.remove('icon-swap');
    }
  </script>

</body>
</html>`;
}

// ─── Run ──────────────────────────────────────────────────────────────────────

let totalGenerated = 0;
let totalSkipped = 0;

process.stdout.write('\n🚀 Build started...\n');

for (const cfg of LANGS) {
  process.stdout.write(`\n[${cfg.lang.toUpperCase()}] Loading ${cfg.dataFile}…\n`);
  const services = loadServices(cfg.dataFile);
  if (!services || !services.length) {
    process.stdout.write(`  ⚠️  No services found in ${cfg.dataFile}\n`);
    continue;
  }
  process.stdout.write(`  → ${services.length} services found\n`);

  const outDir = path.join(ROOT, cfg.dir);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  process.stdout.write(`  → Output dir: ${outDir}\n`);

  for (const s of services) {
    const outFile = path.join(outDir, `${s.slug}.html`);

    // Skip standalone Webasto landing pages
    if (SKIP_FILES.has(s.slug)) {
      process.stdout.write(`  ⏭ SKIP  ${s.slug}.html  (standalone Webasto page)\n`);
      totalSkipped++;
      continue;
    }

    process.stdout.write(`  ⚙  Rendering ${s.slug}…`);
    const html = renderPage(s, services, cfg);
    fs.writeFileSync(outFile, html, 'utf8');
    process.stdout.write(` ✓  (${html.length} bytes)\n`);
    totalGenerated++;
  }
  process.stdout.write(`  ✅ [${cfg.lang.toUpperCase()}] done — ${services.filter(s => !SKIP_FILES.has(s.slug)).length} pages\n`);
}

process.stdout.write(`\n✅ Done: ${totalGenerated} pages generated, ${totalSkipped} skipped.\n`);

// ─── Update sitemap.xml ───────────────────────────────────────────────────────

process.stdout.write('\n📄 Updating sitemap.xml…\n');

const eeServices = loadServices('ee/services-data.js');
const ruServices = loadServices('ru/services/services-data.js');
const enServices = loadServices('en/services/services-data.js');

function sitemapUrl(url, priority, changefreq) {
  const prio = priority ? `\n    <priority>${priority}</priority>` : '';
  const change = changefreq ? `\n    <changefreq>${changefreq}</changefreq>` : '';
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${TODAY}</lastmod>${change}${prio}
  </url>`;
}

const sitemapEntries = [
  sitemapUrl(`${PROD_ORIGIN}/`, '1.0', 'weekly'),
  sitemapUrl(`${PROD_ORIGIN}/ru/`, '0.9', 'weekly'),
  sitemapUrl(`${PROD_ORIGIN}/en/`, '0.9', 'weekly'),
  '',
  '  <!-- Услуги ET -->',
  // Filter out SKIP_FILES slugs — they are added separately below as standalone pages
  ...eeServices.filter(s => !SKIP_FILES.has(s.slug)).map(s => sitemapUrl(`${PROD_ORIGIN}/services/${s.slug}`)),
  // Webasto standalone landing pages (not in services array generation)
  sitemapUrl(`${PROD_ORIGIN}/services/webasto-sumptomid`),
  '',
  '  <!-- Услуги RU -->',
  ...ruServices.filter(s => !SKIP_FILES.has(s.slug)).map(s => sitemapUrl(`${PROD_ORIGIN}/ru/services/${s.slug}`)),
  sitemapUrl(`${PROD_ORIGIN}/ru/services/webasto-simptomy`),
  '',
  '  <!-- Услуги EN -->',
  ...enServices.filter(s => !SKIP_FILES.has(s.slug)).map(s => sitemapUrl(`${PROD_ORIGIN}/en/services/${s.slug}`)),
  sitemapUrl(`${PROD_ORIGIN}/en/services/webasto-symptoms`),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemapXml, 'utf8');
process.stdout.write('✅ sitemap.xml updated.\n\n');
