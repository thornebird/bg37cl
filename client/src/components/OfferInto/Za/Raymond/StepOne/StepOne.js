import React from 'react'
import { Container, Col, Row, Button, Image, Spinner } from 'react-bootstrap';
import styles from './StepOne.module.css'


const StepOne = (props) => {

    const stepOneClicked = () => {
        props.onStepOneClicked()
    }

    return (

        <>
        
        <Container className={styles.center}>
            
            <Row>
            <Col md={10}>
                    <h2>Are you eligible to work from home?</h2>
                    <Image className={styles.img} width='100%' src='/img/main1.PNG' />
                    <Image className={styles.mainImg} width='100%' src='/img/ray.jpg' />
                    <p>
                        Most South Africans are already eligible to start working from home.
                   </p>
                   <p>
                        Working from home is something everybody can benefit from. Now is a better time than ever to start.
                        If you would like to learn more about working from home click to continue.
                    </p>
                </Col>
            </Row>
            <Row>

                <Col>

                    <Button className={styles.space} onClick={() => stepOneClicked()} size="lg" block>

                        {
                            props.isBtnClicked ? <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner> : 'Continue to learn about working from home.'
                        }
                    </Button>
                </Col>

            </Row>
        </Container>
        </>
    )
}

export default StepOne