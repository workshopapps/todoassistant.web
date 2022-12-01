import React from "react";
import AboutHeroSection from "../../components/about/hero/AboutHeroSection";
import MissionVision from "../../components/about/mission/MissionVision";
import AboutSectionTwo from "../../components/about/section-two/AboutSectionTwo";
import HappyClient from "../../components/about/testimonial/tesimonial-cards/HappyClient";
import Layout from "../../layout/Layout";

const About = () => {
  return (
    <div>
      <Layout>
        <AboutHeroSection />
        <MissionVision />
        <AboutSectionTwo />
        <HappyClient />
      </Layout>
    </div>
  );
};

export default About;
