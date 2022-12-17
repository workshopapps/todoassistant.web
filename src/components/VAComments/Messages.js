// import React from "react";
// import { BiLoaderCircle } from "react-icons/bi";
// import { AiOutlineCheckCircle } from "react-icons/ai";
import moment from "moment";
import styles from "./Comments.module.scss";

const Messages = ({ data }) => {
  const remeiningTime = date => {
    return moment(date).endOf(date).fromNow();
  };

  return data?.map(m => (
    <div
      key={m.id}
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: `${(m.status === "va" && "flex-end") || "flex-start"}`
      }}
    >
      <span
        className={styles.message}
        style={{
          fontFamily: `'Lato', sans-serif !important'`,
          fontStyle: `${(m.isEmoji && "normal") || "italic"}`,
          fontSize: `${(m.isEmoji && "58px") || "20px"}`,
          textAlign: `start`,
          padding: `${
            (m.status === "va" && "10px 20px 35px 15px") ||
            "10px 15px 35px 10px"
          }`,
          maxWidth: "42%",
          wordBreak: "break-word",
          color: "white",
          backgroundColor: `${
            (m.status === "va" && "#9c27b0") || "rgba(113, 77, 217, 8.5)"
          }`,
          borderRadius: `${
            (m.status === "va" && "5px 5px 0px 5px") || "5px 5px 5px 0px"
          }`
        }}
      >
        {m.comment}
      </span>
      <span
        style={{
          display: `${(m.status === "va" && "block") || "none"}`,
          position: "absolute",
          right: `${(m.status === "va" && "0") || ""} `,
          bottom: "-17px",
          fontSize: "10px",
          color: "rebeccapurple",
          fontStyle: "italic"
        }}
        className={styles.time}
      >
        {remeiningTime(m.created_at)}
      </span>

      <span
        style={{
          display: `${(m.status === "va" && "none") || "block"}`,
          position: "absolute",
          left: `${(m.status === "va" && "") || "0"} `,
          bottom: "-17px",
          fontSize: "10px",
          color: "rebeccapurple",
          fontStyle: "italic"
        }}
        className={styles.time}
      >
        {remeiningTime(m.created_at)}
      </span>
    </div>
  ));
};

export default Messages;
