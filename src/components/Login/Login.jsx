// import React, { useContext, useState, useEffect } from "react";
// import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script';
// import axios from "axios";
// import styles from "./style.module.scss";
// import google from "../../assets/google.png";
// import fb from "../../assets/fb.png";
// import visibility from "../../assets/eye.svg";
// import visibilityOff from "../../assets/eye-off.svg";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/authContext/AuthContext";
// import { login } from "../../contexts/authContext/apiCalls";
// import loginPic from "../../assets/loginPicture.svg";
// import Navbar from "../../layout/header/Navbar";

// const Login = () => {
//   const clientId = '407472887868-9a6lr7idrip6h8cgthsgekl84mo7358q.apps.googleusercontent.com';
//   const baseurl = "https://api.ticked.hng.tech/api/v1";
//   const navigate = useNavigate();

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [show, setShow] = React.useState(false);
// const toggle = () => setShow(!show);

//   const { dispatch } = useContext(AuthContext);

//   useEffect(() => {
//     const initClient = () => {
//           gapi.client.init({
//           clientId: clientId,
//           scope: ''
//         });
//      };
//      gapi.load('client:auth2', initClient);
//  });
 
//  const onSuccess = (res) => {
//    googleSignIn((res?.profileObj))
//  };
//  const onFailure = (err) => {
//    console.log('failed login:', err);
//  };

//  const googleSignIn = async (body) => {
//    try {
//     const response = await axios.post(`${baseurl}/googlelogin`, 
//       body
//     );
//     if (response.status == 200 && response.data) {
//         localStorage.setItem("google_login_token", JSON.stringify(response.data.access_token));
//           localStorage.setItem("user", JSON.stringify(response?.data));
//            navigate("/dashboard", { replace: true });  
//     }
//   } catch (error) {
//     console.error(error);
//   }
//  }

//   const handleLogin = e => {
//     e.preventDefault();

//     login({ email, password }, dispatch);
//   };

//   return (
//     <React.Fragment>
//       <Navbar />
//       <div className={styles.login__main}>

//         <div className={styles.login__formWrapper}>
//           <h2 className={styles.login__title}>Login</h2>

//           <form className={styles.login__form} onSubmit={handleLogin}>
//             <div className={styles.login__formItem}>
//               <label className={styles.login__formLabel}>Email Address</label>
//               <input
//                 required
//                 className={styles.login__input}
//                 placeholder="Enter email"
//                 type="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//               />
//             </div>
//             <div className={styles.login__formItem}>
//               <label className={styles.login__formLabel}>Password</label>
//               <div className={styles.login__passwordWrapper}>
//                 <input
//                   required
//                   className={styles.login__password}
//                   placeholder="Password"
//                   type={show ? "text" : "password"}
//                   value={password}
//                   onChange={e => setPassword(e.target.value)}
//                 />
//                 <span>
//                   <img
//                     src={!show ? visibility : visibilityOff}
//                     onClick={toggle}
//                   />
//                 </span>
//               </div>
//             </div>
//             <div className={styles.login__formItem__checkbox}>
//               <label className={styles.login__formLabel}>
//                 <input type="checkbox" />
//                 <span>Remember me</span>
//               </label>
//               <span>
//                 <Link to="/resetpassword">Forgot password?</Link>
//               </span>
//             </div>
//             <div className={styles.login__formItem}>
//               <button
//                 style={{ background: `rgb(113, 77, 217)`, color: `#fff` }}
//                 className={`${styles.login__submitBtn} hover`}
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//           <div className={styles.login__bottomContent}>
//             <div className={styles.login__others}>
//               <span className={styles.login__line} />
//               <span className={styles.login__continueText}>
//                 Or continue with
//               </span>
//               <span className={styles.login__line} />
//             </div>
//             <div className={styles.login__socials}>
//             <GoogleLogin
//           clientId={clientId}
//           render={renderProps => (
//             <button onClick={renderProps.onClick} className={styles.login__googleButton}> <img src={google} alt="google_login" /></button>
//           )}
//           buttonText="Sign in with Google"
//           onSuccess={onSuccess}
//           onFailure={onFailure}
//           cookiePolicy={'single_host_origin'}
//           isSignedIn={false}
//       />
//               <img src={fb} alt="fb_login" />
//             </div>
//             <div className={styles.login__createAccount}>
//               <p>Don't have an account?</p>
//               <p>
//                 <Link to="/signup">Create account</Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className={styles.loginImg}>
//           <img src={loginPic} className={styles.loginPic} alt="loginPicture" />
//         </div>
        
//       </div>
//     </React.Fragment>
//   );
// };

// export default Login;
