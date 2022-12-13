import React, { useState, useEffect } from "react";
import { useContext } from "react";
import style from "./Signup.module.scss";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import google from "../../../assets/google.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { login } from "../../../contexts/authContext/apiCalls";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import { signupSchema } from "../../../schemas/signupSchema";
import styled from "styled-components/macro";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import {
  loginFailure,
  loginStart,
  loginSuccess
} from "../../../contexts/authContext/AuthActions";
import imgval from "../../../assets/assets/red-alert-exclamation.png";
import closebtn from "../../../assets/assets/ios-close-5.png";

// styled components for PhoneInput
const Phone = styled(PhoneInput)`
  .flag-dropdown {
    background: inherit;
    width: 50px;
    padding-left: 7px;
    height: 45px;
    top: 1px;
    border-radius: 8px 0px 0px 8px;
    border: none;
    &:hover {
      background: inherit;
    }
  }
  .flag-dropdown.open {
    background: inherit;
  }
  #phone-input {
    padding-left: 50px;
    height: 100%;
    width: 100%;
    input {
      border: 1px solid red;
    }
  }
`;

const Signup = () => {
  const clientId =
    "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";

  const baseurl = "https://api.ticked.hng.tech/api/v1";

  const navigate = useNavigate();

  // toggle button type
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword1 = () => {
    setPasswordShown(!passwordShown);
  };

  // Facebook and Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [fbUser, setFbUser] = useState("");

  // change state terms of service and privacy policy
  const [checkState, setCheckState] = useState(false);
  const changeState = () => {
    setCheckState(!checkState);
  };

  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const { isFetching, dispatch } = useContext(AuthContext);

  // Facebook handling
  useEffect(() => {
    if (fbUser) {
      let name = `${fbUser.last_name} ${fbUser.first_name}`;
      let email = fbUser.email;
      console.log(name, email);
      fbSignUp({ name, email });
    }
  }, [fbUser]);

  const fbSignUp = async body => {
    dispatch(loginStart());
    try {
      const response = await axios.post(
        "https://api.ticked.hng.tech/api/v1/facebooklogin",
        body
      );

      dispatch(loginSuccess(response.data));
      //   localStorage.setItem(
      //     "token",
      //     JSON.stringify(response?.data.data.access_token)
      //   );
      //   localStorage.setItem("user", JSON.stringify(response?.data));
      //   navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err);
      dispatch(loginFailure(err.response.data.error.error));
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

  const onSuccess = res => {
    googleSignUp(res?.profileObj);
  };
  const onFailure = err => {
    console.log("failed:", err);
  };

  const googleSignUp = async body => {
    try {
      const response = await axios.post(`${baseurl}/googlelogin`, body);
      if (response.status == 200 && response.data) {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.access_token)
        );
        localStorage.setItem("user", JSON.stringify(response?.data));
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async values => {
    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      gender: values.gender,
      phone: values.phone,
      date_of_birth: values.date_of_birth,
      password: values.password
    };
    console.log(data);
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.ticked.hng.tech/api/v1/user",
        data
      );
      console.log(response);
      login({ email: data.email, password: data.password }, dispatch);
      setIsLoading(false);
      setError(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError(true);
      setErrMessage(err.response.data.message);
      setIsAlertVisible(true);

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 4000);
    }
  };

  // formik handling
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        date_of_birth: "",
        password: ""
      },
      validationSchema: signupSchema,
      onSubmit
    });

  return (
    <>
      <div className={style.signup_pg}>
        <div className={style.content_cont}>
          <div className={style.newpsw_page_cont}>
            <h2>Create Account</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className={style.rsp_input_field}>
                {/* Label and input for first name */}
                <label htmlFor="first_name">
                  First Name
                  <input
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    className={
                      errors.first_name && touched.first_name
                        ? style.input_error
                        : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter First Name"
                    required
                  />
                </label>
                {errors.first_name && touched.first_name && (
                  <span className={style.error}>{errors.first_name}</span>
                )}
              </div>
              {/* input and label for last name */}
              <div className={style.rsp_input_field}>
                <label htmlFor="last_name">
                  Last Name
                  <input
                    type="text"
                    name="last_name"
                    value={values.last_name}
                    className={
                      errors.last_name && touched.last_name
                        ? style.input_error
                        : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Last Name"
                    required
                  />
                </label>
                {errors.last_name && touched.last_name && (
                  <span className={style.error}>{errors.last_name}</span>
                )}
              </div>
              {/* input and label for email */}
              <div className={style.rsp_input_field}>
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
              {/* input and label for gender */}
              <div className={style.rsp_input_field}>
                <label htmlFor="gender">
                  Gender
                  <select
                    name="gender"
                    value={values.gender}
                    className={
                      errors.gender && touched.gender ? style.input_error : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </label>
                {errors.gender && touched.gender && (
                  <span className={style.error}>{errors.gender}</span>
                )}
              </div>

              {/* Input and label for phone number */}
              <div className={style.rsp_input_field}>
                <label htmlFor="phone">
                  Phone Number
                  <Phone
                    className={
                      errors.phone && touched.phone ? "input_error" : ""
                    }
                    international
                    country={"ng"}
                    placeholder="Enter phone number"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    onBlur={handleBlur("phone")}
                    inputProps={{
                      id: "phone-input",
                      class: "input_error"
                    }}
                    searchClass={{
                      class: "flag-dropdown flag-dropdown.open"
                    }}
                    required
                  />
                </label>
                {errors.phone && touched.phone && (
                  <span className={style.error}>{errors.phone}</span>
                )}
              </div>

              {/* input and label for date_of_birth */}
              <div className={style.rsp_input_field}>
                <label htmlFor="date_of_birth">
                  Date of Birth
                  <input
                    type="date"
                    name="date_of_birth"
                    value={values.date_of_birth}
                    className={
                      errors.date_of_birth && touched.date_of_birth
                        ? style.input_error
                        : ""
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter Date of Birth"
                    required
                  />
                </label>
                {errors.date_of_birth && touched.date_of_birth && (
                  <span className={style.error}>{errors.date_of_birth}</span>
                )}
              </div>

              {/* input and label for password */}
              <div className={style.rsp_input_field}>
                <label>
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
                <label className={style.checkbox_input} htmlFor="terms">
                  <input
                    name="terms"
                    type="checkbox"
                    value={checkState}
                    onChange={changeState}
                    id="checkbox"
                    required
                  />
                  <p name="terms">
                    By signing up, you agree to the{" "}
                    <Link to="/policy">
                      Terms of Service and Privacy Policy
                    </Link>
                  </p>
                </label>
              </div>

              {isAlertVisible && (
                <div className={style.disp_err}>
                  <div>
                    <img src={imgval} alt="Alert Icon" />
                    <p>{error && errMessage}</p>
                  </div>
                  <div
                    className={style.close_btn}
                    onClick={() => {
                      setIsAlertVisible(false);
                    }}
                  >
                    <img src={closebtn} alt="Close Icon" />
                  </div>
                </div>
              )}

              {/* signup button */}
              {isFetching || isLoading ? (
                <button className={style.btn_npsw} disabled={true}>
                  Signing Up...
                </button>
              ) : (
                <button
                  className={style.btn_npsw}
                  disabled={!checkState}
                  type="submit"
                >
                  Sign Up
                </button>
              )}
            </form>
            <div className={style.switch}>
              <p>Already have an account?</p>
              <Link to="/login">Sign In</Link>
            </div>

            <hr />
            <p className={style.or_ctn_with}>Or continue with</p>
            <div className={style.social_media_icons}>
              <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                  <button
                    onClick={renderProps.onClick}
                    className={style.signup__googleButton}
                  >
                    <img src={google} alt="google_login" />
                  </button>
                )}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
              />

              <LoginSocialFacebook
                appId="486566616898057"
                onResolve={response => {
                  console.log("THE RESPONSEEEEE", response);
                  setFbUser(response.data);
                }}
                onReject={error => {
                  console.log("THE ERORRRRR", error);
                }}
              >
                <FacebookLoginButton />
              </LoginSocialFacebook>
            </div>
          </div>
        </div>
        {/* <div className={style.img_flow}>
          <img src={signupPicture} alt="signupPicture" />
        </div> */}
      </div>
    </>
  );
};

export default Signup;
