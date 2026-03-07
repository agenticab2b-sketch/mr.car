const fs = require('fs');
const path = require('path');

const files = [
    { file: 'ru/o-nas.html', rating: '4,9 ★', rText: 'Рейтинг Google', clients: '500+', cText: 'Довольных клиентов', warranty: '100%', wText: 'Гарантия на работы', company: 'Anet Eesti OÜ', coText: 'Kopli 82a, Tallinn' },
    { file: 'en/about.html', rating: '4.9 ★', rText: 'Google Rating', clients: '500+', cText: 'Satisfied Clients', warranty: '100%', wText: 'Work Warranty', company: 'Anet Eesti OÜ', coText: 'Kopli 82a, Tallinn' },
    { file: 'meist.html', rating: '4,9 ★', rText: 'Google hinnang', clients: '500+', cText: 'Rahulolev klient', warranty: '100%', wText: 'Garantii töödele', company: 'Anet Eesti OÜ', coText: 'Kopli 82a, Tallinn' }
];

files.forEach(item => {
    const filePath = path.join(__dirname, item.file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${item.file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    const replaceText = `        <div style="background: var(--bg-surface); border-top: 1px solid var(--border-grid); border-bottom: 1px solid var(--border-grid);">
            <div class="site-container stats-strip">
                <div class="stats-strip__item">
                    <div class="stats-strip__value">${item.rating}</div>
                    <div class="stats-strip__label">${item.rText}</div>
                </div>
                <div class="stats-strip__item">
                    <div class="stats-strip__value">${item.clients}</div>
                    <div class="stats-strip__label">${item.cText}</div>
                </div>
                <div class="stats-strip__item">
                    <div class="stats-strip__value">${item.warranty}</div>
                    <div class="stats-strip__label">${item.wText}</div>
                </div>
                <div class="stats-strip__item stats-strip__item--full">
                    <div class="stats-strip__value">${item.company}</div>
                    <div class="stats-strip__label">${item.coText}</div>
                </div>
            </div>
        </div>`;

    // Regex to match the stats strip block, regardless of what's inside
    // It starts with <!-- STATS STRIP --> (or with =====) and ends right before <!-- INTRO
    const regex = /<!-- *=* *STATS STRIP *=* *-->[\s\S]*?(?=<!-- *=* *INTRO \+ IMAGE *=* *-->)/;

    // Check if regex matches
    if (regex.test(content)) {
        const replacement = content.match(/<!-- *=* *STATS STRIP *=* *-->/)[0] + '\n' + replaceText + '\n\n        ';
        content = content.replace(regex, replacement);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${item.file}`);
    } else {
        console.log(`Could not find STATS STRIP block in ${item.file}`);
    }
});
