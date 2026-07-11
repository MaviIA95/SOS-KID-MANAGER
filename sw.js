const CACHE_NAME = 'sos-kid-manager-v3';
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(['./', './index.html', './manifest.json']))));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ns => Promise.all(ns.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
