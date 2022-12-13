import React from "react";
import AboutUsSectionTwoLayout from "../../components/about/section-two/AboutUsSectionTwoLayout";
import Download from "../../components/landing-page/download/Download";
//import HowSections from "../../components/NewHowItWorks/HowSections";
// import SectionThree from "../../components/landing-page/section-three/SectionThree";
import Layout from "../../layout/Layout";

const HowItWorks = () => {
  return (
    <Layout>
      {/* <SectionThree /> */}
      <AboutUsSectionTwoLayout title={`How it Works`} />
      <Download />
    </Layout>
  );
};

export default HowItWorks;
