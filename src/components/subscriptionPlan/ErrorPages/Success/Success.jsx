import styles from "./Success.module.scss";
import greenTicked from "../tick-circle.png";
import Subscribe from "../../Subscribe";
import { Link } from "react-router-dom";

function Success() {
  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <div className={styles.content}>
            <img src={greenTicked} alt="ticked" />
            <h1 className={styles.title}>Success!</h1>
            <p className={styles.description}>
              You have successfully made a subscription on Ticked
            </p>
            <Link to="/">
              <button className={styles.btn}>Back Home</button>
            </Link>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

export default Success;
