import React from "react";
import { CareerHero, CareerMiddle, JobOpening } from "../../components/career";
import Layout from "../../layout/Layout";

const Career = () => {
  return (
    <Layout>
      <CareerHero />
      <CareerMiddle />
      <JobOpening />
    </Layout>
  );
};

export default Career;
