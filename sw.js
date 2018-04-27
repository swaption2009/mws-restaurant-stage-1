self.addEventListener('install', event => {
  let UrlsToCache = [
    'index.html',
    'restaurant.html',
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
    caches.open('restaurant-static-v1').then(cache => {
      return cache.addAll(UrlsToCache);
    })
  )
});
