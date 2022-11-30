import React, { useEffect, useState } from "react";

import styles from "./Payment.module.scss";
import Modal from "./Modal/Modal";

import debit from "../../assets/cardcard.svg";
import paypal from "../../assets/empty-walletwallet.svg";
import gPay from "../../assets/image 20gpay.svg";
import others from "../../assets/add-circleothers.svg";

const Payment = () => {
  const [isActive, setIsActive] = useState({
    card: true,
    paypal: false,
    gpay: false,
    others: false
  });

  const [otp, setOtp] = useState({
    one: "",
    two: "",
    three: "",
    four: ""
  });

  const [finalOtp, setFinalotp] = useState();

  const [openModal, setOpenModal] = useState(false);

  // These Functions Handle what happens when users click on any payment method.

  const handleCredit = () => {
    if (!isActive.card) {
      setIsActive({
        card: true,
        paypal: false,
        gpay: false,
        others: false
      });
    }
  };

  const handlePayPal = () => {
    if (!isActive.paypal) {
      setIsActive({
        paypal: true,
        card: false,
        gpay: false,
        others: false
      });
    }
  };

  const handleGpay = () => {
    if (!isActive.gpay) {
      setIsActive({
        gpay: true,
        paypal: false,
        card: false,

        others: false
      });
    }
  };

  const handleOthers = () => {
    if (!isActive.card) {
      setIsActive({
        others: true,
        paypal: false,
        card: false,
        gpay: false
      });
    }
  };

  // The following Functions Handle the OTP code inputs and stoes the value to a final otp state

  const handleOtp = e => {
    if (e.target.nextSibling && e.target.value) {
      e.target.nextSibling.focus();
    } else if (e.target.previousSibling && !e.target.value) {
      e.target.previousSibling.focus();
    }

    setOtp({ ...otp, one: e.target.value });
    setFinalotp(`${otp.one} ${otp.two} ${otp.three} ${otp.four}`);
  };

  const handleOtp2 = e => {
    if (e.target.nextSibling && e.target.value) {
      e.target.nextSibling.focus();
    } else if (e.target.previousSibling && !e.target.value) {
      e.target.previousSibling.focus();
    }

    setOtp({ ...otp, two: e.target.value });
    setFinalotp(`${otp.one} ${otp.two} ${otp.three} ${otp.four}`);
  };

  const handleOtp3 = e => {
    if (e.target.nextSibling && e.target.value) {
      e.target.nextSibling.focus();
    } else if (e.target.previousSibling && !e.target.value) {
      e.target.previousSibling.focus();
    }
    setOtp({ ...otp, three: e.target.value });
    setFinalotp(`${otp.one} ${otp.two} ${otp.three} ${otp.four}`);
  };

  const handleOtp4 = e => {
    if (e.target.nextSibling && e.target.value) {
      e.target.nextSibling.focus();
    } else if (e.target.previousSibling && !e.target.value) {
      e.target.previousSibling.focus();
    }

    setOtp({ ...otp, four: e.target.value });
    setFinalotp(`${otp.one} ${otp.two} ${otp.three} ${otp.four}`);
    console.log(finalOtp);
  };

  //THIS RUNS WHEN THE USER SUBMITS

  const handleSubmit = e => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  //THIS USE EFFECT STOPS THE BODY FROM BEING SCROLLABLE WHENEVER THE MODAL IS IN ITS OPEN STATE

  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [openModal]);

  //Conditionally render screen based on users choice
  const renderForm = () => {
    if (isActive.card) {
      //Render Card screen
      return (
        <div className={styles.card__payment}>
          <form noValidate onSubmit={handleSubmit}>
            <div className={styles.input___full}>
              <label htmlFor="card">Card Number</label>
              <input placeholder="Enter Card Number" id="card" type="number" />
            </div>
            <div className={styles.input___full}>
              <label htmlFor="name">Card holder's Name</label>
              <input
                placeholder="Enter Name on Your Card"
                id="name"
                type="text"
              />
            </div>
            <div className={styles.input___half}>
              <div className={styles.expiry}>
                <label htmlFor="date">Expiry Date</label>
                <input placeholder="Eg 16/22" id="date" type="text" />
              </div>
              <div className={styles.cvv}>
                <label htmlFor="cvv">CVV</label>
                <input
                  placeholder="***"
                  id="cvv"
                  type="password"
                  maxLength="3"
                />
              </div>
            </div>

            <div className={styles.input___pin}>
              <label htmlFor="card">Card Pin</label>
              <div className={styles.boxes}>
                <input
                  id="pin1"
                  type="text"
                  maxLength="1"
                  onChange={handleOtp}
                  value={otp.one}
                />
                <input
                  id="pin2"
                  type="text"
                  maxLength="1"
                  onChange={handleOtp2}
                  value={otp.two}
                />
                <input
                  id="pin3"
                  type="text"
                  maxLength="1"
                  onChange={handleOtp3}
                  value={otp.three}
                />
                <input
                  id="pin4"
                  type="text"
                  maxLength="1"
                  onChange={handleOtp4}
                  value={otp.four}
                />
              </div>
            </div>
            <button
              type="submit"
              className={`${styles.button} ${styles.submit__button}`}
              onSubmit={handleSubmit}
            >
              Make Payment
            </button>
            {/* <Button
                            title={"Make Payment"}
                            className={"button submit__button"}
                            onClick={() => console.log("i am clicked")}
                        /> */}
            {/* <Button title={'Make Payment'} /> */}
          </form>
        </div>
      );
    } else if (isActive.paypal) {
      //Render paypal screen
      return <div>PayPal</div>;
    } else if (isActive.gpay) {
      //Render Google Pay srceen
      return <div>Gpay</div>;
    } else {
      //Render  others srceen
      return <div>Others</div>;
    }
  };

  return (
    <div className={styles.payment__screen}>
      <div className={styles.select__method}>
        <h2>Payment method</h2>
        <p>Choose type of Payment</p>

        {/* Payment choices */}

        <div className={styles.method__choices}>
          <div className={styles.payment__choice} onClick={handleCredit}>
            <div className={styles.payment__choice__left}>
              <img src={debit} alt="debit" />
              <span>Credit/Debit card</span>
            </div>
            <div className={styles.payment__choice__right}>
              <div
                className={`${styles.active} ${
                  isActive.card ? styles.isActive : ""
                }`}
              ></div>
            </div>
          </div>
          <div className={styles.payment__choice} onClick={handlePayPal}>
            <div className={styles.payment__choice__left}>
              <img src={paypal} alt="debit" />
              <span>Paypal</span>
            </div>
            <div className={styles.payment__choice__right}>
              <div
                className={`${styles.active} ${
                  isActive.paypal ? styles.isActive : ""
                }`}
              ></div>
            </div>
          </div>
          <div className={styles.payment__choice} onClick={handleGpay}>
            <div className={styles.payment__choice__left}>
              <img src={gPay} alt="debit" />
              <span>Google Pay</span>
            </div>
            <div className={styles.payment__choice__right}>
              <div
                className={`${styles.active} ${
                  isActive.gpay ? styles.isActive : ""
                }`}
              ></div>
            </div>
          </div>
          <div className={styles.payment__choice} onClick={handleOthers}>
            <div className={styles.payment__choice__left}>
              <img src={others} alt="debit" />
              <span>Other wallets</span>
            </div>
            <div className={styles.payment__choice__right}>
              <div
                className={`${styles.active} ${
                  isActive.others ? styles.isActive : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.payment__form}>{renderForm()}</div>

      {/* Modal  */}
      {/* <AnimatePresence>
                <Modal open={openModal} setOpen={setOpenModal} success />
            </AnimatePresence> */}

      <Modal open={openModal} setOpen={setOpenModal} success />
    </div>
  );
};

export default Payment;
