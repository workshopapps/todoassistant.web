import React from "react";
import classes from "./ResetPassword.module.scss";
import warning from "../../assets/form-warning.png";
import arrow from "../../assets/arrow-back.png";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";
// import { NavLink } from "react-router-dom";

const ResetPassword = () => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: yup.object({
      email: yup.string().required("Email does not match").email()
    }),
    onSubmit: values => {
      console.log(values);
      navigate("/newpassword");
    }
  });
  return (
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit} className={classes.content}>
        <img src={arrow} alt="" />

        <div>
          <h1>Reset Password</h1>
          <p>
            Enter the email registered with your account and we'll send an email
            with instructions to reset your password.{" "}
          </p>

          <div className={classes.inputDiv}>
            <label htmlFor="email">Email Address</label>

            <input
              required
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              placeholder="Enter email"
              className={
                formik.errors.email && formik.touched.email
                  ? classes.inputInvalid
                  : classes.inputEmail
              }
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
        <button
          className={
            !formik.errors.email && formik.touched.email
              ? classes.valid
              : classes.invalid
          }
        >
          Continue
        </button>
      </form>
      <div className={classes.side}></div>
    </div>
  );
};

export default ResetPassword;
