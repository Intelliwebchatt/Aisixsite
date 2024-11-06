const CACHE_NAME = 'intelliai-marketing-cache-v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/main.css',
    '/scripts.js',
    '/images/favicon.png',
    '/images/ai-background.jpg',
    '/icons/facebook.svg',
    '/icons/twitter.svg',
    '/icons/linkedin.svg',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap'
];

// Install the service worker and cache the files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch cached files or get them from the network if not cached
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
