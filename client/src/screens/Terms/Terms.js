import React , {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Terms.module.css'

const Terms = () => {

    useEffect(()=>{       
        window.scrollTo(0, 0);
    },[])

    return (
        <Container >
            <Row >
                <Col>
                    <h2 className={styles.title}>Terms and Conditions</h2>
                    <p>
                    Thank you for showing your interest in {window.location.hostname}. We love to assist you in selecting the best tour packages for travelling to Africa. We amend these Terms and Conditions at our circumspection at any time. If these Terms and conditions will be changed, we will inform or display the updated terms and conditions on our website and you will be considered to accept any changes if you continue using our official website after the amendments are shown. If you do not accept all of them, then you are not eligible to enjoy our tours and high-quality services. Kindly check these terms and conditions before picking our tours.
                    </p>
                    <h4>
                    Pricing
                    </h4>
                    <p>
                    Our end-all strategy will ensure your estimation of cash, other than the booking utilizing the site. Except if ordinarily said, the costs on our side will be charged according to individual reason barring the tips given to visiting drivers. The gave rates may be changed without notice, particularly if there will be an event of any startling circumstance, for example, dwelling rates, increment in petroleum, or transport costs.
                    </p>
                    <h4>
                    Payment Methods   
                    </h4>
                    <p>
                    Where Credit cards, Debit card / Master cards, and Visa, all can be accepted in USD for payment. We won't offer any types of assistance to OFAC, exchange, and approved nations. A client who is Minor/younger than 18 and makes a booking VIA site will not enroll as a site client and won't execute on or utilize the site. Cardholders should keep a duplicate of exchange records, Merchant strategies, and rules. The site client is answerable for keeping up the privacy of his record.
                    </p>
                    <h4>
                    Tour Confirmation Via Email
                    </h4>
                    <p>
                    Once the booking is done, you will get a confirmation via email and all the details and information regarding the tour.
                    </p>
                    <h4>
                    No Show Policy & Cancellation
                    </h4>
                    <p>
                    On the odd opportunity that you disregard to turn up for the visit, no limits partly or full can be given. A similar condition applies under visiting visits, unused Safari, dhow venture. In like way, rescheduling thought about attested visits.

Cancellation:

Our company’s conditions might apply on the account of any cancellation: If the visit dropped/changed 48 hrs before the visit date, no cancellation charges will be material.

In case the visit dropped/changed within 24 to 48 hrs before the event/tour date, half undoing charges will be fitting.

If the trip dropped/changed 24 hrs before the event date, 100% retraction charges will be important.
                    </p>
                    <h4>
                    Cancellation Methods
                    </h4>
                    <p>
                    Proceed to drop, we encourage you to peruse the wiping out guidelines cautiously that is applied to your visit bundle. For dropping off every one of your reservations, guarantee that you pay heed to scratch-off to us. In the wake of tolerating your abrogation interest, we will tell you through telephonic call, email about the booking crossing out, and the charges that may be charged. We can't be considered at the expense of any dropping that has not been got from you or not announced by us.
                    </p>
                    <h4>
                    Amendments
                    </h4>
                    <p>
                    Organizations and routings are fixed in your bundle and are mindful to change taking into street course designs, account close by/environment conditions, and a few perspectives. Should this happen, we can give reasonable options of relative quality, be that as it may, contingent on its accessibility. However, we declare plan changes. Besides, no remuneration is conceivable on the record of vires major, for instance, for example, a quake and flood.
                    </p>
                    <h4>
                    Travel Insurance
                    </h4>
                    <p>
                    We will not charge for any harm as a result of damage, ailment, accident, or loss of specific things, or even for the tour cancellation. It is suggested that the Explorer have to travel with a protection strategy to control sudden happenings of these things.
                    </p>
                    <h4>
                    Tour Documents
                    </h4>
                    <p>
                    Every guest must ensure that the person conveys archives important for a particular visit, including ID or a real ID card. This is especially fundamental for guests beginning from another country. No markdown ought to be conceivable in the event of adversity or nonattendance of these appropriate records. So likewise, voyagers – autonomous of their identity – are urged to check with their individual country's office here to get information on entry necessities, before they intend to visit here. Similarly as essential is to request your specialization concerning the current visa and prosperity necessities, as they are at risk to change without earlier notification.
                    </p>
                    <h4>
                    Website Usage Restrictions
                    </h4>
                    <p>
                    all contents on this website completely belong to {window.location.hostname}. Where logo, images, provided tour packages & deals, and the important policies. You make a deal to avoid abusing this site or utilize its substance for unlawful, individual, and business purposes.
                    </p>
               </Col>
             </Row>
        </Container>
    )
};

export default Terms;