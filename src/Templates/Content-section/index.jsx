import React from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import {Banner} from "../../Organisms";

const ContentSection = (props) => {

	return (
		<main className={styles.main}>
			<Banner />
		</main>
	);
};

export default ContentSection;
