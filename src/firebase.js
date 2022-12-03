import axios from "axios";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { useContext, useState } from "react";
import { AuthContext } from "./contexts/authContext/AuthContext";

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console.
const firebaseConfig = {
  apiKey: "AIzaSyBn0mmr0jjn97B7ch1hWc8uOIWxQPCEmLg",
  authDomain: "ticked-a16dc.firebaseapp.com",
  projectId: "ticked-a16dc",
  storageBucket: "ticked-a16dc.appspot.com",
  messagingSenderId: "1025391036293",
  appId: "1:1025391036293:web:be9f62fe63f67d3db066ec",
  measurementId: "G-T6ZE38ZFJD"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const sendDetailsRequest = async notifDetails => {
  try {
    const response = await axios.post("/notifications", notifDetails);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const requestForToken = () => {
  const [device_id, setDevice_Id] = useState("");
  const { user } = useContext(AuthContext);
  const user_id = user.id;

  return getToken(messaging, {
    vapidKey:
      "BBge5QSluzADgC_rU6urzDR1_OhvTaTNLvhjgjDVnJ9ElbEi8fhWyJiJ4eLL1jz3CE3-Npn1_yvX41BifRwnVbk"
  })
    .then(currentToken => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setDevice_Id(currentToken);
        sendDetailsRequest({ device_id, user_id });
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
