import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./ModalSuccessReset.module.scss";
import GreenTick from "../../../assets/images/green-tick-circle.jpg";

function ModalSuccessReset({ openState, onClose }) {
  let navigate = useNavigate();

  if (!openState) {
    return null;
  }

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <div onClick={onClose} className={style.modal_overlay}>
      {/* Creating modal component */}
      <div
        onClick={e => {
          e.stopPropagation();
        }}
        className={style.modal}
      >
        {/* Creating the body of the modal component  */}
        <div className={style.modal_body}>
          <img src={GreenTick} alt="" />
          <div className={style.modal_content}>
            <h1>Success!</h1>
            <p>Your password has been changed.</p>
          </div>
          <button onClick={navigateLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default ModalSuccessReset;
