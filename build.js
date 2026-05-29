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
 * Standalone service pages are NOT touched — they are excluded via SKIP_FILES constant.
 *
 * Run: node build.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SR_ONLY_INLINE_STYLE = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
const GLOBAL_STYLE_VERSION = '7';

// Load partials
const FORM_PARTIAL = fs.readFileSync(path.join(ROOT, 'partials/form.html'), 'utf8');
const MAP_PARTIAL = fs.readFileSync(path.join(ROOT, 'partials/map.html'), 'utf8');

// ─── Configuration ────────────────────────────────────────────────────────────

const PROD_ORIGIN = 'https://www.mrcar.ee';
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
const SERVICE_NAV_ORDER = [
  'autoremont',
  'hooldus-diagnostika',
  'diagnostika',
  'mootoriremont',
  'kaigukastiremont',
  'pidurisusteemi-hooldus-ja-remont',
  'veermik-pidurid',
  'elektritood',
  'kliimahooldus',
  'webasto-diagnostika',
  'ostueelne-kontroll',
  'rehvitood',
  'summutid-keevitus',
  'keevitustood'
];
const SERVICE_NAV_RANK = new Map(SERVICE_NAV_ORDER.map((slug, index) => [slug, index]));

// These standalone landing pages are NOT generated — they stay as-is.
const SKIP_FILES = new Set([
  'webasto-diagnostika',
  'webasto-sumptomid',
  'webasto-simptomy',
  'webasto-symptoms',
  'kaigukastiremont',
  'remont-kpp',
  'pidurisusteemi-hooldus-ja-remont',
  'ketaspidurite-remont',
  'trummelpidurite-remont',
  'tormoznaya-sistema',
  'diskovye-tormoza',
  'barabannye-tormoza',
  'brake-system-service-and-repair',
  'disc-brake-repair',
  'transmission-repair',
  'automaatkasti-remont',
  'remont-akpp',
  'automatic-transmission-repair'
]);

