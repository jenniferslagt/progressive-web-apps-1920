const cacheName = 'version-2';

// Call install event to the service worker itself
self.addEventListener('install', function (event) {
    // console.log('Service worker is installed')
});

// Call the activate event
self.addEventListener('activate', function (event) {
    console.log('Service worker is actived');
    // Remove any unwanted caches
    // loop through the caches with a condition
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(function (cache) {
                    console.log('Service Worker cleared old cache')
                    return cache === cacheName;
                })
            )
        })
    );
});

// Call Fetch event
self.addEventListener('fetch', function (event) {
    console.log('Service Worker is fetching');
    event.respondWith(
        fetch(event.request)
        .then(function (res) {
            // Make a copy / clone of the response of the server
            const resClone = res.clone();
            caches
                .open(cacheName)
                .then(function (cache) {
                    // Add the response to the cache
                    cache.put(event.request, resClone);
                });
            return res;
        })
        .catch(err => caches.match(event.request)
            .then(res => res))
    );
});