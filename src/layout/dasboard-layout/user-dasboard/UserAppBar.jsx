import React, { useEffect } from "react";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../../../components/dasboard/Dropdown";

const UserNavbar = ({ handleDrawerToggle }) => {
  const [nav, setNav] = useState(false);
  const userName = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))?.data.first_name
    : "";
  let notifiLength;

  useEffect(() => {
    const interval = setInterval(() => {
      notifiLength = JSON.parse(localStorage.getItem("notificationLength"));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AppBar
      sx={{
        justifyContent: `center`,
        height: { xs: `64px`, sm: `120px` },
        border: `1px solid lightgrey`
      }}
      elevation={0}
      color="transparent"
      position="static"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          color={`black`}
          fontWeight={700}
          fontSize={`25px`}
          variant="h5"
          component="div"
          sx={{
            flexGrow: 1,
            gap: 1,
            // ml: `1rem`,
            alignItems: `center`,
            display: { xs: "none", sm: "flex" }
          }}
        >
          Hello {userName}
          <img
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669905647/hng/todoAppVirtualAssistant/twemoji_waving-hand_e1lc4q.svg"
            alt="wave"
          />
          Welcome to Ricked
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Stack direction={`row`} alignItems={`center`} gap={5}>
            <Link to={`notifications`}>
              <Badge color="secondary" badgeContent={notifiLength}>
                <NotificationsNoneIcon
                  fontSize="large"
                  sx={{
                    borderRadius: `100%`,
                    padding: `5px`,
                    bgcolor: `#714DD930`,
                    color: `#714DD9`,
                    "&:hover":{
                      bgcolor: `#714DD970`
                    }
                  }}
                />
              </Badge>
            </Link>
            <Box>
              <Avatar
                onClick={() => {
                  setNav(!nav);
                }}
                // {...stringAvatar("Kingsley Solomon")}
                alt="Remy Sharp"
                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669358533/hng/todoAppVirtualAssistant/unsplash_315vPGsAFUk_yiklv0.svg"
                sx={{
                  width: 40,
                  height: 40,
                  fontSize: `14px`,
                  fontWeight: 700,
                  color: `#714DD9`,
                  cursor: `pointer`
                }}
              />
              {nav ? <Dropdown /> : null}
            </Box>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
