// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonials Carousel Initialization
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Before-and-After Slider Functionality
const slider = document.querySelector('.ba-slider');
const beforeImage = slider.querySelector('img:first-child');
const handle = slider.querySelector('.handle');

let isActive = false;

slider.addEventListener('mousedown', () => {
    isActive = true;
});

slider.addEventListener('mouseup', () => {
    isActive = false;
});

slider.addEventListener('mouseleave', () => {
    isActive = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isActive) return;
    let x = e.pageX - slider.offsetLeft;
    let width = slider.offsetWidth;
    if (x < 0) x = 0;
    if (x
