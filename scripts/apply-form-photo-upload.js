#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const RUNTIME_SRC = '/scripts/lead-form-upload.js?v=1';
const RUNTIME_TAG = '  <script src="' + RUNTIME_SRC + '" defer></script>';

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function write(rel, content) {
  fs.writeFileSync(path.join(ROOT, rel), content, 'utf8');
}

function replaceOnce(content, search, replacement, label) {
  if (content.includes(replacement)) return content;
  const index = content.indexOf(search);
  if (index === -1) throw new Error('Could not find ' + label);
  return content.slice(0, index) + replacement + content.slice(index + search.length);
}

function patchPartial() {
  const rel = 'partials/form.html';
  let content = read(rel);

  content = replaceOnce(
    content,
    '<label for="name">{{formLabels_name}}</label>',
    '<label for="name">{{formLabels_name}}*</label>',
    'name label in form partial'
  );

  content = replaceOnce(
    content,
    '<input type="text" id="name" name="name" placeholder="{{formPlaceholder_name}}">',
    '<input type="text" id="name" name="name" placeholder="{{formPlaceholder_name}}" required>',
    'name input in form partial'
  );

  if (!content.includes(RUNTIME_SRC)) {
    content = content.replace(/\s*$/, '') + '\n' + RUNTIME_TAG + '\n';
  }

  write(rel, content);
}

function patchBuild() {
  const rel = 'build.js';
  let content = read(rel);
  content = replaceOnce(
    content,
    "const GLOBAL_STYLE_VERSION = '8';",
    "const GLOBAL_STYLE_VERSION = '9';",
    'global style version'
  );
  write(rel, content);
}

