import React from "react";
import { Link } from "react-router-dom";
import styles from "./Modal.module.scss";

function Modal({
  title,
  description,
  start,
  end,
  repeat,
  assistant,
  open,
  onClose
}) {
  if (!open) return null;
  return (
    <div>
      <div className={styles.taskOverlay}>
        <div className={styles.taskModalContainer}>
          <h2 className={styles.taskModalHeader}>Created Task</h2>
          <h4 className={styles.taskTitle}>Title</h4>
          <p>{title}</p>
          <h4 className={styles.taskTitle}>Task Description</h4>
          <p>{description}</p>
          <h4 className={styles.taskTitle}>Start</h4>
          <p>{start}</p>
          <h4 className={styles.taskTitle}>End</h4>
          <p>{end}</p>
          <h4 className={styles.taskTitle}>Repeat</h4>
          <p>{repeat}</p>
          <h4 className={styles.taskTitle}>Assistant</h4>
          <p>{assistant}</p>
          <Link to="/dashboard">
            <button
              style={{ width: `100%` }}
              className={styles.closeBtn}
              onClick={onClose}
            >
              Ok
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
