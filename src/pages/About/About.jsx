import React from "react";
import AboutUsHeader from "../../Components/AboutUs/AboutUsHeader";
import Testimonal from "../../Components/AboutUs/Testimonal";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <AboutUsHeader />
      <Testimonal />
      <Footer />
    </div>
  );
};

export default About;
