import React from "react";
import { Animate } from "../../../../hooks/animation/AnimateIn";
import style from "./happyClientCard.module.scss";

const HappyClientCard = ({ name, color, comment, profilePicture }) => {
  return (
    <div className={style.happy_client_card}>
      <div className={style.header}>
        <div className={style.happy_client_card_img} style={ {backgroundColor:`${color}`} }>
          {profilePicture}
        </div>
        <p className={style.happy_client_card_name}>{name}</p>
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
