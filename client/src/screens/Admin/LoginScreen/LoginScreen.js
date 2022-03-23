import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const history = useHistory();
   

  
    useEffect(()=>{
        const cookies = new Cookies();
        if(cookies.get('at') !== undefined && cookies.get('uid') !== undefined ){
            history.push('/admin');
        }       
        
     },[history]);
     
    const errors = {
        password: {
            message: 'Password required',
            hasError: false
        },
        email: {
            message: 'Email address required',
            hasError: false
        }
    }

    const [formErrors, setFormErrors] = useState(errors);

    const login = () =>{
        const loginUser = {
            email ,
            password
        };

        axios.post('/user/login',loginUser)   
        .then(response =>{
          console.log('res',response.data);
          if(response.data.success === true){
            const cookies = new Cookies();
            cookies.set('at',response.data.accessToken, { path: '/' });
            cookies.set('uid',response.data.userId, { path: '/' });
            history.push('admin');
          }
        })
        .catch(error =>{
            console.log('error',error);        

        });

    };

    const handleSubmit = e => {
        e.preventDefault();
        const newErrors = {...formErrors};

        email === '' ? newErrors.email.hasError = true :newErrors.email.hasError = false;
        password === '' ? newErrors.password.hasError = true :newErrors.password.hasError = false;
        setFormErrors(newErrors);
        if(email !== '' && password !== ''){
            login();
        }
    };



    const onValueChange = (e) => {
        
        switch (e.target.id) {
            case 'email':                
                 setEmail(e.target.value);
                break;

            case 'password':
                setPassowrd(e.target.value);
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
                        Login
                    </h3>
                </Col>
            </Row>
            <Row>
                <Form onSubmit={(e) => handleSubmit(e)}>

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => onValueChange(e)} />
                        {
                            formErrors.email.hasError ? formErrors.email.message : ""
                        }
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => onValueChange(e)} />
                        {
                            formErrors.password.hasError ? formErrors.password.message : ""
                        }
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Login
                   </Button>
                </Form>
            </Row>
        </Container>
    )
};
export default Login;