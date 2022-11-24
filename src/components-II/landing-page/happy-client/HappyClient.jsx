import React, { useEffect, useRef, useState } from "react";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import style from "./happyClient.module.scss";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import HappyClientCard from "./HappyClientCard";

const HappyClient = () => {
  const ts = useRef(null);
  const [slider, setSlider] = useState(null);
  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controls: false,
    items: 1,
    gutter: 15,
    responsive: {
      992: {
        items: 3
      }
    }
  };

  useEffect(() => {
    setSlider(ts.current.slider);
  }, []);

  const clients = [
    {
      name: `Ikwuoma Winifred`,
      comment: `“The reminders and notifications I receive from the App have greatly helped me to manage my tasks, increasing my productivity and time management.”`,
      job: `Founder, Winanda’s World`,
      profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1664896547/webtech/cardImage_djdvjj.png`,
      position: `right`
    },
    {
      name: `Crystal Jumbo`,
      comment: `“With the ticked app, I’ve been able to curb procrastination because I can not only schedule my taks but I can also assign tasks to my virtual assistant.”`,
      job: `Product Manager`,
      profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1628113374/globalChef/chef_2_2x_xrc2xw.png`,
      position: `center`
    },
    {
      name: `Tolulope Oduola`,
      comment: `“The “in-App” virtual assistant call constantly provides me with ample motivation to ensure I get all my tasks done before the end of the day ensuring that I can feel delighted to complete my set tasks.”`,
      job: `Freelancer`,
      profilePicture: `https://res.cloudinary.com/kingsleysolomon/image/upload/v1661799624/portfolio/Screenshot_2022-08-29_195059_vuwyvz.png`,
      position: `left`
    }
  ];
  const clientTestimonial = clients.map((client, index) => {
    return (
      <div key={index} style={{ position: "relative" }}>
        <HappyClientCard name={client.name} job={client.job} comment={client.comment} profilePicture={client.profilePicture} />
      </div>
    );
  });

  const handleNextButtonNav = () => {
    slider.goTo("next");
    let info = slider.getInfo();
    let indexPrev = info.indexCached;
    let indexCurrent = info.index;

    // update style based on index
    info.slideItems[indexPrev].classList.remove("active");
    info.slideItems[indexCurrent].classList.add("active");
  };
  const handlePrevButtonNav = () => {
    slider.goTo("prev");
    let info = slider.getInfo();
    let indexPrev = info.indexCached;
    let indexCurrent = info.index;

    // update style based on index
    info.slideItems[indexPrev].classList.remove("active");
    info.slideItems[indexCurrent].classList.add("active");
  };

  return (
    <div className={style.section__six}>
      <section className={style.container}>
        <header>
          <h2 className={style.section__six_title}>
            Over <span className={style.section__six_task}>2000</span> Happy Clients
          </h2>
          <p className={style.section__six_subtitle}>Join our 2000+ users and benefit fully.</p>
        </header>
        <section className={style.section__six_grid}>
          <TinySlider settings={settings} ref={ts}>
            {clientTestimonial}
          </TinySlider>
          <div className={style.buttonNav}>
            <button className="hover" onClick={handlePrevButtonNav}>
              <HiOutlineArrowSmLeft size={`23px`} />
            </button>
            <button className="hover" onClick={handleNextButtonNav}>
              <HiOutlineArrowSmRight size={`23px`} />
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HappyClient;
