import React from 'react';

const Item = ({ styles, item }) => {
	return (
		<div className={item.isRead ? styles.notifications__itemRead : styles.notifications__item}>
			<div className={styles.notifications__itemLeftContent}>
				<div className={styles.notifications__itemAvatar}>
					{item.title.substring(0, 1)}
					<span className={styles.notifications__itemPriority} />
				</div>
				<div>
					<p className={styles.notifications__itemTitle}>Task Title</p>
					<p className={styles.notifications__itemStatus}>Task note</p>
				</div>
			</div>
			<p className={styles.notifications__itemTime}>12:00 pm</p>
		</div>
	)
}

export default Item;
