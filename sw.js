const CACHE_NAME = 'farm-mini-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://i.postimg.cc/05FpK0FS/1791515796946.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
