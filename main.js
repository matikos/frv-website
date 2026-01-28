
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const logo = document.querySelector('.logo-main');
    const contactLink = document.querySelector('.contact-link');
    const capabilityItems = document.querySelectorAll('.cap-item');

    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // 1. Trigger page-load animations
    body.classList.add('is-loading');
    setTimeout(() => body.classList.remove('is-loading'), 1200);

    // 2. Handle the scroll-in animation for capability items
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    capabilityItems.forEach(item => observer.observe(item));

    // 3. Universal click/tap interaction to blur other items
    capabilityItems.forEach(tappedItem => {
        tappedItem.addEventListener('click', () => {
            const isActive = tappedItem.classList.contains('is-active');

            // First, reset all items
            capabilityItems.forEach(item => {
                item.classList.remove('is-active');
                item.classList.remove('item-blur');
            });

            // If the tapped item was not already active, activate it and blur others
            if (!isActive) {
                tappedItem.classList.add('is-active');
                capabilityItems.forEach(item => {
                    if (item !== tappedItem) {
                        item.classList.add('item-blur');
                    }
                });
            }
        });
    });

    // 4. Desktop-only hover glow
    if (!isTouchDevice()) {
        contactLink.addEventListener('mouseenter', () => {
            logo.classList.add('glow-once');
            setTimeout(() => logo.classList.remove('glow-once'), 1700);
        });
    }

    // 5. Touch-specific interactions
    if (isTouchDevice()) {
        // Logo tap: temporary glow
        logo.addEventListener('click', () => {
            logo.classList.add('glow-once');
            setTimeout(() => logo.classList.remove('glow-once'), 1700);
        });

        // Logo press-and-hold: persistent glow
        logo.addEventListener('touchstart', () => logo.classList.add('glow-hold'), { passive: true });
        logo.addEventListener('touchend', () => logo.classList.remove('glow-hold'));

        // Press-and-hold a capability item to scale it
        capabilityItems.forEach(item => {
            item.addEventListener('touchstart', () => item.classList.add('is-pressed'), { passive: true });
            item.addEventListener('touchend', () => item.classList.remove('is-pressed'));
        });
    }
});
