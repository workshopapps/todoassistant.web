import React from "react";
import style from "./sectionThreeList.module.scss";

const SectionThreeList = ({ icon, title, desc }) => {
  return (
    <section className={style.section__three_list}>
      <div className={style.section__three_list_icon}>
        <img src={icon} alt="icon" />
      </div>
      <div className={style.section__three_list_text}>
        <h5 className={style.section__three_list_title}>{title}</h5>
        <p className={style.section__three_list_desc}>{desc}</p>
      </div>
    </section>
  );
};

export default SectionThreeList;
