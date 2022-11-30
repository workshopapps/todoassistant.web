import React from "react";
import styles from "./CardJobs.module.scss";

const CardJobs = ({ name, text }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardHeadFour}>{name}</h4>
      <div className={styles.flex}>
        <p className={styles.cardParagraph}>Ticked</p>
        <p className={styles.cardParagraph}>Full time or Contract</p>
      </div>
      <p className={styles.cardParagraph}>
        {text}
      </p>
      <button className={styles.careerJobBtn}>
        <p className={styles.cardParagraph}>Apply Now</p>
      </button>
    </div>
  );
};

export default CardJobs;
