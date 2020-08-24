import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import layerImg from '../../assets/images/layers.png';

const WhiteHeader = () => {
	const [mobShow, setMobShow] = useState(); // mobile window header
	const [mobMenu, setMobMenu] = useState(false);

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
								<li>
									<a href='#'>Profil</a>
								</li>
								<li>
									<a href='#'>Mur</a>
								</li>
								<li>
									<a href='#'>Armurerie</a>
								</li>
								<li>
									<a href='#'>Creations</a>
								</li>
								<li>
									<a href='#'>Listes</a>
								</li>
								<li>
									<a href='#'>Abo</a>
								</li>
							</ul>
						</div>
					)}
				</div>
			) : (
				<Container className={styles.whiteHeaderWrapper}>
					<Row>
						<Col md={2} sm={1} className='text-right'>
							<a href='#'>
								<img className={styles.layerImg} src={layerImg} alt='layer' />
							</a>
						</Col>
						<Col md={10} className={styles.menuItemsWrappers}>
							<div className={styles.toggleBtn}>
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
							</div>
							<div className={styles.wrapperMenu}>
								<ul>
									<li>
										<a href='#'>Profil</a>
									</li>
									<li>
										<a href='#'>Mur</a>
									</li>
									<li>
										<a href='#'>Armurerie</a>
									</li>
									<li>
										<a href='#'>Creations</a>
									</li>
									<li>
										<a href='#'>Listes</a>
									</li>
									<li>
										<a href='#'>Abo</a>
									</li>
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
