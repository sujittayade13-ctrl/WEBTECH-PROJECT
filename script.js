// Simple JavaScript for AgriPest Website

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    // Add click event to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = '#1a5a1a';
        } else {
            header.style.backgroundColor = '#2c7a2c';
        }
    });
    
    console.log('AgriPest website loaded successfully!');
});
