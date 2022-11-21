import styles from "./Sub.module.scss";
import cycles from "../../assets/assets/tickCircle.png";

const Sub = () => {
  return (
    <div className={styles.subscription}>
      <div className={styles.page}>
        <h2>Choose a plan tailored to your needs.</h2>
        <div className={styles["payment_feature"]}>
          <h3>Complete feature</h3>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h4>Free Plan</h4>
              <p>$0 / mt</p>
              <div className={styles["card_content"]}>
                <ul className={styles["card_options"]}>
                  <li>
                    <img src={cycles} alt="ticked" />5 Ticked tasks
                  </li>
                  <li>
                    <img src={cycles} alt="ticked" />1 hour update time
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
              <button className={styles["sub_btn"]}>Choose</button>
            </div>
            <div className={styles.card}>
              <h4>Standard</h4>
              <p>$2.99 / mt</p>
              <div className={styles["card_content"]}>
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
                  <button className={styles["sub_btn"]}>Choose</button>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <h4>Premium</h4>
              <p>$20.00 / mt</p>
              <div className={styles["card_content"]}>
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
                    Improved UI
                  </li>
                  <li>
                    <img src={cycles} alt="tick" />
                    Speedily add and organize tasks
                  </li>
                  <li>
                    <img src={cycles} alt="tick" />
                    Premium support
                  </li>
                  <li>
                    <img src={cycles} alt="tick" />
                    Archieve task inbox
                  </li>
                </ul>
              </div>
              <button className={styles["btn"]}>Choose</button>
            </div>
          </div>
        </div>
        <div className={styles["subfooter"]}>
          <button className={styles["btn"]}>Subscribe</button>
          <h3>Cancel or change subscription plan</h3>
        </div>
      </div>
    </div>
  );
};

export default Sub;
