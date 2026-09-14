// Import the core Scramjet scripts provided by the framework repository
importScripts('/scram/scramjet.codecs.js');
importScripts('/scram/scramjet.config.js');
importScripts('/scram/scramjet.worker.js');

// Establish the configurations
const scramjet = new ScramjetController({
    prefix: '/service/',
    files: {
        worker: '/scram/scramjet.worker.js',
        config: '/scram/scramjet.config.js',
        codecs: '/scram/scramjet.codecs.js',
    }
});

// Intercept network requests and process them via Scramjet's rewriter
self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(self.location.origin + __scramjet$config.prefix)) {
        event.respondWith(
            scramjet.fetch(event)
        );
    }
});
