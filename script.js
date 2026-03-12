document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const themeToggle = document.getElementById('themeToggle');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('.nav-link');

    initTheme();
    setDates();
    createParticles();
    addRippleEffect();
    addMagneticEffect();
    addScrollAnimations();

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        const scrollY = window.pageYOffset;

        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        updateActiveNav(scrollY);
    }

    function updateActiveNav(scrollY) {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinksArray.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    themeToggle.addEventListener('click', toggleTheme);

    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            updateThemeIcon('dark');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert('感谢您的留言！我会尽快回复您。\n\n姓名: ' + name + '\n邮箱: ' + email + '\n留言: ' + message);
        contactForm.reset();
    });

    function setDates() {
        const currentYear = document.getElementById('currentYear');
        const lastUpdated = document.getElementById('lastUpdated');
        
        if (currentYear) {
            currentYear.textContent = new Date().getFullYear();
        }
        
        if (lastUpdated) {
            const date = new Date(document.lastModified);
            lastUpdated.textContent = date.toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }

    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);

        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }



    function addRippleEffect() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.classList.add('ripple');
        });
    }

    function addMagneticEffect() {
        const magneticElements = document.querySelectorAll('.hero-buttons .btn, .hero-social a, .portfolio-card');
        magneticElements.forEach(el => {
            el.classList.add('magnetic');
            
            el.addEventListener('mousemove', function(e) {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });

            el.addEventListener('mouseleave', function() {
                el.style.transform = '';
            });
        });
    }

    function addScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, observerOptions);

        const portfolioCards = document.querySelectorAll('.portfolio-card');
        portfolioCards.forEach((card, index) => {
            card.classList.add(index % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
            observer.observe(card);
        });

        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.classList.add('scale-in');
            observer.observe(item);
        });

        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            aboutContent.classList.add('fade-in');
            observer.observe(aboutContent);
        }

        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            skillsSection.classList.add('fade-in');
            observer.observe(skillsSection);
        }

        const contactItems = document.querySelectorAll('.contact-item');
        contactItems.forEach(item => {
            item.classList.add('fade-in');
            observer.observe(item);
        });

        const contactFormEl = document.querySelector('.contact-form');
        if (contactFormEl) {
            contactFormEl.classList.add('fade-in');
            observer.observe(contactFormEl);
        }
    }
});
