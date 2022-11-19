import styles from './CareerHero.module.scss'
import coWorkers from '../../../assets/career-great-coworkers.svg'
import performance from '../../../assets/career-performance.svg'
import profile from '../../../assets/career-profile.svg'
import remote from '../../../assets/career-remote.svg'

const CareerHero = () => {
  const careerCardData = [
    {
      id:1,
      img: coWorkers,
      title: "Great Co-Workers",
      text: "Work with some of the best talent in the industry and build strong network with them."
    },
    {
      id:2,
      img: performance,
      title: "Performance Award",
      text: "Get awarded for better performance every 6 months and be recognized for your work."
    },
    {
      id:3,
      img: remote,
      title: "Remote Jobs",
      text: "Work at the convenience of your home while enjoying remote work allowance. Your work is all that is needed not your physical presence."
    }
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <img src={profile} alt="" />
        </div>
        <div className={styles.headingContainer}>
          <h1>Ticked Job Board</h1>
          <h4>More than just a job, we are family</h4>
          <p>View our available Job Openings to become one of us</p>
          <button className={styles.btn} type="button">
            Job Openings
          </button>
        </div>
      </div>
      <div className={styles.cardContainer}>
        {careerCardData.map((data) => (
          <div className={styles.card} key={data.id}>
            <img src={data.img} alt="" />
            <h4>{data.title}</h4>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </section>
  )

}
export default CareerHero