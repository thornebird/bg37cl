import React, { useState, useEffect, useRef } from 'react'
import LeadForm from '../../../Forms/LeadForm/LeadForm.js'


import { Container, Image, Col, Row, Button } from 'react-bootstrap'
import RegisterMessage from '../../../Forms/LeadForm/RegisterMessage/RegisterMessage.js'
import styles from './index.module.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const RassieLp = props => {
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
    window.addEventListener('scroll', scrollHandler);
    setDates()
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
    setRegisterMessage('Stay tuned and available for a call from your personal investment manager to help you get started')
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
    if (window.pageYOffset + window.innerHeight > signupRef.current.offsetTop) {
      setIsBottomScreen(false)
    } else {
      setIsBottomScreen(true)
    }
  }
  return (
    <Container className={styles.bodyContainer} ref={topPageRef}>
      <Row>

        <Col>


          <RegisterMessage
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage}
            modalclose={() => modalclose()}
          />



          <Image width='100%' src='/img/ray/fin.PNG' />
          <h1>
            <u>BREAKING NEWS</u>: Rassie Erasmus’s platform is making South Africans Rich

          </h1>
          <h5>
            {date}/{month}/{year}
          </h5>

          <Image width='100%' src='/img/rassie/ras1.jpg' />
          <i>South African director of rugby reveals how he made millions from Luno App and how he will help South Africans join after being banned from rugby.</i>
          <br />
          <br />
          <p>
            Rassie Erasmus brought a lot of joy to South Africa as he led the national rugby team to a third Rugby World Cup championship a few years ago. 
           
          </p>
          <p>
           Rassie is still brining joy to thousands of South Africans with his latest program and affiliation with Luno App after being banned from rugby. 
           
          </p>
          <p>

          <strong>
              Erasmus added "I will now focus more of my time on Luno App after all it made me more money than I ever made from rugby."
             </strong>
            </p>
            <p>
           
          </p>
          <Image width='100%' src='/img/rassie/ras.jpg' />
          <p>
            Last week he appeared on Super Sport and explained how the Luno App can
            <strong> make an average South African citizen a millionaire within 3-4 months.</strong> Rassie called anyone who wants to make a big profit, without having to make a huge investment, to seize this opportunity because the big banks are onto this and they are actively trying to shut this down.

          </p>
          <Image width='100%' src='/img/rassie/rast.jpg' />
          <p>And sure enough, minutes after the interview was over, Standard Bank called to
            stop Rassies's interview from being aired - it was already too late.</p>
          <p>
            <strong>Here's exactly what happened: </strong>
          </p>
          <p>
            Rassie was a guest on Super Sport. He shared his experience with Luno App and how after being banned from rugby it is time to move on. Rassie also encouraged more South Africans to join while there are still spots open. 
          </p>
          <p>
            <em>“I love rugby, but now I have been banned and my income will be heavily impacted. It's time for me to move on and focus on more profitable ventures. Luckily I already have a good relationship with Luno App not only being an ambassador for them but also earning millions through bitcoin trades on Luno App's platform.
              </em>
              
            
          </p>
          <p>
          <em> I heard about bitcoin trading but I didn’t know much about it.  A friend also recommended working with Luno App and said that he had also made a small fortune from Bitcoin with their app. After agreeing to become an ambassador for Luno App and agreeing to be a part of their adverts I decided to sign up and give it a try.
             </em>
          </p>
          <p>
             <em> <strong> Within  a few days I already had over R85,000 in my Luno App Balance.
              </strong> Today it is my number one source of income and the biggest money machine I’ve ever encountered in my professional life. It can make you a fortune in no time, but you have to act fast because the big banks are working on shutting it down as I speak.”
