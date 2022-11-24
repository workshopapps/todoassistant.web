import React from "react";
import styles from "./testimonialCard.module.scss";

const TestimonialCard = ({ comment, name }) => {
  return (
    <div className={styles.card}>
      <p className={styles.lefttext}>{comment}</p>
      <div className={styles.hstack}>
        <div style={{ background: "#714DD9" }} className={styles.round}>
          {name[0]}
        </div>
        <p className={styles.hstacktext}>{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
