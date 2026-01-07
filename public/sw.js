// public/sw.js - Service Worker for advanced caching

const CACHE_NAME = "holfort-media-v2"; // UPDATED VERSION
const STATIC_CACHE = "holfort-static-v2"; // UPDATED VERSION
const DYNAMIC_CACHE = "holfort-dynamic-v2"; // UPDATED VERSION

// Assets to cache on install
const STATIC_ASSETS = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/manifest.json",
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: "cache-first",
  NETWORK_FIRST: "network-first",
  STALE_WHILE_REVALIDATE: "stale-while-revalidate",
};

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log('[SW] Installing Service Worker v2...');
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("[SW] Pre-caching static assets");
        // Try to cache, but don't fail if some assets are missing
        return Promise.allSettled(
          STATIC_ASSETS.map(asset => 
            cache.add(asset).catch(err => {
              console.warn(`[SW] Failed to cache ${asset}:`, err);
              return null;
            })
          )
        );
      })
      .then(() => {
        console.log("[SW] Static assets cached successfully");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("[SW] Failed to cache static assets:", error);
      })
  );
});

// Activate event - FORCE clean up ALL old caches
self.addEventListener("activate", (event) => {
  console.log('[SW] Activating new Service Worker v2...');
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete ALL caches that aren't the current version
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log("[SW] Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log("[SW] Old caches cleaned up, claiming clients");
        return self.clients.claim();
      })
      .then(() => {
        // Notify all clients that new SW is active
        return self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({ type: 'SW_UPDATED', version: 'v2' });
          });
        });
      })
  );
});

// Fetch event - implement caching strategies with better error handling
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== "GET") {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isPage(request)) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE));
  } else if (isAPI(request)) {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Helper functions to determine request types
function isStaticAsset(request) {
  return (
    request.destination === "image" ||
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "font" ||
    request.url.includes("/_next/static/")
  );
}

function isPage(request) {
  return (
    request.mode === "navigate" ||
    (request.method === "GET" &&
      request.headers.get("accept")?.includes("text/html"))
  );
}

function isAPI(request) {
  return request.url.includes("/api/");
}

// Cache strategies implementation with better error handling
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      console.log("[SW] Cache hit:", request.url);
      return cachedResponse;
    }

    console.log("[SW] Cache miss, fetching:", request.url);
    const networkResponse = await fetch(request);

    // Only cache successful responses
    if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
      await cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error("[SW] Cache first failed:", error);
    // Try to return network response without caching
    try {
      return await fetch(request);
    } catch (fetchError) {
      return new Response("Offline content not available", { status: 503 });
    }
  }
}

async function networkFirst(request, cacheName) {
  try {
    console.log("[SW] Network first:", request.url);
    const networkResponse = await fetch(request);

    // Only cache successful responses
    if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
      const cache = await caches.open(cacheName);
      await cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log("[SW] Network failed, trying cache:", request.url);
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    return new Response("Content not available offline", { status: 503 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);

    // Start fetch in background
    const fetchPromise = fetch(request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.ok && networkResponse.status === 200) {
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      })
      .catch(error => {
        console.warn("[SW] Background fetch failed:", error);
        return null;
      });

    // Return cached version immediately if available
    if (cachedResponse) {
      console.log("[SW] Stale while revalidate - cache hit:", request.url);
      return cachedResponse;
    }

    // If no cache, wait for network
    console.log("[SW] Stale while revalidate - no cache, waiting for network:", request.url);
    return fetchPromise || fetch(request);
  } catch (error) {
    console.error("[SW] Stale while revalidate failed:", error);
    return fetch(request);
  }
}

// Background sync for offline actions (optional)
self.addEventListener("sync", (event) => {
  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  console.log("[SW] Background sync triggered");
}

// Push notification handling (optional)
self.addEventListener("push", (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: "/logo.png",
      badge: "/logo.png",
      vibrate: [200, 100, 200],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "1",
      },
    };

    event.waitUntil(
      self.registration.showNotification("Holfort Media", options)
    );
  }
});

// Message handling from main thread
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    console.log("[SW] Skipping waiting...");
    self.skipWaiting();
  }
});