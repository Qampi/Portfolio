 // Navigation Menu Toggle
  const navToggle = document.querySelector('.nav-toggle'); 
  const navMenu = document.querySelector('.nav-menu'); 
  navToggle.addEventListener('click', () => { 
    navMenu.classList.toggle('active');

}); 
// Scroll to Top Button 
const scrollTopButton = document.querySelector('.scroll-top'); 
window.addEventListener('scroll', () => { 
    if (window.scrollY > 500) 
        { scrollTopButton.classList.add('active'); 

        } else { scrollTopButton.classList.remove('active'); 

        } }); scrollTopButton.addEventListener('click', () => { 
            window.scrollTo({ top: 0, behavior: 'smooth' });
         }); 
         // Project Filter 
         const projectFilterButtons = document.querySelectorAll('.project-filter button'); 
         const projects = document.querySelectorAll('.project'); 
         projectFilterButtons.forEach((button) => { 
            button.addEventListener('click', () => { 
                const filter = button.dataset.filter; 
                projects.forEach((project) => { 
                    if (filter === 'all' || project.dataset.category === filter) 
                        { project.classList.remove('hidden'); 

                        } else { project.classList.add('hidden'); 

                        } 
                    }); 
                }); 
            }); 
            // Contact Form Validation 
            const contactForm = document.querySelector('.contact-form'); 
            const nameInput = document.querySelector('#name'); 
            const emailInput = document.querySelector('#email'); 
            const messageInput = document.querySelector('#message'); 
            contactForm.addEventListener('submit', (e) => { 
                e.preventDefault(); 
                if (nameInput.value && emailInput.value && messageInput.value) { alert('Thank you for your message!'); 
                    contactForm.reset(); 
                } else { alert('Please fill in all fields.'); 

                } }); 
                // Animations 
                const scrollElements = document.querySelectorAll('.scroll-animation'); 
                window.addEventListener('scroll', () => { 
                    scrollElements.forEach((element) => { 
                        const elementTop = element.getBoundingClientRect().top; 
                        const viewportHeight = window.innerHeight; 
                        if (elementTop < viewportHeight) { element.classList.add('active'); 

                        } 
                    }); 
                }); 
                // This code includes: 
                // 1. Navigation menu toggle functionality. 
                // 2. Scroll-to-top button functionality. 
                // 3. Project filter functionality. 
                // 4. Contact form validation. 
                // 5. Scroll-based animations. You can customize and expand this code to suit your specific needs. Note: Ensure you update the HTML and CSS files accordingly to match the JavaScript functionality.
