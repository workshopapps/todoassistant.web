import React from "react";
import AboutHeroSection from "../../components/about/hero/AboutHeroSection";
import AboutSectionTwo from "../../components/about/section-two/AboutSectionTwo";

import Testimonial from "../../components/about/testimonial/Testimonal";
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
