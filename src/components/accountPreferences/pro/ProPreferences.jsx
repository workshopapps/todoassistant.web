import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";
import styles from "./ProPreference.module.scss";
import calendar from "../../../assets/calendar.png";
import members from "../../../assets/members.png";
import duration from "../../../assets/duration.png";
import themes from "../../../assets/themes.png";
import reminder1 from "../../../assets/reminder1.png";
import clock from "../../../assets/clock.png";
import reminder2 from "../../../assets/reminder2.png";
import pro from "../../../assets/pro.png";
import account from "../../../assets/account.png";

const ProPreferences = () => {
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
            <div className={styles.pro}>
              <div className={styles.proFirst}>
                <h1 className={styles.pro__headerText}>
                  Double your achievement with Ticked Premium
                </h1>
                <div className={styles.pro__container}>
                  <div className={styles.proInnerContainer}>
                    <div className={styles.proImg}>
                      <img src={calendar} alt="calendar" />
                    </div>
                    <div className={styles.proText}>
                      <span className={styles.proTextHeader}>
                        Monthly Calender View
                      </span>
                      <span className={styles.proTextSpan}>
                        Check your monthly plan at a glance.
                      </span>
                    </div>
                  </div>

                  <div className={styles.proInnerContainer}>
                    <div className={styles.proImg}>
                      <img src={members} alt="members" />
                    </div>

                    <div className={styles.proText}>
                      <span className={styles.proTextHeader}>
                        More Sharing Members
                      </span>
                      <span className={styles.proTextSpan}>
                        Group sharing with up to 29 members.
                      </span>
                    </div>
                  </div>

                  <div className={styles.proInnerContainer}>
                    <div className={styles.proImg}>
                      <img src={duration} alt="duration" />
                    </div>
                    <div className={styles.proText}>
                      <span className={styles.proTextHeader}>Duration</span>
                      <span className={styles.proTextSpan}>
                        Set up both start time & end time for tasks.
                      </span>
                    </div>
                  </div>

                  <div className={styles.proInnerContainer}>
                    <div className={styles.proImg}>
                      <img src={themes} alt="themes" />
                    </div>

                    <div className={styles.proText}>
                      <span className={styles.proTextHeader}>
                        Premium Themes
                      </span>
                      <span className={styles.proTextSpan}>
                        More themes to match your personality.
                      </span>
                    </div>
                  </div>

                  <div className={styles.proInnerContainer}>
                    <div className={styles.proImg}>
                      <img
                        src={reminder1}
                        alt="reminder check"
                        className={styles.proImgFive}
                      />
                    </div>
                    <div className={styles.proText}>
                      <span className={styles.proTextHeader}>
                        Reminder for Check Items
                      </span>
                      <span className={styles.proTextSpan}>
                        Create reminder for check items.
                      </span>
                    </div>
                  </div>

                  <div className={styles.proInnerContainer}>
                    <div className={styles.proImg}>
                      <img src={clock} alt="more reminder" />
                    </div>
                    <div className={styles.proText}>
                      <span className={styles.proTextHeader}>
                        More Reminders
                      </span>
                      <span className={styles.proTextSpan}>
                        Add up to 5 reminders to each task.
                      </span>
                    </div>
                  </div>

                  <div className={styles.proInnerContainer}>
                    <div className={styles.proImg}>
                      <img src={reminder2} alt="reminder list" />
                    </div>
                    <div className={styles.proText}>
                      <span className={styles.proTextHeader}>
                        More Lists, Task & Check items
                      </span>
                      <span className={styles.proTextSpan}>
                        Create up to 299 lists, 999 tasks per list, and 199
                        check items per task.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.proSecond}>
                <div>
                  <Link to="/" className={styles.proBtn}>
                    Upgrade Now{" "}
                  </Link>
                </div>

                <div className={styles.terms}>
                  <Link to="/policy" className={styles.link}>
                    Privacy Policy
                  </Link>
                  <hr className={styles.hr} />
                  <Link to="/policy" className={styles.link}>
                    Terms of use
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProPreferences;
