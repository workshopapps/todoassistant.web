import React from "react";
import Search from "../search/Search";
import styles from "./task.module.scss";
import TaskIcon from "../../assets/taskIcon.png";
import { Data } from "./data";
import TaskView from "../taskView/TaskView";

const Task = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <div className={styles.task_wrap}>
      {/* ------sub-header----------------- */}
      <div className={styles.task_top}>
        <div className={styles.task_left_wrap}>
          <img src={TaskIcon} alt="task" />
          <p className={styles.task_left_text}>Tasks</p>
        </div>
        <Search />
      </div>
      {/* ----------content------------- */}

      <div className={styles.task_bodywrap}>
        {/* ----------Tab------------- */}
        <div className={styles.task_tabwrap}>
          <p
            onClick={() => {
              setTab(0);
            }}
            className={
              tab === 0 ? styles.task_setTabStyle : styles.task_reSetTabStyle
            }
          >
            All
          </p>
          <p
            onClick={() => {
              setTab(1);
            }}
            className={
              tab === 1 ? styles.task_setTabStyle : styles.task_reSetTabStyle
            }
          >
            In Progress
          </p>
          <p
            onClick={() => {
              setTab(2);
            }}
            className={
              tab === 2 ? styles.task_setTabStyle : styles.task_reSetTabStyle
            }
          >
            Completed
          </p>
        </div>

        {tab === 0
          ? Data.map((value) => {
              return <TaskView key={value.id} value={value} />;
            })
          : ""}
        {tab === 1
          ? Data.map((value) => {
              return <TaskView key={value.id} value={value} />;
            })
          : ""}
        {tab === 2
          ? Data.map((value) => {
              return <TaskView key={value.id} value={value} complete={true} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default Task;
