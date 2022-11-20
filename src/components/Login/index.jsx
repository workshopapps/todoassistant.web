import React from 'react';
import styles from './style.module.css';

const Login = () => {
	return (
		<div className={styles.login__main}>
			<div className={styles.login__formWrapper}>
				<h2 className={styles.login__title}>Login</h2>
				<form className={styles.login__form}>
					<div className={styles.login__formItem}>
						<label className={styles.login__formLabel}>Email Address</label>
						<input className={styles.login__input} placeholder="Enter email" type="email" />
					</div>
					<div className={styles.login__formItem}>
						<label className={styles.login__formLabel}>Password</label>
						<input className={styles.login__input} placeholder="Password" type="password" />
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
				<div>
					<div>
						<hr />
						<span>Or continue with</span>
						<hr />
					</div>
					<div className={styles.login__socials}>
						<img src="" alt="google_login" />
						<img src="" alt="fb_login" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;