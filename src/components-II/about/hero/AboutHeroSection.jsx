import React from "react";
import Button from "../../button/ButtonComponent";
import style from "./aboutHero.module.scss";

const AboutHeroSection = () => {
  return (
    <header className={style.header}>
      <section className={style.text}>
        <h1>Ticked</h1>
        <p>A platform with great experienece for everyone</p>
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
