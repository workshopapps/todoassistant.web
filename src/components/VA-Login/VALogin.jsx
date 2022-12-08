import React, { useContext, useState } from "react";
import styles from "./style.module.scss";
import visibility from "../../assets/eye.svg";
import visibilityOff from "../../assets/eye-off.svg";
import { Link, useNavigate } from "react-router-dom";
import loginPic from "../../assets/va-login-image.svg";
import { VAAuthContext } from "../../contexts/VAContexts/AuthContext";
import { login } from "../../contexts/VAContexts/apiCalls";
import { CircularProgress } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";
// import toast from "react-hot-toast";

const VALogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const [errorMsg, setErrorMsg] = useState('')
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);

  const toggle = () => setShow(!show);

  const { dispatch, isFetching } = useContext(VAAuthContext);

  const handleLogin = e => {
    console.log(isFetching);
    e.preventDefault();
    login({ email, password }, dispatch);

      navigate("/virtual-assistance");
    
  };

  return (
    <React.Fragment>
      <div className={styles.login__main}>
        <div className={styles.login__formWrapper}>
          <h2 className={styles.login__title}>Welcome Back</h2>

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
                style={{
                  background: `${
                    (!isFetching && "rgb(113, 77, 217)") ||
                    "rgba(71, 71, 71, 0.397)"
                  }`,
                  color: `#fff`,
                  pointerEvents: `${(!isFetching && "auto") || "none"}`
                }}
                className={`${styles.login__submitBtn} hover`}
              >
                {(!isFetching && "Login") || (
                  <CircularProgress color={"inherit"} size="20px" />
                )}
              </button>
            </div>
          </form>
          {/* <div className={styles.login__bottomContent}>
            {/* <div className={styles.login__others}>
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
            {/* <div className={styles.login__createAccount}>
              <p>Don't have an account?</p>
              <p>
                <Link to="/va-signup">Create account</Link>
              </p>
            </div> 
          </div> */}
        </div>
        <div className={styles.loginImg}>
          <img src={loginPic} className={styles.loginPic} alt="loginPicture" />
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default VALogin;
