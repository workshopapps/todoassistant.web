import styles from "./HowModal.module.scss";
import { RiCloseLine } from "react-icons/ri";

const HowModal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>GET STARTED WITH TICKED</h5>
          </div>

          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>

          <div className={styles.modalContent}>
            Ticked is built for You!!! Relax and let a Visual Assistant Remind
            you of your Todo.
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <a
                href="/signup"
                className={styles.loginBtn}
                onClick={() => setIsOpen(false)}
              >
                {" "}
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HowModal;