function patchBackend() {
  const rel = 'functions/index.js';
  let content = read(rel);

  const constantsAnchor = 'const PHONE_RE = /^[0-9+()\\-\\s]{5,40}$/;';
  const constantsBlock = [
    constantsAnchor,
    'const MAX_ATTACHMENTS = 3;',
    'const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;',
    'const MAX_ATTACHMENTS_TOTAL_BYTES = 10 * 1024 * 1024;',
    'const ATTACHMENT_TYPES = {',
    "  '.jpg': { type: 'image/jpeg', claimed: new Set(['', 'image/jpeg', 'image/jpg', 'application/octet-stream']) },",
    "  '.jpeg': { type: 'image/jpeg', claimed: new Set(['', 'image/jpeg', 'image/jpg', 'application/octet-stream']) },",
    "  '.png': { type: 'image/png', claimed: new Set(['', 'image/png', 'application/octet-stream']) },",
    "  '.heic': { type: 'image/heic', claimed: new Set(['', 'image/heic', 'image/heif', 'application/octet-stream']) },",
    "  '.heif': { type: 'image/heif', claimed: new Set(['', 'image/heic', 'image/heif', 'application/octet-stream']) },",
    "  '.pdf': { type: 'application/pdf', claimed: new Set(['', 'application/pdf', 'application/octet-stream']) }",
    '};'
  ].join('\n');
  content = replaceOnce(content, constantsAnchor, constantsBlock, 'attachment constants');

  const phoneHelper = [
    'function isValidPhone(phone) {',
    '  return PHONE_RE.test(phone);',
    '}'
  ].join('\n');

  const attachmentHelpers = [
    phoneHelper,
    '',
    'function getAttachmentExtension(fileName) {',
    "  const match = String(fileName || '').toLowerCase().match(/\\.([a-z0-9]+)$/);",
    "  return match ? '.' + match[1] : '';",
    '}',
    '',
    'function hasValidAttachmentSignature(content, extension) {',
    '  if (!Buffer.isBuffer(content) || content.length < 5) return false;',
    '',
    "  if (extension === '.jpg' || extension === '.jpeg') {",
    '    return content.length >= 3 && content[0] === 0xff && content[1] === 0xd8 && content[2] === 0xff;',
    '  }',
    '',
    "  if (extension === '.png') {",
    '    const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);',
    '    return content.length >= 8 && content.subarray(0, 8).equals(pngSignature);',
    '  }',
    '',
    "  if (extension === '.pdf') {",
    "    return content.subarray(0, 5).toString('ascii') === '%PDF-';",
    '  }',
    '',
    "  if (extension === '.heic' || extension === '.heif') {",
    "    if (content.length < 12 || content.subarray(4, 8).toString('ascii') !== 'ftyp') return false;",
    "    const brand = content.subarray(8, 12).toString('ascii').toLowerCase();",
    "    return new Set(['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'mif1', 'msf1']).has(brand);",
    '  }',
    '',
    '  return false;',
    '}',
    '',
    'function normaliseAttachments(value) {',
    "  if (value === undefined || value === null || value === '') {",
    '    return { valid: true, files: [] };',
    '  }',
    '',
    '  let rawFiles = value;',
    "  if (typeof rawFiles === 'string') {",
    '    try {',
    '      rawFiles = JSON.parse(rawFiles);',
    '    } catch (error) {',
    '      return { valid: false, files: [] };',
    '    }',
    '  }',
    '',
    '  if (!Array.isArray(rawFiles) || rawFiles.length > MAX_ATTACHMENTS) {',
    '    return { valid: false, files: [] };',
    '  }',
    '',
    '  const files = [];',
    '  let totalBytes = 0;',
    '',
    '  for (const rawFile of rawFiles) {',
    "    if (!rawFile || typeof rawFile !== 'object' || Array.isArray(rawFile)) {",
    '      return { valid: false, files: [] };',
    '    }',
    '',
    '    const rawName = normaliseSingleLine(rawFile.name, 120);',
    "    const name = rawName.replace(/[\\\\/:*?\"<>|\\u0000-\\u001f]/g, '_');",
    '    const extension = getAttachmentExtension(name);',
    '    const allowed = ATTACHMENT_TYPES[extension];',
    '    const claimedType = normaliseSingleLine(rawFile.type, 80).toLowerCase();',
    "    const data = typeof rawFile.data === 'string' ? rawFile.data.replace(/\\s/g, '') : '';",
    '',
    '    if (!name || !allowed || !allowed.claimed.has(claimedType)) {',
    '      return { valid: false, files: [] };',
    '    }',
    '',
    '    const maxBase64Length = Math.ceil(MAX_ATTACHMENT_BYTES / 3) * 4 + 4;',
    '    if (!data || data.length > maxBase64Length || !/^[A-Za-z0-9+/]*={0,2}$/.test(data)) {',
    '      return { valid: false, files: [] };',
    '    }',
    '',
    "    const fileContent = Buffer.from(data, 'base64');",
    '    if (!fileContent.length || fileContent.length > MAX_ATTACHMENT_BYTES || !hasValidAttachmentSignature(fileContent, extension)) {',
    '      return { valid: false, files: [] };',
    '    }',
    '',
    '    totalBytes += fileContent.length;',
    '    if (totalBytes > MAX_ATTACHMENTS_TOTAL_BYTES) {',
    '      return { valid: false, files: [] };',
    '    }',
    '',
    '    files.push({',
    '      name,',
    '      type: allowed.type,',
    '      content: fileContent',
    '    });',
    '  }',
    '',
    '  return { valid: true, files };',
    '}'
  ].join('\n');
  content = replaceOnce(content, phoneHelper, attachmentHelpers, 'attachment helpers');

  const pageUrlLine = '  const cleanPageUrl = normalisePageUrl(body.pageUrl);';
  const pageUrlBlock = [
    pageUrlLine,
    '  const attachmentResult = normaliseAttachments(body.attachments);',
    '  const cleanAttachments = attachmentResult.files;'
  ].join('\n');
  content = replaceOnce(content, pageUrlLine, pageUrlBlock, 'attachment request parsing');

  const validationStart = [
    '  const invalidFields = [];',
    '  if (cleanCarNumber.length < 2) {'
  ].join('\n');
  const validationWithName = [
    '  const invalidFields = [];',
    '  if (!cleanName) {',
    '    invalidFields.push("name");',
    '  }',
    '  if (cleanCarNumber.length < 2) {'
  ].join('\n');
  content = replaceOnce(content, validationStart, validationWithName, 'required name validation');

  const phoneValidation = [
    '  if (cleanPhone && !isValidPhone(cleanPhone)) {',
    '    invalidFields.push("phone");',
    '  }'
  ].join('\n');
  const attachmentValidation = [
    phoneValidation,
    '  if (!attachmentResult.valid) {',
    '    invalidFields.push("attachments");',
    '  }'
  ].join('\n');
  content = replaceOnce(content, phoneValidation, attachmentValidation, 'attachment validation');

  const adminTail = [
    '      `Lehe URL:      ${cleanPageUrl || "—"}`,',
    '      `Aeg:           ${timestamp}`',
    '    ].join("\\n")',
    '  };'
  ].join('\n');
  const adminWithAttachments = [
    '      `Lehe URL:      ${cleanPageUrl || "—"}`,',
    '      `Manused:       ${cleanAttachments.length ? cleanAttachments.map(file => file.name).join(", ") : "—"}`,',
    '      `Aeg:           ${timestamp}`',
    '    ].join("\\n"),',
    '    attachments: cleanAttachments.map(file => ({',
    '      filename: file.name,',
    '      content: file.content,',
    '      contentType: file.type',
    '    }))',
    '  };'
  ].join('\n');
  content = replaceOnce(content, adminTail, adminWithAttachments, 'admin email attachments');

  write(rel, content);
}

