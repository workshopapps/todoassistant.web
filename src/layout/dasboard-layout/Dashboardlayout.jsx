import React, { useEffect, useContext} from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import DashboardNav from "./DashboardNav";
import { Box, Stack } from "@mui/material";
import NavList from "../../core/dashboard/va-client-page/NavList";
import { Link, Outlet } from "react-router-dom";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";


// import axios from "axios";
//messaginh
import { requestForToken } from "../../messaging_init_in_sw";

const Dashboardlayout = () => {
  
  // Request permission from user fro notification
  requestForToken();

  const { getNotificationVA } = useContext(TaskCtx);

  useEffect(() => {
    getNotificationVA()
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
