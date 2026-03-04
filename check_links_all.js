const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const htmlFiles = [];
walkDir('.', function (filePath) {
    if (filePath.endsWith('.html') && !filePath.includes('node_modules') && !filePath.includes('.firebase') && !filePath.includes('temp_docs') && !filePath.includes('wix')) {
        htmlFiles.push(filePath);
    }
});

let foundAny = false;
htmlFiles.forEach(file => {
    let prefix = file.includes('\\ru\\') ? '/ru/services/' : (file.includes('\\en\\') ? '/en/services/' : '/services/');
    let dir = file.includes('\\ru\\') ? 'ru/services' : (file.includes('\\en\\') ? 'en/services' : 'services');

    if (!fs.existsSync(dir)) return;

    const content = fs.readFileSync(file, 'utf8');
    const regex = new RegExp(`href=["'](${prefix}[^"']*)["']`, 'g');
    let match;
    const links = new Set();
    while ((match = regex.exec(content)) !== null) {
        links.add(match[1]);
    }
    const validFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html')).map(f => f.replace('.html', ''));

    for (const link of links) {
        const serviceName = link.replace(prefix, '');
        if (!validFiles.includes(serviceName)) {
            console.log(`BROKEN in ${file}: ${link} (Expected ${serviceName}.html to exist in ${dir})`);
            foundAny = true;
        }
    }
});

if (!foundAny) {
    console.log("No broken links found!");
}
