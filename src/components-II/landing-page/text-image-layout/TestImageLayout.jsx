import React from "react";
import styles from "./textImageLayout.module.scss";

const TestImageLayout = ({ content }) => {
  return (
    <section className={styles.layout}>
      <div className={styles.imgWrapper}>
        <img src={content.image} alt="img" />
      </div>
      <div className={styles.textWrapper}>
        <h3>{content.title}</h3>
        <p>{content.text}</p>
      </div>
    </section>
  );
};

export default TestImageLayout;
