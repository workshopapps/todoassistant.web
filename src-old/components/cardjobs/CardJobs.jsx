import React from "react";
import styles from "./CardJobs.module.scss";

const CardJobs = ({ name }) => {
  return (
    <div className={styles.card}>
      <h4>{name}</h4>
      <div className={styles.flex}>
        <p>Ticked</p>
        <p>Full time or Contract</p>
      </div>
      <p>
        Minimum of 3 years experience in Graphics design or any related work
      </p>
      <button className={styles.btn}>
        <p>Apply Now</p>
      </button>
    </div>
  );
};

export default CardJobs;
