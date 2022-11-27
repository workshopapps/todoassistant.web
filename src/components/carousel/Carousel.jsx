import React, { useEffect, useRef, useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import TinySlider from "tiny-slider-react";
import styles from "./carousel.module.scss";

const Carousel = ({ children, settings }) => {
  const ts = useRef(null);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    setSlider(ts.current.slider);
  }, []);

  return (
    <section className={styles.slide}>
      <TinySlider settings={settings} ref={ts}>
        {children}
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
  );
};

export default Carousel;
