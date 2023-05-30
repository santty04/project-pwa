self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html')

workbox.routing.registerRoute(/^https?:\/\/www.themealdb.com\/api\/.*/, workbox.strategies.staleWhileRevalidate(), 'GET')

workbox.routing.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
	workbox.strategies.cacheFirst({
		cacheName: 'google-fonts-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxAgeSeconds: 30 * 24 * 60 * 60
			})
		]
	}), 'GET')

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst(), 'GET')
