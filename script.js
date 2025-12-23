// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Create multiple shooting stars dynamically
function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
        top: ${Math.random() * 50}%;
        right: ${Math.random() * 30}%;
    `;
    
    document.querySelector('.shooting-stars').appendChild(shootingStar);
    
    const animation = shootingStar.animate([
        { 
            transform: 'translate(0, 0) rotate(45deg)',
            opacity: 1
        },
        { 
            transform: 'translate(-500px, 500px) rotate(45deg)',
            opacity: 0
        }
    ], {
        duration: 3000,
        easing: 'linear'
    });
    
    animation.onfinish = () => shootingStar.remove();
}

// Create shooting stars at intervals
setInterval(createShootingStar, 4000);
// Create initial shooting stars
for (let i = 0; i < 3; i++) {
    setTimeout(createShootingStar, i * 1500);
}

// Scroll animations for fade-in elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Header background change on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 14, 39, 0.95)';
        header.style.boxShadow = '0 5px 30px rgba(0, 217, 255, 0.3)';
    } else {
        header.style.background = 'rgba(10, 14, 39, 0.8)';
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Active navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.style.color = 'var(--primary)';
                navLink.style.textShadow = '0 0 10px rgba(0, 217, 255, 0.5)';
            } else {
                navLink.style.color = 'var(--text)';
                navLink.style.textShadow = 'none';
            }
        }
    });
});

// Profile photo is now static - edit in HTML to change
// No upload functionality for security

// Parallax effect for moon
let moonElement = document.querySelector('.moon-float');
window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    if (moonElement) {
        moonElement.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Console message
console.log('%c🚀 Welcome to Space! ', 'background: #00d9ff; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c👨‍🚀 Portfolio Developer Muda', 'font-size: 14px; color: #7b2cbf;');