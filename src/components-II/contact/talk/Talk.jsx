import React from "react";
import Joe from "../../../assets/Joe.svg";
import Bridget from "../../../assets/Bridget.svg";
import Chike from "../../../assets/Chike.svg";
import styles from "./Talk.module.scss";
import "./Talk.module.scss";

const Talk = () => {
  return (
    <section className={styles.contact__talk}>
      <h2>Talk to real people</h2>
      <p>Here are some of the people you’ll talk to in on Live chat</p>
      <div className={styles.container}>
        <div className={styles.profiles}>
          <div className={styles.item}>
            <p className={styles.unit}>Technical Support</p>
            <img src={Joe} alt="img" />
            <p className={styles.name}>Joe Lynn</p>
          </div>
          <div className={styles.item}>
            <p className={styles.unit}>Pricing and Billing </p>
            <img src={Bridget} alt="img" />
            <p className={styles.name}>Bridget Bello</p>
          </div>
          <div className={styles.item}>
            <p className={styles.unit}>Product Advice</p>
            <img src={Chike} alt="img" />
            <p className={styles.name}>Chike Ike</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talk;
