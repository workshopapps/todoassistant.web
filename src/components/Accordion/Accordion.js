import { Avatar, Box } from "@mui/material";
import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import comment from "../../assets/Vectorcom2.png";
import commentlight from "../../assets/message-2messagelight.svg";
import right from "../../assets/arrow-rightright.svg";
import stopwatch from "../../assets/timer-startstopclock.svg";
import stopwatchlight from "../../assets/timer-startclocklight.svg";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Accordion = ({
  data,
  setHidden,
  setDissapear,
  activeClass,
  assigned
}) => {
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState(data[0]);

  const remeiningTime = date => {
    return moment(date).endOf(date).fromNow();
  };

  // function stringToColor(string) {
  //   let hash = 0;
  //   let i;

  //   /* eslint-disable no-bitwise */
  //   for (i = 0; i < string.length; i += 1) {
  //     hash = string.charCodeAt(i) + ((hash << 5) - hash);
  //   }

  //   let color = "#";

  //   for (i = 0; i < 3; i += 1) {
  //     const value = (hash >> (i * 8)) & 0xff;
  //     color += `00${value.toString(16)}`.slice(-2);
  //   }
  //   /* eslint-enable no-bitwise */

  //   return color;
  // }

  // function stringAvatar(name) {
  //   const upperName = name.toUpperCase();
  //   return {
  //     sx: {
  //       bgcolor: stringToColor(upperName)
  //     },
  //     children: `${upperName.split(" ")[0][0]}${upperName.split(" ")[1][0]}`
  //   };
  // }

  return (
    <div style={{ transform: "translateX(0)", position: "relative" }}>
      <Box
        className={`${styles.allTasks} ${
          (activeClass === 2 && styles.active__tab) || ""
        }`}
      >
        <Box
          display={"flex"}
          flexDirection="column"
          width="100%"
          gap={"13px"}
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ boxShadow: "rgb(149 157 165 / 16%) 0px 8px 24px" }}
        >
          {data.map((task, index) => (
            <Box
              borderBottom={"1px solid #E9F3F5"}
              className={styles.taskListMobile}
              paddingBottom="15px"
              paddingTop="15px"
              key={index}
              display={"flex"}
              width="100%"
              justifyContent={"space-between"}
              alignItems="center"
              sx={{
                cursor: "pointer",
                backgroundColor: `${
                  (activeState === task && "#714DD9") || "#fff"
                }`
              }}
              onClick={() => {
                navigate(`/virtual-assistance/vataskdetail/${task.task_id}`);
                setDissapear(false);
                setTimeout(() => {
                  setHidden(false);
                }, 200);

                setActiveState(task);
              }}
            >
              <Box display={"flex"} flexDirection="column">
                <Box
                  className={styles.task__name__v1}
                  display={"flex"}
                  alignItems="center"
                  marginLeft={"30px"}
                >
                  <h6
                    className={styles.task__name}
                    style={{
                      color: `${
                        (activeState === task && "#fff") || "rgb(150 144 144)"
                      }`
                    }}
                  >
                    {task.title}
                  </h6>
                </Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  gap="20px"
                  marginLeft={"30px"}
                  className={styles.info}
                >
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="5px"
                    width="200px"
                  >
                    {" "}
                    <Avatar
                      src={task.user.avatar}
                      sx={{ height: "35px", width: "35px" }}
                    />
                    <span
                      style={{
                        fontFamily: `Lato 'sans-serif'`,
                        textTransform: "capitalize",
                        fontSize: "15px",
                        marginLeft: "10px",
                        paddingRight: "30px",

                        whiteSpace: "nowrap",
                        color: `${
                          (activeState === task && "#fff") || "rgb(150 144 144)"
                        }`
                      }}
                    >
                      {task.user.name}{" "}
                    </span>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="5px"
                    width="130px"
                  >
                    <img
                      src={activeState === task ? stopwatchlight : stopwatch}
                      alt="stopwatch"
                      style={{ height: "20px", width: "20px" }}
                    />
                    <span
                      style={{
                        fontFamily: `Lato 'sans-serif'`,
                        textTransform: "capitalize",
                        fontSize: "15px",
                        color: `${
                          (activeState === task && "#fff") || "rgb(150 144 144)"
                        }`
                      }}
                    >
                      {remeiningTime(task.end_time)}
                    </span>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="5px"
                    width="130px"
                  >
                    <img
                      style={{ objectFit: "contain" }}
                      src={activeState === task ? commentlight : comment}
                      alt="comment"
                    />
                    <span
                      style={{
                        fontFamily: `Lato 'sans-serif'`,
                        textTransform: "capitalize",
                        fontSize: "13px",
                        color: `${
                          (activeState === task && "#fff") || "rgb(150 144 144)"
                        }`
                      }}
                    >
                      {"6 Comments"}{" "}
                    </span>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="5px"
                    width="130px"
                  >
                    <span
                      style={{
                        fontFamily: `Lato 'sans-serif'`,
                        textTransform: "capitalize",
                        marginLeft: "20px",
                        fontSize: "13px",
                        color: ` ${
                          (task.status === "DONE" && "lawngreen") ||
                          (task.status === "EXPIRED" && "red") ||
                          "lawngreen"
                        } `
                      }}
                    >
                      {(task.status === "PENDING" && "Pending") ||
                        (task.status === "EXPIRED" && "Expired") ||
                        (task.status === "DONE" && "Done")}{" "}
                    </span>
                  </Box>
                </Box>
              </Box>
              <Box
                display={"flex"}
                gap="5px"
                marginRight={{ md: "50px !important", sm: "5px !important" }}
                className={styles.view}
              >
                <span
                  style={{
                    fontFamily: `Lato 'sans-serif'`,
                    textTransform: "capitalize",
                    color: `${(activeState === task && "#fff") || "#714DD9"}`
                  }}
                  className={styles.task__date}
                >
                  View
                </span>
                <img
                  style={{ color: `${activeState === task && "#fff"}}` }}
                  className={styles.task__date}
                  src={right}
                  alt="right"
                />
              </Box>
              {/* <p className= {`${styles.task__date} ${title==='PENDING' && styles.darker ||title==='OVERDUE' && styles.darker }`} >{`${task.date} at ${task.time}`}</p> */}
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        className={`${styles.assigned}  ${
          (activeClass === 1 && styles.active__tab) || ""
        }`}
      >
        <Box
          display={"flex"}
          flexDirection="column"
          width="100%"
          gap="13px"
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ boxShadow: "rgb(149 157 165 / 16%) 0px 8px 24px" }}
        >
          {assigned.map((task, index) => (
            <Box
              borderBottom={"1px solid #E9F3F5"}
              className={styles.taskListMobile}
              paddingBottom="15px"
              paddingTop="15px"
              key={index}
              display={"flex"}
              width="100%"
              justifyContent={"space-between"}
              alignItems="center"
              sx={{
                cursor: "pointer",
                backgroundColor: `${
                  (activeState === task && "#714DD9") || "#fff"
                }`
              }}
              onClick={() => {
                navigate(`/virtual-assistance/vataskdetail/${task.task_id}`);
                setDissapear(false);
                setTimeout(() => {
                  setHidden(false);
                }, 200);

                setActiveState(task);
              }}
            >
              <Box display={"flex"} flexDirection="column" gap="15px">
                <Box
                  className={styles.task__name__v1}
                  display={"flex"}
                  alignItems="center"
                  marginLeft={"30px"}
                >
                  <h6
                    className={styles.task__name}
                    style={{
                      color: `${
                        (activeState === task && "#fff") || "rgb(150 144 144)"
                      }`
                    }}
                  >
                    {task.title}
                  </h6>
                </Box>
                <Box
                  display={"flex"}
                  alignItems="center"
                  gap="20px"
                  marginLeft={"30px"}
                  className={styles.info}
                >
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="5px"
                    width="200px"
                  >
                    {" "}
                    <Avatar
                      src={task.user.avatar}
                      sx={{ height: "35px", width: "35px" }}
                    />
                    <span
                      style={{
                        fontFamily: `Lato 'sans-serif'`,
                        textTransform: "capitalize",
                        fontSize: "15px",
                        marginLeft: "10px",
                        paddingRight: "30px",

                        whiteSpace: "nowrap",
                        color: `${
                          (activeState === task && "#fff") || "rgb(150 144 144)"
                        }`
                      }}
                    >
                      {task.user.name}{" "}
                    </span>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="5px"
                    width="130px"
                  >
                    <img
                      src={activeState === task ? stopwatchlight : stopwatch}
                      alt="stopwatch"
                      style={{ height: "20px", width: "20px" }}
                    />
                    <span
                      style={{
                        fontFamily: `Lato 'sans-serif'`,
                        textTransform: "capitalize",
                        fontSize: "15px",
                        color: `${
                          (activeState === task && "#fff") || "rgb(150 144 144)"
                        }`
                      }}
                    >
                      {remeiningTime(task.end_time)}
                    </span>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="5px"
                    width="130px"
                  >
                    <img
                      style={{ objectFit: "contain" }}
                      src={activeState === task ? commentlight : comment}
                      alt="comment"
                    />
                    <span
                      style={{
                        fontFamily: `Lato 'sans-serif'`,
                        textTransform: "capitalize",
                        fontSize: "13px",
                        color: `${
                          (activeState === task && "#fff") || "rgb(150 144 144)"
                        }`
                      }}
                    >
                      {"6 Comments"}{" "}
                    </span>
                  </Box>
                  <Box
                    display="flex"
                    alignItems={"center"}
                    gap="5px"
                    width="130px"
                  >
                    <span
                      style={{
                        fontFamily: `Lato 'sans-serif'`,
                        textTransform: "capitalize",
                        marginLeft: "20px",
                        fontSize: "13px",
                        color: ` ${
                          (task.status === "DONE" && "lawngreen") ||
                          (task.status === "EXPIRED" && "red") ||
                          "lawngreen"
                        } `
                      }}
                    >
                      {(task.status === "PENDING" && "Pending") ||
                        (task.status === "EXPIRED" && "Expired") ||
                        (task.status === "DONE" && "Done")}{" "}
                    </span>
                  </Box>
                </Box>
              </Box>
              <Box
                display={"flex"}
                gap="5px"
                marginRight={{ md: "50px !important", sm: "5px !important" }}
                className={styles.view}
              >
                <span
                  style={{
                    fontFamily: `Lato 'sans-serif'`,
                    textTransform: "capitalize",
                    color: `${(activeState === task && "#fff") || "#714DD9"}`
                  }}
                  className={styles.task__date}
                >
                  View
                </span>
                <img
                  style={{ color: `${activeState === task && "#fff"}}` }}
                  className={styles.task__date}
                  src={right}
                  alt="right"
                />
              </Box>
              {/* <p className= {`${styles.task__date} ${title==='PENDING' && styles.darker ||title==='OVERDUE' && styles.darker }`} >{`${task.date} at ${task.time}`}</p> */}
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Accordion;
