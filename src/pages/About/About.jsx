import React from "react";
import AboutUsHero from "../../components/AboutUs/hero/AboutUsHero";
import Testimonal from "../../components/AboutUs/Testimonal";
import Layout from "../../layout/Layout";

const About = () => {
  return (
    <div>
      <Layout>
        <AboutUsHero />
        <Testimonal />
      </Layout>
    </div>
  );
};

export default About;
