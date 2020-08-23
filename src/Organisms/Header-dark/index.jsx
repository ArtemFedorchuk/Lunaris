import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Bell, Heart, Envelope } from 'react-bootstrap-icons';

import { HeaderToggleMenu } from '../../Molecules';
import SearchInfo from '../../Atoms/Search';

import logo from '../../assets/images/heder-logo.png';
import avatarHeader from '../../assets/images/avatarHeader.png';

const DarkHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Container fluid className={styles.headerDark}>
			<Container>
				<Row className={styles.adaptive}>
					<Col>
						<div>
							<a href='#'>
								<img className={styles.headerLogo} src={logo} alt='logo' />
							</a>
						</div>
					</Col>
					<Col className='text-center'>
						<div className={styles.searchAdaptive}>
							<SearchInfo />
						</div>
					</Col>
					<Col>
						<div className={styles.buttonWrapper}>
							<div className={styles.userLogo}>
								<img onClick={toggle} src={avatarHeader} alt='user-logo' />
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
