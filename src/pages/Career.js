import React from "react";
import JobOpening from "../layout/JobOpening";
import styles from "./Career.module.scss";

const Career = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <JobOpening />
      </div>
    </div>
  );
};

export default Career;
