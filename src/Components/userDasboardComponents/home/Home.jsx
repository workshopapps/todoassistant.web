import React from "react";
import styles from "./Home.module.scss";
import good from "../../../assets/dashboard/DashboardHome/good.svg";
import timer from "../../../assets/dashboard/DashboardHome/timer.svg";
import dot from "../../../assets/dashboard/DashboardHome/dot.svg";
import RightSideHome from "./RightSideHome";

const Home = () => {
  return (
    <section>
      <div className={styles.container}>
        <div
          style={{ borderBottom: "none", borderLeft: "none" }}
          className={styles.firstContainer}
        >
          <header className={styles.todo}>To do's</header>

          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div key={index} className={styles.mainContainer}>
                <div className={styles.listContainer}>
                  <div>
                    {index % 3 === 0 ? (
                      <img src={good} alt="good_tick" />
                    ) : (
                      <img src={dot} alt="dot" />
                    )}
                  </div>
                  <div className={styles.mainTimerContainer}>
                    <p className={styles.p1}>Resolve frontend bugs</p>
                    <div className={styles.timerContainer}>
                      <div>
                        <img src={timer} alt="timer" />
                      </div>
                      <span className={styles.span}>4hrs, 8hrs</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <RightSideHome />
      </div>
    </section>
  );
};

export default Home;
