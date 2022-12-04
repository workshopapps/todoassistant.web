import React from "react";
import moment from "moment";
import styles from "./Home.module.scss";
import { BsArrowRight, BsAlarm, BsPatchCheck } from "react-icons/bs";

const Task = ({ details, handleClick }) => {
  const format_time = moment(details.end_time).format("LT");
  const UserName = details.user.name.slice(0, 1);

  return (
    <div className={styles.task_container}>
      <div className={styles.task_title}>{details.title}</div>
      <div className={styles.task_details_container}>
        <div className={styles.task_details}>
          <div className={styles.client}>
            <div className={styles.va_client_img}>{UserName}</div>
            <p className={styles.va_client_typo}>{details.user.name}</p>
          </div>
          {details.assigned ? (
            <div className={styles.client}>
              <BsPatchCheck className={styles.va_task_img} size={20} />
              <p className={styles.va_client_typo}>Assigned to me</p>
            </div>
          ) : null}

          <div className={styles.client}>
            <BsAlarm className={styles.va_task_img} size={20} />
            <p className={styles.va_client_typo}>{format_time}</p>
          </div>
        </div>
        <div
          className={styles.task_view}
          id={details.task_id}
          onClick={handleClick}
        >
          <p className={styles.va_task_typo} id={details.task_id}>
            View
          </p>
          <BsArrowRight className={styles.va_task_img} size={25} id="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Task;
