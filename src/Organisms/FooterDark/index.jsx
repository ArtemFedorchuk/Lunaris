import React from 'react'
import styles from './styles.module.scss'
import {Container, Row, Col} from 'react-bootstrap';

import image from '../../assets/images/footer/footer.png'

const DarkFooter = () => {
    return (
        <Container fluid className={styles.footerDark}>
            <Container>
                <Row>
                    <Col>
                        <img src={image} alt="footer content" className={styles.footerImage}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default DarkFooter;