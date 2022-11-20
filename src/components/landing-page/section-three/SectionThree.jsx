import React from "react";
import SectionThreeList from "./section-three-list/SectionThreeList";
import styles from "./SectionThree.module.scss";

const SectionThree = () => {

  

  return (
    <div className={styles.main}>
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
            desc="Easily create a task in just a few steps and clicks. We help you stay organized."
          />

          <SectionThreeList
            icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670567/hng/todoAppVirtualAssistant/timer-pause_zksz2j.svg"
            title="Set a reminder"
            desc="Set reminders based on your preferences. We notify when absolutely necessary."
          />
          <SectionThreeList
            icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670583/hng/todoAppVirtualAssistant/tick-circle_cw0mdk.svg"
            title="Yada yada"
            desc="Get reminders when your tasks are closing in on their deadlines"
          />
        </div>
      </section>
      <div className={styles.main__phone}>
        <div className={styles.main__phone_box}>
          <img
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644176/hng/todoAppVirtualAssistant/Frame_34492_bci6bq.svg"
            alt="section-three-img"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
