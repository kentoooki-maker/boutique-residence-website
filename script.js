document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for delicate fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // Unobserve after animating in once for performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Force trigger elements that are already in the viewport on load
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                el.classList.add('in-view');
            }
        });
    }, 150);

    // 2. Dynamic Navbar behavior on scroll
    const navbar = document.getElementById('navbar');
    const heroSection = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        // Simple parallax for hero image
        const scrolled = window.scrollY;
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg && scrolled < window.innerHeight) {
            parallaxBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
        }

        // Navbar blur effect
        if (scrolled > 50) {
            navbar.classList.add('backdrop-blur-md', 'bg-[#F8F6F2]/90', 'shadow-sm', 'border-b', 'border-accent/5');
            navbar.classList.remove('py-8');
            navbar.classList.add('py-4');
            
            // Remove mix-blend-mode on light background
            navbar.querySelectorAll('.nav-text').forEach(el => {
                el.classList.remove('mix-blend-difference', 'text-white');
                el.classList.add('text-accent');
            });
        } else {
            navbar.classList.remove('backdrop-blur-md', 'bg-[#F8F6F2]/90', 'shadow-sm', 'border-b', 'border-accent/5');
            navbar.classList.remove('py-4');
            navbar.classList.add('py-8');
            
            // Restore mix-blend-mode
            navbar.querySelectorAll('.nav-text').forEach(el => {
                el.classList.remove('text-accent');
                el.classList.add('mix-blend-difference', 'text-white');
            });
        }
    });
});
