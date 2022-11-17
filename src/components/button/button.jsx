import React from "react";
import styles from "./button.module.scss";

const Button = ({ title }) => {
  return <div className={styles.button_wrap}>{title}</div>;
};

export default Button;
