import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";

// import hamburger from "../../assets/hamburger.png";

import { GrClose } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { logout } from "../../contexts/authContext/AuthActions";

const btnStyleOutline = {
  border: "1px solid #714dd9",
  background: "transparent",
  color: "#714dd9",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "48px",
  borderRadius: "8px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "160%",
  textDecoration: "none",
  width: "107px",
  textTransform: "uppercase",
  cursor: "pointer"
};

const logOutBtn = {
  border: "1px solid red",
  background: "transparent",
  color: "red",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "48px",
  borderRadius: "7px",
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "160%",
  textDecoration: "none",
  width: "107px",
  textTransform: "uppercase",
  cursor: "pointer"
};

const Header = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const location = useLocation();
  const pathname = location.pathname;
  const [modal, setModal] = useState(0);

  // CTA -- CALL TO ACTIION
  const CTA = !user ? (
    <>
      <Link to="/login">
        {" "}
        <button style={btnStyleOutline}>Login</button>{" "}
      </Link>
      <Link to="/signup">
        {" "}
        <button style={btnStyleOutline}>Signup</button>{" "}
      </Link>
    </>
  ) : (
    <button style={logOutBtn} onClick={handleLogout}>
      Log out
    </button>
  );

  return (
    <nav>
      <section className={styles.header_wrap}>
        <Link to="/">
          <img src={Logo} alt="ticked" />
        </Link>

        <div className={styles.header_links}>
          <Link
            className={
              pathname.includes("/how-it-works")
                ? styles.header_links__border
                : ""
            }
            to="/how-it-works"
          >
            How it works
          </Link>
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

        <div className={styles.header_right}>
          <span className={styles.header_button}>{CTA}</span>
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
                  pathname.includes("/how-it-works")
                    ? styles.header_links__border
                    : ""
                }
                to="/how-it-works"
              >
                How it works
              </Link>
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
                  pathname.includes("/contact")
                    ? styles.header_links__border
                    : ""
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

            <div className={styles.header_sidebarButton}>{CTA}</div>
          </div>
        ) : (
          ""
        )}
      </section>
    </nav>
  );
};

export default Header;
