import React, { useEffect, useRef, useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import TinySlider from "tiny-slider-react";
import Button from "../../button/ButtonComponent";
import Banner from "./Banner";

import styles from "./virtualAssistant.module.scss";

const assistants = [
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_158_k04pxx.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_160_emlzvr.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_162_llvoex.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_161_dsawpm.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`
  }
];

const VirtualAssistant = () => {
  const ts = useRef(null);
  const [slider, setSlider] = useState(null);

  const settings = {
    autoplayButtonOutput: false,
    lazyload: true,
    autoplay: true,
    nav: false,
    mouseDrag: true,
    controls: false,
    items: 1,
    gutter: 15,
    responsive: {
      992: {
        items: 7
      }
    }
  };

  useEffect(() => {
    setSlider(ts.current.slider);
  }, []);

  const AssistantsList = assistants.map((VA, index) => {
    return (
      <div key={index} style={{ position: "relative" }}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img_box}
            src={VA.profilePicture}
            alt="avatar"
          />
        </div>
      </div>
    );
  });
  return (
    <section className={styles.vr}>
      <div className={styles.vr_header}>
        <h3>Virtual Assistant</h3>
        <p>
          Opportunity to work with a personal assistant such that you can assign
          a task or more to be carried out. Receive in-app calls from your
          personal assistant when you fail to complete your set tasks for each
          day.
        </p>
        <div className={styles.vr_header_buttons}>
          <Button link={``} style={{ width: `184px` }} title={`Get Started`} />
        </div>
      </div>

      <section className={styles.assistantSlide}>
        <TinySlider settings={settings} ref={ts}>
          {AssistantsList}
        </TinySlider>
        <div className={styles.buttonNav}>
          <button className="hover" onClick={() => slider.goTo("prev")}>
            <HiOutlineArrowSmLeft size={`23px`} />
          </button>
          <button className="hover" onClick={() => slider.goTo("next")}>
            <HiOutlineArrowSmRight size={`23px`} />
          </button>
        </div>
      </section>

      <article className={styles.banner}>
        <Banner />
      </article>
    </section>
  );
};

export default VirtualAssistant;
