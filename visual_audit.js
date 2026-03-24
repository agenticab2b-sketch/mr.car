const { chromium } = require('playwright');
const fs = require('fs');

const urls = [
    'http://localhost:5000/galerii',
    'http://localhost:5000/ru/services/remont-mkpp',
    'http://localhost:5000/ru/services/remont-akpp',
    'http://localhost:5000/services/kasikasti-remont',
    'http://localhost:5000/services/automaatkasti-remont',
    'http://localhost:5000/en/services/manual-transmission-repair'
];

async function runAudit() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const errors = [];

    for (const url of urls) {
        const page = await context.newPage();
        console.log(`Auditing ${url}...`);
        
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(`[${url}] Console Error: ${msg.text()}`);
            }
        });

        page.on('pageerror', error => {
            errors.push(`[${url}] Page Error: ${error.message}`);
        });

        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            const name = url.replace(/http:\/\/localhost:5000\//, '').replace(/\//g, '_') || 'home';
            await page.screenshot({ path: `audit_${name}.png`, fullPage: false });
            console.log(`Screenshot saved for ${url}`);
        } catch (e) {
            errors.push(`[${url}] Navigation Error: ${e.message}`);
        }
        await page.close();
    }

    await browser.close();

    if (errors.length > 0) {
        console.log('\n--- FOUND ERRORS ---');
        errors.forEach(err => console.error(err));
    } else {
        console.log('\nNo console or page errors found.');
    }
}

runAudit();
