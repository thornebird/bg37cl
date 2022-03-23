import React , {useEffect,useState,useRef} from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import styles from './ClientMenu.module.css';
import { Link } from 'react-router-dom';

const ClientMenu = () =>{

    
 return(

  <Navbar  collapseOnSelect expand="lg" variant="light"  className={styles.HeaderNav}>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Brand  as={Link} to='/'>
     <div>
        <h4>{window.location.hostname}</h4>
        
      </div>
    </Navbar.Brand> 
  <Navbar.Collapse id="responsive-navbar-nav">

 
    <Nav className="mr-auto">
      <Nav.Link as={Link} to='/travel-africa'>Travel Africa</Nav.Link>
      <Nav.Link as={Link} to='/travel-europe'>Travel Europe</Nav.Link>
      <Nav.Link as={Link} to='/travel-packages'>Tour guide packages</Nav.Link>
      <Nav.Link as={Link} to='/about-us'>About us</Nav.Link>
      <Nav.Link as={Link} to='/contact-us'>Contact us</Nav.Link>
    </Nav>
    </Navbar.Collapse>

  </Navbar>

 )
};

export default ClientMenu;