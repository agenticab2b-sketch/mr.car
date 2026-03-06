const fs = require('fs');
const path = require('path');

function replaceInFiles(dir, lang) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) continue;
        if (!filePath.endsWith('.html')) continue;

        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;

        if (lang === 'et' && content.includes('href="/#services"')) {
            content = content.replace(/href="\/\#services"/g, 'href="/teenused"');
            updated = true;
        }
        if (lang === 'ru' && content.includes('href="/ru/#services"')) {
            content = content.replace(/href="\/ru\/#services"/g, 'href="/ru/uslugi"');
            updated = true;
        }
        if (lang === 'en' && content.includes('href="/en/#services"')) {
            content = content.replace(/href="\/en\/#services"/g, 'href="/en/services"');
            updated = true;
        }

        if (updated) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + filePath);
        }
    }
}

replaceInFiles('services', 'et');
replaceInFiles('ru/services', 'ru');
replaceInFiles('en/services', 'en');
