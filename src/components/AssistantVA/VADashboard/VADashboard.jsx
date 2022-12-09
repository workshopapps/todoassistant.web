import React from "react";
import styles from "./VADashboard.module.scss";
import Home from "../VAHome";

const Dashboard = () => {
  return (
    <div className={styles.va_container}>      
      <Home />     
    </div>
  );
};

export default Dashboard;
