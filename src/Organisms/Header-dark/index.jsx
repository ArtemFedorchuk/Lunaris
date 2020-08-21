import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Bell, Heart, Envelope } from 'react-bootstrap-icons';

import { HeaderToggleMenu } from '../../Molecules';

import logo from '../../asets/images/heder-logo.png';
import searchImage from '../../asets/images/search.png';
import avatarHeder from '../../asets/images/avatarHeader.png';

const DarkHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Container fluid className={styles.headerDark}>
			<Container>
				<Row className={styles.adaptive}>
					<Col>
						<div>
							<img className={styles.headerLogo} src={logo} alt='logo' />
						</div>
					</Col>
					<Col className='text-center'>
						<div className={styles.searchAdaptive}>
							<img src={searchImage} alt='search' />
						</div>
					</Col>
					<Col>
						<div className={styles.buttonWrapper}>
							<div className={styles.userLogo}>
								<img onClick={toggle} src={avatarHeder} alt='user-logo' />
							</div>
							<div className={styles.wrapperButtonGroup}>
								<span>Hakio</span>
								<div className={styles.buttonGroup}>
									<div className={styles.bell}>
										<Badge pill variant='danger' className={styles.bellBudge}>
											8
										</Badge>
										<Bell
											className={styles.bellBtn}
											width='20px'
											height='20px'
										/>
									</div>
									<div className={styles.heart}>
										<Heart
											className={styles.heartBtn}
											width='20px'
											height='20px'
										/>
									</div>
									<div className={styles.message}>
										<Envelope
											className={styles.envelopeBtn}
											width='20px'
											height='20px'
										/>
									</div>
								</div>
							</div>

							{isOpen ? (
								<div className={styles.menuHeader}>
									<HeaderToggleMenu />
								</div>
							) : (
								false
							)}
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default DarkHeader;
