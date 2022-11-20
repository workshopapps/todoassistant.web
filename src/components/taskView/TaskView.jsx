import React from "react";
import styles from "./taskview.module.scss";
import assignedIcon from "../../assets/assigned.svg";
import timeIcon from "../../assets/time.svg";
import messageIcon from "../../assets/message.svg";
import { Link } from "react-router-dom";

const TaskView = ({ value, complete }) => {
  return (
    <div key={value.id} className={styles.task_content}>
      <Link
        to="/dashboard/detail"
        state={value}
        className={styles.task_contentWrap}
      >
        {complete ? (
          <p>
            <s>{value.topic}</s>
          </p>
        ) : (
          <p>{value.topic}</p>
        )}

        <div className={styles.task_alertWarp}>
          {value.assigned ? (
            <div className={styles.task_alertItem1}>
              <img src={assignedIcon} alt="assigned" />
              <p>Assigned to VA</p>
            </div>
          ) : (
            ""
          )}
          <div className={styles.task_alertItem2}>
            {" "}
            <img src={timeIcon} alt="time" />
            <p>{value.time}</p>
          </div>
          <div className={styles.task_alertItem3}>
            {" "}
            <img src={messageIcon} alt="message" />
            <p>4</p>
          </div>
        </div>
        <div className={styles.task_profileWarp}>
          <img src={value.img} alt="profile" />
          <p>{value.name}</p>
        </div>
      </Link>
      {/* <div className={styles.task_checkbox}>
                <ImCheckmark className={styles.task_checkboxIcon} />
              </div> */}
      <input type="checkbox" defaultChecked={complete} />
    </div>
  );
};

export default TaskView;
