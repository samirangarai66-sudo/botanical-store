const CACHE_NAME = 'botanical-cache-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'products.js',
  'manifest.json',
  'assets/app_icon.png',
  'assets/feature_graphic.png',
  'assets/carousel_sprayer.jpg',
  'assets/trowel_walnut.jpg',
  'assets/pot_terracotta.jpg'
];

// Install Event
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
