// script.js

// Toggle the navbar on mobile
document.getElementById('menu-icon').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate the home section
gsap.from(".home-content", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
});

gsap.from(".home-img", {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 1,
});

// Animate the about section
gsap.from(".about", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Animate the skills section
gsap.from(".skill-item", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
});

// Animate the portfolio section
gsap.from(".portfolio-item", {
    scrollTrigger: {
        trigger: ".portfolio",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
});

// Animate the contact section
gsap.from(".contact", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Dropdown Menu Toggle
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.querySelector('.dropdown-content').classList.toggle('active');
    });
});

// Prevent Dropdown from Closing on Click Inside
document.querySelectorAll('.dropdown-content').forEach(dropdownContent => {
    dropdownContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Smooth Scrolling (for single-page sections)
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact Modal
const modal = document.getElementById('contact-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close Modal on Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form data
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Simulate form submission (replace with actual backend logic)
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! I will get back to you soon.');

    // Clear the form
    contactForm.reset();

    // Close the modal
    modal.style.display = 'none';
});
