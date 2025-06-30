const CACHE_NAME = 'canelinha-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './carrossel1.jpg',
  './carrossel2.jpg',
  './carrossel3.jpg',
  './carrossel4.jpg',
  './carrossel5.jpg',
  './carrossel6.jpg',
  // adicione aqui outros arquivos estáticos importantes como CSS, JS, fontes, etc.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação do service worker e limpeza do cache antigo
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.map
