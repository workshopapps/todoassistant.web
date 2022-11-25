import React from "react";
import WhyTickedBox from "../why-ticked/WhyTickedBox";
import style from "./feature.module.scss";

const Feature = () => {
  return (
    <section className={style.feature}>
      <div className={style.container}>
        <h2>Features</h2>
        <section className={style.featureGrid}>
          <WhyTickedBox
            bgColor={`#fff`}
            title={`Sign up/Login page`}
            desc={`Create account with email address/phone number, reset password, returning user can easily login.`}
          />
          <WhyTickedBox
            bgColor={`#fff`}
            title={`Subscription`}
            desc={`Plan 1
Designate limited tasks to your Virtual Assistant.
Plan 2
Designate unlimited tasks to your Virtual Assistant.`}
          />
          <WhyTickedBox
            bgColor={`#fff`}
            title={`Create To Do List`}
            desc={`Write To Do List, Edit To Do List, Delete To Do List.`}
          />
          <WhyTickedBox
            bgColor={`#fff`}
            title={`Designate Task To A Virtual Assistant`}
            desc={`Limits to assignable task, Assign overdue task.`}
          />
          <WhyTickedBox
            bgColor={`#fff`}
            title={`Manage To Do List`}
            desc={`Mark done, In progress, Rearrange in order of priority.`}
          />
          <WhyTickedBox
            bgColor={`#fff`}
            title={`Live Chat`}
            desc={`A chat bot or A chat section between Virtual Assistant and User.`}
          />
          <WhyTickedBox
            bgColor={`#fff`}
            title={`Notification`}
            desc={`User gets a soft prompt of an upcoming task, notification of incoming call, notification when message is received, notification when a task is due.`}
          />
          <WhyTickedBox
            bgColor={`#fff`}
            title={`Share File With Virtual Assistant`}
            desc={`Video, Audio, Document, Image.`}
          />
        </section>
      </div>
    </section>
  );
};

export default Feature;
