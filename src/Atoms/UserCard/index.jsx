import React from 'react';
import styles from './styles.module.scss';
import img from '../../asets/images/userCard/league.png';
import avateImg from '../../asets/images/userCard/Calque.png';

const UserCard = (props) => {
	const { userTitle, descriptions, image, avatar } = props;
	console.log(avatar);

	return (
		<div className={styles.cardWrapper}>
			<div className={styles.imgWrapper}>
				<img src={img} alt={image} />
				{/*<img src={`../../asets/images/userCard/${image}`} alt={image} />*/}
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
