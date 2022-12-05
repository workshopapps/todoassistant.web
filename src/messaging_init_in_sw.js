import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC_K0ETTdpRlb7eeqnGheeO5x3BojV1rmc",
  authDomain: "todoassistant-f4d6b.firebaseapp.com",
  projectId: "todoassistant-f4d6b",
  storageBucket: "todoassistant-f4d6b.appspot.com",
  messagingSenderId: "843186688808",
  appId: "1:843186688808:web:62eb1bc26975472c05b61d"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BJju61fHhp611F_JkyDIhqBmlbid81JiLueH6zjxLUz0WV3NuC3_W5OtFfuCop7wqV5z00W5o39VNfj4i-9II8Y"
      }).then(currentToken => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
          localStorage.setItem(
            "firebaseNotifToken",
            JSON.stringify(currentToken)
          );
          //set the setDevice_Id useState to be the currentToken
          //send the post request to notifications when a user logs
        } else {
          console.log("cannot get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
