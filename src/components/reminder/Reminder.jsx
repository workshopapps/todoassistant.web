import React from "react";
import classes from "./Reminder.module.scss";
import { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
// import Button from '@mui/material/Button';
import Modal from "@mui/material/Modal";

const Reminder = ({ headerType, header, list, showSave, optionType }) => {
  const [modal, setModal] = useState(false);
  const color = "#714dd9";
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 400,
    bgcolor: "white",
    borderRadius: "0.5rem",
    border: "none",
    outline: "none",
    // boxShadow: 4,
    p: 4
  };

  const handleClose = () => setModal(false);
  const headerClass = `${classes.dBlock} ${classes.fontWeightBold}`;

  const remindersListRender = list.map(prop => (
    <div key={prop}>
      {optionType == "check" ? (
        <Checkbox {...prop} color="secondary" />
      ) : (
        <Radio {...prop} color="secondary" />
      )}
      {prop}
    </div>
  ));
  return (
    <div className={classes.reminder}>
      <div>
        <div className={headerClass}>
          <h3>{header}</h3>
        </div>
        <div className={classes.dBlock}>Multiple</div>
      </div>
      <div>
        <div
          className={classes.icon}
          onClick={() => {
            setModal(modal => !modal);
          }}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `rotateZ(${modal ? 360 : 180}deg)`,
              transition: "all 0.2s"
            }}
          >
            <path
              d="M20.0334 8.94995L13.5134 15.47C12.7434 16.24 11.4834 16.24 10.7134 15.47L4.19336 8.94995"
              stroke={color}
            />
          </svg>
        </div>
      </div>
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {headerType == "big" ? <h3>{header}</h3> : null}
            {headerType == "small" ? (
              <p className={classes.fontWeightBold}>{header}</p>
            ) : null}
          </div>
          <div>{remindersListRender}</div>
          {showSave ? (
            <div>
              <button id="btn__save" className={classes.save}>
                {" "}
                Save
              </button>
            </div>
          ) : null}
          <button
            id="btn__cancel"
            onClick={() => setModal(false)}
            className={classes.cancel}
          >
            Cancel
          </button>
        </Box>
      </Modal>
      {/* <Modal
    open={modal}
    onclose={()=> setModal(false)}
    >
        <Box className={classes.modalStyle}>
    <div className={classes.reminderModalContainer}>
        <div>
          {headerType == 'h1'?
   <h1>{header}</h1>:null}
     {headerType == 'h2'?
   <h2>{header}</h2>:null}
    </div>
    <div>
        {list?.map(prop => {
            <div>
                <div>
                    {optionType == 'check' ?
                    <input
                    className={classes.check}
                    type="checkbox"
                    name="enable-email-not"
                  />:<input type="radio" className={classes.radio}/>}
                  {prop}
                </div>
            </div>
        })}
    </div>
  {showSave ? <div>
    <button id="btn__save" className={classes.save} > Save</button>
    </div>:null}
    <div>
    <button id="btn__cancel" className={classes.cancel} > Cancel</button>
    </div>
    </div>
        </Box>

    </Modal> */}
    </div>
  );
};

export default Reminder;

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// export default function Reminder() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
