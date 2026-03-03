const fs = require('fs');
const path = require('path');

const domain = 'https://mrcar.ee';
const rootDir = __dirname;
const sitemapPath = path.join(rootDir, 'sitemap.xml');

const ignoreDirs = ['node_modules', '.git', '.agent', '.agents', '_agent', '_agents', 'partials', 'styles', 'scripts', 'temp_docs'];
const ignoreFiles = ['404.html', 'homepage.html', 'service.html', 'service.template.html'];

function walkDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!ignoreDirs.includes(file)) {
                walkDir(filePath, fileList);
            }
        } else if (file.endsWith('.html') && !file.startsWith('_') && !ignoreFiles.includes(file)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const htmlFiles = walkDir(rootDir);

let urls = '';
const today = new Date().toISOString().split('T')[0];

htmlFiles.forEach(file => {
    // Get relative path from root
    let relativePath = path.relative(rootDir, file).replace(/\\/g, '/');

    // index.html at root should just be /
    if (relativePath === 'index.html') relativePath = '';
    // ru/index.html should be ru/
    if (relativePath === 'ru/index.html') relativePath = 'ru/';
    // en/index.html should be en/
    if (relativePath === 'en/index.html') relativePath = 'en/';

    const url = `${domain}/${relativePath}`;

    urls += `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${relativePath === '' || relativePath === 'ru/' || relativePath === 'en/' ? '1.0' : '0.8'}</priority>
  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap);
console.log('Sitemap generated successfully at ' + sitemapPath);
