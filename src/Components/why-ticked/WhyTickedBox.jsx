import React from "react";
import style from "./whytickedbox.module.scss";

const WhyTickedBox = () => {
  return (
    <div className={style.whytickedbox}>
      <h4 className={style.whytickedbox__header}>Personalised Virtual Assistant</h4>
      <p className={style.whytickedbox__desc}>
        Opportunity to own a Virtual Assistant to have a relationship and build
        a level of trust such that You can assign a task or more to your Virtual
        Assistant.
      </p>
    </div>
  );
};

export default WhyTickedBox;
