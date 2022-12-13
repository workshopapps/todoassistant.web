// Firebase Cloud Messaging Configuration File.
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axios from "axios";

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

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  const id = JSON.parse(localStorage.getItem("user"));
  const idVa = JSON.parse(localStorage.getItem("VA"));
  return getToken(messaging, {
    vapidKey: `BIjP8ngeWZ_-4DoNVGjxPV1eJFKpUVK9-GakbhHC8TuTPKxXtGLVk_UNtFs1KqZF6vAUiTEqJ95RDlSIETLPLZM`
  })
    .then(currentToken => {
      if (currentToken) {
        // console.log("current token for client 1: ", currentToken);
        localStorage.setItem(
          "firebaseNotification",
          JSON.stringify(currentToken)
        );

        const getNotification = async () => {
          const data = {
            user_id: `${id?.data?.user_id || idVa?.data?.va_id}`,
            device_id: currentToken
          };
          try {
            // console.log("testing");
            await axios
              .post("https://api.ticked.hng.tech/api/v1/notification", data, {
                headers: {
                  Authorization: `Bearer ${
                    id?.data?.access_token || idVa?.extra?.token
                  }`
                }
              })
              .then(res => console.log(res.data));
          } catch (error) {
            console.error(error);
          }
        };
        getNotification();
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

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise(resolve => {
    onMessage(messaging, payload => {
      resolve(payload);
    });
  });
