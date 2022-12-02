import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "./AppBar";
import NavDrawer from "./AppDrawer";

function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar handleDrawerToggle={handleDrawerToggle} />

      <Box component="nav">
        <NavDrawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
