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

// ─── Configuration ────────────────────────────────────────────────────────────

const PROD_ORIGIN = 'https://mrcar.ee';
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

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
      { href: '/#services', label: '[01] Teenused', style: 'color:var(--accent-primary)' },
      { href: '/#about', label: '[02] Meist' },
      { href: '/#pricing', label: '[03] Hinnad' },
      { href: '/#contact', label: '[04] Kontakt' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    bookLabel: 'Broneeri aeg',
    fabCall: 'Helista',
    fabBook: 'Broneeri aeg',
    formSubmit: 'Saada päring',
    formSending: 'Saatmine...',
    formOk: 'Päring saadetud! Helistame tagasi 30 minutiga.',
    sidebarTitle: 'Vali teenus',
    otherLangs: [
      { href: '/ru/', code: 'RU', flag: 'circle-flags:ru', title: 'Русский' },
      { href: '/en/', code: 'EN', flag: 'circle-flags:en', title: 'English' },
    ],
    selfLang: { href: '/', flag: 'circle-flags:ee', title: 'Eesti keel' },
    mapLabel: 'Kopli 82a, Tallinn',
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
      privacyHref: '/privaatsus/'
    }
  },
  {
    lang: 'ru',
    prefix: '/ru',
    dir: 'ru/services',
    dataFile: 'ru/services/services-data.js',
    navLinks: [
      { href: '/ru/#services', label: '[01] Услуги', style: 'color:var(--accent-primary)' },
      { href: '/ru/#about', label: '[02] О нас' },
      { href: '/ru/#pricing', label: '[03] Цены' },
      { href: '/ru/#contact', label: '[04] Контакты' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    bookLabel: 'Записаться',
    fabCall: 'Позвонить',
    fabBook: 'Записаться',
    formSubmit: 'Отправить заявку',
    formSending: 'Отправка...',
    formOk: 'Заявка отправлена! Перезвоним за 30 минут.',
    sidebarTitle: 'Выбрать услугу',
    otherLangs: [
      { href: '/', code: 'ET', flag: 'circle-flags:ee', title: 'Eesti keel' },
      { href: '/en/', code: 'EN', flag: 'circle-flags:en', title: 'English' },
    ],
    selfLang: { href: '/ru/', flag: 'circle-flags:ru', title: 'Русский' },
    mapLabel: 'Kopli 82a, Таллинн',
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
      privacyHref: '/ru/privaatsus/'
    }
  },
  {
    lang: 'en',
    prefix: '/en',
    dir: 'en/services',
    dataFile: 'en/services/services-data.js',
    navLinks: [
      { href: '/en/#services', label: '[01] Services', style: 'color:var(--accent-primary)' },
      { href: '/en/#about', label: '[02] About' },
      { href: '/en/#pricing', label: '[03] Pricing' },
      { href: '/en/#contact', label: '[04] Contact' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    bookLabel: 'Book Now',
    fabCall: 'Call Us',
    fabBook: 'Book Now',
    formSubmit: 'Send Request',
    formSending: 'Sending...',
    formOk: 'Request sent! We\'ll call you back within 30 minutes.',
    sidebarTitle: 'Select service',
    otherLangs: [
      { href: '/', code: 'ET', flag: 'circle-flags:ee', title: 'Eesti keel' },
      { href: '/ru/', code: 'RU', flag: 'circle-flags:ru', title: 'Русский' },
    ],
    selfLang: { href: '/en/', flag: 'circle-flags:en', title: 'English' },
    mapLabel: 'Kopli 82a, Tallinn',
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
      privacyHref: '/en/privacy/'
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
  return sandbox.SERVICES;
}

// ─── HTML helpers ─────────────────────────────────────────────────────────────

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
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
            <div class="sd-sidebar__cat-title">${esc(cat)}</div>
            <ul class="sd-sidebar__list">`;
    for (const s of items) {
      const active = s.slug === currentSlug ? ' active' : '';
      html += `\n              <li><a href="${cfg.serviceBase}${esc(s.slug)}" class="sd-sidebar__link${active}">
                <iconify-icon icon="${esc(s.icon)}" width="18" height="18" aria-hidden="true"></iconify-icon>
                <span>${esc(s.navTitle)}</span>
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
    </nav>
    <a href="tel:${cfg.phoneHref}" class="navbar__phone">${cfg.phone}</a>
    <div class="navbar__cta">
      <a href="#request" class="btn btn-primary">${esc(cfg.bookLabel)}</a>
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
      <a href="${cfg.prefix ? cfg.prefix + '/#services' : '/#services'}" class="mobile-menu__link" onclick="toggleMobileMegaMenu(event)">
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

  <!-- CTA + FORM -->
  <section class="sd-cta" id="request">
    <div class="sd-cta__overlay"></div>
    <div class="sd-cta__inner site-container">
      <div class="sd-cta__info">
        <h2 class="sd-cta__title">${esc(s.ctaSection.title)}</h2>
        <p class="sd-cta__text">${esc(s.ctaSection.text)}</p>
        <a href="tel:${esc(s.ctaSection.phoneNumber)}" class="sd-cta__phone">
          <iconify-icon icon="mdi:phone" width="20" height="20" aria-hidden="true"></iconify-icon>
          ${esc(s.ctaSection.phoneText)}
        </a>
        <div class="sd-cta__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.9!2d24.7367!3d59.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294a73d8b6a69%3A0x4e7e0e6e7e6e7e6e!2sKopli+82a%2C+Tallinn!5e0!3m2!1set!2see!4v1600000000000!5m2!1set!2see"
            width="100%" height="200" style="border:0;border-radius:8px;" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" title="Mr.Car asukoht">
          </iframe>
          <p class="sd-cta__address">
            <iconify-icon icon="mdi:map-marker" width="16" height="16" aria-hidden="true"></iconify-icon>
            ${esc(cfg.mapLabel)}
          </p>
        </div>
      </div>
      <div class="sd-cta__form-wrap">
        <h3 class="sd-cta__form-title">${esc(s.form.title)}</h3>
        <p class="sd-cta__form-subtitle">${esc(s.form.subtitle)}</p>
        <form class="sd-form" id="serviceForm" novalidate>
          <div class="sd-form__row">
            <input class="sd-form__input" type="text" name="name" placeholder="Nimi / Имя / Name" required>
          </div>
          <div class="sd-form__row">
            <input class="sd-form__input" type="tel" name="phone" placeholder="Telefon +372..." required>
          </div>
          <div class="sd-form__row">
            <input class="sd-form__input" type="text" name="car" placeholder="Auto mark ja mudel / Марка и модель">
          </div>
          <div class="sd-form__row">
            <textarea class="sd-form__textarea" name="message" placeholder="Kirjelda probleemi / Опишите проблему" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary sd-form__btn">${esc(cfg.formSubmit)} <span class="arrow">↗</span></button>
        </form>
      </div>
    </div>
  </section>

  <!-- SNACKBAR -->
  <div id="snackbar" class="snackbar">${esc(cfg.formOk)}</div>

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
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const btn  = this.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '${esc(cfg.formSending)}';
        setTimeout(() => {
          const sb = document.getElementById('snackbar');
          sb.className = 'snackbar show';
          setTimeout(() => { sb.className = sb.className.replace('show', ''); }, 3000);
          form.reset();
          btn.disabled = false;
          btn.innerHTML = orig;
        }, 1000);
      });
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
