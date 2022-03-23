import React, { useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import styles from './Intro.module.css'
import Presale from '../Presale.js'
// import Article from '../Into/Article/Article.js'
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
           {/* <Article/> */}
           {/* <Col>
            
            <p>We use cookies on our website to give you the most relevant experience.</p>
            <Button onClick={()=>introClick()}><h4>{ ! agreed ?'Continue reading':'Loading...'}</h4></Button>
           </Col> */}
       </Row>
       
     </Container>
 )
}

export default Intro