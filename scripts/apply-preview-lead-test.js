#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

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

function patchBackend() {
  const rel = 'functions/index.js';
  let content = read(rel);

  const hostRegex = 'const FIREBASE_HOST_RE = /^mrcar-473416(?:--[a-z0-9-]+)?\\.(web\\.app|firebaseapp\\.com)$/i;';
  const hostRegexes = `${hostRegex}\nconst FIREBASE_PREVIEW_HOST_RE = /^mrcar-473416--[a-z0-9-]+\\.(web\\.app|firebaseapp\\.com)$/i;`;
  content = replaceOnce(content, hostRegex, hostRegexes, 'Firebase preview host regex');

  const successResponse = `    return res.status(200).json({\n      success: true,\n      message: "Спасибо! Заявка отправлена."\n    });`;
  const successWithAttachments = `    return res.status(200).json({\n      success: true,\n      message: "Спасибо! Заявка отправлена.",\n      attachmentsAccepted: cleanAttachments.length\n    });`;
  content = replaceOnce(content, successResponse, successWithAttachments, 'lead success response');

  if (!content.includes('exports.leadPreview = onRequest')) {
    content = content.replace(/\s*$/, '') + `\n\n// ─── Preview lead function ────────────────────────────────────────────────────\n// Used only by Firebase Hosting preview channels so attachment delivery can be\n// tested end-to-end without changing the production lead function.\nexports.leadPreview = onRequest({\n  cors: false,\n  region: "europe-west4",\n  maxInstances: 2,\n  secrets: ["SMTP_PASS"]\n}, async (req, res) => {\n  const host = String(req.headers.host || "").toLowerCase().replace(/:\\d+$/, "");\n  if (!FIREBASE_PREVIEW_HOST_RE.test(host)) {\n    return res.status(403).json({ success: false, type: "validation", message: "Preview only." });\n  }\n\n  return exports.lead(req, res);\n});\n`;
  }

  write(rel, content);
}

function patchFirebaseConfig() {
  const rel = 'firebase.json';
  let content = read(rel);
  const leadRewrite = `      {\n        "source": "/api/lead",\n        "function": "lead"\n      },`;
  const previewAndLead = `      {\n        "source": "/api/lead-preview",\n        "function": "leadPreview"\n      },\n      {\n        "source": "/api/lead",\n        "function": "lead"\n      },`;
  content = replaceOnce(content, leadRewrite, previewAndLead, 'lead preview rewrite');
  write(rel, content);
}