const LANGS = [
  {
    lang: 'et',
    prefix: '',                  // canonical: /services/{slug}
    dir: 'services',
    dataFile: 'ee/services-data.js',
    navLinks: [
      { href: '/teenused', label: '[01] Teenused' },
      { href: '/meist', label: '[02] Meist' },
      { href: '/hinnad', label: '[03] Hinnad' },
      { href: '/kontakt', label: '[04] Kontakt' },
      { href: '/galerii', label: '[05] Galerii' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    menuOpenLabel: 'Ava menüü',
    menuCloseLabel: 'Sulge menüü',
    mobileNavLabel: 'Mobiilne navigatsioon',
    heroMetaLabel: '/// Mr.Car Autoteenindus',
    fabTriggerLabel: 'Võta ühendust',
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
      vatLabel: 'KMKR',
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
      { href: '/ru/uslugi', label: '[01] Услуги' },
      { href: '/ru/o-nas', label: '[02] О нас' },
      { href: '/ru/tseny', label: '[03] Цены' },
      { href: '/ru/kontakt', label: '[04] Контакты' },
      { href: '/ru/galereya', label: '[05] Галерея' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    menuOpenLabel: 'Открыть меню',
    menuCloseLabel: 'Закрыть меню',
    mobileNavLabel: 'Мобильная навигация',
    heroMetaLabel: '/// Автосервис Mr.Car',
    fabTriggerLabel: 'Связаться',
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
      vatLabel: 'НДС',
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
      { href: '/en/services', label: '[01] Services' },
      { href: '/en/about', label: '[02] About' },
      { href: '/en/prices', label: '[03] Prices' },
      { href: '/en/contact', label: '[04] Contact' },
      { href: '/en/gallery', label: '[05] Gallery' },
    ],
    phone: '5646 1210',
    phoneHref: '+37256461210',
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    mobileNavLabel: 'Mobile navigation',
    heroMetaLabel: '/// Mr.Car Auto Service',
    fabTriggerLabel: 'Contact us',
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
      vatLabel: 'VAT',
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

function srOnlySpan(text) {
  return `<span style="${SR_ONLY_INLINE_STYLE}">${esc(text)}</span>`;
}

function toPublicAssetPath(assetPath) {
  const value = String(assetPath || '').trim();
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) return value;
  return value.startsWith('/') ? value : `/${value}`;
}

function toAbsoluteSiteUrl(assetPath) {
  const publicPath = toPublicAssetPath(assetPath);
  if (!publicPath) return '';
  if (/^https?:\/\//i.test(publicPath)) return publicPath;
  return `${PROD_ORIGIN}${publicPath}`;
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

const NAV_ORDINAL_RE = /^\[\d+\]\s*/;

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

function stripNavOrdinal(label) {
  return String(label || '').replace(NAV_ORDINAL_RE, '').trim();
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

function getInPageNavLabel(lang) {
  if (lang === 'ru') return 'Навигация по странице';
  if (lang === 'et') return 'Lehesisene navigeerimine';
  return 'Page navigation';
}

function getPricingLabels(lang) {
  if (lang === 'ru') return { service: 'Услуга', price: 'Стоимость', price2: 'Под ключ от' };
  if (lang === 'et') return { service: 'Teenus', price: 'Hind', price2: 'Koos varuosadega alates' };
  return { service: 'Service', price: 'Price', price2: 'All-in from' };
}

function buildHeroStats(stats) {
  if (!Array.isArray(stats) || stats.length === 0) return '';
  return `<div class="gb-hero-stats">
        ${stats.map(stat => `<div class="gb-hero-stat">
          <div class="gb-hero-stat__value">${esc(stat.value || '')}</div>
          <div class="gb-hero-stat__label">${esc(stat.label || '')}</div>
        </div>`).join('')}
      </div>`;
}

function buildLocalNav(items, lang) {
  if (!Array.isArray(items) || items.length === 0) return '';
  return `<nav class="gb-local-nav" aria-label="${esc(getInPageNavLabel(lang))}">
        ${items.map(item => `<a href="${esc(item.href || '#')}" class="gb-local-nav__pill">
          <iconify-icon icon="${esc(item.icon || 'mdi:bookmark-outline')}" width="16" height="16" aria-hidden="true"></iconify-icon>
          <span>${esc(item.label || '')}</span>
        </a>`).join('')}
      </nav>`;
}

function buildBrandPills(brands) {
  if (!Array.isArray(brands) || brands.length === 0) return '';
  return `<div class="gb-brands-bar">
        ${brands.map(brand => `<span class="gb-brand-pill">${esc(brand)}</span>`).join('')}
      </div>`;
}

function buildUrgencyBlock(block) {
  if (!block || !block.title || !block.text) return '';
  return `<div class="gb-urgency-block">
        <div class="gb-urgency-block__title">
          <iconify-icon icon="${esc(block.icon || 'mdi:alert-decagram')}" width="24" height="24" aria-hidden="true"></iconify-icon>
          <span>${esc(block.title)}</span>
        </div>
        <p class="gb-urgency-block__text">${esc(block.text)}</p>
      </div>`;
}

function buildDetailedSymptoms(cards) {
  if (!Array.isArray(cards) || cards.length === 0) return '';
  return `<div class="gb-symptoms-grid">
        ${cards.map(card => {
          const toneClass = card.tone ? ` gb-symptom-card--${esc(card.tone)}` : '';
          return `<div class="gb-symptom-card${toneClass}">
            <div class="gb-symptom-card__icon">
              <iconify-icon icon="${esc(card.icon || 'mdi:alert-circle-outline')}" width="22" height="22" aria-hidden="true"></iconify-icon>
            </div>
            <div class="gb-symptom-card__title">${esc(card.title || '')}</div>
            <p class="gb-symptom-card__desc">${esc(card.desc || '')}</p>
          </div>`;
        }).join('')}
      </div>`;
}

function buildRiskStages(stages) {
  if (!Array.isArray(stages) || stages.length === 0) return '';
  return `<div class="gb-risk-stages">
        ${stages.map(stage => `<div class="gb-risk-stage">
          <div class="gb-risk-stage__marker">${esc(stage.marker || '')}</div>
          <div class="gb-risk-stage__content">
            <strong>${esc(stage.title || '')}</strong>
            <p>${esc(stage.text || '')}</p>
          </div>
        </div>`).join('')}
      </div>`;
}

function buildTypeCards(types) {
  if (!Array.isArray(types) || types.length === 0) return '';
  return `<div class="gb-types-grid">
        ${types.map(type => `<div class="gb-type-card">
          <iconify-icon icon="${esc(type.icon || 'mdi:engine-outline')}" width="28" height="28" class="gb-type-card__icon" aria-hidden="true"></iconify-icon>
          <div class="gb-type-card__title">${esc(type.title || '')}</div>
          <p class="gb-type-card__desc">${esc(type.desc || '')}</p>
          ${Array.isArray(type.brands) && type.brands.length > 0 ? `<div class="gb-type-card__brands">
            ${type.brands.map(brand => `<span class="gb-type-card__brand-chip">${esc(brand)}</span>`).join('')}
          </div>` : ''}
        </div>`).join('')}
      </div>`;
}

function buildChecklist(items) {
  if (!Array.isArray(items) || items.length === 0) return '';
  return `<ul class="gb-checklist">
        ${items.map(item => `<li class="gb-checklist__item">
          <iconify-icon icon="mdi:check-circle" width="18" height="18" aria-hidden="true"></iconify-icon>
          <span>${esc(item)}</span>
        </li>`).join('')}
      </ul>`;
}

function buildServiceCards(cards) {
  if (!Array.isArray(cards) || cards.length === 0) return '';
  return `<div class="gb-services-grid">
        ${cards.map(card => `<div class="gb-service-card${card.featured ? ' gb-service-card--featured' : ''}">
          <iconify-icon icon="${esc(card.icon || 'mdi:wrench')}" width="24" height="24" class="gb-service-card__icon" aria-hidden="true"></iconify-icon>
          <div class="gb-service-card__title">${esc(card.title || '')}</div>
          <p class="gb-service-card__desc">${esc(card.desc || '')}</p>
          ${(card.price || card.time) ? `<div class="gb-service-card__footer">
            ${card.price ? `<span class="gb-service-card__price">${esc(card.price)}</span>` : ''}
            ${card.time ? `<span class="gb-service-card__time">${esc(card.time)}</span>` : ''}
          </div>` : ''}
        </div>`).join('')}
      </div>`;
}

function buildProcessSteps(steps) {
  if (!Array.isArray(steps) || steps.length === 0) return '';
  return `<div class="gb-steps">
        ${steps.map(step => `<div class="gb-step">
          <div class="gb-step__num">${esc(step.num || '')}</div>
          <div>
            <strong>${esc(step.title || '')}</strong>
            <p>${esc(step.text || '')}</p>
          </div>
        </div>`).join('')}
      </div>`;
}

function buildPricingRows(rows, labels, hasSecondPrice = false) {
  if (!Array.isArray(rows) || rows.length === 0) return '';
  return rows.map(row => `<tr>
            <td data-label="${esc(labels.service)}">${esc(row.service || '')}</td>
            <td data-label="${esc(labels.price)}" class="gb-price">${esc(row.price || '')}</td>
            ${hasSecondPrice ? `<td data-label="${esc(labels.price2 || '')}">${esc(row.price2 || '')}</td>` : ''}
          </tr>`).join('');
}

function buildReviewCards(reviews) {
  if (!Array.isArray(reviews) || reviews.length === 0) return '';
  return `<div class="gb-reviews-grid">
        ${reviews.map(review => `<div class="gb-review-card">
          <div class="gb-review-card__stars">★★★★★</div>
          <div class="gb-review-card__text">${esc(review.text || '')}</div>
          <div class="gb-review-card__author">
            <span class="gb-review-card__name">${esc(review.author || '')}</span>
            <span class="gb-review-card__car">${esc(review.car || '')}</span>
          </div>
        </div>`).join('')}
      </div>`;
}

function buildTrustItems(items) {
  if (!Array.isArray(items) || items.length === 0) return '';
  return `<div class="gb-trust">
        ${items.map(item => `<div class="gb-trust-item">
          <iconify-icon icon="${esc(item.icon || 'mdi:shield-check')}" width="28" height="28" aria-hidden="true"></iconify-icon>
          <div class="gb-trust-item__title">${esc(item.title || '')}</div>
          <p class="gb-trust-item__desc">${esc(item.desc || '')}</p>
        </div>`).join('')}
      </div>`;
}

function buildFaqItems(items, title) {
  if (!Array.isArray(items) || items.length === 0) return '';
  return `<section id="faq">
        <h3 class="gb-section-title">${esc(title || '')}</h3>
        <div class="gb-faq">
          ${items.map((item, index) => `<details class="gb-faq-item"${index === 0 ? ' open' : ''}>
            <summary>${esc(item.q || '')}<iconify-icon icon="mdi:chevron-down" width="20" height="20" aria-hidden="true"></iconify-icon></summary>
            <div class="gb-faq-item__content">${esc(item.a || '')}</div>
          </details>`).join('')}
        </div>
      </section>`;
}

function buildArticle(article) {
  if (!article || !article.title) return '';

  const sectionsHtml = (article.sections || []).map(section => {
    const headingHtml = section.heading ? `<h4>${esc(section.heading)}</h4>` : '';
    const paragraphsHtml = (section.paragraphs || []).map(paragraph => `<p>${esc(paragraph)}</p>`).join('');
    const columnsHtml = Array.isArray(section.columns) && section.columns.length > 0 ? `<div class="gb-article__cols">
            ${section.columns.map(column => `<div>
              <div class="gb-article__col-title">${esc(column.title || '')}</div>
              <ul class="gb-article__list">
                ${(column.items || []).map(item => `<li>${esc(item)}</li>`).join('')}
              </ul>
            </div>`).join('')}
          </div>` : '';
    return `${headingHtml}${paragraphsHtml}${columnsHtml}`;
  }).join('');

  return `<div class="gb-article" id="article">
        <div class="gb-article__header">
          <div class="gb-article__title">${esc(article.title)}</div>
        </div>
        <div class="gb-article__body">
          ${sectionsHtml}
        </div>
      </div>`;
}

function buildCrossLinks(links) {
  if (!Array.isArray(links) || links.length === 0) return '';
  return `<div class="gb-crosslinks">
        ${links.map(link => `<a href="${esc(link.href || '#')}" class="gb-crosslink">
          <iconify-icon icon="${esc(link.icon || 'mdi:arrow-top-right')}" width="28" height="28" aria-hidden="true"></iconify-icon>
          <div>
            <div class="gb-crosslink__label">${esc(link.label || '')}</div>
            <div class="gb-crosslink__title">${esc(link.title || '')}</div>
          </div>
        </a>`).join('')}
      </div>`;
}

function renderDefaultMainContent(s, symptomCards, servicesListHtml, promoBanner) {
  const afterSymptomsHtml = s.afterSymptomsHtml || esc(s.afterSymptomsText || '');

  return `
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
        <p class="sd-symptoms__after">${afterSymptomsHtml}</p>
      </div>

      <!-- Services list -->
      <div class="sd-services-list">
        <h3 class="sd-services-list__title">${esc(s.servicesListTitle)}</h3>
        <ul class="sd-services-list__items">
          ${servicesListHtml}
        </ul>
        <p class="sd-services-list__after">${esc(s.afterListText || '')}</p>
      </div>

      ${promoBanner}`;
}

function renderDeepDiveContent(s, cfg) {
  const pricingLabels = getPricingLabels(cfg.lang);
  const heroStatsHtml = buildHeroStats(s.heroStats || []);
  const localNavHtml = buildLocalNav(s.localNav || [], cfg.lang);
  const brandsHtml = buildBrandPills(s.brands || []);
  const urgencyHtml = buildUrgencyBlock(s.urgencyBlock);
  const detailedSymptomsHtml = buildDetailedSymptoms(s.detailedSymptoms || []);
  const riskStagesHtml = buildRiskStages(s.riskStages || []);
  const typeCardsHtml = buildTypeCards(s.engineTypes || []);
  const diagnosticsChecklistHtml = buildChecklist(s.diagnosticsChecklist || []);
  const diagnosticsTextHtml = Array.isArray(s.diagnosticsText)
    ? s.diagnosticsText.map(text => `<p class="gb-section-text">${esc(text)}</p>`).join('\n          ')
    : (s.diagnosticsText ? `<p class="gb-section-text">${esc(s.diagnosticsText)}</p>` : '');
  const serviceCardsHtml = buildServiceCards(s.serviceCards || []);
  const processStepsHtml = buildProcessSteps(s.processSteps || []);
  const hasSecondPrice = Array.isArray(s.pricingRows) && s.pricingRows.some(row => row.price2);
  const pricingRowsHtml = buildPricingRows(s.pricingRows || [], pricingLabels, hasSecondPrice);
  const reviewCardsHtml = buildReviewCards(s.reviews || []);
  const trustItemsHtml = buildTrustItems(s.trustItems || []);
  const faqHtml = buildFaqItems(s.faqItems || [], s.faqTitle || '');
  const articleHtml = buildArticle(s.article);
  const crossLinksHtml = buildCrossLinks(s.crossLinks || []);

  return `
      ${heroStatsHtml}
      ${localNavHtml}

      <div class="sd-intro">
        <h2 class="sd-intro__title">${esc(s.introTitle)}</h2>
        <div class="sd-intro__text">
          ${(s.introText || []).map(p => `<p>${esc(p)}</p>`).join('\n          ')}
        </div>
      </div>

      ${brandsHtml}
      ${urgencyHtml}

      ${detailedSymptomsHtml ? `<section id="symptoms">
        <h3 class="gb-section-title">${esc(s.detailedSymptomsTitle || '')}</h3>
        ${detailedSymptomsHtml}
      </section>` : ''}

      ${riskStagesHtml ? `<section>
        <h3 class="gb-section-title">${esc(s.riskStagesTitle || '')}</h3>
        ${riskStagesHtml}
      </section>` : ''}

      ${typeCardsHtml ? `<section id="types">
        <h3 class="gb-section-title">${esc(s.engineTypesTitle || '')}</h3>
        ${typeCardsHtml}
      </section>` : ''}

      ${(s.diagnosticsTitle || diagnosticsChecklistHtml) ? `<section id="diagnostika">
        <div class="gb-diagnostics-card">
          <h3 class="gb-section-title">${esc(s.diagnosticsTitle || '')}</h3>
          ${diagnosticsTextHtml}
          ${diagnosticsChecklistHtml}
        </div>
      </section>` : ''}

      ${serviceCardsHtml ? `<section id="services">
        <h3 class="gb-section-title">${esc(s.serviceCardsTitle || '')}</h3>
        ${serviceCardsHtml}
      </section>` : ''}

      ${processStepsHtml ? `<section id="process">
        <h3 class="gb-section-title">${esc(s.processTitle || '')}</h3>
        ${processStepsHtml}
      </section>` : ''}

      ${pricingRowsHtml ? `<section id="pricing">
        <h3 class="gb-section-title">${esc(s.pricingTitle || '')}</h3>
        <table class="gb-pricing-table">
          <thead><tr><th>${esc(pricingLabels.service)}</th><th>${esc(pricingLabels.price)}</th>${hasSecondPrice ? `<th>${esc(pricingLabels.price2 || '')}</th>` : ''}</tr></thead>
          <tbody>
            ${pricingRowsHtml}
          </tbody>
        </table>
        ${s.pricingNote ? `<p class="gb-pricing-note">${esc(s.pricingNote)}</p>` : ''}
      </section>` : ''}

      ${reviewCardsHtml ? `<section id="reviews">
        <h3 class="gb-section-title">${esc(s.reviewsTitle || '')}</h3>
        ${s.ratingSummary ? `<div class="gb-rating-summary">
          <div class="gb-rating-summary__score">${esc(s.ratingSummary.score || '')}</div>
          <div class="gb-rating-summary__meta"><strong>${esc(s.ratingSummary.metaStrong || '')}</strong>${s.ratingSummary.metaText ? ` · ${esc(s.ratingSummary.metaText)}` : ''}</div>
        </div>` : ''}
        ${reviewCardsHtml}
      </section>` : ''}

      ${trustItemsHtml}
      ${faqHtml}
      ${articleHtml}
      ${crossLinksHtml}`;
}

function buildNavLinks(navLinks) {
  return navLinks.map(buildNavLink).join('\n            ');
}

function buildNavLink(n) {
  return `<a href="${esc(n.href)}" class="navbar__link"${n.style ? ` style="${esc(n.style)}"` : ''}>${esc(n.label)}</a>`;
}

function getServiceParentSlug(service) {
  return service.menuParentSlug || service.parentSlug || '';
}

function isTopLevelMenuService(service) {
  return !service.hideFromMenu && !getServiceParentSlug(service);
}

function getTopLevelMenuServices(services) {
  return services.filter(isTopLevelMenuService);
}

function normalizeMenuChild(child, serviceLookup) {
  const raw = typeof child === 'string' ? { slug: child } : (child || {});
  const slug = raw.slug || '';
  const linkedService = serviceLookup.get(slug);
  const label = raw.label || raw.navTitle || linkedService?.navTitle || linkedService?.heroTitle || slug;

  return {
    slug,
    href: raw.href || '',
    label,
    icon: raw.icon || linkedService?.icon || ''
  };
}

function getMenuChildren(services, parentService) {
  const serviceLookup = new Map(services.map(service => [service.slug, service]));
  const explicitChildren = Array.isArray(parentService.menuChildren)
    ? parentService.menuChildren
    : [];
  const dataChildren = services
    .filter(service => getServiceParentSlug(service) === parentService.slug)
    .map(service => ({
      slug: service.slug,
      label: service.navTitle || service.heroTitle || service.slug,
      icon: service.icon || ''
    }));

  const seen = new Set();
  return [...explicitChildren, ...dataChildren]
    .map(child => normalizeMenuChild(child, serviceLookup))
    .filter(child => {
      const key = child.href || child.slug;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function isServiceFamily(services, currentSlug, parentService) {
  if (currentSlug === parentService.slug) return true;
  return getMenuChildren(services, parentService).some(child => child.slug === currentSlug);
}

function menuChildHref(child, cfg) {
  return child.href ? esc(child.href) : `${cfg.serviceBase}${esc(child.slug)}`;
}

function renderMenuSubmenuArrow() {
  return '<iconify-icon icon="mdi:chevron-right" width="18" height="18" class="mega-menu__submenu-arrow" aria-hidden="true"></iconify-icon>';
}

function renderSidebarCaret() {
  return '<iconify-icon icon="mdi:chevron-down" width="16" height="16" class="sd-sidebar__caret" aria-hidden="true"></iconify-icon>';
}

function buildSidebar(services, currentSlug, cfg) {
  // Group by category
  const cats = {};
  for (const s of getTopLevelMenuServices(services)) {
    if (!cats[s.category]) cats[s.category] = [];
    cats[s.category].push(s);
  }
  let html = '';
  for (const [cat, items] of Object.entries(cats)) {
    html += `\n          <div class="sd-sidebar__category">
            <div class="sd-sidebar__cat-title">${esc(toSentenceCaseLabel(cat, cfg.lang))}</div>
            <ul class="sd-sidebar__list">`;
    for (const s of items) {
      const children = getMenuChildren(services, s);
      if (children.length) {
        const isFamilyPage = isServiceFamily(services, currentSlug, s);
        const parentActive = isFamilyPage ? ' active' : '';
        const itemOpen = isFamilyPage ? ' sd-sidebar__item--open' : '';
        const childrenHtml = children.map(child => {
          const childActive = currentSlug === child.slug ? ' active' : '';
          return `<li><a href="${menuChildHref(child, cfg)}" class="sd-sidebar__sublink${childActive}">${esc(child.label)}</a></li>`;
        }).join('\n                  ');

        html += `\n              <li class="sd-sidebar__item sd-sidebar__item--has-children${itemOpen}">
                <a href="${cfg.serviceBase}${esc(s.slug)}" class="sd-sidebar__link${parentActive}">
                  <iconify-icon icon="${esc(s.icon)}" width="18" height="18" aria-hidden="true"></iconify-icon>
                  <span>${esc(s.navTitle)}</span>
                  ${renderSidebarCaret()}
                </a>
                <ul class="sd-sidebar__sublist">
                  ${childrenHtml}
                </ul>
              </li>`;
        continue;
      }

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
  return getTopLevelMenuServices(services).map(s => {
    const children = getMenuChildren(services, s);
    if (children.length) {
      const submenuHtml = children.map(child =>
        `<a href="${menuChildHref(child, cfg)}" class="mega-menu__subitem">${esc(child.label)}</a>`
      ).join('\n                ');

      return `<div class="mega-menu__group">
              <a href="${cfg.serviceBase}${esc(s.slug)}" class="mega-menu__item mega-menu__item--has-submenu">
                <iconify-icon icon="${esc(s.icon)}" width="20" height="20" aria-hidden="true"></iconify-icon>
                <span>${esc(s.navTitle)}</span>
                ${renderMenuSubmenuArrow()}
              </a>
              <div class="mega-menu__submenu">
                ${submenuHtml}
              </div>
            </div>`;
    }

    return `<a href="${cfg.serviceBase}${esc(s.slug)}" class="mega-menu__item">
              <iconify-icon icon="${esc(s.icon)}" width="20" height="20" aria-hidden="true"></iconify-icon>
              <span>${esc(s.navTitle)}</span>
            </a>`;
  }).join('\n            ');
}

function buildMobileMegaMenu(services, cfg) {
  return getTopLevelMenuServices(services).map(s => {
    const children = getMenuChildren(services, s);
    if (children.length) {
      const mobileSubmenuHtml = children.map(child =>
        `<a href="${menuChildHref(child, cfg)}" class="mobile-mega-menu__subitem" onclick="closeMobileMenu()">
                <span>${esc(child.label)}</span>
              </a>`
      ).join('\n              ');

      return `<div class="mobile-mega-menu__group">
              <a href="${cfg.serviceBase}${esc(s.slug)}" class="mobile-mega-menu__item" onclick="closeMobileMenu()">
                <iconify-icon icon="${esc(s.icon)}" aria-hidden="true"></iconify-icon>
                <span>${esc(s.navTitle)}</span>
              </a>
              ${mobileSubmenuHtml}
            </div>`;
    }

    return `<a href="${cfg.serviceBase}${esc(s.slug)}" class="mobile-mega-menu__item" onclick="closeMobileMenu()">
              <iconify-icon icon="${esc(s.icon)}" aria-hidden="true"></iconify-icon>
              <span>${esc(s.navTitle)}</span>
            </a>`;
  }).join('\n            ');
}

function getLanguageLinks() {
  return [
    { href: '/', code: 'et', flag: 'circle-flags:ee', title: 'Eesti keel' },
    { href: '/ru/', code: 'ru', flag: 'circle-flags:ru', title: 'Русский' },
    { href: '/en/', code: 'en', flag: 'circle-flags:en', title: 'English' }
  ];
}

function buildDesktopLangs(cfg) {
  return getLanguageLinks().map(l => {
    const isActive = l.code === cfg.lang ? ' active' : '';
    return `<a href="${l.href}" class="lang-link${isActive}" title="${esc(l.title)}"><iconify-icon icon="${l.flag}" width="24" height="24"></iconify-icon>${srOnlySpan(l.title)}</a>`;
  }).join('\n            ');
}

function buildMobileLangs(cfg) {
  return getLanguageLinks().map(l => {
    const isActive = l.code === cfg.lang ? ' active' : '';
    return `<a href="${l.href}" class="mobile-lang-link${isActive}"><iconify-icon icon="${l.flag}" width="32" height="32"></iconify-icon><span>${esc(l.title)}</span></a>`;
  }).join('\n            ');
}

function buildHeaderAndMobileMenu(services, cfg) {
  const servicesNavLink = buildNavLink(cfg.navLinks[0]);
  const otherNavLinks = cfg.navLinks.slice(1).map(buildNavLink).join('\n      ');
  const mobileOtherNavLinks = cfg.navLinks.slice(1)
    .map(n => `<a href="${esc(n.href)}" class="mobile-menu__link" onclick="closeMobileMenu()">${esc(stripNavOrdinal(n.label))}</a>`)
    .join('\n      ');

  return `<!-- NAVBAR -->
  <header class="navbar" id="navbar">
    <a href="${cfg.prefix || '/'}" class="navbar__logo">Mr.Car</a>
    <nav class="navbar__nav">
      <div class="navbar__item has-dropdown">
        ${servicesNavLink}
        <div class="mega-menu" id="megaMenuDesktop">
          ${buildMegaMenu(services, cfg)}
        </div>
      </div>
      ${otherNavLinks}
      <a href="tel:${cfg.phoneHref}" class="navbar__phone">${cfg.phone}</a>
    </nav>
    <div class="navbar__cta">
      <a href="${esc(cfg.headerCtaHref)}" class="btn btn-primary">${esc(cfg.headerCtaLabel)}</a>
    </div>
    <button class="navbar__burger" id="burgerBtn" aria-label="${esc(cfg.menuOpenLabel)}">
      <span></span><span></span><span></span>
    </button>
    <div class="navbar__lang desktop-only">
      ${buildDesktopLangs(cfg)}
    </div>
  </header>

  <!-- MOBILE MENU -->
  <div class="mobile-menu" id="mobileMenu" role="dialog" aria-modal="true" aria-label="${esc(cfg.mobileNavLabel)}">
    <button class="mobile-menu__close" id="closeMenu" aria-label="${esc(cfg.menuCloseLabel)}">&times;</button>
    <nav aria-label="${esc(cfg.mobileNavLabel)}">
      <a href="${esc(cfg.navLinks[0].href)}" class="mobile-menu__link" onclick="toggleMobileMegaMenu(event)">
        ${esc(stripNavOrdinal(cfg.navLinks[0].label))}
        <iconify-icon icon="mdi:chevron-down" class="mobile-menu__toggle-icon" width="24" height="24"></iconify-icon>
      </a>
      <div class="mobile-mega-menu" id="mobileMegaMenu">
        ${buildMobileMegaMenu(services, cfg)}
      </div>
      ${mobileOtherNavLinks}
    </nav>
    <a href="tel:${cfg.phoneHref}" class="mobile-menu__link mobile-menu__phone" onclick="closeMobileMenu()">${cfg.phone}</a>
    <div class="mobile-menu__lang">
      ${buildMobileLangs(cfg)}
    </div>
  </div>`;
}

function buildBreadcrumbs(s, cfg) {
  const home = cfg.lang === 'ru'
    ? { href: '/ru', label: 'Главная' }
    : cfg.lang === 'en'
      ? { href: '/en', label: 'Home' }
      : { href: '/', label: 'Avaleht' };
  const services = cfg.lang === 'ru'
    ? { href: '/ru/uslugi', label: 'Услуги' }
    : cfg.lang === 'en'
      ? { href: '/en/services', label: 'Services' }
      : { href: '/teenused', label: 'Teenused' };

  return `<nav aria-label="Breadcrumb" style="margin-top: var(--space-md); margin-bottom: var(--space-md);">
          <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
              <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                  <a href="${esc(home.href)}" class="breadcrumbs__link" itemprop="item"><span itemprop="name">${esc(home.label)}</span></a>
                  <meta itemprop="position" content="1" />
              </li>
              <li class="breadcrumbs__item"><span class="breadcrumbs__separator">&rsaquo;</span></li>
              <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                  <a href="${esc(services.href)}" class="breadcrumbs__link" itemprop="item"><span itemprop="name">${esc(services.label)}</span></a>
                  <meta itemprop="position" content="2" />
              </li>
              <li class="breadcrumbs__item"><span class="breadcrumbs__separator">&rsaquo;</span></li>
              <li class="breadcrumbs__item breadcrumbs__item--current" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                  <span itemprop="name">${esc(s.heroTitle)}</span>
                  <meta itemprop="position" content="3" />
              </li>
          </ol>
      </nav>`;
}

function buildFooter(cfg) {
  return `<footer class="footer">
    <div class="footer-grid site-container">
      <div>
        <div class="footer__col-title">${esc(cfg.footer.contacts)}</div>
        <div class="footer__text">
          <a href="tel:${cfg.phoneHref}">${esc(cfg.phone)}</a><br>
          <a href="mailto:info@mrcar.ee">info@mrcar.ee</a><br>
          Kopli 82a, 10412 Tallinn
        </div>
        <div class="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=61578161038234" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener">
            <iconify-icon icon="mdi:facebook" aria-hidden="true"></iconify-icon>
            ${srOnlySpan('Facebook')}
          </a>
          <a href="https://www.instagram.com/mrcar.ee/" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener">
            <iconify-icon icon="mdi:instagram" aria-hidden="true"></iconify-icon>
            ${srOnlySpan('Instagram')}
          </a>
        </div>
      </div>
      <div>
        <div class="footer__col-title">${esc(cfg.footer.details)}</div>
        <div class="footer__text footer__text--rekvisiidid">
          ANET EESTI OÜ<br>
          Reg. nr: 10233521<br>
          ${esc(cfg.footer.vatLabel)}: EE100321511<br>
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
  </footer>`;
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

function readTextIfExists(filePath) {
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
}

function normalizeLineEndings(text) {
  return String(text || '').replace(/\r\n?/g, '\n');
}

function extractArticleDatesFromHtml(html) {
  if (!html) return { datePublished: null, dateModified: null };

  const datePublished = html.match(/"datePublished":\s*"(\d{4}-\d{2}-\d{2})"/)?.[1] || null;
  const dateModified = html.match(/"dateModified":\s*"(\d{4}-\d{2}-\d{2})"/)?.[1] || null;

  return { datePublished, dateModified };
}

function normalizeArticleDatesInHtml(html) {
  return normalizeLineEndings(html)
    .replace(/"datePublished":\s*"\d{4}-\d{2}-\d{2}"/g, '"datePublished": "__DATE_PUBLISHED__"')
    .replace(/"dateModified":\s*"\d{4}-\d{2}-\d{2}"/g, '"dateModified": "__DATE_MODIFIED__"');
}

function parseSitemapLastmods(xml) {
  const lastmods = new Map();
  if (!xml) return lastmods;

  const urlPattern = /<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>[\s\S]*?<\/url>/g;
  for (const match of xml.matchAll(urlPattern)) {
    lastmods.set(match[1], match[2]);
  }

  return lastmods;
}

function buildJsonLd(s, cfg, articleDates = {}) {
  const canonicalUrl = `${PROD_ORIGIN}${cfg.serviceBase}${s.slug}`;
  const absImage = toAbsoluteSiteUrl(s.heroImage) || `${PROD_ORIGIN}/android-chrome-512x512.png`;
  const publishedAt = articleDates.datePublished || (s.articleSchema && s.articleSchema.datePublished) || TODAY;
  const modifiedAt = articleDates.dateModified || (s.articleSchema && s.articleSchema.dateModified) || publishedAt;
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
        "description": s.jsonLdServiceDescription || (s.seo && s.seo.description ? s.seo.description : s.heroLead),
        "provider": { "@type": "AutoRepair", "name": "Mr.Car", "url": `${PROD_ORIGIN}/` },
        "url": canonicalUrl,
        "areaServed": { "@type": "City", "name": "Tallinn" }
      }
    ]
  };

  if (Array.isArray(s.faqItems) && s.faqItems.length > 0) {
    ld["@graph"].push({
      "@type": "FAQPage",
      "mainEntity": s.faqItems.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    });
  }

  if (s.articleSchema && s.articleSchema.headline) {
    ld["@graph"].push({
      "@type": "Article",
      "headline": s.articleSchema.headline,
      "description": s.articleSchema.description || s.jsonLdServiceDescription || (s.seo && s.seo.description ? s.seo.description : s.heroLead),
      "datePublished": publishedAt,
      "dateModified": modifiedAt,
      "author": { "@type": "Organization", "name": "Mr.Car Autoremont" },
      "publisher": { "@type": "Organization", "name": "Mr.Car Autoremont", "url": `${PROD_ORIGIN}/` },
      "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
    });
  }

  return JSON.stringify(ld, null, 2);
}

function detectLangFromPath(relPath) {
  const normalized = relPath.replace(/\\/g, '/').toLowerCase();
  const fileName = path.basename(normalized);

  if (normalized.startsWith('en/') || fileName === 'temp_en.html') return 'en';
  if (normalized.startsWith('ru/') || fileName === 'temp_ru.html') return 'ru';
  return 'et';
}

function collectFooterTargetFiles() {
  const targets = [
    { dir: ROOT, recursive: false },
    { dir: path.join(ROOT, 'services'), recursive: true },
    { dir: path.join(ROOT, 'en'), recursive: true },
    { dir: path.join(ROOT, 'ru'), recursive: true },
    { dir: path.join(ROOT, 'privaatsus'), recursive: true }
  ];

  const files = new Set();

  function visit(dir, recursive) {
    if (!fs.existsSync(dir)) return;

    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (recursive) visit(fullPath, true);
        continue;
      }

      if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
        files.add(fullPath);
      }
    }
  }

  for (const target of targets) {
    visit(target.dir, target.recursive);
  }

  return [...files];
}

function findHeaderBlock(html) {
  const match = html.match(/(<!--\s*(?:=+\s*)?(?:\d+\.\s*)?NAVBAR(?:\s*=+)?\s*-->\s*)?<header\s+class="navbar"[^>]*>[\s\S]*?<\/header>/i);
  if (!match) return null;

  return {
    startIdx: match.index,
    endIdx: match.index + match[0].length
  };
}

function findMobileMenuBlock(html) {
  const startMatch = html.match(/<div\b(?=[^>]*\bclass=["'][^"']*\bmobile-menu\b[^"']*["'])(?=[^>]*\bid=["']mobileMenu["'])[^>]*>/i);
  if (!startMatch) return null;

  const divStartIdx = startMatch.index;
  let index = divStartIdx + startMatch[0].length;
  let depth = 1;

  while (index < html.length && depth > 0) {
    const nextOpen = html.slice(index).search(/<div\b/i);
    const nextClose = html.indexOf('</div>', index);

    if (nextClose === -1) return null;

    const nextOpenIdx = nextOpen === -1 ? -1 : index + nextOpen;
    if (nextOpenIdx !== -1 && nextOpenIdx < nextClose) {
      depth++;
      index = nextOpenIdx + 4;
    } else {
      depth--;
      index = nextClose + 6;
    }
  }

  let startIdx = divStartIdx;
  const before = html.slice(0, divStartIdx);
  const precedingComment = before.match(/(<!--\s*(?:Mobile Menu|MOBILE MENU)\s*-->\s*)$/i);
  if (precedingComment) {
    startIdx -= precedingComment[0].length;
  }

  return { startIdx, endIdx: index };
}

function replaceBlock(html, block, replacement) {
  return `${html.slice(0, block.startIdx)}${replacement}${html.slice(block.endIdx)}`;
}

function buildMobileMenuScript() {
  return `  <!-- MOBILE MENU SCRIPT -->
  <script>
    (function () {
      const burger = document.getElementById('burgerBtn');
      const mobMenu = document.getElementById('mobileMenu');
      const closeBtn = document.getElementById('closeMenu');
      if (!burger || !mobMenu || !closeBtn) return;

      window.closeMobileMenu = function closeMobileMenu() {
        mobMenu.classList.remove('active');
        document.body.style.overflow = '';
        const mm = document.getElementById('mobileMegaMenu');
        const tl = document.querySelector('.mobile-menu__link[onclick="toggleMobileMegaMenu(event)"]');
        if (mm) mm.classList.remove('is-open');
        if (tl) tl.classList.remove('is-open');
      };

      window.toggleMobileMegaMenu = function toggleMobileMegaMenu(e) {
        e.preventDefault();
        const mm = document.getElementById('mobileMegaMenu');
        if (mm) mm.classList.toggle('is-open');
        e.currentTarget.classList.toggle('is-open');
      };

      burger.addEventListener('click', () => {
        mobMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
      closeBtn.addEventListener('click', window.closeMobileMenu);
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && mobMenu.classList.contains('active')) window.closeMobileMenu();
      });
    })();
  </script>`;
}

function ensureMobileMenuScript(html) {
  if (!html.includes('id="mobileMenu"')) return html;
  if (/function\s+closeMobileMenu\s*\(/.test(html)) return html;
  if (!/<\/body>/i.test(html)) return html;

  return html.replace(/<\/body>/i, `${buildMobileMenuScript()}\n</body>`);
}

function syncGlobalNavigation() {
  const cfgByLang = new Map(LANGS.map(cfg => [cfg.lang, cfg]));
  const navByLang = new Map(LANGS.map(cfg => [
    cfg.lang,
    buildHeaderAndMobileMenu(loadServices(cfg.dataFile), cfg)
  ]));
  let updated = 0;

  for (const filePath of collectFooterTargetFiles()) {
    const relPath = path.relative(ROOT, filePath);
    if (path.basename(relPath).toLowerCase().startsWith('temp_')) continue;

    const lang = detectLangFromPath(relPath);
    const cfg = cfgByLang.get(lang);
    const navHtml = navByLang.get(lang);
    if (!cfg || !navHtml) continue;

    const [headerHtml, mobileMenuHtml] = navHtml.split(/\n\n  <!-- MOBILE MENU -->\n/);
    if (!headerHtml || !mobileMenuHtml) continue;

    const source = fs.readFileSync(filePath, 'utf8');
    let next = source;

    const mobileMenuBlock = findMobileMenuBlock(next);
    if (mobileMenuBlock) {
      next = replaceBlock(next, mobileMenuBlock, `<!-- MOBILE MENU -->\n${mobileMenuHtml}`);
    }

    const headerBlock = findHeaderBlock(next);
    if (headerBlock) {
      const hasMobileMenu = Boolean(findMobileMenuBlock(next));
      const afterHeader = next.slice(headerBlock.endIdx);
      const spacer = hasMobileMenu && afterHeader.startsWith('<!-- MOBILE MENU -->') ? '\n\n  ' : '';
      const insertedMobileMenu = hasMobileMenu ? '' : `\n\n  <!-- MOBILE MENU -->\n${mobileMenuHtml}`;
      next = replaceBlock(next, headerBlock, `${headerHtml}${spacer}${insertedMobileMenu}`);
    }

    next = ensureMobileMenuScript(next);

    if (next !== source) {
      fs.writeFileSync(filePath, next, 'utf8');
      updated++;
    }
  }

  for (const cfg of LANGS) {
    const navHtml = navByLang.get(cfg.lang);
    if (!navHtml) continue;

    const [headerHtml, mobileMenuHtml] = navHtml.split(/\n\n  <!-- MOBILE MENU -->\n/);
    fs.writeFileSync(path.join(ROOT, 'partials', `header-${cfg.lang}.html`), headerHtml, 'utf8');
    fs.writeFileSync(path.join(ROOT, 'partials', `mobile-menu-${cfg.lang}.html`), `<!-- MOBILE MENU -->\n${mobileMenuHtml}`, 'utf8');
  }

  return updated;
}

const SERVICES_INDEX_FILES = {
  et: 'teenused.html',
  ru: 'ru/uslugi.html',
  en: 'en/services.html'
};

function compactText(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function serviceIndexCtaLabel(lang) {
  if (lang === 'ru') return 'Подробнее';
  if (lang === 'en') return 'Read More';
  return 'Loe edasi';
}

function serviceListingTagText(item) {
  if (!item) return '';
  if (typeof item === 'string') return compactText(item);
  return compactText(item.text || item.title || '');
}

function serviceListingGroup(service) {
  const haystack = compactText([
    service.slug,
    service.key,
    service.category,
    service.navTitle,
    service.heroTitle
  ].join(' ')).toLowerCase();

  if (/webasto|kliim|climate|кондиц|климат|ac-service/.test(haystack)) return 'climate';
  if (/rehv|tire|шин|summut|exhaust|глуш|vedrust|suspension|chassis|ходов|подвес|pidur|brake|тормоз/.test(haystack)) return 'chassis';
  if (/hooldus|maintenance|обслуж|diagnost|диагност|õli|oil|масл|filter|фильтр|elektr|electrical|электр/.test(haystack)) return 'diag';
  return 'repair';
}

function renderServiceListingCards(services, cfg) {
  const ctaLabel = serviceIndexCtaLabel(cfg.lang);

  return getTopLevelMenuServices(services).map(service => {
    const tags = (Array.isArray(service.symptoms) ? service.symptoms : [])
      .map(serviceListingTagText)
      .filter(Boolean)
      .slice(0, 2);
    const tagHtml = tags.length
      ? `<div class="listing-card__tags">
                        ${tags.map(tag => `<span>${esc(tag)}</span>`).join('\n                        ')}
                    </div>`
      : '';

    const listItems = (Array.isArray(service.servicesList) ? service.servicesList : [])
      .map(compactText)
      .filter(Boolean)
      .slice(0, 3);
    const listHtml = listItems.length
      ? `<ul class="listing-card__list">
                        ${listItems.map(item => `<li>${esc(item)}</li>`).join('\n                        ')}
                    </ul>`
      : '';

    return `                <div class="listing-card reveal-card" data-group="${serviceListingGroup(service)}">
                    <div class="listing-card__header">
                        <div class="listing-card__icon">
                            <iconify-icon icon="${esc(service.icon || 'mdi:car-cog')}" width="24" height="24" aria-hidden="true"></iconify-icon>
                        </div>
                        <h3 class="listing-card__title">${esc(service.navTitle || service.heroTitle || service.slug)}</h3>
                    </div>
                    ${tagHtml}
                    <p class="listing-card__desc">${esc(service.heroLead || service.introTitle || service.navTitle || '')}</p>
                    ${listHtml}
                    <div class="listing-card__footer">
                        <a href="${cfg.serviceBase}${esc(service.slug)}" class="listing-card__link">${esc(ctaLabel)}</a>
                    </div>
                </div>`;
  }).join('\n\n');
}

function renderServicesAllGrid(services, cfg) {
  return getTopLevelMenuServices(services).map(service => `                        <a href="${cfg.serviceBase}${esc(service.slug)}" class="services-all__item">
                            <span class="services-all__number"><iconify-icon icon="${esc(service.icon || 'mdi:car-cog')}" width="24" height="24" aria-hidden="true"></iconify-icon></span>
                            <span class="services-all__name">${esc(service.navTitle || service.heroTitle || service.slug)}</span>
                            <span class="services-all__arrow" aria-hidden="true">→</span>
                        </a>`).join('\n');
}

function syncServicesIndexPages() {
  let updated = 0;

  for (const cfg of LANGS) {
    const relFile = SERVICES_INDEX_FILES[cfg.lang];
    if (!relFile) continue;

    const filePath = path.join(ROOT, relFile);
    const source = readTextIfExists(filePath);
    if (!source) continue;

    const services = loadServices(cfg.dataFile);
    const cardsHtml = renderServiceListingCards(services, cfg);
    const next = source.replace(
      /(<div class="listing-grid">\s*)[\s\S]*?(\s*<\/div>\s*<\/section>)/,
      (_, opening, closing) => `${opening.trimEnd()}\n${cardsHtml}\n${closing.trimStart()}`
    );

    if (next !== source) {
      fs.writeFileSync(filePath, next, 'utf8');
      updated++;
    }
  }

  return updated;
}

function syncServicesAllGrids() {
  const cfgByLang = new Map(LANGS.map(cfg => [cfg.lang, cfg]));
  const gridByLang = new Map(LANGS.map(cfg => [
    cfg.lang,
    renderServicesAllGrid(loadServices(cfg.dataFile), cfg)
  ]));
  let updated = 0;

  for (const filePath of collectFooterTargetFiles()) {
    const relPath = path.relative(ROOT, filePath);
    if (path.basename(relPath).toLowerCase().startsWith('temp_')) continue;

    const source = fs.readFileSync(filePath, 'utf8');
    if (!source.includes('services-all__grid')) continue;

    const lang = detectLangFromPath(relPath);
    const cfg = cfgByLang.get(lang);
    const gridHtml = gridByLang.get(lang);
    if (!cfg || !gridHtml) continue;

    const next = source.replace(
      /(<div class="services-all__grid">)\s*[\s\S]*?\s*(<\/div>)/g,
      (_, opening, closing) => `${opening}\n${gridHtml}\n                    ${closing}`
    );

    if (next !== source) {
      fs.writeFileSync(filePath, next, 'utf8');
      updated++;
    }
  }

  return updated;
}

function syncGlobalFooters() {
  const cfgByLang = new Map(LANGS.map(cfg => [cfg.lang, cfg]));
  let updated = 0;

  for (const filePath of collectFooterTargetFiles()) {
    const relPath = path.relative(ROOT, filePath);
    if (path.basename(relPath).toLowerCase().startsWith('temp_')) continue;

    const source = fs.readFileSync(filePath, 'utf8');
    const match = source.match(/<footer class="footer">[\s\S]*?<\/footer>/);
    if (!match) continue;

    const lang = detectLangFromPath(relPath);
    const cfg = cfgByLang.get(lang);
    const footerHtml = buildFooter(cfg);
    const next = source.replace(/<footer class="footer">[\s\S]*?<\/footer>/, footerHtml);

    if (next !== source) {
      fs.writeFileSync(filePath, next, 'utf8');
      updated++;
    }
  }

  return updated;
}

function getMetaContent(html, attrName, attrValue) {
  const escapedValue = attrValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(`<meta[^>]*${attrName}=["']${escapedValue}["'][^>]*content=["']([^"']*)["'][^>]*>`, 'i'),
    new RegExp(`<meta[^>]*content=["']([^"']*)["'][^>]*${attrName}=["']${escapedValue}["'][^>]*>`, 'i')
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1];
  }

  return '';
}

function getDocumentTitle(html) {
  return html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() || '';
}

function ensureLangLinkAnchorText(html) {
  return html.replace(/<a([^>]*)>([\s\S]*?)<\/a>/g, (match, attrs, inner) => {
    const classValue = attrs.match(/\bclass="([^"]+)"/i)?.[1] || '';
    const classes = classValue.split(/\s+/).filter(Boolean);
    if (!classes.includes('lang-link')) return match;
    if (/clip:rect\(0,0,0,0\)/i.test(inner)) return match;

    const title = attrs.match(/\btitle="([^"]+)"/i)?.[1] || 'Language';
    return `<a${attrs}>${inner}${srOnlySpan(title)}</a>`;
  });
}

function cleanMobileLangLinkAnchorText(html) {
  return html.replace(/<a([^>]*)>([\s\S]*?)<\/a>/g, (match, attrs, inner) => {
    const classValue = attrs.match(/\bclass="([^"]+)"/i)?.[1] || '';
    const classes = classValue.split(/\s+/).filter(Boolean);
    if (!classes.includes('mobile-lang-link')) return match;

    const cleanedInner = inner.replace(/<span[^>]*clip:rect\(0,0,0,0\)[^>]*>[\s\S]*?<\/span>/gi, '');
    return cleanedInner === inner ? match : `<a${attrs}>${cleanedInner}</a>`;
  });
}

function ensureSocialLinkAnchorText(html) {
  return html.replace(/<a([^>]*class="[^"]*\bfooter__social-link\b[^"]*"[^>]*)>([\s\S]*?)<\/a>/g, (match, attrs, inner) => {
    if (/clip:rect\(0,0,0,0\)/i.test(inner)) return match;

    const label = attrs.match(/\baria-label="([^"]+)"/i)?.[1] || 'Social link';
    return `<a${attrs}>${inner}${srOnlySpan(label)}</a>`;
  });
}

function ensurePartnerLogoAlt(html) {
  return html.replace(
    /aria-label="([^"]+)"><img([^>]*?)alt="" aria-hidden="true"([^>]*?)>/g,
    (_, label, beforeAlt, afterHidden) => `aria-label="${label}"><img${beforeAlt}alt="${esc(label)} logo"${afterHidden}>`
  );
}

