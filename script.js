// Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        const mobileLinks = document.querySelectorAll('.mobile-menu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Profession text animation
        // const professions = ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'Creative Coder'];
        // let currentIndex = 0;
        // const professionElement = document.getElementById('profession');

        // function updateProfession() {
        //     professionElement.style.opacity = '0';
            
        //     setTimeout(() => {
        //         currentIndex = (currentIndex + 1) % professions.length;
        //         professionElement.textContent = professions[currentIndex];
        //         professionElement.style.opacity = '1';
        //     }, 500);
        // }

        // setInterval(updateProfession, 3000);

        // Form submission
        const contactForm = document.getElementById('contact-form');
        const submitButton = document.getElementById('submit-form');
        
        submitButton.addEventListener('click', function() {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            if (nameInput.value && emailInput.value && messageInput.value) {
                submitButton.textContent = 'Message Sent!';
                submitButton.style.backgroundColor = '#10b981';
                
                // Reset form
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.textContent = 'Send Message';
                    submitButton.style.backgroundColor = '#4f46e5';
                }, 3000);
            } else {
                alert('Please fill out all required fields.');
            }
        });

        // Resume download functionality
        const resumeDownloadBtn = document.getElementById('resume-download-btn');
        const notification = document.getElementById('notification');
        
        resumeDownloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would be the path to your actual PDF file
            const resumeUrl = "My-Resume.pdf";
            
            // Show notification
            notification.classList.add('show');
            
            // Hide notification after 3 seconds
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
            
            // In a real implementation, this would trigger the actual download
            // window.location.href = resumeUrl;
            
            // For demo purposes, we'll just show the notification
        });
    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9648028795187a01',t:'MTc1MzQwODI2Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();