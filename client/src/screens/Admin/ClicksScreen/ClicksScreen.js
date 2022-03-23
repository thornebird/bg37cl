import React ,{useEffect,useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";
import checkCookies from './../../../config/checkCookies.js';
import Menu from '../../../components/Menu/Menu.js';
//import Menu from '../../../../components/Menu/Menu.js';

const ClicksScreen = ({match}) =>{
const history = useHistory();
const cookies = new Cookies();
const [clicks,setClicks] = useState([]);

useEffect(()=>{
  if(checkCookies()){
   loadClicks();
   }else{
    history.push('/login');
   }
 
},[]);




  
const loadClicks = ()=>{
 //alert('load clicks');
};

 return(
     <>
     <Menu/>
     clicks screen  {match.params.campaignId}
     </>
 )
};
export default ClicksScreen;