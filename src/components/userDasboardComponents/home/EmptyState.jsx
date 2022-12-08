import React from "react";
import style from "./EmptyState.module.scss";
// import { Link } from "react-router-dom";
import qup from "../../../assets/quote-up.svg";
import qd from "../../../assets/quote-down.svg";

function EmptyState({ setTaskModal }) {
  return (
    <div className={style.ESm}>
      <p className={style.ESMp}>
        <span>
          {" "}
          <img src={qup} alt="" />
        </span>
        Don't settle for average. Bring your best to the{" "}
        <span>
          {" "}
          <img src={qd} alt="" />
        </span>
        <br />
        moment. Then, whether it fails or succeeds, <br />
        at least you know you gave all you had. We need to live the <br />
        best that's in us.
      </p>
      {/* <Link to="/newtask"> */}
      <p
        style={{ cursor: "pointer" }}
        className={style.ESMg}
        onClick={() => {
          setTaskModal(1);
        }}
      >
        Get Started
      </p>
      {/* </Link> */}
    </div>
  );
}

export default EmptyState;
