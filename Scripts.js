document.addEventListener("DOMContentLoaded", function() {
    // Initialize AOS animations
    AOS.init({
        duration: 2000,  // Duration of animations for luxury feel
        once: true       // Only animate elements once as they enter the viewport
    });

    // Testimonials Data
    let testimonials = [
        { text: "Intelliai Marketing revolutionized our online presence with a stunning website.", author: "- Luxury Brand CEO" },
        { text: "Their advanced chatbot increased our customer engagement by 50%.", author: "- E-commerce Director" },
        { text: "Their AI consulting provided us with insights that transformed our business strategies.", author: "- Tech Startup Founder" },
        { text: "The pre-designed landing pages helped us launch our campaigns faster and more effectively.", author: "- Marketing Manager" }
    ];

    let currentTestimonial = 0;

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        document.getElementById("testimonial-text").innerText = testimonials[currentTestimonial].text;
        document.getElementById("testimonial-author").innerText = testimonials[currentTestimonial].author;
    }

    document.querySelector("#next-testimonial-button").addEventListener("click", nextTestimonial);

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize Stripe Payment Form
    var stripe = Stripe('pk_test_your_public_key_here'); // Replace with your public key
    var elements = stripe.elements();

    var style = {
        base: {
            color: '#c0c0c0',
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

    var card = elements.create('card', { style: style });
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

    // Fancy Animation for Buttons
    document.querySelectorAll(".btn, button").forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 15px 25px rgba(255, 215, 0, 0.6)';
        });
        button.addEventListener('mouseout', function() {
            this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.4)';
        });
    });
});