function patchStyles() {
  const rel = 'style.css';
  let content = read(rel);
  const marker = '/* Lead form attachments */';
  if (content.includes(marker)) return;

  const styles = [
    '',
    marker,
    '.form-attachments input[type="file"] {',
    '    cursor: pointer;',
    '    padding: 12px;',
    '}',
    '',
    '.form-attachments input[type="file"]::file-selector-button {',
    '    margin-right: var(--space-md);',
    '    padding: 10px 14px;',
    '    border: 1px solid var(--accent-primary);',
    '    border-radius: var(--radius);',
    '    background: transparent;',
    '    color: var(--accent-primary);',
    '    font-family: var(--font-mono);',
    '    font-size: 0.75rem;',
    '    font-weight: 700;',
    '    text-transform: uppercase;',
    '    letter-spacing: 0.04em;',
    '    cursor: pointer;',
    '}',
    '',
    '.form-attachments__help,',
    '.form-attachments__note {',
    '    margin: var(--space-xs) 0 0;',
    '    font-size: 0.8125rem;',
    '    line-height: 1.55;',
    '}',
    '',
    '.form-attachments__help {',
    '    color: var(--text-dimmed);',
    '}',
    '',
    '.form-attachments__note {',
    '    margin-top: var(--space-sm);',
    '    padding-left: var(--space-sm);',
    '    border-left: 2px solid var(--accent-primary);',
    '    color: var(--text-muted);',
    '}',
    '',
    '.form-attachments__list {',
    '    display: grid;',
    '    gap: var(--space-xs);',
    '    margin-top: var(--space-sm);',
    '}',
    '',
    '.form-attachments__item {',
    '    padding: var(--space-xs) var(--space-sm);',
    '    border: var(--border);',
    '    background: var(--bg-surface);',
    '    color: var(--text-muted);',
    '    font-family: var(--font-mono);',
    '    font-size: 0.75rem;',
    '    overflow-wrap: anywhere;',
    '}',
    ''
  ].join('\n');

  content = content.replace(/\s*$/, '') + '\n' + styles;
  write(rel, content);
}

function collectHtmlFiles() {
  const files = [];

  for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      files.push(path.join(ROOT, entry.name));
    }
  }

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) files.push(full);
    }
  }

  ['services', 'ru', 'en'].forEach(function (dir) {
    walk(path.join(ROOT, dir));
  });

  return files;
}

function patchHtmlForms() {
  let updated = 0;

  for (const filePath of collectHtmlFiles()) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!/\bform\b[^>]+id=["'](?:contactForm|serviceForm)["']/i.test(content)) continue;

    const before = content;
    content = content.replace(/\/style\.css\?v=8\b/g, '/style.css?v=9');

    if (!content.includes(RUNTIME_SRC)) {
      if (!/<\/body>/i.test(content)) {
        throw new Error('Missing </body> in ' + path.relative(ROOT, filePath));
      }
      content = content.replace(/<\/body>/i, RUNTIME_TAG + '\n</body>');
    }

    if (content !== before) {
      fs.writeFileSync(filePath, content, 'utf8');
      updated++;
    }
  }

  return updated;
}

function main() {
  patchPartial();
  patchBuild();
  patchBackend();
  patchStyles();
  const updatedHtml = patchHtmlForms();
  process.stdout.write('Form photo upload migration applied; ' + updatedHtml + ' HTML files updated.\n');
}

main();
