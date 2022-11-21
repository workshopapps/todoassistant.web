import React from "react";
import classes from "./ResetPassword.module.scss";
import warning from "../../assets/form-warning.png";
import arrow from "../../assets/arrow-left.png";

import { useFormik } from "formik";
import * as yup from "yup";

const ResetPassword = () => {
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email does not match").email(),
    }),
  });
  return (
    <div className={classes.container}>
      <form className={classes.content}>
        <img src={arrow} alt="" />

        <div>
          <h1>Reset Password</h1>
          <p>
            Enter the email registered with your account and we'll send an email
            with instructions to reset your password.{" "}
          </p>

          <div className={classes.input}>
            <label htmlFor="email">Email Address</label>
            <div
              className={
                formik.errors.email && formik.touched.email
                  ? classes.inputInvalid
                  : classes.inputEmail
              }
            >
              <input
                required
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder="Enter email"
              />

              {formik.errors.email && formik.touched.email ? (
                <img src={warning} width={20} alt="" />
              ) : (
                ""
              )}
            </div>
            {formik.errors.email && formik.touched.email ? (
              <span className={classes.red}>Email does not match</span>
            ) : (
              ""
            )}
            {!formik.errors.email && formik.touched.email ? (
              <span className={classes.green}>Email match!</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <button> Continue</button>
      </form>
      <div className={classes.side}></div>
    </div>
  );
};

export default ResetPassword;
