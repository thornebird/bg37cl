import React, { useState, useEffect ,useRef  } from 'react';
import styles from './ZaIphone.module.css'
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import PhoneForm from '../PhoneForm/PhoneForm.js';
import DateText from '../DateText.js';
import { hotjar } from 'react-hotjar';
const PostScreen = props => {
const refCta = useRef();
  useEffect(() => {   
      window.scrollTo(0, 0);
      hotjar.initialize('2151131', '6');
  }, []);


  const ctaClicked = ()=>{ 
    refCta.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container className={styles.postContainer}>
      <Row>
        <Col>

          <ListGroup variant="flush">
            <ListGroup.Item> <h1>Do you want the latest iPhone 11 for R40 only?</h1></ListGroup.Item>
            <ListGroup.Item><span>Saving Tips <DateText /></span></ListGroup.Item>
          </ListGroup>

          

          <Col md={12} sm={12} className={styles.postBody} >
            <div className={styles.imgContainer}>
           <Image className={styles.postImg}  src='/img/iphone-main2.jpg' />
            </div>

            <p>South Africans are now able to get a new iPhone 11 for as little as R40.</p>
            <p>Recently, there has been a new trend which centres around ecommerce sites selling high-tech end luxury products for almost nothing in order to clear excess stock. Often ecom giants like Amazon, Ebay and Takealot are not able to sell their entire stock so they then sell at highly reduced prices.</p>
            <p>Getting an iphone 11 for an affordable price is something that used to be unheard of but with reduced prices South Africans are rushing to claim this great deal. </p>
            <div className={styles.imgContainer}>
            <Row>

<Col md={6} sm={6} lg={6}>
<Image className={styles.revImg}  src='/img/rec1.jpg' />
  </Col>
  <Col md={6} sm={6}>
  <Image className={styles.revImg}  src='/img/ec4.jpg' />
  </Col>
</Row>
<Row>
<Col md={6} sm={6}>
<Image className={styles.revImg}  src='/img/rec3.jpeg' />
  </Col>
  <Col md={6} sm={6}>
  <Image className={styles.revImg}  src='/img/rec4.jpg' />
  </Col>
</Row>
            </div>
            <h2><strong>Follow these steps to claim an iPhone 11 for R40</strong></h2>
            <p className={styles.note}>Please note there is limited stock. Hurry in order to secure your spot</p>
            
            <p><strong>1)</strong> Register your mobile number in the <span className={styles.cta} onClick={() => ctaClicked()}>form below.</span></p>
            <p><strong>2)</strong> You'll receieve an sms with a link to claim your iPhone 11</p>
            <p><strong>3)</strong> Follow the link in the sms and claim your new iPhone 11</p>
           
           <div ref={refCta}>
            <PhoneForm
            
              smsId='5fcd3462b32abe6b015535ad'
              geoCode='ZA'
              showPhone='true'
              landingPage='ZA iPhone v2'
              title='Want a new iPhone for R40?'
              buttonText='Claim your iPhone' />
              </div>
          </Col>
        </Col>  
      </Row>
    
      {/* <Row>

        <Col >
          <Col>
            <Image src='/img/mia.jpg' roundedCircle />
          </Col>
          <Col>

            <h6 className={styles.postName}>Mia Williams</h6>
            

          </Col>
        </Col>
      </Row> */}
    </Container>
  )
}

export default PostScreen;