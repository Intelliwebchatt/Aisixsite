// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
    if (x > width) x = width;
    handle.style.left = x + 'px';
    beforeImage.style.clip = `rect(0px, ${x}px, ${slider.offsetHeight}px, 0px)`;
});

// Stripe Payment Integration 
// (Make sure to replace 'pk_test_XXXXXXXXXXXXXXXXXXXXXXXX' with your actual Stripe public key)
var stripe = Stripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXX');
var elements = stripe.elements();

var style = {
    base: {
        color: '#fff',
        fontFamily: '"Open Sans", sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#888',
        },
        backgroundColor: '#1a1a1a',
    },
    invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
    },
};

var card = elements.create('card', {style: style});
card.mount('#card-element');

var form = document.getElementById('payment-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    stripe.createToken(card).then(function (result) {
        if (result.error) {
            // Display error.message in your UI
            alert(result.error.message);
        } else {
            // Send the token to your server
            // Placeholder for server integration
            alert('Payment successful! Token ID: ' + result.token.id);
        }
    });
});
