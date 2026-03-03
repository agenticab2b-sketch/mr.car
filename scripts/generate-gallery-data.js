const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const galleryDir = path.join(__dirname, '../gallery-avif');
const outputFile = path.join(__dirname, '../gallery-data.json');

// Supported image extensions
const supportedExtensions = ['.avif'];

async function generateGalleryData() {
    try {
        if (!fs.existsSync(galleryDir)) {
            console.error(`Error: Gallery directory not found at ${galleryDir}`);
            return;
        }

        const files = fs.readdirSync(galleryDir);
        const images = [];

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (supportedExtensions.includes(ext)) {
                const filePath = path.join(galleryDir, file);
                try {
                    const metadata = await sharp(filePath).metadata();
                    images.push({
                        src: `/gallery-avif/${file}`,
                        width: metadata.width,
                        height: metadata.height,
                        alt: `Gallery image - ${file}`
                    });
                } catch (err) {
                    console.warn(`Warning: Could not read dimensions for ${file}: ${err.message}`);
                }
            }
        }

        fs.writeFileSync(outputFile, JSON.stringify(images, null, 2), 'utf8');
        console.log(`Successfully generated gallery-data.json with ${images.length} images.`);
    } catch (error) {
        console.error('Error generating gallery data:', error);
    }
}

generateGalleryData();
