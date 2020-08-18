import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import { DarkHeader, MiddleHeader } from '../../Organisms'


const HeaderSection = (props) => {
	return (
			<Container fluid className={styles.headerWrapper}>
				<DarkHeader/>
				<MiddleHeader/>
			</Container>
	);
};

export default HeaderSection;
