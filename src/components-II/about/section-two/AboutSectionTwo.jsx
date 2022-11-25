import React from "react";
import AboutUsHero from "../hero/AboutUsHero";
import styles from "./aboutSectiontwo.module.scss";

const AboutSectionTwo = () => {
  return (
    <section className={styles.about}>
      <h2>We are here because of you</h2>
      <AboutUsHero />
    </section>
  );
};

export default AboutSectionTwo;
