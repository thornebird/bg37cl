import React  from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from './AboutUs.module.css'

const AboutUs = ()=>{
 return(
     <Container className={styles.container}>
         <Row>
             <Col>
              <h2 className={styles.title}> About us</h2>
              <p>
              {window.location.hostname} offer is the authorized and most confided in organization in the South Africa.
               We are travel industry experts , who are dominated in the best client care to ensure that our cherished visitors are partaking in the best snapshots of their life. Along these lines, we likewise guarantee to convey you with the best of courses of action and administrations. You are qualified to pick many visiting choices, each underlining a various part of the brilliant city of the UAE and close by regions. Yet, in case you are searching for sensible and spending plan amicable modified visit bundles, we will help you in choosing the best bundle according to your necessities with respect to considerations and rejections. Likewise, bespoke administrations according to your necessities to your visit bargains are incorporated. By altering your visit bundle as per your longing, we can oblige courageous exercises, vehicles, diversion, food. We guarantee to offer top notch types of assistance while making our cherished visitors happy with the general insight of touring and exciting exercises in South Africa.
              </p>
              <h3>
              We Offer Services Beyond Your Expectation
              </h3>
              <p>
               Perhaps the most wanted things in the wake of exciting experiences in South Africa or other African countries.
               We are the most trusted and authorized organization, which welcomes you to enjoy the most captivating and extraordinary undertakings and touring during your visit in Africa. While on the visit, you will find the scene all encompassing perspectives, and the grand brilliant African nature that you have never seen before. We likewise furnish you with the best insight and excellent administrations to satisfy our guarantee to give you a grin at each mile of your rush or touring.
              </p>
              <h3>
              We Care About You Experience
              </h3>
              <p>
              Being one of the main suppliers of the best African trips insight and promises you the best outing venture while you are in Africa. We likewise offer morning, evening, and overnight visits so we can oblige and suit and fit into your timetable effectively and ensure that we will be qualified to convey you with the best 
              experience with a range of trips and private tours. Our agreeable and esteemed camp is made to take into account our adored visitor needs including loosening up worthful minutes. For example, camel rides, henna planning, and African Costume photography. Proceed to appreciate and feel the adrenaline surge while getting a charge out of sandboarding, Dune slamming, Jet Skiing, Banana boat ride, and ATV riding.
              </p>
              <p>
              Followed by these exciting activities, we have arranged more for you significantly more engaging projects.
               Where you will partake in a progression of stunning, lovely, and social exhibitions like the Belly Dance, Classic and LED Tanoura show, and Thrilling fire show, performed by experts craftsmen who have devoted their lives towards dominating the particular execution craftsmanship.
               </p>
             </Col>
         </Row>
    
     </Container>
 )
}

export default AboutUs