/**
 * Services Listing Page Logic
 * Handles searching, tag filtering, and reveal motion.
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('listingSearch');
    const filterChips = document.querySelectorAll('.filter-chip');
    const cards = document.querySelectorAll('.listing-card');
    const noResults = document.getElementById('noResults');
    const chipsContainer = document.querySelector('.finder-filters');

    let currentFilter = 'all';

    function filterCards() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        let visibleCount = 0;

        cards.forEach(card => {
            const cardGroup = card.getAttribute('data-group') || '';
            const cardTitle = card.querySelector('.listing-card__title').textContent.toLowerCase();
            const cardTagsMatch = Array.from(card.querySelectorAll('.listing-tag'))
                .some(tag => tag.textContent.toLowerCase().includes(query));
            const cardDescMatch = card.querySelector('.listing-card__desc').textContent.toLowerCase().includes(query);
            const cardListMatch = Array.from(card.querySelectorAll('.listing-card__list li'))
                .some(li => li.textContent.toLowerCase().includes(query));

            const matchesFilter = currentFilter === 'all' || cardGroup === currentFilter;
            const matchesSearch = query === '' || cardTitle.includes(query) || cardTagsMatch || cardDescMatch || cardListMatch;

            if (matchesFilter && matchesSearch) {
                card.style.display = 'flex';
                // Trigger reflow to restart animation softly if needed, but display flex alone is fine
                // with transform logic handled by css
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        // Re-observe visible cards for staggered reveal 
        observeCards();
    }

    // Event Listeners for Filters
    if (chipsContainer) {
        chipsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-chip')) {
                // Update active state
                filterChips.forEach(chip => chip.classList.remove('active'));
                e.target.classList.add('active');

                currentFilter = e.target.getAttribute('data-filter');
                filterCards();
            }
        });
    }

    // Event Listener for Search
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            // Reset chips if searching heavily? Optional. Let's keep them combined.
            filterCards();
        });
    }

    // Reveal Motion Logic (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let staggerDelay = 0;
    let staggerTimeout = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Only stagger if prefers-reduced-motion is false
                const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                if (!isReduced) {
                    setTimeout(() => {
                        target.classList.add('is-visible');
                    }, staggerDelay * 100); // 100ms stagger between cards appearing at the same time

                    staggerDelay++;

                    clearTimeout(staggerTimeout);
                    staggerTimeout = setTimeout(() => {
                        staggerDelay = 0;
                    }, 500); // Reset stagger delay after half a second of no new intersections
                } else {
                    target.classList.add('is-visible');
                }

                observer.unobserve(target); // Only trigger once
            }
        });
    }, observerOptions);

    function observeCards() {
        staggerDelay = 0; // reset
        cards.forEach(card => {
            // Only observe visible elements
            if (card.style.display !== 'none' && !card.classList.contains('is-visible')) {
                observer.observe(card);
            }
        });
    }

    // Initialize
    observeCards();
});
