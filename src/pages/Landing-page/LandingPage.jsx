import React from "react";
import SectionTwo from "../../components-II/landing-page/section-two/SectionTwo";
import SectionThree from "../../components-II/landing-page/section-three/SectionThree";
import HappyClient from "../../components-II/landing-page/happy-client/HappyClient";
import TodoListSection from "../../components-II/landing-page/todoList/TodoListSection";
import Download from "../../components-II/landing-page/download/Download";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <TodoListSection />
      <SectionTwo />
      <SectionThree />
      <HappyClient />
      <Download />
      <Footer />
    </>
  );
};

export default LandingPage;
