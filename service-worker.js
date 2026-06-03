const CACHE_NAME = 'oldworld-v1';
const urlsToCache = [
  './',
  'index.html',
  'manifest.json',
  'title-logo.png',
  'empire-panel.png',
  'empire-gauge.png',
  'turn-panel.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});