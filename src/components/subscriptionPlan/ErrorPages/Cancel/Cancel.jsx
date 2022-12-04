import styles from "../Success/Success.module.scss";
import cancel from "../close-circle.png";
import { Link } from "react-router-dom";
import Subscribe from "../../Subscribe";

function Cancel() {
  return (
    <>
      <>
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <div className={styles.content}>
              <img src={cancel} alt="ticked" />
              <h1 className={styles.title}>Error</h1>
              <p className={styles.description}>
                Ooopss! something went wrong, check your card details again and
                input the correct details
              </p>
              <Link to="/subscribe">
                <button className={styles.btn}>Try Again</button>
              </Link>
            </div>
          </div>
        </div>
        <Subscribe />
      </>
    </>
  );
}

export default Cancel;
