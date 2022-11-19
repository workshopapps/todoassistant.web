import React from "react";
import style from "./happyClient.module.scss";
import HappyClientCard from "./HappyClientCard";

const HappyClient = () => {
  return (
    <section className={style.container}>
      <div className={style.section__six}>
        <header>
          <h2 className={style.section__six_title}>
            Over <span className={style.section__six_task}>2000</span> Happy
            Clients
          </h2>
          <p className={style.section__six_subtitle}>
            Join our 2000+ users and benefit fully.
          </p>
        </header>
        <section className={style.section__six_grid}>
          <HappyClientCard />
          <HappyClientCard />
          <HappyClientCard />
        </section>
      </div>
    </section>
  );
};

export default HappyClient;
