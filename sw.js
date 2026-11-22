// Minimal service worker so phones can install the site as an app.
// It does no caching: every page still loads fresh from the web.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
