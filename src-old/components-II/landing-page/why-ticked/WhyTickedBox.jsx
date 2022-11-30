import React from "react";
import style from "./whytickedbox.module.scss";

const WhyTickedBox = ({ title, desc, bgColor, width }) => {
  return (
    <div
      style={{ background: bgColor, width }}
      className={[style.whytickedbox, `shadow`].join(" ")}
    >
      <h4 className={style.whytickedbox__header}>{title}</h4>
      <p className={style.whytickedbox__desc}>{desc}</p>
    </div>
  );
};

export default WhyTickedBox;
