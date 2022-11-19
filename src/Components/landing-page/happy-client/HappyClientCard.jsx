import React from "react";
import style from "./happyClientCard.module.scss";

const HappyClientCard = () => {
  return (
    <div className={style.happy_client_card}>
      <div className={style.header}>
        <div className={style.happy_client_card_img}>
          <img
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1630322773/hng/profile1_wqaris.jpg"
            alt="avatar"
          />
        </div>
        <p className={style.happy_client_card_name}>Ikwuoma Winifred</p>
        <p className={style.happy_client_card_job}>Founder, Winanda’s World</p>
      </div>
      <article>
        <p className={style.happy_client_card_desc}>
          “The “in-App” virtual assistant call constantly provides me with ample
          motivation to ensure I get all my tasks done before the end of the day
          ensuring that I can feel delighted to complete my set tasks.”
        </p>
      </article>
    </div>
  );
};

export default HappyClientCard;
