import Button from "../../../../components/button/ButtonComponent";
import styles from "./HowModal.module.scss";
import Logo from "../../../../assets/logo.svg";
import { RiCloseLine } from "react-icons/ri";

const HowModal = ({ setIsOpen }) => {
  const btnStyleOutline = {
    border: "1px solid #714dd9",
    background: "transparent",
    color: "#714dd9",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "48px",
    borderRadius: "8px",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "160%",
    textDecoration: "none",
    width: "183.94px",
    textTransform: "uppercase",
    cursor: "pointer"
  };

  const signUp = {
    width: "183.94px",
    height: "48px"
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeaderContainer}>
            <div className={styles.modalHeader}>
              <div className={styles.header_content}>
                <img src={Logo} className={styles.header_logo} />
                <p className={styles.header_name}>TICKED</p>
              </div>
              <div>
                <button
                  className={styles.closeBtn}
                  onClick={() => setIsOpen(false)}
                >
                  <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.modalContent}>
            Ticked is built for You!!! Relax and let a Visual Assistant Remind
            you of your Todo.
          </div>

          <div className={styles.actionsContainer}>
            <Button link="/login" style={btnStyleOutline} title="Login" />
            <Button link="/signup" style={signUp} title="Sign up" />
          </div>
        </div>
      </div>
    </>
  );
};
export default HowModal;
