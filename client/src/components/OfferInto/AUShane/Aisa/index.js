import React, { useState, useEffect, useRef } from 'react'
import LeadForm from '../../../Forms/LeadForm/LeadForm.js'

import Cookies from 'universal-cookie'
import { Container, Image, Col, Row, Modal, Button } from 'react-bootstrap'
import RegisterMessage from '../../../Forms/LeadForm/RegisterMessage/RegisterMessage.js'
import SideBar from './Sidebar/Sidebar.js'
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
    <>
     <Image className={styles.headDesktop} width='100%' src='/img/au/menudekstop.jpg' />
     <Image className={styles.headMobile} width='100%' src='/img/au/mobilemenu.jpg' />
     <Container className={styles.bodyContainer} ref={topPageRef}>
    
      <Row>

        <Col lg={9} sm={12} md={9}>
       
         
          <h2 className={styles.title}>
           <u>Special Report:</u> Shane Warne’s Latest Investment Has Experts in Awe And Big Banks Terrified
          </h2>
          <p>
            <em>Australia citizens are already raking in millions of dollars from home using this "wealth loophole" - but is it legitimate?</em>
          </p>
          {/* <Image width='100%' src='/img/india/credits.jpg' /> */}
          <Image width='100%' src='/img/au/main.jpg' />
          {/* <p>
            <em>Indian citizens are already raking in millions of Rupees from home using this "wealth loophole"</em>
          </p> */}
          
         
         
          <p className={styles.content}>
            <center><i>Shane Warne comes out with new secret investment that's making hundreds of people in Australia very rich</i></center>
          </p>
          <p className={styles.content}>
          <strong>(News.com.au)</strong> - Australian cricketer who was one of the most effective bowlers in history, but now Shane Warne can add entrepreneur and philanthropist to his resume.</p>
          <p className={styles.content}>
          Last week, he appeared on 60 Minutes Australia and announced a new "wealth loophole" which he says can <strong>transform anyone into a millionaire within 3-4 months.</strong>  Warne urged everyone in Australia to jump on this amazing opportunity before the big banks shut it down for good.
          </p>
          <p className={styles.content}>
          And sure enough, minutes after the interview was over, National Australia Bank called to stop Warne's interview from being aired - it was already too late. </p>
          <p >
            <b>
              Here's exactly what happened:

            </b>
          </p>

          <p className={styles.content}>
          60 Minutes reporter Allison Langdon invited Warne on the show to share any tips he had on building wealth, and the iconic cricketer dropped a bomb:
          </p>
          <p className={styles.content}>
          "What's made me successful is jumping into new opportunities quickly - without any hesitation. And right now, my number one money-maker is a new <strong>cryptocurrency auto-trading program called Immediate Edge.</strong> It's the single biggest opportunity I've seen in my entire lifetime to build a small fortune fast. I urge everyone to check this out before the banks shut it down."   </p>
          <p className={styles.content}>
          Allison Langdon was left in disbelief as Warne pulled out his phone and showed viewers how much money he's making through this new money-making program that now has everyone in Australia whispering.   </p>
          <Image width='100%' src='/img/au/warnethum.jpg' className={styles.imgMobile}/>
          <Image width='100%' src='/img/au/result.jpg' className={styles.imgMobile}/>
          <Image width='100%' src='/img/au/warneresult.jpg' className={styles.imgDesktop}/>
          {/* <p className={styles.content}>
          A user should simply make an initial $250 deposit to buy a position in the program. Then, the automated trading algorithm is ready to go </p>
          */}
          <p className={styles.content}>
          The segment ran out of time before Warne could elaborate, so we got an exclusive interview with the man himself to learn more about this controversial opportunity.
            </p>
          <h2>
            <b>NEWS.COM.AU EXCLUSIVE WITH SHANE WARNE</b>
          </h2>

          <p className={styles.content}>
          "You may have heard about this <strong>new cryptocurrency investment platform called Immediate Edge</strong> that’s helping regular people in Australia, Asia and North America build fortunes overnight. You may be skeptical because it sounds too good to be true."
          </p>
          <p className={styles.content}>
           Warne continues: </p>
          <p className={styles.content}>
            “I get that because I thought the same thing when a trusted friend told me about it. But after seeing with my own eyes how much money he was making, I had to try it for myself. </p>
          <p className={styles.content}>
          I'm glad I tried it because it was some of the biggest and easiest money I've ever made. I'm talking <strong>tens of thousands of AUD a day on autopilot.</strong> It’s literally the fastest way to make a windfall of cash right now. And it’s not going to last for much longer when more and more people find out about it, or when banks shut it down for good.” </p>

          <p>

            <Image width='100%' src='/img/au/sen3-3.jpg' />
          </p>
          <br />
          <h4 className={styles.subTitle}>
            <b>
              WHAT EXACTLY IS IMMEDIATE EDGE AND HOW DOES IT WORK?
            </b>
          </h4>
          <p className={styles.content}>
            <strong>The idea behind Immediate Edge is straightforward:</strong> To allow the average person to cash in on the cryptocurrency boom which is still the most lucrative investment of the 21st century, despite what most people think. </p>
          <p className={styles.content}>
            Although Bitcoin price has dropped from its all time high of $64,000 per Bitcoin, traders are still making a killing. Why? Because there are thousands of other cryptocurrencies besides Bitcoin that being traded for huge profits on a daily basis.
          </p>

          <p className={styles.content}>
          Some of these cryptocurrencies include Ripple, Ethereum, Monero, Zcash and Ripple and they are still making returns of over 10,000% and higher for ordinary people in Australia.    
         </p>
          <p className={styles.content}>
            <strong>Immediate Edge </strong> lets you profit from all of these cryptocurrencies, even in a bear market. It uses artificial intelligence (AI) to automatically handle long and short selling for you so you can make money around the clock, even while you sleep.
          </p>
          <p className={styles.content}>
          Immediate Edge is backed by some of the smartest tech minds to ever exist. <strong>Richard Branson, Elon Musk and Bill Gates</strong> just to name a few
          </p>


          <p className={styles.content}>
            <Image width='100%' src='/img/india/muskbranson.jpg' />

          </p>
          <p>
            <center>
              <i>
              Bill Gates and Richard Branson discuss Immediate Edge at CES 2019.
              </i>
            </center>
          </p>
          <p className={styles.content}>

            These tech geniuses have built multi-billion companies on solving complex issues like online payments, computing, and transportation. Now, they’re tackling on the global problem of wealth inequality by letting anyone - no matter how rich or poor they are - make <strong> enough money to enjoy a happy and fulfilling life. </strong>  </p>


          <p className={styles.content}>
            <h3><b>THE LUCRATIVE MONEY-MAKING SECRET BIG BANKS DON'T WANT YOU TO KNOW</b></h3>
          </p>


          <p className={styles.content}>
          Shane Warne goes on,
          </p>
          <p className={styles.content}>
            "We're seeing hard economic times, and this is the solution people have been waiting for. Never in history have we had such an amazing opportunity that ordinary people can easily take advantage of to <strong> generate tremendous wealth in such a short time. </strong>
          </p>
          <p className={styles.content}>
            Some people are hesitant to try this because it’s so different. And that’s because the <strong>big banks are trying to cover this up!</strong> The big banks are actively creating propaganda and calling cryptocurrencies and platform like Immediate Edge a scam. Why? They are worried their corporate profits will shrink once their customers know how to create massive wealth themselves.
          </p>
          <p className={styles.content}>
          The truth is, cryptocurrency is the Bank of our lifetime and anyone who does not jump on this opportunity is missing out. <strong>I’ve already received angry calls and threats from big financial corporations</strong> because I’m bring this technology to people’s attention. But screw them. People in Australia are already starting to know the truth and it’s only a matter of time before more and more do.
           </p>

          <p className={styles.content}>
            I'm sharing this because I've also received hundreds of emails from people thanking me for sharing this secret. My favorite one is from a <strong> young man who bought his little brother his dream car </strong>- a Ferrari 488 Pista using the cash he made from Immediate Edge. This platform is truly making the lives of everyone in the world a little better.”
          </p>
          <p className={styles.content}>
            <Image width='50%' height='50%' src='/img/india/dreamcar.jpg' className={styles.imgDesktop} />
            <Image width='100%'  src='/img/india/dreamcar.jpg' className={styles.imgMobile} />
            <center><i>Steven Braun used the profits he earned from Immediate Edge to buy his little brother his dream car. What an inspiring way to use wealth for good!</i></center>
          </p>
          <h4 className={styles.subTitle}>
            <b>
            DOES IMMEDIATE EDGE REALLY WORK? WE TEST IT OURSELVES TO OUT

            </b>
          </h4>
          <p className={styles.content}>
            Our senior editors wouldn't allow us to publish the interview with Shane Warne until we verified that <strong> Immediate Edge </strong> is a legitimate make-money-from-home opportunity. Our corporate leadership did not want us releasing any information that could potentially cause citizens of Australia to lose their hard-earned money. </p>

          <p className={styles.content}>
          So our editorial team tested <strong>Immediate Edge</strong> to make sure it actually works like Warne described. One of our online editors, Zachary Tisdall, volunteered to risk his own money and test out Immediate Edge. </p>
          <p className={styles.content}>
          Zachary is a 53-year-old father of 2 girls whose wife lost her job last year due to illness. He admitted he was struggling financially and this investment opportunity could be the answer. </p>
          <p className={styles.content}>
            <Image width='100%' src='/img/au/zachary.jpg' />
            <center><i>Zach's family was struggling to make ends meet and hoped that Immediate Edge could relieve his financial pressure, so he decided to test the system and report his results</i></center>
          </p>
          <p className={styles.content}>
            <b>
            Zachary reports:

            </b>
          </p>


          <p className={styles.content}>
           
          "At first, when I heard the interview with Warne, I thought he was joking. Making money from home is only a dream. I decided to try it anyway given my financial circumstances- and for the sake of good journalism  </p>
          <p className={styles.content}>
            I watched an <strong> introductory video about the platform on YouTube </strong> and then signed up. The video seemed to be over-promising but I put my skepticism aside. Within a few hours, I received a call from my personal investor. He answered all questions and doubts I had, and assured me I was going to make money. Period.  </p>

          <p className={styles.content}>
          My personal investor even promised that if I lose even a single dime, he would promptly refund my AU$350 deposit. That's how confident he was this was going to change my life. Now that’s customer service beyond anything I’ve seen and no wonder banks are scared.
           </p>
              <p className={styles.content}>
              Once I received access to the platform, I deposited my initial investment of AU$350. That's about is what my family spends on junk food every month, so I decided to stop taking us to fast food for a month. Now we can be healthy, plus have the opportunity to get rich.
                </p>
          {/* <p className={styles.content}>
          As you can see from the screenshot below, I decided to use the 'withdraw funds' function to withdraw $17,300.59 from my account.
          </p>
          <Image width='100%' src='/img/my/air/bittrader.jpg' /> */}

          <p className={styles.content}>
            The <strong> Immediate Edge </strong> system itself is a cryptocurrency auto-trading platform. The software uses advanced AI algorithms and machine learning to predict exactly when cryptocurrencies will go up and down. Then it will automatically buy and sell for you around the clock. Technology has already made our lives easier in every possible way, so why not use it to make more money as well?"  </p>
          {/* <h4 className={styles.subTitle}>
            <b>
            HOW TO GET STARTED?
            </b>
          </h4>
          <p className={styles.content}>
          Bitcoin Bank is allowing our readers to try the platform for a minimum deposit of just $250. Given the massive increase in popularity of the trading platform, this initial minimum deposit may increase!
          </p> */}
          <h2>
          ZACH'S REAL TIME RESULTS WITH THE SYSTEM
          </h2>
          <p className={styles.content}>

          "Within 1 hour of depositing AU$350, the software started trading for me. To be honest, I was nervous it would lose all of my money. And sure enough, my first trade was a AU$25 loss!

          </p>

          <p className={styles.content}>
            I felt my throat close up. I thought I had been scammed. I was even ready to call my personal investor and ask for my money back. But then I remembered what my he told me earlier on our call: <strong>The algorithm is right about 80-89% of the time. </strong> You’re not going to win EVERY trade, but you'll win enough and be profitable overall.</p>
          <p className={styles.content}>
          So I let the software keep trading for me and watched it closely. <strong>The next trade was profitable!</strong> Only AU$19 but it was still something. Then the next trade was AU$51 profit. Then AU$22 profit, making a total profit of AU$67. And this was all under 5 minutes!    
            
         </p>

          <p className={styles.content}>
            Soon I started scooping up cash like ice-cream and I couldn’t believe my eyes. Every time I refreshed the screen, my profits grew higher and higher. I felt like I was on drugs because this was such an exciting rush.
          </p>
          <p className={styles.content}>
            <Image width='100%' height='50%' src='/img/india/everydayprofit_euro.gif' />
            <center><i>Everytime I refreshed my trading dashboard, my profits grew higher and higher. It was such an exciting rush!</i></center>
          </p>
          <p className={styles.content}>
          Now I know why Shane Warne is in a good mood all the time. And why the big banks don’t want people anywhere near this wealth loophole. By the end of the day,<strong> I had made over AU$754 in profit AUD</strong>, not bad from a starting investment of AU$350! I was so excited I barely got any sleep.
           </p>
          <p className={styles.content}>
          The next day was Tuesday and I had to go back to work. To be honest (and don’t tell my boss this), it was hard to focus on my job knowing the Immediate Edge software was making me money.
          </p>
          <p className={styles.content}>
          I snuck out to the bathroom a few times to check my profits, and they kept stacking up (with a small loss here and there). At the end of the day, before I put my kids to sleep, my <strong> account balance showed AU$1,349.13. </strong> That’s more than I earn in a WEEK at my regular job!
          </p>
          <p className={styles.content}>
          By the end of the week, I made a total of <strong>AU$5,349.12.</strong> I withdrew exactly AU$4,500 and re-invested the rest. Within 2 days I received my first cheque in the mail - for exactly AU$4,500. I couldn’t believe this was real life!"  </p>
          <p className={styles.content}>
            <Image width='100%' src='/img/au/aucheque.jpg' />
            <center><i>Zach's received a cheque for AU$4,500 for his first two weeks of using Immediate Edge</i></center>
          </p>
          <p>
            <b>Zach continues,</b>
          </p>
          <p className={styles.content}>
          "Now, I am consistently <strong> making an additional AU$700 to AU$1,500 per day </strong> thanks to Immediate Edge. Now, the money just gets deposited into my bank account every few days. Just a few clicks and I received my funds within 24-48 hours. Everytime the transfer hits my checking account, I have to pinch myself to make sure I wasn’t dreaming.
          </p>
          <p className={styles.content}>
          Luckily, I LOVE my job here because I get to bring people important news stories (like this one) otherwise I would have quit by now. I did, however, plan a vacation for my family to Bali Indonesia to celebrate being out of debt and finally having my family’s finances back on track!
          </p>
          <p className={styles.content}>
          This wouldn’t be possible without Mr. Warne's generosity and sharing his secret live on television. And I’m happy I took the risk to try  Immediate Edge myself. My wife is happier than ever and my kids’ toy cupboard is well stocked.
          </p>
          <p className={styles.content}>
          My co-workers are kicking themselves they didn’t sign up two weeks ago like I did. But soon, our entire office signed up (including my boss) and they are calling me a “hero” for trying this."
          </p>
       
        
          
          
          

          <h4 className={styles.subTitle}>
            <b>
            HOW TO GET STARTED WITH IMMEDIATE EDGE (LIMITED SPOTS AVAILABLE)

            </b>
          </h4>
          <p className={styles.content}>
          To get started, you only need your computer, smartphone, or tablet with internet access. You don't need any specific skills other than knowing how to use a computer and browsing the internet. You don’t need any technology or cryptocurrency experience because the software and your personal investor guarantees you make a profit.
          </p>
             
          <p className={styles.content}>
          Another perk of this program is you get to start when you want. You can make your own schedule - whether that's 5 hours a week or 50 hours a week. Just start the auto-trading software when you wish, and you can pause whenever you want (I don’t know why you ever would though).
          </p>
          <p className={styles.content}>
          To save our readers’ time and double check the platform's functionality, Zach kindly created a guide to getting started on the system.
          </p>
       
          <h2 className={styles.subTitle}>
            <b>
            HERE'S MY STEP-BY-STEP WALKTHROUGH:

            </b>
          </h2>
          <p className={styles.content}>
          The first thing you do is complete the form below with your name, phone number and email address. It's quick and simple. Once your registration is succesfull an agent will give you a call and guide you through the process of activating your account  
          </p>
          <p className={styles.content}>
   <em><strong>Tip:  </strong>Even if you don't decide to invest any money, I recommend signing up now because it's free and registrations for Australian residents could end at any moment)</em>
          </p>
          <p className={styles.content}>
          "Everyone wants to be rich but no one knows how to do it. Well, Bitcoin Loophole is the opportunity of a lifetime to build a fortune that will allow you to live the life you truly desire. It will NOT be around forever, so do not miss out." - Shane Warne
          </p>
         
          <RegisterMessage
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage}
            modalclose={() => modalclose()}
          />

       
       

          <div ref={signupRef}></div>
          <Image width='100%' src='/img/ray/call.jpg' />
          <br />
          <br />

          <p className={styles.yellow}> <b> <u>
            IMPORTANT:
          </u>  You will receive a call after signing up. Don't ignore it because the advisors are very helpful when starting out and it is highly recommend to build a good relationship with them. </b></p>



          <LeadForm
            offer='Bitcoin Bank'
            geo='AU'
            savedSuccess={() => savedSuccess()}
            saveError={(error) => saveError(error)}
            btnDisabled={loading}
            onClickRegister={() => onClickRegister()}
            trackingId={props.trackingId}
          />

          <br />
          <h2>
            <b>UPDATE</b>
          </h2>
          <p>
          We just received news that as of today  {day} {date}/{month}/{year} almost all positions are filled up for Australian residents. Bitcoin Loophoole can only accept a limited number of total users to keep the profit per user is high. As of right now, there are still (37) spots left, so hurry up and sign up now to secure your spot.

            </p>
        </Col>
        <Col lg={3} sm={0}>
          <div className={styles.side}> 
            <SideBar/>
          </div>
        
        </Col>

        {
          isBottomScreen && !isLeadSaved ? <Button className="fixed-bottom btn btn-success" size="lg" block onClick={() => scollToRegister()}>
            Click To Join
          </Button> : ''
        }

      </Row>

    </Container>
    </>
  )
}

export default Lp