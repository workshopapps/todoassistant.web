import React, { useEffect, useRef, useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import TinySlider from "tiny-slider-react";
import Button from "../../button/ButtonComponent";
import Banner from "./Banner";

import styles from "./virtualAssistant.module.scss";

const assistants = [
  // {
  //   profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1661799624/portfolio/Screenshot_2022-08-29_195059_vuwyvz.png`
  // },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669422674/hng/todoAppVirtualAssistant/Ellipse_164_a4gc7d.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_161_dsawpm.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_158_k04pxx.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_162_llvoex.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_160_emlzvr.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_159_ua97c5.png`
  },
  {
    profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1669159250/hng/todoAppVirtualAssistant/Ellipse_163_ogpiim.png`
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
        <h3>You Need Ticked App</h3>
        <p>
          The world's most successful and productive people schedule everything
          and rely on their calendars. If you are a CEO, Manager, Politician,
          Therapist, Doctor, Customer Care Representative, Realtor, Freelancer,
          Virtual Assistant, into business or you have busy schedules and need
          to execute all set tasks with the help of an Assistant to be more
          productive and get more work done, you are in the right space and
          TICKED APP is the solution you seek with 24/7 support system.
        </p>
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

      <div className={styles.vr_header}>
        <h3>Virtual Assistant</h3>
        <p>
          A Virtual Assistant will be available for you. Get the opportunity to
          work with a Virtual Assistant such that you can delegate some tasks to
          be carried out for you. Receive calls from your Assistant when you
          fail to complete your set tasks for each day or within a speculated
          time.
        </p>
        <div className={styles.vr_header_buttons}>
          <Button link={``} style={{ width: `184px` }} title={`Get Started`} />
        </div>
      </div>

      <article className={styles.banner}>
        <Banner />
      </article>
    </section>
  );
};

export default VirtualAssistant;
