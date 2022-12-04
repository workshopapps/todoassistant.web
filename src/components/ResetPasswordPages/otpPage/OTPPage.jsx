import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./OTPPage.module.scss";

function OTPPage() {
  let navigate = useNavigate();

  const [token, setToken] = useState("");
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      setToken(token);
    }
  }, []);

  const [otpValue, setOtpValue] = useState("");

  const handleSubmit = e => {
    if (otpValue !== token) {
      alert("no otp match");
      e.preventDefault();
    } else {
      alert("match");
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
