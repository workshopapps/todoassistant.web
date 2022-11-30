import React from "react";
import style from "./tickedheader.module.scss";
import hlogo from "./img/TMheadlogo.svg";

function TickedHeader() {
  return (
    <div className={style.TMheader}>
      <img src={hlogo} alt="" />
    </div>
  );
}

export default TickedHeader;
