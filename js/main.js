// Minimal JavaScript for enhanced functionality
(function() {
    'use strict';

    // Smooth scrolling for anchor links (fallback for older browsers)
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // Use native smooth scrolling if supported
                    if ('scrollBehavior' in document.documentElement.style) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    } else {
                        // Fallback for older browsers
                        const targetPosition = target.offsetTop - 70; // Account for sticky nav
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    // Theme toggle functionality
    function initThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle-fixed');
        const html = document.documentElement;
        
        // Get saved theme or default to system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Set initial theme
        if (savedTheme) {
            html.setAttribute('data-theme', savedTheme);
        } else if (systemPrefersDark) {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
        }
        
        // Toggle theme on button click
        themeToggle.addEventListener('click', function() {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Add animation class for smooth transition
            html.style.transition = 'color 0.3s ease, background-color 0.3s ease';
            setTimeout(() => {
                html.style.transition = '';
            }, 300);
        });
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!localStorage.getItem('theme')) {
                html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
            }
        });
    }


    // FAQ toggle functionality (if we add expand/collapse later)
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            // For future enhancement - could add click to expand/collapse
            item.addEventListener('click', function() {
                // Placeholder for future FAQ toggle functionality
            });
        });
    }

    // Form handling for contact forms (if added later)
    function initForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                // Basic form validation would go here
                // For now, we're using mailto links
            });
        });
    }

    // Accessibility enhancements
    function initAccessibility() {
        // Skip link for keyboard navigation
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--accent-primary);
            color: white;
            padding: 8px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            z-index: 1000;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main landmark if not present
        const main = document.querySelector('main');
        if (main && !main.id) {
            main.id = 'main';
        }
    }

    // Performance monitoring (basic)
    function initPerformanceMonitoring() {
        // Log Core Web Vitals if available
        if ('web-vital' in window) {
            // Would implement web vitals tracking here
        }
        
        // Basic load time logging
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        });
    }

    // Error handling
    function initErrorHandling() {
        window.addEventListener('error', function(e) {
            console.error('JavaScript error:', e.error);
            // In production, this could send errors to a logging service
        });
        
        window.addEventListener('unhandledrejection', function(e) {
            console.error('Unhandled promise rejection:', e.reason);
        });
    }

    // Preload critical resources
    function initResourcePreloading() {
        // Preload critical images on hover
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const links = heroSection.querySelectorAll('a[href^="mailto:"]');
            links.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    // Could preload related resources here
                }, { once: true });
            });
        }
    }

    // Initialize all functionality when DOM is ready
    function init() {
        try {
            initThemeToggle();
            initSmoothScrolling();
            initFAQ();
            initForms();
            initAccessibility();
            initPerformanceMonitoring();
            initErrorHandling();
            initResourcePreloading();
            
            console.log('Wunderwerk AI website initialized');
        } catch (error) {
            console.error('Initialization error:', error);
        }
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose minimal API for debugging
    window.WunderwerkAI = {
        version: '1.0.0',
        init: init
    };

})();