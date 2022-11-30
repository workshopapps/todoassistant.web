import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProPreference.module.scss";

const ProPreferences = () => {
  return (
    <>
      <section className={styles.proSection}>
        <div className={styles.pro}>
          <div className={styles.proFirst}>
            <h1 className={styles.pro__headerText}>
              Double your achievement with Ticked Premium
            </h1>
            <div className={styles.pro__container}>
              <div className={styles.proInnerContainer}>
                <div className={styles.proImg}>
                  <img src="/assets/calendar.png" alt="calendar" />
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
                  <img src="/assets/members.png" alt="members" />
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
                  <img src="/assets/duration.png" alt="duration" />
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
                  <img src="/assets/themes.png" alt="themes" />
                </div>

                <div className={styles.proText}>
                  <span className={styles.proTextHeader}>Premium Themes</span>
                  <span className={styles.proTextSpan}>
                    More themes to match your personality.
                  </span>
                </div>
              </div>

              <div className={styles.proInnerContainer}>
                <div className={styles.proImg}>
                  <img
                    src="/assets/reminder1.png"
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
                  <img src="/assets/clock.png" alt="more reminder" />
                </div>
                <div className={styles.proText}>
                  <span className={styles.proTextHeader}>More Reminders</span>
                  <span className={styles.proTextSpan}>
                    Add up to 5 reminders to each task.
                  </span>
                </div>
              </div>

              <div className={styles.proInnerContainer}>
                <div className={styles.proImg}>
                  <img src="/assets/reminder2.png" alt="reminder list" />
                </div>
                <div className={styles.proText}>
                  <span className={styles.proTextHeader}>
                    More Lists, Task & Check items
                  </span>
                  <span className={styles.proTextSpan}>
                    Create up to 299 lists, 999 tasks per list, and 199 check
                    items per task.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.proSecond}>
            <div>
              <Link className={styles.proBtn}>Upgrade Now </Link>
            </div>

            <div className={styles.terms}>
              <Link className={styles.link}>Privacy Policy</Link>
              <hr className={styles.hr} />
              <Link className={styles.link}>Terms of use</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProPreferences;
