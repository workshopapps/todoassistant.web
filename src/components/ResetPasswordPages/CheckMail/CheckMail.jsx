import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./CheckMail.module.scss";
import { BsArrowRight } from "react-icons/bs";
import SMS from "../../../assets/images/sms.jpg";

function CheckMail() {
  const location = useLocation();

  return (
    <div className={style.checkmail_cont}>
      <img src={SMS} alt="SMS icon" />
      <div className={style.checkmail_header}>
        <h1>Check your mail</h1>
        <p>
          we have sent a verification code to <br /> {location.state.email}
        </p>
      </div>
      <button className={style.btn_link}>
        <Link to="/resetpassword/otp">
          Go to Email App <BsArrowRight />
        </Link>
      </button>
      <div>
        <Link to="" className={style.resend_not}>
          Resend verification code
        </Link>
      </div>

      <p>
        Did you receive the email? Check your spam filter <br />
        or <Link to="/resetpassword"> try another email address</Link>
      </p>
    </div>
  );
}

export default CheckMail;
