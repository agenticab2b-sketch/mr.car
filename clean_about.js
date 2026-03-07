const fs = require('fs');

function cleanFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const mainEndIdx = content.indexOf('</main>');
    if (mainEndIdx !== -1) {
        // Find the start of the footer after the first </main>
        const footerCommentIdx = content.indexOf('<!-- ========================================\r\n       FOOTER', mainEndIdx + 1);
        if (footerCommentIdx !== -1) {
            const orphanedStart = mainEndIdx + '</main>'.length;
            content = content.slice(0, orphanedStart) + '\r\n\r\n    ' + content.slice(footerCommentIdx);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Cleaned (windows endings) - ' + filePath);
        } else {
            const footerCommentIdx2 = content.indexOf('<!-- ========================================\n       FOOTER', mainEndIdx + 1);
            if (footerCommentIdx2 !== -1) {
                const orphanedStart = mainEndIdx + '</main>'.length;
                content = content.slice(0, orphanedStart) + '\n\n    ' + content.slice(footerCommentIdx2);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log('Cleaned (unix endings) - ' + filePath);
            } else {
                console.log('Footer comment not found in ' + filePath);
            }
        }
    } else {
        console.log('No </main> found in ' + filePath);
    }
}

cleanFile('ru/o-nas.html');
cleanFile('en/about.html');
console.log('Done cleaning');
