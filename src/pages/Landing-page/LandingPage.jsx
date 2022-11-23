import React from "react";
import Download from "../../components/landing-page/download/Download";
import Gift from "../../components/landing-page/gift/Gift";

import HappyClient from "../../components/landing-page/happy-client/HappyClient";
import Hero from "../../components/landing-page/hero-section/HeroSection";
import Occupation from "../../components/landing-page/occupation/Occupation";
import SectionThree from "../../components/landing-page/section-three/SectionThree";
import SectionTwo from "../../components/landing-page/section-two/SectionTwo";
import TodoListSection from "../../components/landing-page/todoList/TodoListSection";
import VirtualAssistant from "../../components/landing-page/virtualAssistant/VirtualAssistant";
import WhyTicked from "../../components/landing-page/why-ticked/WhyTicked";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Occupation />
      <VirtualAssistant />
      <TodoListSection />
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
