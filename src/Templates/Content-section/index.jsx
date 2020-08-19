import React from 'react';
import styles from './styles.module.scss';
import { Banner, Ranking, SideBarStatistic } from '../../Organisms';
import { Container, Row, Col } from 'react-bootstrap';

const ContentSection = (props) => {
	return (
		<main className={styles.main}>
			<Container fluid>
				<Row>
					<Banner />
					<Ranking />
				</Row>
				<Row>
					<Col>
						<SideBarStatistic />
						<p>User list</p>
					</Col>
					<Col>
						<h2>Games list</h2>
					</Col>
				</Row>
			</Container>
		</main>
	);
};

export default ContentSection;
