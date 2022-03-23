import React from 'react';
import { Card, Button } from 'react-bootstrap';

const QuizCard = (props) => {

    return (

        <Card style={{ margin: '10px' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
             </Card.Text>
                <Button  size="lg" block variant="primary"  onClick={props.startQuiz}>Start quiz</Button>
            </Card.Body>
        </Card>

    )
};

export default QuizCard;