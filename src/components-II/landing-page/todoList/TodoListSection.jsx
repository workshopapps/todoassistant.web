import React from "react";
import { Animate } from "../../../hooks/animation/AnimateIn";
import styles from "./todo.module.scss";

const TodoListSection = () => {
  return (
    <div className={styles.vr}>
      <section className={styles.container}>
        <div className={styles.vr_header}>
          <h3>To-do list</h3>
          <p>
            TICKED is the easiest way to organise and schedule your individual
            tasks. It makes it easy for you and your clients to be clear on what
            to do, when to do it, and how to get it done in a lively and
            exciting way.
          </p>
        </div>
      </section>
      <div>
        <div>
          <Animate.FadeIn>
            <img
              className={styles.img}
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159542/hng/todoAppVirtualAssistant/Frame_34492_2_cy0b6g.svg"
              alt="section-three-img"
            />
          </Animate.FadeIn>
        </div>
      </div>
    </div>
  );
};

export default TodoListSection;
