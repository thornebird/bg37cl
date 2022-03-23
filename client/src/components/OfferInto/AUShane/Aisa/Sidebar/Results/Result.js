import React from 'react'
import { Image  } from 'react-bootstrap'
import styles from './Result.module.css'
const Result =(props)=>{
 return(
     <>
      <h4 className={styles.resultTitle}> Profit {props.result}</h4>
      <Image  width='100%'  src={props.image} />
      <p className={styles.comment}>{props.comment}</p>
      <p>
          <i><strong>{props.name}</strong></i>
          <br/>
          <i><strong>{props.city}</strong></i>
          </p>
      
     </>
 )
}

export default Result