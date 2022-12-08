import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import styles from "./Subscribe.module.scss";
import tickCircle from "./tick-circle.png";
import wtickCircle from "./white-tick-circle.png";

const Subscribing = () => {
  const monthlySubHandler = async e => {
    e.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51MAPmTI5J0OejWbHH6IqoNp50hZhC6xkKng9AzuVDwn59YeMaxb6hpPdkdbSXZOg64ljfXAHEbMniy9n6qqLpZLh00IVWE7Hu4"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1MARPQI5J0OejWbHKTJxlci7",
          quantity: 1
        }
      ],
      mode: "subscription",
      successUrl: "https://ticked.hng.tech/success",
      cancelUrl: "https://ticked.hng.tech/subscribe"
    });

    console.log(error);
  };

  const yearlySubHandler = async e => {
    e.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51MAPmTI5J0OejWbHH6IqoNp50hZhC6xkKng9AzuVDwn59YeMaxb6hpPdkdbSXZOg64ljfXAHEbMniy9n6qqLpZLh00IVWE7Hu4"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1MARQPI5J0OejWbHs6DiLgRX",
          quantity: 1
        }
      ],
      mode: "subscription",
      successUrl: "https://ticked.hng.tech/success",
      cancelUrl: "https://ticked.hng.tech/cancel"
    });

    console.log(error);
  };

  return (
    <div className={styles.container}>
      <h1>Choose a plan to tailor your needs</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.top}>
            <div className={styles.card_heading}>
              <p>Basic</p>
              <h2>Free</h2>
              <p>For Everyone</p>
            </div>
            <ul>
              <li>
                <img src={tickCircle} alt="ticked" />
                Max 5 To-do’s
              </li>
              <li>
                <img src={tickCircle} alt="ticked" />5 MB file upload
              </li>
              <li>
                <img src={tickCircle} alt="ticked" />1 week activity history
              </li>
            </ul>
          </div>
          <Link to="/signup">
            <button className={`${styles.btn} hover`}>Get Started</button>
          </Link>
        </div>
        <div className={styles.purple}>
          <div className={styles.top}>
            <div className={styles.card_heading}>
              <p>Popular</p>
              <h3 className={styles.premium}>
                $20<span>/Month</span>
              </h3>
              <p>For the Busy</p>
            </div>
            <ul>
              <li>
                <img src={wtickCircle} alt="ticked" />
                Up to 100 To-do’s
              </li>
              <li>
                <img src={wtickCircle} alt="ticked" />
                30 mins reminder time
              </li>
              <li>
                <img src={wtickCircle} alt="ticked" />
                100 MB file upload
              </li>
              <li>
                <img src={wtickCircle} alt="ticked" />
                Virtual Assistant
              </li>
            </ul>
          </div>
          <div className={styles.center}>
            <button
              onClick={monthlySubHandler}
              className={`${styles.btn} hover`}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.top}>
            <div className={styles.card_heading}>
              <p>Popular</p>
              <h2 className={styles.year}>
                $200<span>/Year</span>
              </h2>
              <p>For the Classy</p>
            </div>
            <ul>
              <li>
                <img src={tickCircle} alt="ticked" />
                Unlimited To-do’s
              </li>
              <li>
                <img src={tickCircle} alt="ticked" />
                Unlimited reminder time
              </li>
              <li>
                <img src={tickCircle} alt="ticked" />1 GB file upload
              </li>
              <li>
                <img src={tickCircle} alt="ticked" />
                Virtual Assistant
              </li>
              <li>
                <img src={tickCircle} alt="ticked" />
                Unlimited activity history
              </li>
            </ul>
          </div>
          <div className={styles.center}>
            <button
              onClick={yearlySubHandler}
              className={`${styles.btn} hover`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribing;
