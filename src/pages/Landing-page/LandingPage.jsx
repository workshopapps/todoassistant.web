import React from 'react';
import Client from '../../Components/client/Client';
import Download from '../../Components/download/Download';
import Gift from '../../Components/gift/Gift';
import Hero from '../../Components/landing-page/hero-section/HeroSection';
import SectionThree from '../../Components/landing-page/section-three/SectionThree';
import SectionTwo from '../../Components/landing-page/section-two/SectionTwo';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <Gift />
      <Client />
      <Download />
    </>
  );
};

export default LandingPage;
