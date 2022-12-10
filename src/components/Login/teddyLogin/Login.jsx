import React, { useState } from "react";
import style from "./Login.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import { useFormik } from "formik";
// import { basicSchema } from "../../schemas/basicSchema";
import { Link } from "react-router-dom";
// import axios from "axios";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
// const base_url = "https://api.ticked.hng.tech/api/v1";

/* eslint-disable */

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const basicSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password requires a minimum of 8 characters")
    .max(20, "Password ")
    .matches(
      passwordRegExp,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character e.g. [!, @, #, $, %, ^, &, *]"
    )
    .required("Password is required"),
});

function Login() {
  // toggle password states
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword1 = () => {
    setPasswordShown(!passwordShown);
  };

  const [checkState, setCheckState] = useState(false);
  // useState to disable button while submitting
  const [isSigningIn, setIsSigningIn] = useState(false);

  //   const onSubmit = () => {
  //     console.log("player");
  //   };

  const onSubmit = async (values) => {
    console.log(values);
    setIsSigningIn(true);
    // after finding the data
    setIsSigningIn(false);

    // const data = { email: values.email, password: values.password };
    // try {
    //   await axios.post(`${base_url}/user/login`, data).then((res) => {
    //     console.log(res);
    //   });
    // } catch (e) {
    //   if (e.response.data.code === 401) {
    //     console.log("No such user found");
    //     //   alert("Token expired");
    //   } else if (e.response.data.code === 500) {
    //     console.log("Axios error request");
    //   }
    //   // alert(e);
    // }
  };

  // formik handling
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div>
      <>
        <div className={style.reset_header}>
          <img src="images/reset_logo.jpg" alt="" />
        </div>
        <div className={style.login_pg}>
          <div className={style.content_cont}>
            <div className={style.newpsw_page_cont}>
              <h2>Welcome Back</h2>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className={style.rsp_input_field}>
                  {/* input and label for email */}
                  <label htmlFor="email">
                    Email Address
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      className={
                        errors.email && touched.email ? style.input_error : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter Email Address"
                      required
                    />
                  </label>
                  {errors.email && touched.email && (
                    <span className={style.error}>{errors.email}</span>
                  )}
                </div>

                {/* input and label for password */}
                <div className={style.rsp_input_field}>
                  <label htmlFor="password">
                    Password
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      value={values.password}
                      className={
                        errors.password && touched.password
                          ? style.input_error
                          : ""
                      }
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter password"
                      required
                    />
                    <AiOutlineEye
                      onClick={togglePassword1}
                      className={passwordShown ? style.hideEye : style.showEye}
                    />
                    <AiOutlineEyeInvisible
                      onClick={togglePassword1}
                      className={passwordShown ? style.showEye : style.hideEye}
                    />
                  </label>
                  {errors.password && touched.password && (
                    <span className={style.error}>{errors.password}</span>
                  )}
                </div>

                <div className={style.checkbox_field}>
                  <label className={style.checkbox_input} htmlFor="remember_me">
                    Remember Me
                    <input
                      type="checkbox"
                      name="remember_me"
                      value={checkState}
                      onChange={() => {
                        setCheckState(!checkState);
                      }}
                      id="checkbox"
                    />
                  </label>
                  <p>
                    <Link>Forgot Password?</Link>
                  </p>
                </div>

                {isSigningIn ? (
                  <button className={style.btn_npsw} disabled={true}>
                    Signing In...
                  </button>
                ) : (
                  <button className={style.btn_npsw} type="submit">
                    Sign In
                  </button>
                )}
              </form>

              <div className={style.switch}>
                <p>Don't have an account ?</p>
                <Link>Create Account</Link>
              </div>

              <hr />
              <p className={style.or_ctn_with}>Or continue with</p>

              <div className={style.social_media_icons}>
                <img
                  src={google}
                  alt="google icon"
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={fb}
                  alt="facebook icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div className={style.img_flow}>
            <img src="images/reset-psw-img.svg" alt="" />
          </div>
        </div>
      </>
    </div>
  );
}

export default Login;
