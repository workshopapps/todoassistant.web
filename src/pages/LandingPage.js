import React from "react";
import Hero from "../Components/landing-page/hero-section/Hero";
import SectionThree from "../Components/landing-page/section-three/SectionThree";
import SectionTwo from "../Components/landing-page/section-two/SectionTwo";

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
