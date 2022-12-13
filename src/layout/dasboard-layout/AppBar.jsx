import React, {  useContext } from "react";
import {
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
import VAAccountMenu from "../../components/menu/VAAccountMenu";
import { TaskCtx } from "../../contexts/taskContext/TaskContextProvider";


const Navbar = ({ handleDrawerToggle }) => {
  let vaUser = JSON.parse(localStorage.getItem("VA"));
  const {notification } = useContext(TaskCtx);
console.log(notification)
  return (
    <AppBar
      sx={{
        justifyContent: `center`,
        height: { xs: `64px`, md: `120px` },
        borderBottom: `1px solid lightgrey`
      }}
      elevation={0}
      color="transparent"
      position="static"
    >
      <Toolbar sx={{ justifyContent: `space-between` }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
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
            ml: `1rem`,
            alignItems: `center`,
            display: { xs: "none", sm: "flex" }
          }}
        >
          Hello {vaUser?.data.first_name}
          <img
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669905647/hng/todoAppVirtualAssistant/twemoji_waving-hand_e1lc4q.svg"
            alt="wave"
          />
        </Typography>
        <Box>
          <Stack direction={`row`} alignItems={`center`} gap={0}>
            <Link to={`notifications`}>
              <Badge color="secondary" badgeContent={notification?.length}>
                <NotificationsNoneIcon
                  fontSize="large"
                  sx={{
                    borderRadius: `100%`,
                    padding: `5px`,
                    bgcolor: `#714DD930`,
                    color: `#714DD9`,
                    "&:hover": {
                      bgcolor: `#714DD970`
                    }
                  }}
                />
              </Badge>
            </Link>
            <Box>
              <VAAccountMenu
                fullName={[vaUser.data.first_name, vaUser.data.last_name].join(
                  " "
                )}
              />
            </Box>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
