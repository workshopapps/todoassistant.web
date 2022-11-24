import React from "react";
import styles from "./valuecard.module.scss";

const ValueCard = ({ title, desc }) => {
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </section>
  );
};

export default ValueCard;
