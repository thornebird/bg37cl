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
    <div ref={topPageRef}></div>
     <Image className={styles.headDesktop} width='100%' src='/img/ie/iedesktopmenu.jpg' />
     <Image className={styles.headMobile} width='100%' src='/img/ie/iemobilemenu.jpg' />
     <Container className={styles.bodyContainer} >
    
      <Row>

        <Col lg={9} sm={12} md={9}>
       
         
          <h2 className={styles.title}>
           <u>Special Report:</u> Michael O'Leary's Latest Investment Has The Government And Big Banks Terrified
          </h2>
          <p>
            <em>Irish citizens are already raking in millions from home using this "wealth loophole"</em>
          </p>
          {/* <Image width='100%' src='/img/india/credits.jpg' /> */}
          <Image width='100%' src='/img/ie/iemain.jpg'  />

          {/* <p>
            <em>Indian citizens are already raking in millions of Rupees from home using this "wealth loophole"</em>
          </p> */}
          
         
         
          <p className={styles.content}>
            <center><i>Michael O'Leary comes out with new secret investment that's making hundreds of people in Ireland very rich</i></center>
          </p>
          <p className={styles.content}>
          <strong>(RTÉ ONE Channel) </strong> - Irish businessman and the Chief Executive Officer of Ryanair Michael O'Leary has made a name for himself as a brash straight-talker who doesn’t mind being honest about how he makes his money.</p>
          <p className={styles.content}>
          Last week, he appeared on <strong> "The late late show" </strong>  and announced a new "wealth loophole" which he says can <strong>transform anyone into a millionaire within 3-4 months.</strong> Michael urged everyone in Ireland to jump into this amazing opportunity before the big banks shut it down for good.
          </p>
          <p className={styles.content}>
          And sure enough, minutes after the interview was over, The Bank of Ireland called to stop Michael 's interview from being aired- it was already too late.
         
         </p>
        <p >
            <b>
              Here's exactly what happened:

            </b>
          </p>

          <p className={styles.content}>
          "The late late show" host Ryan Tubridy invited Michael on the show to share any tips he had on building wealth and Irish businessman dropped a bomb:
          </p>
          <p className={styles.content}>
          "What's made me successful is jumping into new opportunies quickly- without any hesitation. And right now, my number one money-maker is a new <strong> cryptocurrency auto-trading program called Bitcoin Circuit.</strong> It's the single biggest opportunity I've seen in my entire lifetime to build a small fortune fast. I urge everyone to check this out before the banks shut it down."   </p>
          <p className={styles.content}>
          The late late show host Ryan Tubridy was left in disbelief as Michael pulled out his phone and showed viewers how much money he's making through this new money-making program that now has everyone in Ireland whispering.</p>
          {/* <Image width='100%' src='/img/au/warnethum.jpg' className={styles.imgMobile}/>
          <Image width='100%' src='/img/au/result.jpg' className={styles.imgMobile}/>
          <Image width='100%' src='/img/au/warneresult.jpg' className={styles.imgDesktop}/> */}
      <Image width='100%' src='/img/ie/photo2.jpg' className={styles.imgDesktop}/>
      <Image width='100%' src='/img/ie/ieman.jpg' className={styles.imgMobile}/>
          <Image width='100%' src='/img/ie/ieresults.jpg' className={styles.imgMobile}/>
          <p className={styles.content}>
          The segment ran out of time before Michael could elaborate, so we got an exclusive interview with the man himself to learn more about this controversial opportunity.
             </p>
          <h2>
            <b>RTE EXCLUSIVE WITH MICHAEL O'LEARY</b>
          </h2>

          <p className={styles.content}>
          "You may have heard about this <strong>new cryptocurrency investment platform called Bitcoin Circuit</strong> that’s helping regular people in Ireland, Asia and North America build fortunes overnight. You may be skeptical because it sounds too good to be true."
          </p>
          <p className={styles.content}>
           Michael continues: </p>
          <p className={styles.content}>
            “I get that because I thought the same thing when a trusted friend told me about it. But after seeing with my own eyes how much money he was making, I had to try it for myself. </p>
          <p className={styles.content}>
          I'm glad I tried it because it was some of the biggest and easiest money I've ever made. I'm talking <strong>tens of thousands of euros a day on autopilot.</strong> It’s literally the fastest way to make a windfall of cash right now. And it’s not going to last for much longer when more and more people find out about it, or when banks shut it down for good.” </p>

          <p>

            <Image width='100%' src='/img/ie/photo3ie.jpg' />
          </p>
          <br />
          <h4 className={styles.subTitle}>
            <b>
              WHAT EXACTLY IS BITCOIN CIRCUIT AND HOW DOES IT WORK?
            </b>
          </h4>
          <p className={styles.content}>
            <strong>The idea behind Bitcoin Circuit is straightforward:</strong> To allow the average person to cash in on the cryptocurrency boom which is still the most lucrative investment of the 21st century, despite what most people think. </p>
          <p className={styles.content}>
          Although Bitcoin price has dropped from it’s all time high of €20,000 per Bitcoin, traders are still making a killing. Why? Because there are thousands of other cryptocurrencies besides Bitcoin that being traded for huge profits on a daily basis.
                     </p>

          <p className={styles.content}>
          Some of these cryptocurrencies include Ripple, Ethereum, Monero, Zcash and Ripple and they are still making returns of over 10,000% and higher for ordinary people in Ireland.    
         </p>
          <p className={styles.content}>
            <strong>Bitcoin Circuit  </strong> lets you profit from all of these cryptocurrencies, even in a bear market. It uses artificial intelligence (AI) to automatically handle long and short selling for you so you can make money around the clock, even while you sleep.
          </p>
          <p className={styles.content}>
          Bitcoin Circuit is backed by some of the smartest tech minds to ever exist. <strong>Richard Branson, Elon Musk and Bill Gates</strong> just to name a few
          </p>


          <p className={styles.content}>
            <Image width='100%' src='/img/india/muskbranson.jpg' />

          </p>
          <p>
            <center>
              <i>
              Bill Gates and Richard Branson discuss Bitcoin Circuit at CES 2019.
              </i>
            </center>
          </p>
          <p className={styles.content}>

            These tech geniuses have built multi-billion companies on solving complex issues like online payments, computing, and transportation. Now, they’re tackling on the global problem of wealth inequality by letting anyone - no matter how rich or poor they are - make <strong> enough money to enjoy a happy and fulfilling life. </strong>  </p>


          <p className={styles.content}>
            <h3><b>THE LUCRATIVE MONEY-MAKING SECRET BIG BANKS DON'T WANT YOU TO KNOW</b></h3>
          </p>


          <p className={styles.content}>
          Michael O'Leary goes on,
          </p>
          <p className={styles.content}>
            "We're seeing hard economic times, and this is the solution people have been waiting for. Never in history have we had such an amazing opportunity that ordinary people can easily take advantage of to <strong> generate tremendous wealth in such a short time. </strong>
          </p>
          <p className={styles.content}>
            Some people are hesitant to try this because it’s so different. And that’s because the <strong>big banks are trying to cover this up!</strong> The big banks are actively creating propaganda and calling cryptocurrencies and platforms like Bitcoin Circuit a scam. Why? They are worried their corporate profits will shrink once their customers know how to create massive wealth themselves.
          </p>
          <p className={styles.content}>
          The truth is, cryptocurrency is the revolution of our lifetime and anyone who does not jump on this opportunity is missing out. <strong>I’ve already received angry calls and threats from big financial corporations</strong> because I’m bring this technology to people’s attention. But screw them. People in Ireland are already starting to know the truth and it’s only a matter of time before more and more do.
           </p>

          <p className={styles.content}>
            I'm sharing this because I've also received hundreds of emails from people thanking me for sharing this secret. My favorite one is from a <strong> young man who bought his little brother his dream car </strong>- a Ferrari 488 Pista using the cash he made from Bitcoin Circuit. This platform is truly making the lives of everyone in the world a little better.”
          </p>
          <p className={styles.content}>
            <Image width='50%' height='50%' src='/img/india/dreamcar.jpg' className={styles.imgDesktop} />
            <Image width='100%'  src='/img/india/dreamcar.jpg' className={styles.imgMobile} />
            <center><i>Steven Baker used the profits he earned from Bitcoin Circuit to buy his little brother his dream car. What an inspiring way to use wealth for good!</i></center>
          </p>
          <h4 className={styles.subTitle}>
            <b>
            DOES BITCOIN CIRCUIT REALLY WORK? WE TEST IT OURSELVES OUT

            </b>
          </h4>
          <p className={styles.content}>
            Our senior editors wouldn't allow us to publish the interview with Michael O'Leary until we verified that <strong> Bitcoin Circuit  </strong> is a legitimate make-money-from-home opportunity. Our corporate leadership did not want us releasing any information that could potentially cause citizens of Ireland to lose their hard-earned money. </p>

          <p className={styles.content}>
          So our editorial team tested <strong>Bitcoin Circuit</strong> to make sure it actually works like O'Leary described. One of our online editors, Zach Tisdall, volunteered to risk his own money and test out Bitcoin Circuit. </p>
          <p className={styles.content}>
          Zach is a 53-year-old father of 2 girls whose wife lost her job last year due to illness. He admitted he was struggling financially and this investment opportunity could be the answer. </p>
          <p className={styles.content}>
            <Image width='100%' src='/img/au/zachary.jpg' />
            <center><i>Zach's family was struggling to make ends meet and hoped that Bitcoin Circuit could relieve his financial pressure, so he decided to test the system and report his results</i></center>
          </p>
          <p className={styles.content}>
            <b>
            Zach reports:

            </b>
          </p>


          <p className={styles.content}>
           
          "At first, when I heard the interview with Michael O'Leary, I thought he was joking. Making money from home is only a dream. I decided to try it anyway given my financial circumstances- and for the sake of good journalism.  </p>
          <p className={styles.content}>
            I watched an <strong> introductory video about the platform on YouTube </strong> and then signed up. The video seemed to be over-promising but I put my skepticism aside. Within a few hours, I received a call from my personal investor. He answered all questions and doubts I had, and assured me I was going to make money. Period.  </p>

          <p className={styles.content}>
          My personal investor even promised that if I lose even a single dime, he would promptly refund my €250 deposit. That's how confident he was this was going to change my life. Now that’s customer service beyond anything I’ve seen and no wonder banks are scared.
           </p>
              <p className={styles.content}>
              Once I received access to the platform, I deposited my initial investment of €250. That's about is what my family spends on junk food every month, so I decided to stop taking us to fast food for a month. Now we can be healthy, plus have the opportunity to get rich.
                </p>

          <p className={styles.content}>
            The <strong> Bitcoin Circuit </strong> system itself is a cryptocurrency auto-trading platform. The software uses advanced AI algorithms and machine learning to predict exactly when cryptocurrencies will go up and down. Then it will automatically buy and sell for you around the clock. Technology has already made our lives easier in every possible way, so why not use it to make more money as well?"  </p>
         
          <h2>
          ZACH'S REAL TIME RESULTS WITH THE SYSTEM
          </h2>
          <p className={styles.content}>

          "Within 1 hour of depositing €250, the software started trading for me. To be honest, I was nervous it would lose all of my money. And sure enough, my first trade was a v loss!

          </p>

          <p className={styles.content}>
            I felt my throat close up. I thought I had been scammed. I was even ready to call my personal investor and ask for my money back. But then I remembered what my he told me earlier on our call: <strong>The algorithm is right about 80-89% of the time. </strong> You’re not going to win EVERY trade, but you'll win enough and be profitable overall.</p>
          <p className={styles.content}>
          So I let the software keep trading for me and watched it closely. <strong>The next trade was profitable!</strong> Only €19 but it was still something. Then the next trade was €51 profit. Then €22 profit, making a total profit of €67. And this was all under 5 minutes!    
            
         </p>

          <p className={styles.content}>
            Soon I started scooping up cash like ice-cream and I couldn’t believe my eyes. Every time I refreshed the screen, my profits grew higher and higher. I felt like I was on drugs because this was such an exciting rush.
          </p>
          <p className={styles.content}>
            <Image width='100%' height='50%' src='/img/india/everydayprofit_euro.gif' />
            <center><i>Everytime I refreshed my trading dashboard, my profits grew higher and higher. It was such an exciting rush!</i></center>
          </p>
          <p className={styles.content}>
          Now I know why Michael O'Leary is in a good mood all the time. And why the big banks don’t want people anywhere near this wealth loophole. By the end of the day,<strong> I had made over €754 in profit</strong>, not bad from a starting investment of €250! I was so excited I barely got any sleep.
           </p>
          <p className={styles.content}>
          The next day was Tuesday and I had to go back to work. To be honest (and don’t tell my boss this), it was hard to focus on my job knowing the Bitcoin Circuit software was making me money.
          </p>
          <p className={styles.content}>
          I snuck out to the bathroom a few times to check my profits, and they kept stacking up (with a small loss here and there). At the end of the day, before I put my kids to sleep, my <strong> account balance showed €1,349.13. </strong> That’s more than I earn in a WEEK at my regular job!
          </p>
          <p className={styles.content}>
          By the end of the week, I made a total of <strong>€5,349.12.</strong> I withdrew exactly €4,500 and re-invested the rest. Within 2 days I received my first cheque in the mail - for exactly €4,500. I couldn’t believe this was real life!"  </p>
          <p className={styles.content}>
            <Image width='100%' src='/img/au/aucheque.jpg' />
            <center><i>Zach's received a cheque for €4,500 for his first two weeks of using Bitcoin Circuit</i></center>
          </p>
          <p>
            <b>Zach continues,</b>
          </p>
          <p className={styles.content}>
          "Now, I am consistently <strong> making an additional €700 to €1,500 per day </strong> thanks to Bitcoin Circuit. Now, the money just gets deposited into my bank account every few days. Just a few clicks and I received my funds within 24-48 hours. Everytime the transfer hits my checking account, I have to pinch myself to make sure I wasn’t dreaming.
          </p>
          <p className={styles.content}>
          Luckily, I LOVE my job here because I get to bring people important news stories (like this one) otherwise I would have quit by now. I did, however, plan a vacation for my family to Bali Indonesia to celebrate being out of debt and finally having my family’s finances back on track!
          </p>
          <p className={styles.content}>
          This wouldn’t be possible without Mr. O'Leary's generosity and sharing his secret live on television. And I’m happy I took the risk to try  Bitcoin Circuit myself. My wife is happier than ever and my kids’ toy cupboard is well stocked.
          </p>
          <p className={styles.content}>
          My co-workers are kicking themselves they didn’t sign up two weeks ago like I did. But soon, our entire office signed up (including my boss) and they are calling me a “hero” for trying this."
          </p>
       
        
          
          
          

          <h4 className={styles.subTitle}>
            <b>
            HOW TO GET STARTED WITH BITCOIN CIRCUIT (LIMITED SPOTS AVAILABLE)

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
          The first thing you do is complete the form below with your name, phone number and email address. It's quick and simple. Once your registration is succesfull an agent will give you a call and guide you through the process of activating your account.  
          </p>
          <p className={styles.content}>
   <em><strong>Tip:  </strong>Even if you don't decide to invest any money, I recommend signing up now because it's free and registrations for Irish residents could end at any moment)</em>
          </p>
          <p className={styles.content}>
          "Everyone wants to be rich but no one knows how to do it. Well, Bitcoin Circuit is the opportunity of a lifetime to build a fortune that will allow you to live the life you truly desire. It will NOT be around forever, so do not miss out." - Michael O'Leary
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

          <p> <b> <u>
            IMPORTANT:
          </u>  You will receive a call after signing up. Don't ignore it because the advisors are very helpful when starting out and it is highly recommend to build a good relationship with them. </b></p>



          <LeadForm
            offer='Bitcoin Circuit'
            geo='IE'
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
          We just received news that as of today  {day} {date}/{month}/{year} almost all positions are filled up for Irish residents. Bitcoin Circuit can only accept a limited number of total users to keep the profit per user is high. As of right now, there are still (37) spots left, so hurry up and sign up now to secure your spot.

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