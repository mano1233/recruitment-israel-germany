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
            
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const phone = contactForm.querySelector('#phone').value;
            const message = contactForm.querySelector('#message').value;

            const mailtoLink = `mailto:info@mrb-muenchen.de?subject=פנייה חדשה מ-${encodeURIComponent(name)}&body=${encodeURIComponent(
                `שם: ${name}\n` +
                `אימייל: ${email}\n` +
                `טלפון: ${phone}\n\n` +
                `הודעה:\n${message}`
            )}`;

            window.location.href = mailtoLink;
        });
    }
}); 