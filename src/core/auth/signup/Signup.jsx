import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import signupPicture from "../../../assets/signup.svg";
import styles from "./Signup.module.scss";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
// import Header from "../../../layout/header/Header";
import Navbar from "../../../layout/header/Navbar";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(false);
  const gender = "Male";
  const date_of_birth = "1990";

  const navigate = useNavigate();

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
          <p className={styles.toLogin}>
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
        </div>
      </div>
    </>
  );
};

export default Signup;
