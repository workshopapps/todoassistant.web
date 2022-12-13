import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";
import TaskDetail from "./TaskDetail";
import Preloader from "./Preloader";
import Clock from "./Clock";
import styles from "./Home.module.scss";

const Home = () => {
  const [nav, setNav] = useState(true);
  const [taskDetail, setTaskDetail] = useState(false);
  const [showDetail, setShowDetail] = useState({});
  const [tasks, setTasks] = useState([]);
  const [assigned, setAssigned] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    let vaUser = JSON.parse(localStorage.getItem("VA"));
    try {
      setLoading(true)
      const response = await axios.get(
        `https://api.ticked.hng.tech/api/v1/task/all`,
        {
          headers: {
            Authorization: `Bearer ${vaUser.extra.token}`
          }
        }
      );

      if (response.status === 200) {       
        const vaTasks = response.data.data;
        setTasks(vaTasks);
        setLoading(false); 
      }

    } catch (error) {
      setLoading(false);
      console.error(error);
    }
    
  };

  const handleClick = e => {
    setTaskDetail(true);
    const id = e.target.id;
    const currentTask = tasks.filter(
      task => task.task_id === id
    );
    setShowDetail(currentTask[0]);
  };

  const handleClose = () => {
    setTaskDetail(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    setAssigned(tasks?.filter(task => task.va_id !== ""));
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
          <div className={styles.va_home_links}>
            <div
              className={[styles.va_home_link, nav && styles.active].join(" ")}
              onClick={() => setNav(true)}
            >
              All Tasks ({tasks?.length})
            </div>
            <div
              className={[styles.va_home_link, !nav && styles.active].join(" ")}
              onClick={() => setNav(false)}
            >
              Assigned to me ({assigned?.length})
            </div>
          </div>
          <div className={styles.va_home_clock}>
            <Clock />
          </div>
        </div>
        {loading ? <Preloader /> :
        (
        <div className={styles.va_tasks}>
          {tasks?.length > 0 ? (
            <>
              <div className={[styles.va_allTasks, nav && styles.active_tab].join(" ")}>
                {tasks.map((task, index) => (
                  <Task details={task} key={index} handleClick={handleClick} />
                ))
                }
              </div>

              <div className={[styles.va_assigned, !nav && styles.active_tab].join(" ")}>
                {
                  assigned?.length <= 0 ? (
                    <div className={styles.va_no_tasks}>
                      <span className={styles.va_no_tasks_title}>
                        No Assigned Tasks Yet
                      </span>
                      <span className={styles.va_no_tasks_sub}>
                        You will be notified when a user assigned a task to you
                      </span>
                    </div>) : (
                      assigned.map((task, index) =>
                      <Task details={task} key={index} handleClick={handleClick} />
                  )
                    )

                }
              </div>
            </>
          ) 
          //   : assigned?.length <= 0 ? (
          //     <div className={styles.va_no_tasks}>
          //       <span className={styles.va_no_tasks_title}>
          //         No Assigned Tasks Yet
          //       </span>
          //       <span className={styles.va_no_tasks_sub}>
          //         You will be notified when a user assigned a task to you
          //       </span>
          //     </div>
          //   ) : (
          //     <div className={[styles.va_assigned, !nav && styles.active_tab].join(" ")}>
          //     {assigned.map((task, index) =>
          //         <Task details={task} key={index} handleClick={handleClick} />
          //     )}
          //     </div>
          //   )
          // ) 
          : (
            <div className={styles.va_no_tasks}>
              <span className={styles.va_no_tasks_title}>No Clients</span>
              <span className={styles.va_no_tasks_sub}>
                You will be notified when a user has been assigned to you
              </span>
            </div>
          )}
        </div>
         ) }
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
