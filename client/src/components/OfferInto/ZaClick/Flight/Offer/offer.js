import React,{useEffect,useState} from 'react'
import Iframe from 'react-iframe'

const Offer = (props)=>{
 


    
    

  return(
    <Iframe url={props.url}
    width="100%" 
    height={props.height}
    frameBorder='0'
    allowfullscreen    />
  )
}
export default Offer