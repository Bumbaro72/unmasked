// Enhanced scroll animations
function handleScrollAnimations() {
    const sections = [
        { element: document.querySelector('#overview'), class: 'revealed' },
        { element: document.querySelector('#why'), class: 'revealed' },
        { element: document.querySelector('#join'), class: 'revealed' }
    ];

    sections.forEach(({ element, class: className }) => {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
            element.classList.add(className);
        }
    });

// Progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.querySelector('.progress-bar').style.width = (winScroll / height) * 100 + '%';

    // Update active jump button
    document.querySelectorAll('section, footer').forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
            document.querySelectorAll('.jump-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.jump-btn')[index].classList.add('active');
        }
    });
}

// Initialize on load and scroll
window.addEventListener('load', handleScrollAnimations);
window.addEventListener('scroll', handleScrollAnimations);

// Jump to section functionality
document.querySelectorAll('.jump-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.getAttribute('data-section');
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});