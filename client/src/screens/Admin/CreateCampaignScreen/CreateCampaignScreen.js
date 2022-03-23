import React, { useEffect, useState } from 'react';
import { Container, Row, Form, Col, Button, } from 'react-bootstrap';
import axios from 'axios';
import Menu from './../../../components/Menu/Menu.js';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";
import countryList from 'react-select-country-list'
import checkCookies from './../../../config/checkCookies.js';


const CreateCampaignScreen = (props) => {
  const history = useHistory();
  const cookies = new Cookies();
  const [countries,setCountries] = useState([]);
  const [campaignName,setCampaignName] = useState('');
  const [devices,setDevices] = useState(['PHONE']);
  const [geos,setGeos] = useState([]);
  const [isActive,setIsActive] = useState(false);
  const [offerLink,setOfferLink] = useState('');



  const errors = {
    campaignName :{
      message : "Campaign name required",
      hasError : false
    },
    devices:{
      message : "Device is required",
      hasError : false
    },
    geos :{
      message : "Country is required",
      hasError : false
    },
    isActive :{
      message : "Country active",
      hasError : false
    },
    offerLink :{
      message : "Offerlink is required",
      hasError : false
    }
  }
  const [formErrors,setFormErrors] = useState(errors);
  useEffect(() => {
    if(checkCookies()){
      const countries = countryList().getValues().sort((a, b) => a.localeCompare(b));
      setCountries(countries);
      }else{
       history.push('/login');
      }
   
  }, []);


  const validateUser = async (uid) => {

    axios.get(`/user/${uid}`)
      .then(response => {

        if (!response.data.approved) {
          console.log('not approved go away');
          cookies.remove('at');
          cookies.remove('uid');
          history.push('/login');
          return false;
        }
        return false;
      })
      .catch(error => {
        console.log('uiderrp', error);
        history.push('/login');
        return false;
      });
    return false;
  };

  const logout = () => {
    history.push('/login');
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors  = {...formErrors};
    campaignName === '' ? newErrors.campaignName.hasError = true : newErrors.campaignName.hasError = false;
    offerLink === '' ? newErrors.offerLink.hasError = true : newErrors.offerLink.hasError = false;
    devices === '' ? newErrors.devices.hasError = true : newErrors.devices.hasError = false;
    geos === '' ? newErrors.geos.hasError = true : newErrors.geos.hasError = false;
    isActive === '' ? newErrors.isActive.hasError = true : newErrors.isActive.hasError = false;
    setFormErrors(newErrors);

    if(campaignName !== ''
      && offerLink !== ''
      && devices !== ''
      && geos !== '' 
      && isActive !== ''){
        saveCampaign();
      }
  };

  const saveCampaign = () =>{
    const at =cookies.get('at');
 
    const campaign = {
      campaignName,
      devices,
      geos,
      isActive,
      offerLink
    }

    axios.post('http://192.168.1.110:5000/api/campaigns',campaign,{
      headers: {
         'authorization':  at
       }})
      .then(response=>{          
          if(response.data.saved){
            alert('Campaign saved');
            history.push('/admin');
          }
      })
      .catch(error =>{
       console.log(error);
   });
  }


  const onValueChange = e => {
    switch (e.target.id) {
           case 'campaignName':
            setCampaignName(e.target.value);
           break;
           case 'offerLink':
            setOfferLink(e.target.value);
           break;

           default:
          break;
    }
  };


  const deviceHandler = e =>{
    let devices = [];
     switch(e.target.value){
       case 'Mobile':
         devices.push('PHONE');
         break;
         case 'Desktop':
          devices.push('DESKTOP');
         break;
         case 'Desktop & Mobile':
          devices.push('DESKTOP','PHONE');
         break;
       default:
         break;
     }
     setDevices(devices);
  };

  const geoHandler =  e =>{
    const goesList = [];
    goesList.push(e.target.value);
    setGeos(goesList);
  };

  const activeHandler = (e)=>{
   if(e.target.value === 'true'){
     setIsActive(true);
   }else{
    setIsActive(false);
   }
  }
  return (
    <>

    <Menu/>
    <Container>
    
      <Row>
        <Col>
        <h3>
          Create campain
        </h3>
        </Col>
      </Row>
      <Row>
      <Col>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="campaignName">
            <Form.Label>Campaign name</Form.Label>
            <Form.Control type="text" placeholder="Campaign Name" value={campaignName} onChange={(e) => onValueChange(e)} />
            {
             formErrors.campaignName.hasError ?  formErrors.campaignName.message :""
            } 
          </Form.Group>

          <Form.Group controlId="devices">
            <Form.Label>Device</Form.Label>
            <Form.Control as="select" custom onChange={(e) => deviceHandler(e)}>
              <option>Mobile</option>
              <option>Desktop</option>
              <option>Desktop & Mobile</option>             
            </Form.Control>
            {
             formErrors.devices.hasError ?  formErrors.devices.message :""
            } 
          </Form.Group>
          <Form.Group controlId="geos">
            <Form.Label>Geo</Form.Label>
            <Form.Control as="select" custom onChange={(e) => geoHandler(e)}>
              {
                  
                  countries.map((value,index) =>{
                    return <option key={index}>{value}</option>  
                  })
              }            
            </Form.Control>
            {
             formErrors.geos.hasError ?  formErrors.geos.message :""
            } 
          </Form.Group>
          

          <Form.Group controlId="offerLink">
            <Form.Label>Offer Link</Form.Label>
            <Form.Control type="text" placeholder="Offer Link" value={offerLink} onChange={(e) => onValueChange(e)} />
            {
             formErrors.offerLink.hasError ?  formErrors.offerLink.message :""
            } 
          </Form.Group>
          <Form.Group controlId="isActive">
            <Form.Label>Active</Form.Label>
            <Form.Control as="select" custom onChange={(e) => activeHandler(e)}>
               <option>false</option>
              <option>true</option>             
            </Form.Control>
            {
             formErrors.isActive.hasError ?  formErrors.isActive.message :""
            } 
          </Form.Group>
          <Button variant="primary" type="submit">
                    Save campaign
          </Button>
        </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
};
export default CreateCampaignScreen;