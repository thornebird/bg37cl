import { cookie } from 'express-validator';
import Cookies from 'universal-cookie';

export  const  saveData =()=>{
  console.log('save cookies');
  const cookies = new Cookies();
  const clickId = Math.random().toString(36).substr(2, 5);
  cookies.set('click', clickId, { path: '/' });
  localStorage.setItem('click',clickId);
}

export const checkData =()=>{
    const localClick = localStorage.getItem('click');
    const cookies = new Cookies();
    const cookieClick = cookies.get('click');
    if(cookieClick && localClick !== ''){
      return true;
    }else{
      return false;
    }
}