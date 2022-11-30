import styles from "./Sub.module.scss";
import cycles from "../../assets/assets/tickCircle.png";
import { Link } from "react-router-dom";

const Sub = () => {
  return (
    <div className={styles.subscription}>
      <h1>Choose a plan tailored to your needs.</h1>
      <div className="cards">
        <h3>Complete features</h3>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles["card_content"]}>
              <h3>Free Plan</h3>
              <p>$0 / mt</p>
              <ul className={styles["card_options"]}>
                <li>
                  <img src={cycles} alt="ticked" />5 Ticked task
                </li>
                <li>
                  <img src={cycles} alt="ticked" />1 hour update tim
                </li>
                <li>
                  <img src={cycles} alt="ticked" />5 MB file upload, 3 fiters
                </li>
                <li>
                  <img src={cycles} alt="ticked" />
                  1-week activity history
                </li>
              </ul>
            </div>
            <button className={styles["btn"]}>Choose</button>
          </div>
          <div className={styles.card}>
            <div className={styles["card_content"]}>
              <h3>Standard</h3>
              <p>$2.99 / mt</p>
              <ul className={styles["card_options"]}>
                <li>
                  <img src={cycles} alt="tick" />
                  Up to 300 Ticked tasks
                </li>
                <li>
                  <img src={cycles} alt="tick" />
                  20 mins update
                </li>
                <li>
                  <img src={cycles} alt="tick" />
                  100 MB file upload, 150 filters.
                </li>
                <li>
                  <img src={cycles} alt="tick" />
                  Reminder with an AI virtual assistant
                </li>
                <li>
                  <img src={cycles} alt="tick" />4 weeks activity history
                </li>
              </ul>
            </div>
            <button className={styles["btn"]}>Choose</button>
          </div>
          <div className={styles.card}>
            <div className={styles["card_content"]}>
              <h3>Premium</h3>
              <p>$20.00 / mt</p>
              <ul className={styles["card_options"]}>
                <li>
                  <img src={cycles} alt="tick" />
                  Unlimited Ticked tasks
                </li>
                <li>
                  <img src={cycles} alt="tick" />
                  Unlimited time updates
                </li>
                <li>
                  <img src={cycles} alt="tick" />
                  Unlimited activity history
                </li>
                <li>
                  <img src={cycles} alt="tick" />
                  Reminder with an AI VA
                </li>
                <li>
                  <img src={cycles} alt="tick" />
                  Speedily add and organize tasks
                </li>
                <li>
                  <img src={cycles} alt="tick" />
                  Premium support
                </li>
              </ul>
            </div>
            <button className={styles.btn}>Choose</button>
          </div>
        </div>
      </div>
      <div className={styles.sub}>
        <Link to="payment" className={styles.sub_btn}>
          Subscribe
        </Link>
        <p>Cancel or change subscription plan</p>
      </div>
    </div>
  );
};

export default Sub;
