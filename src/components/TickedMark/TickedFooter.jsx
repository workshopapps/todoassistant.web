import React from "react";
import style from "./tickedfooter.module.scss";
import flogo from "./img/TMfootlogo.svg";
import ig from "./img/instagram.svg";
import fb from "./img/facebook.svg";
import twt from "./img/twitter.svg";
import { Link } from "react-router-dom";

function TickedFooter() {
  return (
    <div className={style.TMfooter}>
      <h1 className={style.fthtxt}>
        We are here to help <br />
        you execute with ease
      </h1>
      <Link to="/signup">
        <button className={style.gstbtn}>Get started now</button>
      </Link>
      <Link to="/">
        <img src={flogo} alt="" />
      </Link>

      <div className={style.TMlinkarray}>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/career">Career</Link>
        <Link to="policy">Privacy</Link>
      </div>

      <div className={style.TMsocial}>
        <a href="/">
          <img src={fb} alt="" />
        </a>
        <a href="/">
          <img src={twt} alt="" />
        </a>
        <a href="/">
          <img src={ig} alt="" />
        </a>
      </div>
    </div>
  );
}

export default TickedFooter;
