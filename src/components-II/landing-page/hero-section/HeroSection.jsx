import React from "react";
import { Link } from "react-router-dom";
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
              Get Your Tasks Completed With The Support of A{" "}
              <span className={style.hero__plan}>Personal Assistant</span>
            </h1>
            <p className={style.hero__subtitle}>
              With Ticked App, get a call from your personal assistant when your
              task is due. You can also assign tasks to your assistant, stay
              focused and be more productive.
            </p>
          </div>
          <div className={style.hero__btn_container}>
            <Link to="/signup">
              <button className={`${style.button_getstarted} hover`}>
                GET STARTED
              </button>
            </Link>
            <button className={`${style.button_login} hover`}>
              DOWNLOAD APP
            </button>
          </div>
        </article>
        <article className={style.hero__img}>
          <img
            className={style.hero__destop_img}
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669287350/hng/todoAppVirtualAssistant/Group_1026_fjmpyq.png"
            alt={style.hero_img}
          />
        </article>
      </section>
    </header>
  );
};

export default Hero;
