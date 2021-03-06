import React from 'react';
import styles from './styles.module.scss';
import img from '../../assets/images/userCard/league.png';
import avateImg from '../../assets/images/userCard/Calque.png';

const UserCard = (props) => {
	const { userTitle, descriptions, image, avatar } = props;

	return (
		<div className={styles.cardWrapper}>
			<div className={styles.imgWrapper}>
				<img src={img} alt={image} />
				{/*<img src={`../../assets/images/userCard/${image}`} alt={image} />*/}
			</div>
			<div className={styles.contentCardWrapper}>
				<div>
					<span className={styles.cardTitle}>{userTitle}</span>
				</div>
				<div>
					<span className={styles.cardDescription}>{descriptions}</span>
				</div>
			</div>
			{avatar ? (
				<div className={styles.cardAvatar}>
					<img src={avateImg} alt='avatar' />
				</div>
			) : (
				false
			)}
		</div>
	);
};

export default UserCard;
