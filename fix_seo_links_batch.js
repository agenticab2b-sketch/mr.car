const fs = require('fs');
const path = require('path');

const directories = ['.', './en', './ru', './services', './en/services', './ru/services'];
const htmlFiles = [];

// Recursively or just specific directories
function getFilesByDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isFile() && fullPath.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    }
}

directories.forEach(getFilesByDir);

let correctedFiles = 0;

for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replacements
    // 1. /en/tingimused.html -> /en/tingimused
    content = content.replace(/href="\/en\/tingimused\.html"/g, 'href="/en/tingimused"');

    // 2. /en/privacy/ -> /privaatsus
    content = content.replace(/href="\/en\/privacy\/"/g, 'href="/privaatsus"');

    // 3. /tingimused.html -> /tingimused
    content = content.replace(/href="\/tingimused\.html"/g, 'href="/tingimused"');

    // 4. /ru/tingimused.html -> /ru/tingimused
    content = content.replace(/href="\/ru\/tingimused\.html"/g, 'href="/ru/tingimused"');

    // 5. /ru/contact -> /ru/kontakt
    content = content.replace(/href="\/ru\/contact"/g, 'href="/ru/kontakt"');

    // Make sure we also cover potential trailing slash versions if any exist in the footers

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
        correctedFiles++;
    }
}

console.log(`All done! Replaced links in ${correctedFiles} files.`);
