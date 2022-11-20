import React from "react";
import style from "./happyClient.module.scss";
import HappyClientCard from "./HappyClientCard";

const HappyClient = () => {
  return (
    <section className={style.container}>
      <div className={style.section__six}>
        <header>
          <h2 className={style.section__six_title}>
            Over <span className={style.section__six_task}>2000</span> Happy
            Clients
          </h2>
          <p className={style.section__six_subtitle}>
            Join our 2000+ users and benefit fully.
          </p>
        </header>
        <section className={style.section__six_grid}>
          <HappyClientCard
            name={`Ikwuoma Winifred`}
            comment={`“The reminders and notifications I receive from the App have greatly helped me to manage my tasks, increasing my productivity and time management.”`}
            job={`Founder, Winanda’s World`}
            profilePicture={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1664896547/webtech/cardImage_djdvjj.png`}
          />

          <HappyClientCard
            name={`Crystal Jumbo`}
            job={`Product Manager`}
            comment={`“With the ticked app, I’ve been able to curb procrastination because I can not only schedule my taks but I can also assign tasks to my virtual assistant.”`}
            profilePicture={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1628113374/globalChef/chef_2_2x_xrc2xw.png`}
          />

          <HappyClientCard
            name={`Tolulope Oduola`}
            job={`Freelancer`}
            comment={`“The “in-App” virtual assistant call constantly provides me with ample motivation to ensure I get all my tasks done before the end of the day ensuring that I can feel delighted to complete my set tasks.”`}
            profilePicture={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1661799624/portfolio/Screenshot_2022-08-29_195059_vuwyvz.png`}
          />
        </section>
      </div>
    </section>
  );
};

export default HappyClient;
