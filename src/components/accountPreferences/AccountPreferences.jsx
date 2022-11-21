import React from "react";
import { Link } from "react-router-dom";
import styles from "./AccountPreferences.module.scss";
import profile from "../../assets/profile.png";
import SideBar from "./SideBar.jsx";
import Header from "./Header.jsx";

const AccountPreferences = () => {
  return (
    <>
      <section>
        <div className={styles.mainContainer}>
          <SideBar />
          <div className={styles.container}>
            <Header />
            <div className={styles.account}>
              <img
                src={profile}
                alt="Profile"
                className={styles.account__profile}
              />
              <h1 className={styles.account__email}>hngI9@gmail.com</h1>
              <p className={styles.account__p}>You are using Ticked for free</p>
              <div className={styles.account__links}>
                <Link
                  className={`${styles.account__btn} ${styles.account__profile}`}
                >
                  Profile
                </Link>
                <Link className={styles.account__btn}>Sign out</Link>
                <Link
                  className={`${styles.account__btn} ${styles.account__deleteBtn}`}
                >
                  Delete Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountPreferences;
