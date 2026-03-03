const fs = require('fs');
const path = require('path');

const partialsDir = path.join(__dirname, 'partials');
if (!fs.existsSync(partialsDir)) fs.mkdirSync(partialsDir);

const langs = [
    { code: 'et', file: 'index.html' },
    { code: 'ru', file: 'ru/index.html' },
    { code: 'en', file: 'en/index.html' }
];

function getHeaderContent(html) {
    // Try to match with preceding comment if present
    const match = html.match(/(<!--(?:\s*=+\s*1\.\s*NAVBAR\s*=+\s*|\s*NAVBAR\s*)-->\s*)?<header\s+class="navbar"[^>]*>[\s\S]*?<\/header>/i);
    if (!match) return null;
    return {
        fullText: match[0],
        startIdx: match.index,
        endIdx: match.index + match[0].length
    };
}

function getBalancedTagContent(html, startPattern) {
    const startMatch = html.match(startPattern);
    if (!startMatch) return null;

    let startIndex = startMatch.index;
    let index = startIndex + startMatch[0].length;
    let depth = 1;

    while (index < html.length && depth > 0) {
        const nextOpen = html.indexOf('<div', index);
        const nextClose = html.indexOf('</div', index);

        if (nextClose === -1) break; // malformed HTML

        if (nextOpen !== -1 && nextOpen < nextClose) {
            depth++;
            index = nextOpen + 4;
        } else {
            depth--;
            index = nextClose + 6; // length of '</div>'
        }
    }

    // Check if there is a preceding comment block like <!-- Mobile Menu -->
    let stringBefore = html.substring(0, startIndex);
    let precedingCommentMatch = stringBefore.match(/(<!--\s*(?:Mobile Menu|MOBILE MENU)\s*-->\s*)$/i);
    let finalStartIndex = startIndex;
    if (precedingCommentMatch) {
        finalStartIndex -= precedingCommentMatch[0].length;
    }

    return {
        fullText: html.substring(finalStartIndex, index),
        startIdx: finalStartIndex,
        endIdx: index
    };
}

const partials = {};
let failed = false;

for (const lang of langs) {
    const filePath = path.join(__dirname, lang.file);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        continue;
    }

    const html = fs.readFileSync(filePath, 'utf8');
    const headerInfo = getHeaderContent(html);
    const menuInfo = getBalancedTagContent(html, /<div\s+class="mobile-menu"[^>]*id="mobileMenu"[^>]*>/i);

    if (headerInfo && menuInfo) {
        fs.writeFileSync(path.join(partialsDir, `header-${lang.code}.html`), headerInfo.fullText, 'utf8');
        fs.writeFileSync(path.join(partialsDir, `mobile-menu-${lang.code}.html`), menuInfo.fullText, 'utf8');
        partials[lang.code] = { header: headerInfo.fullText, mobileMenu: menuInfo.fullText };
        console.log(`[Extracted] ${lang.code.toUpperCase()}`);
    } else {
        console.error(`[Error] Failed to extract from ${lang.file}. Header: ${!!headerInfo}, Menu: ${!!menuInfo}`);
        failed = true;
    }
}

if (failed || Object.keys(partials).length === 0) {
    console.error("Aborting.");
    process.exit(1);
}

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        const fullPath = path.resolve(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory() && !['.git', '.agent', 'node_modules', 'partials'].some(i => fullPath.includes(i))) {
            results = results.concat(walk(fullPath));
        } else if (fullPath.endsWith('.html')) {
            results.push(fullPath);
        }
    });
    return results;
}

const allHtmlFiles = walk(__dirname);
let updatedCount = 0;

for (const file of allHtmlFiles) {
    const relativePath = path.relative(__dirname, file).replace(/\\/g, '/');

    let langCode = 'et';
    if (relativePath.startsWith('ru/')) langCode = 'ru';
    else if (relativePath.startsWith('en/')) langCode = 'en';

    if (!partials[langCode]) continue;

    let html = fs.readFileSync(file, 'utf8');
    const oldHtml = html;

    // We process mobileMenu first because replacing header might shift indices if lengths differ
    const menuInfo = getBalancedTagContent(html, /<div\s+class="mobile-menu"[^>]*id="mobileMenu"[^>]*>/i);
    if (menuInfo) {
        html = html.substring(0, menuInfo.startIdx) + partials[langCode].mobileMenu + html.substring(menuInfo.endIdx);
    }

    const headerInfo = getHeaderContent(html);
    if (headerInfo) {
        html = html.substring(0, headerInfo.startIdx) + partials[langCode].header + html.substring(headerInfo.endIdx);
    }

    if (html !== oldHtml) {
        fs.writeFileSync(file, html, 'utf8');
        console.log(`[Updated] ${relativePath}`);
        updatedCount++;
    }
}

console.log(`\nDone. Updated ${updatedCount} files.`);
