import React from "react";
import styles from "./button.module.scss";

const Button = ({ title }) => {
  // use a button tag so as to have the benefit of psuedo classes/element functionality (hover, pointer...etc)
  return <div className={styles.button_wrap}>{title}</div>;
};

export default Button;
