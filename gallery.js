import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';

async function initGallery() {
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

        const lang = document.documentElement.lang || 'et';
        const viewText = {
            'et': 'Vaata',
            'ru': 'Смотреть',
            'en': 'View'
        }[lang] || 'Vaata';

        images.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            // Staggering effect on staggered load
            item.style.transitionDelay = `${(index % 8) * 0.05}s`;

            item.innerHTML = `
                <a href="${img.src}" 
                   class="gallery-item__link" 
                   data-pswp-width="${img.width}" 
                   data-pswp-height="${img.height}" 
                   target="_blank">
                    <img src="${img.src}" 
                         alt="${img.alt}" 
                         class="gallery-item__img" 
                         loading="lazy"
                         width="${img.width}"
                         height="${img.height}">
                    <div class="gallery-item__overlay">
                        <span class="gallery-item__label">
                            <iconify-icon icon="mdi:magnify"></iconify-icon> ${viewText}
                        </span>
                    </div>
                </a>
            `;
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

        // PhotoSwipe Localization
        const pswpLocales = {
            'et': {
                closeTitle: 'Sule (Esc)',
                zoomTitle: 'Suumi sisse/välja',
                arrowPrevTitle: 'Eelmine (nool vasakule)',
                arrowNextTitle: 'Järgmine (nool paremale)',
                errorMsg: 'Pilti ei saanud laadida'
            },
            'ru': {
                closeTitle: 'Закрыть (Esc)',
                zoomTitle: 'Приблизить/Отдалить',
                arrowPrevTitle: 'Предыдущее (Стрелка влево)',
                arrowNextTitle: 'Следующее (Стрелка вправо)',
                errorMsg: 'Изображение не удалось загрузить'
            },
            'en': {
                closeTitle: 'Close (Esc)',
                zoomTitle: 'Zoom in/out',
                arrowPrevTitle: 'Previous (Arrow left)',
                arrowNextTitle: 'Next (Arrow right)',
                errorMsg: 'The image cannot be loaded'
            }
        };
        const pswpLocale = pswpLocales[lang] || pswpLocales['et'];

        // Initialize PhotoSwipe
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery-grid',
            children: 'a.gallery-item__link',
            pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js'),
            padding: { top: 20, bottom: 20, left: 20, right: 20 },
            bgOpacity: 0.9,
            // Director's polish: subtle zoom transition
            showHideAnimationType: prefersReducedMotion ? 'none' : 'zoom',

            closeTitle: pswpLocale.closeTitle,
            zoomTitle: pswpLocale.zoomTitle,
            arrowPrevTitle: pswpLocale.arrowPrevTitle,
            arrowNextTitle: pswpLocale.arrowNextTitle,
            errorMsg: pswpLocale.errorMsg
        });

        lightbox.init();

    } catch (error) {
        console.error('Gallery initialization error:', error);
        const lang = document.documentElement.lang || 'et';
        const errorText = {
            'et': 'Galerii laadimine ebaõnnestus. Palun proovige hiljem uuesti.',
            'ru': 'Не удалось загрузить галерею. Повторите попытку позже.',
            'en': 'Gallery loading failed. Please try again later.'
        }[lang] || 'Galerii laadimine ebaõnnestus. Palun proovige hiljem uuesti.';
        const grid = document.getElementById('gallery-grid');
        if (grid) {
            grid.innerHTML = `<div style="color:var(--accent-primary); text-align:center; padding:40px;">${errorText}</div>`;
        }
    }
}

initGallery();
