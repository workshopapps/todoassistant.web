import React from "react";
import ContactHero from "../../components/contact-hero/ContactHero";
import ContactForm from "../../components/ContactForm/ContactForm";
import Map from "../../components/Contact-map/Map";
import Talk from "../../components/talk/Talk";
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
