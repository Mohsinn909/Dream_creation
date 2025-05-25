 document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.querySelector('nav');
            const menuIcon = document.querySelector('.menu-icon');
            const closeIcon = document.querySelector('.close-icon');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.classList.toggle('active');
                
                // Toggle between hamburger and X icons
                if (nav.classList.contains('active')) {
                    menuIcon.style.display = 'none';
                    closeIcon.style.display = 'inline-block';
                } else {
                    menuIcon.style.display = 'inline-block';
                    closeIcon.style.display = 'none';
                }
            });
            
            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('nav ul li a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    nav.classList.remove('active');
                    menuIcon.style.display = 'inline-block';
                    closeIcon.style.display = 'none';
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    // Make sure targetId is not just #
                    if (targetId && targetId !== '#') {
                        const targetElement = document.querySelector(targetId);
                        
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 70,
                                behavior: 'smooth'
                            });
                        }
                    } else if (targetId === '#') {
                        // If href is just #, scroll to top
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Add animation classes to sections
            const fadeElements = document.querySelectorAll('.section-title, .services-grid, .testimonial-grid, .about-content, .contact-content, .footer-col');
            
            // Scroll animation function
            function checkFade() {
                fadeElements.forEach(element => {
                    if (!element.classList.contains('fade-in')) {
                        element.classList.add('fade-in');
                    }
                    
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('active');
                    }
                });
            }
            
            // Back to top button functionality
            const backToTop = document.querySelector('.back-to-top');
            
            function toggleBackToTop() {
                if (window.scrollY > 300) {
                    backToTop.classList.add('active');
                } else {
                    backToTop.classList.remove('active');
                }
            }
            
            // WhatsApp button functionality
            const whatsappBtn = document.querySelector('.whatsapp-btn');
            if (whatsappBtn) {
                whatsappBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.open('https://wa.me/911234567890', '_blank');
                });
            }
            
            // Event listeners for scroll
            window.addEventListener('scroll', () => {
                checkFade();
                toggleBackToTop();
            });
            
            // Initial check on page load
            checkFade();
            toggleBackToTop();
            
            // Back to top click handler
            backToTop.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });