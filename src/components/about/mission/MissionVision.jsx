import React from "react";
import ValueCard from "./ValueCard";
import icon1 from "../../../assets/frame_1321314823.png";
import icon2 from "../../../assets/Frame 1321314823.png";
import styles from "./MissionVision.module.scss";

function MissionVision() {
  return (
    <section className={styles.section}>
      <div className={styles.valueCard}>
        <ValueCard
          title={`Mission Statement`}
          desc={`To help users prioritize and stay in control of their workload`}
        >
          <img src={icon1} alt="icon1" style={{width: "72px", height:"72px"}}/>
        </ValueCard>
        <ValueCard
          title={`Vision Statement`}
          desc={`To free our users with the concerned associated with task management`}
        >
          <img src={icon2} alt="icon2" style={{width: "72px", height:"72px"}}/>
        </ValueCard>
      </div>
    </section>
  );
}

export default MissionVision;
