import React from 'react';
import { Container , Row , Col , Image ,Button} from 'react-bootstrap';
import styles from './SaleWorkFromHome.module.css';

const SaleWorkFromHome = ()=>{


return(
<Container className={styles.centerContainer}>
<Row>
    <Col >
     <h1>Jessica show us how she earns R40,000 a month after struggling to find a job due to Coronavirus </h1>
     <Image  width='100%'   src='/img/wmain.png' />
     <p>
     If you live in South Africa and regularly look for extra income, regardless of gender, education or level of experience, you owe it to yourself to read the amazing story shared by Jessica today.
     </p>
     <p>
     You see, 28-year-old Jessica, once an ordinary saleswoman, who left college, is now a freelance assistant earning on average R40,000 from her computer at home. Jessica tells us her success story and the exact steps she took to achieve financial success.
     </p>
     <p>
     You’ll also be able to reach your way to earning thousands on a regular basis from your laptop.
     </p>
     <Image  width='100%' responsive  src='/img/w2.png' />
     <p>So one day while surfing social media I came across a facebook post that talked about earning money online. It was a video guide on how to start as an online assistant. I was interested because I didn't have any money to start with all I had to do was to complete simple tasks for small to medium sized business online.</p>
    <p>So I started looking for more information and discovered Facebook groups, 
        where people discussed online assistans. I learned that there is a huge demand for online assistans especially in South Africa. The rand is weak and this saves European and American businesses millions.</p>
    <p>
     It worked from day one. I figured out the simple steps I needed to take attract companies and earned the first R3,400 within two days.
    </p>
    <p>
      Jessica managed to raise extra money from being an online assistant to start her own website called <a href="https://kh6eq.bemobtrk.com/click"><span>ClickEarners</span></a> that South Africans have been quietly using to earn money from during the Corona epidemic.
      
      </p>
      <Image  width='100%' responsive  src='/img/v8.png' />
      <p>
      ClickEarners is an online assistant market place, once you sign up there will be a list of simple tasks for you to complete. Once you compelte the tasks your account will be credited with the set price for each task.
     
     </p>
      <p>
      Jessica came up with a brilliant website helping less fortunate South Africans find work through her online platform.    
     </p>
     <p>
      Click Earners do all the hard work. I mean just imagine how hard it would be to get in contact with big companies and offer the same service.
      To make sure that there is more than enough work for everyone the platform is limited to 1,000 memebers only.
    </p>
    <p>
    A lead employment agency said: "There are now a lot more South Africans earning money online in the last year than ever before”. 
    In fact, with Corona people don't have much choice. Those that do not find internet based oppurtunities will have a hard time providing for their families. ”
    </p>
    <p>
     What you need to know is that you can easily join Click by entering your details on the <a href="https://kh6eq.bemobtrk.com/click"><span  >form on the next page</span> </a>. When you are ready to start pay the $57 admin fee and start completing tasks.
     Please note that payments below R5,000 will be paid weekly. Amounts above R5,000 will be paid daily.
    </p>
    <p>
     There is no maximum to the amount of tasks you can complete but Click Earners is limited to 1,000 members. 
    </p>
    <Image  width='100%' responsive  src='/img/checks.gif' />
    <h2>Final Thoughts</h2>
    <p>You won’t hear about it in the media, because it’s one of the best kept secrets. </p>
    <p>In these difficult economic times, everyone deserves an opportunity for extra money, unfortunately programs like these are only available to a select group.</p>
    <h2>
    Instructions for getting started with ClickEarners
    </h2>
    <ul>
        <li>
        <a href="https://kh6eq.bemobtrk.com/click"><span  className={styles.ctaText}>
          Open your account on the next page,
         </span> </a>if it`s still possible.
        </li>
        <li>
         Complete a short survery (This helps ClickEarners decide on the best tasks to give you).
        </li>
        <li>
          Choose your membership below to activate your account
        </li>
        <li>
        Login to the members area
        </li>
        <li>
         Follow the simple instructions to start working & earning!
        </li>
    </ul>
    <a href="https://kh6eq.bemobtrk.com/click">
    <Button variant="primary" size="lg" block> 
     Open your ClickEarners account.
    </Button>
    </a>
    </Col>
</Row>
</Container>
)
};

export default SaleWorkFromHome;