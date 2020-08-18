import React from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const FooterSection = (props) => {
	const text = 'Footer section';

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

export default FooterSection;
