const CACHE_NAME = 'intelliai-marketing-cache-v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/images/favicon.png',
    '/images/before-placeholder.jpg',
    '/images/after-placeholder.jpg',
    'https://fonts.googleapis.com/css?family=Playfair+Display:700&family=Roboto:700&display=swap'
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
