import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import style from "./va.module.scss";
import { NavLink } from "react-router-dom";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@mui/material";

const styledListItem = {
  padding: `1rem`,
  borderRadius: `8px`,
  "&:hover": {
    background: `#714DD950`
  }
};

const NavList = () => {
  return (
    <List>
      <NavLink
        className={[
          `link`,
          ({ isActive }) => (isActive ? style.active : style.inactive)
        ]}
        to={`/va-assistance`}
      >
        <ListItem sx={styledListItem}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={`Home`} />
        </ListItem>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
        to={`/clients`}
      >
        <ListItem sx={styledListItem}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary={`Clients`} />
        </ListItem>
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
        to={`/tasks`}
      >
        <ListItem sx={styledListItem}>
          <ListItemIcon>
            <TaskAltIcon />
          </ListItemIcon>
          <ListItemText primary={`Tasks`} />
        </ListItem>
      </NavLink>
      <Divider sx={{ my: `1rem` }} />
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
        to={`/settings`}
      >
        <ListItem sx={styledListItem}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={`Settings`} />
        </ListItem>
      </NavLink>
    </List>
  );
};

export default NavList;
