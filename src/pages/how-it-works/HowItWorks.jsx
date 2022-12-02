import React from "react";
import Download from "../../components/landing-page/download/Download";
import HowSections  from "../../components/NewHowItWorks/HowSections";
import Layout from "../../layout/Layout";

const HowItWorks = () => {
  return (
    <Layout>
      <HowSections />
      <Download />
    </Layout>
  );
};

export default HowItWorks;
