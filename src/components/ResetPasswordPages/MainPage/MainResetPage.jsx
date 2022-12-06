import React from "react";
import style from "./MainResetPage.module.scss";
import ResetPasswordPage from "../ResetPage/ResetPasswordPage";
import NewPasswordPage from "../NewPasswordPage/NewPasswordPage";
import CheckMail from "../CheckMail/CheckMail";
import { Route, Routes } from "react-router-dom";
import resetPswImg from "../../../assets/images/reset-psw-img.svg";
import TickedLogo from "../../../assets/images/reset_logo.jpg";
import OTPPage from "../otpPage/OTPPage";

function MainResetPage() {
  return (
    <>
      <div className={style.reset_header}>
        <img src={TickedLogo} alt="" />
      </div>
      <div className={style.main_reset_flow}>
        <div className={style.changingpart}>
          <div className={style.content_cont}>
            <Routes>
              <Route path="/" element={<ResetPasswordPage />} />
              <Route path="/checkmail" element={<CheckMail />} />
              <Route path="/otp" element={<OTPPage />} />
              <Route path="/putnewpassword" element={<NewPasswordPage />} />
            </Routes>
          </div>
        </div>
        <div className={style.img_flow}>
          <img src={resetPswImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default MainResetPage;
