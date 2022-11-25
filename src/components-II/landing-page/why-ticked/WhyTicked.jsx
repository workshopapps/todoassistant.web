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
            Why <span className={style.section__four_task}>Ticked?</span>
          </h2>
        </header>
        <section className={style.section__four_grid}>
          <Animate.FadeIn>
            <WhyTickedBox
              bgColor={`#F6FAFB`}
              title={`Curb procrastination`}
              desc={`With Ticked you get notifications to remind you of scheduled tasks, a call from your Virtual Assistant when your task is due or overdue so that you finally get it completed.`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              bgColor={`#F6FAFB`}
              title={`User-friendly interface`}
              desc={`Ticked utilises a user-friendly interface that is easy for users to understand and find their way around. Users can quickly and easily add and organise tasks into different categories such as "marked done," "in progress," and dates before getting back to what they’re doing.
`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              bgColor={`#F6FAFB`}
              title={`24/7 Support`}
              desc={`The app provides support and a live chat interface to respond to users promptly whenever they need help.`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              bgColor={`#F6FAFB`}
              title={`Flexibility`}
              desc={`On the Ticked App, users can enjoy flexibility in assigning overdue tasks, selecting their Virtual Assistant and rearranging tasks in order of priority with colour dots.`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              bgColor={`#F6FAFB`}
              title={`Security`}
              desc={`We care about you and so we ensure your information is safe and secured with Ticked App.`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              bgColor={`#F6FAFB`}
              title={`Be proactive`}
              desc={`Stay one step ahead by scheduling and organising your tasks to ensure you don’t miss out on any deadline.`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              bgColor={`#F6FAFB`}
              title={`Stay focused`}
              desc={`Track your tasks with ease using TICKED. With My Task where you have all your tasks assigned to you in one To Do List, easily prioritise your work by dragging and dropping tasks into built-in sections, create your own custom checklist sections or sort by different dimensions.`}
            />
          </Animate.FadeIn>
          <Animate.FadeIn>
            <WhyTickedBox
              bgColor={`#F6FAFB`}
              title={`Reduce the stress`}
              desc={`Ticked App relieves you of the stress knowing that you get to delegate some tasks to a Virtual Assistant and have peace of mind.`}
            />
          </Animate.FadeIn>
        </section>
      </div>
    </section>
  );
};

export default WhyTicked;
