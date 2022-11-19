import React, { useState } from "react";
import People from "../../assets/people.png";
import "./ContactHero.scss";
import ContactPopup from "../contact-popup/ContactPopup";


const ContactHero = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="contact__hero">
        <div className="image">
          <img src={People} alt="contact-img" className="people" />
        </div>
        <div className="content">
          <h1>Contact Ticked</h1>
          <h3>We are here to offer solutions</h3>
          <p>Start a conversation with our Virtual Assistant</p>
          <button onClick={() => setShowPopup(true)}>Start A Conversion</button>
        </div>
      </div>
      {showPopup && <ContactPopup />}
    </>
  );
};

export default ContactHero;