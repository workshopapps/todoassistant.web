import React, { useContext, useEffect, useState } from "react";
import style from "./Login.module.scss";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import google from "../../assets/google.png";
// import fb from "../../assets/fb.png";
import { login } from "../../contexts/authContext/apiCalls";
import axios from "axios";
import StatusBar from "../../core/dashboard/va-client-page/StatusBar";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/loginSchema";
import imgval from "../../assets/assets/red-alert-exclamation.png";
import closebtn from "../../assets/assets/ios-close-5.png";
import {
  loginFailure,
  loginStart,
  loginSuccess
} from "../../contexts/authContext/AuthActions";

const clientId =
  "407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com";
const baseurl = "https://api.ticked.hng.tech/api/v1";

const LoginForm = () => {
  const navigate = useNavigate();
  const { isFetching, errMessage, dispatch } = useContext(AuthContext);
  // const [specificErrorMessage, setSpecificErrorMessage] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [fbUser, setFbUser] = useState("");

  const [checkState, setCheckState] = useState(false);
  // useState to disable button while submitting
  const [isSignin, setIsSignin] = useState(false);

  const [err, setErr] = useState(null);

  const [specificErrorMessage, setSpecificErrorMessage] = useState("");

  // toggle password states
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword1 = () => {
    setPasswordShown(!passwordShown);
  };

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
      // localStorage.setItem("token", JSON.stringify(response?.data.data.access_token));
      // localStorage.setItem("user", JSON.stringify(response?.data));
      // navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err);
      dispatch(loginFailure(err.response.data.error.error));
    }
  };

  const onSubmit = async values => {
    // e.preventDefault();
    setIsSignin(true);
    console.log(values);
    // after finding the data
    login(values, dispatch);
    setIsSignin(false);
    console.log(errMessage);
  };

  useEffect(() => {
    if (errMessage) {
      setSpecificErrorMessage(errMessage);
      // setErr(errMessage);
      setErr("Invalid email and password combination");
      setIsAlertVisible(true);

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000);
    }
    // errMessage == err;
  }, [errMessage]);

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

  //   const responseFacebook = (response) => {
  //     console.log(response);
  //     // setData(response);
  //     // setPicture(response.picture.data.url);
  //     // if (response.accessToken) {
  //     //   setLogin(true);
  //     // } else {
  //     //   setLogin(false);
  //     // }
  //   };

  return (
    <div>
      <>
        <div className={style.login_pg}>
          <div className={style.content_cont}>
            <div className={style.newpsw_page_cont}>
              <h2>Welcome Back</h2>
              <form autoComplete="off" onSubmit={handleSubmit}>
                {err && (
                  <div className={style.disp_err}>
                    <div>
                      <img src={imgval} alt="Alert Icon" />
                      <p>{err}</p>
                    </div>
                    <div
                      className={style.close_btn}
                      onClick={() => {
                        setErr(null);
                      }}
                    >
                      <img src={closebtn} alt="Close Icon" />
                    </div>
                  </div>
                )}
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

                {isFetching || isSignin ? (
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

                <LoginSocialFacebook
                  appId="486566616898057"
                  onResolve={response => {
                    console.log(response);
                    setFbUser(response.data);
                  }}
                  onReject={error => {
                    console.log(error);
                  }}
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>
              </div>
            </div>
          </div>
          <StatusBar
            open={isAlertVisible}
            message={errMessage && specificErrorMessage}
            // message={errMessage}
            priority={`error`}
            position={`left`}
          />
        </div>
      </>
    </div>
  );
};

export default LoginForm;

// {isFetching ? `Signing in...` : `sign in`}

{
  /* <div className={styles.eachContainer}>
  <label htmlFor="phone" className={styles.describer}>
    Phone Number
  </label>
  <PhoneInput
    className={styles.phone}
    international
    defaultCountry="NG"
    id="phone"
    required
    value={phone}
    onChange={setPhone}
  />
</div>; */
}

//  <div className={styles.eachContainer}>
//    <label htmlFor="date_of_birth" className={styles.describer}>
//      Date of birth
//    </label>
//    <input
//      className={errors.date_of_birth ? styles.Err : styles.inpuT}
//      id="date_of_birth"
//      type="date"
//      placeholder="Enter Date of birth"
//      {...register("date_of_birth", { required: "Pick a date" })}
//    />
//    {errors.date_of_birth && (
//      <small className={styles.error_state}>
//        {errors.date_of_birth.message}
//      </small>
//    )}
//  </div>;

{
  /* <div className={styles.eachContainer}>
  <label htmlFor="gender" className={styles.describer}>
    Gender
  </label>
  <select
    name="isSeries"
    id="gender"
    className={errors.gender ? styles.Err : styles.inpuT}
    {...register("gender", { required: "Select a gender" })}
  >
    <option value="" disabled>
      Select Gender
    </option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
  {errors.gender && (
    <small className={styles.error_state}>{errors.gender.message}</small>
  )}
</div>; */
}
