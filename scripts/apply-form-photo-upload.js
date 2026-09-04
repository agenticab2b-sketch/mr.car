#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const RUNTIME_SRC = '/scripts/lead-form-upload.js?v=1';
const RUNTIME_TAG = `  <script src="${RUNTIME_SRC}" defer></script>`;

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function write(rel, content) {
  fs.writeFileSync(path.join(ROOT, rel), content, 'utf8');
}

function replaceOnce(content, search, replacement, label) {
  if (content.includes(replacement)) return content;
  const index = content.indexOf(search);
  if (index === -1) throw new Error(`Could not find ${label}`);
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
    content = content.replace(/\s*$/, '') + `\n${RUNTIME_TAG}\n`;
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
  const constantsBlock = `${constantsAnchor}\nconst MAX_ATTACHMENTS = 3;\nconst MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;\nconst MAX_ATTACHMENTS_TOTAL_BYTES = 10 * 1024 * 1024;\nconst ATTACHMENT_TYPES = {\n  '.jpg': { type: 'image/jpeg', claimed: new Set(['', 'image/jpeg', 'image/jpg', 'application/octet-stream']) },\n  '.jpeg': { type: 'image/jpeg', claimed: new Set(['', 'image/jpeg', 'image/jpg', 'application/octet-stream']) },\n  '.png': { type: 'image/png', claimed: new Set(['', 'image/png', 'application/octet-stream']) },\n  '.heic': { type: 'image/heic', claimed: new Set(['', 'image/heic', 'image/heif', 'application/octet-stream']) },\n  '.heif': { type: 'image/heif', claimed: new Set(['', 'image/heic', 'image/heif', 'application/octet-stream']) },\n  '.pdf': { type: 'application/pdf', claimed: new Set(['', 'application/pdf', 'application/octet-stream']) }\n};`;
  content = replaceOnce(content, constantsAnchor, constantsBlock, 'attachment constants');

  const phoneHelper = `function isValidPhone(phone) {\n  return PHONE_RE.test(phone);\n}`;
  const attachmentHelpers = `${phoneHelper}\n\nfunction getAttachmentExtension(fileName) {\n  const match = String(fileName || '').toLowerCase().match(/\\.([a-z0-9]+)$/);\n  return match ? \\`.\${match[1]}\\` : '';\n}\n\nfunction hasValidAttachmentSignature(content, extension) {\n  if (!Buffer.isBuffer(content) || content.length < 5) return false;\n\n  if (extension === '.jpg' || extension === '.jpeg') {\n    return content.length >= 3 && content[0] === 0xff && content[1] === 0xd8 && content[2] === 0xff;\n  }\n\n  if (extension === '.png') {\n    const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);\n    return content.length >= 8 && content.subarray(0, 8).equals(pngSignature);\n  }\n\n  if (extension === '.pdf') {\n    return content.subarray(0, 5).toString('ascii') === '%PDF-';\n  }\n\n  if (extension === '.heic' || extension === '.heif') {\n    if (content.length < 12 || content.subarray(4, 8).toString('ascii') !== 'ftyp') return false;\n    const brand = content.subarray(8, 12).toString('ascii').toLowerCase();\n    return new Set(['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'mif1', 'msf1']).has(brand);\n  }\n\n  return false;\n}\n\nfunction normaliseAttachments(value) {\n  if (value === undefined || value === null || value === '') {\n    return { valid: true, files: [] };\n  }\n\n  let rawFiles = value;\n  if (typeof rawFiles === 'string') {\n    try {\n      rawFiles = JSON.parse(rawFiles);\n    } catch (error) {\n      return { valid: false, files: [] };\n    }\n  }\n\n  if (!Array.isArray(rawFiles) || rawFiles.length > MAX_ATTACHMENTS) {\n    return { valid: false, files: [] };\n  }\n\n  const files = [];\n  let totalBytes = 0;\n\n  for (const rawFile of rawFiles) {\n    if (!rawFile || typeof rawFile !== 'object' || Array.isArray(rawFile)) {\n      return { valid: false, files: [] };\n    }\n\n    const rawName = normaliseSingleLine(rawFile.name, 120);\n    const name = rawName.replace(/[\\\\/:*?\"<>|\\u0000-\\u001f]/g, '_');\n    const extension = getAttachmentExtension(name);\n    const allowed = ATTACHMENT_TYPES[extension];\n    const claimedType = normaliseSingleLine(rawFile.type, 80).toLowerCase();\n    const data = typeof rawFile.data === 'string' ? rawFile.data.replace(/\\s/g, '') : '';\n\n    if (!name || !allowed || !allowed.claimed.has(claimedType)) {\n      return { valid: false, files: [] };\n    }\n\n    const maxBase64Length = Math.ceil(MAX_ATTACHMENT_BYTES / 3) * 4 + 4;\n    if (!data || data.length > maxBase64Length || !/^[A-Za-z0-9+/]*={0,2}$/.test(data)) {\n      return { valid: false, files: [] };\n    }\n\n    const fileContent = Buffer.from(data, 'base64');\n    if (!fileContent.length || fileContent.length > MAX_ATTACHMENT_BYTES || !hasValidAttachmentSignature(fileContent, extension)) {\n      return { valid: false, files: [] };\n    }\n\n    totalBytes += fileContent.length;\n    if (totalBytes > MAX_ATTACHMENTS_TOTAL_BYTES) {\n      return { valid: false, files: [] };\n    }\n\n    files.push({\n      name,\n      type: allowed.type,\n      content: fileContent\n    });\n  }\n\n  return { valid: true, files };\n}`;
  content = replaceOnce(content, phoneHelper, attachmentHelpers, 'attachment helpers');

  const pageUrlLine = '  const cleanPageUrl = normalisePageUrl(body.pageUrl);';
  const pageUrlBlock = `${pageUrlLine}\n  const attachmentResult = normaliseAttachments(body.attachments);\n  const cleanAttachments = attachmentResult.files;`;
  content = replaceOnce(content, pageUrlLine, pageUrlBlock, 'attachment request parsing');

  const validationStart = `  const invalidFields = [];\n  if (cleanCarNumber.length < 2) {`;
  const validationWithName = `  const invalidFields = [];\n  if (!cleanName) {\n    invalidFields.push("name");\n  }\n  if (cleanCarNumber.length < 2) {`;
  content = replaceOnce(content, validationStart, validationWithName, 'required name validation');

  const phoneValidation = `  if (cleanPhone && !isValidPhone(cleanPhone)) {\n    invalidFields.push("phone");\n  }`;
  const attachmentValidation = `${phoneValidation}\n  if (!attachmentResult.valid) {\n    invalidFields.push("attachments");\n  }`;
  content = replaceOnce(content, phoneValidation, attachmentValidation, 'attachment validation');

  const adminTail = `      \\`Lehe URL:      \${cleanPageUrl || "—"}\\`,\n      \\`Aeg:           \${timestamp}\\`\n    ].join("\\n")\n  };`;
  const adminWithAttachments = `      \\`Lehe URL:      \${cleanPageUrl || "—"}\\`,\n      \\`Manused:       \${cleanAttachments.length ? cleanAttachments.map(file => file.name).join(", ") : "—"}\\`,\n      \\`Aeg:           \${timestamp}\\`\n    ].join("\\n"),\n    attachments: cleanAttachments.map(file => ({\n      filename: file.name,\n      content: file.content,\n      contentType: file.type\n    }))\n  };`;
  content = replaceOnce(content, adminTail, adminWithAttachments, 'admin email attachments');

  write(rel, content);
}

