// Intersection Observer for Scroll Animations
const observeElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    const progressBar = document.querySelector('.progress-bar');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');


            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(element => {
        observer.observe(element);
    });
};

// Tabs Logic
const handleTabs = () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.add('hidden'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding content
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(`tab-${targetId}`).classList.remove('hidden');
        });
    });
};

// Scroll Logic
const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    const titleScreen = document.getElementById('hero');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        // Show/Hide Navbar
        if (scrolled > titleScreen.offsetHeight - 100) {
            navbar.classList.remove('hidden');
        } else {
            navbar.classList.add('hidden');
        }

        // Fade out scroll indicator
        if (scrolled > 150) {
            if (scrollIndicator) scrollIndicator.classList.add('hidden');
        } else {
            if (scrollIndicator) scrollIndicator.classList.remove('hidden');
        }
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
    handleTabs();
    handleScroll();
});
