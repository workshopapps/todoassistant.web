import React from "react";
import visit from "../../assets/global.png";
import call from "../../assets/call-calling.png";
import message from "../../assets/direct-inbox.png";
import location from "../../assets/location.png";
import arrow from "../../assets/Vector.png";

import classes from "./Map.module.scss";
const Map = () => {
  return (
    <div className={classes.container1}>
    <div className={classes.container}>
      <div className={classes.head}>
        <div className={classes.title}>
          <h1>We’re here</h1>
          <p>Our door is always open for a good cup of cofee</p>
        </div>
        <div className={classes.map}>
          <iframe
            style={{
              border: "0",
              width: "600",
              height: "450",
              backgroundColor: "salmon",
              color: "white",
            }}
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8068651.87641677!2d8.674253!3d9.084576!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1668642662794!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className={classes.direction}>
            <div className={classes.location}>
              <img className={classes.location1} src={location} alt="location" />
              <h4>Ticked Head Quarters</h4>
            </div>
            <p>8502 Preston Rd. Inglewood, Maine 98380</p>
            <button>
              <p>Get Directions</p>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div className={classes.tags}>
        <div className={classes.outer}>
          <div className={classes.inner}>
            <h1>Visit Us</h1>
            <img src={visit} alt="global" />
          </div>
          <p>8502 Preston Rd. Inglewood, Maine 98380</p>
        </div>

        <div className={classes.outer}>
          <div className={classes.inner}>
            <h1>Call Us</h1>
            <img src={call} alt="call" />
          </div>
          <p>(219) 555-0114</p>
        </div>

        <div className={classes.outer}>
          <div className={classes.inner}>
            <h1>Message Us</h1>
            <img src={message} alt="message" />
          </div>
          <p>@productive.com to @gmail.com</p>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Map;