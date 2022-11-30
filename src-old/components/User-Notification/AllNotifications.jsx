import Item from './Item';
import styles from './styles.module.css';


const AllNotifications = ({ data }) => {
	return(
		<div className={styles.notifications_mainBody}>
			<div className={styles.notifications__title}>
				<h3>Today</h3>
				<button className={styles.notifications__clearAllBtn}>Clear all</button>
			</div>
			<div className={styles.notifications__items}>
				{
					data.filter(item => !item.isRead).map(item => <Item item={item} key={item.id} styles={styles} />)
				}
			</div>

			<div className={styles.notifications__title}>
				<h3>Yesterday</h3>
				<button className={styles.notifications__clearAllBtn}>Clear all</button>
			</div>
			<div className={styles.notifications__items}>
				{
					data.filter(item => item.isRead).map(item => <Item item={item} key={item.id} styles={styles} />)
				}
			</div>
		</div>
	)
}

export default AllNotifications;