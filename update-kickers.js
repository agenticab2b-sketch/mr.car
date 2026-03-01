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
        } else if (file.endsWith('.html')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(__dirname);

let matchedCount = 0;
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /<span\s+class="meta"\s*>\s*\/\/\//g;

    if (regex.test(content)) {
        matchedCount++;
        const newContent = content.replace(regex, '<span class="meta text-accent">///');
        fs.writeFileSync(file, newContent, 'utf8');
        modifiedCount++;
        console.log(`Updated ${file}`);
    }
});

console.log(`Done. Matched ${matchedCount} files, Modified ${modifiedCount} files.`);
