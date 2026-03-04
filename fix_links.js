const fs = require('fs');
function replaceHrefs(file, oldHref, newHref) {
    const content = fs.readFileSync(file, 'utf8');
    const newContent = content.split('href="' + oldHref + '"').join('href="' + newHref + '"');
    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Replaced ' + oldHref + ' in ' + file);
    }
}

replaceHrefs('ru/index.html', '/ru/services/to-diagnostika', '/ru/services/tehobsluzhivanie-diagnostika');
replaceHrefs('en/index.html', '/en/services/gearbox-repair', '/en/services/transmission-repair');
