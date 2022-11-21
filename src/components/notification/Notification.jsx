import { BsBell } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import styles from "./Notification.module.scss";

const Notification = () => {
  return (
    <section className={styles.container}>
      <div className={styles.backContainer}>
        <p className={styles.backText}>
          <AiOutlineArrowLeft className={styles.iconBack} />
          Back
        </p>
      </div>

      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>
          <BsBell className={styles.headerIcon} />
          Notification
        </h1>
      </div>

      <div className={styles.todayRow}>
        <h1 className={styles.todayTitle}>Today</h1>
        <p className={styles.todaySubTitle}> Friday, November 11th, 2022</p>
      </div>

      <div className={styles.contentHolder}>
        <div className={styles.contentBox}>
          <h3 className={styles.content}>
            John Andrew just assigned you a task
          </h3>
          <p className={styles.contentTodayText}>
            Fri, Nov 11th, 2022 <GoPrimitiveDot /> 09:00AM
          </p>
        </div>

        <div className={styles.contentBox}>
          <h3 className={styles.contentTodayTitle}>
            Anita Jacobs task is overdue
          </h3>
          <p className={styles.contentTodayText}>
            Fri, Nov 11th, 2022 <GoPrimitiveDot /> 07:00AM
          </p>
        </div>

        <div className={`${styles.contentBox} ${styles.contentBlock}`}>
          <p className={styles.contentTodayBig} style={{ color: "#333333" }}>
            You had a missed call From Sandra David
            <span className={styles.contentTodaySmall}>
              Fri, 11th Nov, 2022 <GoPrimitiveDot /> 05.00AM
            </span>
          </p>
        </div>
      </div>

      <div className={styles.todayRow}>
        <h1 className={styles.todayTitle}>Yesterday</h1>
        <p className={styles.todaySubTitle}>Thursday, November 11th, 2022</p>
      </div>

      <div className={styles.contentHolder}>
        <div className={styles.contentBox}>
          <p className={styles.contentTodayBig}>
            Uneh Udoh edited a task
            <span className={styles.contentTodaySmall}>
              Thu, Nov 11th, 2022 <GoPrimitiveDot /> 09:00PM
            </span>
          </p>
        </div>

        <div className={styles.contentBox}>
          <p className={styles.contentTodayBig}>
            Amina Shauibu task is overdue
            <span className={styles.contentTodaySmall}>
              {" "}
              Thu, Nov 12th, 2022 <GoPrimitiveDot /> 05:00PM
            </span>
          </p>
        </div>
      </div>

      <div className={styles.todayRow}>
        <h1 className={styles.todayTitle}>Last Week</h1>
      </div>

      <div className={styles.contentHolder}>
        <div className={styles.contentBox}>
          <p className={styles.contentTodayBig}>
            Effiong Mfon just sent you a message
            <span className={styles.contentTodaySmall}>
              Sun, Nov 9th, 2022 <GoPrimitiveDot /> 08:00PM
            </span>
          </p>
        </div>

        <div className={styles.contentBox}>
          <p className={styles.contentTodayBig}>
            Ifeoma Nwabunze task is overdue
            <span className={styles.contentTodaySmall}>
              Fri, Nov 7th, 2022 <GoPrimitiveDot /> 02:00PM
            </span>
          </p>
        </div>

        <div className={styles.contentBox}>
          <p className={styles.contentTodayBig}>
            Adamu Garba just completed a task
            <span className={styles.contentTodaySmall}>
              Fri, Nov 1st, 2022 <GoPrimitiveDot /> 09:00AM
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Notification;
