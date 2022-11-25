import React from "react";

import ContactForm from "../../components-II/contact/contactForm/ContactForm";
import Map from "../../components-II/contact/contact-map/Map";


import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
// import ContactHero from "../../components-II/contact/contact-hero/ContactHero";
import Hero from "../../components-II/landing-page/hero-section/HeroSection";
import People from "../../assets/people.png";
import Talk from "../../components-II/contact/talk/Talk";

const content = {
  title: `Contact Ticked`,
  subTitleBold: `We are here to offer solutions`,
  image: People,
  text: `Start a conversation with our Virtual Assistant`,
  // reverse: `row-reverse`,
  // style: {
  //   display: `flex`,
  //   flexDirection: `column`,
  //   alignItems: `flex-end`
  // }
};

const Contact = () => {
  return (
    <div>
      <Header />
      <Hero content={content} />
      {/* <ContactHero /> */}
      <ContactForm />
      <Talk />
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
