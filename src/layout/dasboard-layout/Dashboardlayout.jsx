import React, { useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import DashboardNav from "./DashboardNav";
import { Box, Stack } from "@mui/material";
import NavList from "../../core/dashboard/va-client-page/NavList";
import { Link, Outlet } from "react-router-dom";

import axios from "axios";
//messaginh
import { requestForToken } from "../../messaging_init_in_sw";

const Dashboardlayout = () => {
  const id = JSON.parse(localStorage.getItem("VA")).data?.va_id;
  const fbToken = JSON.parse(localStorage.getItem("firebaseNotification"));

  // Request permission from user fro notification
  requestForToken();

  useEffect(() => {
    const getNotification = async () =>  {
           try {
               await axios.post("https://api.ticked.hng.tech/api/v1/notification", {
                   user_id: `${id}`,
                   device_id: fbToken,
                   },
                   {headers: { Authorization: "Bearer " + id }}
               )
           } catch (error) {
               console.error(error)
       }
    }
    getNotification()
   }, [fbToken])

   const getNotificationVA = async () => {
    try {
      await axios.get("https://api.ticked.hng.tech/api/v1/notification", {
        headers: { Authorization: "Bearer " + id }
      }).then((res) => {
        localStorage.setItem("vaNotification", JSON.stringify(res.data))
      })

    } catch (error) {
      console.error(error)
    }
  }

  // calling notifcation function every 10 sec
  useEffect(() => {
    getNotificationVA()

    const interval = setInterval(() => {
      getNotificationVA()
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [])


  return (
    <Grid2
      height={`100vh`}
      container
      width={`100%`}
      maxWidth={`1440px`} //EXPERIMENTAL (WILL TAKE IT OF IF THE TEAM DISAGREES)
      margin={`0 auto`}
    >
      <Grid2
        display={{ xs: `none`, md: `flex` }}
        borderRight={`1px solid lightgrey`}
        xs={0}
        md={3}
      >
        <Box
          sx={{
            top: 0,
            padding: `0 1rem`,
            display: { xs: `none`, md: `block` }
          }}
          width={`100%`}
          height={`100%`}
        >
          <Stack
            direction={`row`}
            padding={`1rem`}
            alignItems={`center`}
            height={`120px`}
          >
            <Link to={`/`}>
              <img
                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg"
                alt="logo"
              />
            </Link>
          </Stack>
          <NavList />
        </Box>
      </Grid2>
      <Grid2 position={`relative`} xs={12} md={9}>
        <DashboardNav />
        <Outlet />
      </Grid2>
    </Grid2>
  );
};

export default Dashboardlayout;
