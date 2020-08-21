import React from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

import amazon from '../../asets/images/footer/Amazon_appstore_logo_(partnership).png';
import gp from '../../asets/images/footer/Gamesplanet_logo_(partnership).png';
import nox from '../../asets/images/footer/Nox_logo_(partnership).png';
import lacomte from '../../asets/images/footer/La_Comte_du_Geek_logo_(partnership).png';

const FooterPartners = () => {
	return (
		<Container fluid className={styles.footerPartners}>
			<Container>
				<Row className={styles.rowWrapper}>
					<Col className='d-flex justify-content-between align-items-center flex-wrap'>
						<p>Nos partenaires :</p>
						<img src={amazon} alt='Amazon appstore' />
						<img src={gp} alt='Gamesplanet' />
						<img src={nox} alt='Nox logo' />
						<img src={lacomte} alt='La Comte du Geek' />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default FooterPartners;
