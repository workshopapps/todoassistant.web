import React from "react";
import styles from "./VADashboard.module.scss";
// import Header from '../VAHeader'
// import Slider from '../VASlider'
import Home from "../VAHome";
import Dashboardlayout from "../../../layout/dasboard-layout/Dashboardlayout";

const Dashboard = () => {
  return (
    <Dashboardlayout>
      <div className={styles.va_container}>
        {/* <div className = {styles.va_slider}>
              <Slider clients = {10}/>
          </div> */}
        <div className={styles.va_main}>
          {/* <div className = {styles.va_header}>
                  <Header name = {vaUser.name}/>
              </div> */}
          <div className={styles.va_home}>
            <Home />
          </div>
        </div>
      </div>
    </Dashboardlayout>
    // const vaUser = {name: "Tajudeen"}
  );
};

export default Dashboard;
