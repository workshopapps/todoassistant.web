import React from "react";
import FocusOnTaskSection from "../../components-II/landing-page/section-two/Task";
import SectionThree from "../../components-II/landing-page/section-three/SectionThree";
import HappyClient from "../../components-II/landing-page/happy-client/HappyClient";
import TodoListSection from "../../components-II/landing-page/todoList/TodoListSection";
import Download from "../../components-II/landing-page/download/Download";
import HeroSection from "../../components-II/landing-page/hero-section/HeroSection";
import Layout from "../../layout/Layout";
import VirtualAssistant from "../../components-II/landing-page/virtualAssistant/VirtualAssistant";

const content = {
  title: `Execute Your Tasks With The Support Of An Assistant.`,
  subTitle: `Ticked is a To Do List App built for you to organise, track your scheduled tasks and execute all by receiving a call reminder from your personal assistant when your task is due. You can also delegate tasks to your assistant, stay focused and be more productive.`,
  image:
    "https://res.cloudinary.com/kingsleysolomon/image/upload/v1669287350/hng/todoAppVirtualAssistant/Group_1026_fjmpyq.png"
};

const LandingPage = () => {
  return (
    <>
      <Layout>
        <HeroSection content={content} />
        <VirtualAssistant />
        <TodoListSection />
        <FocusOnTaskSection />
        <SectionThree />
        <HappyClient />
        <Download />
      </Layout>
    </>
  );
};

export default LandingPage;
