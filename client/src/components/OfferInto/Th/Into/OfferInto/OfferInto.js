import React, { useState, useEffect } from 'react';
import { Row, Col ,Image} from 'react-bootstrap';
import styles from './OfferInto.module.css';

const OfferInto = () => {

  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [minutes,setMinutes] = useState(2);
  const [seconds,setSeconds] = useState(0);
  const [countdown,setCountdown]  = useState(120);;

  useEffect(() => {
    const date = new Date();

    switch (date.getMonth()) {
      case 0:
        setMonth('มกราคม');
        break;
      case 1:
        setMonth('กุมภาพันธ์');
        break;
      case 2:
        setMonth('มีนาคม');
        break;
      case 3:
        setMonth('เมษายน');
        break;
      case 4:
        setMonth('พฤษภาคม');
        break;
      case 5:
        setMonth('มิถุนายน');
        break;
      case 6:
        setMonth('กรกฎาคม');
        break;
      case 7:
        setMonth('สิงหาคม');
        break;
      case 8:
        setMonth('กันยายน');
        break;
      case 9:
        setMonth('ตุลาคม');
        break;
      case 10:
        setMonth('พฤศจิกายน');
        break;
      case 11:
        setMonth('ธันวาคม');
        break;
      default:
        break;
    }


    switch (date.getDay()) {
      case 0:
        setDay('Sunday');
        break;
      case 1:
        setDay('Monday');
        break;
      case 2:
        setDay('Tuesday');
        break;
      case 3:
        setDay('Wednesday');
        break;
      case 4:
        setDay('Thursday');
        break;
      case 5:
        setDay('Friday');
        break;
      case 6:
        setDay('Saturday');
        break;
   
      default:
        break;
    }

    setDate(date.getDate());
    setYear(date.getFullYear());

    let interval = '';
    if(countdown>0){
     
    interval = setInterval(() => {
    let countTime = countdown;
    countTime--;

    let sec= seconds;
   
    if(sec === 0){
      sec = 60;
    }
    sec--;
    if(countTime >= 120){
      setMinutes(2);
    }else if(countTime >= 60){
      setMinutes(1);
    }else if(countTime < 60){
      setMinutes(0);
    }
    setCountdown(countTime);
    setSeconds(sec);
     
    },1000);
    }

    return () => clearInterval(interval);

  }, [minutes,seconds])

  return (
    <Row>
      <Col>
        <h3>
        ขอบคุณที่ให้ความสนใจในคลิปวิดีโอนี้ 
     </h3>
   
     <p>
     กรุณาทำตามขั้นตอนด้านล่าง
     </p>
      
        <p>ไม่ใช่ทุกคนที่สมัครจะได้รับการอนุมัติ โปรดตอบคำถามให้ถูกต้อง</p>
    
      <p>
         {date} {month}, {year} เราเหลือสิทธ์จำนวนจำกัด หากสิทธิ์การสมัครเต็มแล้ว ท่านจะไม่สามารถลงทะเบียนได้
    </p>
      </Col>
    </Row>
  )
};

export default OfferInto;