import React, { useState } from "react";
import style from "./newsLetter.module.scss";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { toast } from "react-toastify";

// import DialogTitle from '@mui/material/DialogTitle';
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
<Box
  sx={{
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center"
  }}
>
  <svg
    style={{ height: "60px" }}
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
    viewBox="0 0 54 54"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle stroke="currentColor" cx="27" cy="27" fill="none" r="25"></circle>
    <path
      stroke="currentColor"
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
      fill="none"
    ></path>
  </svg>
  <Typography>
    Thanks, your subscription has been confirmed. You've been added to our list
    and will hear from us soon.
  </Typography>
</Box>;
export function AlertDialogSlide({ open, handleClose, error, email }) {
  let content;
  if (error !== "error") {
    if (error === "new") {
      content = (
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <svg
            style={{ height: "60px" }}
            aria-hidden="true"
            focusable="false"
            fill="currentColor"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              stroke="currentColor"
              cx="27"
              cy="27"
              fill="none"
              r="25"
            ></circle>
            <path
              stroke="currentColor"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              fill="none"
            ></path>
          </svg>
          <Typography>
            Thanks, your subscription has been confirmed. You've been added to
            our list and will hear from us soon.
          </Typography>
        </Box>
      );
    } else if (error === "exist") {
      content = <Typography> {email} email already exist</Typography>;
    }
  } else {
    content = (
      <Typography>En error occured, please try again letter</Typography>
    );
  }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEmail("");
  };
  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleNewsLetter = async e => {
    e.preventDefault();
    if (email !== "" && validateEmail(email)) {
      try {
        const response = await axios.post(
          "https://api.ticked.hng.tech/api/v1/subscribe",
          {
            email: `"${email}"`
          }
        );
        if (response.status == 200) {
          toast.success("Thank you for subscribing", {
            position: toast.POSITION.TOP_RIGHT
          });
          setError("new");
          setEmail("");
        }
        if (response.status == 400) {
          setError("exist");
        }
      } catch (error) {
        console.error(error);
        if (error.response.status == 400) {
          setError("exist");
          handleClickOpen();
        } else if (error.response.status == 500) {
          setError("error");
          handleClickOpen();
        }
        // handleClickOpen()
      }
    }
  };
  return (
    <>
      <AlertDialogSlide
        handleClose={handleClose}
        open={open}
        error={error}
        email={email}
      />
      <form className={style.news__letter}>
        <Typography className={style.header}>Newsletter</Typography>
        <Box px={2} mb={`1rem`} textAlign={`left`} className={style.form}>
          <label className={style.label} htmlFor="email">
            Email Address
          </label>
          <Stack direction={{ sm: `row` }} alignItems={`center`} gap={2}>
            <input
              className={`${style.input}`}
              style={{ outline: "none" }}
              autoComplete="true"
              onChange={e => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter email"
            />

            <button
              onClick={e => handleNewsLetter(e)}
              className={[style.subscribe_button, `hover`].join(" ")}
            >
              Subscribe
            </button>
          </Stack>
        </Box>
      </form>
    </>
  );
};
export default NewsLetter;
