import React, { useContext, useState, useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import google from "../../../assets/google.png";
import fb from "../../../assets/fb.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import signupPicture from "../../../assets/signup-img-cj.png";
import styles from "./Signup.module.scss";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// import Header from "../../../layout/header/Header";
import Navbar from "../../../layout/header/Navbar";
import { login } from "../../../contexts/authContext/apiCalls";
import { AuthContext } from "../../../contexts/authContext/AuthContext";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useForm } from "react-hook-form";

const Signup = () => {
  const clientId = '407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com';
  const { register, handleSubmit, trigger, formState: { errors } } = useForm();
  const [isChecked, setIsChecked] = useState(false);
  const [active, setActive] = useState(true)
  const [passwordShown, setPasswordShown] = useState(false);
  const [phone, setPhone] = useState()
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    localStorage.setItem('user', JSON.stringify(res?.profileObj));
    localStorage.setItem('token', res?.tokenId);

    navigate('/dashboard', { replace: true });
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const HandleSubmit = async data => {
    const { first_name, last_name, email, password, gender, date_of_birth } = data

    try {
      const response = await axios.post(
        "/user",
        { first_name, last_name, email, phone, password, gender, date_of_birth }
      );
      console.log(response);
      login({ email, password }, dispatch);
    } catch (err) {
      console.log(err);
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <div className={styles.signupContainer}>

        <div className={styles.signupLeft}>
          <div className={styles.abeg}>

            <h2 className={styles.createAccountText}>Create Account</h2>
            <form onSubmit={handleSubmit(HandleSubmit)} className={styles.Formm}>
              <div className={styles.eachContainer}>
                <label htmlFor="first_name" className={styles.describer}>
                  First Name
                </label>
                <input
                  className={errors.first_name ? styles.Err : styles.inpuT}
                  id="first_name"
                  type="text"
                  placeholder="Enter first name"
                  {...register("first_name", {
                    required: "This field is required"
                  })} />
                {errors.first_name && (<small className={styles.error_state}>{errors.first_name.message}</small>)}
              </div>

              <div className={styles.eachContainer}>
                <label htmlFor="last_name" className={styles.describer}>
                  Last Name
                </label>
                <input
                  className={errors.last_name ? styles.Err : styles.inpuT}
                  id="last_name"
                  type="text"
                  placeholder="Enter last name"
                  {...register("last_name", {
                    required: "This field is required"
                  })}
                />
                {errors.last_name && (<small className={styles.error_state}>{errors.last_name.message}</small>)}
              </div>

              <div className={styles.eachContainer}>
                <label htmlFor="email" className={styles.describer}>
                  Email Address
                </label>
                <input
                  className={errors.email ? styles.Err : styles.inpuT}
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  {...register("email", {
                    required: "Enter a vaild email address", pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email"
                    }
                  })}
                  onKeyUp={() => {
                    trigger('email')
                  }} />
                {errors.email && (<small className={styles.error_state}>{errors.email.message}</small>)}
              </div>

              <div className={styles.eachContainer}>
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
              </div>

              <div className={styles.eachContainer}>
                <label htmlFor="gender" className={styles.describer}>
                  Gender
                </label>
                <select name="isSeries" id="gender" className={ errors.gender ? styles.Err : styles.inpuT}
                  {...register("gender", { required: "Select a gender" })}>
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (<small className={styles.error_state}>{errors.gender.message}</small>)}
              </div>

              <div className={styles.eachContainer}>
                <label htmlFor="date_of_birth" className={styles.describer}>
                  Date of birth
                </label>
                <input
                  className={errors.date_of_birth ? styles.Err : styles.inpuT}
                  id="date_of_birth"
                  type="date"
                  placeholder="Enter Date of birth"
                  {...register("date_of_birth", { required: "Pick a date" })} />
                {errors.date_of_birth && (<small className={styles.error_state}>{errors.date_of_birth.message}</small>)}
              </div>

              <div className={styles.eachContainer}>
                <label htmlFor="password" className={styles.describer}>
                  Password
                </label>
                <div className={styles.passwordInputWrapper}>
                  <input
                    id="password"
                    className={errors.password ? styles.Err : styles.inpuT}
                    type={passwordShown ? "text" : "password"}
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Enter a password", minLength: {
                        value: 6,
                        message: "Password too short, a minimum of 6 charaters"
                      }
                    })}
                  />

                  <div className={styles.eye}>
                    {
                      passwordShown ? (<AiOutlineEye
                        onClick={togglePassword}
                      />) : (<AiOutlineEyeInvisible
                        onClick={togglePassword}
                      />)
                    }

                  </div>
                </div>
                {errors.password && (<small className={styles.error_state}>{errors.password.message}</small>)}
              </div>

              <div className={styles.permission}>
                <label htmlFor="checkbox"></label>
                <input
                  id="checkbox"
                  name="checkbox"
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleOnChange}
                  onClick={() => setActive(current => !current)}
                />
                <span className={styles.permissionText}>
                  By signing up, you agree to the{" "}
                  <Link to="/policy" style={{ textDecoration: "none" }}>
                    Terms of service and Privacy Policy
                  </Link>
                </span>
              </div>

              <button
                id="btn__submit"
                className={isChecked ? styles.buttonEnabled : styles.buttonDisabled} disabled={active}
              >
                Sign Up
              </button>

            </form>
            <p className={styles.tosignup}>
              Already have an account?,{" "}
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  marginLeft: "0.3rem",
                  fontWeight: "700"
                }}
              >
                Sign In
              </Link>
            </p>

            <div className={styles.continueWith}>
              <div className={styles.continueWithLine}></div>
              <span className={styles.continueWithText}>Or continue with</span>
              <div className={styles.continueWithLine}></div>
            </div>

            <div className={styles.signupSocials}>
              <GoogleLogin
                clientId={clientId}
                render={renderProps => (
                  <button onClick={renderProps.onClick} className={styles.signup__googleButton}> <img src={google} alt="google_login" /></button>
                )}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={false}
              />
              <img src={fb} alt="facebook icon" style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        <div className={styles.signupImg}>
          <img src={signupPicture} alt="signupPicture" />
        </div>

      </div>
    </>
  );
};

export default Signup;
