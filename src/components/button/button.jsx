import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

const Button = ({ style, title }) => {
  // use a button tag so as to have the benefit of psuedo classes/element functionality (hover, pointer...etc)
  return (
    <Link to="" style={style} className={styles.button_wrap}>
      {title}
    </Link>
  );
};

export default Button;
