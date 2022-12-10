import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import styles from "./Comments.module.scss";
import data from "./_mock";
import Picker from "emoji-picker-react";
import { FaSmileWink } from "react-icons/fa";
import Messages from "./Messages";

import "./Comments.css";
import { useEffect } from "react";

const Comments = () => {
  const [apiData, setApiData] = useState(data);
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = emojiObject => {
    console.log(emojiObject.emoji);
    setMessage(prev => prev + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleSend = () => {
    let id = Math.floor(Math.random * 200);
    console.log(message);
    setApiData([...apiData, { id: id, status: "user", comment: message }]);
    setMessage("");
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  useEffect(() => {
    window.scrollTo(0, document.getElementById("chat").scrollHeight);

    setApiData(data);
  }, []);

  const handleMessage = e => {
    setMessage(e.target.value);
    // console.log(message.text);
  };
  //{"status":"success","code":202,"message":"Login Successful","data":{"user_id":"b7e4da28-3194-4297-a6f2-881b55b9f0ae","email":"max@gmail.com","first_name":"Messi","last_name":"Ankara","phone":"98082847348978","gender":"","access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im1heEBnbWFpbC5jb20iLCJJZCI6ImI3ZTRkYTI4LTMxOTQtNDI5Ny1hNmYyLTg4MWI1NWI5ZjBhZSIsIlN0YXR1cyI6InVzZXIiLCJleHAiOjE2NzA2NzQ3ODB9.R9auVuyY87KjfMd0xwfv5A8ylKLbhZXzGPioCTVFhDA","refresh_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6Im1heEBnbWFpbC5jb20iLCJJZCI6ImI3ZTRkYTI4LTMxOTQtNDI5Ny1hNmYyLTg4MWI1NWI5ZjBhZSIsIlN0YXR1cyI6IiIsImV4cCI6MTY3MDgwNDM4MH0.SuISsdcN069cYFoExtM9Y3EegPDmZPkpLpIz8-kdA2s"}}
  return (
    <>
      <div className={styles.commentWrapper}>
        <div className={styles.comments} id={"chat"}>
          {(!apiData && (
            /* EMPTY STATE HERE */
            <div className={styles.empty__state}>
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                No Messages
              </h3>
              <p style={{ textAlign: "center" }}>Start a Conversation</p>
            </div>
          )) || (
            /* MESSAGES */

            <Messages data={apiData} />
          )}
        </div>
      </div>
      <div className={styles.inputField}>
        {/* INput Emoji Here */}
        <div>
          <FaSmileWink
            className={styles.emojiFace}
            color="rgb(170 170 170)"
            cursor={"pointer"}
            onClick={() => setShowPicker(prev => !prev)}
          />
          {showPicker && (
            <Picker className={styles.emoji} onEmojiClick={onEmojiClick} />
          )}
        </div>
        {/* Message field */}
        <input
          type={"text"}
          style={{ fontSize: "14px" }}
          required
          title="message"
          placeholder="Type Your message here"
          value={message}
          onChange={handleMessage}
          onKeyDown={handleEnter}
        />

        {/* submitIcon */}
        <BiSend className={styles.sendButton} onClick={handleSend} />
      </div>
    </>
  );
};

export default Comments;
