import React from "react";
import ValueCard from "./ValueCard";
import { AiFillProject } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import styles from "./MissionVision.module.scss";

function MissionVision() {
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
    </section>
  );
}

export default MissionVision;
