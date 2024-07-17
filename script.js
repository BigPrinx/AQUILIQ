document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelectorAll('.feature');

    features.forEach(feature => {
        const toggleIcon = feature.querySelector('.toggle-icon');
        
        toggleIcon.addEventListener('click', () => {
            feature.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', () => {
        showToastNotification('Signed up successfully!');
    });
    
    function showToastNotification(message) {
        // Simulating a toast notification (replace with your actual notification method)
        alert(message);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to top functionality
    const footerLogo = document.getElementById('footer-logo');
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = 'Back to top';
    scrollTopButton.classList.add('scroll-top-button');
    document.body.appendChild(scrollTopButton);

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Social media links functionality
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const socialPlatform = link.getAttribute('data-social');
            const socialUrl = link.href;
            window.open(socialUrl, '_blank');
        });
    });
});
