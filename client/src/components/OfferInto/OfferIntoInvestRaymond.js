import React, { useState, useEffect } from 'react';
import { Row, Col,Image } from 'react-bootstrap';
import styles from './OfferIntoInvestRaymond.module.css';
import ClientMenu from './../../components/ClientMenu/ClientMenu.js'
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
        setMonth('January');
        break;
      case 1:
        setMonth('February');
        break;
      case 2:
        setMonth('March');
        break;
      case 3:
        setMonth('April');
        break;
      case 4:
        setMonth('May');
        break;
      case 5:
        setMonth('June');
        break;
      case 6:
        setMonth('July');
        break;
      case 7:
        setMonth('August');
        break;
      case 8:
        setMonth('September');
        break;
      case 9:
        setMonth('October');
        break;
      case 10:
        setMonth('November');
        break;
      case 11:
        setMonth('December');
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
      <ClientMenu/>
        <h3 className={styles.title}>
        {/* https://www.workplaceless.com/blog/quiz-ready-work-home
        https://www.surveymonkey.com/mp/coronavirus-working-from-home-check-in-survey-template/
          */}
     
       
      
          Are You Ready to Work From Home in 2021?
          Take this quiz and see if you can participate.
        </h3>
        <Image className={styles.mainImg}  width='100%' src='/img/ray.jpg' />
        <Image className={styles.img}  width='100%' src='/img/main1.PNG' />
        <p>
           {date} {month}, {year} 
       </p>
        <p>
        Working from home is something everybody can benefit from.
        Now is a better time than ever to see if you are eligible to participate.
        </p>

      <p>
        South Africans are intived to take the quiz in order to qualify in this latest project.
      </p>  
    
      
        {/* <p>
        "I realised that there are thousands across South Africa that are having a hard time.
        I decided to open a work from home program that can help South Africans during these difficult times.
        </p> */}
        <Image   className={styles.mainImg}  width='100%' src='/img/rm.jpg' />
        <Image className={styles.img}  width='100%' src='/img/cape.PNG' />
        {/* <p>
          Since my time and resources are limited I can't accept everybody into my program.
        </p> */}
        <p>
          If you would like to be a part of this program  
          take the quiz below and see if you are eligible.
        </p>
        {/* <p>
          
         You have <strong className={styles.timer}>{minutes} Minutes and {seconds} Seconds</strong> to complete the quiz.
        </p> */}
        {/* <p>
        <strong className={styles.timer}> Hurry up, the number of spots is limited.</strong>
       </p> */}
      </Col>
    </Row>
  )
};

export default OfferInto;