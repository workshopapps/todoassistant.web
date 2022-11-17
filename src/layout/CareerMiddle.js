import React from "react";
import styles from "./Careermiddle.module.scss";
import cv from "../assets/cv.png";
import phone from "../assets/phone.png";
import skill from "../assets/skill.png";
import interview from "../assets/interview.png";

const CareerMiddle = () => {
  return (
    <div className={styles.recruitment}>
      <h2 className={styles.recruitment__h2}>Learn our Recruitment Process</h2>
      <p className={styles.recruitment__p}>
        We always look for talents with great entity because we believe, we can
        train the right skills in the right entity.
      </p>
      <div className={styles.card}>
        <div className={styles.card__info}>
          <img src={cv} alt="CV File" className={styles.card__img} />
          <p className={styles.card__p}>CV Submission</p>
        </div>
        <div className={styles.card__info}>
          <img src={phone} alt="Phone" className={styles.card__img} />
          <p className={styles.card__p}>Phone Screening</p>
        </div>
        <div className={styles.card__info}>
          <img src={skill} alt="Skill" className={styles.card__img} />
          <p className={styles.card__p}>Skill Assessment</p>
        </div>
        <div className={styles.card__info}>
          <img src={interview} alt="Interview" className={styles.card__img} />
          <p className={styles.card__p}>Final Interview</p>
        </div>
      </div>
    </div>
  );
};

export default CareerMiddle;
