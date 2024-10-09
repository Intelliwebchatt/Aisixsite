// Register Service Worker for Caching
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            console.log('ServiceWorker registered with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

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
        this.style.boxShadow = '0 15px 25px rgba(255, 215, 0, 0.6)';
    });
    button.addEventListener('mouseout', function() {
        this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.4)';
    });
});
