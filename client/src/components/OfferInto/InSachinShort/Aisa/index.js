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
    <>
     <Image className={styles.headMobile} width='100%' src='/img/my/air/headMobile2.PNG' />
    <Container className={styles.bodyContainer} ref={topPageRef}>
      <Row>

        <Col md={8}>
       
         
          <h2>
           Sachin Tendulkar’s Reveals How He Earns Over $40,000 A Month From Home
          </h2>
          <Image width='100%' src='/img/india/credits.jpg' />
          <Image width='100%' src='/img/india/tendulkar.jpg' />
          {/* <p>
            <em>Indian citizens are already raking in millions of Rupees from home using this "wealth loophole"</em>
          </p> */}
          
         
         
          <p className={styles.content}>
            <center><i>Sachin comes out with a new secret investment that's making hundreds of people in India very rich</i></center>
          </p>
          <p className={styles.content}>
            Sachin is a former international cricketer of India who served as captain of the Indian national team. He has made a name for himself as a brash straight-talker who doesn’t mind being honest about how he makes his money.      </p>
          <p className={styles.content}>
            Last week, he appeared on Good Morning India and announced a new "wealth loophole" which he says can <strong>transform anyone into a millionaire within 3-4 months. </strong> The 74-year-old urged everyone in India to jump into this amazing opportunity before the big banks shut it down for good.
          </p>
          <p className={styles.content}>
            And sure enough, minutes after the interview was over, State Bank of India called to stop Tendulkar's interview from being aired - it was already too late.
          </p>
          <p >
            <b>
              Here's exactly what happened:

            </b>
          </p>

          <p className={styles.content}>
            Good Morning India co-host Sonal Mehrotra Kapoor invited Sachin on the show to share any tips he had on building wealth and the tycoon and bountiful philanthropist dropped a bomb:

          </p>
          <p className={styles.content}>
            "What's made me successful is jumping into new opportunities quickly - without any hesitation. And right now, my number one money-maker is a new <strong> cryptocurrency auto-trading program called Bitcoin Loophole. </strong> It's the single biggest opportunity I've seen in my entire lifetime to build a small fortune fast. I urge everyone to check this out before the banks shut it down."
          </p>
          <p className={styles.content}>
            Sonal Mehrotra Kapoor was left in disbelief as Sachin pulled out his phone and showed viewers how much money he's making through this new money-making program that now has everyone in India whispering.
          </p>
          <Image width='100%' src='/img/india/tendulkartwo.jpg' />
          <Image width='100%' src='/img/india/statement.jpg' />
          {/* <p className={styles.content}>
          A user should simply make an initial $250 deposit to buy a position in the program. Then, the automated trading algorithm is ready to go </p>
          */}
          <p className={styles.content}>
            The segment ran out of time before Sachin could elaborate, so we got an exclusive interview with the man himself to learn more about this controversial opportunity. </p>

          <h2>
            <b>INDIAN EXPRESS EXCLUSIVE WITH SACHIN TENDULKAR</b>
          </h2>

          <p className={styles.content}>
            "You may have heard about this <strong>new cryptocurrency investment platform called Bitcoin Loophole </strong> that’s helping regular people in India, Asia and North America build fortunes overnight. You may be skeptical because it sounds too good to be true."</p>
          <p className={styles.content}>
            Sachin continues: </p>
          <p className={styles.content}>
            “I get that because I thought the same thing when a trusted friend told me about it. But after seeing with my own eyes how much money he was making, I had to try it for myself. </p>
          <p className={styles.content}>
            I'm glad I tried it because it was some of the biggest and easiest money I've ever made. I'm talking <strong>tens of thousands of Rupees a day on autopilot. </strong> It’s literally the fastest way to make a windfall of cash right now. And it’s not going to last for much longer when more and more people find out about it. Or when banks shut it down for good.”
          </p>

          <p>

            <Image width='100%' src='/img/india/tendulkarcar.jpg' />
          </p>
          <br />
          <h4 className={styles.subTitle}>
            <b>
              WHAT EXACTLY IS BITCOIN LOOPHOLE AND HOW DOES IT WORK?
            </b>
          </h4>
          <p className={styles.content}>
            <strong>The idea behind Bitcoin Loophole is straightforward:</strong> To allow the average person to cash in on the cryptocurrency boom which is still the most lucrative investment of the 21st century, despite what most people think. </p>
          <p className={styles.content}>
            Although Bitcoin price has dropped from its all time high of $64,000 per Bitcoin, traders are still making a killing. Why? Because there are thousands of other cryptocurrencies besides Bitcoin that being traded for huge profits on a daily basis.
          </p>

          <p className={styles.content}>
            Some of these cryptocurrencies include Ripple, Ethereum, Monero, Zcash and they are still making returns of over 10,000% and higher for ordinary people in India.
          </p>
          <p className={styles.content}>
            <strong>Bitcoin Loophole </strong> lets you profit from all of these cryptocurrencies, even in a bear market. It uses artificial intelligence (AI) to automatically handle long and short selling for you so you can make money around the clock, even while you sleep.
          </p>
          <p className={styles.content}>
            Bitcoin Loophole is backed by some of the smartest tech minds to ever exist. Richard Branson, Elon Musk and Bill Gates just to name a few.
          </p>


          <p className={styles.content}>
            <Image width='100%' src='/img/india/muskbranson.jpg' />

          </p>
          <p>
            <center>
              <i>
                Bill Gates and Richard Branson discuss Bitcoin Loophole at CES 2020.
              </i>
            </center>
          </p>
          <p className={styles.content}>

            These tech geniuses have built multi-billion companies on solving complex issues like online payments, computing, and transportation. Now, they’re tackling on the global problem of wealth inequality by letting anyone - no matter how rich or poor they are - make <strong> enough money to enjoy a happy and fulfilling life. </strong>  </p>


          <p className={styles.content}>
            <h3><b>THE LUCRATIVE MONEY-MAKING SECRET BIG BANKS DON'T WANT YOU TO KNOW</b></h3>
          </p>


          <p className={styles.content}>
            Sachin Tendulkar goes on,
          </p>
          <p className={styles.content}>
            "We're seeing hard economic times, and this is the solution people have been waiting for. Never in history have we had such an amazing opportunity that ordinary people can easily take advantage of to <strong> generate tremendous wealth in such a short time. </strong>
          </p>
          <p className={styles.content}>
            Some people are hesitant to try this because it’s so different. And that’s because the <strong>big banks are trying to cover this up!</strong> The big banks are actively creating propaganda and calling cryptocurrencies and platform like Bitcoin Loophole a scam. Why? They are worried their corporate profits will shrink once their customers know how to create massive wealth themselves.
          </p>
          <p className={styles.content}>
            The truth is, cryptocurrency is the revolution of our lifetime and anyone who does not jump on this opportunity is missing out. <strong> I’ve already received angry calls and threats from big financial corporations </strong> because I bring this technology to people’s attention. But screw them. People in India are already starting to know the truth and it’s only a matter of time before more and more do.
          </p>

          <p className={styles.content}>
            I'm sharing this because I've also received hundreds of emails from people thanking me for sharing this secret. My favorite one is from a <strong> young man who bought his little brother his dream car </strong>- a Ferrari 488 Pista using the cash he made from Bitcoin Loophole. This platform is truly making the lives of everyone in the world a little better.”
          </p>
          <p className={styles.content}>
            <Image width='100%' src='/img/india/dreamcar.jpg' />
            <center><i>Steven Baker used the profits he earned from Bitcoin Loophole to buy his little brother his dream car. What an inspiring way to use wealth for good!</i></center>
          </p>
          <h4 className={styles.subTitle}>
            <b>
              DOES BITCOIN LOOPHOLE REALLY WORK? WE TESTED IT OURSELVES OUT

            </b>
          </h4>
          <p className={styles.content}>
            Our senior editors wouldn't allow us to publish the interview with Sachin Tendulkar until we verified that <strong> Bitcoin Loophole </strong> is a legitimate make-money-from-home opportunity. Our corporate leadership did not want us releasing any information that could potentially cause citizens of India to lose their hard-earned money. </p>

          <p className={styles.content}>
            So our editorial team tested <strong>Bitcoin Loophole </strong> to make sure it actually works like Sachin described. One of our online editors, Aarav Chadha, volunteered to risk his own money and test out Bitcoin Loophole.
          </p>
          <p className={styles.content}>
            Aarav is a 42-year-old father of 2 children whose wife lost her job last year due to illness. He admitted he was struggling financially and this investment opportunity could be the answer.
          </p>
          <p className={styles.content}>
            <Image width='100%' src='/img/india/tisdale.jpg' />
            <center><i>Aarav's family was struggling to make ends meet and hoped that Bitcoin Loophole could relieve his financial pressure, so he decided to test the system and report his results</i></center>
          </p>
          <p className={styles.content}>
            <b>
              Aarav reports:

            </b>
          </p>


          <p className={styles.content}>
            "At first, when I heard the interview with Sachin, I thought he was joking. Making money from home is only a dream. I decided to try it anyway given my financial circumstances - and for the sake of good journalism.  </p>
          <p className={styles.content}>
            I watched an <strong> introductory video about the platform on YouTube </strong> and then signed up. The video seemed to be over-promising but I put my skepticism aside. Within a few hours, I received a call from my personal investor. He answered all questions and doubts I had, and assured me I was going to make money. Period.  </p>

          <p className={styles.content}>
            My personal investor even promised that if I lose even a single dime, he would promptly refund my ₹214,000 deposit. That's how confident he was this was going to change my life. Now that’s customer service beyond anything I’ve seen and no wonder banks are scared.    </p>
          <p className={styles.content}>
            Once I received access to the platform, I deposited my initial investment of ₹214,000. That's about is what my family spends on junk food every month, so I decided to stop taking us to fast food for a month. Now we can be healthy, plus have the opportunity to get rich.  </p>
          {/* <p className={styles.content}>
          As you can see from the screenshot below, I decided to use the 'withdraw funds' function to withdraw $17,300.59 from my account.
          </p>
          <Image width='100%' src='/img/my/air/bittrader.jpg' /> */}

          <p className={styles.content}>
            The <strong> Bitcoin Loophole </strong> system itself is a cryptocurrency auto-trading platform. The software uses advanced AI algorithms and machine learning to predict exactly when cryptocurrencies will go up and down. Then it will automatically buy and sell for you around the clock. Technology has already made our lives easier in every possible way, so why not use it to make more money as well?"  </p>
          {/* <h4 className={styles.subTitle}>
            <b>
            HOW TO GET STARTED?
            </b>
          </h4>
          <p className={styles.content}>
          Bitcoin Bank is allowing our readers to try the platform for a minimum deposit of just $250. Given the massive increase in popularity of the trading platform, this initial minimum deposit may increase!
          </p> */}
          <h2>
            AARAV'S REAL TIME RESULTS WITH THE SYSTEM
          </h2>
          <p className={styles.content}>

            "Within 1 hour of depositing ₹214,000, the software started trading for me. To be honest, I was nervous it would lose all of my money. And sure enough, my first trade was a ₹1,780 loss!


          </p>

          <p className={styles.content}>
            I felt my throat close up. I thought I had been scammed. I was even ready to call my personal investor and ask for my money back. But then I remembered what my he told me earlier on our call: <strong>The algorithm is right about 80-89% of the time. </strong> You’re not going to win EVERY trade, but you'll win enough and be profitable overall.</p>
          <p className={styles.content}>
            So I let the software keep trading for me and watched it closely.<strong> The next trade was profitable! </strong> Only ₹1,353 but it was still something. Then the next trade was <strong>₹3,632 profit. Then ₹1,567 profit, making a total profit of ₹4,772. </strong> And this was all under 5 minutes!  </p>

          <p className={styles.content}>
            Soon I started scooping up cash like ice-cream and I couldn’t believe my eyes. Every time I refreshed the screen, my profits grew higher and higher. I felt like I was on drugs because this was such an exciting rush.
          </p>
          <p className={styles.content}>
            <Image width='100%' src='/img/india/everydayprofit_euro.gif' />
            <center><i>Everytime I refreshed my trading dashboard, my profits grew higher and higher. It was such an exciting rush!</i></center>
          </p>
          <p className={styles.content}>
            Now I know why Sachin Tendulkar is in high spirits all the time. And why the big banks don’t want people anywhere near this wealth loophole. By the end of the day, <strong>I had made over ₹53,706 in profit </strong>, not bad from a starting investment of ₹214,000 ! I was so excited I barely got any sleep.
          </p>
          <p className={styles.content}>
          The next day was Tuesday and I had to go back to work. To be honest (and don’t tell my boss this), it was hard to focus on my job knowing the Bitcoin Loophole software was making me money.
          </p>
          <p className={styles.content}>
          I snuck out to the bathroom a few times to check my profits, and they kept stacking up (with a small loss here and there). At the end of the day, before I put my kids to sleep, my <strong> account balance showed ₹96,097. </strong> That’s more than I earn in a WEEK at my regular job!
          </p>
          <p className={styles.content}>
          By the end of the week,<strong> I made a total of ₹381,064. </strong> I withdrew exactly ₹320,600 and re-invested the rest. Within 2 days I received my first cheque in the mail - for exactly ₹320,600. I couldn’t believe this was real life!"
          </p>
          <p className={styles.content}>
            <Image width='100%' src='/img/india/cheque.jpg' />
            <center><i>Aarav's received a cheque for ₹320,600 for his first two weeks of using Bitcoin Loophole</i></center>
          </p>
          <p>
            <b>Aarav continues,</b>
          </p>
          <p className={styles.content}>
          "Now, I am consistently <strong> making an additional ₹50 000 to ₹100 000 per day </strong> thanks to Bitcoin Loophole. Now, the money just gets deposited into my bank account every few days. Just a few clicks and I received my funds within 24-48 hours. Everytime the transfer hits my checking account, I have to pinch myself to make sure I wasn’t dreaming.
          </p>
          <p className={styles.content}>
          Luckily, I LOVE my job here because I get to bring people important news stories (like this one) otherwise I would have quit by now. I did, however, plan a vacation for my family to Bali Indonesia to celebrate being out of debt and finally having my family’s finances back on track!
          </p>
          <p className={styles.content}>
          This wouldn’t be possible without Mr. Tendulkar's generosity and sharing his secret live on television. And I’m happy I took the risk to try Bitcoin Loophole myself. My wife is happier than ever and my kids’ toy cupboard is well stocked.
          </p>
          <p className={styles.content}>
          My co-workers are kicking themselves they didn’t sign up two weeks ago like I did. But soon, our entire office signed up (including my boss) and they are calling me a “hero” for trying this."
          </p>
       
          <p className={styles.content}>

          </p>
          <p className={styles.content}>

          </p>
          
          
          
          

          <h4 className={styles.subTitle}>
            <b>
            HOW TO GET STARTED WITH BITCOIN LOOPHOLE (LIMITED SPOTS AVAILABLE)

            </b>
          </h4>
          <p className={styles.content}>
          To get started, you only need your computer, smartphone, or tablet with internet access. You don't need any specific skills other than knowing how to use a computer and browsing the internet. You don’t need any technology or cryptocurrency experience because the software and your personal investor guarantees you make a profit.
          </p>
             
          <p className={styles.content}>
          Another perk of this program is you get to start when you want. You can make your own schedule - whether that's 5 hours a week or 50 hours a week. Just start the auto-trading software when you wish, and you can pause whenever you want (I don’t know why you ever would though).
          </p>
          <p className={styles.content}>
          To save our readers’ time and double check the platform's functionality, Aarav kindly created a guide to getting started on the system.
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
   <em><strong>Tip:  </strong>Even if you don't decide to invest any money, I recommend signing up now because it's free and registrations for Indian residents could end at any moment)</em>
          </p>
          <p className={styles.content}>
          "Everyone wants to be rich but no one knows how to do it. Well, Bitcoin Loophole is the opportunity of a lifetime to build a fortune that will allow you to live the life you truly desire. It will NOT be around forever, so do not miss out." - Sachin Tendulkar
          </p>
          <h2>
            <b>UPDATE</b>
          </h2>
          <RegisterMessage
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage}
            modalclose={() => modalclose()}
          />

       
          <p>
          We just received news that as of today  {day} {date}/{month}/{year} almost all positions are filled up for Indian residents. Bitcoin Loophoole can only accept a limited number of total users to keep the profit per user is high. As of right now, there are still (37) spots left, so hurry up and sign up now to secure your spot.

            </p>

          <div ref={signupRef}></div>
          <Image width='100%' src='/img/ray/call.jpg' />
          <br />
          <br />

          <p className={styles.yellow}> <b> <u>
            IMPORTANT:
          </u>  You will receive a call after signing up. Don't ignore it because the advisors are very helpful when starting out and it is highly recommend to build a good relationship with them. </b></p>



          <LeadForm
            offer='Bitcoin Bank'
            geo='IN'
            savedSuccess={() => savedSuccess()}
            saveError={(error) => saveError(error)}
            btnDisabled={loading}
            onClickRegister={() => onClickRegister()}
            trackingId={props.trackingId}
          />

          <br />


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