import React from "react";
import styles from "./Gift.module.scss";
import gift from "../../../assets/home/gift.png";
import Button from "../../button/ButtonComponent";

export default function Gift() {
  const btnStyle = {
    width: "207px",
    background: "transparent",
    border: "1px solid rgb(113, 77, 217)",
    color: "rgb(113, 77, 217)"
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__top}>
          <h3>
            Get Started To See Our <br />{" "}
            <span style={{ color: "#FDA758" }}> Special Feature</span>
          </h3>
          <p>
            Get more done for you with the subscription plan to gain access to
            unlimited features.
          </p>
          <div className={styles.main__getStarted}>
            <Button style={btnStyle} title={`Get Started`} />
          </div>
        </div>
        <div className={styles.main__bottom}>
          <div className={styles.main__img}>
            <img src={gift} alt="gift" />
          </div>
        </div>
      </div>
    </div>
  );
}
