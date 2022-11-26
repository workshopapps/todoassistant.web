import React from "react";
import FocusOnTaskSection from "../../components-II/landing-page/section-two/Task";

import HappyClient from "../../components-II/landing-page/happy-client/HappyClient";
import TodoListSection from "../../components-II/landing-page/todoList/TodoListSection";
import Download from "../../components-II/landing-page/download/Download";

import Layout from "../../layout/Layout";
import VirtualAssistant from "../../components-II/landing-page/virtualAssistant/VirtualAssistant";
import TextImageLayout from "../../components-II/landing-page/text-image-layout/TestImageLayout";
import TextImgFluid from "../../components-II/landing-page/text-img-layout-fluid/TextImgFluid";
import HeroSectionNew from "../../components-II/landing-page/hero-section/HeroSectionNew";
import Feature from "../../components-II/landing-page/feature/Feature";
import WhyTicked from "../../components-II/landing-page/why-ticked/WhyTicked";

const content = {
  title: `Execute Your Tasks With The Support Of An Assistant.`,
  subTitle: `Ticked is a To Do List App built for you to organise, track your scheduled tasks and execute all by receiving a call reminder from your personal assistant when your task is due. You can also delegate tasks to your assistant, stay focused and be more productive.`,
  image:
    "https://res.cloudinary.com/kingsleysolomon/image/upload/v1669287350/hng/todoAppVirtualAssistant/Group_1026_fjmpyq.png"
};

const textImgContent = {
  title: `Get Motivated With Ticked`,
  text: `Let us help you stay on track so that you don’t forget to complete any task before the due date or miss any deadline. If you are still not achieving all your scheduled tasks after setting them up on a regular To Do List, you procrastinate doing some of them or you don’t remember to get them done and you need a very effective To Do List App to enable you execute all your tasks and increase productivity then you need to sign up to TICKED App right now, where you will have a Virtual Assistant assigned to you, who will call you to motivate you and make sure you execute your tasks.
`,
  image: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669358533/hng/todoAppVirtualAssistant/unsplash_315vPGsAFUk_yiklv0.svg`
};

const LandingPage = () => {
  return (
    <>
      <Layout>
        <HeroSectionNew content={content} />
        <TextImageLayout content={textImgContent} />
        <VirtualAssistant />
        <TodoListSection />
        <TextImgFluid />
        <FocusOnTaskSection />
        <Feature />
        <WhyTicked />
        <HappyClient />
        <Download />
      </Layout>
    </>
  );
};

export default LandingPage;
