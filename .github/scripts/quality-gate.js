#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const IGNORE_DIRS = new Set([
  '.agent',
  '.claude',
  '.git',
  '.github',
  'functions',
  'node_modules',
  'partials',
  'project-control',
  'Seranking',
  'temp_docs',
  'tmp',
  'Test html',
  'wix',
]);

const PUBLIC_HTML = [];
const failures = [];
const LEGACY_EXCLUDED_HTML = new Set([
  // Legacy dynamic shell kept in git history but explicitly excluded from Hosting publish.
  'ru/services/service.html',
]);
const PRIORITY_SEO_LIMITS = new Map([
  ['index.html', { maxTitle: 65, maxDescription: 158 }],
  ['ru/index.html', { maxTitle: 65, maxDescription: 158 }],
  ['en/index.html', { maxTitle: 65, maxDescription: 158 }],
  ['hinnad.html', { maxTitle: 65, maxDescription: 158 }],
  ['ru/tseny.html', { maxTitle: 65, maxDescription: 158 }],
  ['en/prices.html', { maxTitle: 65, maxDescription: 158 }],
  ['services/kaigukastiremont.html', { maxTitle: 65, maxDescription: 158 }],
  ['ru/services/remont-kpp.html', { maxTitle: 65, maxDescription: 158 }],
  ['en/services/transmission-repair.html', { maxTitle: 65, maxDescription: 158 }],
  ['services/automaatkasti-remont.html', { maxTitle: 65, maxDescription: 158 }],
  ['ru/services/remont-akpp.html', { maxTitle: 65, maxDescription: 158 }],
  ['en/services/automatic-transmission-repair.html', { maxTitle: 65, maxDescription: 158 }],
  ['services/kasikasti-remont.html', { maxTitle: 65, maxDescription: 158 }],
  ['ru/services/remont-mkpp.html', { maxTitle: 65, maxDescription: 158 }],
  ['en/services/manual-transmission-repair.html', { maxTitle: 65, maxDescription: 158 }],
]);
const REQUIRED_INTERNAL_LINKS = new Map([
  ['services/webasto-diagnostika.html', ['/services/webasto-sumptomid']],
  ['ru/services/webasto.html', ['/ru/services/webasto-simptomy']],
  ['en/services/webasto-repair.html', ['/en/services/webasto-symptoms']],
  ['teenused.html', ['/services/webasto-sumptomid']],
  ['ru/uslugi.html', ['/ru/services/webasto-simptomy']],
  ['en/services.html', ['/en/services/webasto-symptoms']],
]);

const serviceMaps = {
  et: loadServiceSlugs(path.join(ROOT, 'services')),
  ru: loadServiceSlugs(path.join(ROOT, 'ru', 'services')),
  en: loadServiceSlugs(path.join(ROOT, 'en', 'services')),
};

walk(ROOT);

for (const filePath of PUBLIC_HTML) {
  const relPath = toPosix(path.relative(ROOT, filePath));
  const content = fs.readFileSync(filePath, 'utf8');

  checkPlaceholderSocials(relPath, content);
  checkServiceFormLeadWiring(relPath, content);
  checkServiceLinks(relPath, content);
  checkInternalNofollow(relPath, content);
  checkRequiredInternalLinks(relPath, content);
  checkCanonicalAndHreflang(relPath, content);
  checkPrioritySeoMeta(relPath, content);
}

checkSitemap();

if (failures.length) {
  console.error('Quality gate failed:\n');
  for (const failure of failures) {
    console.error(`- [${failure.type}] ${failure.file}: ${failure.message}`);
  }
  process.exit(1);
}

console.log(`Quality gate passed (${PUBLIC_HTML.length} HTML files checked).`);

function walk(dirPath) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.has(entry.name)) {
        walk(path.join(dirPath, entry.name));
      }
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
    if (entry.name.endsWith('.template.html')) continue;
    if (entry.name.startsWith('_')) continue;
    if (entry.name.startsWith('temp_')) continue;

    const filePath = path.join(dirPath, entry.name);
    const relPath = toPosix(path.relative(ROOT, filePath));
    if (LEGACY_EXCLUDED_HTML.has(relPath)) continue;

    PUBLIC_HTML.push(filePath);
  }
}

