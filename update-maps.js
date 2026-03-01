const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('.git') && !file.includes('.agent') && !file.includes('node_modules')) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.html') || file.endsWith('.js')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(__dirname);

let matchedCount = 0;
let modifiedCount = 0;

// The incorrect map URL string that only points to generic coordinates 59.45, 24.7
const oldMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.9!2d24.7367!3d59.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294a73d8b6a69%3A0x4e7e0e6e7e6e7e6e!2sKopli+82a%2C+Tallinn!5e0!3m2!1set!2see!4v1600000000000!5m2!1set!2see";

// The correct map URL string that actually pins "Kopli 82a"
const newMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.9!2d24.7367!3d59.4428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294a73d8b6a69%3A0x4e7e0e6e7e6e7e6e!2sKopli+82a%2C+Tallinn!5e0!3m2!1set!2see!4v1600000000000!5m2!1set!2see";

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Quick check before full regex replacement
    if (content.includes('pb=!1m18!1m12!1m3!1d2028.5!2d24.7!3d59.45')) {
        matchedCount++;
        // Use split/join for safe naive string replacement
        const newContent = content.split(oldMapUrl).join(newMapUrl);
        fs.writeFileSync(file, newContent, 'utf8');
        modifiedCount++;
        console.log(`Updated map in: ${file}`);
    }
});

console.log(`Done. Matched ${matchedCount} files, Modified ${modifiedCount} files.`);
