import React from "react";
import { Animate } from "../../../hooks/animation/AnimateIn";
import Button from "../../button/ButtonComponent";
import SectionThreeList from "./section-three-list/SectionThreeList";
import styles from "./SectionThree.module.scss";

const SectionThree = () => {
  return (
    <div className={styles.main}>
      <img
        className={styles.float_icon}
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-4_fj6sl7.svg"
        alt="float-icon"
      />
      <section className={styles.container}>
        <div className={styles.main__tick}>
          <header>
            <h3 className={styles.section__three_title}>How It Works</h3>
            <p className={styles.section__three_subtitle}>
              It's as easy as…
            </p>
          </header>
          <div className={styles.steps}>
            <SectionThreeList
              icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670551/hng/todoAppVirtualAssistant/task-square_bmrtgd.svg"
              title="Get on your dashboard"
              desc="Describe your task, set the date and time for your task deadline."
            />
          </div>

          <div className={styles.steps}>
            <SectionThreeList
              icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670567/hng/todoAppVirtualAssistant/timer-pause_zksz2j.svg"
              title="Personalized Virtual Assistant"
              desc="The in-app chat feature available allows you to communicate and assign tasks to a personalized Assistant."
            />
          </div>
          <div className={styles.steps}>
            <Button
              link={`/`}
              style={{ width: `184px` }}
              title={`get ticked`}
            />
            <p>
              Receive notifications when you complete your tasks and a call when
              deadlines are fast approaching.{" "}
            </p>
          </div>
          {/* <SectionThreeList
            icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670583/hng/todoAppVirtualAssistant/tick-circle_cw0mdk.svg"
            title="Stay Proactive"
            desc="Stay one step ahead by scheduling and organising your tasks to ensure you don’t miss out on any deadline."
          /> */}
        </div>
      </section>
      <div>
        <Animate.FadeIn>
          <img
            className={styles.img}
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668950853/hng/todoAppVirtualAssistant/Frame_34492_1_beztou.svg"
            alt="section-three-img"
          />
        </Animate.FadeIn>
      </div>
    </div>
  );
};

export default SectionThree;
