import React from "react";
import AboutUsHero from "./AboutUsSectionTwoLayout";
import styles from "./aboutSectiontwo.module.scss";

const AboutSectionTwo = () => {
  return (
    <section className={styles.about}>
      <h2 style = {{paddingBottom: "5px"}}>Why Ticked?</h2>
      <AboutUsHero />
    </section>
  );
};

export default AboutSectionTwo;
