const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\bumbo\\Документы\\GitHub\\AntigravityAgents\\MrCar final';

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && (filePath.endsWith('.html') || filePath.endsWith('.js'))) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && name !== 'node_modules' && name !== '.git') {
            walkSync(filePath, callback);
        }
    });
}

let modifiedFiles = 0;

walkSync(dir, function (filePath) {
    // skip this script itself
    if (filePath.endsWith('fix_seo.js')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Webasto wrong slug -> correct slug
    content = content.replace(/webasto-diagnostika/g, 'webasto-diagnostika');

    // 2. Trailing slash on privaatsus
    content = content.replace(/href="\/privaatsus\/"/g, 'href="/privaatsus"');
    content = content.replace(/href="https:\/\/www\.mrcar\.ee\/privaatsus\/"/g, 'href="https://www.mrcar.ee/privaatsus"');
    content = content.replace(/href="\/ru\/privaatsus\/"/g, 'href="/ru/privaatsus"');
    content = content.replace(/href="https:\/\/www\.mrcar\.ee\/ru\/privaatsus\/"/g, 'href="https://www.mrcar.ee/ru/privaatsus"');

    // 3. HTTP to HTTPS for mrcar.ee
    content = content.replace(/http:\/\/www\.mrcar\.ee/g, 'https://www.mrcar.ee');
    content = content.replace(/http:\/\/mrcar\.ee/g, 'https://www.mrcar.ee');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
        modifiedFiles++;
    }
});

console.log(`DONE. Modified ${modifiedFiles} files.`);
