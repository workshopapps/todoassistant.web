import React from "react";
import style from "./SectionTwo.module.scss";
import Tag from "./tag/Tag";

const SectionTwo = () => {
  return (
    <section className={style.section__two}>
      <section className={`${style.container} ${style.section__two_wrapper}`}>
        <header>
          <h1 className={style.section__two_title}>
            Focus on your <span className={style.section__two_task}>Tasks</span>
          </h1>
          <p className={style.section__two_subtitle}>
            Download the TICKED mobile application to get access to our Features
          </p>
        </header>
        <section className={style.section__two_tasklist_wrapper}>
          <div className={style.section__two_tag_wrapper}>
            <div className={style.tag1}>
              <Tag />
            </div>
            <div className={style.tag2}>
              <Tag />
            </div>
            <div className={style.tag3}>
              <Tag />
            </div>
          </div>
        </section>

        <div className={style.float_icon_1}>
          <div className={style.icon_wrapper}>
            <img
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668662263/hng/todoAppVirtualAssistant/add_h4rzlm.svg"
              alt="add"
            />
          </div>
          <p>Add a task</p>
        </div>
        <div className={`${style.float_icon_2} ${style.icon_wrapper}`}>
          {/* <div className={style.icon_wrapper}> */}
          <img
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668662219/hng/todoAppVirtualAssistant/tick-circle_fz54vr.svg"
            alt="check"
          />
          {/* </div> */}
          <p>Success</p>
        </div>
        <div className={style.float_icon_3}>
          <div className={style.icon_wrapper}>
            <img
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668662242/hng/todoAppVirtualAssistant/notification_guiglz.svg"
              alt="notice"
            />
          </div>
          <p>Get notified</p>
        </div>
      </section>
    </section>
  );
};

export default SectionTwo;
