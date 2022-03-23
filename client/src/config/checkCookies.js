import Cookies from 'universal-cookie';
import validateUser from './validateUser.js';

const checkCookies = ()=>{
    const cookies = new Cookies();
    if(cookies.get('at') === '' || cookies.get('at') === undefined 
    || cookies.get('uid') === '' ||
    cookies.get('uid') === undefined){
      return false;
    }if(cookies.get('uid') !== undefined){
      const approved =  validateUser(cookies.get('uid'));
      if(approved){
         return true;
      }
    }
}

export default checkCookies;