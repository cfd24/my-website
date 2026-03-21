// Service Worker for Drinking Games PWA
// Caches all assets for offline play after first visit

const CACHE_NAME = 'drinks-cache-v2';
const BASE = '/drinks';

// On install: cache the app shell
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) =>
            cache.addAll([
                `${BASE}/`,
                `${BASE}/index.html`,
                `${BASE}/find-the-skull.html`,
                `${BASE}/tap-battle.html`,
            ])
        )
    );
});

// On activate: clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            )
        )
    );
    self.clients.claim();
});

// On fetch: network-first for JS bundles (so new code always loads),
// cache-first for everything else (for offline support)
self.addEventListener('fetch', (event) => {
    if (!event.request.url.includes(BASE)) return;

    const isJSBundle = event.request.url.includes('/_expo/static/');

    if (isJSBundle) {
        // Network-first: always try to get latest JS, fall back to cache
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Cache-first for everything else (HTML, images, fonts)
    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return fetch(event.request)
                .then((response) => {
                    if (!response || response.status !== 200 || event.request.method !== 'GET') {
                        return response;
                    }
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => {
                    if (event.request.mode === 'navigate') {
                        return caches.match(`${BASE}/index.html`);
                    }
                });
        })
    );
});
