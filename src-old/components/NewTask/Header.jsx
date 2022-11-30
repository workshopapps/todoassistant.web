import React from "react";
import styles from "../../core/todo/NewTask.module.scss";

function Header({ heading }) {
  return (
    <header className={styles.newTaskHeader}>
      <h2 className={styles.newTaskTitle}>{heading}</h2>
    </header>
  );
}

export default Header;
