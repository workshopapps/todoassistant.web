import { style } from "@mui/system";
import React from "react";
import Button from "../../button/ButtonComponent";
import ImgGrid from "./ImgGrid";
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
          If you are a <span className={style.span}>CEO</span>, <span className={style.span}>Manager</span>, <span className={style.span}>Politician</span>,{" "}
          <span className={style.span}>Therapist</span>, <span className={style.span}>Doctor</span>,<span className={style.span}>Customer Care Representative</span>,{" "}
          <span className={style.span}>Realtor</span>,<span className={style.span}>Freelancer</span>, <span className={style.span}>Virtual Assistant</span>, into business or you
          just need to get focused, be more productive and get more work done, you are in the right space and TICKED is the solution you seek with 24/7 support system.
        </p>
        <div className={styles.occupation_buttons}>
          <Button link={``} style={{ width: `184px` }} title={`Get Started`} />
          <Button link={``} style={btnStyleOutline} title={`Download App`} />
        </div>
      </div>
      <div>
        <ImgGrid>
          <div className={styles.img_box}>
            <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`} alt="avatar" />
          </div>
          <div className={styles.img_box}>
            <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_158_k04pxx.png`} alt="avatar" />
          </div>
          <div className={styles.img_box}>
            <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_160_emlzvr.png`} alt="avatar" />
          </div>
          <div className={styles.img_box}>
            <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_162_llvoex.png`} alt="avatar" />
          </div>
          <div className={styles.img_box}>
            <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_161_dsawpm.png`} alt="avatar" />
          </div>
          <div className={styles.img_box}>
            <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`} alt="avatar" />
          </div>
          <div className={styles.img_box}>
            <img src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_163_ogpiim.png`} alt="avatar" />
          </div>
        </ImgGrid>
      </div>
    </section>
  );
};

export default Occupation;
