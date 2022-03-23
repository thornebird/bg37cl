import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styles from './OfferInto.module.css'
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
        <p className={styles.content}>
        The Indian Himalaya evokes pictures of old journeys and sacrosanct locales – yet it's definitely more than that.

The western reaches, from Kashmir to Nanda Devi, gloat a fantastic assortment of networks and perspectives. In the east, heaven like Sikkim has goliath butterflies and orchid woods while Arunachal Pradesh is the remainder of the Himalayan wild boondocks.

The Markha Valley and Hemis Festival journey is maybe the most well known in the Indian Himalaya, offering shocking mountain landscape, the biggest religious community in Ladakh, and the opportunity to see snow panthers. The cloister circuit in Sikkim uncovers a place where there is sensational landscape, brilliant religious communities and many butterflies, birds and uncommon plants.

Past Darjeeling's gloriously manicured tea homes lies a journey across the woodlands of pine, conifer and rhododendrons, which prompts an edge that frames a characteristic boundary with Nepal and into Singalila National Park.
        </p>
        <p className={styles.content}>
        The 400km of tropical shore isolating Mumbai and Goa is among the least-visited portions of the subcontinent.
Vacationer inns are basically non-existent and streets are tight and wandering, however there is a train (the Konkan Railway) that will take you to calm stations. The palm-bordered shore frames a close to ceaseless series of sea shores – a significant number of them altogether abandoned and ignored by seventeenth and eighteenth century bastions.

Nearer to South-East Asia than the subcontinent, the 572 Andaman and Nicobar Islands are a genuine option in contrast to India. The Nicobars are beyond reach; just a small bunch of islands in the entire archipelago are available to the couple of vacationers that do make it out there.

The 2004 torrent crushed island the travel industry, however the Andamans have skiped back and are just getting started – the jumping is purportedly as great as could be expected. Fly or sail into capital Port Blair, then, at that point, float on to Havelock Island for birdwatching and ocean side lazing prior to heading for Neil Island – the spot to spin through paddy fields, swim above reefs and count different explorers on one hand.
        </p>
        <p className={styles.content}>
        The rail framework in India is something beyond a method for getting around, it's an involvement with its own right. Every carriage is a microcosm of India – boisterous, turbulent, inviting and energetic. You'll carry on with a lifetime in one day. Book yourself a sleeper – picking the class as per your financial plan – and experience travel at the clacking speed of an antiquated train.

Each rail venture is pretty much as fluctuated as the actual nation. The desert crossing from Jodphur to Jaisalmer will take you past fortresses and old urban communities, while the 'Toy Train' from Kolkata to Darjeeling crisscrosses its direction into the mountains past tea estates and offers awesome perspectives on the Himalayas.

The Cardamom Route from Madurai to Bodinayakkanur will take you toward the southern lower regions of the Western Ghats past manors of cotton, mango, pepper, espresso and tea.

For a really important Indian rail insight, think about taking the Grand Truck Express from New Delhi to Chennai. It covers 2,186km, making it one of the longest train courses in India.
        </p>
        <p className={styles.content}>
        A camel safari into the Rajasthan desert is an unmissable encounter. You'll be shaken delicately as your camel takes you across the Thar desert to Jaisalmer, setting up camp around evening time in tents underneath the shade of stars and calling upon little desert towns where inquisitive youngsters show you their earthen cottages with satisfaction.

Time your visit to harmonize with the Pushkar camel reasonable, a yearly occasion where merchants from the locale accumulate, showing Rajasthan at its vivid, tumultuous, camel-exchanging best.

What's more remember to invest energy in the pink city of Jaisalmer. Reduced, independent and delegated by the most established still-possessed stronghold on the planet, it's a town made for walking – and a delicate prologue to the sights, sounds and scents of India.
        </p>
        <p className={styles.content}>
        The changed over riceboats that handle the backwaters of Kerala offer a definitive method for encountering provincial India at its most calmly loaded. Ripe soils and ample fish stocks mean it's one of the country's most bountiful districts. Kick back and partake in the pure sights of obscure palms, paddy fields and calm minimal rustic holy places and sanctuaries. This is India at its provincial best.

Set aside effort to check out Kerala's bright city, Kochi. Kochi (or Cochin as the greater part of local people like to call it) is a progression of landmasses, islands and projections got between the lakes and streams of its inland streams and the Arabian Sea.
        </p>
     
        <p className={styles.content}>
          India is a tremendous country with different and sensational scenes. From sandy shores of the Keralan coast, desolate deserts of Rajasthan, the great snow-covered Himalayas, antiquated sanctuaries, to humming present day urban communities, the nation has everything. The dazzling nation additionally offers a  blend of customs, celebrations, and otherworldly convictions. This multitude of reasons make India an unquestionable requirement visit! For a noteworthy excursion to India, what's a superior method for comprehension and look further into the country than by getting yourself "lost" in the best India travel manuals? These manuals are more than accommodating in arranging your outing. Anything you desire to investigate in this antiquated country, these movement manuals India will assist you with capitalizing on your time in this extraordinary region of the planet.
        </p>
        <p className={styles.content}>How To Choose The Best India Travel Guide Books?
          Go rules to India are all you want to orchestrate the ideal excursion to India. With movement manuals, it's more straightforward to travel securely. All things considered, picking travel manuals India likewise can be overpowering. To get the best one, there are some fundamental things that you can consider prior to choosing to purchase a movement manual India. We should investigate them individually!</p>
        <p className={styles.content}>Is India Easy To Travel Around?
          Indeed, since India is an immense nation, getting around can be slow and require a touch of tolerance. Be that as it may, it likewise offers broad intriguing and interesting spots. You'll never get exhausted of going in India. Regardless, your outing might transform into an intriguing experience!</p>
        <p className={styles.content}>Dissimilar to different India travel manuals we have on this rundown, this book just covers urban communities and states with the most famous and significant vacation destinations. In any case, you'll get a top to bottom look and some great realities of every city. It incorporates where to eat, what to see, where to go, and what's in store. It likewise gives you data concerning how to be deferential to every one of the six principle religions,, also, how to know about the pickpockets, and the sky is the limit from there.

          What we like the most with regards to this book is that the writer gives fundamental tips. These incorporate what's in store, what sort of travel services you can trust, significant social perspectives, what food decisions are protected, thus considerably more. In addition, he likewise shares his own story. As it were, by perusing this book you head out practically to urban areas and states like Delhi, Goa, and Kolkata even before you show up in the lovely and beautiful country!</p>

        <h3>
          Thank you for your watching the video.
        </h3>
        <Row>
          <Col md={12} sm={12}>
            <Button onClick={props.ctaClick} justify-content-center variant="primary" size="lg">
              Continue to the guide
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