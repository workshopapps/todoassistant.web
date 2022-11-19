import React from "react";
import Hero from "../components/landing-page/hero-section/HeroSection";
import SectionThree from "../components/landing-page/section-three/SectionThree";
import SectionTwo from "../components/landing-page/section-two/SectionTwo";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <SectionTwo />
      <SectionThree />
    </main>
  );
};

export default LandingPage;
