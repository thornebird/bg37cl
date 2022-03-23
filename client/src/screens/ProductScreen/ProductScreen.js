import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import StepOne from '../../components/StepOne/StepOne.js';
import CheckoutForm from './../../components/CheckoutForm/CheckoutForm.js';
import Presale from '../../components/TravelZA/Presale.js';
import styles from './ProductScreen.module.css'
import { saveData } from './../../config/saveData.js';

import Footer from './../../components/Footer/Footer.js';
const ProductScreen = (props) => {
     const [clickedCta, setClickedCta] = useState(false);
     const [isTracked, setIsTracked] = useState(false);
     const [cid,setCid] = useState('');
     const [url,setUrl] = useState('');
     const [ip,setIp] = useState('');
//https://searchthese.net/index.php?rgid=103719&obOrigUrl=true
     useEffect(() => {
          const cid  = new URLSearchParams(props.location.search).get("cid");
          setCid(cid);
          saveData();
          
     }, []);

     const onCta = (isValid, link,ip) => {
          if (isValid) {
               setUrl(link);
               setIsTracked(true);
               setIp(ip);
          }
          setClickedCta(true); 
     };

     return (
          <>
          <Container fluid>
          
               {
                 !clickedCta ? <StepOne onCta={(valid, link,ip) => onCta(valid, link,ip)} cid={cid}/> :''
               }
               {
              //   clickedCta  && !isTracked ? <CheckoutForm discountApplied={true} />: ''
               //clickedCta  && !isTracked ? 'safe quiz': ''
               }
               {
                  clickedCta ? <Presale cid={cid} tracked={isTracked} url={url} ip={ip}/>:''
               }         
          </Container>
          </>
     )
};

export default ProductScreen;