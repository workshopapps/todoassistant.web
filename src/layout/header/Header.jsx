import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Button from "../../Components/button/Button";
// import hamburger from "../../assets/hamburger.png";

import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [modal, setModal] = useState(0);
  return (
    <div className={styles.header_wrap}>
      <Link to="/">
        <img src={Logo} alt="ticked" />
      </Link>

      <div className={styles.header_right}>
        <div className={styles.header_links}>
          <Link
            className={
              pathname.includes("/about") ? styles.header_links__border : ""
            }
            to="/about"
          >
            About Us
          </Link>
          <Link
            className={
              pathname.includes("/contact") ? styles.header_links__border : ""
            }
            to="/contact"
          >
            Contact Us
          </Link>
          <Link
            className={
              pathname.includes("/faq") ? styles.header_links__border : ""
            }
            to="/faq"
          >
            FAQs
          </Link>
        </div>
        <div className={styles.header_button}>
          <Button title="DOWNLOAD APP" />
        </div>
      </div>

      <FiMenu
        onClick={() => {
          setModal(!modal);
        }}
        className={styles.header_hamburger}
      />
      {modal ? (
        <div
          onClick={() => {
            setModal(!modal);
          }}
          className={styles.header_modalbackground}
        ></div>
      ) : (
        ""
      )}
      {modal ? (
        <div className={styles.header_sidebar}>
          <div
            onClick={() => {
              setModal(!modal);
            }}
            className={styles.header_sidebarClose}
          >
            <GrClose />
          </div>
          <div className={styles.header_sidebarLinks}>
            <Link
              className={
                pathname.includes("/about") ? styles.header_links__border : ""
              }
              to="/about"
            >
              About Us
            </Link>
            <Link
              className={
                pathname.includes("/contact") ? styles.header_links__border : ""
              }
              to="/contact"
            >
              Contact Us
            </Link>
            <Link
              className={
                pathname.includes("/faq") ? styles.header_links__border : ""
              }
              to="/faq"
            >
              FAQs
            </Link>
          </div>

          <div className={styles.header_sidebarButton}>
            {" "}
            <Button title="DOWNLOAD APP" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
