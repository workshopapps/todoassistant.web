import React from "react";
import styles from "./VADashboard.module.scss";
import Home from "../VAHome";

const Dashboard = () => {
  return (
    <div className={styles.va_container}>
      <div className={styles.va_main}>
        <div className={styles.va_home}>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
