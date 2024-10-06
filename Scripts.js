/* General Styles */
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    color: #e0e0e0;
    background-color: #000000;
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    background: url('path/to/placeholder-video.mp4') no-repeat center center/cover;
    background-attachment: fixed;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    color: #ffffff;
}

.hero-content h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 4em;
    margin-bottom: 0.5em;
    letter-spacing: 3px;
}

.hero-content p {
    font-size: 1.5em;
    margin-bottom: 1em;
}

.cta-button {
    padding: 1em 2em;
    background-color: #ffffff;
    color: #000000;
    text-decoration: none;
    border-radius: 5px;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
}

/* Profile Section */
.profile {
    text-align: center;
    margin-top: -5em;
}

.profile img {
    border-radius: 50%;
    border: 5px solid #ffffff;
    width: 150px;
    height: 150px;
}

/* About Section */
.about {
    display: flex;
    justify-content: space-around;
    padding: 5em 2em;
    background: linear-gradient(135deg, #1C1C1C 0%, #000000 100%);
}

.service-card {
    background-color: rgba(255, 255, 255, 0.05);
    color: #e0e0e0;
    padding: 2em;
    border-radius: 10px;
    width: 30%;
    box-shadow: 0 4px 6px rgba(255,255,255,0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-card h2 {
    margin-bottom: 1em;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
}

.service-card p {
    font-size: 1em;
}

/* Slider Section */
.slider {
    padding: 5em 2em;
    text-align: center;
    background-color: #000000;
}

.slider h2 {
    margin-bottom: 2em;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
}

.ba-slider {
    position: relative;
    overflow: hidden;
    max-width: 800px;
    margin: 0 auto;
}

.ba-slider img {
    width: 100%;
    display: block;
}

.ba-slider .resize {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

.ba-slider .handle {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #ffffff;
    cursor: ew-resize;
}

/* Testimonials */
.testimonials {
    padding: 5em 2em;
    background-color: #1C1C1C;
    text-align: center;
}

.testimonials h2 {
    margin-bottom: 2em;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
}

.testimonial-carousel {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
}

.testimonial {
    flex: 0 0 100%;
    margin: 0 1em;
    background-color: #2F2F2F;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(255,255,255,0.1);
}

.testimonial p {
    font-style: italic;
    margin-bottom: 1em;
}

.testimonial h3 {
    font-weight: normal;
    color: #ffffff;
}

/* Payment Section */
.payment {
    padding: 5em 2em;
    text-align: center;
    background-color: #000000;
}

.payment h2 {
    margin-bottom: 2em;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
}

#payment-form {
    max-width: 400px;
    margin: 0 auto;
}

#card-element {
    background-color: #2F2F2F;
    padding: 1em;
    border-radius: 5px;
    margin-bottom: 1em;
}

#payment-form button {
    padding: 1em 2em;
    background-color: #C0C0C0;
    color: #000000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;
}

#payment-form button:hover {
    background-color: #A9A9A9;
}

/* Contact Form */
#contact {
    padding: 5em 2em;
    background-color: #1C1C1C;
    text-align: center;
}

#contact h2 {
    margin-bottom: 2em;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
}

#contact form {
    max-width: 400px;
    margin: 0 auto;
}

#contact input, #contact textarea {
    display: block;
    margin: 0.5em 0;
    padding: 1em;
    width: 100%;
    background-color: #2F2F2F;
    border: 1px solid #444444;
    color: #e0e0e0;
    border-radius: 5px;
}

#contact button {
    padding: 1em 2em;
    background-color: #C0C0C0;
    color: #000000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;
}

#contact button:hover {
    background-color: #A9A9A9;
}

/* Footer */
footer {
    padding: 2em;
    background-color: #000000;
    color: #e0e0e0;
    text-align: center;
}

.social-media a img {
    width: 30px;
    margin: 0 10px;
    filter: invert(100%);
}

footer p {
    margin-top: 1em;
    font-size: 0.9em;
}

/* Responsive Design */
@media (max-width: 768px) {
    .about {
        flex-direction: column;
        align-items: center;
    }

    .service-card {
        width: 80%;
        margin-bottom: 2em;
    }

    .testimonial-carousel {
        flex-direction: column;
    }

    .testimonial {
        margin-bottom: 2em;
    }
}
