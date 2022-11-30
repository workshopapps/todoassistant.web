import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import NewsLetter from "./news-letter-form/NewsLetter";

const Footer = () => {
  return (
    <footer className={styles.footer_wrap}>
      <NavLink to="/">
        <img
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668833428/hng/todoAppVirtualAssistant/Frame_34483_yg6eoz.png"
          alt="logo"
        />
      </NavLink>
      <section className={styles.footer_text}>
        <NewsLetter />
        <p>
          Subscribe to our monthly newsletter and be among the first to be
          notified on an update of the App. Our newsletter is full of important
          announcements and new feature releases, tips and how-tos, and the
          occasional peek into life at TICKED. We will treat your email address
          exactly how we would want ours treated: we will only use it for this
          list, and if you choose to unsubscribe, we will forget we ever had it.
        </p>
      </section>
      <div className={styles.footer_links}>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq">FAQs</Link>
        <Link to="/career">Career</Link>
        <Link to="/policy">Privacy</Link>
      </div>
      <div className={styles.footer_socials}>
        <NavLink to={null}>
          <img src={facebook} alt="logo" />
        </NavLink>
        <NavLink to={null}>
          <img src={twitter} alt="logo" />
        </NavLink>
        <NavLink to={null}>
          <img src={instagram} alt="logo" />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
