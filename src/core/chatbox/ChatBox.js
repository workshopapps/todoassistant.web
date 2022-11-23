import React, { useState } from "react";
import clientVa from "../../assets/dashboard/clientVa.png";
import styles from "./ChatBox.module.scss";
import { Box } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

//Images
import send from "../../assets/dashboard/send.png";
import close from "../../assets/dashboard/close.png";

import vaAdd from "../../assets/dashboard/vaAdd.png";
import microphone from "../../assets/dashboard/microphone.png";
import camera from "../../assets/dashboard/camera.png";
import gallery from "../../assets/dashboard/gallery.png";
import document from "../../assets/dashboard/document.png";
import monitor from "../../assets/dashboard/monitor.png";
import cloud from "../../assets/dashboard/cloud.png";

const data = [
  {
    message:
      "Hi Joseph, I am your virtual assistant. How can I help you today?",
    image: clientVa,
    isClient: false
  },
  {
    message: "I need a reminder by 10am to begin my task.",
    image: clientVa,
    isClient: true
  },
  {
    message: "How would you like to be reminded, via calls or text? ",
    image: clientVa,
    isClient: false
  },
  {
    message: "I’d like to be reminded via a call. ",
    image: clientVa,
    isClient: true
  },
  {
    message: "Noted! A reminder has been set for 10am. ",
    image: clientVa,
    isClient: false
  },
  {
    message: "You’ll receive a call by 10am reminding you of your task. ",
    image: clientVa,
    isClient: false
  },
  {
    message: "Thank you, Ayobami.",
    image: clientVa,
    isClient: true
  }
];

export function BasicPopover({ anchorEl, handleClose }) {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Popover
        // sx={{marginLeft: "-60px", border: "1px solid red", width: "100%"}}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <Box className={styles.main} p={2}>
          <Box sx={{ display: "flex" }}>
            <img src={camera} alt="camera" />
            <Typography ml={1}>camera</Typography>
          </Box>
          <Box sx={{ display: "flex" }} mt={2}>
            <img src={gallery} alt="gallery" />
            <Typography ml={1}>Photo & Video Library</Typography>
          </Box>
          <Box className={styles.main__sub} sx={{ display: "flex" }} mt={2}>
            <img src={document} alt="document" />
            <Typography ml={1}>Document</Typography>
          </Box>

          <hr style={{ marginTop: "10px" }} />
          <Box className={styles.main__sub} sx={{ display: "flex" }} mt={2}>
            <Typography>Attach</Typography>
          </Box>
          <Box sx={{ display: "flex" }} mt={2}>
            <img src={monitor} alt="monitor" />
            <Typography ml={1}>Upload from your computer</Typography>
          </Box>
          <Box sx={{ display: "flex" }} mt={2}>
            <img src={cloud} alt="cloud" />
            <Typography ml={1}>Add from Google Drive</Typography>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}

export function PopUp({ toggle }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: "53vh", sm: "55vh", md: "54vh" },
        visibility: toggle ? "visible" : "hidden",
        flexDirection: "column",
        right: { xs: "130px", sm: "120px", md: "140px" },
        minWidth: { xs: "60%", sm: "40%", md: "20%" },
        background: " #F6FAFB",
        border: "1px solid #D3D0D9"
      }}
      className={styles.main}
    >
      <Box className={styles.main__sub}>
        <img src={camera} alt="camera" />
        <p>camera</p>
      </Box>
      <Box className={styles.main__sub}>
        <img src={gallery} alt="gallery" />
        <p>Photo & Video Library</p>
      </Box>
      <Box className={styles.main__sub}>
        <img src={document} alt="document" />
        <p>Document</p>
      </Box>
      <hr />
      <Box className={styles.main__sub}>
        <img src={monitor} alt="monitor" />
        <p>Upload from your computer</p>
      </Box>
      <Box className={styles.main__sub}>
        <img src={cloud} alt="cloud" />
        <p>Add from Google Drive</p>
      </Box>
    </Box>
  );
}

const ChatBox = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = useState(data);
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");

  console.log(value);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setToggle(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setToggle(false);
  };

  const handleChange = val => {
    setInput(val.target.value);
  };

  const handleSend = () => {
    setValue([...value, { message: input, isClient: false, image: clientVa }]);
    setInput("");
  };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  return (
    <div className={styles.chatMain}>
      {value.map(value => (
        <Box
          key={value.message}
          className={
            value.isClient ? styles.chatMain__right : styles.chatMain__left
          }
          sx={{
            borderRadius: value.isClient
              ? "10px 8px 0px 8px"
              : "8px 8px 8px 0px"
          }}
        >
          <img src={value.image} />
          <Box className={styles.chatMain__pad}>{value.message}</Box>
        </Box>
      ))}
      <input
        type="text"
        onChange={handleChange}
        value={input}
        placeholder="Type your message..."
      />
      <span>
        {toggle === true ? (
          <img onClick={handleClose} src={close} alt="close" />
        ) : (
          <img onClick={handleClick} src={vaAdd} alt="add" />
        )}
        {/* <img onClick={() => setToggle(true)}  src={vaAdd} alt="add" /> */}
        <img src={microphone} alt="microphone" />
        <img
          onClick={handleSend}
          style={{ marginLeft: "30px" }}
          src={send}
          alt="send"
        />
      </span>

      <BasicPopover
        anchorEl={anchorEl}
        toggle={toggle}
        handleClick={handleClick}
        handleClose={handleClose}
      />
      {/* <Popover
            sx={{mb:2}}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Box sx={{ width: "140px"}}>
              <img src={camera} alt="camera" />
              <Typography  component='span'>camera</Typography>
            </Box>
        </Popover> */}
    </div>
  );
};

export default ChatBox;
