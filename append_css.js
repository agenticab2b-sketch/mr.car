const fs = require('fs');

const css = `

/* ============================================================
   STATS STRIP
   ============================================================ */
.stats-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
}

.stats-strip__item {
    padding: var(--space-lg) var(--space-sm);
    border-right: 1px solid var(--border-grid);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.stats-strip__item:nth-child(3) {
    border-right: none;
}

.stats-strip__value {
    font-family: var(--font-heading);
    font-size: clamp(1.25rem, 5vw, 2rem);
    font-weight: 900;
    color: var(--accent-primary);
    line-height: 1;
}

.stats-strip__label {
    font-size: 0.75rem;
    color: var(--text-dimmed);
    margin-top: 4px;
}

.stats-strip__item--full {
    grid-column: 1 / -1;
    border-top: 1px solid var(--border-grid);
    border-right: none;
    padding-top: var(--space-md);
    padding-bottom: var(--space-md);
}

@media (min-width: 500px) {
    .stats-strip__label {
        font-size: 0.8rem;
    }
}

@media (min-width: 768px) {
    .stats-strip {
        grid-template-columns: repeat(4, 1fr);
    }
    
    .stats-strip__item {
        padding: var(--space-lg) var(--space-md);
    }
    
    .stats-strip__item:nth-child(3) {
        border-right: 1px solid var(--border-grid);
    }
    
    .stats-strip__item--full {
        grid-column: auto;
        border-top: none;
        border-right: none;
        padding-top: var(--space-lg);
        padding-bottom: var(--space-lg);
    }
}
`;

fs.appendFileSync('c:\\Users\\bumbo\\Документы\\GitHub\\AntigravityAgents\\MrCar final\\style.css', css, 'utf8');
console.log('CSS appended');
