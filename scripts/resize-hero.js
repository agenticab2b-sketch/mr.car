const sharp = require('sharp');

async function resizeImage() {
    try {
        await sharp('pics/hero-mobile.webp')
            .resize({
                width: 720,
                height: 540,
                fit: 'cover',
                position: 'center'
            })
            .webp({ quality: 80 })
            .toFile('pics/hero-mobile-new.webp');
        console.log('Image resized successfully.');
    } catch (error) {
        console.error('Error resizing image:', error);
    }
}

resizeImage();
