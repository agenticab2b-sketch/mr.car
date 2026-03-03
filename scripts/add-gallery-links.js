const fs = require('fs');
const path = require('path');

function processHtml(filePath, lang) {
    const fullPath = path.join(__dirname, '..', filePath);
    if (!fs.existsSync(fullPath)) return;

    let c = fs.readFileSync(fullPath, 'utf8');

    // desktop links
    if (lang === 'et' && !c.includes('[05] Galerii')) {
        c = c.replace('<a href="#contact" class="navbar__link">[04] Kontakt</a>', '<a href="#contact" class="navbar__link">[04] Kontakt</a>\n            <a href="/galerii.html" class="navbar__link">[05] Galerii</a>');
        // mobile link
        c = c.replace('<a href="#contact" class="mobile-menu__link" onclick="closeMobileMenu()">Kontakt</a>', '<a href="#contact" class="mobile-menu__link" onclick="closeMobileMenu()">Kontakt</a>\n            <a href="/galerii.html" class="mobile-menu__link" onclick="closeMobileMenu()">Galerii</a>');
    }

    if (lang === 'ru' && !c.includes('[05] Галерея')) {
        c = c.replace('<a href="#contact" class="navbar__link">[04] Контакты</a>', '<a href="#contact" class="navbar__link">[04] Контакты</a>\n            <a href="/ru/galereya.html" class="navbar__link">[05] Галерея</a>');
        c = c.replace('<a href="#contact" class="mobile-menu__link" onclick="closeMobileMenu()">Контакты</a>', '<a href="#contact" class="mobile-menu__link" onclick="closeMobileMenu()">Контакты</a>\n            <a href="/ru/galereya.html" class="mobile-menu__link" onclick="closeMobileMenu()">Галерея</a>');
    }

    if (lang === 'en' && !c.includes('[05] Gallery')) {
        c = c.replace('<a href="#contact" class="navbar__link">[04] Contact</a>', '<a href="#contact" class="navbar__link">[04] Contact</a>\n            <a href="/en/gallery.html" class="navbar__link">[05] Gallery</a>');
        c = c.replace('<a href="#contact" class="mobile-menu__link" onclick="closeMobileMenu()">Contact</a>', '<a href="#contact" class="mobile-menu__link" onclick="closeMobileMenu()">Contact</a>\n            <a href="/en/gallery.html" class="mobile-menu__link" onclick="closeMobileMenu()">Gallery</a>');
    }

    fs.writeFileSync(fullPath, c, 'utf8');
}

processHtml('index.html', 'et');
processHtml('ru/index.html', 'ru');
processHtml('en/index.html', 'en');
console.log('Done padding links');
