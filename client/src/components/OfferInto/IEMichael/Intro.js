import React, { useState } from 'react';
import { Container, Row,Button,Col} from 'react-bootstrap';
import styles from './Intro.module.css'
import Presale from './Presale.js'
import Header from './Header/Header.js';

const Intro = props=>{
const [agreed,setAgreed] = useState(false)

 const introClick = ()=>{
  setAgreed(true)
  props.introClick()
 }
 return(
     <Container className={styles.center}>
       <Row>
       
           
           <Presale completeQuiz={()=>introClick()} videoSrc={props.videoSrc}/> 
       
       </Row>
      
  
       
     </Container>
 )
}

export default Intro