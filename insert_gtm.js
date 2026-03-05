#!/usr/bin/env node
/**
 * insert_gtm.js — Inserts Google Tag Manager into all static HTML files
 *
 * GTM container: GTM-W48VVTPC
 *
 * Inserts:
 *   1. <script> GTM snippet immediately after <head>
 *   2. <noscript> GTM iframe immediately after opening <body ...>
 *
 * Skips files that already contain GTM-W48VVTPC.
 *
 * Run: node insert_gtm.js
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const GTM_ID = 'GTM-W48VVTPC';

const GTM_HEAD = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');</script>
<!-- End Google Tag Manager -->`;

const GTM_BODY = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

const SKIP_DIRS = new Set(['.git', '.agent', '.gemini', 'node_modules', 'wix', 'temp_docs', '.firebase', 'functions']);

function walk(dir) {
    let results = [];
    let entries;
    try {
        entries = fs.readdirSync(dir);
    } catch (e) {
        return results;
    }
    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        let stat;
        try {
            stat = fs.statSync(fullPath);
        } catch (e) {
            continue;
        }
        if (stat.isDirectory()) {
            if (!SKIP_DIRS.has(entry)) {
                results = results.concat(walk(fullPath));
            }
        } else if (entry.endsWith('.html')) {
            results.push(fullPath);
        }
    }
    return results;
}

const allHtmlFiles = walk(ROOT);
let updatedCount = 0;
let skippedCount = 0;

for (const file of allHtmlFiles) {
    const relativePath = path.relative(ROOT, file).replace(/\\/g, '/');
    let html = fs.readFileSync(file, 'utf8');

    // Skip if GTM already installed
    if (html.includes(GTM_ID)) {
        skippedCount++;
        continue;
    }

    let modified = false;

    // Insert GTM script after <head>
    if (/<head[^>]*>/i.test(html)) {
        html = html.replace(/(<head[^>]*>)/i, `$1\n  ${GTM_HEAD}`);
        modified = true;
    } else {
        console.warn(`[WARN] No <head> found in: ${relativePath}`);
    }

    // Insert GTM noscript after <body> opening tag
    if (/<body[^>]*>/i.test(html)) {
        html = html.replace(/(<body[^>]*>)/i, `$1\n  ${GTM_BODY}`);
        modified = true;
    } else {
        console.warn(`[WARN] No <body> found in: ${relativePath}`);
    }

    if (modified) {
        fs.writeFileSync(file, html, 'utf8');
        console.log(`[GTM] Inserted into: ${relativePath}`);
        updatedCount++;
    }
}

console.log(`\nDone. Updated: ${updatedCount} files, Skipped (already had GTM): ${skippedCount} files.`);
