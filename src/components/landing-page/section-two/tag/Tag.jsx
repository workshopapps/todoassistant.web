import React from "react";
import style from "./tag.module.scss";

const Tag = ({position}) => {
  return (
    <div style={position} className={style.tag}>
      <p className={style.tag__title}>Go Glofing with friends</p>
      <span className={style.tag__time}>
        <div className={style.tag__icon_wrapper}>
          <img
            className={style.tag__time_icon}
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668653563/hng/todoAppVirtualAssistant/timer-start_eozlal.png"
            alt="time-tag"
          />
        </div>
        2hrs, 3hrs
      </span>
    </div>
  );
};

export default Tag;
