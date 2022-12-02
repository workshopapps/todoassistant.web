import React from "react";
import styles from "./Contact.module.scss";

//Images
import play from "../../../assets/home/play.png";
import apple from "../../../assets/home/apple.png";
import { Animate } from "../../../hooks/animation/AnimateIn";
import { NavLink } from "react-router-dom";

export default function Download() {
  return (
    <div className={styles.main}>
      <section className={styles.container}>
        <div className={styles.main__tick}>
          <div className={styles.main__tick__tickSub}>
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg`}
              alt="ticked"
            />
          </div>
          <div className={styles.main__tick__download}>
            <h5>Download Mobile App</h5>
          </div>
          <div className={styles.main__tick__image}>
            <NavLink href="#">
              <img className="grow" src={apple} alt="Apple store" />
            </NavLink>
            <NavLink href="#">
              <img className="grow" src={play} alt="Google play" />
            </NavLink>
          </div>
        </div>
      </section>
      <div className={styles.main__phone}>
        <Animate.FadeIn>
          <img
            src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668950997/hng/todoAppVirtualAssistant/Frame_34504_lgnz7c.svg`}
            alt="phone"
          />
        </Animate.FadeIn>
      </div>
    </div>
  );
}
