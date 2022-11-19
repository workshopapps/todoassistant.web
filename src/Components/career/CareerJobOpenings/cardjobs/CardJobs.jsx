import React from "react";
import styles from "./CardJobs.module.scss";

const CardJobs = ({ name, text }) => {
  return (
    <div className={styles.card}>
      <h4>{name}</h4>
      <div className={styles.flex}>
        <p>Ticked</p>
        <p>Full time or Contract</p>
      </div>
      <p>
        {text}
      </p>
      <button className={styles.btn}>
        <p>Apply Now</p>
      </button>
    </div>
  );
};

export default CardJobs;
