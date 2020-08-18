import React from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const ContentSection = (props) => {
	const text = 'Content section';

	return (
			<Container>
				<Row>
					<Col>
						<h1 className={styles.h1}>{text}</h1>
					</Col>
				</Row>
			</Container>
	);
};

export default ContentSection;
