let staticCacheName = 'restaurants-static-v1';

self.addEventListener('install', event => {
  let UrlsToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/data/restaurants.json',
    '/css/styles.css',
    '/css/styles-tablet.css',
    '/css/styles-desktop.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/img/desktop/1.jpg',
    '/img/desktop/2.jpg',
    '/img/desktop/3.jpg',
    '/img/desktop/4.jpg',
    '/img/desktop/5.jpg',
    '/img/desktop/6.jpg',
    '/img/desktop/7.jpg',
    '/img/desktop/8.jpg',
    '/img/desktop/9.jpg',
    '/img/desktop/10.jpg',
  ];

  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(UrlsToCache);
    })
  )
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cachesNames => {
      return Promise.all(
        cachesNames.filter(cachesName => {
          return cachesName.startsWith('restaurants-') && cachesName != staticCacheName;
        }).map(cachesName => {
          return caches.delete(cachesName);
        })
      )
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      if (response) return response;
      return fetch(event.request);
    })
  )
});
