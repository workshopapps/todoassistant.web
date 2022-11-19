import React from "react";
import styles from "./CareerRecruitment.module.scss";
import cv from "../../../assets/cv.svg";
import phone from "../../../assets/phone.svg";
import skill from "../../../assets/skill.svg";
import interview from "../../../assets/interview.svg";

const CareerMiddle = () => {
  return (
    <section className={styles.recruitContainer}>
      <div className={styles.recruitment}>
        <h2 className={styles.recruitment__h2}>Learn About Our Recruitment Process</h2>
        <p className={styles.recruitment__p}>
          We always look to hire the best talents because we believe we have the right environment for you to grow.
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
    </section>
  );
};

export default CareerMiddle;
