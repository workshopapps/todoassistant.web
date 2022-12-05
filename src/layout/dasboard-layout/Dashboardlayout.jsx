import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import DashboardNav from "./DashboardNav";
import { Box, Stack } from "@mui/material";
import NavList from "../../core/dashboard/va-client-page/NavList";
import { Link, Outlet } from "react-router-dom";

const Dashboardlayout = () => {
  return (
    <Grid2 height={`100vh`} container>
      <Grid2 xs={0} md={3}>
        <Box
          sx={{
            padding: `0 1rem`,
            border: `1px solid lightgrey`,
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
            <Link to={`/virtual-assistance/profile`}>
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
