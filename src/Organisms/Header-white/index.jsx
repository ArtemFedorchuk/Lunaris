import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import layerImg from '../../asets/images/layers.png';
import { CategoryToggleMenu } from '../../Molecules';

const WhiteHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [mobShow, setMobShow] = useState();
	const [mobMenu, setMobMenu] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const mobToggle = () => setMobMenu(!mobMenu);

	window.onresize = (e) => {
		const windowWith = document.documentElement.clientWidth;

		if (windowWith <= 575) {
			return setMobShow(true);
		} else {
			return setMobShow(false);
		}
	};

	return (
		<>
			{mobShow ? (
				<div className={styles.mobWrapper}>
					<button className={styles.mobBurger} onClick={mobToggle}>
						<svg
							width='50px'
							height='50px'
							viewBox='0 0 16 16'
							className='bi bi-border-width'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z' />
						</svg>
					</button>
					{mobMenu && (
						<div className={styles.mobileMenu}>
							<ul>
								<li>Profil</li>
								<li>Mur</li>
								<li>Armurerie</li>
								<li>Creations</li>
								<li>Listes</li>
								<li>Abo</li>
							</ul>
						</div>
					)}
				</div>
			) : (
				<Container className={styles.whiteHeaderWrapper}>
					<Row>
						<Col md={2} sm={1} className='text-right'>
							<img className={styles.layerImg} src={layerImg} alt='layer' />
						</Col>
						<Col md={10} className={styles.menuItemsWrappers}>
							<div onClick={toggle} className={styles.toggleBtn}>
								<div>
									<span className={styles.toggle}>Hakio</span>
									<svg
										width='1em'
										height='1em'
										viewBox='0 0 16 16'
										className='bi bi-chevron-down'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fill-rule='evenodd'
											d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
										/>
									</svg>
								</div>
								{isOpen ? (
									<div className={styles.toggleMenu}>
										<CategoryToggleMenu />
									</div>
								) : (
									false
								)}
							</div>
							<div className={styles.wrapperMenu}>
								<ul>
									<li>Profil</li>
									<li>Mur</li>
									<li>Armurerie</li>
									<li>Creations</li>
									<li>Listes</li>
									<li>Abo</li>
								</ul>
							</div>
						</Col>
					</Row>
				</Container>
			)}
		</>
	);
};

export default WhiteHeader;
