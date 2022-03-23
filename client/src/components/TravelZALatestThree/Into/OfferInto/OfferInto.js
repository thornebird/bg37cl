import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styles from './OfferInto.module.css';

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
      <h4 className={styles.contentBlog}>
      15 Best Places to Visit in South Africa
      </h4>
        <p className={styles.contentBlog}>
        With a greater number of scenes and territory than pretty much one more country on Earth, South Africa starts to lead the pack with regards to variety. As any nation should that flaunts hippo sightings on the Limpopo River and penguin sightings on the Cape. An epic country at the tip of an epic mainland, untamed life is logical your first draw. Yet, remember about the amusement, nightlife, eating, and drifts. There are a few staggering public parks and similarly extraordinary public dishes (on something else entirely!). South Africa battled for a really long time under politically-sanctioned racial segregation, and the proof of this can in any case be felt in places. In any case, the instruction and invite you'll get will give you expect the nation's future. Make certain to anticipate a long excursion, or essentially plan to return over and over, in light of the fact that you'll require a lifetime to encounter and like this sublime country. How about we investigate the best places to visit in South Africa!
        </p>
        <p className={styles.contentBlog}>
     


Bloemfontein, Free State, South Africa
The capital of Free State and one of South Africa's three public capitals, Bloemfontein is at times called "the city of the roses" because of the rose celebration held here every year. In any case, it's something other than wonderful to check out; the city has a plenty of social, authentic, and normal attractions. For a beginning, attempt the Oliewenhuis Art Museum, the National Museum, the Free State National Botanical Garden, Vodacom Parkland the Anglo Boer War Museum. For cycle two, attempt the advanced planetarium, the music scene at pass on Mystic Boer, and afterward go fishing at Maselspoort. The rundowns are perpetual so plan to remain no less two or three days.
        </p>
        <p className={styles.contentBlog}>
   


Bloemfontein, Free State, South Africa
The capital of Free State and one of South Africa's three public capitals, Bloemfontein is at times called "the city of the roses" because of the rose celebration held here every year. In any case, it's something other than wonderful to check out; the city has a plenty of social, authentic, and normal attractions. For a beginning, attempt the Oliewenhuis Art Museum, the National Museum, the Free State National Botanical Garden, Vodacom Parkland the Anglo Boer War Museum. For cycle two, attempt the advanced planetarium, the music scene at pass on Mystic Boer, and afterward go fishing at Maselspoort. The rundowns are perpetual so plan to remain no less two or three days.
        </p>
        <p className={styles.contentBlog}>
        



Durban is one of South Africa's most famous occasion objections due to its all year close to consummate climate. To remain outside, look at the gondola rides, fishing, uShaka Marine World, Gateway Theater, and each water sport you can envision. At the point when you need a break from the sun, head downtown and find the great workmanship deco veneers and investigate the more metropolitan pieces of town. The city feels emphatically Asian, and has a huge Indian people group. Walk around the business sectors and you'll contemplate whether you're as yet in South Africa.
        </p>
        <p className={styles.contentBlog}>
        Jo'burg has everything: high end food, inebriating nightlife, feature diversion, expressions, couture shopping, and the Gautrain. This quickly changing city has an extreme history with almost 20 years of decrease. However, the economy has seen a deluge of business and the travel industry recently. In Newtown and Braamfontein, the two social regions, you'll track down the eateries, bistros, galleries, and theaters. There is such a lot of energy here, it's irresistible. The Inner City is rapidly turning into a vacationer problem area. You'll need to make a stop at Maboneng, a fashionable person type area on the eastern side of the Inner City. It's a city actually battling with its set of experiences, however Johannesburg isn't bombastic and brings a great deal to the table.
        </p>
        <p className={styles.contentBlog}>
        East London If you need a laid back ocean side scene that doesn't have the groups, East London is ideal for you. You have all that you need in an ocean side, warm sea, water sports, open air experience, and a lot of daylight. The core of the city is a modern town, and its neighbors by and large have more attractions and trips, assuming you're searching for amazing sea shores and an opportunity to get away, you'll cherish the narrows front area and the enormous sand slopes
        </p>
        <p className={styles.contentBlog}>
        This legacy city is situated in the woodlands and moving fields of the Natal Midlands. It's viewed as one of the most amazing protected Victorian urban communities on Earth. A visit through town to check out the memorable structures will return you to another age. A considerable lot of these fantastic structures have been changed over into historical centers. The city is comprised of an enormous understudy populace just as a Zulu people group which carries a great deal of shading to the spot. Pietermaritzburg makes the ideal headquarters for investigating both the Midlands Meander and Kwa Zulu-Natal.
        </p>
        <p className={styles.contentBlog}>
        "Jacaranda City" is swimming in an ocean of purple Jacaranda trees. A comparative city to Johannesburg, however significantly more laid back, Pretoria has incredible galleries, verifiable structures, and regular attractions for your delight. When the core of politically-sanctioned racial segregation South Africa another energy is injecting the city and unfamiliar consulates, organizations, and the travel industry arrive at Pretoria. At the point when you need a loosening up visit as you venture to every part of the country, Pretoria is certainly worth a visit.
        </p>
        <p className={styles.contentBlog}>
        Most South African urban communities appear to have a moniker, and Port Elizabeth's is the "Well disposed City." At the finish of the Garden Route, it lies along Algoa Bay at the western finish of the Sunshine Coast. You'll observe blue-banner sea shores, water sports, and an astounding measure of history here. Port Elizabeth, alongside the outer municipalities of Despatch and Uitenhage, are all in all known as Nelson Mandela Bay.
        </p>


        <p className={styles.contentBlog}>
        Some portion of the well known Garden Route, Knysna is renowned for the clam celebration and mind blowing sees that stretch from Leisure Isle the entire way to the Knysna Heads. The Heads are a troublesome section in the water - numerous vessels have been wrecked here. Look at the Featherbed Nature Reserve just as the fantastic Knysna Elephant Park and Monkeyland Primate Sanctuary. Dolphin sightings are customary in Knysna and there are a few dolphin spotting boat trips that incorporate a stop at Plettenberg Bay or Robberg Peninsula to see the uproarious seal settlements. For those searching for a smidgen of unwinding, joined with a tad of experience, this is your place.
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