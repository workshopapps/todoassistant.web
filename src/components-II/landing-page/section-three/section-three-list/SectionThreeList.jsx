import React from "react";
import { Animate } from "../../../../hooks/animation/AnimateIn";
import style from "./sectionThreeList.module.scss";

const SectionThreeList = ({ icon, title, desc, hover, name }) => {
  return (
    <section
      data-name={name}
      onMouseEnter={hover}
      className={style.section__three_list}
    >
      <div className={style.section__three_list_icon}>
        <img src={icon} alt="icon" />
      </div>
      <div className={style.section__three_list_text}>
        <h5 className={style.section__three_list_title}>{title}</h5>

        <Animate.FadeIn>
          <p className={style.section__three_list_desc}>{desc}</p>
        </Animate.FadeIn>
      </div>
    </section>
  );
};

export default SectionThreeList;
