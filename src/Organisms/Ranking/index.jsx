import React from 'react';
import styles from './styles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import profileBadge from '../../asets/images/ranking/profile-badge.png';
import diamandRank from '../../asets/images/ranking/badge-diamant_copie.png';
import boisRank from '../../asets/images/ranking/badge-bois_(1).png';

const Ranking = () => {
    return (
        <Container fluid className={styles.ranking}>
            <Container className="d-flex align-items-center justify-content-between">
                <Row className={styles.row}>
                    <Col>
                        <img src={profileBadge} alt="" className={styles.badge} />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-start">
                        <div className={styles.rankBadge}>
                            <img src={diamandRank} alt=""/>
                            <p className={styles.text}>
                                <strong>Classement mensuel: </strong> 1ère position
                            </p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-start">
                        <div className={styles.rankBadge}>
                            <img src={boisRank} alt=""/>
                            <p className={styles.text}>
                                <strong>Classement mensuel: </strong> 1ère position
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Ranking;