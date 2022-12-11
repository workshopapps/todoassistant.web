import React from "react";
import HomeIcon from "@mui/icons-material/Home";
// import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { NavLink } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack
} from "@mui/material";

const styledListItem = {
  padding: `1rem`,
  borderRadius: `8px`,
  margin: `1rem 0`,
  "&:hover": {
    color: `#333333`,
    background: `#714DD920`
  }
};

const UserNavList = () => {
  let vaUser = JSON.parse(localStorage.getItem("VA"));

  let activeStyle = {
    background: `#714DD980`,
    borderRadius: `8px`,
    color: `#fff`
  };

  const showButton =
    vaUser?.data.account_type === "MASTER" ? (
      // <NavLink
      //   style={({ isActive }) => (isActive ? activeStyle : undefined)}
      //   to={`/va-signup`}
      // >
      <Button
        disableElevation
        color="success"
        variant={`text`}
        sx={{
          borderRadius: `50px`,
          textTransform: `capitalize`,
          my: `1rem`,
          width: `fit-content`
        }}
      >
        Sign up A new Virtual assistant
      </Button>
    ) : // </NavLink>
    null;

  return (
    <Stack height={`calc(99vh - 120px)`} justifyContent={`space-between`}>
      <List>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={`/virtual-assistance/`}
        >
          <ListItem sx={styledListItem}>
            <ListItemIcon>
              <HomeIcon sx={{ color: `#714DD9` }} />
            </ListItemIcon>
            <ListItemText primary={`Home`} />
          </ListItem>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={`clients`}
        >
          <ListItem sx={styledListItem}>
            <ListItemIcon>
              <PeopleIcon sx={{ color: `#714DD9` }} />
            </ListItemIcon>
            <ListItemText primary={`Clients`} />
          </ListItem>
        </NavLink>
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
        </NavLink>
        <Divider sx={{ my: `1rem` }} />
        {/* <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={`/virtual-assistance/settings`}
        >
          <ListItem sx={styledListItem}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: `#714DD9` }} />
            </ListItemIcon>
            <ListItemText primary={`Settings`} />
          </ListItem>
        </NavLink> */}
      </List>
      {showButton}
    </Stack>
  );
};

export default UserNavList;
