import React from 'react';
import styles from './styles.module.scss';

const UserCard = () => {
	const title = 'Hakio';
	const preview = 'League of legends';
	return (
		<div className={styles.cardWrapper}>
			<div>
				<img src='' alt='icon' />
			</div>
			<div>
				<div>
					<span>{title}</span>
				</div>
				<div>
					<span>{preview}</span>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
