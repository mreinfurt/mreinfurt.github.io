'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "895fe66c7e42c72bf4b472d4f5b276b4",
"/": "895fe66c7e42c72bf4b472d4f5b276b4",
"main.dart.js": "f691a392d27eeae7e3f827043c96fbe1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c06987e0a31fce091dbe0a85b4114da7",
"assets/LICENSE": "1868e23310901736d2e42ba712a707c6",
"assets/AssetManifest.json": "7c062a2588663f5d71b4963752be2798",
"assets/FontManifest.json": "a2168aeadbd70d251ec28215c3173b52",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/launcher_foreground.png": "e497d786738ddb119f30e1a1856eb6a4",
"assets/assets/images/launcher.png": "f89844976e1bd0f5e03b68f449570205",
"assets/assets/images/facebook_logo.png": "d133b91c142e2ccd4e3d6e8c2176a7b4",
"assets/assets/images/guido-login-landscape.png": "171a9b55fa26e2d5cebcbb9ce68eb38c",
"assets/assets/images/twitter_logo.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/assets/images/guido-Logo-schwarz-lang.svg": "b814bba43dda5b9175219d4467911e90",
"assets/assets/images/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/images/launcher_background.png": "b7448395c31f8b042138080e607f6ef4",
"assets/assets/images/guido-login-portrait.png": "a3f78bf8e958583c2789e68b51be35e4",
"assets/assets/fonts/XPlainIcons.ttf": "7e0d20eb918ae84d759cd086c218e4c6",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/pages/imprint.html": "42ef342f035f9fbf38ddef707907d060",
"assets/assets/pages/tos.html": "3e0e63899f3d9760f7a25db29f0e025e",
"assets/assets/pages/privacy.html": "38b2d23069c3611b4c09ea69817aed4e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
