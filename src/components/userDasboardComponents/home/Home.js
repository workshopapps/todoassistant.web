import React, { useState, useContext } from "react";
import styles from "./Home.module.scss";
import addIcon from "../../../assets/newAdd.png";
import useTasksLoading from "../../../hooks/tasks/useTasksLoading";
import { TaskCtx } from "../../../contexts/taskContext/TaskContextProvider";
import DashboardTabs from "../../dasboard/DashboardTabs";
import TaskItems from "../../dasboard/TaskItems";
import CreateTask from "../../createTask/CreateTask";
export default function Home() {
  const [taskModal, setTaskModal] = useState(0);

  useTasksLoading();
  const { tasks } = useContext(TaskCtx);

  return (
    <div className={styles.myWrapper}>
      <CreateTask taskModal={taskModal} setTaskModal={setTaskModal} />
      <div className={styles.header}>
        <div className={styles.left}>
          <h1>Welcome to Ticked</h1>
          <div className={styles.todoTabs}>
            <DashboardTabs tabNames={["All Task"]} />
          </div>
        </div>
        <div
          className={styles.right}
          onClick={() => {
            setTaskModal(1);
          }}
        >
          <div className={styles.newTask}>
            <img src={addIcon} alt="" />
            <p>New Task</p>
          </div>
        </div>
      </div>
      <div className={styles.allTasks}>
        <TaskItems status="PENDING" myTasks={tasks} />
        <TaskItems status="DONE" myTasks={tasks} />
        <TaskItems status="EXPIRED" myTasks={tasks} />
      </div>
    </div>
  );
}
