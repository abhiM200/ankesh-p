// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add scroll event listener for nav highlighting
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(45, 55, 72, 0.95)';
    } else {
        nav.style.backgroundColor = '#2d3748';
    }
});