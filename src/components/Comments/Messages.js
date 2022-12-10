import React from "react";
import styles from "./Comments.module.scss";

const Messages = ({ data }) => {
  console.log(new Date(`${data}`));
  return data?.map(m => (
    <div
      key={m.id}
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: `${(m.status === "user" && "flex-end") || "flex-start"}`
      }}
    >
      <span
        className={styles.message}
        style={{
          fontSize: "20px",
          textAlign: `${(m.status === "user" && "end") || "start"}`,
          padding: `${
            (m.status === "user" && "10px 20px 35px 68px") ||
            "10px 68px 35px 10px"
          }`,
          maxWidth: "42%",
          color: "white",
          backgroundColor: `${
            (m.status === "user" && "rgba(113, 77, 217, 0.5)") ||
            "rgba(113, 77, 217, 8.5)"
          }`,
          borderRadius: `${
            (m.status === "user" && "5px 5px 0px 5px") || "5px 5px 5px 0px"
          }`
        }}
      >
        {m.comment}{" "}
      </span>
      <span
        style={{
          display: `${(m.status === "user" && "block") || "none"}`,
          position: "absolute",
          right: `${(m.status === "user" && "14px") || ""} `,
          bottom: "3px",
          fontSize: "10px",
          color: "white"
        }}
      >
        4pm{" "}
      </span>
      <span
        style={{
          display: `${(m.status === "user" && "none") || "block"}`,
          position: "absolute",
          left: `${(m.status === "user" && "") || "14px"} `,
          bottom: "3px",
          fontSize: "10px",
          color: "white"
        }}
      >
        4pm{" "}
      </span>
    </div>
  ));
};

export default Messages;
