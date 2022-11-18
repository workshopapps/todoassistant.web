import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className={styles.footer_wrap}>
      <img src={Logo} alt="logo" />
      <p className={styles.footer_text}>
        Ticked offers categories of to-do list, pocket-friendly plans, a daily
        reminder that encourages you to manage your day and lots more!!!
      </p>
      <div className={styles.footer_links}>
        <Link to="">About Us</Link>
        <Link to="">Contact Us</Link>
        <Link to="">FAQs</Link>
        <Link to="">Career</Link>
        <Link to="">Privacy</Link>
      </div>
      <div className={styles.footer_socials}>
        <img src={facebook} alt="logo" />
        <img src={twitter} alt="logo" />
        <img src={instagram} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
