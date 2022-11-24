import React from "react";
import Button from "../../button/ButtonComponent";
import Banner from "./Banner";
import ImgGrid from "./ImgGrid";
import styles from "./virtualAssistant.module.scss";

const VirtualAssistant = () => {
  return (
    <section className={styles.vr}>
      <div className={styles.vr_header}>
        <h3>Virtual Assistant</h3>
        <p>
          Opportunity to work with a personal assistant such that you can assign
          a task or more to be carried out. Receive in-app calls from your
          personal assistant when you fail to complete your set tasks for each
          day.
        </p>
        <div className={styles.vr_header_buttons}>
          <Button link={``} style={{ width: `184px` }} title={`Get Started`} />
        </div>
      </div>

      <div>
        <ImgGrid>
          <div className={styles.img_box}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`}
              alt="avatar"
            />
          </div>
          <div className={styles.img_box}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_158_k04pxx.png`}
              alt="avatar"
            />
          </div>
          <div className={styles.img_box}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_160_emlzvr.png`}
              alt="avatar"
            />
          </div>
          <div className={styles.img_box}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_162_llvoex.png`}
              alt="avatar"
            />
          </div>
          <div className={styles.img_box}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_161_dsawpm.png`}
              alt="avatar"
            />
          </div>
          <div className={styles.img_box}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`}
              alt="avatar"
            />
          </div>
          <div className={styles.img_box}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_163_ogpiim.png`}
              alt="avatar"
            />
          </div>
        </ImgGrid>
      </div>
      <article className={styles.banner}>
        <Banner />
      </article>
    </section>
  );
};

export default VirtualAssistant;
