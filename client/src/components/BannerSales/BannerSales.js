import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const BannerSales =()=>{
const history = useHistory()

 const contact = ()=>{
  history.push('/contact-us')
 }
   
 return(
     <>
        <div>
          <h3>Why book with Us?</h3>
          <p>
          Spontaneity needs convenience and our team of experts are available around the clock ensure just that.
          </p>
        </div>    
        <div>
          <h3>Have any questions?</h3>
          <p>
          Can’t decide which experience to pick? Our Customer Happiness Experts are available 24/7 to help you out.
          </p>
        </div>
        <div>
        <Button variant="primary" onClick={contact}>Get a quote</Button>
        </div>
     </>
 )
}

export default BannerSales