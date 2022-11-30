import React from "react";
import styles from "./testimonialCard.module.scss";

const TestimonialCard = ({ comment, name, id }) => {
  return (
    <div className={styles.card}>
       <div className={styles.hstack}>
        <div
          style={
            id % 2 == 0 ? { background: "#714DD9" } : { background: "#f7941f" }
          }
          className={styles.round}
        >
          {name[0]}
        </div>
        <p className={styles.hstacktext}>{name}</p>
      </div>
      <p className={styles.lefttext}>{comment}</p>
    </div>
  );
};

export default TestimonialCard;
