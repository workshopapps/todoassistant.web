// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB11d-CF7hi7_bKzhsDxBlV90O1ZWi9gsE",
  authDomain: "vanotification-dc5dd.firebaseapp.com",
  projectId: "vanotification-dc5dd",
  storageBucket: "vanotification-dc5dd.appspot.com",
  messagingSenderId: "130437306789",
  appId: "1:130437306789:web:7e2f2f9556dfd2d7fc704c",
  measurementId: "G-5GK9W49H4J"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BAFPP7uphUO3_XcWkoTotppj5EV_hr5IetQ4Fo9J9nDFtp-UhEKN89HvlfLsnqrYtMLYVMBxtO-pt50l0wrEIxk"
  })
    .then(currentToken => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch(err => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise(resolve => {
    onMessage(messaging, payload => {
      resolve(payload);
    });
  });
