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
  'Test html',
  'wix',
]);

const PUBLIC_HTML = [];
const failures = [];
const LEGACY_EXCLUDED_HTML = new Set([
  // Legacy dynamic shell kept in git history but explicitly excluded from Hosting publish.
  'ru/services/service.html',
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
  checkCanonicalAndHreflang(relPath, content);
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

function checkCanonicalAndHreflang(relPath, content) {
  if (relPath === '404.html' || relPath === 'google6aff4100d8f2567c.html' || relPath === 'googlef4bd042d0039292d.html') return;

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
  }
}
