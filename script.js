// ===================================
// Navigation Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Smooth Scroll Navigation
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Only handle internal links
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// Update Active Navigation Link
// ===================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===================================
// Scroll Animations (AOS - Animate On Scroll)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// ===================================
// Form Submission Handler
// ===================================
const contactForm = document.querySelector('.contact-form');
const newsletterForm = document.querySelector('.newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the data to a server
        console.log('Contact Form Submitted:', { name, email, message });

        // Show success message (you can customize this)
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = newsletterForm.querySelector('input[type="email"]').value;

        // Here you would typically send the data to a server
        console.log('Newsletter Subscription:', { email });

        // Show success message
        alert('Thank you for subscribing to our newsletter!');

        // Reset form
        newsletterForm.reset();
    });
}

// ===================================
// Parallax Effect for Hero Section
// ===================================
const heroBackground = document.querySelector('.hero-background img');

if (heroBackground) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const parallaxSpeed = 0.5;

        if (scrollPosition < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrollPosition * parallaxSpeed}px) scale(1.1)`;
        }
    });
}

// ===================================
// Service Cards Tilt Effect (Optional Enhancement)
// ===================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transition = 'transform 0.3s ease';
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===================================
// Gradient Animation for Hero Text
// ===================================
const gradientText = document.querySelector('.gradient-text');

if (gradientText) {
    let hue = 0;

    setInterval(() => {
        hue = (hue + 1) % 360;
        gradientText.style.filter = `hue-rotate(${hue * 0.1}deg)`;
    }, 50);
}

// ===================================
// Counter Animation for Stats (if needed)
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===================================
// Preloader (Optional)
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// Console Message
// ===================================
console.log('%c🚀 Etechaix Solutions Pvt. Ltd.', 'color: #06b6d4; font-size: 24px; font-weight: bold;');
console.log('%cDelivering cutting-edge development and AI-driven testing solutions', 'color: #94a3b8; font-size: 14px;');
// ===================================
// Mission Tabs Functionality
// ===================================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.mission-tab-content');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            const targetContent = document.getElementById(`${tabId}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ===================================
// Stats Counter Animation
// ===================================
const statsSection = document.querySelector('.stats-section');
const counters = document.querySelectorAll('.counter');
let started = false; // Function Started ? No

if (statsSection && counters.length > 0) {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= statsSection.offsetTop - 500) {
            if (!started) {
                counters.forEach((counter) => startCount(counter));
            }
            started = true;
        }
    });
}

function startCount(el) {
    let target = +el.getAttribute('data-target'); // Get target value
    // Handle float for ratings
    let isFloat = target % 1 !== 0;
    let count = 0;
    let speed = 200; // Lower is slower
    let step = target / speed;

    let updateCount = () => {
        count += step;

        if (count < target) {
            el.innerText = isFloat ? count.toFixed(1) : Math.ceil(count);
            setTimeout(updateCount, 20);
        } else {
            el.innerText = target;
        }
    };
    updateCount();
}

// ===================================
// Services Slider Functionality
// ===================================
const track = document.querySelector('.services-slider-track');
const slides = document.querySelectorAll('.service-slide-card');
const nextBtn = document.querySelector('.slider-arrow.next');
const prevBtn = document.querySelector('.slider-arrow.prev');
const progressBar = document.querySelector('.slider-progress-bar');

if (track && slides.length > 0) {
    let index = 0;

    function getSlidesPerView() {
        if (window.innerWidth <= 576) return 1;
        if (window.innerWidth <= 992) return 2;
        if (window.innerWidth <= 1200) return 3;
        return 4;
    }

    function updateSlider() {
        const slideToDisplay = getSlidesPerView();
        const maxIndex = slides.length - slideToDisplay;

        if (index > maxIndex) index = maxIndex;
        if (index < 0) index = 0;

        const slideWidth = slides[0].offsetWidth + 30; // slide width + gap
        track.style.transform = `translateX(-${index * slideWidth}px)`;

        // Update progress bar
        const progress = ((index + slideToDisplay) / slides.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    nextBtn.addEventListener('click', () => {
        const slideToDisplay = getSlidesPerView();
        const maxIndex = slides.length - slideToDisplay;

        if (index < maxIndex) {
            index++;
        } else {
            index = 0; // Loop back
        }
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        const slideToDisplay = getSlidesPerView();
        const maxIndex = slides.length - slideToDisplay;

        if (index > 0) {
            index--;
        } else {
            index = maxIndex; // Go to end
        }
        updateSlider();
    });

    // Auto Scrolling
    let autoScroll = setInterval(() => {
        nextBtn.click();
    }, 5000);

    // Pause on hover
    const sliderContainer = document.querySelector('.services-slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => clearInterval(autoScroll));
        sliderContainer.addEventListener('mouseleave', () => {
            clearInterval(autoScroll); // Clear just in case
            autoScroll = setInterval(() => {
                nextBtn.click();
            }, 5000);
        });
    }

    // Handle Resize
    window.addEventListener('resize', () => {
        index = 0; // Reset to avoid position errors
        updateSlider();
    });

    // Initial call
    updateSlider();
}