function ensureTwitterCards(html) {
  const missing = [];

  if (!/name=["']twitter:card["']/i.test(html)) {
    missing.push('<meta name="twitter:card" content="summary_large_image">');
  }

  if (!/name=["']twitter:title["']/i.test(html)) {
    const title = getMetaContent(html, 'property', 'og:title') || getDocumentTitle(html);
    if (title) missing.push(`<meta name="twitter:title" content="${title}">`);
  }

  if (!/name=["']twitter:description["']/i.test(html)) {
    const description = getMetaContent(html, 'property', 'og:description') || getMetaContent(html, 'name', 'description');
    if (description) missing.push(`<meta name="twitter:description" content="${description}">`);
  }

  if (!/name=["']twitter:image["']/i.test(html)) {
    const image = getMetaContent(html, 'property', 'og:image') || `${PROD_ORIGIN}/og-image.jpg`;
    if (image) missing.push(`<meta name="twitter:image" content="${image}">`);
  }

  if (missing.length === 0) return html;

  const twitterBlock = `\n  <!-- Twitter Card -->\n  ${missing.join('\n  ')}\n`;

  if (/<script type="application\/ld\+json">/i.test(html)) {
    return html.replace(/<script type="application\/ld\+json">/i, `${twitterBlock}<script type="application/ld+json">`);
  }

  return html.replace(/<\/head>/i, `${twitterBlock}</head>`);
}

function shouldSyncSharedHtml(relPath) {
  const normalized = relPath.replace(/\\/g, '/').toLowerCase();
  const base = path.basename(normalized);

  if (base === '404.html') return false;
  if (base === 'homepage.html') return false;
  if (base.startsWith('google')) return false;
  if (base.startsWith('temp_')) return false;

  return true;
}

function syncSharedHtmlPatterns() {
  let updated = 0;

  for (const filePath of collectFooterTargetFiles()) {
    const relPath = path.relative(ROOT, filePath);
    if (!shouldSyncSharedHtml(relPath)) continue;

    const source = fs.readFileSync(filePath, 'utf8');
    let next = source;

    next = cleanMobileLangLinkAnchorText(next);
    next = ensureLangLinkAnchorText(next);
    next = ensureSocialLinkAnchorText(next);
    next = ensurePartnerLogoAlt(next);
    next = ensureTwitterCards(next);

    if (next !== source) {
      fs.writeFileSync(filePath, next, 'utf8');
      updated++;
    }
  }

  return updated;
}

// ─── Main HTML template ───────────────────────────────────────────────────────

function renderPage(s, services, cfg, articleDates = {}) {
  const seoTitle = (s.seo && s.seo.title) ? s.seo.title : `${s.heroTitle} — Mr.Car, Tallinn`;
  const seoDesc = (s.seo && s.seo.description) ? s.seo.description : `${s.heroTitle} Mr.Car autoteeninduses. Kopli 82a, Tallinn. +372 5646 1210`;
  const canonicalUrl = `${PROD_ORIGIN}${cfg.serviceBase}${s.slug}`;
  const heroImageUrl = toPublicAssetPath(s.heroImage);
  const ogImage = toAbsoluteSiteUrl(s.heroImage) || `${PROD_ORIGIN}/android-chrome-512x512.png`;

  const sidebarHtml = buildSidebar(services, s.slug, cfg);
  const headerAndMobileMenuHtml = buildHeaderAndMobileMenu(services, cfg);
  const breadcrumbsHtml = buildBreadcrumbs(s, cfg);
  const hreflangHtml = buildHreflang(s, cfg);
  const jsonLd = buildJsonLd(s, cfg, articleDates);
  const extraStylesHtml = Array.isArray(s.extraStyles)
    ? s.extraStyles.map(href => `  <link rel="stylesheet" href="${esc(href)}">`).join('\n')
    : '';
  const symptomCards = buildSymptomCards(s.symptoms || []);
  const servicesListHtml = buildServicesList(s.servicesList || []);
  const footerHtml = buildFooter(cfg);
  const promoBanner = s.promoBanner && s.promoBanner.enabled ? `
        <div class="sd-promo">
          <div class="sd-promo__content">
            <iconify-icon icon="mdi:tag-outline" width="28" height="28" aria-hidden="true"></iconify-icon>
            <p class="sd-promo__text">${esc(s.promoBanner.text)}</p>
          </div>
        </div>` : '';
  const mainContentHtml = s.templateVariant === 'service-deep-dive-v2'
    ? renderDeepDiveContent(s, cfg)
    : renderDefaultMainContent(s, symptomCards, servicesListHtml, promoBanner);

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
  <link rel="stylesheet" href="/style.css?v=${GLOBAL_STYLE_VERSION}">${extraStylesHtml ? `\n${extraStylesHtml}` : ''}

  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="shortcut icon" href="/favicon.ico">

  <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
</head>
<body${s.bodyClass ? ` class="${esc(s.bodyClass)}"` : ''}>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W48VVTPC"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  ${headerAndMobileMenuHtml}

  <!-- HERO -->
  <section class="sd-hero" style="background-image:url('${esc(heroImageUrl)}')">
    <div class="sd-hero__overlay"></div>
    <div class="sd-hero__content site-container">
      <span class="sd-hero__meta">${esc(cfg.heroMetaLabel)}</span>
      <h1 class="sd-hero__title">${esc(s.heroTitle)}</h1>
      ${breadcrumbsHtml}
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
      ${mainContentHtml}
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
    <button class="fab-contact__trigger" id="fabTrigger" aria-label="${esc(cfg.fabTriggerLabel)}">
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
  ${footerHtml}

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
    const form = document.getElementById('contactForm') || document.getElementById('serviceForm');
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
const changedGeneratedUrls = new Set();

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

    // Skip standalone landing pages
    if (SKIP_FILES.has(s.slug)) {
      process.stdout.write(`  ⏭ SKIP  ${s.slug}.html  (standalone page)\n`);
      totalSkipped++;
      continue;
    }

    process.stdout.write(`  ⚙  Rendering ${s.slug}…`);
    const existingHtml = readTextIfExists(outFile);
    const existingArticleDates = extractArticleDatesFromHtml(existingHtml);
    const articleDates = {
      datePublished: (s.articleSchema && s.articleSchema.datePublished) || existingArticleDates.datePublished || TODAY,
      dateModified: (s.articleSchema && s.articleSchema.dateModified) || existingArticleDates.dateModified || existingArticleDates.datePublished || TODAY
    };

    let html = renderPage(s, services, cfg, articleDates);
    const contentChanged = !existingHtml || normalizeArticleDatesInHtml(existingHtml) !== normalizeArticleDatesInHtml(html);

    if (contentChanged && !(s.articleSchema && s.articleSchema.dateModified)) {
      articleDates.dateModified = TODAY;
      html = renderPage(s, services, cfg, articleDates);
    }

    if (contentChanged) {
      changedGeneratedUrls.add(`${PROD_ORIGIN}${cfg.serviceBase}${s.slug}`);
    }

    if (normalizeLineEndings(html) !== normalizeLineEndings(existingHtml)) {
      fs.writeFileSync(outFile, html, 'utf8');
    }
    process.stdout.write(` ✓  (${html.length} bytes)\n`);
    totalGenerated++;
  }
  process.stdout.write(`  ✅ [${cfg.lang.toUpperCase()}] done — ${services.filter(s => !SKIP_FILES.has(s.slug)).length} pages\n`);
}

process.stdout.write(`\n✅ Done: ${totalGenerated} pages generated, ${totalSkipped} skipped.\n`);

process.stdout.write('\n🧭 Syncing global navigation…\n');
const totalNavigationSynced = syncGlobalNavigation();
process.stdout.write(`✅ Global navigation synced in ${totalNavigationSynced} files.\n`);

process.stdout.write('\n📋 Syncing services index pages…\n');
const totalServicesIndexSynced = syncServicesIndexPages();
process.stdout.write(`✅ Services index pages synced in ${totalServicesIndexSynced} files.\n`);

process.stdout.write('\n🧾 Syncing services-all grids…\n');
const totalServicesAllGridsSynced = syncServicesAllGrids();
process.stdout.write(`✅ Services-all grids synced in ${totalServicesAllGridsSynced} files.\n`);

process.stdout.write('\n🦶 Syncing global footers…\n');
const totalFootersSynced = syncGlobalFooters();
process.stdout.write(`✅ Global footers synced in ${totalFootersSynced} files.\n`);

process.stdout.write('\n🧩 Syncing shared SEO and accessibility HTML patterns…\n');
const totalSharedHtmlSynced = syncSharedHtmlPatterns();
process.stdout.write(`✅ Shared HTML patterns synced in ${totalSharedHtmlSynced} files.\n`);

// ─── Update sitemap.xml ───────────────────────────────────────────────────────

process.stdout.write('\n📄 Updating sitemap.xml…\n');

const eeServices = loadServices('ee/services-data.js');
const ruServices = loadServices('ru/services/services-data.js');
const enServices = loadServices('en/services/services-data.js');
const existingSitemapLastmods = parseSitemapLastmods(readTextIfExists(path.join(ROOT, 'sitemap.xml')));

function resolveSitemapLastmod(url) {
  return changedGeneratedUrls.has(url) ? TODAY : (existingSitemapLastmods.get(url) || TODAY);
}

function sitemapUrl(url, priority, changefreq, lastmod) {
  const prio = priority ? `\n    <priority>${priority}</priority>` : '';
  const change = changefreq ? `\n    <changefreq>${changefreq}</changefreq>` : '';
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>${change}${prio}
  </url>`;
}

const STATIC_SITEMAP_PATHS = [
  '/en/about',
  '/en/contact',
  '/en/gallery',
  '/en',
  '/en/prices',
  '/en/services',
  '/en/tingimused',
  '/galerii',
  '/hinnad',
  '/',
  '/kontakt',
  '/meist',
  '/privaatsus',
  '/ru/galereya',
  '/ru',
  '/ru/kontakt',
  '/ru/o-nas',
  '/ru/privaatsus',
  '/ru/tingimused',
  '/ru/tseny',
  '/ru/uslugi',
  '/teenused',
  '/tingimused'
];

const STATIC_SERVICE_SITEMAP_PATHS = {
  et: [
    '/services/kaigukastiremont',
    '/services/kasikasti-remont',
    '/services/automaatkasti-remont',
    '/services/pidurisusteemi-hooldus-ja-remont',
    '/services/ketaspidurite-remont',
    '/services/trummelpidurite-remont',
    '/services/webasto-diagnostika',
    '/services/webasto-sumptomid'
  ],
  ru: [
    '/ru/services/remont-kpp',
    '/ru/services/remont-mkpp',
    '/ru/services/remont-akpp',
    '/ru/services/tormoznaya-sistema',
    '/ru/services/diskovye-tormoza',
    '/ru/services/barabannye-tormoza',
    '/ru/services/webasto-simptomy'
  ],
  en: [
    '/en/services/transmission-repair',
    '/en/services/manual-transmission-repair',
    '/en/services/automatic-transmission-repair',
    '/en/services/disc-brake-repair',
    '/en/services/webasto-symptoms'
  ]
};

function buildServiceSitemapPaths(services, basePath, standalonePaths) {
  return [
    ...services
      .filter(s => !SKIP_FILES.has(s.slug) && !s.hideFromMenu)
      .map(s => `${basePath}${s.slug}`),
    ...standalonePaths
  ];
}

function staticPathToUrl(relativePath) {
  return relativePath === '/' ? `${PROD_ORIGIN}/` : `${PROD_ORIGIN}${relativePath}`;
}

const sitemapEntries = [
  ...STATIC_SITEMAP_PATHS.map(relativePath =>
    sitemapUrl(
      staticPathToUrl(relativePath),
      relativePath === '/' ? '1.0' : '0.8',
      'weekly',
      resolveSitemapLastmod(staticPathToUrl(relativePath))
    )
  ),
  ...buildServiceSitemapPaths(eeServices, '/services/', STATIC_SERVICE_SITEMAP_PATHS.et)
    .map(relativePath => sitemapUrl(staticPathToUrl(relativePath), '0.8', 'weekly', resolveSitemapLastmod(staticPathToUrl(relativePath)))),
  ...buildServiceSitemapPaths(ruServices, '/ru/services/', STATIC_SERVICE_SITEMAP_PATHS.ru)
    .map(relativePath => sitemapUrl(staticPathToUrl(relativePath), '0.8', 'weekly', resolveSitemapLastmod(staticPathToUrl(relativePath)))),
  ...buildServiceSitemapPaths(enServices, '/en/services/', STATIC_SERVICE_SITEMAP_PATHS.en)
    .map(relativePath => sitemapUrl(staticPathToUrl(relativePath), '0.8', 'weekly', resolveSitemapLastmod(staticPathToUrl(relativePath))))
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemapXml, 'utf8');
process.stdout.write('✅ sitemap.xml updated.\n\n');
