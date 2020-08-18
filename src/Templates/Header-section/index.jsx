import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import { DarkHeader } from '../../Organisms'


const HeaderSection = (props) => {
	return (
			<Container fluid className={styles.headerDark}>
				<DarkHeader/>
			</Container>
	);
};

export default HeaderSection;
