import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// import TaskAltIcon from "@mui/icons-material/TaskAlt";
import UserProfileModal from "./UserProfileModal";
// import ForumIcon from "@mui/icons-material/Forum";

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(2),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0"
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

// const styledMenuItem = {
//   padding: `1rem`,
//   "&:hover": {
//     background: `#714DD910`
//   }
// };

export default function ClientDropdown({ userID, user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="client-button"
        aria-controls={open ? "client-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableelevation="true"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: "#714DD9" }} />
      </IconButton>
      <StyledMenu
        id="client-menu"
        MenuListProps={{
          "aria-labelledby": "client-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <UserProfileModal user={user} userID={userID} />
        {/* <MenuItem sx={styledMenuItem} onClick={handleClose} disableRipple>
          <TaskAltIcon />
          View Tasks
        </MenuItem> */}
        {/* <MenuItem sx={styledMenuItem} onClick={handleClose} disableRipple>
          <ForumIcon />
          Chat
        </MenuItem> */}
      </StyledMenu>
    </div>
  );
}
