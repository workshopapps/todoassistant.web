import React from "react";
import AboutSectionTwo from "../../components-II/about/section-two/AboutSectionTwo";

import Testimonial from "../../components-II/about/testimonial/Testimonal";
import Hero from "../../components-II/landing-page/hero-section/HeroSection";
import Layout from "../../layout/Layout";

const content = {
  title: `Ticked`,
  subTitle: `A platform with great experienece for everyone`,
  image: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669325707/hng/todoAppVirtualAssistant/Group_34485_djmcxu.svg`
};

const About = () => {
  return (
    <div>
      <Layout>
        <Hero content={content} />
        <AboutSectionTwo />
        <Testimonial />
      </Layout>
    </div>
  );
};

export default About;
