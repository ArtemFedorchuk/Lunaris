import React from 'react';
import styles from './styles.module.scss';
import { Heart, Envelope } from 'react-bootstrap-icons';

//img
import statusBarImg from '../../assets/images/sidebar-statistic/menuProgressBar-3.png';
import logoTop from '../../assets/images/sidebar-statistic/bonus-3.png';
import lizardManImg from '../../assets/images/sidebar-statistic/lizardman.png';
import reputationLogo from '../../assets/images/sidebar-statistic/reputation.png';
import scrollImg from '../../assets/images/sidebar-statistic/sidebar-scroll.png';
import bearImg from '../../assets/images/sidebar-statistic/bear.png';

const SideBarStatistic = () => {
	return (
		<div>
			<div className={styles.wrapperStatistic}>
				<div className={styles.statisticLogo}>
					<img src={logoTop} alt='logo' />
				</div>
				<div className={styles.statisticInfo}>
					<span>Hakio</span>
					<p>dit le Fourbe</p>
				</div>
				<div className={styles.progressBarWrap}>
					<img src={statusBarImg} alt='status-bar' />
				</div>
				<div className={styles.wrapMenu}>
					<div className={styles.itemWrapper}>
						<div className={styles.wrapImg}>
							<img src={lizardManImg} alt='lizardman' />
						</div>
						<div>
							<span className={styles.itemTitle}>Guerrier - Chaman</span>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<div className={styles.wrapImg}>
							<img src={reputationLogo} alt='reputationLogo' />
						</div>
						<div>
							<span className={styles.itemTitle}>Réputation :</span>
							<br />
							<span>+ 11k Skål</span>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<div className={styles.wrapImg}>
							<img src={scrollImg} alt='scroll' />
						</div>
						<div>
							<span className={styles.itemTitle}>Quêtes réalisées :</span>
							<br />
							<span>800</span>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<div className={styles.wrapImg}>
							<img src={bearImg} alt='bear' />
						</div>
						<div>
							<span className={styles.itemTitle}>Membre depuis :</span>
							<br />
							<span>09 déc 2017</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.sidebarBottom}>
				<div className={styles.bottomItem}>
					<div>
						<Heart width='30px' height='30px' />
					</div>
					<div>
						<span>Mes abonnements</span>
					</div>
				</div>
				<div className={styles.verticalLine}></div>
				<div className={styles.bottomItem}>
					<div>
						<Envelope width='30px' height='30px' />
					</div>
					<div>
						<span>Mes messages privés</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SideBarStatistic;
