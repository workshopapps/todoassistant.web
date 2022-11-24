import React from "react";
import SectionTwo from "../../components-II/landing-page/section-two/SectionTwo";
import SectionThree from "../../components-II/landing-page/section-three/SectionThree";
import HappyClient from "../../components-II/landing-page/happy-client/HappyClient";
import TodoListSection from "../../components-II/landing-page/todoList/TodoListSection";
import Download from "../../components-II/landing-page/download/Download";
import HeroSection from "../../components-II/landing-page/hero-section/HeroSection";
import Layout from "../../layout/Layout";
import VirtualAssistant from "../../components-II/landing-page/virtualAssistant/VirtualAssistant";

const LandingPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <VirtualAssistant />
        <TodoListSection />
        <SectionTwo />
        <SectionThree />
        <HappyClient />
        <Download />
      </Layout>
    </>
  );
};

export default LandingPage;
