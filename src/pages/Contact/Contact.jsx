import React from "react";

import ContactForm from "../../components-II/contact/contactForm/ContactForm";
import Map from "../../components-II/contact/contact-map/Map";

import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

// import People from "../../assets/people.png";
import Talk from "../../components-II/contact/talk/Talk";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <Talk />
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
