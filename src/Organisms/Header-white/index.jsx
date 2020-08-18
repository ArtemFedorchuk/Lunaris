import React from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const WhiteHeader = () => {
  return (
    <Container className={styles.whiteHeaderWrapper}>
      <Row>
        <Col>
          <p>white header</p>
        </Col>
      </Row>
    </Container>
  )
};

export default WhiteHeader;