import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import account from "../../assets/account.png";
import pro from "../../assets/pro.png";
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
      <div className={styles.secondHeader}>
        <Link to="/account" className={styles.secondHeader__div}>
          <img src={account} alt="Account" className={styles.imgAccount} />
          <span>Account</span>
        </Link>
        <Link to="/pro" className={`${styles.secondHeader__div} ${styles.pro}`}>
          <img src={pro} alt="Pro" className={styles.imgAccount} />
          <span>Pro</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
