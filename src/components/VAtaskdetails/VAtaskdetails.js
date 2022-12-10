import React, { useState, useEffect } from "react";

import timerStart from "../../assets/timer-start-small.png";
import styles from "./VAtaskdetails.module.scss";

import VAComments from "../Comments/Comments";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { id: taskId } = useParams();
  const [data, setData] = useState([]);
  //   const [date, setDate] = useState([]);

  const [isLoading, setIsLoadiing] = useState(true);

  const fetchTask = async () => {
    let vaUser = JSON.parse(localStorage.getItem("VA"));

    console.log(taskId);
    if (vaUser) {
      const response = await axios.get(
        `https://api.ticked.hng.tech/api/v1/task/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${vaUser.extra.token}`
          }
        }
      );

      const vaTask = response.data.data;

      setData(vaTask);
      //       let    Ddate = new Date(response.data.data?.end_time);
      //       setDate(Ddate)
      console.log(isLoading);
      setIsLoadiing(false);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const [tab, setTab] = useState(0);

  return (
    <div className={styles.TaskDetail_wrapper}>
      <div className={styles.TaskDetail_header}>
        <div className={styles.TaskDetail_header_left}>
          <p
            onClick={() => {
              setTab(!tab);
            }}
            className={
              !tab
                ? styles.TaskDetail_header_left_underline_left
                : styles.TaskDetail_header_left1
            }
          >
            Overview
          </p>
          <p
            onClick={() => {
              setTab(!tab);
            }}
            className={
              tab
                ? styles.TaskDetail_header_left_underline_right
                : styles.TaskDetail_header_left2
            }
          >
            Comments
          </p>
        </div>
      </div>

      {!tab ? (
        <div className={[styles.TaskDetail_body, `shadow`].join(" ")}>
          <div className={styles.TaskDetail_body_left}>
            <h1 className={styles.TaskDetail_body_title}>{data.title}</h1>
            <p className={styles.TaskDetail_assignto_head}>Assigned to</p>
            <div className={styles.TaskDetail_assignto}>
              {/* <img src={VAavatar} alt="assigned va" /> */}
              <p className={styles.TaskDetail_va_name}>Sandra Davids</p>
            </div>
            <p className={styles.TaskDetail_reminder_time_head}>
              Reminder Time
            </p>
            <div className={styles.TaskDetail_reminder_time}>
              <img src={timerStart} alt="reminder time" />
            </div>
          </div>
          <div className={styles.TaskDetail_body_right}>
            <p className={styles.TaskDetail_body_right_status}>Status</p>
            {data.status === "PENDING" && (
              <div className={styles.TaskDetail_body_right_status_title}>
                <p className={styles.TaskDetail_body_right_status_name}>
                  Pending
                </p>
                <div className={styles.TaskDetail_body_right_status_box}></div>
              </div>
            )}
            {data.status === "DONE" && (
              <div className={styles.TaskDetail_body_right_status_title_done}>
                <p className={styles.TaskDetail_body_right_status_name}>Done</p>
                <div className={styles.TaskDetail_body_right_status_box}></div>
              </div>
            )}
            {data.status === "EXPIRED" && (
              <div
                className={styles.TaskDetail_body_right_status_title_expired}
              >
                <p className={styles.TaskDetail_body_right_status_name}>
                  Expired
                </p>
                <div className={styles.TaskDetail_body_right_status_box}></div>
              </div>
            )}

            <div className={styles.TaskDetail_body_right_duetime}>
              <p className={styles.TaskDetail_body_right_duetimeheader}>
                Due Time
              </p>
              {/* <p className={styles.TaskDetail_body_right_duetimebody}>
                {`${new Date(data.end_time).getDate()}, ${date.getMonth()} at ${date.getTime()}`}
              </p> */}
            </div>
          </div>
        </div>
      ) : (
        <VAComments />
      )}
    </div>
  );
};

export default TaskDetails;
