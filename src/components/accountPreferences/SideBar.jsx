import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.scss";
import ticked from "../../assets/ticked.png";
import add from "../../assets/add.png";
import home from "../../assets/home.png";
import notification from "../../assets/notification.png";
import assistant from "../../assets/assistant.png";

const SideBar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar__ticked}>
          <img src={ticked} alt="Ticked" />
          <h1 className={styles.ticked}>TICKED</h1>
        </div>

        <div>
          <Link className={`${styles.link} ${styles.todoBtn}`}>
            <img src={add} alt="Add" />
            <span>New to do</span>
          </Link>
        </div>

        <div className={styles.notificationSide}>
          <Link
            to="/"
            className={`${styles.link} ${styles.notificationSide__info}`}
          >
            <img src={home} alt="Home" />
            <p>Home</p>
          </Link>
          <Link
            to="/dashboard/notification"
            className={`${styles.link} ${styles.notificationSide__info}`}
          >
            <img src={notification} alt="Notification" />
            <p>Notification</p>
          </Link>
          <Link
            to="/"
            className={`${styles.link} ${styles.notificationSide__info}`}
          >
            <img src={assistant} alt="Assistant" />
            <p>Assistant</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
