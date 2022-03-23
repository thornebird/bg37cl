import React from 'react';
import {  Col, Row,  ListGroup  } from 'react-bootstrap';

const CheckoutSummary = (props)=>{
const fixedShipping = props.shippingPrice;
const fShippping  =fixedShipping.toFixed(2);

return(
  <ListGroup>
      <ListGroup.Item>
        <Row>
        <Col xs={6} md={6} lg={6}>
        <h6>Item</h6>
        </Col>
        <Col xs={6} md={6} lg={6}>
         <h6>Amount</h6>
        </Col>
        </Row>
        <Row>
        <Col xs={6} md={6} lg={6}>
        Product description: {props.productName}
        </Col>
        <Col xs={6} md={6} lg={6}>
        ${props.price}
        </Col>
           
        </Row>
        <Row>
        <Col xs={6} md={6} lg={6}>
         Shipping:
        </Col>
        <Col xs={6} md={6} lg={6}>
        ${fShippping}
        </Col>
           
        </Row>   
        <Row>
        <Col xs={6} md={6} lg={6}>
         Grand Total:
        </Col>
        <Col xs={6} md={6} lg={6}>
        ${props.total}
        </Col>
           
        </Row>  
      </ListGroup.Item>
  </ListGroup>
)
};

export default CheckoutSummary;