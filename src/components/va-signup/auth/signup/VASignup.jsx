import React, {useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import signupPicture from "../../../../assets/thesignupimage.svg";
import styles from "./VASignup.module.scss";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// import Navbar from "../../../../layout/header/Navbar";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { VAAuthContext } from "../../../../contexts/VAContexts/AuthContext";
import { login } from "../../../../contexts/VAContexts/apiCalls";

const VASignup = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [account_type, setAccountType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(false);

  const { dispatch } = useContext(VAAuthContext);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (
      first_name.length == 0 ||
      last_name.length == 0 ||
      email.length == 0 ||
      phone.length == 0 ||
      password.length < 6 ||
      account_type.length == 0
    ) {
      setError(true);
    }

  const config = {
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('VA')).extra.token}` }
  };

    try {
      const response = await axios.post(
        "https://api.ticked.hng.tech/api/v1/va/signup",
        { first_name, last_name, email, phone, password, account_type },
        config
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


  console.log(
    first_name,
    last_name,
    email,
    phone,
    password,
    account_type,
    isChecked
  );
  /*Later, if you want to, you add/use the default validation by making the input fields and textarea "required". */

  return (
    <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <div className={styles.signupContainer}>

        <div className={styles.signupLeft}>
          <h2 className={styles.createAccountText}>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.eachContainer}>
              <label htmlFor="name" className={styles.describer}>
                First Name
              </label>
              <input
                className={styles.input}
                id="name"
                type="text"
                placeholder="Enter first name"
                value={first_name}
                required
                autoComplete="off"
                onChange={e => setFirstName(e.target.value)}
              />
              {error && first_name.length <= 0 ? (
                <div className={styles.inputFieldErrorText}>
                  Name does not match!
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={styles.eachContainer}>
              <label htmlFor="name" className={styles.describer}>
                Last Name
              </label>
              <input
                className={styles.input}
                id="last_name"
                type="text"
                placeholder="Enter surname"
                value={last_name}
                autoComplete="off"
                required
                onChange={e => setLastName(e.target.value)}
              />
              {error && last_name.length <= 0 ? (
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
                className={styles.input}
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                autoComplete="off"
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
              <label htmlFor="phone" className={`${styles.describer} ${styles.phoneLabel}`}>
                Phone Number
              </label>
              <PhoneInput
                className={styles.phone}
                international
                defaultCountry="NG"
                id="phone"
                value={phone}
                autoComplete="off"
                required
                onChange={setPhone}
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
              <label htmlFor="password" className={styles.describer}>
                Password
              </label>
              <div className={styles.passwordInputWrapper}>
                <input
                  id="password"
                  className={styles.passwordInput}
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  autoComplete="off"
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
              </div>

              {error && password.length < 6 ? (
                <div className={styles.inputFieldErrorText}>
                  Password must be up to 6 characters!
                </div>
              ) : (
                ""
              )}
            </div>

            <div className={styles.eachContainer}>
              <label htmlFor="account_type" className={`${styles.describer} ${styles.accountLabel}`}>
                Account Type
              </label>
              <select name="account_type" id="account_type" value={account_type} required className={styles.select} onChange={(e) => setAccountType(e.target.value)}>
                <option value="" disabled>Select Account Type</option>
                <option value="VA">VA</option>
                <option value="MASTER">MASTER</option>
              </select>
              {error && account_type.length <= 0 ? (
                <div className={styles.inputFieldErrorText}>
                  Select Account Type!
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
            
            {(!first_name ||
              !last_name ||
              !email ||
              !phone ||
              !password ||
              !account_type ||
              !isChecked) && (
                <button
                  id="btn__submit"
                  className={styles.buttonDisabled}
                  disabled
                >
                  Sign Up
                </button>
              )}
             {first_name &&
              last_name &&
              email &&
              phone &&
              password &&
              // confirm_password &&
              account_type &&
              isChecked && (
                <button id="btn__submit" className={styles.button}>
                  Sign Up
                </button>
              )}
          </form>
          <p className={styles.toLogin}>
            Already have an account?,{" "}
            <Link
              to="/va-login"
              style={{
                textDecoration: "none",
                marginLeft: "0.3rem",
                fontWeight: "700"
              }}
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className={styles.signupImg}>
          <img src={signupPicture} alt="signupPicture" />
        </div>

      </div>
    </>
  );
};

export default VASignup;
