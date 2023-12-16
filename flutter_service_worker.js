'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0ffb89f1703d8077c8b8b11104fe54e3",
"assets/AssetManifest.bin.json": "4cbaa4974b6a224524a0b4d8c3831121",
"assets/AssetManifest.json": "eb0ec0a795c60f66332af323fdce8afd",
"assets/assets/fonts/DMSans-Light.ttf": "e7520627eb609ab1e02dd88f972a3b2b",
"assets/assets/fonts/DMSans-LightItalic.ttf": "c7ae8efdba4bcf2c847894db2ae5cfc2",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/icons/ic_attach.svg": "278d7f0acec76d65039ca13f6d047e7e",
"assets/assets/icons/ic_c.svg": "26f7ba37a80bd3a5f602e323284bbf98",
"assets/assets/icons/ic_content_copy.svg": "16cb43a32212af1a1924086be631f3cc",
"assets/assets/icons/ic_cplusplus.svg": "786b239b63210129d04b13ffff0178e2",
"assets/assets/icons/ic_dart.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/icons/ic_flutter.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/icons/ic_git.svg": "cc96333c97afd4eb54ca6ad68a860117",
"assets/assets/icons/ic_github.svg": "881d7b3b81a81fbb3f8ad21c8c51766b",
"assets/assets/icons/ic_java.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/assets/icons/ic_kotlin.svg": "2840fedd009cad74c66a8a3ff07efd50",
"assets/assets/icons/ic_linked_in.svg": "72d193645c986e5f0887696fb4a0e64f",
"assets/assets/icons/ic_menu.svg": "89bba99fc9b11f255a12e198a7e7a38e",
"assets/assets/icons/ic_twitter.svg": "3d94b820e65bb7548e2d0ad829cf08b2",
"assets/assets/images/ava.png": "664a77524188096e4ffcceeeae20946f",
"assets/assets/images/avatar.png": "0fdab6830110742572f97c9ed692b6cb",
"assets/assets/images/avatar_bg.png": "cf2a7a97acb23a6fe733972a06dedeb6",
"assets/assets/images/background.png": "6838a1f2e96eaebe1d98bd0fb450e549",
"assets/assets/images/background_gif.gif": "02011ec8554277b8c70bf22fb192123c",
"assets/assets/images/cinema.png": "6f824654c73ae276fec278d1b227f482",
"assets/assets/images/clock.png": "f759bbb3e19b7a80fe991516f78a3a2a",
"assets/assets/images/gallery.png": "fb822f072e1ff07f31308a9970e8268f",
"assets/assets/images/notes.png": "9463021ec5b745bec4d7d88133ec181a",
"assets/assets/images/ringstone.png": "629885cc5410c55b4677f928441e3abb",
"assets/assets/images/travel.png": "4239176760090e2ac09a1ede5a9f8803",
"assets/FontManifest.json": "e8a921c279d671dfdbf62ed79d44d382",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "ed5cbab6da4c3634ac5c941726a5089d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "1dc91bdd6d26e34568c56fdfd051fee2",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "7f1fada20d4e69ccd0e98a5f62b51ab3",
"icons/Icon-512.png": "2eb96216405d20509a37c652e27598a8",
"icons/Icon-maskable-192.png": "7f1fada20d4e69ccd0e98a5f62b51ab3",
"icons/Icon-maskable-512.png": "2eb96216405d20509a37c652e27598a8",
"index.html": "ed8240b1372cc7265878bbfd9e1943f5",
"/": "ed8240b1372cc7265878bbfd9e1943f5",
"main.dart.js": "0874009b0006ec48e4e5a61fec7fc344",
"manifest.json": "5485cf3d963732b0f9f44cacba62b14a",
"splash/img/dark-1x.png": "70c588670c18f110bb5c0b91dac9dd3d",
"splash/img/dark-2x.png": "4506964921ab39330aea521301a63836",
"splash/img/dark-3x.png": "2a50372775a35d6261040d49badd19d8",
"splash/img/dark-4x.png": "ed1f67c959d55a697972664b416cbfdc",
"splash/img/light-1x.png": "70c588670c18f110bb5c0b91dac9dd3d",
"splash/img/light-2x.png": "4506964921ab39330aea521301a63836",
"splash/img/light-3x.png": "2a50372775a35d6261040d49badd19d8",
"splash/img/light-4x.png": "ed1f67c959d55a697972664b416cbfdc",
"version.json": "62d44a903feffcf8e749cc0f5ea572a5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
