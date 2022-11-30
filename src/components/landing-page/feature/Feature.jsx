import { FeatureBox } from "../why-ticked/WhyTickedBox";
import style from "./feature.module.scss";

const features = [
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
    title: `Share File With Virtual Assistant`,
    description: `Video, Audio, Document, Image.`
  }
];

const Feature = () => {
  const featureList = features.map((feature, index) => {
    return (
      <div key={index} style={{ position: "relative" }}>
        <div style={{ width: `100%` }}>
          <FeatureBox
            width={`30.625rem`}
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
        <h2>Ticked Features</h2>
        <section className={style.featureGrid}>{featureList}</section>
      </div>
    </section>
  );
};

export default Feature;
