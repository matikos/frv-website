
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const logo = document.querySelector('.logo-main');
    const contactLink = document.querySelector('.contact-link');
    const capabilitiesSection = document.querySelector('.capabilities');
    const capabilityItems = document.querySelectorAll('.cap-item');
    const otherSections = [document.querySelector('header'), document.querySelector('.hero'), document.querySelector('footer')];

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

    // 3. Desktop-only hover glow
    if (!isTouchDevice()) {
        contactLink.addEventListener('mouseenter', () => {
            logo.classList.add('glow-once');
            setTimeout(() => logo.classList.remove('glow-once'), 1700);
        });
    }

    // 4. Touch-specific interactions
    if (isTouchDevice()) {
        // Logo tap: temporary glow
        logo.addEventListener('click', () => {
            logo.classList.add('glow-once');
            setTimeout(() => logo.classList.remove('glow-once'), 1700);
        });

        // Logo press-and-hold: persistent glow
        logo.addEventListener('touchstart', () => logo.classList.add('glow-hold'), { passive: true });
        logo.addEventListener('touchend', () => logo.classList.remove('glow-hold'));

        // Tap capabilities section to blur others
        if (capabilitiesSection) {
            capabilitiesSection.addEventListener('click', () => {
                const isBlurred = otherSections[0].classList.contains('section-blur');
                otherSections.forEach(section => {
                    section.classList.toggle('section-blur', !isBlurred);
                });
            });
        }

        // Press-and-hold a capability item to scale it
        capabilityItems.forEach(item => {
            item.addEventListener('touchstart', () => item.classList.add('is-pressed'), { passive: true });
            item.addEventListener('touchend', () => item.classList.remove('is-pressed'));
        });
    }
});
