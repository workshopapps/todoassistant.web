import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navbar.module.scss";

const Links = ({ isMobile }) => {
  return (
    <div
      className={[style.links, isMobile ? null : style.navbarLink].join(" ")}
    >
      <NavLink
        to={`/how-it-works`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        How it works
      </NavLink>
      <NavLink
        to={`/about`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        About Us
      </NavLink>
      <NavLink
        to={`/contact`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        Contact Us
      </NavLink>
      <NavLink
        to={`/subscribe`}
        className={({ isActive }) => (isActive ? style.active : style.inactive)}
      >
        Subscription Plan
      </NavLink>
    </div>
  );
};

export default Links;
