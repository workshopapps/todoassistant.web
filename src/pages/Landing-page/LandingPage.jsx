import React from 'react';
import Client from '../../components/client/Client';
import Download from '../../components/download/Download';
import Gift from '../../components/gift/Gift';
import Hero from '../../components/landing-page/hero-section/HeroSection';
import SectionThree from '../../components/landing-page/section-three/SectionThree';
import SectionTwo from '../../components/landing-page/section-two/SectionTwo';

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
