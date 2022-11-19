import React from "react";
import ContactHero from "../../Components/contact-hero/ContactHero";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Map from "../../Components/Contact-map/Map";
import Talk from "../../Components/talk/Talk";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactHero />
      <ContactForm />
      <Talk />
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
