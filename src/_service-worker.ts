// /// <reference lib="webworker" />
// /* eslint-disable no-restricted-globals */

// import 'workbox-core';
// declare const self: ServiceWorkerGlobalScope;

// self.addEventListener('push', (event) => {
// 	const data = event.data?.json();

// 	const options: NotificationOptions = {
// 		// tag?: string;
// 		// badge?: string;
// 		silent: true,
// 		// use local dir
// 		//icon: 'https://play-lh.googleusercontent.com/pEZvyjV4HNa9dwxYB4g-YzRVmbtNEwKdo_YpGbkDucVftFAx93gXrXYJYnTaT8TaDg',
// 		...data,
// 		body: 'hello world',
// 	};

// 	// if not focussed
// 	self.registration.showNotification(data.title, options);

// 	// event.waitUntil(async stuff);
// });

// self.addEventListener('notificationclick', (event) => {
// 	// event.notification.close();

// 	if (event.action === 'custom') {
// 		console.log('hello custom');
// 		return;
// 	}
// });

export {};
