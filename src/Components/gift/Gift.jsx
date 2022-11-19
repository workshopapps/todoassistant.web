import React from "react";
import styles from "./Gift.module.scss";

import gift from "../../assets/home/gift.png";

export default function Gift() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__top}>
          <h3>
            Get Started To See Our <br />{" "}
            <span style={{ color: "#FDA758" }}> Special Feature</span>
          </h3>
          <p>
            Fancy pockets filled with pocket <br /> sauce. Pocket sauce rampant
            in fancy pockets.
          </p>
          <button>Get Started</button>
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
