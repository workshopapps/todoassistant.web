import React from "react";
import style from "./SectionTwo.module.scss";
import TaskListCard from "./TaskListCard";
// import animation from "../../../hooks/animation/animate.module.scss";
const assistantContent = [
  {
    text: `Send a mail to Patrick to set up a conference meeting. `,
    time: `4hrs, 8hrs`
  },
  {
    text: `Get me the recipe on “How to bake pineapple upside down cake”.`,
    time: `4hrs, 8hrs`
  },
  {
    text: `Make an audio of the written document attached here.`,
    time: `4hrs, 8hrs`
  }
];

const Task = () => {
  // const ring = e => {
  //   e.target.className = animation.bell_sprite;
  //   e.target.addEventListener(`animationend`, () => {
  //     e.target.className = null;
  //   });
  // };

  return (
    <section className={style.section__two}>
      <header>
        <h3 className={style.section__two_title}>
          Focus On Your Day <br /> Let’s Worry About Your{" "}
          <span className={style.section__two_task}>Tasks</span>
        </h3>
        <p className={style.section__two_subtitle}>
          Organise your tasks, set your reminders and allocate tasks to your
          Virtual Assistant in order to stay focused on your tasks, save time
          and increase productivity.
        </p>
      </header>

      <section className={style.taskDisplay}>
        <div className={style.assistant}>
          <div className={[style.icon_wrapper, style.float_icon_1].join(" ")}>
            <img
              // className={animation.buzz_sprite}
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668662219/hng/todoAppVirtualAssistant/tick-circle_fz54vr.svg"
              alt="check"
            />
          </div>

          <div className={[style.icon_wrapper, style.float_icon_2].join(" ")}>
            <img
              // onMouseEnter={ring}
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668662242/hng/todoAppVirtualAssistant/notification_guiglz.svg"
              alt="notice"
            />
          </div>
          <TaskListCard type={`Assistant`} content={assistantContent} />
        </div>
      </section>

      {/*

         */}
    </section>
  );
};

export default Task;
