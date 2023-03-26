// type Config = {
// 	onSuccess?: (registration: ServiceWorkerRegistration) => void;
// 	onUpdate?: (registration: ServiceWorkerRegistration) => void;
// };

// const vapidKeyPublic =
// 	'BOlNNcQa3VB66xSjnFAKLAklRWaxkXsh4xuWkZOXMmb5k3eofzU3hKvpB6GunwNobZJilvUNiAW7vb9c_BOFRcg';

// export const register = async (config?: Config) => {
// 	const isSupporeted = 'serviceWorker' in navigator;
// 	if (process.env.NODE_ENV !== 'production' || isSupporeted === false) return;

// 	const swUrl = process.env.PUBLIC_URL + '/service-worker.js.js';

// 	window.addEventListener('load', async () => {
// 		const isLocalhost = window.location.hostname.includes('localhost');
// 		if (isLocalhost) return;

// 		const registration = await navigator.serviceWorker.register(swUrl);

// 		const subscription = await registration.pushManager.subscribe({
// 			userVisibleOnly: true,
// 			applicationServerKey: vapidKeyPublic,
// 		});

// 		// send to server (subscription)
// 		console.log(subscription);

// 		registration.onupdatefound = () => {
// 			const installingWorker = registration.installing;
// 			if (installingWorker == null) return;

// 			installingWorker.onstatechange = () => {
// 				if (installingWorker.state !== 'installed') return;

// 				if (navigator.serviceWorker.controller) {
// 					if (config && config.onUpdate) config.onUpdate(registration);
// 					return;
// 				}

// 				if (config && config.onSuccess) {
// 					config.onSuccess(registration);
// 				}
// 			};
// 		};
// 	});
// };

// export const unregister = async () => {
// 	const isSupporeted = 'serviceWorker' in navigator;
// 	if (isSupporeted === false) return;

// 	const registration = await navigator.serviceWorker.ready;

// 	try {
// 		await registration.unregister();
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

export {};
