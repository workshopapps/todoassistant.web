import React from "react";
import { Animate } from "../../../hooks/animation/AnimateIn";
import Button from "../../button/ButtonComponent";
import styles from "./textImageFluid.module.scss";

const btnStyleOutline = {
  border: "1px solid #714dd9",
  background: "transparent",
  width: `207px`,
  color: "#714dd9"
};

const TextImgFluid = () => {
  return (
    <div className={styles.vr}>
      <div>
        <div>
          <Animate.FadeIn>
            <img
              className={styles.img}
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669359376/hng/todoAppVirtualAssistant/image_452_hkwws6.svg"
              alt="section-three-img"
            />
          </Animate.FadeIn>
        </div>
      </div>
      <section className={styles.container}>
        <div className={styles.vr_header}>
          <h2>Do More With Ticked App</h2>
          <p>
            We understand you have a busy schedule with tasks and have set goals
            to achieve and so we have built this To Do List App for you to get
            your tasks delegated to a Virtual Assistant who will take the stress
            off your shoulders, get more tasks done for you while you stay
            focused. Here are a number of tasks you will need to assign to your
            Virtual Assistant; scheduling appointments and following up with
            clients and customers, making phone calls, making travel
            arrangements, calendar management, research, transcription, creating
            basic reports, managing email accounts and taking down minutes in
            meetings. Our Virtual Assistants also specialise in offering graphic
            design, blog writing, social media and marketing services.
          </p>
          <div className={styles.btnWrapper}>
            <Button link={`/signup`} style={btnStyleOutline} title={`Sign up today`} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextImgFluid;
