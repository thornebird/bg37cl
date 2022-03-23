import React ,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
const CtaButton = props =>{
const [btnText,setBtnText] = useState('')

useEffect(()=>{
let text = ''
switch(props.lang){
    case 'ENG':
    text = 'Click To Join.'
    break;
    default:
    text = 'Click To Join.'
    break;
}
setBtnText(text)

},[])

 return(
   
     <Button className="fixed-bottom btn btn-success" size="lg" block onClick={() => props.ctaClick()}>            
     {btnText}  
    </Button>
   
 )
}

export default CtaButton