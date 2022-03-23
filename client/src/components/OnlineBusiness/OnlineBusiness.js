import React from 'react'
import { Container, Row, Col, Card, Form ,Button,Modal} from 'react-bootstrap';
import styles from './OnlineBusiness.modules.css'

class FreeLancer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           open : false,
           name:'',
           phone:''           
       } 
    }
   
    onInputChange= (e) =>{
        switch(e.target.id){
            case 'name': 
            this.setState({name:e.target.value})
             break;
            case 'phone':
                this.setState({phone:e.target.value})
            break;

            default:
                break;
        }
    }
   
    signedUp(){
       if(this.state.phone.length > 0 && this.state.name.length > 5){
           this.setState({open:true})
       }else{
           alert('Invalid detais...')
       }
    }
    handleClose(){
       this.setState({open:false})
    }

    render() {
        return <Container className={styles.container} >
            <Modal show={this.state.open} onHide={()=>this.handleClose()}>
          <Modal.Header closeButton>
          <Modal.Title>Thank you for signing up for a consultation.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            A memeber of our team will be in contatct with you
        </Modal.Body>

      </Modal>
            <Row>
                <Col className={styles.heading}>
                    <h3>We Help Business Move Online And Make Money Online. Work Smarter Not Harder !</h3>
                    <p>Sign up for a consultation and discover how you can move your business online and how your business can earn more money online.
                   </p>
                    <p>
                        When it comes to doing business, the only thing constant is change. To be competent in the market, it is very important for businesses to know their customer’s needs and be innovative. Every business has its own way of doing the thing that might have worked for years, even decades, but not necessarily these methods going to the work for you longer because in this constantly changing world the demand of the customers also changes with time. The best time to realize it’s time for a change is before that change is necessary. If you wait for your customers to tell you to move online, it’s already too late. You’ve lost them.
                     </p>
                    <p>
                        As we know that in this world of digitalization, the buying behaviour of the customers also changing that makes it essential for the businesses to go online to access more customers and increase their visibility in the market. In this article, I would share with you some of the most essential tips to move your business online. Moving your business online is a daunting task if you’re not entirely comfortable with building websites and marketing yourself through social media and traditional online channels. Fortunately, Rome wasn’t built in a day and your online business doesn’t have to be either. All you need to do is keep moving forward.
                     </p>
                </Col>


            </Row>
            <Row>
                <Col>
                    <Form>
                        <Row>
                            <Col>
                            <Form.Group controlId="name">
                                <Form.Control   onChange={(e) => this.onInputChange(e)}  value={this.state.name} placeholder="First name" />
                            </Form.Group>
                            </Col>
                            
                            <Col>
                            <Form.Group controlId="phone">

                                <Form.Control  value={this.state.phone} onChange={(e) => this.onInputChange(e)}   type="phone" placeholder="Phone number" />

                            </Form.Group>
                            </Col>
                            <Button variant="primary" onClick={()=>this.signedUp()}>
                             Call me for a consultation
                           </Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>What You’ll Learn With Our Consulation</h3>

                </Col>
            </Row>
            <Row>
                <Col md={3} sm={12}>
                    <Card className={styles.cardImg}>
                        <Card.Img variant="top" src="/img/business.jpg" />
                        <Card.Body>
                            <Card.Title>How your business can reach more customers online.</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card className={styles.cardImg}>
                        <Card.Img variant="top" src="/img/trainging.jpg" />
                        <Card.Body>
                            <Card.Title>How your business can generate more sales online.</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card className={styles.cardImg}>
                        <Card.Img variant="top" src="/img/video.jpg" />
                        <Card.Body>
                            <Card.Title>How to advertise your business online and moentaize your business website.</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={1}>
                    <Card className={styles.cardImg}>
                        <Card.Img variant="top" src="/img/master.jpg" />
                        <Card.Body>
                            <Card.Title>Insights and goal setting for your online business.</Card.Title>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>A few testimonials from business owners that use our trusted system.</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4} sm={1}>
                    <Card className={styles.cardImg}>
                        <Card.Img variant="top" src="/img/jj.jpg" />
                        <Card.Body>
                            <Card.Title>Joanne.</Card.Title>
                            <Card.Text>
                                We helped grow Joanne's restaurant online and increased her companies online sales by building an automated ordering system.
                           </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={1}>
                    <Card className={styles.cardImg}>
                        <Card.Img variant="top" src="/img/couple.jpg" />
                        <Card.Body>
                            <Card.Title>Paul & Helena</Card.Title>
                            <Card.Text>
                                There botique soap shop went from $1,000 in sales to over $10,000 in sales a month by advertising their business online.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={1}>
                    <Card className={styles.cardImg}>
                        <Card.Img variant="top" src="/img/Lilibeth.jpg" />
                        <Card.Body>
                            <Card.Title>Lilibeth</Card.Title>
                            <Card.Text>
                                Lilibeth'a chinese restaurant reached 1,000 monthly orders after we started advertising her business on google.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <Row>
                <Col>
                    <h4>Do Not Miss This Chance To Earn More</h4>
                </Col>
            </Row>
        </Container>
    }
}

export default FreeLancer