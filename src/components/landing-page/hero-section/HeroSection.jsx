import React from "react";
import animation from "../../../hooks/animation/animate.module.scss";
import style from "./hero.module.scss";

const Hero = () => {
  return (
    <header className={style.hero}>
      <div className={style.hero__bg_img}></div>
      <section className={style.container}>
        <img
          className={`${style.hero__icon1} ${animation.sprite_1}`}
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-3_vettso.svg"
          alt="icon"
        />
        <img
          className={`${style.hero__icon2} ${animation.sprite_2}`}
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-2_zwxiad.svg"
          alt="icon"
        />

        <img
          className={`${style.hero__icon3} ${animation.sprite_3}`}
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-1_b7dn1l.svg"
          alt="icon"
        />

        <img
          className={`${style.hero__icon4} ${animation.sprite_4}`}
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector_rd7eki.svg"
          alt="icon"
        />
        <article className={style.hero__text_section}>
          <div>
            <h1 className={style.hero__title}>
              Every Productive Day Begins With A{" "}
              <span className={style.hero__plan}>plan</span>
            </h1>
            <p className={style.hero__subtitle}>
              TICKED is A To Do List App that enables you to plan, schedule your
              tasks and execute with the assistance of a Virtual Assistant like
              a PRO
            </p>
          </div>
          <div className={style.hero__btn_container}>
            <button className={`${style.button_getstarted} hover`}>
              GET STARTED
            </button>
            <button className={`${style.button_login} hover`}>
              DOWNLOAD APP
            </button>
          </div>
        </article>
        <article className={style.hero__img}>
          <img
            className={style.hero__mobile_img}
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644549/hng/todoAppVirtualAssistant/Home_w8mzky.svg"
            alt={style.hero_img}
          />
          <img
            className={style.hero__destop_img}
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644187/hng/todoAppVirtualAssistant/Web_app_home_lightmode_qtfhr3.svg"
            alt={style.hero_img}
          />
        </article>
      </section>
    </header>
  );
};

export default Hero;
