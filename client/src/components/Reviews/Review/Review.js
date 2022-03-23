import React ,{useEffect} from 'react';
import {  Row, Col, Image} from 'react-bootstrap';
import styles from './Review.module.css';
const Review  = (props) =>{
 
 return(
     <>
     <Row className={styles.container}>
      <Col sm={1} md={1}>
      <Image className={styles.img} roundedCircle  fluid  src={props.review.img}/>
      </Col>
      <Col sm={10} md={10}>
          <Row className={styles.review}>
              <Col className={styles.name} >
             <strong>{props.review.name}</strong> 
              </Col>              
          </Row>  
          <Row className={styles.review}>
          <Col> 
            { props.review.review} 
            <div className={styles.likes}>
             {props.review.likes}
            </div>
          </Col>          
         </Row>
      
      </Col>
     
      
     </Row>
    
     </>
 )
};

export default Review;