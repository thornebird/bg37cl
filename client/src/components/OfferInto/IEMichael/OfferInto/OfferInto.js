import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styles from './OfferInto.module.css'
import Video from '../../../../components/Video/video.js'
const OfferInto = (props) => {

  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [countdown, setCountdown] = useState(120);;

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
    if (countdown > 0) {

      interval = setInterval(() => {
        let countTime = countdown;
        countTime--;

        let sec = seconds;

        if (sec === 0) {
          sec = 60;
        }
        sec--;
        if (countTime >= 120) {
          setMinutes(2);
        } else if (countTime >= 60) {
          setMinutes(1);
        } else if (countTime < 60) {
          setMinutes(0);
        }
        setCountdown(countTime);
        setSeconds(sec);

      }, 1000);
    }

    return () => clearInterval(interval);

  }, [minutes, seconds])

  return (
    <Row>
      <Col>
      <h3  className={styles.content}>
      Instructions to PLAN AN EPIC FAMILY VACATION TO IRELAND ITINERARY
        </h3>
        <p className={styles.content}>
        Ireland is a mind boggling country.

It's little… generally the size of the province of Indiana, which persuades individuals to think that they can flash starting with one spot then onto the next rapidly and "see everything" in seven days to multi day long excursion on their Ireland get-away.
      </p>
       <p className={styles.content}>
       Add to that the restricted country streets, the agreeable local people and the (many) disclosures to make at every single spot you visit and that "see everything" excursion to Ireland agenda becomes overpowering and hurried; substantially a lot to do in a solitary visit.
        </p>
        
          <p className={styles.content}>
          At the point when I mentor families arranging their first visit to Ireland or I plan one of my Ireland visits I observe that a couple of considerations stay consistent…

Everybody needs to see the shocking Cliffs of Moher, drive the Ring of Kerry and see a palace (or 2 or 3) on their Ireland trip.

However, past that, the thoughts are unclear… conventional music is frequently referenced, just like the prospect of learning Irish dance, yet how to see and do these things? Regularly first time guests aren't sure where to start.
         </p>
          <p className={styles.content}>
          In these three districts your family can encounter a portion of Ireland's most mystical areas, amazing sights, mind blowing history and wonderful culture.

For this schedule (in view of a multi week get-away) I suggest showing up at Shannon Airport, please; it will save you a couple of long periods of driving time.
           </p>
          <p className={styles.content}>
          DAY 1 and 2: KILLARNEY, IRELAND
Get your rental vehicle in Shannon and start your self-drive excursion to Killarney as you investigate Ireland. The most famous vacationer town in the Southwest, you'll track down a lot of shopping and feasting focused in probably the most delightful scenes in the country.

I suggest parting your day in 2 parts, with a more adult movement and a more child cordial action, with space to fill in with unconstrained investigations.
          </p>
          <p className={styles.content}>
          What should be done IN KILLARNEY
Take a jaunting truck ride from Killarney to Ross Castle, through Killarney National Park.
Drive to Muckross House and Gardens. Visit the house and the Traditional Farms or simply meander the excellent grounds. Make certain to meander to Muckross Abbey where a large number of Ireland's High Kings are covered.
 Partake in the delightful perspectives at Tork Waterfall and the Ladies' View.
Lease a bike or stroll through the Gap of Dunloe.
Right external Killarney is Kennedy's Pet Farm, a pleasant involved petting zoo with deer, bunnies, peacocks, young doggies, sheep and that's just the beginning.
          </p>
          <p className={styles.content}>
          Skirt the land visit through the Ring of Kerry and on second thought require a roadtrip to the Dingle Peninsula.
         </p>
          <p className={styles.content}>
          The landscape is comparably excellent and you'll track down inconceivable history to investigate like the Gallarus Oratory, a stone age post and bee colony hovels on your day visit.

Dingle likewise has an unbelievable aquarium and its most popular occupant is a dolphin named Fungi.

DAY 3 and 4: COUNTY LIMERICK AND COUNTY CORK
Leave Killarney (I know-there is still such a huge amount to do!) and head to Ballyhoura Country. This district of Ireland covers a lot of County Limerick and the northern part of County Cork.

LIMERICK HOTELS AND B&BS
I enthusiastically suggest remaining at The Old Bank B&B in Bruff, however you'll track down different choices nearby also.

MORE PLACES TO STAY IN LIMERICK, IRELAND
          </p>
<p className={styles.content}>
Many jackasses from across Ireland have seen as a lovely home here. Go for time to stroll the homestead trails or nestle the jackasses at the entry.

Fly into the gift shop before you go… You can embrace a jackass!
</p>
   <p className={styles.content}>
   LOUGH GUR
Anticipate a large portion of a day investigating the enchantment of Lough Gur. Stone and Bronze Age antiquities have been found all through the area.

You can likewise investigate the biggest stone circle in Ireland, the entry to faerie land, the Giant's Grave and stand where administering groups once hung their adversaries.
  </p>
   <p className={styles.content}>KILMALLOCK
The town of Kilmallock is loaded up with history-just as being the center of strolling and cycling nearby.

You'll view the Loop Walks as family cordial and the Ballyhoura Mouintains inconceivably beautiful.

RAMPLING HOUSES
Dissipated all through the area are 'Meandering aimlessly Houses'; evening amusements of unrecorded music, narrating and moving.

A couple of fast calls can set you up for an evening of craic (articulated "break"; the Irish for no particular reason and amusement) you will probably remember forever. </p>
   <p className={styles.content}>
   GLEN OF AHERLOW
Partake in the astonishing magnificence of the Glen of Aherlow from horseback. Plan a path ride with Hillcrest Riding Center.
   </p>
   <p className={styles.content}>Investigate MORE TOWNS AND VILLAGES
Also don't disregard the towns and towns. Bruff, Adare, Emly and Kilmallock all have broad accounts, as do a considerable lot of different towns nearby. </p>
   <p className={styles.content}>DAYS 5 and 6: DOOLIN AND THE CLIFFS OF MOHER
It's an ideal opportunity to pass on Bruff and head north to Doolin to hit up the one thing on your fantasy excursion to Ireland–the Cliffs of Moher.

On your way you'll stop at one of the most amazing reestablished palaces for families-Bunratty. Indeed, you likely considered it to be you left the Shannon Airport. </p>
{
      props.videoSrc !== null ? <Video src={props.videoSrc}/> :''
     }
        <p><strong>Thank you for your interest in this program. </strong></p>
         <p><strong>Please note that due to high demand {date} {month}, {year} is the last day to access the guide</strong></p>
         
        <Row>
          <Col md={12} sm={12}>
            <Button onClick={props.ctaClick} justify-content-center variant="primary" size="lg">
             Continue to the guide.
            </Button>
          </Col>

        </Row>

        {/*      
     <p>
       Complete the questions below to continue to the guide.
     </p>
     <p>
        Please note that due to high demand {date} {month}, {year} is the last day to register.
     </p> */}
      </Col>
    </Row>
  )
};

export default OfferInto;