function patchClient() {
  const rel = 'scripts/lead-form-upload.js';
  let content = read(rel);

  const constants = `  const MAX_TOTAL_BYTES = 10 * 1024 * 1024;\n  const ACCEPT = '.jpg,.jpeg,.png,.heic,.heif,.pdf,image/jpeg,image/png,image/heic,image/heif,application/pdf';`;
  const constantsWithPreview = `  const MAX_TOTAL_BYTES = 10 * 1024 * 1024;\n  const ACCEPT = '.jpg,.jpeg,.png,.heic,.heif,.pdf,image/jpeg,image/png,image/heic,image/heif,application/pdf';\n  const FIREBASE_PREVIEW_HOST_RE = /^mrcar-473416--[a-z0-9-]+\\.(web\\.app|firebaseapp\\.com)$/i;`;
  content = replaceOnce(content, constants, constantsWithPreview, 'client preview host regex');

  const copyPatches = [
    ["      uploadLabel: 'Lisa foto või dokument',", "      uploadLabel: 'Lisa foto või dokument',\n      chooseFiles: 'Vali failid',\n      noneSelected: 'Faile pole valitud',"],
    ["      uploadLabel: 'Добавить фото или документ',", "      uploadLabel: 'Добавить фото или документ',\n      chooseFiles: 'Выбрать файлы',\n      noneSelected: 'Файлы не выбраны',"],
    ["      uploadLabel: 'Add photo or document',", "      uploadLabel: 'Add photo or document',\n      chooseFiles: 'Choose files',\n      noneSelected: 'No files selected',"],
    ["      uploadLabel: 'Lisää kuva tai asiakirja',", "      uploadLabel: 'Lisää kuva tai asiakirja',\n      chooseFiles: 'Valitse tiedostot',\n      noneSelected: 'Tiedostoja ei ole valittu',"]
  ];
  for (const [search, replacement] of copyPatches) {
    content = replaceOnce(content, search, replacement, `localized file picker copy: ${search}`);
  }

  const oldPickerHtml = `    group.innerHTML = [\n      '<label for="' + id + '">' + copy.uploadLabel + '</label>',\n      '<input id="' + id + '" type="file" data-lead-attachments multiple accept="' + ACCEPT + '">',\n      '<p class="form-attachments__help">' + copy.help + '</p>',\n      '<p class="form-attachments__note">' + copy.foreignNote + '</p>',\n      '<div class="form-attachments__list" data-lead-attachment-list aria-live="polite"></div>'\n    ].join('');`;
  const newPickerHtml = `    group.innerHTML = [\n      '<label for="' + id + '">' + copy.uploadLabel + '</label>',\n      '<input id="' + id + '" class="form-attachments__input" type="file" data-lead-attachments multiple accept="' + ACCEPT + '">',\n      '<div class="form-attachments__picker">',\n      '<button type="button" class="form-attachments__button" data-lead-attachment-button>' + copy.chooseFiles + '</button>',\n      '<span class="form-attachments__status" data-lead-attachment-status aria-live="polite">' + copy.noneSelected + '</span>',\n      '</div>',\n      '<p class="form-attachments__help">' + copy.help + '</p>',\n      '<p class="form-attachments__note">' + copy.foreignNote + '</p>',\n      '<div class="form-attachments__list" data-lead-attachment-list aria-live="polite"></div>'\n    ].join('');`;
  content = replaceOnce(content, oldPickerHtml, newPickerHtml, 'custom file picker markup');

  const oldPickerSetup = `    const input = group.querySelector('input[data-lead-attachments]');\n    const list = group.querySelector('[data-lead-attachment-list]');\n    input.addEventListener('change', function () {\n      const files = Array.from(input.files || []);\n      const error = validateFiles(files, copy);\n      if (error) {\n        input.value = '';\n        updateFileList(list, []);\n        showMessage(error, true);\n        return;\n      }\n      updateFileList(list, files);\n    });\n\n    return { input, list };`;
  const newPickerSetup = `    const input = group.querySelector('input[data-lead-attachments]');\n    const button = group.querySelector('[data-lead-attachment-button]');\n    const status = group.querySelector('[data-lead-attachment-status]');\n    const list = group.querySelector('[data-lead-attachment-list]');\n\n    button.addEventListener('click', function () {\n      input.click();\n    });\n\n    input.addEventListener('change', function () {\n      const files = Array.from(input.files || []);\n      const error = validateFiles(files, copy);\n      if (error) {\n        input.value = '';\n        status.textContent = copy.noneSelected;\n        updateFileList(list, []);\n        showMessage(error, true);\n        return;\n      }\n      status.textContent = files.length ? files.map(function (file) { return file.name; }).join(', ') : copy.noneSelected;\n      updateFileList(list, files);\n    });\n\n    return { input, list, status };`;
  content = replaceOnce(content, oldPickerSetup, newPickerSetup, 'custom file picker setup');

  const fetchBlock = `        const response = await fetch('/api/lead', {\n          method: 'POST',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify(data)\n        });`;
  const previewFetchBlock = `        const isPreview = FIREBASE_PREVIEW_HOST_RE.test(window.location.hostname);\n        const endpoint = isPreview ? '/api/lead-preview' : '/api/lead';\n        const response = await fetch(endpoint, {\n          method: 'POST',\n          headers: { 'Content-Type': 'application/json' },\n          body: JSON.stringify(data)\n        });`;
  content = replaceOnce(content, fetchBlock, previewFetchBlock, 'preview-aware lead endpoint');

  const resultCheck = `        if (!response.ok || !result || !result.success) {\n          if (Array.isArray(result?.fields)) {`;
  const resultCheckWithCount = `        if (isPreview && result && result.success && result.attachmentsAccepted !== data.attachments.length) {\n          throw new Error(copy.error);\n        }\n\n        if (!response.ok || !result || !result.success) {\n          if (Array.isArray(result?.fields)) {`;
  content = replaceOnce(content, resultCheck, resultCheckWithCount, 'preview attachment count check');

  const resetBlock = `        form.reset();\n        updateFileList(attachmentField.list, []);\n        const tsStartInput = form.querySelector('[name="tsStart"]');`;
  const resetWithStatus = `        form.reset();\n        updateFileList(attachmentField.list, []);\n        if (attachmentField.status) attachmentField.status.textContent = copy.noneSelected;\n        const tsStartInput = form.querySelector('[name="tsStart"]');`;
  content = replaceOnce(content, resetBlock, resetWithStatus, 'file picker reset status');

  write(rel, content);
}

