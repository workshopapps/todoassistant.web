import React from "react";
import Tag from "./tag/Tag";
import style from "./taskListCard.module.scss";

const TaskListCard = ({ type, content }) => {
  const [content1, content2, content3] = content;
  return (
    <section className={style.taskCard}>
      <div className={style.wrapper}>
        <h4
          className={
            type === `Assistant` ? style.title_orange : style.title_blue
          }
        >
          {type}
        </h4>
        <div className={style.tag1}>
          <Tag text={content1.text} time={content1.time} />
        </div>
        <div className={style.tag2}>
          <Tag text={content2.text} time={content2.time} />
        </div>
        <div className={style.tag3}>
          <Tag text={content3.text} time={content3.time} />
        </div>
      </div>
    </section>
  );
};

export default TaskListCard;
