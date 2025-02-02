// script.js

// Toggle the navbar on mobile
document.getElementById('menu-icon').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            document.querySelector('.navbar').classList.remove('active');
        }
    });
});

// Close navbar on link click (for mobile)
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.querySelector('.navbar').classList.remove('active');
        }
    });
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
