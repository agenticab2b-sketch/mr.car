const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory && f !== 'node_modules' && f !== '.git' && f !== '.agent' && f !== '.gemini') {
            walk(dirPath, callback);
        } else if (!isDirectory && f.endsWith('.html')) {
            callback(dirPath);
        }
    });
}

walk('.', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    const normalizedPath = filePath.replace(/\\/g, '/');

    if (normalizedPath.includes('/ru/') || normalizedPath === 'ru/index.html' || normalizedPath === 'ru/o-nas.html' || normalizedPath === 'ru/tseny.html' || normalizedPath === 'ru/kontakt.html' || normalizedPath === 'ru/uslugi.html') {
        content = content.replace(/href="[^"]*#about"/g, 'href="/ru/o-nas.html"');
    } else if (normalizedPath.includes('/en/') || normalizedPath === 'en/index.html' || normalizedPath === 'en/about.html' || normalizedPath === 'en/prices.html' || normalizedPath === 'en/contact.html' || normalizedPath === 'en/services.html') {
        content = content.replace(/href="[^"]*#about"/g, 'href="/en/about.html"');
    } else {
        content = content.replace(/href="[^"]*#about"/g, 'href="/meist.html"');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
});
