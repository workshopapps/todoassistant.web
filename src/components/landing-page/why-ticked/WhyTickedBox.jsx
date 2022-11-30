import React from "react";
import style from "./whytickedbox.module.scss";

const WhyTickedBox = ({ title, desc, bgColor, width }) => {
  return (
    <div
      style={{ background: bgColor, maxWidth: width }}
      className={[style.whytickedbox, `shadow`].join(" ")}
    >
      <h4 className={style.whytickedbox__header}>{title}</h4>
      <p className={style.whytickedbox__desc}>{desc}</p>
    </div>
  );
};

export default WhyTickedBox;

export const FeatureBox = ({ title, desc, bgColor, width }) => {
  return (
    <div
      style={{ background: bgColor, maxWidth: width }}
      className={[style.featureBox, `shadow`].join(" ")}
    >
      <img
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669800032/hng/todoAppVirtualAssistant/tick-circle_c69oqf.svg"
        alt="checked-img"
      />
      <h4 className={style.whytickedbox__header}>{title}</h4>
      <p className={style.whytickedbox__desc}>{desc}</p>
    </div>
  );
};
