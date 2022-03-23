import React ,{useState,useEffect} from 'react'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import countryList from 'react-select-country-list';
import Cookies from 'universal-cookie';
import axios from 'axios';

const CampaignScreen  = (props) =>{
    const cookies = new Cookies();
    
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
        setCampaignName(props.campaign.campaignName);
        setDevices(props.campaign.devices);
        setGeos(props.campaign.geos);
        setOfferLink(props.campaign.offerLink);
        setIsActive(props.campaign.isActive);

      
      }, []);
    
      
     
    
      
    
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
            updateCampaign();
          }
      };
    
      const updateCampaign = () =>{
        props.onUpdated();
        const at =cookies.get('at');
     
        const campaign = {
          campaignName,
          devices,
          geos,
          isActive,
          offerLink
        }
    
        axios.post(`http://192.168.1.110:5000/api/campaigns/update/${props.campaign._id}`,campaign,{
          headers: {
             'authorization':  at
           }})
          .then(response=>{          
              if(response.data.saved){
                alert('Campaign updated');             
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

 return(
     <>
     <Container>
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
            <Form.Control type="text" disabled='true' placeholder="Campaign devices" value={devices} onChange={(e) => onValueChange(e)} />
           
            {
             formErrors.devices.hasError ?  formErrors.devices.message :""
            } 
          </Form.Group>
          <Form.Group controlId="geos">
            <Form.Label>Geo</Form.Label>
            <Form.Control type="text" disabled='true' placeholder="Campaign goes" value={geos} onChange={(e) => onValueChange(e)} />
           
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
            <Form.Control as="select" custom onChange={(e) => activeHandler(e)} defaultValue={props.campaign.isActive}>
               <option>false</option>
              <option>true</option>             
            </Form.Control>
            {
             formErrors.isActive.hasError ?  formErrors.isActive.message :""
            } 
          </Form.Group>
         
          <Row>
          <Col>
          <Button  variant="primary" type="submit">
                    Update campaign
          </Button>
          </Col>
          <Col>
          <Button   variant="danger"  onClick={props.close}>
                    Close
          </Button>
          </Col>
          </Row>
          
         
        </Form>
        </Col>
     </Container>
     </>
 )
};

export default CampaignScreen;