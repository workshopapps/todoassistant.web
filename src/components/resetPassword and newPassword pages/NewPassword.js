import React from "react";
import classes from "./NewPassword.module.scss";
// import warning from "../../assets/form-warning.png";
import arrow from "../../assets/arrow-back.png";
import eye from "../../assets/eye.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

const NewPassword = () => {
  let navigate = useNavigate();
  const [togglePassword, settogglePassword] = useState(false);

  let formik = useFormik({
    initialValues: {
      rPassword: "",
      password: ""
    },
    validationSchema: yup.object({
      rPassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Password must match")
    }),
    onSubmit: values => {
      console.log(values);
      navigate("/login");
    }
  });
  return (
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit} className={classes.content}>
        <img src={arrow} alt="" />

        <div>
          <h1>New Password</h1>
          <p>
            Password should be at least 9 characters of lowercase and uppercas.{" "}
          </p>

          <div className={classes.inputDiv}>
            <label htmlFor="password">Password</label>

            <input
              required
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.inputEmail}
              type={togglePassword ? "text" : "password"}
              placeholder="Enter Password"
            />

            <img
              onClick={() => settogglePassword(!togglePassword)}
              src={eye}
              width={20}
              alt=""
            />
          </div>
          <div className={classes.inputDiv}>
            <label htmlFor="email">Confirm Password</label>

            <input
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={togglePassword ? "text" : "password"}
              name="rPassword"
              className={
                formik.errors.rPassword && formik.touched.rPassword
                  ? classes.inputInvalid
                  : classes.inputEmail
              }
              placeholder="Confirm Password"
            />
            <img
              onClick={() => settogglePassword(!togglePassword)}
              src={eye}
              width={20}
              alt=""
            />
          </div>
          {formik.errors.rPassword && formik.touched.rPassword ? (
            <span className={classes.red}>Password does not match</span>
          ) : (
            ""
          )}

          {!formik.errors.rPassword && formik.touched.rPassword ? (
            <span className={classes.green}>Password match!</span>
          ) : (
            ""
          )}
        </div>
        <button
          className={
            !formik.errors.rPassword && formik.touched.rPassword
              ? classes.valid
              : classes.invalid
          }
        >
          {" "}
          Continue
        </button>
      </form>
      <div className={classes.side}></div>
    </div>
  );
};

export default NewPassword;
