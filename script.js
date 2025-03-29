document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Disable submit button
            const submitButton = contactForm.querySelector('.submit-button');
            submitButton.disabled = true;
            submitButton.textContent = 'שולח...';

            // Get form data
            const formData = {
                name: contactForm.querySelector('#name').value,
                email: contactForm.querySelector('#email').value,
                phone: contactForm.querySelector('#phone').value,
                message: contactForm.querySelector('#message').value
            };

            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
                .then(function(response) {
                    // Show success message
                    document.getElementById('success-message').style.display = 'block';
                    document.getElementById('error-message').style.display = 'none';
                    
                    // Reset form
                    contactForm.reset();
                })
                .catch(function(error) {
                    // Show error message
                    document.getElementById('error-message').style.display = 'block';
                    document.getElementById('success-message').style.display = 'none';
                })
                .finally(function() {
                    // Re-enable submit button
                    submitButton.disabled = false;
                    submitButton.textContent = 'שלח הודעה';
                });
        });
    }
}); 