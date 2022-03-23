import React from 'react';
import styles from './Footer.module.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (

            <Row>
            <Col className={styles.terms}>
                    {/* <p>Copyright {window.location.hostname} © 2020</p> */}
              
                    <Link to='/privacy-policy'>Privacy policy</Link> | <Link to='/terms-and-conditions'>Terms & Conditions</Link> | <Link to='/contact-us'>Contact us</Link>
                
            </Col>
            </Row>
  

    )
};

export default Footer;