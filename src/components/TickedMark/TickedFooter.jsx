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
      <br />
      <Link to="/signup">
        <button className={style.gstbtn}>Get started now</button>
      </Link>
      <br />
      <Link to="/">
        <img src={flogo} alt="" />
      </Link>

      <div className={style.TMlinkarray}>
        <Link className={style.tmwtxt} to="/about">
          About Us
        </Link>
        <Link className={style.tmwtxt} to="/contact">
          Contact Us
        </Link>
        <Link className={style.tmwtxt} to="/faq">
          FAQ
        </Link>
        <Link className={style.tmwtxt} to="/career">
          Career
        </Link>
        <Link className={style.tmwtxt} to="policy">
          Privacy
        </Link>
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
