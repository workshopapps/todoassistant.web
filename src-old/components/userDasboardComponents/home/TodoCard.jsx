import React from "react";
import styles from "./TodoCard.module.scss";
import vaIcon from "../../../assets/autobrightness.png";
import timeIcon from "../../../assets/timer-start.png";
import messageIcon from "../../../assets/message-2.png";

const TodoCard = ({ va, completed, handleChange, title, onClick }) => {
  const completedStyle = completed ? { color: "#D3D0D9" } : {};
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.overlay}
        onClick={() => {
          onClick();
        }}
      ></div>
      <div className={styles.content}>
        <h4 style={completedStyle}>{title}</h4>
        <div className={styles.contentWrapper}>
          {va && (
            <div className={styles.va}>
              <img src={vaIcon} alt="" />
              <p>Assigned to VA</p>
            </div>
          )}
          <div className={styles.time}>
            <img src={timeIcon} alt="" />
            <p>6:00pm</p>
          </div>
          <div className={styles.chat}>
            <img src={messageIcon} alt="" />
            <p>4</p>
          </div>
        </div>
      </div>
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" checked={completed} onChange={handleChange} />
      </div>
    </div>
  );
};

export default TodoCard;
