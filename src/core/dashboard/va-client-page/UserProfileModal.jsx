import * as React from "react";
import Box from "@mui/material/Box";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MenuItem } from "@mui/material";
import axios from "axios";
import Loader from "./Loader";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImtpbmdzbGV5QGdtYWlsLmNvbSIsIklkIjoiNzJkNzk0NGEtNjMwOS00YmZhLTg1NDUtMWM5NDc5OTE0YTRjIiwiU3RhdHVzIjoiVkEiLCJleHA`;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: `8px`,
  maxWidth: 900,
  width: `100%`,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

const styledMenuItem = {
  padding: `1rem`,
  "&:hover": {
    background: `#714DD910`
  }
};

export default function UserProfileModal({ userID }) {
  const [loading, setLoading] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/v1/user/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 200) {
      setLoading(false);
      console.log(response);
      setUserDetails(response.data.data);
      }
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      console.error(error);
    }
  };

  React.useEffect(() => {
    getUserDetails();
    console.log(userDetails);
  }, []);

  return (
    <div>
      <MenuItem sx={styledMenuItem} onClick={handleOpen} disableRipple>
        <AccountCircleRoundedIcon />
        View Profile
      </MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          {loading ? <Loader /> : userID}
        </Box>
      </Modal>
    </div>
  );
}
