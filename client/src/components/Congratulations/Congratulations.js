import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import styles from './Congratulations.moduls.css';

const Congratulations = (props) => {
    return (
        <Row>
            <Col sm={12} md={12}>
                <h3>  Your package is reserved for you!</h3>
                <Image src='/img/tak.jpg' width='100%' height='250px' fluid />
            </Col>
            <Col sm={12} md={12}>
                <Button variant="primary" size="lg" block onClick={props.claim}>
                    Click here to get it. Thank you for participating in our survey.
                </Button>
            </Col>



        </Row>
    )
};
export default Congratulations;