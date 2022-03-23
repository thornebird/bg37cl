import React from 'react';
import {  Row, Col, Button, Image} from 'react-bootstrap';
import {checkData} from './../../config/saveData.js';

import styles from './StepOne.Module.css';
import axios from 'axios';


const StepOne =  props =>{

  
  const validate = () =>{
    if(checkData()){
       trackClick();
    }
 };

  const trackClick = () =>{
      const cid  =  props.cid;
      axios.post(`http://192.168.1.110:5000/api/clicks`,{
      campaignId : cid })
      .then(response =>{
          console.log('res',response);    
          const {isValid,link,ip} =response.data;             
          props.onCta(isValid,link,ip);
          
      })
      .catch(err =>{
          console.log('err',err);
      });
  }

  return(
      <>
     
      <Row style={{textAlign :'center'}}>
     
        <Col className={styles.container}>

          <h3>iPhone 12 Essential Quiz</h3>
         <Image fluid src='/img/main.png'/>
        </Col> 
      </Row>
      <Row style={{textAlign :'center' }}>
        <Col md={12} sm={12}>
         
          <p>
           Most South Africans don't know how to save up to 90% when buying a new iPhone
          </p>
          <p>
           Complete the quiz on the next page and save up to 90% when getting a new iPhone.
          </p>          
          <p>          
            Hurry since these iPhone deals don't last very long since there is such a high demand for them. 
          </p>
        </Col> 
      </Row>
      <Row style={{textAlign :'left'}}>
          <Col>
          <Button  size="lg" block variant="primary" onClick={() => validate()}>Start quiz</Button>
          </Col>
      </Row>
    
      </>
  )

};

export default StepOne;