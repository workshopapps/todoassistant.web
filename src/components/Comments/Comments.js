import React, { useRef, useState, useEffect } from "react";
import { BiSend } from "react-icons/bi";
import styles from "./Comments.module.scss";
import Messages from "./Messages";
import TextInput from "./TextInput/TextInput";
import data from "./_mock";
import useSound from "use-sound";
import useDetectKeyboard from "use-detect-keyboard-open";
import messageSound from "../../assets/sounds/message.mp3";
import emoji from "../../assets/emoji.png";
import Picker from "emoji-picker-react";
import axios from "axios";
// import { FaSmileWink } from "react-icons/fa";

import "./Comments.css";

const Comments = () => {
  const [play] = useSound(messageSound);
  const bottomRef = useRef(null);
  const [apiData, setApiData] = useState(data);
  const [typedMessage, setTypedMessage] = useState(null);
  const [canSend, setCanSend] = useState(false);
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const isKeyboardOpen = useDetectKeyboard();

  // POST {{base_url}}/task/comment

  const sendComment = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let taskId = JSON.parse(localStorage.getItem("taskDetialsContent")).task_id;

    if (user) {
      const response = await axios.post(
        `https://api.ticked.hng.tech/api/v1/task/comment`,
        {
          task_id: taskId,
          sender_id: user.data.user_id,
          comment: message,
          created_at: new Date(),
          status: "user",
          isEmoji: (typedMessage && 1) || 0
        },
        {
          headers: {
            Authorization: `Bearer ${user.data.extra_token}`
          }
        }
      );

      console.log(response);
      // const vaTasks = response.data.data;

      // setData(vaTasks);
      // localStorage.setItem("Tasks", JSON.stringify(vaTasks));
      // setIsLoadiing(false);
    }
  };

  const onEmojiClick = emojiObject => {
    setCanSend(true);
    setMessage(prev => prev + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleSend = () => {
    let id = Math.floor(Math.random * 200);

    play();
    sendComment();
    setApiData([
      ...apiData,
      { id: id, status: "user", comment: message, isEmoji: !typedMessage }
    ]);
    setCanSend(false);
    setTypedMessage(false);
    setMessage("");
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  //Automatically Scrool to Bottom when new
  //Messages Comes In
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [apiData, isKeyboardOpen]);

  const handleMessage = e => {
    //Detect if only Emoji is being sent to incrase the font size
    let { value: message } = e.target;
    let trimmedMessage = message.trim();

    if (message && trimmedMessage.length > 0) {
      setCanSend(true);
      setTypedMessage(true);
    } else {
      setCanSend(false);
    }

    setMessage(message);

    // console.log(message.text);
  };

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
          {/* BOTTOM */}
          <div ref={bottomRef}></div>
        </div>
      </div>
      <div className={styles.inputField}>
        {/* INput Emoji Here */}
        <div>
          <img
            src={emoji}
            alt="emoji"
            style={{ height: "40px", cursor: "pointer" }}
            onClick={() => setShowPicker(prev => !prev)}
          />
          {showPicker && (
            <Picker className={styles.emoji} onEmojiClick={onEmojiClick} />
          )}
        </div>
        {/* Message field */}
        <input
          type={"text"}
          style={{ fontSize: "20px", display: "none" }}
          required
          title="message"
          placeholder="Type Your message here"
          value={message}
          onChange={handleMessage}
          onKeyDown={handleEnter}
        />
        <TextInput value={message} onChange={handleMessage} />

        {/* submitIcon */}
        <BiSend
          style={{
            backgroundColor: `${
              (canSend && "rebeccapurple") || "rgb(51 51 51 / 29%)"
            }`
          }}
          className={styles.sendButton}
          onClick={handleSend}
          pointerEvents={`${(canSend && "auto") || "none"}`}
        />
      </div>
    </>
  );
};

export default Comments;
