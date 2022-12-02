import React, { useState, useEffect } from "react";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import google from "../../../assets/google.png";
import fb from "../../../assets/fb.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import signupPicture from "../../../assets/signup.svg";
import styles from "./Signup.module.scss";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// import Header from "../../../layout/header/Header";
import Navbar from "../../../layout/header/Navbar";

const Signup = () => {
  const clientId = '407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com';

  const [fullName, setFullName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(false);
  const [gender, setGender] = useState("");
  const [date_of_birth, setDateofbirth] = useState("");

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
   localStorage.setItem('user',JSON.stringify(res?.profileObj));
   localStorage.setItem('token',res?.tokenId);

   navigate('/dashboard', { replace: true });
 };
 const onFailure = (err) => {
   console.log('failed:', err);
 };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      fullName.length == 0 ||
      email.length == 0 ||
      phone.length == 0 ||
      password.length == 0
    ) {
      setError(true);
    }

    //splitting the name into first_name and last_name
    if (fullName) {
      setFirstName(fullName.split(" ")[0]);
      setLastName(fullName.split(" ")[1]);
    }

    try {
      const response = await axios.post(
        "https://api.ticked.hng.tech/api/v1/user",
        { first_name, last_name, email, phone, password, gender, date_of_birth }
      );
      console.log(response);
      navigate("/login", {
        state: {
          registeredEmail: { email },
          registeredPassword: { password }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  console.log(
    first_name,
    last_name,
    email,
    phone,
    password,
    gender,
    date_of_birth
  );
  /*Later, if you want to, you add/use the default validation by making the input fields and textarea "required". */

  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <div className={styles.signupContainer}>
        <div className={styles.signupImg}>
          <img src={signupPicture} alt="signupPicture" />
        </div>

        <div className={styles.signupRight}>
          <h2 className={styles.createAccountText}>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.eachContainer}>
              <label htmlFor="name" className={styles.describer}>
                First & Last Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={fullName}
                required
                onChange={e => setFullName(e.target.value)}
              />
              {error && fullName.length <= 0 ? (
                <div className={styles.inputFieldErrorText}>
                  Name does not match!
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={styles.eachContainer}>
              <label htmlFor="email" className={styles.describer}>
                Email Address
              </label>
              <input
                id="email"
                className="emailInput"
                type="email"
                placeholder="Enter email"
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
              />
              {error && email.length <= 0 ? (
                <div className={styles.inputFieldErrorText}>
                  Email does not match!
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={styles.eachContainer}>
              <label htmlFor="phone" className={styles.describer}>
                Phone Number
              </label>
              <input
                id="phone"
                className="emailInput"
                type="number"
                placeholder="Enter phone"
                value={phone}
                required
                onChange={e => setPhone(e.target.value)}
              />
              {error && phone.length <= 0 ? (
                <div className={styles.inputFieldErrorText}>
                  Phone number does not match!
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={styles.eachContainer}>
              <label htmlFor="gender" className={styles.describer}>
                Gender
              </label>
              <input
                id="gender"
                className="emailInput"
                type="text"
                placeholder="Enter male or female"
                value={gender}
                required
                onChange={e => setGender(e.target.value)}
              />
            </div>
            <div className={styles.eachContainer}>
              <label htmlFor="date_of_birth" className={styles.describer}>
                Date of birth
              </label>
              <input
                id="date_of_birth"
                className="emailInput"
                type="date"
                placeholder="Enter Date of birth"
                value={date_of_birth}
                required
                onChange={e => setDateofbirth(e.target.value)}
              />
            </div>

            <div className={styles.eachContainer}>
              <label htmlFor="password" className={styles.describer}>
                Password
              </label>
              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />
              <AiOutlineEye
                onClick={togglePassword}
                className={passwordShown ? styles.hideEye : styles.showEye}
              />
              <AiOutlineEyeInvisible
                onClick={togglePassword}
                className={passwordShown ? styles.showEye : styles.hideEye}
              />
              {error && password.length <= 0 ? (
                <div className={styles.inputFieldErrorText}>
                  Password does not match!
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={styles.permission}>
              <label htmlFor="checkbox"></label>
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
              />
              <span className={styles.permissionText}>
                By signing up, you agree to the{" "}
                <Link to="/policy" style={{ textDecoration: "none" }}>
                  Terms of service and Privacy Policy
                </Link>
              </span>
            </div>

            {fullName && email && phone && password && isChecked && (
              <button id="btn__submit" className={styles.button}>
                Sign Up
              </button>
            )}
            {(!fullName || !email || !phone || !password || !isChecked) && (
              <button
                id="btn__submit"
                className={styles.buttonDisabled}
                disabled
              >
                Sign Up
              </button>
            )}
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
          <div className={styles.signup__bottomContent}>
            <div className={styles.signup__others}>
              <span className={styles.signup__line} />
              <span className={styles.signup__continueText}>
                Or continue with
              </span>
              <span className={styles.signup__line} />
            </div>
            <div className={styles.signup__socials}>
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
              <img src={fb} alt="fb_login" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
