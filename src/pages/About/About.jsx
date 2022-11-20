import React from "react";
import AboutUsHeader from "../../components/AboutUs/AboutUsHeader";
import Testimonal from "../../components/AboutUs/Testimonal";
import Layout from '../../layout/Layout'

const About = () => {
  return (
    <div>
      <Layout>
        <AboutUsHeader />
        <Testimonal />
      </Layout>
    </div>
  );
};

export default About;
