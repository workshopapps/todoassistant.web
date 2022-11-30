import styles from "./AboutUsHeader.module.scss";
import React from "react";
import img from "../../../assets/ticked_about_header2.png";
import Button from "../../button/ButtonComponent";

const AboutUsSectionTwoLayout = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTickedBox}>
        <div>
          <p className={styles.tickedText}>
            Ticked is a to-do list management app that helps you be more
            organized and productive.
          </p>
        </div>
        <p className={styles.tickedText}>
          We understand how important it is to stay on top of your work, but
          sometimes the number of things we have to do can get overwhelming.
          That’s where Ticked comes in.
        </p>
        <p className={styles.tickedText}>
          Ticked allows users to create tasks, track and manage their tasks, get
          reminders, organize their tasks, and therefore help improve
          motivation, productivity and mental capacity.
        </p>
        <p className={styles.tickedText}>
          The app has a simple interface that makes it easy for anyone to use.
          No matter what you’re working on at the moment, Ticked will help you
          prioritize and stay in control of your workload!
        </p>
        <div className={styles.btn}>
          <Button link={`/`} title={`get Started`} style={{ width: `207px` }} />
        </div>
      </div>
      <div className={styles.headerImageBox}>
        <img className={styles.img} src={img} alt="" />
      </div>
    </div>
  );
};

export default AboutUsSectionTwoLayout;
