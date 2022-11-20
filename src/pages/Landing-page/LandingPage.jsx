import React from "react";
import Download from "../../components/landing-page/download/Download";
import Gift from "../../components/landing-page/gift/Gift";

import HappyClient from "../../components/landing-page/happy-client/HappyClient";
import Hero from "../../components/landing-page/hero-section/HeroSection";
import SectionThree from "../../components/landing-page/section-three/SectionThree";
import SectionTwo from "../../components/landing-page/section-two/SectionTwo";
import WhyTicked from "../../components/landing-page/why-ticked/WhyTicked";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <WhyTicked />
      <Gift />
      <HappyClient />
      <Download />
      <Footer />
    </>
  );
};

export default LandingPage;
