const CACHE_NAME = 'redmaestros-v1';
const urlsToCache = [
  '/',
  '/index.js',
  '/manifest.json',
  '/favicon.ico',
  // Add other static assets here
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});