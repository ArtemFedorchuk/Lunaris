import React from 'react';
import UserCard from '../../Atoms/UserCard';
import styles from './styles.module.scss';

const userInfo = [
	{
		id: 1,
		userTitle: 'Hakio',
		descriptions: 'League of legends',
		image: 'league.png',
		avatar: true,
	},
	{
		id: 2,
		userTitle: 'Hakio',
		descriptions: 'Steam',
		image: 'discord.png',
	},
	{
		id: 3,
		userTitle: '(JG) Hakio#0821',
		descriptions: 'Discord',
		image: 'steam.png',
	},
];

const UsersCardMenu = () => {
	return (
		<>
			{userInfo.map((items) => (
				<div key={items.id} className={styles.listCard}>
					<UserCard
						userTitle={items.userTitle}
						image={items.image}
						descriptions={items.descriptions}
						avatar={items.avatar}
					/>
				</div>
			))}
		</>
	);
};

export default UsersCardMenu;
