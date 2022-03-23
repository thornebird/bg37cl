  
import React from 'react';
import { Form, Alert } from 'react-bootstrap';


const FormInput = (props)=>{
 return(
    <Form.Group controlId={props.id}>
    <Form.Label>{props.label}</Form.Label>
    <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} onChange={(e) => props.onValueChange(e)} />
    {props.error ?
    <div className="py-1">
      <Alert  variant='danger'>
      {props.errorMessage}
    </Alert> 
    </div>   
    : ''}
   </Form.Group>
 )
}

export default FormInput;