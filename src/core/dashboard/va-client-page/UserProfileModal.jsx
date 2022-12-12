import * as React from "react";
import Box from "@mui/material/Box";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Chip, MenuItem, Stack } from "@mui/material";
import axios from "axios";
import Loader from "./Loader";
import ProfileAvatar from "./Avatar";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";

const style = {
  position: "relative",
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `center`,
  gap: `1rem`,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: `8px`,
  maxWidth: 900,
  width: `100%`,
  height: { xs: `100%`, md: `initial` },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: `1rem`, md: `5rem` }
};

const iconStyle = {
  fontSize: `xx-large`,
  borderRadius: `100%`,
  padding: `5px`,
  // bgcolor: `#714DD930`,
  color: `#714DD9`,
  "&:hover": {
    bgcolor: `#714DD970`
  }
};

const styledMenuItem = {
  padding: `1rem`,
  "&:hover": {
    background: `#714DD910`
  }
};

export default function UserProfileModal({ userID, user }) {
  let vaUser = JSON.parse(localStorage.getItem("VA"));

  const [loading, setLoading] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.ticked.hng.tech/api/v1/va/user/profile/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${vaUser.extra.token}`
          }
        }
      );
      if (response.status === 200) {
        setLoading(false);

        setUserDetails(response.data.data);
      }
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      console.error(error);
    }
  };

  React.useEffect(() => {
    getUserDetails();
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
        {loading ? (
          <Loader />
        ) : (
          <Box sx={style}>
            <CloseIcon
              className="grow"
              onClick={handleClose}
              sx={{
                position: `absolute`,
                top: 0,
                right: 0,
                margin: `2rem`,
                fontSize: `2rem`,
                cursor: `pointer`
              }}
            />
            <ProfileAvatar
              image={user.avatar}
              fontSize={`48px`}
              fullName={[userDetails.first_name, userDetails.last_name]
                .join(" ")
                .toUpperCase()}
              size={{ width: 150, height: 150 }}
            />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {[userDetails.first_name, userDetails.last_name].join(" ")}
            </Typography>
            <Chip color="primary" label="Ticked Free Plan" variant="outlined" />
            <Box width={{ xs: `100%`, md: `70%` }}>
              <Stack
                borderRadius={`8px`}
                padding={`5rem 1rem`}
                gap={3}
                className="shadow"
              >
                <Stack
                  direction={`row`}
                  justifyContent={`space-between`}
                  alignItems={`center`}
                  flexWrap={`wrap`}
                >
                  <Stack
                    direction={`row`}
                    alignItems={`center`}
                    justifyContent={`space-between`}
                    gap={1}
                    width={{ xs: `5rem`, md: `6rem` }}
                    pl={`.4rem`}
                  >
                    <ProfileAvatar
                      image={user.avatar}
                      size={{ width: 25, height: 25 }}
                      fontSize={`10px`}
                      fullName={[
                        userDetails.first_name,
                        userDetails.last_name
                      ].join(" ")}
                    />
                    <Typography
                      fontSize={{ xs: `12px`, sm: `14px`, md: `16px` }}
                    >
                      Name
                    </Typography>
                  </Stack>
                  <Stack width={`60%`}>
                    <Typography
                      color={`#000000`}
                      fontSize={{ xs: `12px`, sm: `14px`, md: `16px` }}
                      fontWeight={700}
                    >
                      {[userDetails.first_name, userDetails.last_name].join(
                        " "
                      )}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={`row`}
                  justifyContent={`space-between`}
                  alignItems={`center`}
                  flexWrap={`wrap`}
                >
                  <Stack
                    direction={`row`}
                    alignItems={`center`}
                    justifyContent={`space-between`}
                    gap={1}
                    width={{ xs: `5rem`, md: `6rem` }}
                  >
                    <AlternateEmailIcon sx={iconStyle} />
                    <Typography
                      fontSize={{ xs: `12px`, sm: `14px`, md: `16px` }}
                    >
                      Email
                    </Typography>
                  </Stack>
                  <Stack width={`60%`}>
                    <Typography
                      color={`#000000`}
                      fontSize={{ xs: `12px`, sm: `14px`, md: `16px` }}
                      fontWeight={700}
                    >
                      {userDetails.email}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={`row`}
                  justifyContent={`space-between`}
                  alignItems={`center`}
                >
                  <Stack
                    direction={`row`}
                    alignItems={`center`}
                    justifyContent={`space-between`}
                    gap={1}
                    width={{ xs: `5rem`, md: `6rem` }}
                  >
                    <PhoneIcon sx={iconStyle} />

                    <Typography
                      fontSize={{ xs: `12px`, sm: `14px`, md: `16px` }}
                    >
                      Phone
                    </Typography>
                  </Stack>
                  <Stack width={`60%`}>
                    <Typography
                      color={`#000000`}
                      fontSize={{ xs: `12px`, sm: `14px`, md: `16px` }}
                      fontWeight={700}
                    >
                      {userDetails.phone}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
      </Modal>
    </div>
  );
}
