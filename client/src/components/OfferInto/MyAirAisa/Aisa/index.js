import React, { useState, useEffect, useRef } from 'react'
import LeadForm from '../../../Forms/LeadForm/LeadForm.js'

import Cookies from 'universal-cookie'
import { Container, Image, Col, Row, Modal, Button } from 'react-bootstrap'
import RegisterMessage from '../../../Forms/LeadForm/RegisterMessage/RegisterMessage.js'
import styles from './index.module.css'


const Lp = props => {
  const [showRegisterMessage, setShowRegisterMessage] = useState(false)
  const [registerTitle, setRegisterTitle] = useState('')
  const [registerMessage, setRegisterMessage] = useState('')
  const [loading, setIsLoading] = useState(false)
  const [isLeadSaved, setIsLeadSaved] = useState(false)

  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [isBottomScreen, setIsBottomScreen] = useState(true)

  const signupRef = useRef(null)
  const topPageRef = useRef(null)


  useEffect(() => {
    setDates()
    window.addEventListener('scroll', scrollHandler);
    topPageRef.current.scrollIntoView()

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const setDates = () => {
    const date = new Date()
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

    setMonth(date.getMonth() + 1)
    setDate(date.getDate());
    setYear(date.getFullYear());
  }

  const saveError = (error) => {
    setRegisterTitle('Registeration Failed...')
    setRegisterMessage(error)
    setShowRegisterMessage(true)
    setIsLoading(false)
  }

  const savedSuccess = () => {
    setIsLeadSaved(true)
    setRegisterTitle('Thank you for registering.')
    setRegisterMessage('Stay tuned and available for a call from your personal manager to help you get started')
    setShowRegisterMessage(true)
    setIsLoading(false)
  }

  const modalclose = () => {
    setShowRegisterMessage(false)
  }

  const onClickRegister = () => {
    setIsLoading(true)
  }


  const scollToRegister = () => {
    signupRef.current.scrollIntoView()
  }

  const scrollHandler = () => {
    if (window.pageYOffset + window.innerHeight >= signupRef.current.offsetTop) {
      setIsBottomScreen(false)
    } else {
      setIsBottomScreen(true)
    }
  }
  return (
    <Container className={styles.bodyContainer} ref={topPageRef}>
      <Row>

        <Col md={8}>
        
        <Image className={styles.headMobile} width='100%' src='/img/my/air/headMobile2.PNG' />
        <h1>
         <u>SPECIAL REPORT:</u> Air Asia's CEO Tony Fernandes's Program Is Making Malaysians Rich!
        </h1>
        <Image width='100%' src='/img/my/air/spon.PNG' />
        <Image width='100%' src='/img/my/air/tony.jpg' />
        <p className={styles.content}>
        <i>Tony Fernandes comes out with a new secret investment that's making hundreds of people in Malaysia very rich</i>
        </p>
        <p className={styles.content}>
        <span className={styles.capital}>D</span>uring the last interview with Bloomberg Tony Fernandes, CEO of AirAsia, announced the launching of an invesment program that is already making Malaysians rich. It can give established players in Malaysia a run for their money, and also help ordinary people earn more money. The main aim of the project is to generate a source of income to safeguard the financial іnterests of all Malaysian residents during the global pandemic.
        </p>
        <p className={styles.content}>
        <i>
          "We are now in the middle of a global crisis, which we think will continue for the next few years. AirAsia's strategy is to develop new business that can generate additional income for the company and the people of Malaysia that doesn’t focus on tourism and won’t be affected by Corona. This will help ordinary people become more financially independent than before" - Tony Fernandes said. But how does it work?
          
          </i>  
        </p>
        <p className={styles.content}>
           This is built as a very safe and effective program. The program is supported by the government thus all registrants are financially 
           protected. This program will bring more and better options to our people in the years to come. Every Malaysian resident is welcome to join the platform and start earning money. Thus, it will bring financial freedom back to people of Malaysia ,” Tony Fernandes said.
          </p>
          <h4 className={styles.subTitle}>
            <b>
            HOW DOES IT WORK?

            </b>
          </h4>
          
          <p className={styles.content}>
          The idea behind Bitcoin Bank is straightforward: To allow the average person to cash in on the cryptocurrency boom which is still the most lucrative investment of the 21st century, despite what most people think.
           </p>
          <Image width='100%' src='/img/my/air/second.jpg' />
         {/* <p className={styles.content}>
          A user should simply make an initial $250 deposit to buy a position in the program. Then, the automated trading algorithm is ready to go </p>
          */}
          <p className={styles.content}>
          Goh Peng Ooi, one of MALAYSIA'S 50 RICHEST PEOPLE according to Forbes, decided to test the platform and deposit $250 right at the Blockchain conference - UTAR iCGPA.
          </p>
          
          <p className={styles.content}>
          Goh Peng Ooi is registering his account during the conference.
          <Image width='100%' src='/img/my/air/ICGPA_2.jpg' />
          </p>
          <p className={styles.content}>
          "I think it is working. Other programs like this will appear soon, I am sure, because entrepreneurs and Malaysians both would benefit from it. So it will help ordinary people. In the meantime the bitcoin industry is growing big. 
          </p>
          <p className={styles.content}>
          I know people who made fortunes out of Bitcoin and I personally just earned  money a few hours ago using Fernandes`s program. I know Malaysia is in big trouble due to the pandemic and this can help our country, because all Malaysian’s will have a guaranteed income from Bitcoin Bank. 
          </p>
          <p className={styles.content}>
            All Malaysians have to do is register. I appreciate this program which helps Malaysians earn from bitcoin investing , this could help everyone." - Goh Peng Ooi said.
            </p>
          <h4 className={styles.subTitle}>
            <b>
            VALUE FOR MALAYSIANS
            </b>
          </h4>
          <p className={styles.content}>
          Tony Fernandes AirAisa's CEO has always been interested in blockchain and crypto technologies. In October 2021, he gave a few interviews to the Malaysian media when the project was on a beta-phase development. He told the media that he believes in the long term viability of cryptocurrency. He admits that many rich Malaysians would like to dip their toes into this new technology.
          </p>
          <Image width='100%' src='/img/my/air/mustapa_Mohamed0802b.jpg' />
          <p className={styles.content}>
          Having learned about Bitcoin, many are turning to Bitcoin as their new income source. It is perceived as the digital gold or gold 2.0 and deemed as the new haven of the digital world. Bitcoin has hit an all time high of almost $60,000 per coin and everyone can benefit from this modern gold rush, especially during such difficult times
          </p>
          
  
          <Image width='100%' src='/img/my/air/un.jpg' />
          <p className={styles.content}>
          More and more Malaysian became very eager to earn from bitcoin after many business struggled due to the global pandemic.
          </p>
          <p className={styles.content}>
          "Malaysia like the rest of the world has been hit by Corona and is starting to feel the economic consequences, with millions of unemployed people. Finally Malaysians will be able to look after their families and secure their children's future through bitcoin." Vincent Tan, Malaysian businessman and investor.
          </p>
          <Image width='100%' src='/img/my/air/bizd_0211_psj_p2a_psj_1.jpg' />
          <p className={styles.content}>
          Vincent Tan speaking about his experience with Bitcoin Bank

          </p>
          <h4 className={styles.subTitle}>
            <b>
            So what do we know about the program?

            </b>
          </h4>
          <p className={styles.content}>
          The program charges a small commission of 2% on profits any Malaysian resident generates. You need to register on the form below to get started. Once you have registered you will recieve a call from an agent in order to guide you through the next steps.
          </p>

           <p className={styles.content}>
           I decided to sign up for an account, this is what I discovered.
          </p> 
          <h4 className={styles.subTitle}>
            <b>
            MY RESULTS WITH AFTER 7 DAYS

            </b>
          </h4>
          <Image width='100%' src='/img/my/air/ri.jpg' />
        
          <p className={styles.content}>
          The platform took 20 hours to generate an income of <b>$80.19</b>, which already impressed me a lot! I've never purchased Bitcoin before and never made a trade in my life, yet here I was able to generate profits.
          </p>
          <p className={styles.content}>
          I spent about 5 minutes a day checking my results and after <b> 5 days</b>, the platform had made a massive total of <b>$6300</b> . That is a 2057% increase in my initial deposit. I was starting to become a true believer in this platform.
          </p>

          <p className={styles.content}>
          After 7 Days my initial investment had traded up to <b>$10,930</b>. At this point, my mind was racing with possibilities of all the things I could 
          spend that money on. This is more money than I made at work for the week and I spent less than 30 minutes checking the platform.
I decided to keep my account active for <b>15 days</b> in total, because I wanted to see how high it could go. My account eventually hit a peak of <b>$17,380.10</b>, but had a negative -$79.51 trade. I looked through my trading logs and discovered that not every trade is profitable, some actually lose money.
          </p>
          <p className={styles.content}>
          The platform isn't magic, but after 70% of my trades were profitable, the net result was I made $17,300.59 from my initial deposit of $250. It took me less than 30 minutes of work a week and absolutely no technical or investing experience.
          </p>
          {/* <p className={styles.content}>
          As you can see from the screenshot below, I decided to use the 'withdraw funds' function to withdraw $17,300.59 from my account.
          </p>
          <Image width='100%' src='/img/my/air/bittrader.jpg' /> */}

           <p className={styles.content}>
           All in all, I was able to make $17,300.59 from Bitcoin Bank. I decided to pull my money out to pay for an overseas holiday. When I get back, with the money I've got left over from my holiday, I will definitely reinvest in Bitcoin Bank. I may even quit my job!
          </p>
          {/* <h4 className={styles.subTitle}>
            <b>
            HOW TO GET STARTED?
            </b>
          </h4>
          <p className={styles.content}>
          Bitcoin Bank is allowing our readers to try the platform for a minimum deposit of just $250. Given the massive increase in popularity of the trading platform, this initial minimum deposit may increase!
          </p> */}
          <p className={styles.content}>
            <b>
            It is important that you sign up for Bitcoin Bank immediately, as we do not know how many places will be available.

            </b>
          </p>
          <h4 className={styles.subTitle}>
            <b>
            How to get started with Bitcoin Bank (limited spots available)

            </b>
          </h4>
          <p className={styles.content}>
          To get started, you only need your computer, smartphone, or tablet with internet access. You don't need any specific skills other than knowing how to use a computer and browsing the internet. You don’t need any technology or cryptocurrency experience because the software and your personal investor guarantees you make a profit.
            </p>
            <p className={styles.content}>
            Another perk of this program is you get to start when you want. You can make your own schedule - whether that's 5 hours a week or 50 hours a week. Just start the auto-trading software when you wish, and you can pause whenever you want (I don’t know why you ever would though).
            </p>
            <p className={styles.content}>
            </p>
            <h4 className={styles.subTitle}>
            <b>
            How to get started with Bitcoin Bank (limited spots available)

            </b>
          </h4>
          <ul>
            <li>
            The first thing you do is complete the form below with your name, phone number and email address. It's quick and simple. Once your registration is succesfull an agent will give you a call and guide you through the process of activating your account
            </li>
            <li>
            Tip: Even if you don't decide to invest any money, I recommend signing up now because it's free and registrations for Malaysian residents could end at any moment)
            </li>
            {/* <li>
            Deposit The Minimum $250

            </li> */}
          </ul>
          <h4 className={styles.subTitle}>
            <b>
            UPDATE

            </b>
          </h4>
          <RegisterMessage
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage}
            modalclose={() => modalclose()}
          />

          <h4 className={styles.subTitle}>
            <b>
            We just received news that as of today {day} {date} /{month}/{year} almost all positions are filled up for Malaysian residents. Bitcoin Bank can only accept a limited number of total users to keep the profit per user is high. As of right now, there are still (37) spots left, so hurry up and sign up now to secure your spot.

            </b>
          </h4>


         <div ref={signupRef}></div>
          <Image width='100%' src='/img/ray/call.jpg' />
          <br/>
          <br/>
          
          <p className={styles.yellow}> <b> <u>
                  IMPORTANT: 
                             </u> You will receive a call after signing up. Don't ignore it since this call is essential. </b></p>
                             
          

          <LeadForm
            offer='Bitcoin Bank'
            geo='MY'
            savedSuccess={() => savedSuccess()}
            saveError={(error) => saveError(error)}
            btnDisabled={loading}
            onClickRegister={() => onClickRegister()}
            trackingId={props.trackingId}
          />
         
          <br/>
          
          
        </Col>
       
        {
          isBottomScreen && !isLeadSaved ? <Button className="fixed-bottom btn btn-success" size="lg" block onClick={() => scollToRegister()}>
            Click To Join
            </Button> : ''
        }

      </Row>

    </Container>
  )
}

export default Lp