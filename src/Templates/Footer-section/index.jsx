import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import { DarkFooter, FooterPartners, Copyright } from '../../Organisms/index';

const FooterSection = (props) => {
	return (
		<Container fluid className={styles.footer}>
			<FooterPartners />
			<DarkFooter />
			<Copyright />
		</Container>
	);
};

export default FooterSection;
