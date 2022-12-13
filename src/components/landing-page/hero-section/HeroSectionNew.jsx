import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Animate } from "../../../hooks/animation/AnimateIn";
import styles from "./heroStyle.module.scss";

const HeroSectionNew = ({ content }) => {
  return (
    <div className={styles.hero}>
      <section className={styles.container}>
        <div className={styles.header}>
          <h3>{content.title}</h3>
          <h3 style={{ color: `#FDA758` }}>{content.title2}</h3>
          <Typography fontSize={{xs:`16px`, md:`20px`}}>{content.subTitle}</Typography>
        </div>
        <div className={styles.hero__btn_container}>
          <Link to="/signup">
            <button className={`${styles.button_getstarted} hover`}>
              GET STARTED
            </button>
          </Link>
          <button className={`${styles.button_login} hover`}>
            DOWNLOAD APP
          </button>
        </div>
      </section>
      <div className={styles.container}>
        <div>
          <Animate.FadeIn>
            <img
              className={styles.img}
              src={content.image}
              alt="section-three-img"
            />
          </Animate.FadeIn>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionNew;
