/* Fonts */
@import url('https://fonts.googleapis.com/css?family=Roboto:700&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body */
body {
    font-family: 'Open Sans', sans-serif;
    color: #000;
    scroll-behavior: smooth;
}

/* Hero Section */
#hero {
    position: relative;
    height: 100vh;
    background: linear-gradient(135deg, #C0C0C0, #A9A9A9);
    overflow: hidden;
}

#hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('videos/background-video-placeholder.mp4') no-repeat center center/cover;
    opacity: 0.5;
}

.hero-content {
    position: relative;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
}

.hero-content h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 4em;
    letter-spacing: 5px;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 1.5em;
    letter-spacing: 3px;
    margin-bottom: 40px;
}

.btn {
    padding: 15px 30px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    font-size: 1em;
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: #fff;
    color: #000;
    transform: scale(1.05);
}

/* Scroll Down Indicator */
.scroll-down {
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border: 2px solid #fff;
    border-radius: 50px;
}

.scroll-down::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #fff;
    margin-left: -3px;
    border-radius: 50%;
    animation: scroll 2s infinite;
}

@keyframes scroll {
    0% {
        opacity: 0;
        top: 10px;
    }
    50% {
        opacity: 1;
        top: 25px;
    }
    100% {
        opacity: 0;
        top: 40px;
    }
}

/* Profile Section */
#profile {
    text-align: center;
    padding: 50px 0;
}

#profile img {
    width: 150px;
    height: auto;
}

/* About Section */
#about {
    background: linear-gradient(135deg, #C0C0C0, #A9A9A9);
    padding: 60px 20px;
    text-align: center;
}

#about h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5em;
    letter-spacing: 3px;
    margin-bottom: 40px;
}

.services {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.service-card {
    background: #fff;
    width: 300px;
    margin: 15px;
    padding: 30px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-card h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    margin-bottom: 20px;
}

/* Before-and-After Slider */
#slider {
    padding: 60px 20px;
    text-align: center;
}

#slider h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5em;
    margin-bottom: 40px;
}

.ba-slider {
    position: relative;
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
}

.ba-slider img {
    width: 100%;
    display: block;
}

.ba-slider .handle {
    position: absolute;
    top: 0;
    left: 50%;
    width: 5px;
    height: 100%;
    background: #000;
    cursor: ew-resize;
}

/* Testimonials */
#testimonials {
    background-color: #f5f5f5;
    padding: 60px 20px;
    text-align: center;
}

#testimonials h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5em;
    margin-bottom: 40px;
}

.swiper-container {
    width: 80%;
    margin: 0 auto;
}

.swiper-slide {
    font-size: 1.2em;
    color: #333;
}

.swiper-slide h4 {
    margin-top: 20px;
    font-weight: bold;
}

/* Payment Section */
#payment {
    padding: 60px 20px;
    text-align: center;
}

#payment h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5em;
    margin-bottom: 40px;
}

#payment-form {
    width: 300px;
    margin: 0 auto;
}

#card-element {
    padding: 15px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
}

#payment-form .btn {
    width: 100%;
}

/* Contact Section */
#contact {
    padding: 60px 20px;
    text-align: center;
}

#contact h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.5em;
    margin-bottom: 40px;
}

#contact form {
    width: 500px;
    margin: 0 auto;
}

#contact input, #contact textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
}

#contact .btn {
    width: 100%;
}

/* Footer */
footer {
    background-color: #000;
    color: #fff;
    padding: 30px 20px;
    text-align: center;
}

footer .social-media {
    margin-bottom: 20px;
}

footer .social-media a {
    margin: 0 10px;
    display: inline-block;
}

footer .social-media img {
    width: 30px;
    height: auto;
}

footer p {
    font-size: 0.9em;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .services {
        flex-direction: column;
        align-items: center;
    }
}
