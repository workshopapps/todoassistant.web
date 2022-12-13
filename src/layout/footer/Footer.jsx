import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";
//import facebook from "../../assets/facebook.png";
//import twitter from "../../assets/twitter.png";
//import instagram from "../../assets/instagram.png";
import NewsLetter from "./news-letter-form/NewsLetter";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className={styles.footer_wrap}>
      <NavLink to="/">
        <img
          className="grow"
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668833428/hng/todoAppVirtualAssistant/Frame_34483_yg6eoz.png"
          alt="logo"
        />
      </NavLink>
      <Box maxWidth={`665px`} mt={`4rem`} textAlign={`center`}>
        <NewsLetter />
        <Box px={2}>
          <Typography className={styles.p_tag}>
            Subscribe to our monthly newsletter and be among the first to be
            notified on an update of the App. Our newsletter is full of
            important announcements and new feature releases, tips and how-tos,
            and the occasional peek into life at TICKED.
          </Typography>
          <Typography className={styles.p_tag}>
            We will treat your email address exactly how we would want ours
            treated: we will only use it for this list, and if you choose to
            unsubscribe, we will forget we ever had it.
          </Typography>
        </Box>
        <Box className={styles.footer_links}>
          <Link className="grow" to="/about">
            About Us
          </Link>
          <Link className="grow" to="/contact">
            Contact Us
          </Link>
          <Link className="grow" to="/subscribe">
            Subscription Plan
          </Link>
          <Link className="grow" to="/policy">
            Privacy
          </Link>
        </Box>
      </Box>
      <Stack gap={6} mt={`3rem`} direction={`row`}>
        <NavLink to={null}>
          <FaFacebookF
            fontSize={`1.5rem`}
            className={[styles.footer_icons, `grow`].join(" ")}
          />
        </NavLink>
        <NavLink to={null}>
          <FaTwitter
            fontSize={`1.5rem`}
            className={[styles.footer_icons, `grow`].join(" ")}
          />
        </NavLink>
        <NavLink to={null}>
          <FaInstagram
            fontSize={`1.5rem`}
            className={[styles.footer_icons, `grow`].join(" ")}
          />
        </NavLink>
      </Stack>

      <Typography padding={`1rem`} className={styles.footer_copywrite}>
        &copy; Ticked App {new Date().getFullYear()} All Rights Reserved | HNGi9
        Product
      </Typography>
    </footer>
  );
};

export default Footer;
