import React from "react";
import { Animate } from "../../../hooks/animation/AnimateIn";
import Button from "../../button/ButtonComponent";
import styles from "./virtualAssistant.module.scss";

const VirtualAssistant = () => {
  const btnStyleOutline = {
    width: `184px`,
    border: "1px solid #714dd9",
    background: "transparent",
    color: "#714dd9"
  };
  return (
    <div className={styles.vr}>
      <section className={styles.container}>
        <div className={styles.vr_header}>
          <h3>Virtual Assistant</h3>
          <p>
            Opportunity to work with a personal assistant such that you can assign a task or more to be carried out. Receive in-app calls from your personal assistant when you fail
            to complete your set tasks for each day.
          </p>
          <div className={styles.vr_header_buttons}>
            <Button link={``} style={{ width: `184px` }} title={`Get Started`} />
            <Button link={``} style={btnStyleOutline} title={`Download App`} />
          </div>
        </div>
      </section>
      <div>
        <div>
          <Animate.FadeIn>
            <img
              className={styles.img}
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159483/hng/todoAppVirtualAssistant/Group_1026_cmpyqa.png"
              alt="section-three-img"
            />
          </Animate.FadeIn>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
