import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import google from "../../assets/google.png";
import fb from "../../assets/fb.png";
import visibility from "../../assets/eye.svg";
import visibilityOff from "../../assets/eye-off.svg";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { login } from "../../contexts/authContext/apiCalls";
import loginPic from "../../assets/loginPicture.svg";
import Navbar from "../../layout/header/Navbar";

const Login = () => {
  const { state } = useLocation();
  const [email, setEmail] = useState(state ? state.registeredEmail.email : "");
  const [password, setPassword] = useState(
    state ? state.registeredPassword.password : ""
  );
  const [show, setShow] = React.useState(false);
  const toggle = () => setShow(!show);

  const { dispatch } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();

    login({ email, password }, dispatch);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.login__main}>
        <div className={styles.loginImg}>
          <img src={loginPic} className={styles.loginPic} alt="loginPicture" />
        </div>

        <div className={styles.login__formWrapper}>
          <h2 className={styles.login__title}>Login</h2>

          <form className={styles.login__form} onSubmit={handleLogin}>
            <div className={styles.login__formItem}>
              <label className={styles.login__formLabel}>Email Address</label>
              <input
                required
                className={styles.login__input}
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.login__formItem}>
              <label className={styles.login__formLabel}>Password</label>
              <div className={styles.login__passwordWrapper}>
                <input
                  required
                  className={styles.login__password}
                  placeholder="Password"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span>
                  <img
                    src={!show ? visibility : visibilityOff}
                    onClick={toggle}
                  />
                </span>
              </div>
            </div>
            <div className={styles.login__formItem__checkbox}>
              <label className={styles.login__formLabel}>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <span>
                <Link to="/resetpassword">Forgot password?</Link>
              </span>
            </div>
            <div className={styles.login__formItem}>
              <button
                style={{ background: `rgb(113, 77, 217)`, color: `#fff` }}
                className={`${styles.login__submitBtn} hover`}
              >
                Login
              </button>
            </div>
          </form>
          <div className={styles.login__bottomContent}>
            <div className={styles.login__others}>
              <span className={styles.login__line} />
              <span className={styles.login__continueText}>
                Or continue with
              </span>
              <span className={styles.login__line} />
            </div>
            <div className={styles.login__socials}>
              <Link to="/CheckM">
                <img src={google} alt="google_login" />
              </Link>
              <img src={fb} alt="fb_login" />
            </div>
            <div className={styles.login__createAccount}>
              <p>Don't have an account?</p>
              <p>
                <Link to="/signup">Create account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
