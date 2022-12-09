import React, { useState, useContext, useEffect } from "react";
import styles from "./Home.module.scss";
import addIcon from "../../../assets/newAdd.png";
import useTasksLoading from "../../../hooks/tasks/useTasksLoading";
import { TaskCtx } from "../../../contexts/taskContext/TaskContextProvider";
import DashboardTabs from "../../dasboard/DashboardTabs";
import TaskItems from "../../dasboard/TaskItems";
import CreateTask from "../../createTask/CreateTask";
import EmptyState from "./EmptyState";
import { Skeleton } from "@mui/material";

export default function Home() {
  const [taskModal, setTaskModal] = useState(0);
  const [taskData, setTaskData] = useState([]);

  useTasksLoading();
  const { tasks, isLoading } = useContext(TaskCtx);

  useEffect(() => {
    setTaskData(tasks);
  }, [tasks]);

  return (
    <div className={styles.myWrapper}>
      <CreateTask taskModal={taskModal} setTaskModal={setTaskModal} />
      <div className={styles.header}>
        <div className={styles.left}>
          {/* <h1>Welcome to Ticked</h1> */}
          <div className={styles.todoTabs}>
            <DashboardTabs tabNames={["Tasks"]} />
          </div>
        </div>
        <div
          className={styles.right}
          onClick={() => {
            setTaskModal(1);
          }}
        >
          <div className={[styles.newTask, "hover"].join(" ")}>
            <img src={addIcon} alt="" />
            <p>New Task</p>
          </div>
        </div>
      </div>
      <div className={styles.allTasks}>
        {!isLoading && tasks == 0 ? (
          <EmptyState setTaskModal={setTaskModal} />
        ) : (
          <>
            {(isLoading && (
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "Column",
                    gap: "8px"
                  }}
                >
                  <Skeleton
                    variant="rectangular"
                    width={"20%"}
                    height="30px"
                    sx={{ borderRadius: "7px", marginTop: "10px" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height="30px"
                    sx={{ borderRadius: "7px", marginTop: "10px" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height="30px"
                    sx={{ borderRadius: "7px" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height="30px"
                    sx={{ borderRadius: "7px" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height="30px"
                    sx={{ borderRadius: "7px" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height="30px"
                    sx={{ borderRadius: "7px" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={"20%"}
                    height="30px"
                    sx={{ borderRadius: "7px", marginTop: "10px" }}
                  />
                  <Skeleton
                    variant="rectangular"
                    width={"20%"}
                    height="30px"
                    sx={{ borderRadius: "7px", marginTop: "10px" }}
                  />
                </div>
              </div>
            )) || (
              <>
                <TaskItems status="PENDING" myTasks={taskData} />
                <TaskItems status="DONE" myTasks={taskData} />
                <TaskItems status="EXPIRED" myTasks={taskData} />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
