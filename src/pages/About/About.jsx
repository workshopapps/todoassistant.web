import React from "react";
import AboutHeroSection from "../../components/about/hero/AboutHeroSection";
import MissionVision from "../../components/about/mission/MissionVision";
import HappyClient from "../../components/about/testimonial/tesimonial-cards/HappyClient";
import Layout from "../../layout/Layout";
import Download from "../../components/landing-page/download/Download";
import AboutUsSectionTwoLayout from "../../components/about/section-two/AboutUsSectionTwoLayout";

const About = () => {
  return (
    <div>
      <Layout>
        <AboutHeroSection />
        <MissionVision />
        <AboutUsSectionTwoLayout title={`Why Ticked`} />
        <HappyClient />
        <Download />
      </Layout>
    </div>
  );
};

export default About;
