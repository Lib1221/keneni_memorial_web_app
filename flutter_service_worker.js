'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "c442fb9ff6c67d8a9bb1c722a5339aac",
".git/COMMIT_EDITMSG": "a2e5e988620bbe17ef14dfd37e4d86ca",
".git/config": "7e5023bdec9dad7cafc8655df57d179e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "92965e2a995ff0f9da9ecb8521fd41f9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a208484b095c307a4d10cd3c2d37ad8f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd498270c6cafc13e234666dd67c15ac",
".git/logs/refs/heads/main": "4e7f18c9d342dd7488a8b6bed82230b4",
".git/logs/refs/remotes/origin/main": "e17ee5bf55d3e6d28981b2b297407526",
".git/MERGE_HEAD": "2c32584518e6f5db10a9ebf5a45a3c81",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "23897874c502aaddff78ce8163227a98",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0f/0c42fb2f39fcb59e61a69a995b6bbd5fbea102": "eff3ef78367f8982ae0e3807a3d7d781",
".git/objects/12/1300f8ef5f18418c730ffac2a5bf21d49d1dc7": "01c29cc2c8b0675ce5bfe8c81f0a8dee",
".git/objects/1e/9b0f0bb8d18571279f3118e5bfd39038f84685": "002b0b94aff42c08d1903a5ebf32adbf",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/8cced4320f98d569eb29cfff6d038ae2cae74a": "2cdf04aafce2ebfef7625b262dca7f63",
".git/objects/32/78f159627a51f010317ec015edec618c50d63e": "3ddca813d063545c5bac5f5ee979835f",
".git/objects/34/c9a9a103bd372184a115cad62813bf630d71f2": "46131dfc18f791c988fb7073ceac93be",
".git/objects/3e/e5253557661082a4bbe57e29b14b28ceadcf63": "d0bc52c5f4c40a298daccafd3086a630",
".git/objects/41/82fa2de19726fac673f5a00ec974793fb9096b": "2a27e493a7f721f8c00993b853b3dc48",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5b/2dce4e9a120829e45a1e89e4ae2c72a21dca72": "68642c84062aa5e7838bd5b151617c31",
".git/objects/5d/2244498f33015b46464af28120cb25ffc7a56e": "a92bf5dd9a3c9f5f79bc1249721003d3",
".git/objects/61/f3027c009ea53cb3340ec5ab9bcfa4466479e1": "56fddf1b7cd10dc38ea8eecd10764864",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/b2df8881cf4edd07ebd5c4a146f6c29c355de9": "7b6b1b026e430d5dd51a8ffc2a84a6e5",
".git/objects/6a/0135aeb26970a312ea50dc30e0dbc58f83bc0b": "a12c102294ed0ef5e616b5ad5bde1f5f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/72/0cc8b34c8b100950902832b6b6618d58c37b84": "47e8ede7cc5082f59f19d7365224454f",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/81/2ab11f6c3d9f614108899c427a88a7ff827dda": "19b1858f73f37f30a2f7090b5d6f8d93",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/95/418672a671e68f4ac8a9dc6335213a292e3e07": "885d05cebb4466047af3f82c604e8006",
".git/objects/97/1fb0f2a6dbacafdbfa03463c61ecafc5333759": "61a7e7489ed9f1ccfb7b44333e799d9d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/f770aae3a2aeb93534fb5b1fea04e73b6bf0fe": "a99b969f5a4d146f2ca2f04af6229c36",
".git/objects/a4/2d9af6c8d6fa9b1b43a2e810415a70c76a7c0b": "8d8246feeac2f32db4ec33422f0045d5",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/a151db7c15a124b5339c56e4e7ff6162d95072": "72d6ea551738b9ded80d0148aff70afa",
".git/objects/c3/a4d4cfe37b47fec52662dd8f5eee73294bb2b9": "13f81086bb7d7101494f6940e0316dc5",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cf/ed55f94873484279a0f00e779adb9856b623ee": "213322cb46e01b00348b351441eb0788",
".git/objects/d2/ec29297f10b24bbeb991546c60abf7addc619f": "545f270504b23b33e4926934dc8eebd0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/fb5a38e79d3eb1124aac99562f383ef2d8aafb": "1643ac77768836bb3ca50be5d39d5fae",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9e4ed580686eb4656a573f631bb6f32ae76d82": "53074198dd959c17c22f036f24c53938",
".git/objects/dd/8b28d60213cd50fbb6a136c2ca5ad03d1e64d5": "fb5c5ef936822bd1588f8845ce617c7b",
".git/objects/df/fec8c34951e495ef0dd4f5455e87cf191be777": "91b8f43b9848fd8e230d0e3969449ef5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/ad18c2894bccaf98b39cd4a4910d2245194c1b": "290190f1e1ee44c23a4bbf5c2c8db192",
".git/objects/ef/6e725a4352b2db6b6424719dcff583df6be6c0": "a055faef7b4c3900dd009ea192a06488",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/6f1628065cf6a2b41423a1fa3c4c213324cbba": "f4d72d8e88b534671b1243fcc95e92b3",
".git/objects/f6/2a1222294d354a16d88c6dd66c22ca11f2e6de": "ad50adafede806f558bf0d9a41797561",
".git/objects/f9/06911480ad4b56d8a2529ff31549c016a831a7": "3c2e4b685da59af2a0c559c379302828",
".git/objects/fd/78f3d18745f04c46157af42cba1d5c8256ad77": "6fe0fdb805677a8a8ef956a692463592",
".git/ORIG_HEAD": "e29a430a18a3730e1ea6f03288968aac",
".git/refs/heads/main": "e29a430a18a3730e1ea6f03288968aac",
".git/refs/remotes/origin/main": "6058ec51156ece47ec7dba3e13e942be",
"assets/AssetManifest.bin": "78cbd6e9ee4d484b7501dec99664ce64",
"assets/AssetManifest.bin.json": "beb28d25f44cbe3dfe9b808461293254",
"assets/AssetManifest.json": "45846ef76ffc4a44d4b4f5007a140b7d",
"assets/assets/a.jpg": "e2c9e98f3ec877170d03587027bec9bc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "92910f31652a5a6593b5a059cc8765d2",
"assets/NOTICES": "cc5872495d010cadb036b3bd05b4b4df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e1c8207bc609844ad94967d9a76866c0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f77a91fab435689a14665fdd441cf0f8",
"/": "f77a91fab435689a14665fdd441cf0f8",
"main.dart.js": "8afcf36e7d9c68fd9dd5f6f55bab6aac",
"manifest.json": "2081d128f450f33621102d2159efc0af",
"splash/img/dark-1x.png": "fd262297b792e350536a05c1f6a20776",
"splash/img/dark-2x.png": "193541b7568f55ce8638d3ed84e36c56",
"splash/img/dark-3x.png": "b5eb49a7120c300b5f9b9c3a38852837",
"splash/img/dark-4x.png": "f7d3975f543e1de047419b34ef6f13e5",
"splash/img/light-1x.png": "fd262297b792e350536a05c1f6a20776",
"splash/img/light-2x.png": "193541b7568f55ce8638d3ed84e36c56",
"splash/img/light-3x.png": "b5eb49a7120c300b5f9b9c3a38852837",
"splash/img/light-4x.png": "f7d3975f543e1de047419b34ef6f13e5",
"version.json": "41f9e5adb5d0818d168e4fdd06cf9eba"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
