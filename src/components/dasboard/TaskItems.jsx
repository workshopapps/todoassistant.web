import React, { useContext, useEffect, useState } from "react";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";
import styles from "./TaskItems.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

const TaskItems = ({ status, myTasks }) => {
  const notify = () => {
    status === "PENDING" && toast.success(`Moved to Done`, { icon: false });
    status === "DONE" && toast.info(`Moved to Pending`, { icon: false });
  };
  const { setTasks, getClickedTask, updateStatus } = useContext(TaskCtx);
  const [showTasks, setShowTasks] = useState(false);
  const dateFormat = taskdate => {
    const date = new Date(taskdate);
    const newDate = `${date.getDate()}, ${date.toDateString()[4]}${
      date.toDateString()[5]
    }${date.toDateString()[6]} ${date.toLocaleTimeString()}`;

    return newDate;
  };

  const [color, setColor] = useState({
    color: "#714DD9",
    background:
      "linear-gradient(0deg, rgba(113, 77, 217, 0.11), rgba(113, 77, 217, 0.11)), #FFFFFF"
  });

  const taskCount = () => {
    let count = 0;
    // console.log(myTasks);
    const noOfCompleted = Array.isArray(myTasks)
      ? myTasks.filter(i => i.status === "DONE")
      : 0;
    const noOfPending = Array.isArray(myTasks)
      ? myTasks.filter(i => i.status === "PENDING")
      : 0;
    const noOfExpired = Array.isArray(myTasks)
      ? myTasks.filter(i => i.status === "EXPIRED")
      : 0;
    if (status === "EXPIRED") {
      count = noOfExpired.length;
    } else if (status === "PENDING") {
      count = noOfPending.length;
    } else {
      count = noOfCompleted.length;
    }
    return count;
  };

  useEffect(() => {
    switch (status) {
      case "PENDING":
        setColor({
          color: "#714DD9",
          background:
            "linear-gradient(0deg, rgba(113, 77, 217, 0.11), rgba(113, 77, 217, 0.11)), #FFFFFF"
        });
        break;
      case "DONE":
        setColor({
          color: "#52C41A",
          background:
            "linear-gradient(0deg, rgba(82, 196, 26, 0.11), rgba(82, 196, 26, 0.11)), #FFFFFF"
        });
        break;
      case "EXPIRED":
        setColor({
          color: "#FF4D4F",
          background:
            "linear-gradient(0deg, rgba(255, 77, 79, 0.11), rgba(255, 77, 79, 0.11)), #FFFFFF"
        });
        break;
    }
  }, [status]);

  const handleClick = (id, status) => {
    if (status !== "EXPIRED") {
      const dummyTasks = [...myTasks];
      dummyTasks.map(i => {
        if (i.task_id === id) {
          i.status = i.status === "PENDING" ? "DONE" : "PENDING";
        }
      });
      setTasks(dummyTasks);
    }
  };
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <div className={styles.header}>
        <Box gap={3} className={styles.status}>
          <div className={styles.statusName}>
            <div
              className={styles.icon}
              style={{ border: `1px solid ${color.color}` }}
              onClick={() => {
                setShowTasks(showTask => !showTask);
              }}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: `rotateZ(${showTasks ? 360 : 270}deg)`,
                  transition: "all 0.2s"
                }}
              >
                <path
                  d="M20.0334 8.94995L13.5134 15.47C12.7434 16.24 11.4834 16.24 10.7134 15.47L4.19336 8.94995"
                  stroke={color.color}
                />
              </svg>
            </div>
            <Typography
              fontSize={{ xs: `12px`, md: `14px` }}
              className={styles.text}
              style={{ background: `${color.color}` }}
            >
              {status}
            </Typography>
          </div>
          <Typography className={styles.noOfTasks}>{`${
            Array.isArray(myTasks)
              ? myTasks.length === 0
                ? 0
                : taskCount()
              : 0
          } TASKS`}</Typography>
        </Box>
        {/* <p className={styles.asign}>ASSIGN</p> */}
        <Stack
          alignItems={`end`}
          display={{ xs: `none`, sm: `flex` }}
          width={`100%`}
        >
          <Typography className={styles.date}>DUE DATE</Typography>
        </Stack>
      </div>
      <div className={styles.tasks}>
        {Array.isArray(myTasks) &&
          myTasks.length !== 0 &&
          myTasks
            .slice(0)
            .reverse()
            .map(i => {
              if (i.status === status) {
                return (
                  <>
                    {showTasks && (
                      <div
                        className={styles.task}
                        key={i.task_id}
                        style={{ background: color.background }}
                      >
                        <div
                          className={styles.overlay}
                          onClick={() => {
                            getClickedTask(i.task_id);
                            navigate("/dashboard/taskdetail");
                          }}
                        ></div>
                        <div
                          className={styles.checkBox}
                          style={{
                            background:
                              status === "PENDING" ? "#d3d0d9" : color.color,
                            border: `1px solid ${
                              status === "PENDING" ? "#d3d0d9" : color.color
                            }`
                          }}
                          onClick={() => {
                            handleClick(i.task_id, i.status);
                            i.status !== "EXPIRED" &&
                              updateStatus(i.task_id, {
                                status:
                                  i.status === "PENDING" ? "PENDING" : "DONE"
                              });
                            notify();
                          }}
                        ></div>
                        <div className={styles.detailsWrapper}>
                          <div className={styles.taskName}>
                            <p
                              className={styles.text}
                              style={{
                                color: status === "DONE" ? "#D3D0D9" : "",
                                textDecorationLine:
                                  status === "DONE" ? "line-through" : ""
                              }}
                            >
                              {i.title}
                            </p>
                          </div>
                          {i.va_id !== "" ? (
                            <div
                              className={styles.asign}
                              style={{
                                opacity: status === "EXPIRED" ? "0%" : "100%"
                              }}
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
                                  stroke={
                                    status === "DONE" ? "#D3D0D9" : color.color
                                  }
                                />
                                <path
                                  d="M7.19727 13.2832L10.1139 6.71655L13.0306 13.2832"
                                  stroke={
                                    status === "DONE" ? "#D3D0D9" : color.color
                                  }
                                />
                                <path
                                  d="M11.571 11.0916H8.6543"
                                  stroke={
                                    status === "DONE" ? "#D3D0D9" : color.color
                                  }
                                />
                              </svg>
                              <p
                                style={{
                                  color: status === "DONE" ? "" : color.color
                                }}
                              >
                                Assigned
                              </p>
                            </div>
                          ) : (
                            <div
                              className={styles.asign}
                              style={{
                                opacity:
                                  status === "EXPIRED" || status === "DONE"
                                    ? "0%"
                                    : "100%"
                              }}
                            >
                              <svg
                                width="21"
                                height="20"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.1139 10.0001C12.4151 10.0001 14.2806 8.1346 14.2806 5.83341C14.2806 3.53223 12.4151 1.66675 10.1139 1.66675C7.81275 1.66675 5.94727 3.53223 5.94727 5.83341C5.94727 8.1346 7.81275 10.0001 10.1139 10.0001Z"
                                  stroke="#714DD9"
                                />
                                <path
                                  d="M2.95508 18.3333C2.95508 15.1083 6.16341 12.5 10.1134 12.5C10.9134 12.5 11.6884 12.6083 12.4134 12.8083"
                                  stroke="#714DD9"
                                />
                                <path
                                  d="M18.446 15.0001C18.446 15.2667 18.4126 15.5251 18.346 15.7751C18.271 16.1084 18.1376 16.4334 17.9626 16.7167C17.3876 17.6834 16.3293 18.3334 15.1126 18.3334C14.2543 18.3334 13.4793 18.0084 12.896 17.4751C12.646 17.2584 12.4293 17.0001 12.2626 16.7167C11.9543 16.2167 11.7793 15.6251 11.7793 15.0001C11.7793 14.1001 12.1376 13.2751 12.721 12.6751C13.3293 12.0501 14.1793 11.6667 15.1126 11.6667C16.096 11.6667 16.9876 12.0918 17.5876 12.7751C18.121 13.3668 18.446 14.1501 18.446 15.0001Z"
                                  stroke="#714DD9"
                                />
                                <path
                                  d="M16.3544 14.9832H13.8711"
                                  stroke="#714DD9"
                                />
                                <path
                                  d="M15.1133 13.7666V16.2583"
                                  stroke="#714DD9"
                                />
                              </svg>

                              <p
                                style={{
                                  color: status === "DONE" ? "" : color.color
                                }}
                              >
                                Assign
                              </p>
                            </div>
                          )}
                          <p
                            className={styles.date}
                            style={{
                              color: status === "DONE" ? "#D3D0D9" : ""
                            }}
                          >
                            {dateFormat(i.end_time)}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                );
              }
            })}
      </div>
    </div>
  );
};

export default TaskItems;
