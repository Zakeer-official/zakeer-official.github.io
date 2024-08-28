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

// const menuIcon = document.getElementById('menu-icon');
// const navbar = document.querySelector('.navbar');

// menuIcon.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });

// document.getElementById('menu-icon').onclick = function() {
//     var navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('active');
// };
