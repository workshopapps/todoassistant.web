import React from "react";
import { CareerHero, CareerMiddle, JobOpening } from "../../components/career";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

const Career = () => {
  return (
    <div>
      <Header />
      <CareerHero />
      <CareerMiddle />
      <JobOpening />
      <Footer />
    </div>
  );
};

export default Career;
