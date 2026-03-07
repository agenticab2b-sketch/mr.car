const fs = require('fs');
const path = require('path');

const files = ['index.html', 'ru/index.html', 'en/index.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Relocate GTM Script
    const gtmRegex = / *<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->\n*/;
    const gtmMatch = content.match(gtmRegex);
    if (gtmMatch) {
        let gtmBlock = gtmMatch[0];
        content = content.replace(gtmBlock, '');

        let styleEndIndex = content.indexOf('</style>');
        if (styleEndIndex !== -1) {
            content = content.slice(0, styleEndIndex + 8) + '\n' + gtmBlock + content.slice(styleEndIndex + 8);
        } else {
            content = content.replace('</head>', gtmBlock + '</head>');
        }
    }

    // 2. Video optimization
    const videoRegex = /<video autoplay muted loop playsinline preload="metadata"([\s\S]*?)>[\s\S]*?<source src="\/video\/master_ratchet_vp9_crf28.webm" type="video\/webm">[\s\S]*?<source src="\/video\/master_ratchet_h264_crf28.mp4" type="video\/mp4">[\s\S]*?<\/video>/;

    // Check if hasn't been replaced yet
    if (videoRegex.test(content)) {
        const replacementVideo = `<video id="heroVideo" muted loop playsinline preload="none"$1>
                    <!-- sources load via JS purely to save LCP bandwidth -->
                </video>`;
        content = content.replace(videoRegex, replacementVideo);

        const scriptToAdd = `
    <!-- Lazy load hero video after LCP to preserve mobile bandwidth -->
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            var v = document.getElementById("heroVideo");
            if (v) {
                var delay = window.innerWidth < 768 ? 3000 : 0;
                setTimeout(function () {
                    v.innerHTML = '<source src="/video/master_ratchet_vp9_crf28.webm" type="video/webm"><source src="/video/master_ratchet_h264_crf28.mp4" type="video/mp4">';
                    v.load();
                    var playPromise = v.play();
                    if(playPromise !== undefined) {
                        playPromise.catch(function(e) { });
                    }
                }, delay);
            }
        });
    </script>
</body>`;
        content = content.replace('</body>', scriptToAdd);
    }

    // 3. Lazy load mr-car-logo.avif
    const imgRegex = /<img src="\/homepage_pics\/mr-car-logo\.avif" alt="([^"]+)">/;
    if (imgRegex.test(content)) {
        content = content.replace(imgRegex, '<img src="/homepage_pics/mr-car-logo.avif" alt="$1" loading="lazy">');
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log('Processed:', file);
});
