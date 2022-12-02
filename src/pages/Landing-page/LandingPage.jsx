import React from "react";
import FocusOnTaskSection from "../../components/landing-page/section-two/Task";
import HappyClient from "../../components/landing-page/happy-client/HappyClient";
import TodoListSection from "../../components/landing-page/todoList/TodoListSection";
import Download from "../../components/landing-page/download/Download";
import Layout from "../../layout/Layout";
import VirtualAssistant from "../../components/landing-page/virtualAssistant/VirtualAssistant";
import HeroSectionNew from "../../components/landing-page/hero-section/HeroSectionNew";
import Feature from "../../components/landing-page/feature/Feature";

const content = {
  title: `Execute Your Tasks`,
  title2: `With Ticked App`,
  subTitle: `Ticked is a To Do List App built for you to organise, track your scheduled tasks and execute all by receiving a call reminder from your personal assistant when your task is due.`,
  image:
    "https://res.cloudinary.com/kingsleysolomon/image/upload/v1669287350/hng/todoAppVirtualAssistant/Group_1026_fjmpyq.png"
};

const LandingPage = () => {
  return (
    <>
      <Layout>
        <HeroSectionNew content={content} />
        <VirtualAssistant />
        <TodoListSection />
        <FocusOnTaskSection />
        <Feature />
        <HappyClient />
        <Download />
      </Layout>
    </>
  );
};

export default LandingPage;
