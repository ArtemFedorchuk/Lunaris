import React from 'react';
import styles from './styles.module.scss';
import {
	Pencil,
	Power,
} from 'react-bootstrap-icons';

import progressImgOne from '../../assets/images/menuProgresBar-1.png';
import progressImgTwo from '../../assets/images/menuProgressBar-2.png';
import monBtnImg from '../../assets/images/monBtn.png'
import scriptBtnImg from '../../assets/images/scriptBtn.png'
import settingBtnImg from '../../assets/images/settingBtn.png';
import cristalImg from '../../assets/images/cristal.png';

const HeaderToggleMenu = (props) => {

	return (
			<div className={styles.menuWrapper}>
				<div className={styles.progressBarOne}>
					<img src={progressImgOne} alt='progress-bar'/>
				</div>
				<div className={styles.progressBarTwo}>
					<img src={progressImgTwo} alt='progress-bar'/>
				</div>
				<div className={styles.itemWrapper}>
					<div>
						<img src={monBtnImg} alt='moon'/>
					</div>
					<div>
						<span>
							Mon profil
						</span>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div>
						<img src={scriptBtnImg} alt='script'/>
					</div>
					<div>
						<span>
							Mes quetes
						</span>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div>
						<img src={settingBtnImg} alt='setting'/>
					</div>
					<div>
						<span>
							Parametres
						</span>
					</div>
				</div>
				<div className={styles.bottomMenuBtn}>
					<div className={styles.cristalWrapper}>
						<div>
							<img src={cristalImg} alt='cristal'/>
						</div>
						<div>
							<span>1.4k</span>
						</div>
					</div>
					<div className={styles.pencilBtn}>
						<Pencil width="20px" height="21px"/>
					</div>
					<div className={styles.powerBtn}>
						<Power width="20px" height="21px"/>
					</div>
				</div>

			</div>
	);
};

export default HeaderToggleMenu;
