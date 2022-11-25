import React from "react";

import ContactForm from "../../components-II/contact/contactForm/ContactForm";
import Map from "../../components-II/contact/contact-map/Map";

// import People from "../../assets/people.png";
import Talk from "../../components-II/contact/talk/Talk";
import Layout from "../../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <ContactForm />
      <Talk />
      <Map />
    </Layout>
  );
};

export default Contact;
