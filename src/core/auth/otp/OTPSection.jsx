import React, { useState } from "react";

import "./OTPSection.scss";

function OtpSection() {
  // const [value, setValue] = useState("");

  const [timer, setTimer] = useState(null);

  const [bgColor, changeBgColor] = useState(false);

  const changeBg = () => {
    changeBgColor(!bgColor);
  };

  const handleOnChange = () => {
    // setValue(e.target.value)

    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      changeBg();
    }, 1500);

    setTimer(newTimer);
  };

  return (
    <section className="otp-section">
      <div className="otp-text">
        <p>OTP</p>

        <span>
          Enter the OTP that was sent to your email address to reset password.
        </span>
      </div>

      <div className="otp-digit">
        <input type="number" onChange={handleOnChange}></input>

        <input type="number" onChange={handleOnChange}></input>

        <input type="number" onChange={handleOnChange}></input>

        <input type="number" onChange={handleOnChange}></input>
      </div>

      <button
        type="submit"
        style={{ backgroundColor: bgColor ? "#714DD9" : "#D3D0D9" }}
      >
        continue
      </button>
    </section>
  );
}

export default OtpSection;
