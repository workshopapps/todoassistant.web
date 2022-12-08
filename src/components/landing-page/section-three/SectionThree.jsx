import React, { useState } from "react";
import { Animate } from "../../../hooks/animation/AnimateIn";
//import Button from "../../button/ButtonComponent";
import SectionThreeList from "./section-three-list/SectionThreeList";
import HowModal from "./HowModal/HowModal";
import styles from "./SectionThree.module.scss";
import { Box } from "@mui/material";

const SectionThree = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState(
    "https://res.cloudinary.com/kingsleysolomon/image/upload/v1668950853/hng/todoAppVirtualAssistant/Frame_34492_1_beztou.svg"
  );
  const onHover = e => {
    let name = e.target.dataset.name;
    if (name === "step-2") {
      setImg(
        `https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644176/hng/todoAppVirtualAssistant/Frame_34492_bci6bq.svg`
      );
    } else {
      setImg(
        "https://res.cloudinary.com/kingsleysolomon/image/upload/v1668950853/hng/todoAppVirtualAssistant/Frame_34492_1_beztou.svg"
      );
    }
  };

  return (
    <div className={styles.main}>
      <img
        className={styles.float_icon}
        src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668644172/hng/todoAppVirtualAssistant/Vector-4_fj6sl7.svg"
        alt="float-icon"
      />
      <Box flex={1} className={styles.container}>
        <div className={styles.main__tick}>
          <header>
            <h3 className={styles.section__three_title}>How It Works</h3>
            <p className={styles.section__three_subtitle}>It's as easy as…</p>
          </header>
          <div className={styles.steps}>
            <SectionThreeList
              hover={onHover}
              name={`step-1`}
              icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670551/hng/todoAppVirtualAssistant/task-square_bmrtgd.svg"
              title="Get on your dashboard"
              desc="Describe your task, set the date and time for your task deadline."
            />
          </div>

          <div className={styles.steps}>
            <SectionThreeList
              hover={onHover}
              name={`step-2`}
              icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670567/hng/todoAppVirtualAssistant/timer-pause_zksz2j.svg"
              title="Personalized Virtual Assistant"
              desc="The in-app chat feature available allows you to communicate and assign tasks to a personalized Assistant."
            />
          </div>
          <div>
            <SectionThreeList
              hover={onHover}
              icon="https://res.cloudinary.com/kingsleysolomon/image/upload/v1668670583/hng/todoAppVirtualAssistant/tick-circle_cw0mdk.svg"
              title="Get TICKED"
              desc="Receive notifications when you complete your tasks and a call when deadlines are fast approaching.
"
            />
          </div>
          <div className={styles.steps}>
            <button
              className={styles.getStarted}
              onClick={() => setIsOpen(true)}
            >
              Get started
            </button>
            {isOpen && <HowModal setIsOpen={setIsOpen} />}
            <button className={styles.download}>Download App</button>
          </div>
        </div>
      </Box>
      <Box flex={1}>
        <Animate.FadeIn>
          <img className={styles.img} src={img} alt="section-three-img" />
        </Animate.FadeIn>
      </Box>
    </div>
  );
};

export default SectionThree;
