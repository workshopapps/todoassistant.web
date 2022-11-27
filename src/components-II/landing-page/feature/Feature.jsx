import Carousel from "../../../components/carousel/Carousel";
import WhyTickedBox from "../why-ticked/WhyTickedBox";
import style from "./feature.module.scss";

const features = [
  {
    title: `Sign up/Login page`,
    description: `Create account with email address/phone number, reset password, returning user can easily login.`
  },
  {
    title: `Subscription`,
    description: `Plan 1 Designate limited tasks to your Virtual Assistant.\n
                  Plan 2 Designate unlimited tasks to your Virtual Assistant.`
  },
  {
    title: `Create To Do List`,
    description: `Write To Do List, Edit To Do List, Delete To Do List.`
  },
  {
    title: `Designate Task To A Virtual Assistant`,
    description: `Limits to assignable task, Assign overdue task.`
  },
  {
    title: `Manage To Do List`,
    description: `Mark done, In progress, Rearrange in order of priority.`
  },
  {
    title: `Live Chat`,
    description: `A chat bot or A chat section between Virtual Assistant and User.`
  },
  {
    title: `Notification`,
    description: `User gets a soft prompt of an upcoming task, notification of incoming call, notification when message is received, notification when a task is due.`
  },
  {
    title: `Share File With Virtual Assistant`,
    description: `Video, Audio, Document, Image.`
  }
];

const Feature = () => {
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

  const featureList = features.map((feature, index) => {
    return (
      <div key={index} style={{ position: "relative" }}>
        <div style={{ width: `100%` }}>
          <WhyTickedBox
            bgColor={`#fff`}
            title={feature.title}
            desc={feature.description}
          />
        </div>
      </div>
    );
  });

  return (
    <section className={style.feature}>
      <div className={style.container}>
        <h2>Features</h2>
        {/* <section className={style.featureGrid}> */}
        <Carousel settings={settings}>{featureList}</Carousel>
        {/* </section> */}
      </div>
    </section>
  );
};

export default Feature;
