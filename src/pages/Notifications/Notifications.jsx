import React, { useState, useContext } from "react";
import { Box, Typography } from "@mui/material";
import { onMessageListener } from "../../messaging_init_in_sw";
import { useLocation } from "react-router-dom";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";
import axios from "axios";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export function AlertDialogSlide({open, handleClose, loading, userDetails}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        
        <DialogContent>
         {loading ? 
         <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          <CircularProgress color="inherit" />
        </Stack> : 
        <Box> 
         
            <Typography>Title: {userDetails.title}</Typography>
            <Typography>Status: {userDetails.status}</Typography>
            <Typography>Created: {userDetails.start_time}</Typography>
            <Typography>End: {userDetails.end_time}</Typography>
        </Box>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function Notifications() {
  const id = JSON.parse(localStorage.getItem("user"));
  const idVa = JSON.parse(localStorage.getItem("VA"));
  const [ mark, setMark ] = useState(false)
  const [open, setOpen] = useState(false);
  const [ loading, setIsLoading ] = useState(false)
  const [ userDetails, setUserDetails ] = useState([])
  const {notification, resetNotification } = useContext(TaskCtx);
  const [active, setActive] = useState("All");
  const [ currentNotification ] = useState(notification)
  // const { getTasks, getNotificationVA, notification } = useContext(TaskCtx);

  // const [notificationRead, setNotificationRead] = useState([])

  const getUserNotificationDetails = async (taskID) => {
    setIsLoading(true)
      try {
        await axios.get(`https://api.ticked.hng.tech/api/v1/task/${taskID}`, {
          headers: { Authorization: `Bearer ${
          id?.data?.access_token || idVa?.extra?.token
          }` }
        })
          .then((res) => {
            setIsLoading(false)
            setUserDetails(res.data)
          })
        
      } catch (error) {
        setIsLoading(false)
      }
  }

//   let filterNotification = []
 
  
// console.log(filterNotification)




  const handleClickOpen = (val, notificationIndex) => {
    let value = currentNotification[notificationIndex]
    // setCurrentNotification((prev))
    // console.log(notification)
    value.readNotification = true
    // notification[notificationIndex] = value
    // console.log(value)
    setOpen(true);
    getUserNotificationDetails(val)
    
  };

  const handleRead = (log, index) => {
    console.log(log, index, "unread")
    const value = currentNotification[index]
    value.read_status  = "1"
    // console.log(currentNotification)
    // setCurrentNotification((prev) => prev[index] = value)
  }

  currentNotification.filter((item) => item.read_status !== "1")
  console.log(currentNotification, "curent")

  const handleClose = () => {
    setOpen(false);
  };
  



  const location = useLocation();


  const handleRedirect = () => {
    location.push("notifications")
  }




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
            {/* <Typography
              sx={{
                cursor: "pointer",
                borderBottom: active === "Unread" ? "2px solid #714DD9" : null,
                color: active === "Unread" ? "#714DD9" : null
              }}
              onClick={() => setActive("Unread")}
            >
              Unread
            </Typography> */}
          </Box>
          <Box>
            {notification.length > 0 ? <Typography 
              onClick={() => {
                setMark(true)
                
              }} 
              sx={{ color: "#714DD9", cursor: "pointer" }}>Mark All as read</Typography> : null}
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
      {active === "All" ?   <Box mt={2} sx={{ background: "#fff" }} py={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: { xs: "20px 10px", md: "0px 30px" },
          }}
        >
          {notification !== null && (
            <>
              <Typography sx={{ fontSize: "12px" }}>
                {notification.length} NOTIFICATIONS
              </Typography>
             {notification.length > 0 ?  <Typography 
                sx={{ 
                  fontSize: "12px", 
                  color: "#FF4D4F", 
                  cursor: "pointer" 
                }} 
                  onClick={() => resetNotification()}>
                Clear all
              </Typography>: null}
            </>
          )}
        </Box>
        {/* <p onClick={() => handleClickOpen("906a82f3-850a-4d58-ac2b-fc3d3c702c30")}>me</p> */}
        {notification !== null ? (
          notification.map((item, index) => {
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
              onClick={() => handleClickOpen(item.task_id, index)}
              className="shadow"
              key={index}
              mt={1}
              p={1}
              sx={{
                background: bgCl,
                borderRadius: "8px",
                padding: { xs: "20px 10px", md: "20px 50px" },
                cursor: "pointer"
              }}
            >
              <Box
                sx={{
                  display: {xs: "block", sm: "block", md: "flex"},
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
                          backgroundColor: mark ? null : "red",
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
                    <Typography sx={{ fontSize: "14px", fontWeight: mark ? "100" : "700" }}>
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "12px", fontWeight: mark ? "100" : "400" }}
                      component="span"
                    >
                      {item?.content}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "12px", fontWeight: mark ? "100" : "400" }}
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
      </Box> : active === "Unread" ? <Box mt={2} sx={{ background: "#fff" }} py={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: { xs: "20px 10px", md: "0px 30px" },
          }}
        >
          {currentNotification !== null && (
            <>
              <Typography sx={{ fontSize: "12px" }}>
                {currentNotification.length} NOTIFICATIONS
              </Typography>
              {/* <Typography sx={{ fontSize: "12px", color: "#FF4D4F" }}>
                Clear all
              </Typography> */}
            </>
          )}
        </Box>
        {/* <p onClick={() => handleClickOpen("906a82f3-850a-4d58-ac2b-fc3d3c702c30")}>me</p> */}
        {currentNotification !== null ? (
          currentNotification.map((item, index) => {
            // console.log(item, "308")
            // item.readNotification = false
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
              onClick={() => handleRead(item, index)}
              className="shadow"
              key={index}
              mt={1}
              p={1}
              sx={{
                background: bgCl,
                borderRadius: "8px",
                padding: { xs: "20px 10px", md: "20px 50px" },
                cursor: "pointer"
              }}
            >
              <Box
                sx={{
                  display: {xs: "block", sm: "block", md: "flex"},
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
      </Box>: null}
      <AlertDialogSlide 
        open={open} 
        handleClose={handleClose} 
        loading={loading} 
        userDetails={userDetails} />
    </Box>
  );
}
