import React from 'react'
import { Card, Button } from 'react-bootstrap'
const TourPackage = (props) => {

    const seeTour = () => {
        window.open(props.link)
    }

    return (
        <>
        
           
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.city}
                    </Card.Text>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Card.Text>
                        Price  : ${props.price}
                    </Card.Text>
                    <Button variant="primary" onClick={seeTour}>See Tour</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default TourPackage