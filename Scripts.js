// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Hover Effects
document.querySelectorAll(".btn, button").forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.boxShadow = '10px 10px 20px #0d0d0d, -10px -10px 20px #262626';
    });
    button.addEventListener('mouseout', function() {
        this.style.boxShadow = '5px 5px 10px #0d0d0d, -5px -5px 10px #262626';
    });
});
