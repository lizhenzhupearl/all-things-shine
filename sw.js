// Service Worker — network-first for auto updates, cache for offline
// localStorage (hearts, journal, settings) is NEVER touched by the SW
const CACHE_NAME = 'ats-v35';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  // Activate immediately — don't wait for old tabs to close
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  // Clean old caches but never touch localStorage
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  // Take control of all open tabs immediately
  self.clients.claim();
  // Notify all tabs that a new version is active
  self.clients.matchAll().then(clients => {
    for (const client of clients) {
      client.postMessage({ type: 'SW_UPDATED' });
    }
  });
});

// Network-first: always try fresh code, fall back to cache offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
