importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "fsdfsdfsdsdffds",
  authDomain: "fsdfsdfsdsdffds",
  projectId: "fsdfsdfsdsdffds",
  storageBucket: "fsdfsdfsdsdffds",
  messagingSenderId: "fsdfsdfsdsdffds",
  appId: "fsdfsdfsdsdffds"
 });

const isSupported = firebase.messaging.isSupported();
if (isSupported) {
    const messaging = firebase.messaging();
    messaging.onBackgroundMessage(({ notification: { title, body, image } }) => {
        self.registration.showNotification(title, { body, icon: image || '/assets/icons/icon-72x72.png' });
    });
}