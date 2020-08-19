import React from 'react';
import styles from './styles.module.scss';
import {
	Banner,
	Ranking,
	SideBarStatistic,
	UsersCardMenu,
} from '../../Organisms';
import { Container, Row, Col } from 'react-bootstrap';

const ContentSection = (props) => {
	return (
		<main className={styles.main}>
			<Container fluid>
				<Row>
					<Banner />
					<Ranking />
				</Row>
				<Container className='justify-content-between'>
					<Row>
						<Col>
							<SideBarStatistic />
							<UsersCardMenu />
						</Col>
						<Col>
							<h2>Games list</h2>
						</Col>
					</Row>
				</Container>
			</Container>
		</main>
	);
};

export default ContentSection;
