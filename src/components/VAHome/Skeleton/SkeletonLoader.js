import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styles from "../../Accordion/Accordion.module.scss";

const SkeletonLoader = () => {
  return (
    <Box
      className={styles.Accordian__v11}
      display={"flex"}
      flexDirection="column"
      marginTop={"27px"}
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        padding: "10px 0px"
      }}
    >
      <Box
        display={"flex"}
        flexDirection="column"
        width="100%"
        justifyContent={"space-between"}
        alignItems="center"
        sx={{ boxShadow: "rgb(149 157 165 / 16%) 0px 8px 24px" }}
      >
        <Box
          borderBottom={"1px solid #E9F3F5"}
          className={styles.taskListMobile}
          flexDirection="column"
          padding="15px 30px"
          display={"flex"}
          width="100%"
          justifyContent={"space-between"}
          alignItems="flex-start"
          sx={{
            cursor: "pointer"
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            sx={{
              marginTop: "15px",
              borderRadius: "20px"
            }}
          />{" "}
          <Box
            display={"flex"}
            gap="17px"
            width={"100%"}
            alignItems={"center"}
            className={styles.skeleton}
            justifyContent="space-between"
          >
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection="column"
        width="100%"
        justifyContent={"space-between"}
        alignItems="center"
        sx={{ boxShadow: "rgb(149 157 165 / 16%) 0px 8px 24px" }}
      >
        <Box
          borderBottom={"1px solid #E9F3F5"}
          className={styles.taskListMobile}
          flexDirection="column"
          padding="15px 30px"
          display={"flex"}
          width="100%"
          justifyContent={"space-between"}
          alignItems="flex-start"
          sx={{
            cursor: "pointer"
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            sx={{
              marginTop: "15px",
              borderRadius: "20px"
            }}
          />{" "}
          <Box
            display={"flex"}
            className={styles.skeleton}
            gap="17px"
            width={"100%"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection="column"
        width="100%"
        justifyContent={"space-between"}
        alignItems="center"
        sx={{ boxShadow: "rgb(149 157 165 / 16%) 0px 8px 24px" }}
      >
        <Box
          borderBottom={"1px solid #E9F3F5"}
          className={styles.taskListMobile}
          flexDirection="column"
          padding="15px 30px"
          display={"flex"}
          width="100%"
          justifyContent={"space-between"}
          alignItems="flex-start"
          sx={{
            cursor: "pointer"
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            sx={{
              marginTop: "15px",
              borderRadius: "20px"
            }}
          />{" "}
          <Box
            display={"flex"}
            className={styles.skeleton}
            gap="17px"
            width={"100%"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection="column"
        width="100%"
        justifyContent={"space-between"}
        alignItems="center"
        sx={{ boxShadow: "rgb(149 157 165 / 16%) 0px 8px 24px" }}
      >
        <Box
          borderBottom={"1px solid #E9F3F5"}
          className={styles.taskListMobile}
          flexDirection="column"
          padding="15px 30px"
          display={"flex"}
          width="100%"
          justifyContent={"space-between"}
          alignItems="flex-start"
          sx={{
            cursor: "pointer"
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            sx={{
              marginTop: "15px",
              borderRadius: "20px"
            }}
          />{" "}
          <Box
            display={"flex"}
            className={styles.skeleton}
            gap="17px"
            width={"100%"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
            <Box display={"flex"} gap="7px" alignItems={"center"}>
              <Skeleton
                variant={"circular"}
                width="40px"
                height="40px"
                sx={{
                  marginTop: "15px"
                }}
              />
              <Skeleton
                variant={"rectangular"}
                width="120px"
                height="10px"
                sx={{
                  marginTop: "15px"
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkeletonLoader;