function patchStyles() {
  const rel = 'style.css';
  let content = read(rel);

  const oldInputRule = `.form-attachments input[type="file"] {\n    cursor: pointer;\n    padding: 12px;\n}\n\n.form-attachments input[type="file"]::file-selector-button {\n    margin-right: var(--space-md);\n    padding: 10px 14px;\n    border: 1px solid var(--accent-primary);\n    border-radius: var(--radius);\n    background: transparent;\n    color: var(--accent-primary);\n    font-family: var(--font-mono);\n    font-size: 0.75rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    cursor: pointer;\n}`;
  const customPickerRules = `.form-attachments__input {\n    position: absolute !important;\n    width: 1px !important;\n    height: 1px !important;\n    padding: 0 !important;\n    margin: -1px !important;\n    overflow: hidden !important;\n    clip: rect(0, 0, 0, 0) !important;\n    white-space: nowrap !important;\n    border: 0 !important;\n}\n\n.form-attachments__picker {\n    display: flex;\n    align-items: center;\n    gap: var(--space-md);\n    width: 100%;\n    min-height: 72px;\n    padding: 12px;\n    border: var(--border);\n    background: var(--bg-surface);\n}\n\n.form-attachments__button {\n    flex: 0 0 auto;\n    padding: 12px 16px;\n    border: 1px solid var(--accent-primary);\n    border-radius: var(--radius);\n    background: transparent;\n    color: var(--accent-primary);\n    font-family: var(--font-mono);\n    font-size: 0.75rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    cursor: pointer;\n}\n\n.form-attachments__button:hover,\n.form-attachments__button:focus-visible {\n    background: var(--accent-primary);\n    color: #111625;\n    outline: none;\n}\n\n.form-attachments__status {\n    min-width: 0;\n    color: var(--text-muted);\n    font-size: 0.9375rem;\n    overflow-wrap: anywhere;\n}`;
  content = replaceOnce(content, oldInputRule, customPickerRules, 'custom file picker styles');

  write(rel, content);
}

function patchPreviewWorkflow() {
  const rel = '.github/workflows/firebase-hosting-pull-request.yml';
  let content = read(rel);

  content = content.replace('node-version: 20', 'node-version: 22');

  const hostingStep = `      - uses: FirebaseExtended/action-hosting-deploy@v0\n        with:`;
  const previewFunctionSteps = `      - name: Prepare Firebase credentials for preview function\n        env:\n          FIREBASE_SERVICE_ACCOUNT: \\${{ secrets.FIREBASE_SERVICE_ACCOUNT_MRCAR_473416 }}\n        run: |\n          test -n "$FIREBASE_SERVICE_ACCOUNT"\n          printf '%s' "$FIREBASE_SERVICE_ACCOUNT" > "$RUNNER_TEMP/firebase-service-account.json"\n          echo "GOOGLE_APPLICATION_CREDENTIALS=$RUNNER_TEMP/firebase-service-account.json" >> "$GITHUB_ENV"\n      - name: Deploy preview lead function\n        run: npx --yes firebase-tools deploy --only functions:leadPreview --project mrcar-473416 --non-interactive\n      - uses: FirebaseExtended/action-hosting-deploy@v0\n        with:`;
  content = replaceOnce(content, hostingStep, previewFunctionSteps, 'preview function deployment steps');

  write(rel, content);
}

function main() {
  patchBackend();
  patchFirebaseConfig();
  patchClient();
  patchStyles();
  patchPreviewWorkflow();
  process.stdout.write('Preview lead end-to-end test support applied.\n');
}

main();
