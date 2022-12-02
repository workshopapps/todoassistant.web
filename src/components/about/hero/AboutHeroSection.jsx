import React from "react";
import Button from "../../button/ButtonComponent";
import style from "./aboutHero.module.scss";

const AboutHeroSection = () => {
  return (
    <header className={style.header}>
      <section className={style.text}>
        <h1>About <span className={style.yellowText}>Ticked</span></h1>
        <p>
        We have built this To Do List App for you to get your tasks delegated to a Virtual Assistant who will take the stress off your shoulders, get more tasks done for you while you stay focused.
        </p>
        <Button
          link={`/login`}
          title={`Get Started`}
          style={{ width: `207px` }}
        />
      </section>
      <section className={style.img}>
        <img
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669325707/hng/todoAppVirtualAssistant/Group_34485_djmcxu.svg"
          alt="img"
        />
      </section>
    </header>
  );
};

export default AboutHeroSection;
