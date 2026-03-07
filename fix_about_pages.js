const fs = require('fs');
const path = require('path');

// 1. Fix the links in ru/ and en/ files where 'href="/meist.html"' was inappropriately applied
function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory && f !== 'node_modules' && f !== '.git' && f !== '.agent' && f !== '.gemini' && f !== '.firebase') {
            walk(dirPath, callback);
        } else if (!isDirectory && f.endsWith('.html')) {
            callback(dirPath);
        }
    });
}

walk('.', (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    const normalizedPath = filePath.replace(/\\/g, '/');

    if (normalizedPath.startsWith('ru/')) {
        content = content.replace(/href="\/meist\.html"/g, 'href="/ru/o-nas.html"');
    } else if (normalizedPath.startsWith('en/')) {
        content = content.replace(/href="\/meist\.html"/g, 'href="/en/about.html"');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed links in: ' + filePath);
    }
});

// 2. Fix meist.html - it was a duplicate of kontakt.html, so we rewrite it properly
let kontaktContent = fs.readFileSync('kontakt.html', 'utf8');

let newMeta = `
    <title>Meist — Mr.Car Autoteenindus Tallinnas</title>
    <!-- Canonical & hreflang -->
    <link rel="canonical" id="canonicalLink" href="https://www.mrcar.ee/meist.html">
    <link rel="alternate" hreflang="et" href="https://www.mrcar.ee/meist.html">
    <link rel="alternate" hreflang="ru" href="https://www.mrcar.ee/ru/o-nas.html">
    <link rel="alternate" hreflang="en" href="https://www.mrcar.ee/en/about.html">
    <link rel="alternate" hreflang="x-default" href="https://www.mrcar.ee/meist.html">

    <!-- Open Graph -->
    <meta property="og:type" content="business.business">
    <meta property="og:title" content="Meist — Mr.Car Autoteenindus Tallinnas">
    <meta property="og:description"
        content="Mr.Car autoremont Tallinnas on kaasaegne ja usaldusväärne autoteenindus. Pakume sõiduautode hooldust ja remonti.">
    <meta property="og:url" id="ogUrl" content="https://www.mrcar.ee/meist.html">
    <meta property="og:image" content="https://www.mrcar.ee/og-image.jpg">
    <meta property="og:locale" content="et_EE">
`;

kontaktContent = kontaktContent.replace(/<title>.*?<\/title>[\s\S]*?(?=<link rel="stylesheet")/m, newMeta + '    ');
kontaktContent = kontaktContent.replace(/<meta name="description".*?>/m, '<meta name="description" content="Mr.Car autoremont Tallinnas on kaasaegne ja usaldusväärne autoteenindus. Pakume sõiduautode hooldust ja remonti.">');

