import React, { useState, useEffect, useRef } from 'react'
import LeadForm from '../../../Forms/LeadForm/LeadForm.js'

import Cookies from 'universal-cookie'
import { Container, Image, Col, Row, Modal, Button } from 'react-bootstrap'
import RegisterMessage from '../../../Forms/LeadForm/RegisterMessage/RegisterMessage.js'
import styles from './index.module.css'


const RaymondLp = props => {
  const [showRegisterMessage, setShowRegisterMessage] = useState(false)
  const [registerTitle, setRegisterTitle] = useState('')
  const [registerMessage, setRegisterMessage] = useState('')
  const [loading, setIsLoading] = useState(false)

  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [isBottomScreen, setIsBottomScreen] = useState(true)

  const signupRef = useRef(null)

  useEffect(() => {
    setDates()
    window.addEventListener('scroll', scrollHandler);

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
    if (window.pageYOffset + window.innerHeight >= signupRef.current.offsetTop) {
      setIsBottomScreen(false)
    } else {
      setIsBottomScreen(true)
    }
  }
  return (
    // <Container className={styles.bodyContainer}>
    <Container>
      <Row>

        <Col md={6}>


          <RegisterMessage
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage}
            modalclose={() => modalclose()}
          />


         <Image width='100%' src='/img/my/yah.jpg' />
         <Image width='100%' src='/img/vn/header_400.jpg' />
         <h2>Flight attendant loses her job: now, less than a year later, she is a multi millionaire after making money online</h2>
          <p>
          <span className={styles.blue}>by R. Branders {date}/{month}/{year}</span>
          </p>
          <Image width='100%' src='/img/vn/main.jpg' />
          
          
          <p>
            <b> Breaking: </b> More and more Vietnamese are looking for extra income in the last year. If you are one
              of them, don’t miss Duyen’s success story.
          </p>
          <p>
          Duyen lives in Ho Chi Minh with her husband Giang  and their young daughter. But just a
                                    few months ago they were on the verge of bankruptcy after the airline she worked for
                                    had to let most of their staff go. Duyen lost her job and the couple were about to
                                    get evicted. </p>
            <p>
            Duyen took a cleaning job, working endless hours as a cleaner, to help
                                    out her family and within a few months she was a millionaire with $1,000,000 in her bank account. Here’s Duyen's story.
            </p>
            <Image width='100%' src='/img/vn/empty.jpg' />      
            <p>
            In March things at the airline were so bad a lot of flights were cancelled due to the global crisis. It was a very emotional time for most of us. We didn’t know what would happen until they let most of us go.                        
            </p>
               
            <p>
            My husband thought that we wouldn’t survive financially because nobody would go on holidays or business trips for the near future  in these scary times.                    
            </p>
            <p>
            “I signed a contract to go to work as a cleaner. It didn’t pay much but it was better than not earning anything. It was hard working  as a cleaner after my job as a flight attendant for Vietnam Airlines while my husband was at home with our kid. I missed travelling and my friends at Vietnam Airlines , but I had no choice. Up to that point I worked as a flight attendant and had no idea what was waiting for me as a cleaner.           
            </p>
            <p>
            The good thing was they were in need of workers, so I managed to get a job as soon as I arrived there. First couple of weeks were hard but the thought of my family kept me going and nothing would stop me from earning my wages.      
            </p>
            <p>
            I knew that just my paycheck wouldn’t be enough to get us out of financial trouble and I was determined to find a way to get us out of debt. I needed more money than my job was paying.                    
            </p>
            <p>
            I spent my spare time browsing various Facebook groups looking for job offers when I came across advice on how to make money online through
                                    Bitcoin trading. I was never a math girl but it seemed simple enough, so I decided to give it a try.                   
            </p>
            <p> 
            After a quick tutorial I took $250  and made my investment. I was nervous but was relieved after I earned back my investment and made an extra $500. I quickly clicked the withdraw button, to transfer the money to my bank account, so I don’t lose it. Within two hours the money was in my account.                  
            </p>
            <Image width='100%' src='/img/my/w17ph-2.jpg' />
            <p>
            <b>
            “I would login to trade every day. It was that simple.”
            </b>
            </p>
            <p>
            In the next few months profit just poured in, it was the most exciting period of my life. After 4 months my account was at $480,000.  I’ll never forget after 9 months I hit $1,000,000. My co-workers knew nothing about it and hadn’t  even told my husband.                    
            </p>
            <p>
            <b>
            “I told myself I’ll cash out when I reach $1 million but I couldn’t stop so I went up a little bit more”                              
            </b>
            </p>
            <p>
 
            I finally told my husband all about it, he couldn’t believe it. He actually made me go to the bank to withdraw $10,000 to prove I wasn’t fooling him. It was at that point he believed we weren’t poor anymore.
                   
            </p>
            <p>
            I went and bought a new car, put down a deposit for our new apartment in Ho Chi Minh and finally paid off our debt. Finally, everything fell into place.                        
            </p>
            <p>
            It’s a great feeling knowing you don’t have to worry every day if your family is going to be evicted or if your boss will fire you and you won’t be able to feed your daughter.                        
            </p>
            <h2> But what exactly is Duyen talking about? </h2>
            <p>
            Duyen was able to earn extra money online thanks to an online system that has been quietly making a few ordinary Vietnamese wealthy for decades.                   
            </p>
            <p>
            A source from a leading consultancy stated: “ <i>
                                        This is now creating many more weekly millionaires than the
                                        lottery. In fact, we are seeing 90% of new clients seeking wealth advice
                                        now earn their main income with it. What is astounding is that many of
                                        these people were working in regular jobs, like construction, office
                                        jobs and even unemployed and now they are earning more than top CEO's in
                                        London, New York or Tokyo.
                                    </i> ”
                                
                                    
            </p>
            <p>
            
            After extensive research we from The Daily News were blown away by the results.
                                
            </p>
            <p>
            Experts call it “ <i>  Bitcoin Trading</i>”.                       
            </p>
            <p>
            
            It's the fastest cash producing machine in history. It's
                                    highly likely you'll see more about it's fundamentals on CNN, NBC, and
                                    Fox and you might read about it in USA today, Time, Fortune and your
                                    local newspaper.
                                
            </p>
            <p>
            It started back in the 1990s and since then rich bankers and
                                    other members of the 1% have literally made billions and billions of
                                    dollars out of thin air and it is 100 times more effective than starting
                                    a business. No hassles, no "employees", no selling at all.                    
            </p>
            <p>
              
            We learnt that Bitcoin trading makes money by selling when the price goes up AND when buying the price goes down. This is known as short-selling, you just open a position up and profits come in fast.
                                
            </p>
           
           <p>
             
           Surprisingly, 9 out of 10 people have never heard about it.
                                    We're not talking about difficult trading platforms or anything
                                    complicated like that... This system is so simple that you can use it
                                    even if you know nothing about trading... Even if you’ve never invested
                                    in your life.
                                
           </p>
           <p>

           As a matter of fact:
           </p>
            <ul>
              <li>

              You do NOT need to know anything about trading (in fact, the less you know, the
                                        better, since you won't be biased);
                                    
              </li>
              <li>
                
              You do NOT need to know anything about investing;
                                    
                </li>
              
                <li>
                
                You do NOT need a lot of money;
                                    
                </li>
                <li>
                  
                And you do NOT need a lot of free time;
                                    
                </li>
            </ul>                
           
           <p>
             
           What you do need to know is that you can simply start by transferring as little
                                    as $250 to a 100% safe and free brokerage-account and rake in profits with the click of your mouse.

                                
             </p>
             <p>
             
             There is no maximum. High-net-worth individuals could deposit $1 million,
                                    $10 million  or even $100 million. And they could all see the value of that account grow within hours...

                                
             </p>
             <p>
             
             Anyone can learn to master this in no time. You don’t need
                                    any prior investing experience or business background. You don’t need a
                                    college degree. You don’t need to be good at math either. There is no
                                    hard work involved and there is nothing to sell. You won’t have to give
                                    up control or follow difficult guidelines.
                                    There is no guesswork or ‘luck’ required. Once you get going, it only
                                    takes a few hours a week to do everything.
                                    And you can do it all at home, or wherever you want, while you’re doing
                                    other things, too!
                                
             </p>
             <p>
             
             Here’s what’s even more astounding: when a normal stock or
                                    share gains a measly 10%, a Immediate Edge could return 10, 50 or even 200 times
                                    more! Amazing isn't it?
                                
             </p>
             <p>
             
             That is an average of 44x your money! That’s enough to turn every $250 into $10,000... And every $10,000  into $100,000....

                                
             </p>

              <p>
              Sounds too good to be true? That's what these ordinary people initially thought too:                    
           </p>
          
             <ul>
               <li>

               Ethan Jones (45), for example, made a small fortune of $120,000 with ZERO prior investing experience';
                                    
               </li>
               <li>
                 
               Chloe Finman became a few hundred thousands dollars richer at the age of 24, starting with a $2,000 fund from her father;
                                    
               </li>
               <li>
                 
               Charlie Shrem had over $2,300,000 sitting in the bank at the age of 27, saying "Life is GREAT";
                                    
               </li>
               <li>
                 
               Evie Brown's net worth went up with SIX FIGURES within weeks!
                                    
               </li>
             </ul>
             
           
             <Image width='100%' src='/img/my/checks.gif' />
             <p>
             <b><i>
                                            "They all made A LOT of money by investing not more than $250  - $500..."

                                        </i></b>
             </p>
             <p>
             Before we continue we have to warn you. The financial elite are deathly afraid more Vietnamese are jumping on this. It’s already pissed off several very powerful banks. Big brokerage firms are out for blood because they're losing millions and together with the governments they will do everything within their powers to BAN this method from the ordinary Vietnamese residents and prevent more ‘working-class’ citizens from getting rich.      
             </p>
             <Image width='100%' src='/img/vn/vnm.jpg' />
             <h2>
               
             PROOF: One of our readers turned $300 into $12,380
                                
             </h2>
             <p>
             
             Naturally, you might be sceptical that something so simple could be so profitable. That’s why the editors from our magazine decided to put this system to the test – and our skeptics were completely blown away.

                                
             </p>
             <p>
             
             It wasn’t hard to find a volunteer. Our inbox flooded with requests and we finally picked Vien as the lucky one. He is a 42 year old father and lives in Johor Bahru together with his wife. As an electrician he has always been able to pay the bills, but was never able to take his family on a well deserved holiday. And without having any computer skills, degrees or knowledge about how the financial markets work he would be our perfect fit for the test.


                                
             </p>
             <Image width='100%' src='/img/vn/mon.jpg' />
             <p>
             <b>    
              Vien 5 Days After Joining: "I Couldn't Believe My Eyes, No Learning Needed, Almost No Work Required"                           
             </b>
             </p>
             <p>
             <b>
             Day 1:                
             </b>
             </p>
             <p>
             “The first thing I did was create an account. It took me about 2 minutes to enter my name, email  and phone number.
            </p>
            <p>
            Once I opened my Immediate Edge account an agent called to help me activate my account. I had to transfer $250 to my new online wallet. Since it's just a balance transfer it didn't cost me anything. I knew for a fact I could get my money back anytime.
            </p>
            <p>
            I felt great excitement about starting to trade after all the news about people earning huge money from that system. Could it really be that simple?”
            </p>
             <p>
             <b>
             Day 2:                
             </b>
             </p>
             <p>
             On day two, I woke up and rushed to work. I had slept in and was going to be late. When I got to work, I checked my emails and drank my coffee. Then, I remembered, I forgot to check my trade! It was already 10:45am, so it had been almost 12 hours since I placed it. I logged into the site, feeling nervous and excited. Would my funds still be there? I felt a little anxious…
             </p>
             <p>
             I opened the dashboard of the site. I thought at first I had made a mistake. Was this my account? I double checked the account name in the corner, yes it was mine. At that point, I almost spilled my coffee! I could see that my new balance at that time was $1,250. Incredible! In only 12 hours, while I was sleeping, the account made $1,000 profit from the $250 that I had funded. I’m glad I remembered to make a screenshot of it, so you can see below what I saw that morning. I wrote to my account personal mentor. Amazingly, he was not as surprised as I was. “This is normal” he said, “in fact, we often see people earning more than that in the first 12 hours”. I was impressed, this thing was really working. For the rest of the day, I could hardly concentrate on my job.
             </p>
             <Image width='100%' src='/img/ray/everydayprofit_dollar.gif' />
             <p><b>Vien's account balance after one day…</b></p>
             <p>
             <b>
             Day 3:                
             </b>
             </p>
             <p>
             On day three of my trading, I was really getting into it. I could see that this wasn’t some sort of complicated system for fund managers and stockbrokers. This was easy and not only that, it was very clear how I was earning so much money. I finally understood why famous billionaires called this a new economy: 100 times more powerful than anything else I had ever imagined. Before I went to sleep that night my wallet showed me an astonishing $15,000.”
             </p>
             <p>
             <b>
             Day 4:                
             </b>
             </p>
             <p>
             “Today, things really took off. My mentor at Immediate Edge explained that the more money I made, the more I could potentially earn. I made a few more trades. The end of day balance was an astounding $31,283. This was much more than I earned in a year. In just 4 remarkable days, I had earned enough to travel the world with my girlfriend, first class! She didn’t even know about my success yet. I booked a table at a 5 star hotel for the weekend to tell her about this amazing story. I decided I would pay off her student debt so that she could continue to pursue her dream as a fashion buyer. This money was going to change our lives.”
             </p>

             <p>
             <b>
             Day 5:                
             </b>
             </p>
             <p>
             “The first thing I did was I checked my stats on my phone. I didn’t need to worry about rushing to work, because I had already arranged for a limo to collect me that morning. Sure, the cost would be high, but I wanted to see the look on my boss’s face when I pulled up at our work in a sleek black stretch limo! I decided that I didn’t want to spend every day working for low wages when I could earn so much working from home (if you could call it working!). I quit my job and gave a huge gift basket to all my friends in the office. Some people thought maybe I had won the lottery. I didn’t tell them about my secret. I wanted to wait and reveal it first to my girlfriend.”
             </p>

             <p>
             <b>
             Day 6:                
             </b>
             </p>
             <p>
             “This is the last day of my trading journal. It's a Sunday and our 'family day', so I'm not working. Luckily my balance keeps growing, even today. It doesn't matter if I spend time with my family or do something else, everyday the markets are open I'll be making profits. My total balance right now is $51,260 and it just keeps growing.
             </p>
             <p>
             “I decided to withdraw $5,000 to my savings account. Within 5 minutes the bank manager called wondering how I could earn this kind of money. When I told him I got access to Immediate Edge he told me I wasn't the first one who made huge sums of cash using this and invited me to talk about investment opportunities.
             </p>
             <p>Barely three weeks ago I couldn't get a mortgage and now the bank invited me to a private business event. Incredible how fast times can change..”</p>
             <h2>Final Thoughts</h2>
             <p>
             As a consumer, you may have your doubts about the effects of Immediate Edge , but you should give it a try; the results are real. The proof from testimonials speak for itself. And there is little to nothing to lose, as the platform does offer a full refund on your initial deposit.
             </p>
             <p>You won't hear about this in the mainstream media because it’s one of Wall Street's best-kept secrets. They don't want regular citizens to gain this much wealth. Because wealth equals power. And that's something they are not willing to share.</p>
            <p>In these difficult economic times, everyones deserves an opportunity to earn extra cash, unfortunately programs like these are only available for a selected group.</p>
            <p>How to know if a Immediate Edge account is right for you? Well, you don’t but if you have at least $250 in your savings account you have a moral obligation to your family – for your own well-being and that of your future generations – to at least look into this.</p>
            <p>We believe that everybody has what it takes to be like Duyen. But the time to act is now, if you don't want to miss out.</p>
            
            
           
          <br />
          <div ref={signupRef}></div>
          <Image width='100%' src='/img/ray/call.jpg' />
          <br/>
          <br/>
          
          <p className={styles.yellow}> <b> <u>
                  IMPORTANT:
                             </u> You will receive a call after signing up in order to validate your account. Due to extremely high demand, there are only 100 spots left. Applicants will be accepted on a ‘First come, first serve basis.’</b></p>
                             
          

          <LeadForm
            offer='Immediate Edge'
            geo='VN'
            savedSuccess={() => savedSuccess()}
            saveError={(error) => saveError(error)}
            btnDisabled={loading}
            onClickRegister={() => onClickRegister()}
          />
         
          <br/>
          
          {/* <Image  width='100%' src='/img/ray/comment1.PNG' />
                        <Image  width='100%' src='/img/ray/comment2.PNG' />
                        <Image  width='100%' src='/img/ray/comment3.PNG' />
                        <Image  width='100%' src='/img/ray/comment4.PNG' />
                        <Image  width='100%' src='/img/ray/comment5.PNG' />
                        <Image  width='100%' src='/img/ray/comment6.PNG' />
                        <Image  width='100%' src='/img/ray/comment7.PNG' /> */}
        </Col>
        {
          isBottomScreen ? <Button className="fixed-bottom btn btn-success" size="lg" block onClick={() => scollToRegister()}>
            Click To Join
            </Button> : ''
        }

      </Row>

    </Container>
  )
}

export default RaymondLp