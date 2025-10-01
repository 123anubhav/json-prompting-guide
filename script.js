
        // --- Intersection Observer for Scroll Animations ---
        // Name --> Anubhav 
        // tare gin gin yad mein Teri 
        // mein Toh jaga rata na
        // rook na pawa Akhiya ko
        // gam diya barsata nu...
        // Ho ho ho ho.....
        
        const sections = document.querySelectorAll('.section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.15
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        // --- Animate Hero on Load ---
        window.addEventListener('DOMContentLoaded', () => {
            const hero = document.querySelector('.hero');
            if (hero) {
                setTimeout(() => {
                    hero.style.opacity = '1';
                    hero.style.transform = 'scale(1)';
                }, 300);
            }
        });

        // --- Scroll Progress Bar ---
        window.onscroll = function() {
            updateProgressBar();
        };

        function updateProgressBar() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("progress-bar").style.width = scrolled + "%";
        }

        // --- Scroll to Top Button ---
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // --- Smooth Scroll for Navbar Links ---
        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for fixed navbar
                        behavior: 'smooth'
                    });
                }
            });
        });

        // --- Copy Code Functionality ---
        function copyCode(button) {
            const codeContainer = button.nextElementSibling.nextElementSibling;
            const code = codeContainer.querySelector('code').innerText;
            
            navigator.clipboard.writeText(code).then(() => {
                // Show feedback
                const feedback = button.nextElementSibling;
                feedback.style.display = 'block';
                
                // Hide feedback after 2 seconds
                setTimeout(() => {
                    feedback.style.display = 'none';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
   