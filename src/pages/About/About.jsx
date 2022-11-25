import React from "react";
import AboutHeroSection from "../../components-II/about/hero/AboutHeroSection";
import AboutSectionTwo from "../../components-II/about/section-two/AboutSectionTwo";

import Testimonial from "../../components-II/about/testimonial/Testimonal";
import Layout from "../../layout/Layout";

const About = () => {
  return (
    <div>
      <Layout>
        <AboutHeroSection />
        <AboutSectionTwo />
        <Testimonial />
      </Layout>
    </div>
  );
};

export default About;
