import React from "react";
import { Link } from "react-router-dom";
import styles from "./AccountPreferences.module.scss";
import profile from "../../../assets/profile.png";
import SideBar from "../SideBar.jsx";
import Header from "../Header.jsx";
import pro from "../../../assets/pro.png";
import account from "../../../assets/account.png";

const AccountPreferences = () => {
  return (
    <>
      <section>
        <div className={styles.mainContainer}>
          <SideBar />
          <div className={styles.container}>
            <Header />
            <div className={styles.secondHeader}>
              <Link
                to="/account"
                className={`${styles.secondHeader__div} ${styles.accountLink}`}
              >
                <img
                  src={account}
                  alt="Account"
                  className={styles.imgAccount}
                />
                <span>Account</span>
              </Link>
              <Link
                to="/pro"
                className={`${styles.secondHeader__div} ${styles.proLink}`}
              >
                <img src={pro} alt="Pro" className={styles.imgAccount} />
                <span>Pro</span>
              </Link>
            </div>
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
                  to="/profile"
                  className={`${styles.account__btn} ${styles.account__profile}`}
                >
                  Profile
                </Link>
                <Link to="/" className={styles.account__btn}>
                  Sign out
                </Link>
                <Link
                  to="/"
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
