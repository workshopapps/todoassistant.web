import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
//import facebook from "../../assets/facebook.png";
//import twitter from "../../assets/twitter.png";
//import instagram from "../../assets/instagram.png";
import NewsLetter from "./news-letter-form/NewsLetter";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';


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
        <div className={styles.p_container}>
        <p className={styles.p_tag}>
          Subscribe to our monthly newsletter and be among the first to be
          notified on an update of the App. Our newsletter is full of important
          announcements and new feature releases, tips and how-tos, and the
          occasional peek into life at TICKED.
        </p>
        <p className={styles.p_tag}>  
          We will treat your email address
          exactly how we would want ours treated: we will only use it for this
          list, and if you choose to unsubscribe, we will forget we ever had it.
        </p>
        </div>
      </section>
      <div className={styles.footer_links}>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/subscribe">Subscription Plan</Link>
        <Link to="/policy">Privacy</Link>
      </div>
      <div className={styles.footer_socials}>
        <NavLink to={null}>
          <FaFacebookF className={styles.footer_icons}/>
        </NavLink>
        <NavLink to={null}>
          <FaTwitter className={styles.footer_icons}/>
        </NavLink>
        <NavLink to={null}>
          <FaInstagram className={styles.footer_icons}/>
        </NavLink>
      </div>
    
       <div className={styles.footer_copywrite}>
              (c) Ticked App 2022 All Rights Reserved | HNGi9 Product
      </div>
      
    </footer>
  );
};

export default Footer;