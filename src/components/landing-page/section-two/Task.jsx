import React from "react";

import Button from "../../button/ButtonComponent";
import style from "./SectionTwo.module.scss";
import TaskListCard from "./TaskListCard";
// import animation from "../../../hooks/animation/animate.module.scss";

const clientContent = [
  {
    text: `Review financial statements from the accounting department.`,
    time: `4hrs, 8hrs`
  },
  { text: `Set up a call with Mark Essien. `, time: `4hrs, 8hrs` },
  { text: `Get groceries for the week from the mall.`, time: `4hrs, 8hrs` }
];
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
        <h1 className={style.section__two_title}>
          Focus on your <span className={style.section__two_task}>Tasks</span>
        </h1>
        <p className={style.section__two_subtitle}>
          Organise your tasks, set your reminders and allocate tasks to your
          Virtual Assistant in order to stay focused on your tasks, save time
          and increase productivity.
        </p>
      </header>

      <section className={style.taskDisplay}>
        <div className={style.client}>
          <TaskListCard type={`My Tasks`} content={clientContent} />
          <div className={style.float_icon_1}>
            <div className={style.icon_wrapper}>
              <img
                // className={animation.buzz_sprite}
                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668662219/hng/todoAppVirtualAssistant/tick-circle_fz54vr.svg"
                alt="check"
              />
            </div>
            <p>Add a task</p>
          </div>
        </div>
        <div className={style.assistant}>
          <div className={style.float_icon_3}>
            <div className={style.icon_wrapper}>
              <img
                // onMouseEnter={ring}
                src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668662242/hng/todoAppVirtualAssistant/notification_guiglz.svg"
                alt="notice"
              />
            </div>
            <p>Get notified</p>
          </div>
          <TaskListCard type={`Assistant`} content={assistantContent} />
          <div className={style.howitworksBtn}>
            <p>Head over here to see</p>
            <Button
              link={`/how-it-works`}
              title={`How it Works`}
              style={{ width: `207px` }}
            />
          </div>
        </div>
      </section>

      {/*

         */}
    </section>
  );
};

export default Task;
