import React from "react";
import styles from "./Log.module.scss";

const Log = ({ action, taskName, time }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.taskWrapper}>
        <p className={styles.action}>{action}</p>
        <p className={styles.dash}>-</p>
        <p className={styles.taskName}>{taskName}</p>
      </div>
      <p className={styles.time}>{time}</p>
    </div>
  );
};

export default Log;
