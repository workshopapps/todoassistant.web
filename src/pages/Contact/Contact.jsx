import React from "react";

import ContactForm from "../../components/contact/contactForm/ContactForm";
import Map from "../../components/contact/contact-map/Map";

// import People from "../../assets/people.png";
import Talk from "../../components/contact/talk/Talk";
import Layout from "../../layout/Layout";
import ContactHero from "../../components/contact/contact-hero/ContactHero";

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <Talk />
      <Map />
    </Layout>
  );
};

export default Contact;