function loadServiceSlugs(dirPath) {
  if (!fs.existsSync(dirPath)) return new Set();

  return new Set(
    fs.readdirSync(dirPath)
      .filter((name) => name.endsWith('.html'))
      .filter((name) => !name.endsWith('.template.html'))
      .filter((name) => !name.startsWith('_'))
      .map((name) => name.replace(/\.html$/i, ''))
  );
}

function checkPlaceholderSocials(relPath, content) {
  const placeholderPatterns = [
    /https?:\/\/(?:www\.)?facebook\.com\/(?=["'#? ]|$)/gi,
    /https?:\/\/(?:www\.)?instagram\.com\/(?=["'#? ]|$)/gi,
  ];

  for (const pattern of placeholderPatterns) {
    const matches = content.match(pattern);
    if (matches && matches.length) {
      failures.push({
        type: 'placeholder-social',
        file: relPath,
        message: `contains placeholder social URL(s): ${matches.join(', ')}`,
      });
    }
  }
}

function checkServiceFormLeadWiring(relPath, content) {
  if (!isServicePage(relPath)) return;

  const hasServiceForm = /id=["']serviceForm["']/i.test(content);
  const hasContactForm = /id=["']contactForm["']/i.test(content);
  if (!hasServiceForm && !hasContactForm) return;

  if (!/\/api\/lead/.test(content)) {
    failures.push({
      type: 'service-form',
      file: relPath,
      message: 'service page form exists but no /api/lead wiring was found',
    });
  }
}

function checkServiceLinks(relPath, content) {
  const hrefRegex = /href=["'](\/(?:ru\/|en\/)?services\/[^"'#?]+(?:\.html)?)(?:[#?][^"']*)?["']/gi;
  let match;

  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.endsWith('.css') || href.endsWith('.js')) continue;
    const normalized = href.replace(/\.html$/i, '').replace(/\/+$/, '');
    const parts = normalized.split('/').filter(Boolean);

    if (parts.length < 2) continue;

    let lang = 'et';
    let slug = parts[1];

    if (parts[0] === 'ru' || parts[0] === 'en') {
      if (parts.length < 3) continue;
      lang = parts[0];
      slug = parts[2];
    }

    if (!serviceMaps[lang].has(slug)) {
      failures.push({
        type: 'service-link',
        file: relPath,
        message: `points to missing service page: ${href}`,
      });
    }
  }
}

function checkInternalNofollow(relPath, content) {
  const anchorRegex = /<a\b[^>]*>/gi;
  let match;

  while ((match = anchorRegex.exec(content)) !== null) {
    const tag = match[0];
    const hrefMatch = tag.match(/\shref=["']([^"']+)["']/i);
    if (!hrefMatch) continue;

    const href = hrefMatch[1].trim();
    if (!isInternalHref(href)) continue;

    const relMatch = tag.match(/\srel=["']([^"']+)["']/i);
    if (!relMatch) continue;

    const relValues = relMatch[1].toLowerCase().split(/\s+/).filter(Boolean);
    if (!relValues.includes('nofollow')) continue;

    failures.push({
      type: 'internal-nofollow',
      file: relPath,
      message: `internal link must not use nofollow: ${href}`,
    });
  }
}

function checkRequiredInternalLinks(relPath, content) {
  const requiredLinks = REQUIRED_INTERNAL_LINKS.get(relPath);
  if (!requiredLinks) return;

  for (const href of requiredLinks) {
    const pattern = new RegExp(`<a\\b[^>]*href=["']${escapeForRegex(href)}["']`, 'i');
    if (!pattern.test(content)) {
      failures.push({
        type: 'required-internal-link',
        file: relPath,
        message: `missing required internal link: ${href}`,
      });
    }
  }
}

function isServicePage(relPath) {
  return (
    relPath.startsWith('services/') ||
    relPath.startsWith('ru/services/') ||
    relPath.startsWith('en/services/')
  );
}

function toPosix(value) {
  return value.split(path.sep).join('/');
}

function isInternalHref(href) {
  return (
    href.startsWith('/') ||
    href.startsWith('https://www.mrcar.ee/') ||
    href.startsWith('https://mrcar.ee/')
  );
}

function escapeForRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isSeoTechnicalPage(relPath) {
  return relPath === '404.html' || /^google.*\.html$/i.test(relPath);
}

function extractTitle(content) {
  const match = content.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1].replace(/\s+/g, ' ').trim() : '';
}

function extractMetaDescription(content) {
  const match = content.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  return match ? match[1].replace(/\s+/g, ' ').trim() : '';
}

function checkPrioritySeoMeta(relPath, content) {
  const limits = PRIORITY_SEO_LIMITS.get(relPath);
  if (!limits) return;

  const title = extractTitle(content);
  const description = extractMetaDescription(content);

  if (!title) {
    failures.push({
      type: 'seo-title-missing',
      file: relPath,
      message: 'priority page is missing a title',
    });
  } else if (title.length > limits.maxTitle) {
    failures.push({
      type: 'seo-title-length',
      file: relPath,
      message: `priority page title too long (${title.length} > ${limits.maxTitle})`,
    });
  }

  if (!description) {
    failures.push({
      type: 'seo-description-missing',
      file: relPath,
      message: 'priority page is missing a meta description',
    });
  } else if (description.length > limits.maxDescription) {
    failures.push({
      type: 'seo-description-length',
      file: relPath,
      message: `priority page description too long (${description.length} > ${limits.maxDescription})`,
    });
  }
}

function checkCanonicalAndHreflang(relPath, content) {
  if (isSeoTechnicalPage(relPath)) return;

  // Improved check for canonical: match the whole tag then extract href
  const canonicalTagMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  if (!canonicalTagMatch) {
    failures.push({
      type: 'canonical-missing',
      file: relPath,
      message: 'missing canonical link tag',
    });
  } else {
    const tag = canonicalTagMatch[0];
    const hrefMatch = tag.match(/href=["']([^"']+)["']/i);
    if (hrefMatch) {
      const canonicalHref = hrefMatch[1];
      if (canonicalHref.endsWith('.html')) {
        failures.push({
          type: 'canonical-format',
          file: relPath,
          message: `canonical href ends with .html: ${canonicalHref}`,
        });
      }
      if (canonicalHref.startsWith('https://mrcar.ee/')) {
        failures.push({
          type: 'canonical-host',
          file: relPath,
          message: `canonical href uses bare domain instead of www: ${canonicalHref}`,
        });
      }
    }
  }

  // Improved check for hreflang: find all alternate cards and check hrefs
  const alternateRegex = /<link[^>]+rel=["']alternate["'][^>]*>/gi;
  let altMatch;
  while ((altMatch = alternateRegex.exec(content)) !== null) {
    const tag = altMatch[0];
    const hrefMatch = tag.match(/href=["']([^"']+)["']/i);
    if (hrefMatch) {
      const href = hrefMatch[1];
      if (href.endsWith('.html')) {
        failures.push({
          type: 'hreflang-format',
          file: relPath,
          message: `hreflang href ends with .html: ${href}`,
        });
      }
    }
  }
}

function checkSitemap() {
  const sitemapPath = path.join(ROOT, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    failures.push({
      type: 'sitemap',
      file: 'sitemap.xml',
      message: 'sitemap.xml not found',
    });
    return;
  }
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const locRegex = /<loc>(.+?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    const loc = match[1];
    if (loc.endsWith('.html')) {
      failures.push({
        type: 'sitemap-format',
        file: 'sitemap.xml',
        message: `URL in sitemap ends with .html: ${loc}`,
      });
    }

    let parsed;
    try {
      parsed = new URL(loc);
    } catch (error) {
      failures.push({
        type: 'sitemap-url',
        file: 'sitemap.xml',
        message: `URL in sitemap is invalid: ${loc}`,
      });
      continue;
    }

    if (parsed.hostname !== 'www.mrcar.ee') {
      failures.push({
        type: 'sitemap-host',
        file: 'sitemap.xml',
        message: `URL in sitemap must use www host: ${loc}`,
      });
    }

    const forbiddenPaths = new Set([
      '/404',
      '/prices',
      '/ru/prices',
      '/privaatsus/index',
      '/ru/privaatsus/index',
    ]);

    if (
      forbiddenPaths.has(parsed.pathname) ||
      parsed.pathname.startsWith('/google') ||
      parsed.pathname.startsWith('/temp_')
    ) {
      failures.push({
        type: 'sitemap-forbidden',
        file: 'sitemap.xml',
        message: `URL in sitemap must not be published: ${loc}`,
      });
    }
  }
}
