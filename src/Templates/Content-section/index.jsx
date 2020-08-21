import React from 'react';
import styles from './styles.module.scss';
import {
	Banner,
	Ranking,
	SideBarStatistic,
	NewsList,
	UsersCardMenu,
} from '../../Organisms';
import { Container, Row, Col } from 'react-bootstrap';

const ContentSection = (props) => {
	const { data } = props;
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
							<div className={styles.block}></div>
							<UsersCardMenu />
						</Col>
						<Col className={styles.newsList}>
							<NewsList data={data} />
						</Col>
					</Row>
				</Container>
			</Container>
		</main>
	);
};

export default ContentSection;
