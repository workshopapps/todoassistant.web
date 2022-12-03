import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

import styles from "./Subscribe.module.scss";
import tickCircle from "./tick-circle.png";

const Subscribe = () => {
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
      successUrl: "http://localhost:3000",
      cancelUrl: "http://localhost:3000/cancel"
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
      successUrl: "http://localhost:3000/success",
      cancelUrl: "http://localhost:3000/cancel"
    });

    console.log(error);
  };

  return (
    <div className={styles.container}>
      <h1>Choose a plan to tailor your needs</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <strong>Basic Subscription Plan</strong>
          <h2 className={styles.basic}>Free</h2>
          <ul>
            <li>
              <img src={tickCircle} alt="ticked" />
              Max 5 To-do’s
            </li>
            <li>
              <img src={tickCircle} alt="ticked" />1 hour reminder time
            </li>
            <li>
              <img src={tickCircle} alt="ticked" />5 MB file upload
            </li>
            <li>
              <img src={tickCircle} alt="ticked" />1 week activity history
            </li>
          </ul>
          <Link to="/signup">
            <button className={styles.btn}>Get Started</button>
          </Link>
        </div>
        <div className={styles.card}>
          <strong>Premium Subscription Plan</strong>
          <h2 className={styles.premium}>
            <small>$</small>20<span>/Month</span>
          </h2>
          <ul>
            <li>
              <img src={tickCircle} alt="ticked" />
              Up to 100 To-do’s
            </li>
            <li>
              <img src={tickCircle} alt="ticked" />
              30 mins reminder time
            </li>
            <li>
              <img src={tickCircle} alt="ticked" />
              100 MB file upload
            </li>
            <li>
              <img src={tickCircle} alt="ticked" />
              Virtual Assistant
            </li>
            <li>
              <img src={tickCircle} alt="ticked" />4 weeks activity history
            </li>
          </ul>
          <button onClick={monthlySubHandler} className={styles.btn}>
            Get Started
          </button>
        </div>
        <div className={styles.card}>
          <strong>Yearly Subscription Plan</strong>
          <h2 className={styles.yearly}>
            <small className={styles.year}>$</small>200<span>/Year</span>
          </h2>
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
            <li>
              <img src={tickCircle} alt="ticked" />
              Premium Support
            </li>
          </ul>
          <button onClick={yearlySubHandler} className={styles.btn}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