</em>
            </p>
          <p>
          Super Sport’s  host was skeptical about his testimonial until Rassie pulled out his smartphone, logged in to his account and showed them how much money he was making through this platform that’s been quietly talked about throughout South Africa and it’s spreading as far as Europe.
          </p>
          <Row>
            <Col sm={12} md={6}>
              <Image width='100%' src='/img/rassie/lunoras.jpg' />
            </Col>
            <Col sm={12} md={6}>

              <Image width='100%' src='/img/rassie/deposits.jpg' />
            </Col>

          </Row>
          <br />
          <p>
            Rassie didn’t have enough time on the show to explain everything in detail so we asked him to do a post-show interview in hopes of getting more information. He kindly agreed and said he’ll happily answer all of our questions regarding the program.
            .
          </p>
          <h2>
          SUPER SPORT'S EXCLUSIVE INTERVIEW WITH RASSIE ERASMUS
          </h2>
          <p>
            <em>
              "You may have heard about this or seen the adverts going viral on South African media <strong>Luno App is a new cryptocurrency auto-trading program </strong>
              that is helping regular people in Africa, Asia and North America build fortunes overnight. You may be skeptical because it sounds too good to be true."

            </em>

          </p>
          <p>
            <div>

              <LiteYouTubeEmbed
                id="Yd1dsZ4eWoA"
                title="Rassie Tackle Bitcoin With Luno"
              /></div>
          </p>
          <p>
            Rassie continues:
          </p>
          <p>
            <em>“My first reaction to it was the same, so don’t worry. I was introduced to it by my business partner and when he demonstrated it, I told him to invest as much as we can afford. Today we have profited over R50,000,000 in just over a year.</em>
          </p>
          <p>
            <em>
              The decision to try it out and invest was the best decision I ever made in my life. <strong>within days I was making tens of thousands of rands per day, and everything was on auto-pilot. Of course, I invested a lot but if a regular person makes a minimal investment, they can make that kind of money weekly or monthly.
              </strong> This is the way to make cash right now. The only problem is that more and more people are finding out about it and the banks are really trying to stop it so if you want to do it you have to act fast!”
            </em>
          </p>
        
          <h2>

            <b>
              WHAT EXACTLY IS LUNO APP AND HOW DOES IT WORK?
            </b>
          </h2>
          <p> The idea behind Luno App is straightforward.  <strong>
            To allow the average person to cash in on the cryptocurrency boom which is still the most lucrative investment of the 21st century, despite what most people think.
          </strong>
          </p>
          <p>
            Although Bitcoin price has dropped from it’s all time high of $60,000 per Bitcoin, traders are still making a killing. Why? Because there are thousands of other cryptocurrencies besides Bitcoin that are being traded for huge profits on a daily basis. Some of these cryptocurrencies include Ripple, Ethereum, Monero, Zcash and Ripple and they are still making returns of over 10,000% and higher for ordinary people in South Africa.
          </p>
          <p>
            Luno App lets you profit from all of these cryptocurrencies, even in a slow market. It uses artificial intelligence (AI) to automatically handle long and short selling for you so you can make money around the clock, even while you sleep.
          </p>

          <p>
            <strong>Luno App </strong>
            is backed by some of the smartest tech minds to ever exist. Richard Branson, Elon Musk and Bill Gates just to name a few
          </p>
          <Image width='100%' src='/img/ray/muskbranson.jpg' />
          <p>
            <i>Bill Gates and Richard Branson discuss </i> Luno App at CES 2020.
          </p>
          <p>
            These tech geniuses have built multi-billion companies on solving complex issues like online payments,
            computing, and transportation. Now, they’re tackling the global problem of wealth inequality by
            letting anyone - no matter how rich or poor they are - make <strong> enough money to enjoy a happy and
              fulfilling life.
            </strong>
          </p>
          <h2>
            <b>The lucrative money-making secret big banks
              don't want you to know</b>
          </h2>
          <p>
            Rassie goes on,
          </p>
          <p>
            <em>"Economic crisis hit the world very hard with covid-19, and South Africa wasn’t spared. </em> amazing opportunity  that ordinary people can easily
            take advantage of to  <strong>With this type of investment opportunity, luck is finally helping people who haven’t had a chance to make serious money in a very short time period.
            </strong>
          </p>
          <p>
            <em>
              Everyone else knows cryptocurrencies are the future that cannot be stopped. This is the opportunity of a lifetime and we’re lucky to be here now in this moment to seize this gift. It’s no secret I’ve been marked as “a person of interest” to the banks. I know the spy on me, trying to discredit me on my every move and stop me from getting the message out to the people.
              <strong> I’m too strong for them to take me down. That’s why they even tried to stop the live show I did.</strong> I believe South African citizens should use this opportunity while it’s still available.</em>
          </p>
          <p>
            <em>
              But besides threats I also receive more and more emails from people who took my advice, invested in the platform and changed their lives! This is the only encouragement I need to continue spreading the word about <strong>
                Luno App.
              </strong>
              <br />

            </em>
          </p>
          <p>
            <em>
              Just take a look at this Facebook post from a guy who bought his father a new Lamborghini. His father raised him and his brother all alone. The guy swore he’ll buy him a Lamborghini when he gets rich since his father always worked two jobs to provide for them.”

            </em>
          </p>

          <p>
            <Image width='100%' src='/img/ray/dreamcar.jpg' />
            <i>Steven Baker used the money he made with Luno App to buy his brother a brand new Lamborghini.</i>
          </p>
          <h2>
            <b>DOES LUNO APP REALLY WORK? WE TEST IT OUT OURSELVES</b>
          </h2>
          <p>
            Our senior editors wouldn't let us publish the interview with Rassie Erasmus until we verified that Luno App is a legitimate make-money-from-home opportunity. Our corporate leadership did not want us releasing any information that could potentially cause citizens of South Africa to lose their hard-earned money.
          </p>
          <p>
            So, our editorial team tested Luno App to make sure it actually works like Rassie described. One of our online editors, Vernon Mudau, volunteered to risk his own money and test out Luno App.

          </p>
          <p>
            Vernon is a 47-year-old father of two kids whose wife lost her job last year due to illness. He admitted he was struggling financially, and this investment opportunity could be the answer.

          </p>
          <p>
            <Image width='100%' src='/img/ray/tisdale.jpg' />
            <i>Since his wife lost her job after having covid-19, Vernon’s family was in a financial tight spot. Extra cash made with Luno App would help them a lot so he decided to test the platform himself and write the report.</i>
          </p>
          <p>
            <strong>Vernon reports: </strong>
          </p>


          <p>
            <em>
              “After reading the interview and seeing the adverts with Rassie it seemed really interesting, but I couldn’t say it was really possible. On the other hand, I always liked exploring new ways of making money and since my financial situation was horrible, I decided to test it out.

            </em>
          </p>

          <p>
            <em>
              I watched an introductory video about the platform and then signed up. It basically said everything Rassie said in his interview, but it still seemed too good to be true. But I wasn't the one to give up that easily. Two hours after setting up my account my personal investor gave me a phone call and explained everything. I also asked everything I wanted to know and the basic conclusion he said was - get ready to make money
            </em>
          </p>
          <p>
            <em>
              Soon I got my access to the platform and I was ready to make my initial R3,500 deposit. I’ve just sold my car and was left with R7,500. I decided to use half of that money for my investment because that was the only extra money I had.
            </em>
          </p>
          <p>
            <em>
              The Luno App system itself is a cryptocurrency auto-trading platform. The software uses advanced AI algorithms and machine learning to predict exactly when cryptocurrencies will go up and down. Then it will automatically buy and sell for you around the clock. Technology has already made our lives easier in every possible way, so why not use it to make more money as well?"

            </em>
          </p>


          <h2><b>VERNON’S REAL TIME RESULTS WITH THE SYSTEM</b></h2>

          <p>
            <em>
              “After depositing my R3,500  the platform started trading within half an hour. I didn’t have to wait long to make my first profit. After 45 minutes, I made my first R500. Wow! My hopes were up and I thought this might actually work.
            </em>
          </p>
          <p>
            <em>
              Then I lost my next two trades. What was this? Did I just win the first trade and now I’m going to lose it all? I started to get nervous and thought about aborting the whole thing. If I get my refund now, I can get out of this unscratched. <strong>I pulled myself together and put faith in my personal investor who told me over the phone that the winning rate is 80% which means I won’t win every trade. </strong> .
              The key to Luno App is to win overall and always make a profit.

            </em>
          </p>

          <p>
            <em>
              The next few trades were critical for me. <strong>The first one was a win, R400 profit. The second one was a win also, R700 profit. The third one was a win again,  R500 profit.
              </strong> It seemed ages have passed but when I look at my clock only 10 minutes have gone by! </em>
          </p>


          <p>
            <em>This was it! Every time I clicked refresh my account grew bigger and bigger. Trade after trade I was winning them almost all. It actually works and with this rate I made my months’ salary in no time! It felt like I was on a rollercoaster!</em>
            <Image width='100%' src='/img/ray/everydayprofit_dollar.gif' />
          </p>

          <p>
            <i>My account numbers grew every few minutes. It was the most intense thing I’ve ever witnessed in my life!</i>
          </p>
          <p>
            <em>“It was obvious to me now Rassie was telling the truth. No wonder his life changed completely. I also realized why banks want to shut down this golden opportunity to make money. <strong> I stopped trading around midnight and my account was at R 30,000. </strong> Do I even have to say that I couldn’t fall asleep that night?
            </em>
          </p>
          <p ><em>The next day at work I couldn’t help myself peeking at my smartphone to see how my investment was doing. I was afraid my boss was going to catch me. My profits grew steadily. With the winning rate of 8 out of 10 trades I made a profit of R45,000. This was more than my whole salary! </em></p>

          <p><em>
            <strong>By Friday my account was at R100,000 with only R4,000 invested! </strong> I withdrew R50,000 and left R50,000  for my future investments. A few days later a cheque, with R50,000  was in my post box. This has actually worked!”</em></p>
          <p>
            <Image width='100%' src='/img/ray/cheque.jpg' /></p>
          <p>
            <i>First cheque for R 50,.000 rand Vernon received after using <strong>Luno App </strong>for only a week! </i>
          </p>
          <p><strong>Vernon continues,</strong></p>
          <p><i>"Now, I am consistently making an additional <strong>R7,950 to R17,020</strong> per
            day thanks to Luno App. Now, the money just gets deposited into my bank
            account every few days. Just a few clicks and I received my funds within 24-48 hours. Everytime the
            transfer hits my checking account, I have to pinch myself to make sure I wasn’t dreaming. </i></p>


          <p><i>Luckily, I LOVE my job here because I get to bring people important news stories (like
            this one) otherwise I would have quit by now. I did, however, plan a vacation for my family to Bali
            Indonesia to celebrate being out of debt and finally having my family’s finances back on track! </i></p>

          <p><i>This wouldn’t be possible without Rassie's generosity and sharing his secret live on
            television. And I’m happy I took the risk to try Luno App
            myself. My wife is happier than ever and my kids’ toy cupboard is well stocked. </i></p>

          <p><i>My co-workers are kicking themselves they didn’t sign up two weeks ago like I did. But
            soon, our entire office signed up (including my boss) and they are calling me a “hero” for trying
            this.</i>"</p>
          <h2><b>How to get started with Luno App
            (limited spots available)</b></h2>
          <p >To get started, you only need your computer, smartphone, or tablet with internet access.
            You don't need any specific skills other than knowing how to use a computer and browsing the internet.
            You don’t need any technology or cryptocurrency experience because the software and your personal
            investor guarantees you make a profit. </p>
          <p >Another perk of this program is you get to start when you want. You can make your own
            schedule - whether that's 5 hours a week or 50 hours a week. Just start the auto-trading software when
            you wish, and you can pause whenever you want (I don’t know why you ever would though). </p>
          <p>To save our reader’s time and double check the Luno App's functionality, Vernon
            kindly created a guide to getting started on the system.</p>
          <h2>
            <b>Here's My step-by-step on registering:</b>
          </h2>
          <p>
            The first thing you do is complete the form below with your name, phone number and email address. It's quick and simple. Once your registration is succesfull an agent will give you a call and guide you through the process of activating your account  </p>
          <p ><em><strong>Tip</strong>: Even if you don't decide to invest any money, I recommend signing up now because it's free and registrations for South Africa residents could
            end at any moment)</em></p>
          <p>
            "Everyone wants to be rich but no one knows how to do it. Well, Luno App is the opportunity of a lifetime to build a fortune that will allow you to live the life you truly desire. It will NOT be around forever, so do not miss out." - Rassie Erasmus
          </p>
          <h2><b>UPDATE</b></h2>
          <p>
          We just received news that as of today  {day} {date}/{month}/{year} almost all positions are filled up for South Africa residents. Luno App can only accept a limited number of total users to keep the profit per user is high. As of right now, there are still (37) spots left, so hurry up and sign up now to secure your spot.

            </p>
          <br />
          <br />
          <div ref={signupRef}></div>
          <Image width='100%' src='/img/ray/call.jpg' />
          <div>
            <p>
              <b>
                <u>
                  IMPORTANT:
                </u> You will receive a call after signing up. Don't ignore it because the advisors are very helpful when starting out and it is highly recommend to build a good relationship with them.
              </b>

            </p>
          </div>

          <LeadForm
            offer='Luno App'
            geo='ZA'
            savedSuccess={() => savedSuccess()}
            saveError={(error) => saveError(error)}
            btnDisabled={loading}
            onClickRegister={() => onClickRegister()}
            trackingId={props.trackingId}
          />

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

export default RassieLp