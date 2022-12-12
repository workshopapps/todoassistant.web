import React, { useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { onMessageListener } from "../../messaging_init_in_sw";
import { useLocation } from "react-router-dom";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";

export default function Notifications() {
  const [active, setActive] = useState("All");
  const {notification } = useContext(TaskCtx);


  console.log(notification, "not")
// Object.values(notification).map(item => console.log(item[0], "loop"))
  //GETTING USER AND VA NOTIFICATIONS
  const location = useLocation();
  // const vaNotification = JSON.parse(localStorage.getItem("vaNotification"));
  // const userNotification = JSON.parse(localStorage.getItem("userNotification"));
  // userNotification.map((item) => console.log(item))

  const handleRedirect = () => {
    location.push("notifications")
  }


// Setting notification color
// switch () {

// }

  // useEffect(() => {
  //   if (
  //     location.pathname === "/dashboard/notifications" &&
  //     userNotification !== null
  //   ) {
  //     setNotification(userNotification);
  //   } else if (
  //     location.pathname === "/virtual-assistance/notifications" &&
  //     vaNotification !== null
  //   ) {
  //     setNotification(vaNotification);
  //   }
  // }, [location.pathname]);



  onMessageListener()
    .then(payload => {
      alert("You have a new notification")
      handleRedirect()
      console.log(payload, "done");
    })
    .catch(err => console.log("failed: ", err));



  return (
    <Box padding={`24px`} maxWidth={"100vw"}>
      <Typography
        sx={{
          fontWeight: "700",
          color: "#2B363B",
          lineHeight: "20px"
        }}
      >
        Notifications
      </Typography>
      {/* <Toaster/> */}
      <Box
        mt={2}
        sx={{ background: "#fff", padding: "30px 0", borderRadius: "8px" }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Typography
              sx={{
                borderBottom: active === "All" ? "2px solid #714DD9" : null,
                padding: "0px 20px",
                cursor: "pointer",
                color: active === "All" ? "#714DD9" : null
              }}
              onClick={() => setActive("All")}
            >
              All
            </Typography>
            <Typography
              sx={{
                cursor: "pointer",
                borderBottom: active === "Unread" ? "2px solid #714DD9" : null,
                color: active === "Unread" ? "#714DD9" : null
              }}
              onClick={() => setActive("Unread")}
            >
              Unread
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "#714DD9" }}>Mark All as read</Typography>
          </Box>
        </Box>
      </Box>
      {/* <Box>
        {notification.map((item, index) => (
          <Box key={index}>
            <p>{item.title}</p>
          </Box>
        ))}
      </Box> */}
      <Box mt={2} sx={{ background: "#fff" }} py={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: { xs: "20px 10px", md: "0px 30px" }
          }}
        >
          {notification.length > 0 && (
            <>
              <Typography sx={{ fontSize: "12px" }}>
                {notification.length} NOTIFICATIONS
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#FF4D4F" }}>
                Clear all
              </Typography>
            </>
          )}
        </Box>
        {notification.length > 0 ? (
          notification.map(item => {
            let bgCl
            switch(item?.title) {
              case "Expired Task":
                  bgCl = "linear-gradient(0deg, rgba(219, 0, 4, 0.11), rgba(219, 0, 4, 0.11)), #FFFFFF"
                  break
              default: 
                  bgCl = "linear-gradient(0deg, rgba(82, 196, 26, 0.11), rgba(82, 196, 26, 0.11)), #FFFFFF"
            }
            return (
              <Box
              className="shadow"
              key={item?.title}
              mt={1}
              p={1}
              sx={{
                background: bgCl,
                borderRadius: "8px",
                padding: { xs: "20px 10px", md: "20px 50px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Box
                      sx={{
                        padding: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%"
                      }}
                    >
                      <Typography ml={1}>N</Typography>
                      <Typography
                        sx={{
                          backgroundColor: "red",
                          padding: "3px",
                          borderRadius: "50%",
                          position: "relative",
                          left: "7px",
                          top: "-12px"
                        }}
                      ></Typography>
                    </Box>
                  </Box>
                  <Box ml={2}>
                    <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "12px", fontWeight: "400" }}
                      component="span"
                    >
                      {item?.content}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: "400" }}
                  ml={2}
                  component="span"
                >
                  {item?.time}
                </Typography>
              </Box>
            </Box>
            )
          })
        ) : (
          <Box mt={4}>
            <Typography textAlign={"center"}>
              You do not have notification yet
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
