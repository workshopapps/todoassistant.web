import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { VAAuthContext } from "../../contexts/VAContexts/AuthContext";
import { logout } from '../../contexts/VAContexts/AuthActions';


export default function VAAccountMenu() {
    const navigate = useNavigate();
    const { dispatch } = React.useContext(VAAuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const handleLogout = () => {
   dispatch(logout());
   navigate("/va-login");
 };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
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
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            width: `12rem`,
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to={`/virtual-assistance/profile`}>
          <MenuItem>
            <Avatar sx={{ bgcolor: `#714DD9` }} />
            Profile
          </MenuItem>
        </Link>
        <Divider />

        <Link to="/virtual-assistance/settings">
          <MenuItem sx={{ my: `1rem` }}>
            <ListItemIcon sx={{ color: `#714DD9` }}>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Link>

        <MenuItem sx={{ color: `red`, mt: `1rem` }} onClick={handleLogout}>
          <ListItemIcon sx={{ color: `red` }}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
