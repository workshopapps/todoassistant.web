import React from "react";
import Logo from "../assets/logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header_wrap}>
      <img src={Logo} alt="ticked" />
      <div className={styles.header_right}>
        <div className={styles.header_links}>
          <Link to="">About Us</Link>
          <Link to="">Contact Us</Link>
          <Link to="">FAQs</Link>
        </div>
        <button className={styles.header_button}>DOWNLOAD APP</button>
      </div>
    </div>
  );
};

export default Header;
