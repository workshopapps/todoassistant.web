import React from "react";
import styles from "./NavSidebar.module.scss";
import logo from "../../assets/assets/tickedlogo.png";
import arrow from "../../assets/assets/arrow-left.png";

const ProfileSideBar = () => {
  return (
    <div className={styles.sidecon}>
      <div className={styles.sidecon1}>
        <img src={logo} className={styles.logo} alt="Ticked Logo" />
      </div>
      <div>
        <a href="/settings/profile" className={styles.sidecon2}>
          <img src={arrow} className={styles.arrow} alt="Back Arrow" />
          <h2>Back</h2>
        </a>
      </div>
    </div>
  );
};

export default ProfileSideBar;
