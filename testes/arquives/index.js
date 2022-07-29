async function createCache (){
    if ('caches' in window) {
        const newCache = await caches.open('new-cache');
        const urls= ['index.css', 'index.html', 'index.js'];
        newCache.addAll(urls); 
    }
}

window.addEventListener('load',createCache)
