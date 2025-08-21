document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scroll for internal links (anchors)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Smooth scroll to the target element with a slight offset to account for the fixed navbar
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Adding a fade-in animation to sections when the page loads
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
    });

    // When the window loads, fade in sections
    window.addEventListener('load', () => {
        sections.forEach(section => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        });
    });

    // Hover Effect Enhancements
    const serviceItems = document.querySelectorAll('.services-list li');
    
    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'transform 0.3s ease, color 0.3s ease';
            item.style.transform = 'scale(1.05)';
            item.style.color = '#3498db'; // Highlight color on hover
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.color = '#333'; // Reset color when hover ends
        });
    });

    // Smooth Transition for Button Hover (Form)
    const formButton = document.querySelector('form button');
    
    formButton.addEventListener('mouseenter', () => {
        formButton.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
        formButton.style.transform = 'translateY(-2px)';
        formButton.style.backgroundColor = '#2980b9'; // Darker blue on hover
    });
    
    formButton.addEventListener('mouseleave', () => {
        formButton.style.transform = 'translateY(0)';
        formButton.style.backgroundColor = '#3498db'; // Default blue
    });

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
