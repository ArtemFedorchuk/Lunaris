import React from 'react';
import styles from './styles.module.scss';
//img
import statusBarImg from '../../asets/images/menuProgressBar-2.png';

const SideBarStatistic = () => {
	const text = 'SideBarStatistic';

	return (
		<div className={styles.wrapperStatistic}>
			<div className={styles.statisticLogo}>
				<img src='' alt='logo' />
			</div>
			<div>
				<h2>Hakio</h2>
				<p>dit le Fourbe</p>
			</div>
			<div>
				<img src={statusBarImg} alt='status-bar' />
			</div>
      <div>
        <div>
          <img src='' alt='logo'/>
        </div>
      </div>
		</div>
	);
};

export default SideBarStatistic;
