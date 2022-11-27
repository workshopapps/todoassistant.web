import React from 'react';
import styles from './styles.module.css';
import notifications from './data';
import UnreadNotifications from './Unread';
import AllNotifications from './AllNotifications';

const Notifications = () => {
	const [tab, setTab] = React.useState('all');
	
	const setAll = (e) => {
		setTab("all");
		e.target.style.color = "#714DD9";
		e.target.style.textDecoration = "underline";
		e.target.style.textUnderlineOffset = "0.5rem";
		document.getElementById("setUnreadBtn").style.textDecoration = "none";
		document.getElementById("setUnreadBtn").style.color = "#D3D0D9";
		document.getElementById("unreadNumber").style.backgroundColor = "#D3D0D9";
		document.getElementById("unreadNumber").style.color = "#707070";
	}
	
	const setUnread = e => {
		setTab("unread");
		e.target.style.color = "#714DD9";
		e.target.style.textDecoration = "underline";
		e.target.style.textUnderlineOffset = "0.5rem";
		document.getElementById("unreadNumber").style.backgroundColor = "#714DD9";
		document.getElementById("unreadNumber").style.color = "#FFFFFF";
		document.getElementById("setAllBtn").style.textDecoration = "none";
		document.getElementById("setAllBtn").style.color = "#D3D0D9";
	}

	return (
		<main className={styles.notifications__main}>
			<div className={styles.notifications__topRow}>
				<div className={styles.notifications__tabRow}>
					<button id="setAllBtn" className={styles.notifications__tabBtnOne} onClick={setAll}>All</button>
					<div className={styles.notifications__tabBtnContainer}>
						<button id="setUnreadBtn" className={styles.notifications__tabBtn} onClick={setUnread}>
							Unread
						</button>
						<span id="unreadNumber" className={styles.notifications__unreadNumber}>2</span>
					</div>
				</div>
				<button className={styles.notifications__markAllBtn}>Mark all as read</button>
			</div>
			<div>
				{ tab === "all" ? <AllNotifications data={notifications} /> : <UnreadNotifications data={notifications} /> }
			</div>
		</main>
	)
}

export default Notifications;
