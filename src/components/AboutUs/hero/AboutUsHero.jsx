import styles from "./AboutUsHeader.module.scss";
import React from "react";
import img from "../../../assets/ticked_about_header2.png";

const AboutUsHero = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTickedBox}>
        <div>
          <p className={styles.header}>About us</p>
          <p className={styles.tickedText}>
            We are a team of diversified individuals based in Nigeria. Our most
            alarming goal is to help individuals with increasingly demanding
            schedules beat deadlines.
          </p>
        </div>
        <p className={styles.tickedText}>
          Here, in TICKED, what drives our passion to keep going is the deep
          belief in accountability and productivity, the strong determination to
          build products - like this one, for the chronic procrastinator - and
          the ambition to help everyone do life with utmost ease.
        </p>
        <p className={styles.tickedText}>
          While some code, write, and some others manage the products, we ensure
          we never leave out fun when making our products as this keeps us
          united. We sincerely value our customers and will continue to work
          hard in love, innovate and re-innovate awesome features to make the
          app even better and a delight to use
        </p>
      </div>
      <div className={styles.headerImageBox}>
        <img className={styles.img} src={img} alt="" />
      </div>
    </div>
  );
};

export default AboutUsHero;
