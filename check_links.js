const fs = require('fs');
const path = require('path');

function checkLinks(file, prefix, dir) {
    const content = fs.readFileSync(file, 'utf8');
    const regex = new RegExp(`href=["'](${prefix}[^"']*)["']`, 'g');
    let match;
    const links = new Set();
    while ((match = regex.exec(content)) !== null) {
        links.add(match[1]);
    }
    const validFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => f.replace('.html', ''));
    let found = false;
    for (const link of links) {
        const serviceName = link.replace(prefix, '');
        if (!validFiles.includes(serviceName)) {
            console.log(`BROKEN in ${file}: ${link} (Expected ${serviceName}.html to exist in ${dir})`);
            found = true;
        }
    }
    if (!found) {
        console.log(`OK: ${file}`);
    }
}

checkLinks('index.html', '/services/', 'services');
checkLinks('ru/index.html', '/ru/services/', 'ru/services');
checkLinks('en/index.html', '/en/services/', 'en/services');
