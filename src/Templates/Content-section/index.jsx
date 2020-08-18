import React from 'react';
import styles from './styles.module.scss';
import {Banner, Ranking} from "../../Organisms";

const ContentSection = (props) => {

	return (
		<main className={styles.main}>
			<Banner />
			<Ranking />
		</main>
	);
};

export default ContentSection;
