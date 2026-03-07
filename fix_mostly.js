const fs = require('fs');

// ---- Fix meist.html: Remove orphaned old sections after </main> ----
let content = fs.readFileSync('meist.html', 'utf8');
// The new </main> is at line ~482, then the old content follows until the second </main>
// We need to remove the text between the first </main> and the second </main>
// Pattern: remove everything between first </main> and the footer comment
const mainEndIdx = content.indexOf('</main>');
if (mainEndIdx !== -1) {
    const footerCommentIdx = content.indexOf('<!-- ========================================\r\n       FOOTER', mainEndIdx + 1);
    if (footerCommentIdx !== -1) {
        // Remove the orphaned content between first </main> and footer
        const orphanedStart = mainEndIdx + '</main>'.length;
        const orphanedEnd = footerCommentIdx;
        content = content.slice(0, orphanedStart) + '\r\n\r\n    ' + content.slice(orphanedEnd);
        fs.writeFileSync('meist.html', content, 'utf8');
        console.log('Cleaned meist.html - removed orphaned sections');
    } else {
        // Try unix line endings
        const footerCommentIdx2 = content.indexOf('<!-- ========================================\n       FOOTER', mainEndIdx + 1);
        if (footerCommentIdx2 !== -1) {
            const orphanedStart = mainEndIdx + '</main>'.length;
            content = content.slice(0, orphanedStart) + '\n\n    ' + content.slice(footerCommentIdx2);
            fs.writeFileSync('meist.html', content, 'utf8');
            console.log('Cleaned meist.html (unix endings)');
        } else {
            console.log('Footer comment not found – check manually');
        }
    }
}
console.log('Done');
