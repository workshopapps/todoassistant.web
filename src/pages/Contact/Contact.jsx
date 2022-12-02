import React from "react";

//import ContactForm from "../../components/contact/contactForm/ContactForm";

// import People from "../../assets/people.png";
import Layout from "../../layout/Layout";
import ContactPages from "../../components/contact/ContactPages/ContactPages";
import ContactApp from "../../components/contact/contactApp/ContactApp";
const Contact = () => {
  return (
    <Layout>
    <ContactPages/>
     <ContactApp/>
    </Layout>
  );
};

export default Contact;
