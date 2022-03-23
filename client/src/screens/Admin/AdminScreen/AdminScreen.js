import React ,{useEffect,useState} from 'react';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";
import Menu from '../../../components/Menu/Menu.js';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import CampaignInfo from '../../../components/CampaignInfo/CampaignInfo.js'
//import checkCookies from '../../../config/checkCookies.js'
import checkCookies from '../../../config/checkCookies.js'

const AdminScreen = () =>{
 const cookies = new Cookies();
 const [campaigns,setCampaigns] = useState([]);
 const history = useHistory();
 const [showActive,setShowActive] = useState({});

 useEffect(()=>{
     if(checkCookies()){
      loadCampaigns();
     }else{
      history.push('/login');
     }

       
 },[campaigns]);



const loadCampaigns  = () =>{
const at =cookies.get('at');
 axios.get('/api/campaigns',{
 headers: {
    'authorization':  at
  }})
 .then(response=>{
     setCampaigns(response.data);
    
 })
 .catch(error =>{
  console.log(error);
 });
};


const deleteCampaign = (id) =>{
    const at =cookies.get('at');
    axios.delete(`/api/campaigns/${id}`,{
        headers: {
           'authorization':  at
         }})
        .then(response=>{
           
            console.log('response',response);
            setCampaigns(response.data.campaigns);

        })
        .catch(error =>{
         console.log(error);
    });
};
const updatedCampaign = () =>{
  setShowActive({});
  setCampaigns([],loadCampaigns);
  alert('Campaign updated');

}


const viewClicks = (id) =>{
 history.push(`/admin/campaign/${id}/clicks`);
};

const showInfo = (index) =>{
if(showActive.index === index){
  setShowActive({});
}else{
  const active = {
    index,
    active: true
  }  
  setShowActive(active);
}
};
 return(
     <>
     <Menu/>
     <Router>  
    <Container>
        
        <Row>
            <Col style={{ textAlign: "center" }} >
             <h3>Campaigns</h3>

          
            </Col>
        </Row>     
        <Row>
         <Col xs={12} md={3} >
         <h3>Name</h3>
        </Col>
        <Col xs={12} md={3} >
         <h3>Id</h3>             
        </Col>
        <Col xs={12} md={3} >
        <h3>Devices</h3>             
        </Col>
        <Col xs={12} md={3} >
        <h3>Geos</h3>                  
        </Col>
        
        </Row>
             {
                campaigns.map((campaign,index) =>{
                
                 return  <div key={index}>
                   <Row style={{ margin: 10 }} key={campaign._id}>
                     
                     <Col xs={12} md={3} onClick={() => showInfo(index)}>
                   
                        {campaign.campaignName}
                     </Col>
                     <Col xs={12} md={3} >
                     {campaign._id}
                     </Col>
                     <Col xs={12} md={2} >
                     {campaign.devices.map((device,index)=>{
                            return <div key={index}>{device}</div>
                     })         }
                     </Col>
                     <Col xs={12} md={1} >
                     {
                     campaign.geos.map((geo,index)=>{
                            return <div  key={index}>{geo}</div>
                     })                    
                     }
                     </Col>
                     <Col xs={12} md={1} >
                     {campaign.isActive ? 'Active' : 'Not Active'}
                     </Col>
                     <Col xs={12} md={1} >
                     <Button style={{ margin: 3 }} variant="danger" onClick={() => deleteCampaign(campaign._id)}>Delete</Button>
                      
                     <Button style={{ margin: 3 }} variant="primary" onClick={() => viewClicks(campaign._id)}>Clicks</Button>
                   
                    </Col>
                   
                   
                 </Row>
                 <Row style={{ margin: 10 }}>
                   <Col>
                    {
                      showActive.active && index === showActive.index?  <CampaignInfo campaign={campaign}
                       onUpdated={() => updatedCampaign()} 
                       close={() => showInfo(index)}/>:''
                    }
                   </Col>
                 </Row>
                 </div>
                })
             }
            
        
    </Container>
    </Router>
    </>
 )
};

export default AdminScreen;