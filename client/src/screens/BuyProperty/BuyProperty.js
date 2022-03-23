import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PostScreen.module.css'
import { Container, Row, Col, Image ,ListGroup , Button } from 'react-bootstrap';
import parse from 'html-react-parser';
import Loading from  '../../components/Loading/Loading.js';
import BannerSales from '../../components/BannerSales/BannerSales.js'
import DateText from '../../components/DateText.js';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const PostScreen = props => {
  // const [category,setCategory] = useState('');
  // const [post, setPost] = useState({});
  // const [paragaraphs, setParagaraphs] = useState([]);
  const history = useHistory()
  // const { postId } = useParams();

  useEffect(() => {     
     window.scrollTo(0, 0);
    // axios.get(`/api/blog/posts/${postId}`)
    //   .then(response => {
      
    //     setParagaraphs(response.data.post.body);
    //     setPost(response.data.post);
    //     setCategory(response.data.category);      
    //   })
    //   .catch(error => {
    //  //   console.log(error);       
    //   })
  
  }, []);

 
 const contact = ()=>{
  history.push('/contact-us')
 }


  return (
    <Container className={styles.postContainer}>
      <Row>
        <Col>
        <ListGroup variant="flush">
        <ListGroup.Item> <h1>A Guide For Purchasing a Home In Ireland </h1></ListGroup.Item>       
        <ListGroup.Item><span></span></ListGroup.Item>
        </ListGroup>
        <Image  width='100%'  src='/img/buyhouse.jpg' />
        </Col>
      </Row>
      <Row>
       <Col>
       <p>
       Step by step instructions to Buy a Home in Ireland
      </p>
       <p>
       Purchasing a home will presumably be maybe the greatest buy you at any point make. It's a significant responsibility and one that goes with a ton of additional expenses.

Consequently, you ought to set yourself up for the aggregate of the costs that accompany purchasing a home, particularly assuming it's the primary event when you've gotten it done.

Beneath, we've gathered a manual for help you with finishing the buy on your new home; from ensuring you have sufficient money and getting a home credit, to picking a region and tracking down the best property.

We've in like manner illustrated a portion of the charges you can hope to pay as well as any bills and different expenses whenever you've moved in.    </p>
         <p>
         Before you can even consider house shopping, you have to make sure that you acquire enough money. There are lots of fees that you should anticipate to pay when you buy a house, and we’ve canvassed the principal ones in the following section.

Your deposit plays a significant role in helping you get your dream home.

You are supposed to save 10 per cent of the property’s sale price, as a first-time buyer. For second-hand buyers and subsequent buyers, the saving for deposit percentage goes up to 20%.

It will be of immense help if you can afford more than the minimum deposit as this will save you some money in the longer run.

As indicated by the most recent Daft.ie House Price Report, the typical house price in Ireland from June 2018-2019 is around €263,000 that is a 3.7 per cent expansion from the past year.

For this, one requires a 10 per cent deposit of around €26,000.
         </p>
        
         <h2>Where does an abroad purchaser begin looking for the property they need to put resources into?</h2>
         <p>
         Your first stop ought to be the most wonderful city in Ireland, Dublin. 
         </p>
        
         <p>
         To buy a house in Ireland you must enter into an agreement with the seller of the house and everything you and the seller agree on must be
          written on paper, this is called a sales agreement. The sales agreement must be signed by a notary. The property is subject to a voetstoots clause.
         </p>
         <h2>WHAT FEES TO PAY WHEN PURCHASING A HOUSE?</h2>
         <p>
         Adjacent to your store, there are a few additional charges that you'll need to pay to finish the buy on your home.

Right off the bat, you'll need to bear the expense of stamp obligation. Stamp obligation is a sort of expense that you pay on the land or the property that you've purchased. In Ireland, it adds up to one percent of the cost of your home.

So assuming that you bought your home for €300,000, the stamp obligation charge would be €3,000. It's a fundamentally extensive measure of cash, so ensure you have to the point of covering this.

In the event that you're buying another form, the stamp obligation is the expense of the house less VAT, so guarantee you've determined this precisely.

Exactly when you're buying a house, you will require a specialist to complete all the authoritative work, conveyancing and different endeavors. You can pick a specialist appropriately, in any case, be ready to pay anything from €1,000 to €3,000. Besides, you should get a statement before their work begins to promise you can cover the costs.

Aside from these, different charges might consolidate land vault (from €400-800), a study (from €300) and local charge (around €500 consistently).

You may similarly be expected to pay for contract security. This is a sort of life coverage that takes care of the exceptional funds receivable on your home loan in the event of your end. For this, you'll need to pay a month to month charge till the residency of your home loan advance completions. </p>
         <p>
         When you have got your deposit along with the adequate money to cover the entirety of the above additional expenses, you have to ensure that you can get a mortgage loan for your home.

You can book a meeting with a bank or mortgage lender, who will evaluate your salary, outgoings and other personal conditions to decide if you can make the instalments that you state you can. You may even get Approval In Principle.

This is a sort of guarantee that means, when you’ve found an appropriate home that you’d prefer to buy, the bank will commit to furnishing you with a home loan if your situations haven’t changed.

In case if you couldn’t get a mortgage for any reasons, you won’t have the option to buy a home until your situation changes.

For instance, you may have become recently self-employed in that case you may not have sufficient bank statements to show the bank your salary.

Most banks will necessitate at least six months’ worth of bank statements and three years’ financial accounts that have been authorized by an accountant.
         </p>
         <h2>
         FIND THE IDEAL HOME </h2>
         <p>
         When you have ensured that you have got all the assets you need and that you can get a mortgage loan, you need to find your ideal home. Finding your ideal home may not be as simple as it sounds.

You must consider location, value, size, style and access. However, finding your new home ought to be an enthralling task, so make an effort not to get too worried about the entire process.  </p>
        
  <h2>WHEN DO I NEED HOME INSURANCE WHEN PURCHASING A HOUSE?</h2>




         <p>
         You should take out home insurance when you’ve finally purchased your house, and it’s formally yours.

Regardless of whether you haven’t moved in yet, home insurance can cover you from any loss that could be possible to the property. However, if you are keeping your home unoccupied for 30 days or more, you are required to take out unoccupied home insurance.</p>
<h2>WHAT BILLS DO YOU PAY AS A HOME-OWNER?</h2>
<p>
So, now that you have finally purchased your home and moved in, there are some bills and other costs that you may need to pay. The most significant are gas and electricity to ensure that you can cook at your home and use any electronic devices or appliances.

You will likewise need to pay for Local Property Tax (LPT). The amount of LPT you need to pay relies upon which band your home falls into. You can find these bands on the Revenue Commissioners website and perceive how much tax you ought to be paying.

Broadband and telephones are essentials in numerous homes these days, so you can anticipate paying for both of these to have a Wi-Fi connection. Additionally, if you would want to watch TV shows and movies along with other free channels, you are required to pay for a TV package. In case you watch any live TV, you will require a TV license. The cost of this could be up to €160 every year.</p>
  
 
  <Button variant="primary" size="lg" onClick={()=> contact()}>Contact us to get more information about buying a house</Button>
       </Col>
      
        
      </Row>
 
    </Container>
  )
}

export default PostScreen;