import * as React from "react";
import Box from "@mui/material/Box";
import UserNavbar from "./UserAppBar";
import UserNavDrawer from "./UserAppDrawer";

function UserDrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <UserNavbar handleDrawerToggle={handleDrawerToggle} />

      <Box component="nav">
        <UserNavDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
    </Box>
  );
}

export default UserDrawerAppBar;
