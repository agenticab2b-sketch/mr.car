import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';

document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    try {
        const response = await fetch('/gallery-data.json');
        if (!response.ok) throw new Error('Failed to load gallery data');
        const images = await response.json();

        // Clear loader
        grid.innerHTML = '';

        // Render images
        const fragment = document.createDocumentFragment();

        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            // Staggering effect on staggered load
            item.style.transitionDelay = \`\${(index % 8) * 0.05}s\`;

            item.innerHTML = \`
                <a href="\${img.src}" 
                   class="gallery-item__link" 
                   data-pswp-width="\${img.width}" 
                   data-pswp-height="\${img.height}" 
                   target="_blank">
                    <img src="\${img.src}" 
                         alt="\${img.alt}" 
                         class="gallery-item__img" 
                         loading="lazy"
                         width="\${img.width}"
                         height="\${img.height}">
                </a>
            \`;
            fragment.appendChild(item);
        });

        grid.appendChild(fragment);

        // Intersection Observer for scroll motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (!prefersReducedMotion) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { 
                rootMargin: '0px 0px -50px 0px', // trigger slightly before it comes into view
                threshold: 0.1
            });

            document.querySelectorAll('.gallery-item').forEach(item => {
                observer.observe(item);
            });
        }

        // Initialize PhotoSwipe
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery-grid',
            children: 'a.gallery-item__link',
            pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js'),
            padding: { top: 20, bottom: 20, left: 20, right: 20 },
            bgOpacity: 0.9,
            // Director's polish: subtle zoom transition
            showHideAnimationType: 'zoom',
        });
        
        lightbox.init();

    } catch (error) {
        console.error('Gallery initialization error:', error);
        grid.innerHTML = '<div style="color:red; text-align:center; padding:40px;">Galerii laadimine ebaõnnestus. Palun proovige hiljem uuesti.</div>';
    }
});
