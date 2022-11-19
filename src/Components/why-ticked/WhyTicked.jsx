import React from "react";
import style from "./whyticked.module.scss";
import WhyTickedBox from "./WhyTickedBox";

const WhyTicked = () => {
  return (
    <section className={style.container}>
      <div className={style.whyticked}>
        <header>
          <h2 className={style.section__four_title}>
            Why
            <span className={style.section__four_task}>Ticked?</span>
          </h2>
        </header>
        <section className={style.section__four_grid}>
          <WhyTickedBox />
          <WhyTickedBox />
          <WhyTickedBox />
          <WhyTickedBox />
        </section>
      </div>
    </section>
  );
};

export default WhyTicked;
