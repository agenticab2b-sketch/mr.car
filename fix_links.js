const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\bumbo\\Документы\\GitHub\\AntigravityAgents\\MrCar final';

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('.html')) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && name !== 'node_modules' && name !== '.git') {
            walkSync(filePath, callback);
        }
    });
}

walkSync(dir, function (filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Contact link fixes
    content = content.replace(/href="\/ru\/contact"/g, 'href="/ru/kontakt"');

    // Privacy policy link fixes
    content = content.replace(/href="\/ru\/privaatsus\/"/g, 'href="/privaatsus"');
    content = content.replace(/href="\/en\/privacy\/"/g, 'href="/privaatsus"');
    content = content.replace(/href="\/en\/privaatsus\/"/g, 'href="/privaatsus"');

    // Service link fix
    content = content.replace(/href="https:\/\/www\.mrcar\.ee\/ru\/services\/tehobsluzhivanie-diagnostika"/g, 'href="https://www.mrcar.ee/ru/services/tehobsluzhivanie-diagnostika"');
    content = content.replace(/href="\/ru\/services\/tehobsluzhivanie-diagnostika"/g, 'href="/ru/services/tehobsluzhivanie-diagnostika"');

    // Webasto diagnostika wrong canonical/href fix in Estonian terms/services
    // Let me also fix webasto-diagnostika loop
    // I noticed in 103, tingimused.html has mega-menu links to webasto-diagnostika. That's actually correct.

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
});
console.log('DONE');
