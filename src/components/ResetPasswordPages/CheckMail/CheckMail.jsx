import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./CheckMail.module.scss";
import { BsArrowRight } from "react-icons/bs";
import SMS from "../../../assets/images/sms.jpg";
import { useState } from "react";
import Axios from "axios";

const base_url = "https://api.ticked.hng.tech/api/v1";

function CheckMail() {
  let navigate = useNavigate();

  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const onResend = async () => {
    const data = { email: location.state.email };
    setIsLoading(true);
    try {
      await Axios.post(base_url + "/user/reset-password", data).then(res => {
        console.log(res.data.data);
        localStorage.setItem("userId", res.data.data.user_id);
        localStorage.setItem("token", res.data.data.token);
        setIsLoading(false);
        navigate("/resetpassword/checkmail", {
          state: {
            email: location.state.email
          }
        });
      });
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <div className={style.checkmail_cont}>
      {isLoading ? (
        <div className={style.loader_container}>
          <div className={style.spinner}></div>
        </div>
      ) : (
        <>
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
            <Link to="#" onClick={onResend} className={style.resend_not}>
              Resend verification code
            </Link>
          </div>

          <p>
            Did you receive the email? Check your spam filter <br />
            or <Link to="/resetpassword"> try another email address</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default CheckMail;
