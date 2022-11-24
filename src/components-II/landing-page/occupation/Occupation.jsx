import { style } from "@mui/system";
import React from "react";
import Button from "../../button/ButtonComponent";

import styles from "./occupation.module.scss";
const Occupation = () => {
  const btnStyleOutline = {
    width: `184px`,
    border: "1px solid #714dd9",
    background: "transparent",
    color: "#714dd9"
  };
  return (
    <section className={[styles.container, styles.occupation].join(" ")}>
      <div className={styles.occupation_header}>
        <p>
          If you are a <span className={style.span}>CEO</span>,{" "}
          <span className={style.span}>Manager</span>,{" "}
          <span className={style.span}>Politician</span>,{" "}
          <span className={style.span}>Therapist</span>,{" "}
          <span className={style.span}>Doctor</span>,
          <span className={style.span}>Customer Care Representative</span>,{" "}
          <span className={style.span}>Realtor</span>,
          <span className={style.span}>Freelancer</span>,{" "}
          <span className={style.span}>Virtual Assistant</span>, into business
          or you just need to get focused, be more productive and get more work
          done, you are in the right space and TICKED is the solution you seek
          with 24/7 support system.
        </p>
        <div className={styles.occupation_buttons}>
          <Button link={``} style={{ width: `184px` }} title={`Get Started`} />
          <Button link={``} style={btnStyleOutline} title={`Download App`} />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Occupation;
