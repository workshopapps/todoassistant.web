import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import NewsLetter from "./news-letter-form/NewsLetter";

const Footer = () => {
  return (
    <div className={styles.footer_wrap}>
      <img
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668833428/hng/todoAppVirtualAssistant/Frame_34483_yg6eoz.png"
        alt="logo"
      />
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
