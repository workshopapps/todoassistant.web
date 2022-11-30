import React from "react";
import { Animate } from "../../../hooks/animation/AnimateIn";
import style from "./happyClientCard.module.scss";

const HappyClientCard = ({ name, job, comment, profilePicture }) => {
  return (
    <div className={style.happy_client_card}>
      <div className={style.header}>
        <div className={style.happy_client_card_img}>
          <img src={profilePicture} alt="avatar" />
        </div>
        <p className={style.happy_client_card_name}>{name}</p>
        <p className={style.happy_client_card_job}>{job}</p>
      </div>
      <article>
        <Animate.FadeIn>
          <p className={style.happy_client_card_desc}>{comment}</p>
        </Animate.FadeIn>
      </article>
    </div>
  );
};

export default HappyClientCard;
