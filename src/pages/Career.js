import React from "react";
import CareerMiddle from "../layout/CareerMiddle";
import styles from "./Career.module.scss";

const Career = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CareerMiddle />
      </div>
    </div>
  );
};

export default Career;
