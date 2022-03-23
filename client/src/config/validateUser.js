import axios from 'axios';
import Cookies from 'universal-cookie';

const validateUser = async () =>{
    const cookies = new Cookies();
    const uid =  cookies.get('uid');
    axios.get(`http://192.168.1.110:5000/user/${uid}`)
    .then(response =>{     
     if(!response.data.approved){
         console.log('not approved go away');       
         cookies.remove('at');
         cookies.remove('uid');        
         return false;
     }else{
       return true;
     }  
    })
    .catch(error =>{
      console.log(error);
      return false;
    });
    return false;
  };


  export default validateUser;