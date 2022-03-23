import React, { useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import styles from './Intro.module.css'
import Presale from './Presale.js'

const Intro = props=>{
const [agreed,setAgreed] = useState(false)

 const introClick = ()=>{
  setAgreed(true)
  props.introClick()
 }
 return(
     <Container className={styles.center}>
       <Row>
          
           <Presale completeQuiz={()=>introClick()}/>
       
       </Row>
       
     </Container>
 )
}

export default Intro