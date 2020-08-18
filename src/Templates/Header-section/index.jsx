import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';
import {
	DarkHeader,
	MiddleHeader,
	WhiteHeader
} from '../../Organisms'


const HeaderSection = (props) => {
	return (
			<Container fluid className={styles.headerWrapper}>
				<DarkHeader/>
				<div className={styles.wrapperPosition}>
					<MiddleHeader/>
					<WhiteHeader/>
				</div>
			</Container>
	);
};

export default HeaderSection;