function patchStyles() {
  const rel = 'style.css';
  let content = read(rel);
  const marker = '/* Lead form attachments */';
  if (content.includes(marker)) return;

  content = content.replace(/\s*$/, '') + `\n\n${marker}\n.form-attachments input[type="file"] {\n    cursor: pointer;\n    padding: 12px;\n}\n\n.form-attachments input[type="file"]::file-selector-button {\n    margin-right: var(--space-md);\n    padding: 10px 14px;\n    border: 1px solid var(--accent-primary);\n    border-radius: var(--radius);\n    background: transparent;\n    color: var(--accent-primary);\n    font-family: var(--font-mono);\n    font-size: 0.75rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    cursor: pointer;\n}\n\n.form-attachments__help,\n.form-attachments__note {\n    margin: var(--space-xs) 0 0;\n    font-size: 0.8125rem;\n    line-height: 1.55;\n}\n\n.form-attachments__help {\n    color: var(--text-dimmed);\n}\n\n.form-attachments__note {\n    margin-top: var(--space-sm);\n    padding-left: var(--space-sm);\n    border-left: 2px solid var(--accent-primary);\n    color: var(--text-muted);\n}\n\n.form-attachments__list {\n    display: grid;\n    gap: var(--space-xs);\n    margin-top: var(--space-sm);\n}\n\n.form-attachments__item {\n    padding: var(--space-xs) var(--space-sm);\n    border: var(--border);\n    background: var(--bg-surface);\n    color: var(--text-muted);\n    font-family: var(--font-mono);\n    font-size: 0.75rem;\n    overflow-wrap: anywhere;\n}\n`;

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

  ['services', 'ru', 'en'].forEach(dir => walk(path.join(ROOT, dir)));
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
      if (!/<\/body>/i.test(content)) throw new Error(`Missing </body> in ${path.relative(ROOT, filePath)}`);
      content = content.replace(/<\/body>/i, `${RUNTIME_TAG}\n</body>`);
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
  process.stdout.write(`Form photo upload migration applied; ${updatedHtml} HTML files updated.\n`);
}

main();
