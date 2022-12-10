import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
// import PeopleIcon from "@mui/icons-material/People";
// import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { NavLink, useNavigate } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Button
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { logout } from "../../../contexts/authContext/AuthActions";
import { AuthContext } from "../../../contexts/authContext/AuthContext";

const styledListItem = {
  padding: `1rem`,
  borderRadius: `8px`,
  margin: `1rem 0`,
  "&:hover": {
    color: `#333333`,
    background: `#714DD920`
  }
};

let activeStyle = {
  background: `#714DD980`,
  borderRadius: `8px`,
  color: `#fff`
};

//   const userName = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user"))?.data.first_name
//     : "";

const UserNavList = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Stack height={`calc(99vh - 120px)`} justifyContent={`space-between`}>
      <List>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={`/dashboard/`}
        >
          <ListItem sx={styledListItem}>
            <ListItemIcon>
              <HomeIcon sx={{ color: `#714DD9` }} />
            </ListItemIcon>
            <ListItemText primary={`Home`} />
          </ListItem>
        </NavLink>

        {/* <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={`clients`}
        >
          <ListItem sx={styledListItem}>
            <ListItemIcon>
              <PeopleIcon sx={{ color: `#714DD9` }} />
            </ListItemIcon>
            <ListItemText primary={`Clients`} />
          </ListItem>
        </NavLink> */}
        {/*
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={`tasks`}
        >
          <ListItem sx={styledListItem}>
            <ListItemIcon>
              <TaskAltIcon sx={{ color: `#714DD9` }} />
            </ListItemIcon>
            <ListItemText primary={`Tasks`} />
          </ListItem>
        </NavLink> */}

        <Divider sx={{ my: `1rem` }} />

        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={`/dashboard/settings`}
        >
          <ListItem sx={styledListItem}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: `#714DD9` }} />
            </ListItemIcon>
            <ListItemText primary={`Settings`} />
          </ListItem>
        </NavLink>
      </List>

      <Button
        onClick={handleLogout}
        color="error"
        variant={`text`}
        size="large"
        sx={{
          gap: `10px`,
          borderRadius: `50px`,
          textTransform: `capitalize`,
          my: `1rem`,
          width: `fit-content`
        }}
      >
        <Logout fontSize="small" />
        Logout
      </Button>
    </Stack>
  );
};

export default UserNavList;
