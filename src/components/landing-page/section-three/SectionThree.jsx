import React from "react";
import { Animate } from "../../../hooks/animation/AnimateIn";
import SectionThreeList from "./section-three-list/SectionThreeList";
import styles from "./SectionThree.module.scss";

const SectionThree = () => {
  return (
    <div className={styles.main}>
      <img
        className={styles.float_img}
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-4_fj6sl7.svg"
        alt="float_icon"
      />
      <section className={styles.container}>
        <div className={styles.main__tick}>
          <header>
            <h3 className={styles.section__three_title}>How It Works?</h3>
            <p className={styles.section__three_subtitle}>
              Simplify your process of management by offering you the best tool
              that suit for your current type of work.
            </p>
          </header>
          <SectionThreeList
            icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670551/hng/todoAppVirtualAssistant/task-square_bmrtgd.svg"
            title="Create a task"
            desc="Fill in your task title, task description, set date, set reminder, get a Virtual Assistant."
          />

          <SectionThreeList
            icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670567/hng/todoAppVirtualAssistant/timer-pause_zksz2j.svg"
            title="Get a reminder"
            desc="Receive reminders and notifications when your task is due as well as when it is overdue."
          />
          <SectionThreeList
            icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670583/hng/todoAppVirtualAssistant/tick-circle_cw0mdk.svg"
            title="Stay Proactive"
            desc="Stay one step ahead by scheduling and organising your tasks to ensure you don’t miss out on any deadline."
          />
        </div>
      </section>
      <div className={styles.main__phone}>
        <div className={styles.main__phone_box}>
          <Animate.FadeIn>
            <img
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668950853/hng/todoAppVirtualAssistant/Frame_34492_1_beztou.svg"
              alt="section-three-img"
            />
          </Animate.FadeIn>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
