import "tiny-slider/dist/tiny-slider.css";
import style from "./happyClient.module.scss";

import HappyClientCard from "./HappyClientCard";
import Carousel from "../../../carousel/Carousel";

const clients = [
  {
        profilePicture: 'D',
        name: 'David mark',
        comment: 'Having the ticked app on my phone has made me manage my task well. I’m always up-to-date on my tasks.',
        color: '#714DD9',
        position: `left`
      },
      {
        profilePicture: 'A',
        name: 'Adorable Grace',
        comment: ' Working with this team has been amazing, I’m happy with the progress we made building aomething individuals are happy using. Well donr team.',
        color: '#FDA758',
        position: `center`
      },
      {
        profilePicture: 'R',
        name: 'Ruth Davidson',
        comment: 'Having the ticked app on my phone has made me manage my task well . I’m always up-to-date on my tasks.',
        color: '#FDA758',
        position: `center`
      },
      {
        profilePicture: 'E',
        name: 'Esther George',
        comment: 'I must commened the efforts use to build this great app. Well done guys.',
        color: '#714DD9',
        position: `right`
      }
]

const HappyClient = () => {
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
      // 992
      1200: {
        items: 4
      }
    }
  };

  const clientTestimonial = clients.map((client, index) => {
    return (
      <div key={index} style={{ position: "relative" }}>
        <HappyClientCard
          name={client.name}
          color={client.color}
          comment={client.comment}
          profilePicture={client.profilePicture}
        />
      </div>
    );
  });

  return (
    <div className={style.section__six}>
      <section className={style.container}>
        <header>
          <h2 className={style.section__six_title}>
          See testimonials of others
          </h2>
        </header>
        <section className={style.section__six_grid}>
          <Carousel settings={settings}>{clientTestimonial}</Carousel>
        </section>
      </section>
    </div>
  );
};

export default HappyClient;
