import React, { useState, useEffect } from 'react';
import { Row, Col ,Image} from 'react-bootstrap';
import styles from './OfferInto.module.css'
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
       <p className={styles.content}>
       India is a tremendous country with different and sensational scenes. From sandy shores of the Keralan coast, desolate deserts of Rajasthan, the great snow-covered Himalayas, antiquated sanctuaries, to humming present day urban communities, the nation has everything. The dazzling nation additionally offers a  blend of customs, celebrations, and otherworldly convictions. This multitude of reasons make India an unquestionable requirement visit! For a noteworthy excursion to India, what's a superior method for comprehension and look further into the country than by getting yourself "lost" in the best India travel manuals? These manuals are more than accommodating in arranging your outing. Anything you desire to investigate in this antiquated country, these movement manuals India will assist you with capitalizing on your time in this extraordinary region of the planet.
      </p>
      <p className={styles.content}>How To Choose The Best India Travel Guide Books?
Go rules to India are all you want to orchestrate the ideal excursion to India. With movement manuals, it's more straightforward to travel securely. All things considered, picking travel manuals India likewise can be overpowering. To get the best one, there are some fundamental things that you can consider prior to choosing to purchase a movement manual India. We should investigate them individually!</p>
       <p  className={styles.content}>Is India Easy To Travel Around?
Indeed, since India is an immense nation, getting around can be slow and require a touch of tolerance. Be that as it may, it likewise offers broad intriguing and interesting spots. You'll never get exhausted of going in India. Regardless, your outing might transform into an intriguing experience!</p>
        <p className={styles.content}>Dissimilar to different India travel manuals we have on this rundown, this book just covers urban communities and states with the most famous and significant vacation destinations. In any case, you'll get a top to bottom look and some great realities of every city. It incorporates where to eat, what to see, where to go, and what's in store. It likewise gives you data concerning how to be deferential to every one of the six principle religions,, also, how to know about the pickpockets, and the sky is the limit from there.

What we like the most with regards to this book is that the writer gives fundamental tips. These incorporate what's in store, what sort of travel services you can trust, significant social perspectives, what food decisions are protected, thus considerably more. In addition, he likewise shares his own story. As it were, by perusing this book you head out practically to urban areas and states like Delhi, Goa, and Kolkata even before you show up in the lovely and beautiful country!</p>
        
        <h3>
        Thank you for your watching this video.
       </h3>
   
      <p>
        Indians are rushing to register. Please note that {date} {month}, {year} is the final day to join.
     </p>
     <p>
       Complete the questions below to see if you are eligible.
     </p>
      </Col>
    </Row>
  )
};

export default OfferInto;