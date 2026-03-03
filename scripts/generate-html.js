const fs = require('fs');
const path = require('path');

function generatePage(lang, srcFile, destFile, title, h1, desc) {
    const srcPath = path.join(__dirname, '..', srcFile);
    const destPath = path.join(__dirname, '..', destFile);

    if (!fs.existsSync(srcPath)) {
        console.error(`Missing source file: ${srcPath}`);
        return;
    }

    const content = fs.readFileSync(srcPath, 'utf8');

    // Replace title
    let newContent = content.replace(/<title>.*?<\/title>/s, `<title>${title} — Mr.Car Autoteenindus</title>`);
    // Replace description
    newContent = newContent.replace(/<meta name="description"[\s\S]*?>/s, `<meta name="description"\n        content="${desc}">`);

    // Extract head and before main
    const beforeMainMatches = newContent.match(/([\s\S]*?)<main/s);
    if (!beforeMainMatches) return;
    let beforeMain = beforeMainMatches[1];

    // Update navigation active states
    beforeMain = beforeMain.replace(/style="color:var\(--accent-primary\)"/g, ''); // Remove active from prices
    beforeMain = beforeMain.replace('href="/prices.html" class="active"', 'href="/prices.html"'); // Remove active from mobile lang? No, lang links shouldn't be touched unless we need to update hreflang.

    // Let's just find the closing main
    const afterMainMatches = newContent.match(/<\/main>([\s\S]*)/s);
    if (!afterMainMatches) return;
    const afterMain = afterMainMatches[1];

    // Add gallery CSS & JS links to head
    beforeMain = beforeMain.replace('</head>', `    <link rel="stylesheet" href="/gallery.css">\n    <link rel="stylesheet" href="https://unpkg.com/photoswipe@5/dist/photoswipe.css">\n</head>`);

    // Build main content
    const mainHTML = `<main id="gallery-main" class="gallery-page">
        <section class="prices-hero" style="padding-bottom: 40px;">
            <h1 class="prices-hero__title" style="font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; text-transform: uppercase;">${h1}</h1>
            <p class="prices-hero__desc">${desc}</p>
        </section>
        
        <section class="gallery-section site-container" style="padding-top: 40px; padding-bottom: 80px;">
            <div id="gallery-grid" class="gallery-grid">
                <!-- Images will be injected here by gallery.js -->
                <div class="gallery-loader" style="text-align: center; padding: 40px; color: var(--text-dimmed);">Laadimine...</div>
            </div>
        </section>
    </main>`;

    fs.writeFileSync(destPath, beforeMain + mainHTML + '\n    <script type="module" src="/gallery.js"></script>\n' + afterMain, 'utf8');
    console.log(`Generated ${destFile}`);
}

// ET
generatePage('et', 'prices.html', 'galerii.html', 'Galerii', 'Galerii', 'Pildid meie tegemistest ja tehtud töödest. Mr.Car Autoteenindus Tallinnas.');

// RU
generatePage('ru', 'ru/prices.html', 'ru/galereya.html', 'Галерея', 'Галерея', 'Фотографии наших работ и автосервиса. Автосервис Mr.Car в Таллинне.');

// EN
generatePage('en', 'en/prices.html', 'en/gallery.html', 'Gallery', 'Gallery', 'Photos of our recent work and facilities. Mr.Car Auto Repair in Tallinn.');
