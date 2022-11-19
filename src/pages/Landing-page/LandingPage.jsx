import React from "react";
import Download from "../../Components/download/Download";
import Gift from "../../Components/gift/Gift";
import HappyClient from "../../Components/landing-page/happy-client/HappyClient";
import Hero from "../../Components/landing-page/hero-section/HeroSection";
import SectionThree from "../../Components/landing-page/section-three/SectionThree";
import SectionTwo from "../../Components/landing-page/section-two/SectionTwo";
import WhyTicked from "../../Components/why-ticked/WhyTicked";
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
