import Item from "./Item";
import styles from './styles.module.css';

const UnreadNotifications = ({ data }) => {
	return (
		<div className={styles.notifications_mainBody}>
			<div className={styles.notifications__title}>
				<h3>{data.filter(item => !item?.isRead).length} unread notifications</h3>
				<button className={styles.notifications__clearAllBtn}>Clear all</button>
			</div>
			<div className={styles.notifications__items}>
				{
					data.filter(item => !item.isRead).map(item => <Item item={item} key={item.id} styles={styles} />)
				}
			</div>
		</div>
	)
}

export default UnreadNotifications;