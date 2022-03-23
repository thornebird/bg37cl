import React, { useState, useEffect } from 'react';
import { Row, Col ,Button } from 'react-bootstrap';
import styles from './OfferInto.module.css';

const OfferInto = (props) => {

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
      <p className={styles.contentBlog}>
     
      Here is a rundown of my number one touristy activities in Johannesburg. You can pack the majority of these into a two night stay, three evenings if you need to proceed to investigate the support of mankind (which I'd strongly suggest). Beneath, I have expounded on whether Johannesburg is protected to visit as well as how to remain protected in the city. I've likewise got proposals for where to remain in Johannesburg and where to eat. There are a few fine decisions for both in the city.
       </p>
       <p className={styles.contentBlog}>
     
       'Learn about stones and bones' is conceivably the most terrible method for promoting what is a particularly huge UNESCO World Heritage Site (sorry, Cradle of Humankind site). Despite the fact that it's situated about 90 minutes drive out of the city of Johannesburg, in the encompassing district of Gauteng, it is one of the most mind-blowing roadtrips from Johannesburg.

Known as the origination of mankind, this is the place where fossils of a portion of the world's earliest living things have been found including Mrs Ples and Littlefoot, primates more than 2 million years of age that were early predecessors of humanity. There are two fundamental sights to visit: Sterkfontein caves and Marpoeng. The previous is where Mrs Ples and Littlefoot were found, and you're ready to investigate down inside the caverns. Marpoeng is the guest's middle which strolls you through an intuitive depiction of how the world started.
     </p>
     <p className={styles.contentBlog}>
     Welcome to the highest point of Africa. This 50 story working in midtown Johannesburg will give you 360 displays of the thick city beneath. It additionally is the tallest structure in Africa, henceforth the epithet, the highest point of Africa. At 223 meters high, it doesn't exactly make it onto the rundown of the main 100 tallest high rises however it's the tallest construction you will find in South Africa.

The Carlton Center is on the jump on bounce off Johannesburg transport course. I assemble it's not so protected to meander alone here as the bounce on transport individuals offer an escort from the bus station to the Carlton Center and back to the transport. In any case, take a Uber up to the entryway.
     
     </p>
     <p className={styles.contentBlog}>
     
     Maybe in light of the fact that I remained here during my two stops in Johannesburg, this was one of my number one region of the city. As well as being fairly, on account of safety watched roads, it's the one spot in the city I got a handle on open to strolling alone around evening time to visit the many eateries nearby. As well as vacationers, Mabnoeng draws in local people to its little however adequately varied scope of workmanship exhibitions, metropolitan business sectors, bistros and restaurants.
     </p>
     <p className={styles.contentBlog}>
     Lodging north of 1 million uncommon and utilized books, there was scarcely a way of floor that wasn't littered or heaped with books at Collector's Treasury. In addition to the fact that it is the best book shop in Johannesburg, it's the greatest book assortment in Africa and I didn't know whether becoming mixed up in this book shop was the stuff of dreams or bad dreams. Likely a touch of both. In any case, I might have spent a few days… weeks… alright, likely months, investigating this assortment. After I'd coordinated it sequentially, obviously.
     
     </p>
     <p className={styles.contentBlog}>
     
     
     </p>
     <p className={styles.contentBlog}>
     
     
     </p>
     <p className={styles.contentBlog}>
     
     
     </p>
     <p className={styles.contentBlog}>
     
     
     </p>
     <p className={styles.contentBlog}>
     
     
     </p>
     <p className={styles.contentBlog}>
     
     
     </p>
     <p className={styles.contentBlog}>
     
     
     </p>

     
     
    <h3>
        Thank you for watching the video.
      </h3>
  
      <Col md={12} sm={12}>
            <Button onClick={props.ctaClick} justify-content-center variant="primary" size="lg">
             Read the full story
            </Button>
      </Col>
      
  
    {/* <p>Everybody is invited to participate but not everybody is eligible. Please take a moment to see if you qualify for this project. </p> */}
    {/* <p>
         {date}, {month}, {year} is the final day to register.
    </p> */}
      </Col>
    </Row>
  )
};

export default OfferInto;