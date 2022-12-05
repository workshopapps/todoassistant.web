import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./OTPPage.module.scss";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OTPPage() {
  let navigate = useNavigate();

  // toast message displayed when user does not exist
  /* eslint-disable */
  const showToastError = () => {
    toast.error("OTP does not match", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      transition: Slide,
      draggable: false,
      closeButton: false,
      className: style.toast_error
    });
  };
  const showToastSuccess = () => {
    toast.success("OTP matches", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      transition: Slide,
      draggable: false,
      closeButton: false,
      className: style.toast_success
    });
  };

  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const [otpValue, setOtpValue] = useState("");

  const handleSubmit = e => {
    if (otpValue !== token) {
      // alert("OTP Does Not Match");
      showToastError();
      e.preventDefault();
    } else {
      // alert("OTP matches");
      showToastSuccess();
      navigate("/resetpassword/putnewpassword");
    }
  };

  return (
    <div className={style.otp_cont}>
      <div className={style.otp_header}>
        <h1>OTP</h1>
        <p>
          Enter the OTP that was sent to your email address to reset password
        </p>
      </div>
      <div className={style.otp_boxes}>
        <input
          type="text"
          value={otpValue}
          onChange={e => {
            setOtpValue(e.target.value);
          }}
          className={style.one_otp}
          maxLength={4}
          required
        />
        <button type="submit" onClick={handleSubmit} className={style.otp_btn}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default OTPPage;
