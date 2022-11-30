import React from "react";
import styles from "./Header.module.scss";
import name from "../../assets/Joseph.png";

const Header = () => {
  return (
    <>
      <div className={styles.mainHeader}>
        <div className={styles.header}>
          <div className={styles.header__div}>
            <p className={styles.settings}>Settings</p>
            <p>Preferences</p>
          </div>
          <img src={name} alt="Name" className={styles.header__name} />
        </div>
      </div>
    </>
  );
};

export default Header;
