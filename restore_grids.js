const fs = require('fs');

const files = [
    { target: 'ru/o-nas.html', temp: 'temp_ru.html' },
    { target: 'meist.html', temp: 'temp_et.html' },
    { target: 'en/about.html', temp: 'temp_en.html' }
];

files.forEach(({ target, temp }) => {
    // 1. Read old grid
    const oldHtml = fs.readFileSync(temp, 'utf8');
    const match = oldHtml.match(/<div class="services-all__grid">[\s\S]*?<\/div>/);
    if (!match) {
        console.log(`Failed to find grid in ${temp}`);
        return;
    }
    const gridHtml = match[0];

    // 2. Read new html
    let newHtml = fs.readFileSync(target, 'utf8');

    // Find the insert point: right before the button in sd-content
    // We can just find '<a href="' + ... + ' class="btn btn-primary"' inside sd-content.
    // Wait, the button we inserted has `style="width: fit-content;"`
    const insertPointRegex = /(<a href="[^"]+" class="btn btn-primary" style="width: fit-content;">)/;

    if (insertPointRegex.test(newHtml)) {
        newHtml = newHtml.replace(insertPointRegex, gridHtml + '\n                    $1');
        fs.writeFileSync(target, newHtml, 'utf8');
        console.log(`Successfully injected grid into ${target}`);
    } else {
        console.log(`Failed to find insert point in ${target}`);
    }
});
