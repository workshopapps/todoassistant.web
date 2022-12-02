import React, { useEffect, useState } from "react";
import styles from "./TaskItems.module.scss";

const TaskItems = ({ status, myTasks }) => {
  const [tasks, setTasks] = useState(["", ""]);
  const [color, setColor] = useState("#714DD9");

  useEffect(() => {
    switch (status) {
      case "PENDING":
        setColor("#714DD9");
        break;
      case "DONE":
        setColor("#52C41A");
        break;
      case "OVERDUE":
        setColor("#FF4D4F");
        break;
    }
  }, [status]);

  myTasks && setTasks(myTasks);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.status}>
          <div className={styles.statusName}>
            <div
              className={styles.icon}
              style={{ border: `1px solid ${color}` }}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0334 8.94995L13.5134 15.47C12.7434 16.24 11.4834 16.24 10.7134 15.47L4.19336 8.94995"
                  stroke={color}
                />
              </svg>
            </div>
            <p className={styles.text} style={{ background: `${color}` }}>
              {status}
            </p>
          </div>
          <p className={styles.noOfTasks}>TASKS</p>
        </div>
        <p className={styles.asign}>ASSIGN</p>
        <p className={styles.date}>DUE DATE</p>
      </div>
      <div className={styles.tasks}>
        {tasks.map((i, index) => (
          <div className={styles.task} key={index}>
            <div className={styles.taskName}>
              <div
                className={styles.checkBox}
                style={{
                  background: status === "PENDING" ? "#d3d0d9" : color,
                  border: `1px solid ${
                    status === "PENDING" ? "#d3d0d9" : color
                  }`
                }}
              ></div>
              <p
                className={styles.text}
                style={{
                  color: status === "DONE" ? "#D3D0D9" : "",
                  textDecorationLine: status === "DONE" ? "line-through" : ""
                }}
              >
                Research French PM
              </p>
            </div>
            <div
              className={styles.asign}
              style={{ opacity: status === "OVERDUE" ? "0%" : "100%" }}
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.0707 2.0416C9.65404 1.54993 10.5957 1.54993 11.1624 2.0416L12.479 3.1666C12.729 3.37493 13.204 3.54994 13.5374 3.54994H14.954C15.8374 3.54994 16.5624 4.27493 16.5624 5.15827V6.57493C16.5624 6.90827 16.7374 7.37493 16.9457 7.62493L18.0707 8.9416C18.5624 9.52494 18.5624 10.4666 18.0707 11.0333L16.9457 12.3499C16.7374 12.5999 16.5624 13.0666 16.5624 13.3999V14.8166C16.5624 15.6999 15.8374 16.4249 14.954 16.4249H13.5374C13.204 16.4249 12.7374 16.5999 12.4874 16.8083L11.1707 17.9333C10.5874 18.4249 9.6457 18.4249 9.07904 17.9333L7.76237 16.8083C7.51237 16.5999 7.03737 16.4249 6.71237 16.4249H5.25404C4.3707 16.4249 3.6457 15.6999 3.6457 14.8166V13.3916C3.6457 13.0666 3.47904 12.5916 3.2707 12.3499L2.1457 11.0249C1.66237 10.4499 1.66237 9.5166 2.1457 8.9416L3.2707 7.6166C3.47904 7.3666 3.6457 6.89993 3.6457 6.57493V5.1666C3.6457 4.28327 4.3707 3.55827 5.25404 3.55827H6.6957C7.02904 3.55827 7.4957 3.38327 7.7457 3.17493L9.0707 2.0416Z"
                  stroke={status === "DONE" ? "#D3D0D9" : color}
                />
                <path
                  d="M7.19727 13.2832L10.1139 6.71655L13.0306 13.2832"
                  stroke={status === "DONE" ? "#D3D0D9" : color}
                />
                <path
                  d="M11.571 11.0916H8.6543"
                  stroke={status === "DONE" ? "#D3D0D9" : color}
                />
              </svg>
              <p style={{ color: status === "DONE" ? "" : color }}>Assigned</p>
            </div>
            <p
              className={styles.date}
              style={{ color: status === "DONE" ? "#D3D0D9" : "" }}
            >
              12, Nov at 5PM
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskItems;
