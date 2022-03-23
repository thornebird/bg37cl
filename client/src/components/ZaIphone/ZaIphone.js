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
            <ListGroup.Item> <h1>Do you want to save money on the latest iPhone 11?</h1></ListGroup.Item>
            <ListGroup.Item><span>Saving Tips <DateText /></span></ListGroup.Item>
          </ListGroup>

          

          <Col md={12} sm={12} className={styles.postBody} >
            <div className={styles.imgContainer}>
           <Image className={styles.postImg}  src='/img/iphone-main2.jpg' />
            </div>

            <p>I’ve lately been on the lookout for a new phone. My iPhone 8 was a gift from my parents for my birthday three years ago and although it still works relatively well, I have been hunting for a new smartphone. iPhone 11s often retail for over R30,000 and I am not earning enough to justify such an expensive purchase. I therefore decided to do some searching and see where I could find an iPhone for less money.</p>
            <p>Recently, there has been a new trend which centres around ecommerce sites selling high-tech end luxury products for almost nothing in order to clear excess stock. Often ecom giants like Amazon, Ebay and Takealot are not able to sell their entire stock so they then sell at highly reduced prices.</p>
            <p>To begin with, I did what any other person usually does and went onto Google. After clicking through some websites, I came across this site. I found high end smartphones  being sold for amazingly low prices!</p>
            <p>I was initially sceptical and decided to do some more searching and it turns out that this is becoming very popular in some countries. These companies are not always able to sell all of their stock so they offer huge discounts to new and existing customers that have not yet purchased an iPhone from them or any other smartphone.</p>
            <p>Getting an 11 for an affordable price was a huge boost and helped me save the extra money. I was also pleased to see that using this service was pretty straightforward. To participate, you need to register your mobile number in the <span className={styles.cta} onClick={() => ctaClicked()}>form below</span> to see if you are eligible.
              Once you have registered we check that you are not an exisiting customer with any of these companies (Amazon,Ebay and Takealot).
              If you are eligible you will recieve an sms from one of them with steps to claim your discounted iPhone.
            </p>
            <div className={styles.imgContainer}>
            <Image className={styles.postImg}  src='/img/iphonepile.jpg' />
            </div>
            <h2><strong>How to register</strong></h2>
            <p>The registration is a very simple and easy process. I quickly received my sms confirming that I was eligible. The steps were very simple all I had to do was to continue to claim my iPhone.</p>
            <p>The massive discount that I managed to secure on my new iPhone was incredible! But… I still had a bit of trouble believing that it was all true. So I decided to wait for the actual delivery of my new iPhone 11 and in only a few days, it arrived directly to my home!</p>
            <p>After a couple of days adjusting to my great fortune and enjoying the benefits of a brand new iPhone 11, I still thought that I had simply had a case of beginners luck. I decided to tell my sister about it.</p>
            <p>My sister’s birthday was approaching and she was also due to start university soon, a new iPhone 11 therefore would be great for her. So I returned to see if she was eligible for an iPhone 11 and it turns out she was also. She also managed to get her  iPhone 11 for almost nothing! Considering that the iPhone 11 retails for around R30,000, this was another great save.</p>
            <p>This site is truly one of a kind! Once again, the delivery was quick and I had my package in no time at all. The customer service was also really helpful! My little sister was absolutely thrilled and I am so happy with my new iPhone.</p>
            <h2><strong>Follow these steps to see if you are eligible</strong></h2>
            <p className={styles.note}>Please note there is limited stock. Hurry in order to secure your spot</p>
            
            <p><strong>1)</strong> Register your mobile number in the <span className={styles.cta} onClick={() => ctaClicked()}>form below.</span></p>
            <p><strong>2)</strong> If you are eligible you'll receieve an sms explaining how to claim your iPhone</p>
            <p><strong>3)</strong> Follow the link in the sms and claim your iPhone 11</p>
           
           <div ref={refCta}>
            <PhoneForm
            
              smsId='5fcd3462b32abe6b015535ad'
              geoCode='ZA'
              showPhone='true'
              landingPage='ZA iPhone'
              title='See if you qualify for a discounted iPhone'
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