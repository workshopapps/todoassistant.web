import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import StatusBar from "../../core/dashboard/va-client-page/StatusBar";
import style from "./Login.module.scss";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import { loginSchema } from "../../../schemas/loginSchema";
import { login } from "../../contexts/authContext/apiCalls";

import google from "../../assets/google.png";
import fb from "../../assets/fb.png";

/* eslint-disable */

const clientId =
  "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";
const baseurl = "https://api.ticked.hng.tech/api/v1";

function Login() {
  const navigate = useNavigate();
  const { errMessage, dispatch } = useContext(AuthContext);
  // const { isFetching, errMessage, dispatch } = useContext(AuthContext);
  const [specificErrorMessage, setSpecificErrorMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);

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

  const onSubmit = async values => e => {
    e.preventDefault();
    setIsSigningIn(true);
    console.log(values);
    // after finding the data
    setIsSigningIn(false);
    login(values, dispatch);

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
        password: ""
      },
      validationSchema: loginSchema,
      onSubmit
    });

  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };

  useEffect(() => {
    if (errMessage) {
      setSpecificErrorMessage(errMessage);
      setIsAlertVisible(true);

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000);
    }
  }, [errMessage]);

  const onSuccess = res => {
    console.log(res);
    googleSignIn(res?.profileObj);
  };
  const onFailure = err => {
    console.log("failed:", err);
  };

  const googleSignIn = async body => {
    try {
      const response = await axios.post(`${baseurl}/googlelogin`, body);
      if (response.status == 200 && response.data) {
        localStorage.setItem(
          "google_login_token",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem("user", JSON.stringify(response?.data));
        navigate("/dashboard", { replace: true });
        navigate(0);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const responseFacebook = response => {
    console.log(response);
    // setData(response);
    // setPicture(response.picture.data.url);
    // if (response.accessToken) {
    //   setLogin(true);
    // } else {
    //   setLogin(false);
    // }
  };

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
                    <Link to="/resetpassword">Forgot Password?</Link>
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
                <Link to="/signup">Create Account</Link>
              </div>

              <hr />
              <p className={style.or_ctn_with}>Or continue with</p>

              <div className={style.social_media_icons}>
                <GoogleLogin
                  clientId={clientId}
                  render={renderProps => (
                    <img
                      onClick={renderProps.onClick}
                      src={google}
                      alt="google icon"
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={false}
                />

                <FacebookLogin
                  appId="671621864445949"
                  render={renderProps => (
                    <img
                      onClick={renderProps.onClick}
                      src={fb}
                      alt="facebook icon"
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  autoLoad={true}
                  // fields="name,email,picture"
                  // scope="public_profile,user_friends"
                  callback={responseFacebook}
                />
              </div>
            </div>
          </div>
          <div className={style.img_flow}>
            <img src="images/reset-psw-img.svg" alt="" />
          </div>
          <StatusBar
            open={isAlertVisible}
            message={errMessage && specificErrorMessage}
            priority={`error`}
            position={`left`}
          />
        </div>
      </>
    </div>
  );
}

export default Login;
