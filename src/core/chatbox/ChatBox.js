import React, { useState, useEffect } from "react";
import clientVa from "../../assets/dashboard/clientVa.png";
import styles from "./ChatBox.module.scss";
import { Box, Button } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

//Package
import Pusher from "pusher-js";
import axios from "axios";

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
import documentText from "../../assets/dashboard/document-text.png";
import download from "../../assets/dashboard/download.png";

const data = [
  {
    message:
      "Hi Joseph, I am your virtual assistant. How can I help you today?",
    image: clientVa,
    isClient: false,
    file: false
  },
  {
    message: "I need a reminder by 10am to begin my task.",
    image: clientVa,
    isClient: true,
    file: false
  },
  {
    message: "How would you like to be reminded, via calls or text? ",
    image: clientVa,
    isClient: false,
    file: false
  },
  {
    message: "I’d like to be reminded via a call. ",
    image: clientVa,
    isClient: true,
    file: false
  },
  {
    message: "Noted! A reminder has been set for 10am. ",
    image: clientVa,
    isClient: false,
    file: false
  },
  {
    message: "You’ll receive a call by 10am reminding you of your task. ",
    image: clientVa,
    isClient: false,
    file: false
  },
  {
    message: "Thank you, Ayobami.",
    image: clientVa,
    isClient: true,
    file: false
  }
];

export function BasicPopover({ anchorEl, handleClose, upload }) {
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
        <Box className={styles.new} p={2}>
          <Box sx={{ display: "flex" }}>
            <img src={camera} alt="camera" />
            <Typography ml={1}>camera</Typography>
          </Box>
          <Box sx={{ display: "flex" }} mt={2}>
            <img src={gallery} alt="gallery" />
            <Typography ml={1}>Photo & Video Library</Typography>
          </Box>
          <Box sx={{ display: "flex" }} mt={2}>
            <img src={document} alt="document" />
            <Typography ml={1}>Document</Typography>
          </Box>

          <hr style={{ marginTop: "10px" }} />
          <Box sx={{ display: "flex" }} mt={2}>
            <Typography>Attach</Typography>
          </Box>
          <Box sx={{ display: "flex" }} mt={2}>
            <img src={monitor} alt="monitor" />
            <Box onChange={e => upload(e)}>
              <input
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="raised"
                  sx={{ textTransform: "capitalize", fontWeight: "" }}
                  component="span"
                >
                  Upload from your computer
                </Button>
              </label>
            </Box>
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

const ChatBox = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = useState(data);
  // console.log(value)
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState([]);
  const [image, setImage] = useState([]);

  console.log(image);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setToggle(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setToggle(false);
  };

  const upload = e => {
    handleClose();
    console.warn(e.target.files);
    const files = e.target.files;
    const formData = new FormData();
    formData.append("img", files[0]);
    setImage([...image, files[0].name]);
    // console.log(files[0].name)
    // fetch('https://some-api.com', {
    //   'content-type': 'multipart/form-data',
    // 	method: 'POST',
    // 	body: formData,
    // }).then((resp) => {
    // 	resp.json().then((result) => {
    // 		console.warn(result)
    // 	})
    // })
  };

  const handleChange = val => {
    setInput(val.target.value);
  };

  const handleSend = async () => {
    if (input != "" || image.length > 0) {
      setValue([
        ...value,
        {
          message: input || image,
          isClient: false,
          image: clientVa,
          file: image.length > 0 ? true : false
        }
      ]);
      await axios.post("", value).then(res => console.log(res));
      setInput("");
      setImage([]);
    }
  };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
  const [messages, setMessages] = useState([]);
  console.log(messages);
  const allMessages = [];
  useEffect(() => {
    Pusher.logToConsole = true;

    const pusher = new Pusher("f79030d90753a91854e6", {
      cluster: "eu"
    });
    const channel = pusher.subscribe("mohchat");
    channel.bind("message", function (data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  }, []);

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
          <Box className={styles.chatMain__pad}>
            {value.file ? <img src={documentText} alt="document" /> : null}

            {value.message}
            {value.file ? <img src={download} alt="document" /> : null}
          </Box>
        </Box>
      ))}
      {image.length > 0 && (
        <Box sx={{ position: "relative", bottom: "-70px", zIndex: 20 }}>
          {image.map(item => (
            <Typography
              key={item}
              sx={{
                background: "#E9F3F5",
                padding: "10px 30px"
              }}
              mr={1}
            >
              {item}
            </Typography>
          ))}
        </Box>
      )}

      <textarea
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
        upload={upload}
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
