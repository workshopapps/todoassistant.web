// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    // apiKey: "AIzaSyB11d-CF7hi7_bKzhsDxBlV90O1ZWi9gsE",
    // authDomain: "vanotification-dc5dd.firebaseapp.com",
    // projectId: "vanotification-dc5dd",
    // storageBucket: "vanotification-dc5dd.appspot.com",
    // messagingSenderId: "130437306789",
    // appId: "1:130437306789:web:7e2f2f9556dfd2d7fc704c",
    // measurementId: "G-5GK9W49H4J"

    apiKey: "AIzaSyBvn52I4CFGO7B7P2QX26gAADblHosA39g",
    authDomain: "taskman-322f8.firebaseapp.com",
    projectId: "taskman-322f8",
    storageBucket: "taskman-322f8.appspot.com",
    messagingSenderId: "881961438325",
    appId: "1:881961438325:web:fbb18693efdb496ac37c3c"


};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});