import React from "react";
import successicon from "../../../assets/tick-circlesuccess.svg";
import error from "../../../assets/close-circleerror.svg";

import styles from "./Modal.module.scss";

const Modal = ({ success, open, setOpen }) => {
  const handleBackdrop = () => {};
  const handleModal = e => {
    e.stopPropagation();
  };
  return (
    <div
      className={`${styles.modal__backdrop} ${
        open === false ? styles.closeModal : ""
      }`}
      onClick={handleBackdrop}
    >
      <div
        className={`${styles.modal} ${open === false ? styles.closeModal : ""}`}
      >
        <div
          className={`${styles.modal} ${
            open === false ? styles.closeModal : ""
          }`}
        >
          <div className={styles.top__modal}>
            <img
              src={success ? successicon : error}
              alt="closeicon"
              onClick={handleModal}
            />
            <h4>{success ? "Success!" : "Error!"}</h4>
            <p>
              {success
                ? "You have successful made a basic subscription of $0.00"
                : "Ooopss! something went wrong, check your card details again and input the correct details."}{" "}
            </p>
          </div>
          <div className={styles.bottom__modal}>
            <button
              className={styles.button}
              type="submit"
              onClick={() => setOpen(prev => !prev)}
            >
              {success ? "Go Home" : "Try again"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
