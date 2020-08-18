import React from 'react'
import styles from './styles.module.scss'
import { Container, Row, Col } from 'react-bootstrap';

const Copyright = () => {
    return (
        <Container fluid className={styles.copyright}>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start">
                        <p>© 2018 JeuGeek.com édité par Geekraft. Tous droits réservés.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Copyright;