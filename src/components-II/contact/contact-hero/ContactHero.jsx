import React, { useState } from "react";

import ContactPopup from "../contact-popup/ContactPopup";
import style from "./ContactHero.module.scss";

const ContactHero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const openModal = () => {
    setShowPopup(true);
  };
  return (
    <section className={style.section}>
      <header className={style.header}>
        <section className={style.text}>
          <h1>Contact Ticked</h1>
          <h4>We are here to offer solutions</h4>
          <p>Start a conversation with our Virtual Assistant</p>
          <button onClick={openModal} className={style.modalBtn}>
            Start a conversation
          </button>
        </section>
        <section className={style.img}>
          <img
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669325707/hng/todoAppVirtualAssistant/Group_34485_djmcxu.svg"
            alt="img"
          />
        </section>
        {showPopup && <ContactPopup />}
      </header>
    </section>
  );
};

export default ContactHero;
