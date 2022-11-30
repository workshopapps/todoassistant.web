import { AiFillProject } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import ValueCard from "../ValueCard";
import styles from "./Testimonal.module.scss";
import TestimonialCard from "./testimonial-card/TestimonialCard";

const Testimonal = () => {
  return (
    <section className={styles.section}>
      <div className={styles.valueCard}>
        <ValueCard
          title={`Mission Statement`}
          desc={`To help users prioritize and stay in control of their workload`}
        >
          <GiStairsGoal className="icon" size={`4rem`} />
        </ValueCard>
        <ValueCard
          title={`Vision Statement`}
          desc={`To free our users with the concerned associated with task management`}
        >
          <AiFillProject className="icon" size={`4rem`} />
        </ValueCard>
      </div>
      <div className={styles.sayBox}>
        <h2>See testimonials of others</h2>
        <div className={styles.gridBox}>
          <TestimonialCard
            id={0}
            name={`David mark`}
            comment={`Having the ticked app on my phone has made me manage my task well . I’m always up-to-date on my tasks`}
          />
          <TestimonialCard
            id={1}
            name={`Ruth Davidson`}
            comment={`Thia has been the app I would say i needed . I love the interface and how easy it is for me to access the features provided. Good job guys I will highly recommend`}
          />
          <TestimonialCard
            id={2}
            name={`Esther George`}
            comment={`I must commened the efforts use to build this great app. Well done guys `}
          />
          <TestimonialCard
            id={3}
            name={`Adorable Grace`}
            comment={`Working with this team has been amazing, I’m happy witjh the progress we made building aomething individuals are happy using. Well donr team.`}
          />
          <TestimonialCard
            id={4}
            name={`Goodluck Chris`}
            comment={`I love the simplicity of the app , it’s very easy to navigate . Well donr guys , great work`}
          />
          <TestimonialCard
            id={5}
            name={`Pete Jacob`}
            comment={`Great user interface and experience I’m in love with the app guys.`}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonal;
