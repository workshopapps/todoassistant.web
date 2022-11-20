import React from 'react';
import styles from './style.module.css';
import google from '../../assets/google.png'
import fb from '../../assets/fb.png'
import visibility from '../../assets/eye.svg';
import visibilityOff from '../../assets/eye-off.svg';
import Header from '../../layout/header/Header';
import { Link } from 'react-router-dom';

const Login = () => {
	const [show, setShow] = React.useState(false);
	const toggle = () => setShow(!show);
	return (
		<React.Fragment>
			<Header />
			<div className={styles.login__main}>
				<div className={styles.login__formWrapper}>
					<h2 className={styles.login__title}>Login</h2>
					<form className={styles.login__form}>
						<div className={styles.login__formItem}>
							<label className={styles.login__formLabel}>Email Address</label>
							<input required className={styles.login__input} placeholder="Enter email" type="email" />
						</div>
						<div className={styles.login__formItem}>
							<label className={styles.login__formLabel}>Password</label>
							<div className={styles.login__passwordWrapper}>
								<input required className={styles.login__password} placeholder="Password" type={show ? "text" : "password"} />
								<span>
									<img src={!show ? visibility : visibilityOff} onClick={toggle} />
								</span>
							</div>
						</div>
						<div className={styles.login__formItem__checkbox}>
							<label className={styles.login__formLabel}>
								<input type="checkbox" />
								<span>Remember me</span>
							</label>
							<span><a href="#">Forgot password?</a></span>
						</div>
						<div className={styles.login__formItem}>
							<button className={styles.login__submitBtn}>Login</button>
						</div>
					</form>
					<div className={styles.login__bottomContent}>
						<div className={styles.login__others}>
							<span className={styles.login__line} />
							<span className={styles.login__continueText}>Or continue with</span>
							<span className={styles.login__line} />
						</div>
						<div className={styles.login__socials}>
							<img src={google} alt="google_login" />
							<img src={fb} alt="fb_login" />
						</div>
						<div className={styles.login__createAccount}>
							<p>Don't have an account?</p>
							<p><Link to="/signup">Create account</Link></p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Login;