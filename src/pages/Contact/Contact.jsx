import React from 'react';
import ContactHero from '../../Components/contact-hero/ContactHero';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Map from '../../Components/Contact-map/Map';
import Talk from '../../Components/talk/Talk';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm/>
      <Talk />
      <Map />
    </div>
  );
};

export default Contact;
