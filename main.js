
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const logo = document.querySelector('.logo-main');
    const contactLink = document.querySelector('.contact-link');
    const capabilityItems = document.querySelectorAll('.cap-item');
    const mainContent = document.querySelector('main');

    const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    const resetCapabilityItems = () => {
        capabilityItems.forEach(item => {
            item.classList.remove('is-active');
            item.classList.remove('item-blur');
        });
    };

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
        tappedItem.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click from bubbling up to the main content
            const isActive = tappedItem.classList.contains('is-active');
            
            resetCapabilityItems();

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
    
    // Add a listener to the main content area to reset items when clicking outside
    mainContent.addEventListener('click', resetCapabilityItems);

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

        // Press-and-hold a capability item to scale it (FIXED)
        capabilityItems.forEach(item => {
            item.addEventListener('touchstart', () => item.classList.add('is-pressed'));
            item.addEventListener('touchend', () => item.classList.remove('is-pressed'));
        });
    }
});
