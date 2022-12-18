import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./VAHome.module.scss";
import Accordian from "../Accordion/Accordion";
import axios from "axios";

import smile from "../../assets/Subtractsmile.svg";
import SkeletonLoader from "./Skeleton/SkeletonLoader";

const VAHome = () => {
  const [data, setData] = useState([]);
  const [activeClass, setActiveClass] = useState(2);
  const [isLoading, setIsLoadiing] = useState(true);

  const [hidden, setHidden] = useState(true);
  const [dissapear, setDissapear] = useState(true);
  const [assigned, setAssigned] = useState([]);

  const fetchTasks = async () => {
    let vaUser = JSON.parse(localStorage.getItem("VA"));

    if (vaUser) {
      const response = await axios.get(
        `https://api.ticked.hng.tech/api/v1/task/all`,
        {
          headers: {
            Authorization: `Bearer ${vaUser.extra.token}`
          }
        }
      );

      const vaTasks = response.data.data;

      setData(vaTasks);
      localStorage.setItem("Tasks", JSON.stringify(vaTasks));
      setIsLoadiing(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // const handleSideBar = () => {
  //   setHidden(true);

  //   setTimeout(() => {
  //     setDissapear(true);
  //   }, 200);
  // };
  useEffect(() => {
    if (hidden === true) {
      document.body.style = "overflow-y:scroll";
    } else {
      document.body.style = "overflow-y:hidden";
    }
  }, [hidden]);

  useEffect(() => {
    setAssigned(data?.filter(task => task.va_id !== ""));
  }, [data]);

  return (
    <Box
      height={"86vh"}
      overflow={"scroll"}
      padding="33px"
      bgcolor={"#F9F7FF"}
      className={styles.main}
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        flexDirection={"column"}
        className={styles.upperTittle}
        alignItems={"center"}
        sx={{
          width: `${"100%"}`,
          backgroundColor: "#fff",
          padding: "5px 22px",
          paddingTop: "33px",
          borderRadius: "8px",
          gap: "20px",
          boxShadow: "rgb(149 157 165 / 16%) 0px 8px 24px"
        }}
      >
        {/* <Box display={"flex"} width="100%" justifyContent={"space-between"}>
          <Box display={"flex"} sx={{ alignItems: "center", gap: "10px" }}>
            {" "}
            <Typography variant="h4" className={styles.tittle}>
              Today
            </Typography>
            <AiOutlineDown className={`${styles.chevron} `} />
          </Box>
        </Box> */}

        <Box display={"flex"} width="100%" gap={"50px"}>
          <Typography
            onClick={() => {
              setActiveClass(2);
            }}
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              textAlign: "center",
              cursor: "pointer",
              height: "50px",
              maxWidth: "151px",
              width: "100%"
            }}
            color={activeClass === 2 && " #714DD9"}
            className={(activeClass === 2 && styles.active) || ""}
          >
            All Tasks {`(${data?.length})`}
          </Typography>
          <Typography
            onClick={() => {
              setActiveClass(1);
            }}
            sx={{
              fontSize: "15px",
              cursor: "pointer",
              textAlign: "center",
              height: "50px",
              maxWidth: "151px",
              width: "100%",
              color: `${activeClass === 1 && " #714DD9"}`
            }}
            className={(activeClass === 1 && styles.active) || ""}
          >
            Assigned to Me {`(${assigned?.length})`}
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} width="100%" gap={"20px"}>
        {data?.length === 0 && !isLoading && (
          // /* TASKS EMPTY STATE */
          <Box
            minHeight={"69vh"}
            width={"100%"}
            bgcolor="#fff"
            marginTop={3}
            borderRadius={3}
            display={"flex"}
            sx={{
              placeItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <h4 style={{ fontSize: "24px" }}>No Clients</h4>
            <p
              style={{
                fontSize: "17px",
                textAlign: "center",
                marginTop: "10px"
              }}
            >
              You will be notified when a user has been assigned to you
            </p>
          </Box>
        )}

        {data && !isLoading && (
          <Box
            style={{
              display: `${
                (data?.length === 0 && isLoading && "none") || "block"
              }`
            }}
            className={styles.Accordian__v11}
            display={"flex"}
            flexDirection="column"
            sx={{
              width: "65%",
              backgroundColor: "transparent",
              padding: "0px 6px"
            }}
          >
            <Accordian
              activeClass={activeClass}
              data={data}
              numTask={data?.length}
              setDissapear={setDissapear}
              setHidden={setHidden}
              assigned={assigned}
              // setData={setSingleData}
            />
          </Box>
        )}
        {isLoading && (
          <Box width="100%">
            <SkeletonLoader />
          </Box>
        )}

        {/* VATaskdetails */}

        {/* </Box>  */}
        <Box
          className={`${styles.comment} ${hidden && styles.hidden} ${
            dissapear && styles.dissapear
          }`}
          width={"300px"}
          borderRadius="10px"
          border="1px solid #D3D0D9"
          position={"fixed"}
          bottom="10px"
          padding="10px"
          right="16px"
          display={"flex"}
          gap="7px"
          alignItems={"center"}
        >
          <img
            style={{
              height: "28px",
              marginLeft: "10px",
              cursor: "pointer"
            }}
            src={smile}
            alt="smile"
          />
          <input
            style={{ margin: "0", border: 0, outline: "none", width: "100%" }}
            type="text"
            placeholder="Add a comment..."
            title="comment"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default VAHome;
