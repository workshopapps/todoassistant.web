import React from "react";
import AboutSectionTwo from "../../components-II/about/section-two/AboutSectionTwo";

import Testimonial from "../../components-II/about/testimonial/Testimonal";
import Layout from "../../layout/Layout";

const About = () => {
  return (
    <div>
      <Layout>
        <AboutSectionTwo />
        <Testimonial />
      </Layout>
    </div>
  );
};

export default About;
