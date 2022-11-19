import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AccountPreferences.module.scss";
import account from "../../assets/account.png";
import pro from "../../assets/pro.png";
import profile from "../../assets/profile.png";
import joseph from "../../assets/Joseph.png";

function AccountPreferences() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <div className={styles.mainHeader}>
            <div className={styles.header}>
              <div className={styles.header__div}>
                <p className={styles.settings}>Settings</p>
                <p>Preferences</p>
              </div>
              <img src={joseph} alt="Name" className={styles.header__name} />
            </div>
          </div>
          <div className={styles.secondHeader}>
            <div className={styles.secondHeader__div}>
              <img src={account} alt="Account" className={styles.imgAccount} />
              <span>Account</span>
            </div>
            <div className={`${styles.secondHeader__div} ${styles.pro}`}>
              <img src={pro} alt="Pro" className={styles.imgAccount} />
              <span>Pro</span>
            </div>
          </div>
          <div className={styles.account}>
            <img
              src={profile}
              alt="Profile"
              className={styles.account__profile}
            />
            <h1 className={styles.account__email}>hngI9@gmail.com</h1>
            <p className={styles.account__p}>You are using Ticked for free</p>
            <NavLink
              className={`${styles.account__btn} ${styles.account__profile}`}
            >
              Profile
            </NavLink>
            <NavLink className={styles.account__btn}>Sign out</NavLink>
            <NavLink
              className={`${styles.account__btn} ${styles.account__deleteBtn}`}
            >
              Delete Account
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default AccountPreferences;
