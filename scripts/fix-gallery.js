const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let raw = fs.readFileSync(filePath, 'utf8');
    let content = raw;
    const isRussian = filePath.includes(path.sep + 'ru' + path.sep) || filePath.endsWith(path.sep + 'ru') || filePath.match(/[\\\/]ru[\\\/]/) || filePath.includes('/ru/');
    const isEnglish = filePath.includes(path.sep + 'en' + path.sep) || filePath.endsWith(path.sep + 'en') || filePath.match(/[\\\/]en[\\\/]/) || filePath.includes('/en/');
    const isEstonian = !isRussian && !isEnglish;

    if (isEstonian) {
        content = content.replace(/href="(\/)?#gallery"/g, 'href="/galerii"');
    } else if (isRussian) {
        content = content.replace(/href="(\/ru\/)?#gallery"/g, 'href="/ru/galereya"');
    } else if (isEnglish) {
        content = content.replace(/href="(\/en\/)?#gallery"/g, 'href="/en/gallery"');
    }

    if (raw !== content) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            if (item !== 'node_modules' && item !== '.git' && item !== 'scripts' && !item.startsWith('.')) {
                processDirectory(fullPath);
            }
        } else if (item.endsWith('.html')) {
            replaceInFile(fullPath);
        }
    }
}

processDirectory(path.join(__dirname, '..'));
