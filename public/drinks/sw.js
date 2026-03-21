// Service Worker for Drinking Games PWA
// Caches all assets for offline play after first visit

const CACHE_NAME = 'drinks-cache-v1';
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

// On fetch: serve from cache if available, then network (cache as you go)
self.addEventListener('fetch', (event) => {
    // Only handle requests within our scope
    if (!event.request.url.includes(BASE)) return;

    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;

            return fetch(event.request)
                .then((response) => {
                    // Cache successful GET responses
                    if (!response || response.status !== 200 || event.request.method !== 'GET') {
                        return response;
                    }
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
                    return response;
                })
                .catch(() => {
                    // If network fails and it's a navigation, serve app shell
                    if (event.request.mode === 'navigate') {
                        return caches.match(`${BASE}/index.html`);
                    }
                });
        })
    );
});
