import React, { useState } from "react";
import styles from "./taskDetails.module.scss";
import VAavatar from "../../assets/vaavatar.png";
import timerStart from "../../assets/timer-start-small.png";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";
import CreateTask from "../createTask/CreateTask";
import { useContext } from "react";
import { useEffect } from "react";
import DeleteModal from "../deleteModal/DeleteModal";
import Comments from "../Comments/Comments";

const TaskDetails = () => {
  const [tab, setTab] = useState(0);
  const { task } = useContext(TaskCtx);
  const [time, setTime] = useState("");
  const [month, setMonth] = useState("");
  const [edit, setEdit] = useState(0);
  const [deleteTask, setDeleteTask] = useState(0);

  useEffect(() => {
    const date = new Date(task?.end_time);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
    const monthName = new Date(task?.end_time);
    setMonth(monthName.toLocaleString("default", { month: "long" }));
  });
  return (
    <div className={styles.TaskDetail_wrapper}>
      <DeleteModal
        deleteTask={deleteTask}
        setDeleteTask={setDeleteTask}
        editData={task}
      />
      <CreateTask
        taskModal={edit}
        setTaskModal={setEdit}
        func="edit"
        editData={task}
      />
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
        <div className={styles.TaskDetail_header_right}>
          <button
            onClick={() => {
              setEdit(!edit);
            }}
            className={styles.TaskDetail_header_button1}
          >
            Edit Task
          </button>
          <button
            onClick={() => {
              setDeleteTask(!deleteTask);
            }}
            className={styles.TaskDetail_header_button2}
          >
            Delete Task
          </button>
        </div>
      </div>

      {!tab ? (
        <div className={styles.TaskDetail_body}>
          <div className={styles.TaskDetail_body_left}>
            <h1 className={styles.TaskDetail_body_title}>{task.title}</h1>
            <p className={styles.TaskDetail_assignto_head}>Assigned to</p>
            <div className={styles.TaskDetail_assignto}>
              <img src={VAavatar} alt="assigned va" />
              <p className={styles.TaskDetail_va_name}>Sandra Davids</p>
            </div>
            <p className={styles.TaskDetail_reminder_time_head}>
              Reminder Time
            </p>
            <div className={styles.TaskDetail_reminder_time}>
              <img src={timerStart} alt="reminder time" />
              <p className={styles.TaskDetail_reminder_time_text}>{time}</p>
            </div>

            <div className={styles.TaskDetail_button}>
              <button
                onClick={() => {
                  setEdit(!edit);
                }}
                className={styles.TaskDetail_button_edit}
              >
                Edit Task
              </button>
              <button
                onClick={() => {
                  setDeleteTask(!deleteTask);
                }}
                className={styles.TaskDetail_button_delete}
              >
                Delete Task
              </button>
            </div>
          </div>
          <div className={styles.TaskDetail_body_right}>
            <p className={styles.TaskDetail_body_right_status}>Status</p>
            {task.status === "PENDING" && (
              <div className={styles.TaskDetail_body_right_status_title}>
                <p className={styles.TaskDetail_body_right_status_name}>
                  Pending
                </p>
                <div className={styles.TaskDetail_body_right_status_box}></div>
              </div>
            )}
            {task.status === "DONE" && (
              <div className={styles.TaskDetail_body_right_status_title_done}>
                <p className={styles.TaskDetail_body_right_status_name}>Done</p>
                <div className={styles.TaskDetail_body_right_status_box}></div>
              </div>
            )}
            {task.status === "EXPIRED" && (
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
                {`${new Date(task.end_time).getDay() + 1}, ${month} at ${time}`}
              </p>
            </div>
          </div>
        </div>
      ) : (
    <Comments/>
      )}
    </div>
  );
};

export default TaskDetails;