let newMain = `    <!-- MAIN CONTENT -->
    <main id="about-main">
        <!-- HERO -->
        <section class="prices-hero">
            <nav aria-label="Breadcrumb" style="display: flex; justify-content: center;">
                <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope
                        itemtype="https://schema.org/ListItem">
                        <a href="/" class="breadcrumbs__link" itemprop="item"><span itemprop="name">Avaleht</span></a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="breadcrumbs__item"><span class="breadcrumbs__separator">›</span></li>
                    <li class="breadcrumbs__item breadcrumbs__item--current" itemprop="itemListElement" itemscope
                        itemtype="https://schema.org/ListItem">
                        <span itemprop="name">Meist</span>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </nav>
            <h1 class="prices-hero__title">Mr.Car autoteenindus</h1>
            <p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">Meie eesmärk on pakkuda autoremonti, mille puhul klient saab olla kindel nii töö kvaliteedis kui ka selges suhtluses.</p>
        </section>

        <section class="site-container"
            style="padding: 40px var(--container-padding); max-width: 800px; margin: 0 auto; color: var(--text-main); line-height: 1.6; font-size: 1.125rem;">

            <p><strong>Mr.Car autoremont Tallinnas</strong> on kaasaegne ja usaldusväärne autoteenindus, mis tegutseb ametlikult ettevõtte Anet Eesti OÜ all. Pakume sõiduautode ja kaubikute hooldust ning remonti, aidates Tallinna ja Harjumaa autoomanikel hoida oma sõidukid turvalised, töökindlad ja tehniliselt korras aastaringselt.</p>

            <div style="height: 32px;"></div>

            <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 900; color: var(--text-main); margin-bottom: 24px; text-transform: uppercase;">Läbimõeldud ja korrektne tööprotsess</h2>
            <p>Mr.Car autoteeninduses Tallinnas põhineb iga töö selgel ja professionaalsel protsessil. Hooldus- ja remonditööd tehakse vastavalt autotootjate tehnilistele nõuetele ning dokumentatsioonile.</p>
            <p>Järgime remonditehnoloogiat ja tööde õiget järjekorda, et tulemus oleks vastupidav ning auto töötaks pärast remonti nii, nagu peab. Me ei kasuta ajutisi ega lihtsustatud lahendusi, kui need võivad mõjutada sõiduki ohutust, töökindlust või edasist kasutamist.</p>

            <div style="height: 32px;"></div>

            <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 900; color: var(--text-main); margin-bottom: 24px; text-transform: uppercase;">Autoteeninduse teenused Tallinnas</h2>
            <p>Mr.Car autoteenindus pakub laias valikus autohooldus- ja remonditeenuseid:</p>
            <ul style="list-style-type: none; margin-left: 0; padding-left: 0; margin-bottom: 24px; display: grid; gap: 12px;">
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>regulaarne tehnohooldus (õlivahetus, filtrid, rihmad)</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>mootori ja käigukasti remont</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>pidurisüsteemi ja veermiku remont</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>summutite ja väljalaskesüsteemi detailide remont ning valmistamine</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>keevitustööd</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>sillastend</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>kliima- ja konditsioneerisüsteemi hooldus ja täitmine</li>
            </ul>
            <p>Lisaks teostame:</p>
            <ul style="list-style-type: none; margin-left: 0; padding-left: 0; margin-bottom: 24px; display: grid; gap: 12px;">
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>autode arvutidiagnostikat</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>elektroonikasüsteemide kodeerimist</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>Webasto paigaldust ja hooldust</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>kaugkäivituse paigaldust</li>
                <li style="position: relative; padding-left: 24px;"><iconify-icon icon="mdi:check" style="color: var(--accent-primary); position: absolute; left: 0; top: 4px;"></iconify-icon>mitmesuguseid tehnilisi lahendusi (retrofitting, ümberehitused)</li>
            </ul>
            <p>Vajadusel pakume ka detailing-teenuseid, et auto näeks välja sama hea, kui hästi see sõidab.</p>

            <div style="height: 32px;"></div>

            <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 900; color: var(--text-main); margin-bottom: 24px; text-transform: uppercase;">Selge ja aus suhtlus</h2>
            <p>Peame oluliseks läbipaistvat ja avatud kliendisuhtlust. Enne tööde alustamist selgitame auto tehnilist seisukorda, arutame läbi vajalikud tööd ja lepime kokku eeldatavas maksumuses.</p>
            <p>Remondiprotsessi käigus anname ülevaate tehtavast ning pärast tööde lõpetamist saad selge selgituse, mis autoga tehti.</p>

            <div style="height: 32px;"></div>

            <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 900; color: var(--text-main); margin-bottom: 24px; text-transform: uppercase;">Klientide usaldus</h2>
            <p>Meie töö kvaliteeti kinnitab klientide tagasiside – Google’i hinnang 4,9 tärni, mis põhineb sadadel reaalsetel hinnangutel.</p>

            <div style="height: 32px;"></div>

            <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 900; color: var(--text-main); margin-bottom: 24px; text-transform: uppercase;">Usaldusväärne autoteenindus Tallinnas</h2>
            <p>Kui otsid Tallinnas autoteenindust, kus kohtuvad professionaalne lähenemine, aus suhtumine klienti ja püsiv kvaliteet, on Mr.Car Sinu kindel valik.</p>
            
            <div style="height: 48px;"></div>
            
            <div style="text-align: center;">
                <a href="/kontakt" class="btn btn-primary" style="display: inline-flex;">Broneeri aeg <span class="arrow">↗</span></a>
            </div>

        </section>

    </main>`;

kontaktContent = kontaktContent.replace(/<main id="contact-main">[\s\S]*?<\/main>/, newMain);
kontaktContent = kontaktContent.replace(/href="#contact-main"/g, 'href="#about-main"');

fs.writeFileSync('meist.html', kontaktContent, 'utf8');
console.log('Fixed meist.html properly!');
