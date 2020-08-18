import React from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';

const MiddleHeader = () => {
  return (
    <Container fluid className={styles.middleHeaderWrapper}>
      <Container>
        <Row>
          <Col>
            <span className={styles.headerTittle}>
              Actu de mes favoris
            </span>
          </Col>
          <Col className='text-right'>
            <House />
          </Col>
        </Row>
      </Container>
    </Container>
  )
};

export default MiddleHeader;