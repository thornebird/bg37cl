import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const RegisterScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const errors = {
    userName :{
      message : 'User name required',
      hasError : false
    },
    email :{
      message : 'Email required',
      hasError : false
    },
    password :{
      message : 'Password required',
      hasError : false
    }
  };

  const [formErrors,setFormErrors] = useState(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = {...formErrors};
    userName === '' ? newFormErrors.userName.hasError =  true : newFormErrors.userName.hasError = false;
    email === '' ? newFormErrors.email.hasError =  true : newFormErrors.email.hasError = false;
    password === '' ? newFormErrors.password.hasError =  true : newFormErrors.password.hasError = false;
    setFormErrors(newFormErrors);
    if(userName !== '' && email !== '' && password !== ''){
      alert('save user');
      saveUser();
    }
      
  };

  const saveUser = () =>{
   const user = {
     name : userName,
     email : email,
     password : password
   };

   axios.post('/user/register',user)
   .then(response =>{
     //console.log(response.data);
     //alert(response.data.success);
   //  alert(response.data.userId);
     // save user id in local storage
   })
   .catch(error =>{
     console.log(error);
   });
  };

  const onValueChange = (e) => {
 
    switch (e.target.id) {
      case 'username':      
        setUserName(e.target.value);
        break;
      case 'email':      
        setEmail(e.target.value);
        break;
      case 'password':       
        setPassword(e.target.value);
      break;
      default:
      break;
    }
   
  };
  return (

    <Container className="justify-content-md-center">
      <Row>
        <Col xs={6} md={6} >
          <h3>
            Register
           </h3>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" value={userName} onChange={(e) => onValueChange(e)} />
            {
                     formErrors.userName.hasError ?  formErrors.userName.message :""
            }
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => onValueChange(e)} />
            {
                     formErrors.email.hasError ?  formErrors.email.message:""
            }
          </Form.Group>


          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => onValueChange(e)} />
            {
                     formErrors.password.hasError ?  formErrors.password.message:""
            }
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
           </Button>
        </Form>

      </Row>

    </Container>

  )
};

export default RegisterScreen;