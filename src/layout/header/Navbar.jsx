import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components-II/button/ButtonComponent";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import Links from "./Links";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { logout } from "../../contexts/authContext/AuthActions";
import style from "./navbar.module.scss";

const btnStyleOutline = {
  border: "1px solid #714dd9",
  background: "transparent",
  color: "#714dd9"
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // CTA -- CALL TO ACTIION
  const CTA = !user ? (
    <>
      <Button link="/login" style={btnStyleOutline} title="Login" />
      <Button link="/signup" title="Sign up" />
    </>
  ) : (
    // <Button style={logOutBtn} title="Log out" />
    <button className={style.logoutBtn} onClick={handleLogout}>
      Log out
    </button>
  );

  const toggleSidebar = () => {
    setOpen(previousState => {
      return (previousState = !previousState);
    });
  };

  return (
    <nav>
      <div className={style.nav}>
        <div className={style.logo}>
          <Link to="/">
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg`}
              alt="ticked"
            />
          </Link>
        </div>
        {/* links */}
        <Links />
        {/* CTAs */}
        <div className={style.cta}>{CTA}</div>
        <HiOutlineMenuAlt4
          className="menu"
          onClick={toggleSidebar}
          cursor={`pointer`}
          size={`2rem`}
        />
      </div>
      {open ? <NavDrawer /> : null}
    </nav>
  );
}

const NavDrawer = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  // CTA -- CALL TO ACTIION
  const CTA = !user ? (
    <>
      <Button link="/login" style={btnStyleOutline} title="Login" />
      <Button link="/signup" title="Sign up" />
    </>
  ) : (
    // <Button style={logOutBtn} title="Log out" />
    <button className={style.logoutBtn} onClick={handleLogout}>
      Log out
    </button>
  );
  return (
    <nav className={style.sidebar}>
      <div className={style.nav}>
        <div className={style.logo}>
          <Link to="/">
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg`}
              alt="ticked"
            />
          </Link>
        </div>
        {/* links */}
        <Links isMobile />
        {/* CTAs */}
        <div className={style.ctaMobile}>{CTA}</div>
      </div>
    </nav>
  );
};
