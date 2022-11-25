import styles from "./CareerHero.module.scss";
import coWorkers from "../../../assets/career-great-coworkers.svg";
import performance from "../../../assets/career-performance.svg";
// import profile from "../../../assets/career-profile.svg";
import remote from "../../../assets/career-remote.svg";

const CareerHero = () => {
  const careerCardData = [
    {
      id: 1,
      img: coWorkers,
      title: "Great Co-Workers",
      text: "Work with some of the best talent in the industry and build strong network with them."
    },
    {
      id: 2,
      img: performance,
      title: "Performance Award",
      text: "Get awarded for better performance every 6 months and be recognized for your work."
    },
    {
      id: 3,
      img: remote,
      title: "Remote Jobs",
      text: "Work at the convenience of your home while enjoying remote work allowance. Your work is all that is needed not your physical presence."
    }
  ];

  return (
    <section className={styles.hero}>
      <section className={styles.section}>
        <header className={styles.header}>
          <section className={styles.text}>
            <h1>Contact Ticked</h1>
            <h4>We are here to offer solutions</h4>
            <p>Start a conversation with our Virtual Assistant</p>
          </section>
          <section className={styles.img}>
            <img
              src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1669325707/hng/todoAppVirtualAssistant/Group_34485_djmcxu.svg"
              alt="img"
            />
          </section>
        </header>
      </section>
      <div className={styles.cardContainer}>
        {careerCardData.map(data => (
          <div className={styles.card} key={data.id}>
            <img className={styles.cardImg} src={data.img} alt="" />
            <h4 className={styles.careerHeadingFour}>{data.title}</h4>
            <p className={styles.careerCardParagraph}>{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CareerHero;
