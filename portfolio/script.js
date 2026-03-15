/**
 * Hamza Gökalp Portfolio - Vanilla JavaScript
 * Dynamic Gradient Future Design
 */

// Smooth scroll for navigation links
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

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    const scrollY = window.scrollY;
    
    if (heroBackground && scrollY < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill-card, .project-card, .experience-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add hover effects to cards
document.querySelectorAll('.skill-card, .project-card, .experience-card, .contact-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Button click handlers
document.querySelectorAll('.btn-project').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Proje linki yakında eklenecek!');
    });
});

// Contact button handlers
document.querySelector('.btn-primary')?.addEventListener('click', function(e) {
    if (this.href === '#') {
        e.preventDefault();
        alert('E-posta gönderiliyor...');
    }
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(15, 23, 41, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 23, 41, 0.8)';
    }
    
    lastScrollTop = scrollTop;
});

// Mobile menu toggle (if needed)
const navLinks = document.querySelector('.nav-links');
if (navLinks && window.innerWidth < 768) {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.gap = '0.5rem';
}

// Add scroll animations to section headers
document.querySelectorAll('.section-header').forEach(header => {
    observer.observe(header);
});

// Animate skill cards on scroll
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
});

// Animate project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
    }
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary)';
        } else {
            link.style.color = 'var(--text)';
        }
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll indicator animation
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > window.innerHeight * 0.5) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }, 100));
}

// Initialize animations on page load
window.addEventListener('load', () => {
    document.querySelectorAll('.skill-card, .project-card, .experience-card').forEach(el => {
        el.style.opacity = '1';
    });
});

// Add console message
console.log('%c🎨 Hamza Gökalp Portfolio', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with HTML, CSS & JavaScript', 'color: #9D4EDD; font-size: 14px;');
