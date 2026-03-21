#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const IGNORE_DIRS = new Set([
  '.agent',
  '.git',
  '.github',
  'functions',
  'node_modules',
  'partials',
  'project-control',
  'temp_docs',
]);

const PUBLIC_HTML = [];
const failures = [];
const LEGACY_EXCLUDED_HTML = new Set([
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
}

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

    if (!serviceMaps[lang] || !serviceMaps[lang].has(slug)) {
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
