import React from "react";
import styles from "./RightSideHome.module.scss";
import ticked from "../../../assets/dashboard/DashboardHome/ticked.svg";
import streak from "../../../assets/dashboard/DashboardHome/streak.svg";
import bell from "../../../assets/dashboard/DashboardHome/bell.svg";
import timer from "../../../assets/dashboard/DashboardHome/timer.svg";

const RightSideHome = () => {
  return (
    <div style={{ borderLeft: "none" }} className={styles.container}>
      <header className={styles.activity}>Activity</header>
      <div className={styles.tickContainer}>
        <div className={styles.ticked}>
          <div>
            <img src={ticked} alt="ticked" />
          </div>
          <p className={styles.p1}>3/7 To do's</p>
          <span className={styles.span}>Ticked</span>
        </div>
        {/* streak */}
        <div className={styles.ticked}>
          <div>
            <img src={streak} alt="ticked" />
          </div>
          <p className={styles.p1}>7 days</p>
          <span className={styles.span}>Streak</span>
        </div>
      </div>

      {/* log */}
      <div className={styles.logContainer}>
        <p className={styles.log}>Log</p>
        <p className={styles.refresh}>Refreshes in 3h</p>
      </div>

      {/* status */}
      <div>
        <div className={styles.statusContainer}>
          <div className="">
            <div className={styles.ppContainer}>
              <div className={styles.pp}>
                <p className={styles.status}>Status Change - </p>
                <p className={styles.resolve}> Resolve frontend bugs</p>
              </div>
              <p className={styles.hour}>3hrs</p>
            </div>
            <div className={styles.color}>
              <div
                style={{ width: "24px", height: "24px", background: "#FDA758" }}
                className={styles.box}
              />
              <p className={styles.to}>to</p>
              <div
                style={{ width: "24px", height: "24px", background: "#37E288" }}
                className={styles.box}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.statusContainer}>
          <div className="">
            <div className={styles.ppContainer}>
              <div className={styles.pp}>
                <p className={styles.status}>New to do - </p>
                <p className={styles.resolve}> Resolve frontend bugs</p>
              </div>
              <p className={styles.hour}>3hrs</p>
            </div>
          </div>
        </div>
        <div className={styles.statusContainer}>
          <div className="">
            <div className={styles.ppContainer}>
              <div className={styles.pp}>
                <p className={styles.status}>To do deleted - </p>
                <p className={styles.resolve}> Resolve frontend bugs</p>
              </div>
              <p className={styles.hour}>3hrs</p>
            </div>
          </div>
        </div>
        <div className={styles.statusContainer}>
          <div className="">
            <div className={styles.ppContainer}>
              <div className={styles.pp}>
                <p className={styles.status}>To do updated - </p>
                <p className={styles.resolve}> Resolve frontend bugs</p>
              </div>
              <p className={styles.hour}>3hrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* pop up */}
      <div className={styles.pop}>
        <div className={styles.notification}>
          <div>
            <img src={bell} alt="bell" />
          </div>
          <div style={{ marginLeft: "24px" }}>
            <p>Resolve frontend bugs</p>
            <div className={styles.time}>
              <div>
                <img src={timer} alt="timer" />
              </div>
              <span className={styles.span}>4hrs, 8hrs</span>
            </div>
            <p className={styles.dismiss}>Dismiss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideHome;
