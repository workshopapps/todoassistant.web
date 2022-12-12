import { Typography } from "@mui/material";
import Carousel from "../../../components/carousel/Carousel";
import Button from "../../button/ButtonComponent";
import Banner from "./Banner";

import styles from "./virtualAssistant.module.scss";

const assistants = [
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
        items: 4
      }
    }
  };

  const AssistantsList = assistants.map((VA, index) => {
    return (
      <div key={index} style={{ position: "relative" }}>
        <div className={styles.imgWrapper}>
          <img
            className={[styles.img_box].join(" ")}
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
        <Typography fontSize={{ xs: `16`, md: `18px` }}>
          A Virtual Assistant will be available for you. Get the opportunity to
          work with a Virtual Assistant such that you can delegate some tasks to
          be carried out for you. Receive calls from your Assistant when you
          fail to complete your set tasks for each day or within a speculated
          time.
        </Typography>
        <div className={styles.vr_header_buttons}>
          <Button
            link={`/signup`}
            style={{ width: `184px` }}
            title={`Get Started`}
          />
        </div>
        <Carousel settings={settings}>{AssistantsList}</Carousel>
      </div>
      <article className={styles.banner}>
        <Banner />
      </article>
    </section>
  );
};

export default VirtualAssistant;
