import React from 'react';
import styles from './styles.module.css';
import back from './assets/back.png';
import notification from './assets/notification.png';

const VA_Notifications = () => {
	return (
		<div className={styles.va__main}>
			<div className={styles.va__topBar}>
				<div className={styles.va__nav}>
					<img src={back} />
					<span className={styles.va__navText}>Back</span>
				</div>
				<div className={styles.va__title}>
					<img src={notification} />
					<h3>Notification</h3>
				</div>
			</div>
			<div className={styles.va__mainContent}>
				<div className={styles.va__mainContentTitle}>
					<h3>Today</h3>
					<p>Friday, November 25th 2022</p>
				</div>
				<div className={styles.va__notificationItem}>
					<p className={styles.va__notificationsText}>John Andrew has just assigned you a task</p>
					<p>Friday, November 25th 2022 <span /> 09:00 AM</p>
				</div>
				<div className={styles.va__notificationItem}>
					<p className={styles.va__notificationsText}>Joan Ashley's task os overdue</p>
					<p>Friday, November 25th 2022 <span /> 04:00 AM</p>
				</div>
				<div className={styles.va__notificationItem}>
					<p className={styles.va__notificationsLightText}>You had a missed call from Sandra Davies</p>
					<p>Friday, November 25th 2022 <span /> 04:00 AM</p>
				</div>
			</div>
			<div className={styles.va__mainContent}>
				<div className={styles.va__mainContentTitle}>
					<h3>Yesterday</h3>
					<p>Thursday, November 24th 2022</p>
				</div>
				<div className={styles.va__notificationItem}>
					<p className={styles.va__notificationsLightText}>Umeh Udoh edited a task  </p>
					<p>Friday, November 24th 2022 <span /> 09:00 AM</p>
				</div>
				<div className={styles.va__notificationItem}>
					<p className={styles.va__notificationsLightText}>Amina Shauibu task is overdue</p>
					<p>Friday, November 24th 2022 <span /> 04:00 AM</p>
				</div>
			</div>
			<div className={styles.va__mainContent}>
				<div className={styles.va__mainContentTitle}>
					<h3>Last Week</h3>
					{/* <p>Friday, November 25th 2022</p> */}
				</div>
				<div className={styles.va__notificationItem}>
					<p className={styles.va__notificationsLightText}>Effiong Mfon just sent you a message</p>
					<p>Friday, November 14th 2022 <span /> 09:00 AM</p>
				</div>
				<div className={styles.va__notificationItem}>
					<p className={styles.va__notificationsLightText}>Ifeoma Nwabunze task is overdue </p>
					<p>Friday, November 14th 2022 <span /> 04:00 AM</p>
				</div>
				<div className={styles.va__notificationItem}>
					<p className={styles.va__notificationsLightText}>Adamu Garba just completed a task</p>
					<p>Friday, November 14th 2022 <span /> 04:00 AM</p>
				</div>
			</div>
		</div>
	)
}

export default VA_Notifications;