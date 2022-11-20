import React from "react";
import { Animate } from "../../../hooks/animation/AnimateIn";
import style from "./whyticked.module.scss";
import WhyTickedBox from "./WhyTickedBox";

const WhyTicked = () => {
  return (
    <section className={style.container}>
      <div className={style.whyticked}>
        <header>
          <h2 className={style.section__four_title}>
            Why
            <span className={style.section__four_task}>Ticked?</span>
          </h2>
        </header>
        <section className={style.section__four_grid}>
          <Animate.FadeIn>
            <WhyTickedBox
              title={`Personalised Virtual Assistant.`}
              desc={`Opportunity to own a Virtual Assistant to have a relationship and build a level of trust such that You can assign a task or more to your Virtual Assistant.`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              title={`User-friendly interface`}
              desc={`Ticked utilises a user-friendly interface that is easy for users to understand and find their way around. Users can quickly and easily add and organise tasks into different categories such as "marked done," "in progress," and dates before getting back to what they’re doing.
`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              title={`24/7 Support`}
              desc={`The app provides support and a live chat interface to respond to users promptly whenever they need help.`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              title={`Flexibility`}
              desc={`On the Ticked App, users can enjoy flexibility in assigning overdue tasks, selecting their Virtual Assistant and rearranging tasks in order of priority with colour dots.`}
            />
          </Animate.FadeIn>
        </section>
      </div>
    </section>
  );
};

export default WhyTicked;
