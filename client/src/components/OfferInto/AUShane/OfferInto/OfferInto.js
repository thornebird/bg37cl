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
        Uluru/Ayers Rock

The gigantic, lone sandstone rock arrangement known as Uluru is so famous it is in a split second unmistakable to individuals from everywhere the world. Apparently positioned in no place, this UNESCO World Heritage recorded site – which incorporates the encompassing region just as the actual stone – is home to an interesting universe of waterholes, caverns and old workmanship.
Dawn and dusk are broadly considered to offer the most otherworldly review times – this is the point at which the stone sparkles in reflected shades of vermilion and tangerine.

Climbing the stone is conceivable however it's your call whether your heart permits it; Uluru is holy to the neighborhood Aboriginal individuals who ask that guests partake nearby without scaling the stone's statures.
        </p>
        <p className={styles.content}>
        Regardless of whether you are searching for complete inundation or simply a brief look into this  culture you will have openings by the container load here. With a set of experiences extending back 50,000 years or more, the Aboriginal culture of Australia is a gem radiant embroidered artwork of fantasy, dance, music, workmanship and a personal connection with the land.

Antiquated stone craftsmanship – of both the handily got to and the secret fortune assortment – is peppered generously around the nation as are openings for native drove visits. Here the sky is the limit – figure out how to fish utilizing age-old strategies, take a stab at some Aboriginal style painting, go rummaging for food which you will then, at that point, figure out how to get ready, make your own personal lance or lounge around an open air fire paying attention to 'Dreamtime' stories.
         </p>
        <p className={styles.content}>
        Jump, swim, ride in a glass base boat, take a short-term journey – it doesn't make any difference how you do it – simply ensure you do it. The world's biggest reef – which incidentally turns out to be the world's just living life form distinguishable from space – extends for an incredible 2500 km (1,500 miles) along and past the Queensland coast.

The sea shores and waters of this space – particularly the Outer Reef – are heart-painfully lovely yet assuming you duck your head beneath the surface you will end up in an oceanic wonderland blasting at the creases with shading and biodiversity. Gaze into the eyes of a turtle, swim close by exquisite manta beams and be stunned by swarms of rainbow hued fish, starfish, ocean imps and corals. The reef is likewise home to in excess of 30 types of whale and dolphin so keep your flippers crossed and you may luck out there as well.
       </p>
        <p className={styles.content}>
        Albeit the word shark might strike dread in the hearts of numerous you don't have anything to fear here – these accommodating tiny fish sifting animals, which can compare 12 meters (41 feet) besides, are one of the sea's delicate goliaths. No different either way, knowing you're not on the menu is probably not going to forestall a heart-halting little while as you get a snorkel-covered eyeful of this behemoth heading towards you with its mouth open – a mouth that can compare 1.5 m (4 ft, 11 in) across.
        Swimming with the planet's greatest fish isn't something you will forget in a rush and it's all conceivable at Western Australia's Ningaloo Reef – the greatest bordering reef on the planet.
        </p>
          <p className={styles.content}>
        Sydney Harbor Bridge Climb

Assuming you're into terrifying yourself senseless from an incredible stature the chance to scale one of Australia's most notable tourist spots is an absolute necessity. The Bridge Climb offers a couple of ways of getting yourself high over the hurrying around of the city which range from quick as-you-can difficulties to all the more relaxed paced risings and climbs fit to the anxious. There are even exceptional occasion climbs, for example, the Mardi Gras Disco Climb where you can commend your accomplishment by shaking your thing under a blazing disco ball roosted 134 m above Sydney.

Anyway you do it the 360° all encompassing perspectives on Sydney, the Blue Mountains and the Pacific Ocean are ensured to amaze you. Likewise – you additionally get to pick your season of day with nightfall and first light ascensions being particularly well known.

Also on the off chance that you're thinking this is an experience just for the super-fit you might get a kick out of the chance to realize that the extension's most seasoned climber was Mrs. Chris Muller matured 100.
</p> 
<p className={styles.content}> There's quite a few methods for getting your heartbeat hustling in experience adoring Australia and no visit to this nation is very finished without no less than one inspecting of the limit. On the menu are bungee hopping, skydiving, extraordinary white shark confine jumping, wilderness boating, scuba plunging, bad-to-the-bone hedge setting up camp, zorbing, stream sailing, camel-rides and a couple of more adrenalin-addict amicable decisions. </p>
        <p className={styles.content}> Assuming your concept of a food visit invokes pictures of silver-haired stodgy vacationers you've never been to Australia. The Aussies love their food and they live in a land which creates the absolute best forms of both, found anyplace in the world – from directly from-the-sea fish to craftsman made brews – this is downright the experts' and the gourmands' Neverland.

Food visits arrive in an incredibly great reach – from visits totally outfitted to genuine choc-o-holics to encounters which will see you throwing one more shrimp on the barbie as you watch the dusk on the superb Uluru.

For something genuinely unique you can select into one of the food scrounging visits. Alongside finding you own free supper, you might experience a wide range of local greenery while adapting stores about the set of experiences, culture, fantasies and topography of your general surroundings.</p>
         <p className={styles.content}>Only 15 km south of Adelaide lies what is regularly proclaimed as South Australia's gem in the crown – Kangaroo Island. Indeed, there are kangaroos here – no prizes for speculating that one – yet this immaculate island is likewise home to a lot a greater amount of the notorious and must-see classes of Australian untamed life. This incorporates platypus, wallabies, echidnas, koalas, goannas, possums, pixie penguins… … .and that is only the tip of the chunk of ice.
Deserts, sea shores and woodlands make up this 150 km long regular idyll where over 33% of its property is given over to public park or preservation regions.

Regardless of whether you're resolved to watching the world's littlest penguin – the pixie or minimal blue penguin – waddle shorewards or swimming with dolphins – it is all conceivable here. Likewise on the menu are caverns to investigate, swimming with uncommon as-shaking horse-teeth verdant ocean mythical serpents, sand riding monster ridges or essentially absorbing the sun on one of the lovely sea shores.
You can't go far in Australia without hitting your toe facing a public park and every one of them have their own unique something. Notwithstanding, World Heritage recorded Kakadu National Park in the Northern Territory has a wide range of extraordinary treats inside one – though huge – region.

With its Aboriginal history extending back 50,000 years, this park is set in the midst of a scene of climate cut transcending slopes, tremendous savannah fields, lavishly forested forests and verdant wetlands. Here you can visit rock-craftsmanship exhibitions, swim underneath falling cascades, watch sunbathing crocodiles, cool yourself in pure waterholes and in any case submerge yourself in this current locale's staggering regular excellence. </p>
        <p className={styles.content}>In a nation where surfing is such a lot of a piece of the way of life it is on the educational program of all waterfront based schools, taking a surf illustration is right around a necessary piece of any Australian outing. Would it be advisable for you choose to take a stab at board-riding there are uncountable quantities of surf schools and mentors prepared to get you up and having an awesome time. Albeit not all of Australia's 50,000 km of shoreline is surfable there are extraordinary wraps of ocean side and reef which offer a lot of decision for any and all individuals – from the complete fledgling to the kamikaze star.</p>
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