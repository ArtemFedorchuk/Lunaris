import React from 'react';
import styles from './styles.module.scss';
import { PostItem } from '../../Molecules';
import { CaretDownFill } from 'react-bootstrap-icons';

const NewsList = () => {
	return (
		<div className={styles.newsWrapper}>
			<div className={styles.mainDescr}>
				L’actu de tes favoris sont sauvegardées pendant 30 jours.
			</div>
			<div className={styles.newsBar}>
				<div className={styles.leftCol}>
					<div className={styles.check}>
						<input type='checkbox' />
					</div>
					<h6>Tout marqué comme lu</h6>
				</div>
				<div className={styles.rightCol}>
					Clique sur l’icône &hearts; pour arrêter de suivre
				</div>
			</div>
			<div className='news-list'>
				<PostItem />
				<PostItem />
				<PostItem />
			</div>
			<div className={styles.loadMore}>
				<button className={styles.primaryButton}>
					Voir plus de notifs <CaretDownFill size={14} />
				</button>
			</div>
		</div>
	);
};

export default NewsList;
