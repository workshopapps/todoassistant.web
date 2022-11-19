import React from "react";
import Client from "../../Components/client/Client";
import Download from "../../Components/download/Download";
import Gift from "../../Components/gift/Gift";
import HappyClient from "../../Components/landing-page/happy-client/HappyClient";
import Hero from "../../Components/landing-page/hero-section/HeroSection";
import SectionThree from "../../Components/landing-page/section-three/SectionThree";
import SectionTwo from "../../Components/landing-page/section-two/SectionTwo";
import WhyTicked from "../../Components/why-ticked/WhyTicked";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <SectionTwo />
      <SectionThree />
      <WhyTicked />
      <Gift />
      <HappyClient />
      <Download />
    </>
  );
};

export default LandingPage;
