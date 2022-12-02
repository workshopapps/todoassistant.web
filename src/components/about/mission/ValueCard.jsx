import React from "react";
import styles from "./valuecard.module.scss";

const ValueCard = ({ title, desc, children }) => {
  return (
    <section className={[styles.card, `shadow`].join(" ")}>
      <h3>{title}</h3>
      <p>{desc}</p>
      {children}
    </section>
  );
};

export default ValueCard;
