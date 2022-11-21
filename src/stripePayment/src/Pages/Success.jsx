import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'

const Success = () => {
	const navigate = useNavigate();
	React.useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 3000);
	}, [navigate]);
	return (
		<div className={styles.checkout__main}>
			<div>
				<h3 className={styles.checkout__header}>Payment successful</h3>
				<p className={styles.checkout__subtext}>Redirecting to dashboard...</p>
			</div>
		</div>
	)
}

export default Success;