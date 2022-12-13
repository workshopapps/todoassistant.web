import React, { useState, useEffect } from "react";

import timerStart from "../../assets/timer-start-small.png";
import styles from "./VAtaskdetails.module.scss";

import VAComments from "../VAComments/Comments";
// import axios from "axios";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import moment from "moment";

const TaskDetails = () => {
  const { id: taskId } = useParams();
  const [data, setData] = useState([]);
  //   const [date, setDate] = useState([]);

  // const [isLoading, setIsLoadiing] = useState(true);

  // const fetchTask = async () => {
  //   let vaUser = JSON.parse(localStorage.getItem("VA"));

  //   console.log(taskId);
  //   if (vaUser) {
  //     const response = await axios.get(
  //       `https://api.ticked.hng.tech/api/v1/task/${taskId}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${vaUser.extra.token}`
  //         }
  //       }
  //     );

  //     const vaTask = response.data.data;

  //     setData(vaTask);
  //     //       let    Ddate = new Date(response.data.data?.end_time);
  //     //       setDate(Ddate)
  //     console.log(isLoading);
  //     setIsLoadiing(false);
  //   }
  // };

  useEffect(() => {
    let tasks = JSON.parse(localStorage.getItem("Tasks"));
    let SingleTask = tasks.find(({ task_id }) => task_id === taskId);
    setData(SingleTask);
  }, []);
  let va = JSON.parse(localStorage.getItem("VA")).data;
  const vaName = `${va.first_name}  ${va.last_name}`;
  const [tab, setTab] = useState(0);

  const remeiningTime = date => {
    return moment(date).endOf(date).fromNow();
  };
  const time = date => {
    return moment(date).format("LT");
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    const upperName = name.toUpperCase();
    return {
      sx: {
        bgcolor: stringToColor(upperName)
      },
      children: `${upperName.split(" ")[0][0]}${upperName.split(" ")[1][0]}`
    };
  }
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
              <Avatar {...stringAvatar("James Ishaku")} />
              <p className={styles.TaskDetail_va_name}>{vaName}</p>
            </div>
            <p className={styles.TaskDetail_reminder_time_head}>
              Reminder Time
            </p>
            <div className={styles.TaskDetail_reminder_time}>
              <img
                src={timerStart}
                alt="reminder time"
                style={{ marginRight: "7px" }}
              />
              <p>{time(data.end_time)} </p>
            </div>
          </div>
          <div className={styles.TaskDetail_body_right}>
            <p className={styles.TaskDetail_body_right_status}>Status</p>
            {new Date(data.end_time) > new Date() && (
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
            {new Date(data.end_time) < new Date() && (
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
              <p className={styles.TaskDetail_body_right_duetimebody}>
                {remeiningTime(data.end_time)}
              </p>
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
