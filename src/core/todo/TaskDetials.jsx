import React, { useState } from "react";
import styles from "./taskDetails.module.scss";
import Sidebar from "../../components/NewTask/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";
import {TaskCtx} from "../../contexts/taskContext/TaskContextProvider"
import { useContext } from "react";

// const data = {
//   title: "Go to the bank",
//   start_time: "11:00am",
//   end_time: "12:00am",
//   repeat: "Never Repeat",
//   description: "I need to upgrade my account and request for a new token",
//   va: "Get a call from an assistant to remind you"
// };

const TaskDetails = () => {
  const [drop, setDrop] = useState(0);
  const navigate = useNavigate();

  const {task} = useContext(TaskCtx)
  return (
    <div className={styles.TaskDetialsContainer}>
      <div className={styles.TaskDetialsSidebar}>
        <Sidebar />
      </div>

      <div className={styles.TaskDetailsMain}>
        <div className={styles.TaskDetailsHeader}>
          <p className={styles.TaskDetailsHeaderItem}>Task</p>
          <div
            className={styles.TaskDetailsHeaderOption}
            onClick={() => {
              setDrop(!drop);
            }}
          >
            <HiOutlineMenu />
          </div>
        </div>
        <div className={styles.TaskDetailsBody}>
          <h1 className={styles.TaskDetailsBodyTitle}>{task.title}</h1>
          <div className={styles.TaskDetailsBodyItem1}>
            <h2>Start Time</h2>
            <p>{task.start_time}</p>
          </div>
          <div className={styles.TaskDetailsBodyItem2}>
            <h2>End Time</h2>
            <p>{task.end_time}</p>
          </div>
          <div className={styles.TaskDetailsBodyItem3}>
            <h2>Repeat</h2>
            <p>{task.repeat}</p>
          </div>
          <div className={styles.TaskDetailsBodyItem4}>
            <h2>Description</h2>
            <p>{task.description}</p>
          </div>
          <div className={styles.TaskDetailsBodyItem5}>
            <h2>Virtual Assistant</h2>
            <p>{task.va}</p>
          </div>
          <div
            onClick={() => {
              navigate("/dashboard");
            }}
            className={styles.TaskDetailsBodyButton}
          >
            Done
          </div>

          {drop ? (
            <div className={styles.TaskDetailsDropDown}>
              <Link to="/edittask" state={"edit"}>
                <img src={edit} alt="edit" />
                <p>Edit task</p>
              </Link>
              <div onClick={() => {
                 delete task.title;
                delete task.start_time;
                delete task.end_time;
                delete task.repeat;
                delete task.description;
                delete task.va;
                navigate("/dashboard")
              }}>
                <img src={trash} alt="trash" />
                <p>Delete task</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
