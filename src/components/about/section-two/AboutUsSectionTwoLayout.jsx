import styles from "./AboutUsHeader.module.scss";
import React from "react";
//import img from "https://asset.cloudinary.com/dlst0ec4h/11f5441940f9826db27b7eb558f216eb";
import icon1 from "../../../assets/task-square.png";
import icon2 from "../../../assets/profile-2user.png";
import icon3 from "../../../assets/tick-circle.png";
//import Button from "../../button/ButtonComponent";
import { Link } from "react-router-dom";

const AboutUsSectionTwoLayout = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTickedBox}>
      
        <div className={styles.box}>
        <div className={styles.headerRow}>
        <img src={icon1} alt="tick"/>
        <h1>Get on your dashboard</h1>
        </div>
          <p className={styles.tickedText}>
Describe your task, set the date and time for your task deadline
          </p>
        </div>

        <div className= {styles.headerCol}>
        <div className={styles.headerRow}>
        <img src={icon2} alt="tick"/>
        <h1>Personalized Virtual Assistant</h1>
        </div>
          <p className={styles.tickedText}>
          The in-app chat feature available allows you to communicate and assign tasks to personalized Assistant.
          </p>
        </div>

        <div className= {styles.headerCol}>
        <div className={styles.headerRow}>
        <img src={icon3} alt="tick"/>
        <h1>Get Ticked</h1>
        </div>
          <p className={styles.tickedText}>
          Receive notifications when you complete your tasks and get a call when deadlines are fast approaching.
          </p>
        </div>

        <div className={styles.headerRow}>
        
          <Link to="/signup">
            <button className={`${styles.button_getstarted} hover`}>
              GET STARTED
            </button>
          </Link>
          <button className={`${styles.button_login} hover`}>
            DOWNLOAD APP
          </button>
        </div>
      </div>
      
      <div className={styles.headerImageBox}>
      <img className={styles.img} src="https://res.cloudinary.com/dlst0ec4h/image/upload/v1670062708/group_26086241_cr1jsi.png" alt="" />
      </div>
    </div>
  );
};

export default AboutUsSectionTwoLayout;
