import React ,{useEffect,useState}  from 'react'
import {Image,Col,Row} from 'react-bootstrap'


const Lp = ()=>{
    const [date,setDate] = useState('')
    const [day,setDay] = useState('')
    const [month,setMonth] = useState('')
    const [year,setYear] = useState('')


    useEffect(()=>{
        setDates()
    },[])

    const setDates = ()=>{
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

          setMonth(date.getMonth()+1)
          setDate(date.getDate());
          setYear(date.getFullYear());
    }

 return(
   
    <Row>

    <Col>
    <Image    width='100%' src='/img/ray/fin.PNG' />
    <h1>
     <u>SPECIAL REPORT </u>: Raymond Ackerman’s Work From Home Program Takes South Africa By Storm				
    </h1>
    <h5>
       {date}/{month}/{year}
    </h5>
 
    <Image  width='100%' src='/img/ray/main.jpg' />
    <i>Raymond Ackerman comes out with a new secret investment that's making hundreds of people in South Africa very rich</i>
    <br/>
    <br/>
    <p>
    <b>Raymond Ackerman is a South African businessman and philanthropist. He is the owner of Pick n Pay, a
                 supermarket Chain Store in South Africa.</b>
    </p>
    <p>
    Last week, he appeared on eNCA's live Morning Live news and announced a new "wealth loophole" which he says can
    <strong> transform anyone into a millionaire within 3-4 months</strong> Ackerman urged everyone in South Africa to jump on this amazing opportunity before the big banks shut it down for good.
    </p>
    <p>And sure enough, minutes after the interview was over, Standard Bank called to
                 stop Ackerman's interview from being aired - it was already too late.</p>
     <p>
         <strong>Here's exactly what happened: </strong>
     </p>
     <p>
     eNCA's live Morning Live news presenters, Uveka Rangappa and Dan Moyane invited Ackerman on the show to share any tips he had on
                 building wealth, and the iconic businessman dropped a bomb:
     </p>
     <p>
         <em>"What's made me successful is jumping into new opportunities quickly - without any
                 hesitation. And right now, my number one money-maker is a new  
                 <strong> cryptocurrency Immediate Edge
                     {/* auto-trading program called <div className={styles.cta} onClick={() => onClickCta()}><strong>Immediate Edge</strong></div> */}
                 </strong>
                 . It's the single biggest opportunity I've
                 seen in my entire lifetime to build a small fortune fast. I urge everyone to check this out before the
                 banks shut it down."
         </em>
     </p>
     <p>
     Uveka Rangappa and Dan Moyane was left in disbelief as Ackerman pulled out his phone and showed viewers how
                 much money he's making through this new money-making program that now has everyone in South Africa
                 whispering. 
     </p>
     <Row>
         <Col>
         <Image  width='100%' src='/img/ray/sen5-2.jpg' />
        
         <Image  width='85%' src='/img/ray/deposits.PNG' />
         </Col>
     </Row>
     <br/>
     <p>
     The segment ran out of time before Ackerman could elaborate, so we got an exclusive interview
                 with
                 the man himself to learn more about this controversial opportunity.
     </p>
     <h2>
     eNCA's live Morning Live news Exclusive with Raymond Ackerman
     </h2>
     <p>
         <em>
         "You may have heard about this <strong>new cryptocurrency investment platform called</strong> Immediate Edge {/* <div className={styles.cta} onClick={()=>onClickCta()}>Immediate Edge</div> */} Immediate Edge
         that’s helping regular people in South Africa, Asia and
                 North America build fortunes overnight. You may be skeptical because it sounds too good to be true.
         </em>

     </p>
     <p>
     Ackerman continues: 
     </p>
     <p>
         <em>“I get that because I thought the same thing when a trusted friend told me about it.
                 But after seeing with my own eyes how much money he was making, I had to try it for myself.</em>
     </p>
     <p>
         <em>
         I'm glad I tried it because it was some of the biggest and easiest money I've ever
                 made. I'm talking <strong>tens of thousands of rands
                     a day on autopilot.</strong> It’s literally the fastest way to make a windfall of cash right now.
                 And it’s not going to last for much longer when more and more people find out about it, or when banks
                 shut it down for good.” 
         </em>
     </p>
     <p>
     <Image  width='100%' src='/img/ray/sen5-3.jpg' />
     </p>
     <h2>
             
     <b>
     What Exactly Is Immediate Edge And How Does IT WORK?
     </b>
     </h2>
     <p>
         <strong>
         The idea behind Immediate Edge is straightforward:
         </strong> To allow the average person to cash in on the cryptocurrency boom which is
                 still the most lucrative investment of the 21st century, despite what most people think. 
     </p>
     <p>
     Although Bitcoin price have hit an all time high of  dropped from it’s all time high of 838,000 per Bitcoin, traders are still
                 making a killing. Why? Because there are thousands of other cryptocurrencies besides Bitcoin that being
                 traded for huge profits on a daily basis. 
     </p>
     <p>
     Some of these cryptocurrencies include Ripple, Ethereum, Monero, Zcash and Ripple and they are still
                 making returns of over 10,000% and higher for ordinary people in
                 South Africa. 
     </p>
     <p>
         
     Immediate Edge	lets you profit from all of these cryptocurrencies, even in a bear market. It uses artificial
                 intelligence (AI) to automatically handle long and short selling for you so you can make money around
                 the clock, even while you sleep.
     </p>
     <p>
     Immediate Edge is backed by some of the smartest tech minds to ever exist. <strong>Richard Branson, Elon Musk and Bill Gates </strong>
     just to name a few. 		
     </p>
     <Image  width='100%' src='/img/ray/muskbranson.jpg' />
     <p>
         <i>Bill Gates and Richard Branson discuss </i> Immediate Edge at CES 2020.
     </p>
     <p>
     These tech geniuses have built multi-billion companies on solving complex issues like online payments,
                 computing, and transportation. Now, they’re tackling the global problem of wealth inequality by
                 letting anyone - no matter how rich or poor they are - make 
                 <strong>
                   enough money to enjoy a happy and
                     fulfilling life. 
                 </strong>
     </p>
     <h2>
         <b>The lucrative money-making secret big banks
                 don't want you to know</b>
     </h2>
     <p>
     Raymond Ackerman goes on,
     </p>
     <p>
         <em>"We're seeing hard economic times, and this is the solution people have been waiting for. Never in
                 history have we had such an </em> amazing opportunity  that ordinary people can easily
                 take advantage of to  <strong>generate tremendous wealth in such a short time.</strong>
     </p>
     <p>
         <em>
         Some people are hesitant to try this because it’s so different. And that’s because the 
         <strong> big
                 banks are trying to cover this up! </strong>
                  The big banks are actively creating propaganda and calling
                 cryptocurrencies and platform like Immediate Edge a scam. Why? They are worried their corporate profits will shrink
                 once their customers know how to create massive wealth themselves. 
                 
         </em>
     </p>
     <p>
         <em>
         The truth is, cryptocurrency is the oppurtunity of our lifetime and anyone who does not jump on this
                 opportunity is missing out. 
                 <strong>
                  I’ve already received angry calls and threats from big financial corporations   because I’m bringing this technology to people’s attention. But screw them.
                 </strong>
                 <br/>
                 People in
                 South Africa are already starting to know the truth and it’s only a matter of time before more and more do.
         </em>
     </p>
     <p>
         <em>
         I'm sharing this because I've also received hundreds of emails from people thanking me for sharing
                 this secret. My favorite one is from a <strong>young man who bought his little brother his dream
                     car</strong> Immediate Edge   - a Ferrari 488 Pista using the cash he made from . This platform is truly making the lives of everyone in the
                 world a little better.” 
                 
         </em>
     </p>
     
     <p>
      <Image  width='100%' src='/img/ray/dreamcar.jpg' />
      <i>Steven Braun used the profits he earned from  Immediate Edge  to buy his
                     little brother his dream car. What an inspiring way to use wealth for good!</i>
     </p>
     <h2>
         <b>Does Immediate Edge Really work? We test It
                 Ourselves To Out</b>
     </h2>
     <p>
     Our senior editors wouldn't allow us to publish the interview with Raymond Ackerman until we
                 verified that Immediate Edge is a legitimate make-money-from-home opportunity.
                 Our corporate leadership did not want us releasing any information that could potentially cause citizens
                 of South Africa
                 to lose their hard-earned money. 
     </p>
     <p>
     So our editorial team tested Immediate Edge 
                 to make sure it actually works like Ackerman
                 described. One of our online editors, Zachary Tisdall, volunteered to risk his own money and test out Immediate Edge
                 
                 
     </p>
     <p>
     Zachary is a 53-year-old father of 2 girls whose wife lost her job last year due to
                 illness. He admitted he was struggling financially and this investment opportunity could be the
                 answer. 
     </p>
     <p>
     <Image  width='100%' src='/img/ray/tisdale.jpg' />
     <i>Zach's family was struggling to make ends meet and hoped that Immediate Edge 
                     could relieve his financial pressure, so he decided to test the system and report his results</i>
     </p>
     <p>
        <strong>Zachary reports: </strong>
     </p>


     <p>
         <em>
         "At first, when I heard the interview with Ackerman, I thought he was joking. Making
                 money from home is only a dream. I decided to try it anyway given my financial circumstances- and for
                 the sake of good journalism.
         </em>
     </p>

     <p>
     <em>
     I watched an introductory video about the platform  and then
                 signed up. The video seemed to be over-promising but I put my skepticism aside. Within a few hours, I
                 received a call from my personal investor. He answered all questions and doubts I had, and assured me I
                 was going to make money. Period.
     </em>
    </p>
    <p>
     <em>
     My personal investor even promised that  <strong>if I lose even a single dime </strong> ,
                 he would promptly refund my
                 R3,900 deposit. That's how confident he was this was going to change my life. Now that’s customer
                 service beyond anything I’ve seen and no wonder banks are scared. 
     </em>
    </p>
    <p>
     <em>
     Once I received access to the platform, I deposited my initial investment of
                 R3,900. That's about is what my family spends on junk food every month, so I decided to stop taking us
                 to fast food for a month. Now we can be healthy, plus have the opportunity to get rich.
     </em>
    </p>

    <p>
     <em>
     The  Immediate Edge system itself is a cryptocurrency auto-trading platform. The software uses advanced AI algorithms and
                 machine learning to predict <strong>exactly </strong>  when cryptocurrencies will go up and down. Then it
                 will automatically buy and sell for you around the clock. Technology has already made our lives easier
                 in every possible way, so why not use it to make more money as well?"
     </em>
    </p>
 <h2><b>Zach's real time results with the
                 system</b></h2>

    <p>
     <em>
     "Within 1 hour of depositing R3,900, the software started trading for me. To be
                 honest, I was nervous it would lose all of my money. And sure enough, my first trade was a R300
                 loss!  
     </em>
    </p>
    <p>
     <em>
     I felt my throat close up. I thought I had been scammed. I was even ready to call my
                 personal investor and ask for my money back. But then I remembered what my he told me earlier on our
                 call: <strong>The algorithm is right about 80-89% of the time </strong> . You’re not going to win EVERY
                 trade, but you'll win enough and be profitable overall. 
     </em>
    </p>

    <p>
     <em>
     So I let the software keep trading for me and watched it closely. <strong>The next
                 trade was profitable!</strong> Only R215 but it was still something. Then the next trade was <strong>R580
                 profit.</strong> Then <strong>R250 profit</strong>, making a total profit of <strong>R760.</strong>
                 And this was all under 5 minutes! </em>
     </p>
  

    <p>
    <em>Soon I started scooping up cash like ice-cream and I couldn’t believe my
                 eyes. </em><em>Every time I refreshed the screen, my profits grew higher and higher. I felt like I was
                 on drugs because this was such an exciting rush. </em>
     <Image  width='100%' src='/img/ray/everydayprofit_dollar.gif' />
    </p>

    <p>
    <i>Everytime I refreshed my trading dashboard, my profits grew higher and higher. It was such an	exciting rush!</i>
    </p>
    <p>
    <em>Now I know why Raymond Ackerman is in a good mood all the time. And why the big banks don’t
                 want people anywhere near this wealth loophole. By the end of the day, <strong>I
                     had made over R8,555</strong> in profit rands, not bad from a starting investment of R3,900! I was so
             excited I barely got any sleep.</em>
    </p>
    <p ><em>The next day was Tuesday and I had to go back to work. To be honest (and don’t tell my
                 boss this), it was hard to focus on my job knowing the Immediate EdgeImmediate Edge
                 software was making me money. </em></p>

 <p><em>I snuck out to the bathroom a few times to check my profits, and they kept stacking up
                 (with a small loss here and there). At the end of the day, before I put my kids to sleep, my <strong>account
                     balance showed R15,300</strong>. That’s more than I earn in a WEEK at my regular job! </em></p>
  <p><em>By the end of the week, I made a total of <strong>R60,694</strong> rands. I withdrew
                 exactly R51,060 and re-invested the rest. Within 2 days I received my first cheque in the mail - for
                 exactly R51,060. I couldn’t believe this was real life!" </em>
                 <Image  width='100%' src='/img/ray/cheque.jpg' /></p>
 <p>
                 <i>Zach's received a cheque for R51,060 for his first two weeks of using Immediate Edge </i>
 </p>
 <p><strong>Zach continues,</strong></p>
 <p><i>"Now, I am consistently making an additional <strong>R7,950 to R17,020</strong> per
                 day thanks to Immediate Edge . Now, the money just gets deposited into my bank
                 account every few days. Just a few clicks and I received my funds within 24-48 hours. Everytime the
                 transfer hits my checking account, I have to pinch myself to make sure I wasn’t dreaming. </i></p>


 <p><i>Luckily, I LOVE my job here because I get to bring people important news stories (like
                 this one) otherwise I would have quit by now. I did, however, plan a vacation for my family to Bali
                 Indonesia to celebrate being out of debt and finally having my family’s finances back on track! </i></p>
 
 <p><i>This wouldn’t be possible without Mr. Ackerman’s generosity and sharing his secret live on
                 television. And I’m happy I took the risk to try Immediate Edge
                 myself. My wife is happier than ever and my kids’ toy cupboard is well stocked. </i></p>
 
  <p><i>My co-workers are kicking themselves they didn’t sign up two weeks ago like I did. But
                 soon, our entire office signed up (including my boss) and they are calling me a “hero” for trying
                 this.</i>"</p>
     <h2><b>How to get started with Immediate Edge
                 (limited spots available)</b></h2>
     <p >To get started, you only need your computer, smartphone, or tablet with internet access.
                 You don't need any specific skills other than knowing how to use a computer and browsing the internet.
                 You don’t need any technology or cryptocurrency experience because the software and your personal
                 investor guarantees you make a profit. </p>
  <p >Another perk of this program is you get to start when you want. You can make your own
                 schedule - whether that's 5 hours a week or 50 hours a week. Just start the auto-trading software when
                 you wish, and you can pause whenever you want (I don’t know why you ever would though). </p>
 <p>To save our reader’s time and double check the Immediate Edge's functionality, Zachary
                 kindly created a guide to getting started on the system.</p>
                 <h2>
                     <b>Here's My step-by-step on registering:</b>
                 </h2>
                 <p>
                 The first thing you do is complete the form below with your name, phone number and email address. It's quick and simple. Once your registration is succesfull an agent will give you a call and guide you through the process of activating your account  </p>
                 <p ><em><strong>Tip</strong>: Even if you don't decide to invest any money, I recommend signing up now because it's free and registrations for South Africa residents could
                             end at any moment)</em></p>
                 <p>
                 "Everyone wants to be rich but no one knows how to do it. Well, Immediate Edge is the opportunity of a lifetime to build a fortune that will allow you to live the life you truly desire. It will NOT be around forever, so do not miss out." - Raymond Ackerman
                 </p>
                 <h2><b>UPDATE</b></h2>
                 We just received news that as of today  {day} {date}/{month}/{year} almost all positions are filled up for South Africa residents. Immediate Edge can only accept a limited number of total users to keep the profit per user is high. As of right now, there are still (37) spots left, so hurry up and sign up now to secure your spot.           
                <br/>
                <br/>
                
                <Image  width='100%' src='/img/ray/call.jpg' />
                <div>
                  <p>
                    <b>
                      <u>
                      IMPORTANT:
                      </u> You will receive a call after signing up. Don't ignore it because the advisors are very helpful when starting out and it is highly recommend to build a good relationship with them.
                    </b>
                    
                  </p>
             </div>
             </Col>
             </Row>
            
           
 )
}

export default Lp