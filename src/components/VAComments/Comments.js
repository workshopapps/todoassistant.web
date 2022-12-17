import React, { useRef, useState, useEffect } from "react";
import { BiSend } from "react-icons/bi";
import styles from "./Comments.module.scss";
import Messages from "./Messages";
import TextInput from "./TextInput/TextInput";
// import data from "./_mock";

import { useParams } from "react-router-dom";
import useSound from "use-sound";
import useDetectKeyboard from "use-detect-keyboard-open";
import messageSound from "../../assets/sounds/message.mp3";
import emoji from "../../assets/emoji.png";
import Picker from "emoji-picker-react";
// import { FaSmileWink } from "react-icons/fa";

import "./Comments.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Comments = () => {
  const { id: taskId } = useParams();
  const [play] = useSound(messageSound);
  const bottomRef = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoadiing] = useState(true);
  const [sent, setSent] = useState(false);
  const [typedMessage, setTypedMessage] = useState(null);
  const [canSend, setCanSend] = useState(false);
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const isKeyboardOpen = useDetectKeyboard();

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
      {
        id: id,
        status: "va",
        comment: message,
        isEmoji: !typedMessage,
        created_at: new Date()
      }
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
  }, [apiData, isKeyboardOpen, message]);

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

  const getComments = async () => {
    setIsLoadiing(true);
    let va = JSON.parse(localStorage.getItem("VA"));

    if (va) {
      try {
        const response = await axios.get(
          `https://api.ticked.hng.tech/api/v1/task/comment/${taskId}`,
          {
            headers: {
              Authorization: `Bearer ${va.extra.token}`
            }
          }
        );
        console.log(response);
        if (response.data.data) {
          setApiData(response.data.data);
        }

        // const vaTasks = response.data.data;

        // setData(vaTasks);
        // localStorage.setItem("Tasks", JSON.stringify(vaTasks));
        // setIsLoadiing(false);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoadiing(false);
      }
    }
  };

  const sendComment = async () => {
    let va = JSON.parse(localStorage.getItem("VA"));

    if (va) {
      const response = await axios.post(
        `https://api.ticked.hng.tech/api/v1/task/comment`,
        {
          comment: message,
          created_at: new Date(),
          task_id: taskId,
          sender_id: va.data.va_id,
          status: "va",
          isEmoji: (!typedMessage && 1) || 0
        },
        {
          headers: {
            Authorization: `Bearer ${va.extra.token}`
          }
        }
      );
      if (response.status === 200) {
        console.log(response);
        setSent(true);
      } else {
        setSent(false);
      }

      // setData(vaTasks);
      // const response = response.data.data;
      // localStorage.setItem("Tasks", JSON.stringify(vaTasks));
      // setIsLoadiing(false);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      {(isLoading && (
        <div style={{ width: "100%", display: "flex", placeContent: "center" }}>
          {" "}
          <CircularProgress
            className={styles.spinner}
            sx={{ color: "rebeccapurple" }}
          />{" "}
        </div>
      )) || (
        <>
          <div className={styles.commentWrapper}>
            <div className={styles.comments} id={"chat"}>
              {(!isLoading && apiData.length === 0 && (
                /* EMPTY STATE HERE */
                <div
                  className={styles.empty__state}
                  style={{ marginTop: "119px" }}
                >
                  <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                    No Messages
                  </h3>
                  <p style={{ textAlign: "center" }}>Start a Conversation</p>
                </div>
              )) || (
                /* MESSAGES */

                <Messages data={apiData} sent={sent} />
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
      )}
    </>
  );
};

export default Comments;
