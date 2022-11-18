import React from 'react';
import ContactHero from '../../components/contact-hero/ContactHero';
import Map from '../../components/Contact-map/Map';
import Talk from '../../components/talk/Talk';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <Talk />
      <Map />
    </div>
  );
};

export default Contact;
