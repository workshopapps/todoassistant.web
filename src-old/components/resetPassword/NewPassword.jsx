import React from "react";
import classes from "./NewPassword.module.scss";
import arrow from "../../assets/arrow-left.png";
import eye from "../../assets/eye.png";
import { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
const NewPassword = () => {
  const [togglePassword, settogglePassword] = useState(false);
//   let formik = useFormik({
//     initialValues: {
//       rPassword: "",
//       password:"",
//     },
//     validationSchema: yup.object({
//       rPassword: yup.string().required().oneOf([yup.ref("password"), null], "Password must match"),
//     }),
//   });
  return (
    <div className={classes.container}>
      <form className={classes.content}>
        <img src={arrow} alt="" />
        <div>
          <h1>New Password</h1>
          <p>
            Password should be at least 9 characters of lowercase and uppercas.{" "}
          </p>
          <div className={classes.input}>
            <label htmlFor="passepd">Password</label>
            <div className={classes.inputEmail}>
              <input
                required
                name="password"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                type={togglePassword ? "text" : "password"}
                placeholder="Enter email"
              />
              <img
                onClick={() => settogglePassword(!togglePassword)}
                src={eye}
                width={20}
                alt=""
              />
            </div>
          </div>
          <div className={classes.input}>
            <label htmlFor="email">Confirm Password</label>
            <div
              className={
               classes.inputEmail
              }
            >
              <input
                required
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                type={togglePassword ? "text" : "password"}
                name="rPassword"
                placeholder="Enter Password"
              />
              <img
                onClick={() => settogglePassword(!togglePassword)}
                src={eye}
                width={20}
                alt=""
              />
            </div>
            {/* {formik.errors.rPassword && formik.touched.rPassword ? (
              <span className={classes.red}>Password does not match</span>
            ) : (
              ""
            )}
            {!formik.errors.rPassword && formik.touched.rPassword ? (
              <span className={classes.green}>Password match!</span>
            ) : (
              ""
            )} */}
          </div>
        </div>
        <button className={classes.valid}> Continue</button>
      </form>
      <div className={classes.side}></div>
    </div>
  );
};
export default NewPassword;