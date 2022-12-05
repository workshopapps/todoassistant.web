import React, { useState } from "react";
import style from "./newsLetter.module.scss";
import axios from "axios"

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 <Box sx={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center"}}>
    <svg style={{height: "60px"}} aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><circle  stroke="currentColor" cx="27" cy="27" fill="none" r="25"></circle><path  stroke="currentColor" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"></path></svg>
    <Typography>Thanks, your subscription has been confirmed. You've been added to our list and will hear from us soon.</Typography>
  </Box>

export function AlertDialogSlide({open,handleClose, error }) {

  let content;
  if (error !== "error") {
    if( error === "new") {
      content = <Box sx={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center"}}>
      <svg style={{height: "60px"}} aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><circle  stroke="currentColor" cx="27" cy="27" fill="none" r="25"></circle><path  stroke="currentColor" d="M14.1 27.2l7.1 7.2 16.7-16.8" fill="none"></path></svg>
      <Typography>Thanks, your subscription has been confirmed. You've been added to our list and will hear from us soon.</Typography>
    </Box>
    }else if (error === "exist") {
      content = <Typography>Email already Exist</Typography>
    }
  
  }else {
    content = <Typography>En error occured, please try again letter</Typography>

  }
 

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogContent>
          {content}
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const NewsLetter = () => {
  const [ email, setEmail ] = useState("")
  const [ error, setError ] = useState("")

  console.log(error)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("")
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// console.log("changes")
  const handleNewsLetter = async () => {
    if(email !== "" && validateEmail(email)) {
      try {
        const response = await axios.post(
          "/subscribe", 
          {"email":  `"${email}"`},
          )
          if (response.status == 200 ) {
            handleClickOpen()
            setError("new")
          }if (response.status == 400 ) {
            setError("exist")
          }
       } catch (error) {

        console.error(error)
        if (error.response.status == 400 ) {
          setError("exist")
        handleClickOpen()

        }else if (error.response.status == 500) {

          setError("error")
        handleClickOpen()

        }
        // handleClickOpen()
       }
    }
  }
  return (
    <>
    <AlertDialogSlide handleClose={handleClose} open={open} error={error} />
    <section className={style.news__letter}>
      <h3 className={style.header}>Newsletter</h3>
      <form className={style.form}>
        <label className={style.label} htmlFor="email">
          Email Address
        </label>
        <div className={style.input_container}>
           <input className={`${style.input}`} style={{outline: "none"}} autoComplete onChange={(e) => setEmail(e.target.value)} type="email" value={email} placeholder="Enter email" />
           <input onClick={handleNewsLetter} className={style.subscribe_button} type="button" value="Subscribe"/>
        </div>
      </form>
    </section>
    </>
  );
};

export default NewsLetter;