import styles from "./AboutUsHeader.module.scss";
import React from "react";
import img from "../../../assets/Frame 34504.png";
import icon1 from "../../../assets/task-square.png";
import icon2 from "../../../assets/profile-2user.png";
import icon3 from "../../../assets/tick-circle.png";
import Button from "../../button/ButtonComponent";

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

        <div>
        <div className={styles.headerRow}>
        <img src={icon2} alt="tick"/>
        <h1>Personalized Virtual Assistant</h1>
        </div>
          <p className={styles.tickedText}>
          The in-app chat feature available allows you to communicate and assign tasks to personalized Assistant.
          </p>
        </div>

        <div>
        <div className={styles.headerRow}>
        <img src={icon3} alt="tick"/>
        <h1>Get Ticked</h1>
        </div>
          <p className={styles.tickedText}>
          Receive notifications when you complete your tasks and get a call when deadlines are fast approaching.
          </p>
        </div>

        <div className={styles.headerRow}>
          <Button link={`/`} title={`get Started`} style={{ width: `207px` }} className={styles.btn} />
          
            <Button link={`/`} title={`DOWNLOAD APP`} style={{ width: `207px` }} className={styles.btn}/>
        </div>
      </div>
      <div className={styles.headerImageBox}>
        <img className={styles.img} src={img} alt="" />
      </div>
    </div>
  );
};

export default AboutUsSectionTwoLayout;
