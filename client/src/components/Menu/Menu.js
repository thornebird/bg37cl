import React from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";
const Menu  = ()=>{

const history = useHistory();
const logout =() =>{
    
    const cookies = new Cookies();
    cookies.remove('at');
    cookies.remove('uid');
    history.push('/login');
   

};
return(
  
    <Navbar bg="primary" variant="dark">
    
    <Nav className="mr-auto">      
      <Nav.Link as={Link} to="/admin">Campaigns</Nav.Link>     
      <Nav.Link as={Link} to="/admin/campaigns/create"> Create Campaign</Nav.Link>    
      <Nav.Link as={Link} to="/admin/leads"> Leads</Nav.Link>      
      <Nav.Link as={Link} to="/admin/sms"> Sms Campaign</Nav.Link>     
      <Button variant="primary" onClick={()=> logout()}>Logout</Button>
    </Nav>
   
  </Navbar>
) 
};

export default Menu;