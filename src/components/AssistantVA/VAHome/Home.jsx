import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import TaskDetail from "./TaskDetail";
import styles from "./Home.module.scss";
import vaArrowDown from "../../../assets/VADashboard/va-arrowDown.svg";
// import profile from "../../../assets/VADashboard/profile.svg";

const Home = () => {
  const [nav, setNav] = useState(true);
  const [taskDetail, setTaskDetail] = useState(false);
  const [showDetail, setShowDetail] = useState({});
  const [tasks, setTasks] = useState([]);
  const [assigned, setAssigned] = useState([]);

  const fetchTasks = async () => {
    let vaUser = JSON.parse(localStorage.getItem("VA"));

    if (vaUser) {
      const response = await axios.get(`/task/all/va`, {
        headers: {
          Authorization: `Bearer ${vaUser.extra.token}`
        }
      });
      const vaTasks = response.data.data;
      setTasks(vaTasks);
    }
  };

  const handleClick = e => {
    setTaskDetail(true);
    const id = e.target.id;

    const currentTask = tasks.filter(task => task.task_id === id);
    setShowDetail(currentTask[0]);
  };

  const handleClose = () => {
    setTaskDetail(false);
  };

  fetchTasks();
  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    setAssigned(tasks.filter(task => task.assigned === true));
  }, [tasks]);

  return (
    <section className={styles.va_section_container}>
      <div
        className={[
          styles.va_home_container,
          taskDetail && styles.va_home_container_active
        ].join(" ")}
      >
        <div className={styles.va_home_header}>
          <div className={styles.va_home_title}>
            <p className={styles.va_home_typo}>Today</p>
            <img className={styles.va_img} src={vaArrowDown} alt="vaArrow" />
          </div>
          <div className={styles.va_home_links}>
            <div
              className={[styles.va_home_link, nav && styles.active].join(" ")}
              onClick={() => setNav(true)}
            >
              All Tasks ({tasks.length})
            </div>
            <div
              className={[styles.va_home_link, !nav && styles.active].join(" ")}
              onClick={() => setNav(false)}
            >
              Assigned to me
            </div>
          </div>
        </div>

        <div className={styles.va_tasks}>
          {tasks?.length > 0 ? (
            nav ? (
              tasks.map(task => (
                <Task
                  details={task}
                  key={task.task_id}
                  handleClick={handleClick}
                />
              ))
            ) : assigned.length <= 0 ? (
              <div className={styles.va_no_tasks}>
                <span className={styles.va_no_tasks_title}>
                  No Assigned Tasks Yet
                </span>
                <span className={styles.va_no_tasks_sub}>
                  You will be notified when a user assigned a task to you
                </span>
              </div>
            ) : (
              tasks.map(task =>
                task.assigned ? (
                  <Task
                    details={task}
                    key={task.task_id}
                    handleClick={handleClick}
                  />
                ) : null
              )
            )
          ) : (
            <div className={styles.va_no_tasks}>
              <span className={styles.va_no_tasks_title}>No Clients</span>
              <span className={styles.va_no_tasks_sub}>
                You will be notified when a user has been assigned to you
              </span>
            </div>
          )}
        </div>
      </div>
      {taskDetail ? (
        <div className={styles.task_detail_slider}>
          <TaskDetail taskDetails={showDetail} handleClose={handleClose} />
        </div>
      ) : null}
    </section>
  );
};

export default Home;
