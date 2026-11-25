// Welcome message in browser console
console.log("Welcome to Shivangi's Portfolio!");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Button interaction
const projectButton = document.querySelector('.btn');

projectButton.addEventListener('click', function() {
    console.log("Welcome to my projects!");
});