import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

const Button = ({ link, style, title, }) => {
  // use a button tag so as to have the benefit of psuedo classes/element functionality (hover, pointer...etc)
  return (
    <Link
      to={link}
      style={style}
      className={`${styles.button_wrap} hover`}
    >
      {title}
    </Link>
  );
};

Button.defaultProps = {};

export default Button;
