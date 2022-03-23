import React ,{useState , useEffect , useRef} from 'react'
import LeadForm from '../../../Forms/LeadForm/LeadForm.js'

import Cookies from 'universal-cookie'
import {Container,Image,Col,Row,Modal,Button} from 'react-bootstrap'
import RegisterMessage from '../../../Forms/LeadForm/RegisterMessage/RegisterMessage.js'
import styles from './index.module.css'


const Lp = props =>{ 
    const [showRegisterMessage,setShowRegisterMessage] = useState(false)
    const [registerTitle,setRegisterTitle] = useState('')
    const [registerMessage,setRegisterMessage] = useState('')
    const [loading,setIsLoading] = useState(false)
    const [isLeadSaved, setIsLeadSaved] = useState(false)
    const [date,setDate] = useState('')
    const [day,setDay] = useState('')
    const [month,setMonth] = useState('')
    const [year,setYear] = useState('')
    const [isBottomScreen,setIsBottomScreen] = useState(true)
    const signupRef = useRef(null)
    const topPageRef = useRef(null)
    useEffect(()=>{
     
      window.addEventListener('scroll', scrollHandler);   
      setDates()
      topPageRef.current.scrollIntoView()
    
     return () => window.removeEventListener('scroll', scrollHandler) 
    },[])

    const scrollHandler =()=>{
      if(window.pageYOffset + window.innerHeight > signupRef.current.offsetTop)
        {
         setIsBottomScreen(false)
        }else{
          setIsBottomScreen(true)
        }
     }

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

    const saveError =(error) =>{
        setRegisterTitle('Registeration Failed...')
        setRegisterMessage(error)
        setShowRegisterMessage(true)
        setIsLoading(false)
    }

    const savedSuccess = ()=>{      
       setIsLeadSaved(true)    
        setRegisterTitle('Thank you for registering.')
        setRegisterMessage('Stay tuned and available for a call from your personal investment manager to help you get started')
        setShowRegisterMessage(true)
        setIsLoading(false)
    }

    const modalclose = ()=>{
      setShowRegisterMessage(false)
    }

    const onClickRegister =()=>{
        setIsLoading(true)        
    }
    

   const scollToRegister=()=>{
     signupRef.current.scrollIntoView()
   }

   
    return(
        <Container  className={styles.bodyContainer}>
            
            <Row className={styles.box} ref={topPageRef}>

            <Col md={12}>


            <RegisterMessage 
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage} 
            modalclose={() => modalclose()}
            />


          
            <Image   width='100%' src='/img/flight/uae/header.jpg' />
           <h1>
           While Emirates airlines fires thousands, cabin crew member Nassima makes millions as an investor!
            
           </h1>
           <p>
           <span>               
              {day} {date}/{month}/{year}
            </span> 
           </p>
        
           <Image  width='100%' src='/img/flight/uae/aef.jpg' />
            <br/>
           <br/>
           <p>
           <b>Breaking: </b>
							Emirates is the newest airline company to announce lay-offs to their employees. Amongst them cabin crew will take the biggest hit with 9,000 announced to go.
           </p>
           <p>           
							Nassima Ismail, a cabin crew member living in Dubai, already received her letter informing her that “her position is being made redundant”. She would be in deep trouble right now, but she secured her future income way back in March.</p>
           <p>
             
           </p>
            <p>
            Nassima realized things would go this way when the global crisis started, so she slowly started investing. Today, with 20,000,000 dirham in her account she couldn’t care less that she finally got fired.
            </p>
            <p>
              <b>
								Nassima explains: </b>	“When the global crisis started in March everyone thought it would be over in a few weeks and business would be back to normal. I can’t explain why but I had a feeling this crisis would last a bit longer.

						
          </p>
            <p>
        
							Even though we resumed our flights in a few weeks I decided to find one more source of income and prepare myself for the worst scenario - getting fired.

						
            </p>
            <p>
							"I asked around for a few jobs and while they said they would hire me my busy flight schedule made it impossible to work normal hours. It was obvious I had to find a job I could do from my laptop while I have free time between flights or while I’m in my hotel room resting for the return flights.
            </p>
            <p>
							At that point rumors of people getting fired already started floating around and that only proved I was right. I tried to tell my colleagues to do the same thing I was doing but no one listened to me.
            </p>
            <p>
						

            Most of them had husbands who were working but I was single and depended on that paycheck. I seemed crazy to them and now they see me as a hero.
						
            </p>
            <p>
              	I spent my spare time browsing various Youtube channels looking for ideas on how to find a job offers when I came across some advice on how to make money online through							
                Immediate Edge . I was never a math person, but it seemed simple enough, so I decided to give it a try.
            </p>
            <p>
              
							After a quick tutorial I took 1,100 dirham from my account and made an investment. I was very nervous. When I saw that I earned back my investment and made an extra 2,150 dirham I was relieved. I quickly clicked the withdraw button, to transfer the money to my bank account, so I don’t lose it. Within two hours the money was in my account.”

						
            </p>
            <Row>
                <Col>
                <Image  width='100%' src='/img/flight/uae/emi6n-2.jpg' />
                <p>
                  
								“I would login to trade every day. It was that simple.”

							
                </p>
               
                </Col>
            </Row>
            <p>
              
							“In the next few months profit just poured in! It was the most exciting period of my life. After 3 months my account was at 8,605,714 dirham. Today I have around 20,000,000 dirham and I still invest all the time. Now, everyone’s asking me to borrow them money since they got fired.”

						
            </p>
            <br/>           
     
           <p>
             
							“Today I have around 20,000,000 dirham and I still invest all the time”

						
           </p>
           <p>
             
							“During that whole time I was working because I really like to travel, and I needed some time to realize I was actually making that much money. My colleagues figured out something was happening, but I never told them the whole truth.

						
           </p>
           <p>
             
							I told them I made a few thousand dirham to keep them off my back. Now, since we’re not working together anymore I told them everything.


						
           </p>
           <p>
             
							I’m going to enjoy the next year and travel around the world to finally relax. The only difference being I won’t be the cabin crew but a first class passenger!”

						
           </p>
           <h2>
             
							But what exactly is Nassima talking about?

						
           </h2>
           <br/>
           <p>
             
							Nassima was able to earn extra money online thanks to an online system that has been quietly making a few ordinary Emirates citizens wealthy for decades.


						
           </p>
           <p>
             
							A source from a leading consultancy stated: “
							<i>
								This is now creating many more weekly millionaires than the lottery. In fact, we are seeing 90% of new clients seeking wealth advice now earn their main income with it. What is astounding is that many of these people were working in regular jobs, like construction, office jobs and even unemployed and now they are earning more than top CEOs in London, New York or Tokyo.
							</i>
           </p>
           <p>
             
							After extensive research we from The Daily News were blown away by the results.
						
           </p>
           <p>
             
							Experts call it “Immediate Edge"
							
           </p>
           <p>
             
							It's the fastest cash producing machine in history. It's highly likely you'll see more about it's fundamentals on CNN, NBC, and Fox and you might read about it in the USA today, Time, Fortune and your local newspaper.
						
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
              
							Here’s what’s even more astounding: when a normal stock or share gains a measly 10%, a Bitcoin could return 10, 50 or even 200 times more! Amazing isn't it?

						
            </p>
            <p>
              
							That is an average of 44x your money! That’s enough to turn every 220 dirham into 22,000... And every 7,000 dirham into 750,000…
						
            </p>
            <p>
              
							Sounds too good to be true? That's what these ordinary people initially thought too:

						
            </p>
            <ul>
              <li>
								Yousef Al-Mushaiqeh (45), for example, made a small fortune of 645,428 dirham with ZERO prior investing experience;
							</li>
              <li>
								Nujoud Al-Fifi became a few hundred thousand dirham richer at the age of 24, starting with a 2,000 dirham fund from her father;
							</li>
              <li>
								Farah Al Asmari had over 1,258,269 dirham sitting in the bank at the age of 27, saying "Life is GREAT";
							</li>
              <li>
								Sahar Al-Askar’s net worth went up with SIX FIGURES within weeks!
							</li>
            </ul>
            <br/>
            <br/>
            <Image  width='100%' src='/img/flight/uae/checks.gif' />
            <p>
              <i>
									"They all made A LOT of money by investing not more than 1,100 - 6,500 dirham..."

								</i>
            </p>
            
           <p>
             
							Before we continue we have to warn you. The financial elite are deathly afraid more Emirates citizens are jumping on this. It’s already pissed off several very powerful banks. Big brokerage firms are out for blood because they're losing millions and together with the governments they will do everything within their powers to BAN this method from the ordinary Emirates residents and prevent more “working-class” citizens from getting rich.

						
           </p>
              {/* <h2>
							PROOF: One of our readers turned 1,100 dirham into 200,000 dirham
						</h2> */}
            <br/>
            {/* <p>
              
							Naturally, you might be skeptical that something so simple could be so profitable. That’s why the editors from our magazine decided to put this system to the test – and our skeptics were completely blown away.

						
            </p>

<p>
  
It wasn’t hard to find a volunteer. Our inbox flooded with requests and we finally picked Burhan Al-Samir as the lucky one. He is a 42-year-old father and lives in Dubai together with his wife and four children. As an electrician he has always been able to pay the bills but was never able to take his family on a well-deserved holiday. And without having any computer skills, degrees or knowledge about how the financial markets work he would be our perfect fit for the test.


						
</p>

<Image  width='100%' src='/img/flight/uae/dirhams.jpg' />  
<p>
Burhan Al-Samir 5 Days After Joining: "I Couldn't Believe My Eyes, No Learning Needed, Almost No Work Required"						  
</p>     
<p>
<b>
Day 1:

</b>
							
</p>
<p>
  
“The first thing I did was create an account on Immediate Edge 
								registration page. It took me about 2 minutes to enter my name, email, phone-number, and password.
							
								
</p>
<p>
  
To activate the system, I had to transfer 1,100 dirham to my new online wallet. Since it's just a balance transfer it didn't cost me anything. I knew for a fact I could get my money back anytime.
							
</p> */}
{/* <p>
  
I felt great excitement about starting to trade after all the news about people earning huge money from that system. Then I received my free call. Could it really be that simple?”

							
</p>
<p>
  <b>
    
  Day 2:
							
  </b>
</p>
<p>
  
“On day two, I woke up and rushed to work. I had slept in and was going to be late. When I got to work, I checked my emails and drank my coffee. Then, I remembered, I forgot to check my trade! It was already 10:45 AM, so it had been almost 12 hours since I placed it. I logged into the site, feeling nervous and excited. Would my funds still be there? I felt a little anxious…


							
</p>
<p>

I opened the dashboard of the site. I thought at first I had made a mistake. Was this my account? I double checked the account name in the corner, yes it was mine. At that point, I almost spilled my coffee! I could see that my new balance at that time was 8,605 dirham. Incredible! In only 12 hours, while I was sleeping, the account made 7,505 dirham profit from the 1,100 dirham that I had funded. I’m glad I remembered to make a screenshot of it, so you can see below what I saw that morning.
								I wrote to my account personal mentor. Amazingly, he was not as surprised as I was. “This is normal” he said, “in fact, we often see people earning more than that in the first 12 hours”. I was impressed, this thing was really working. For the rest of the day, I could hardly concentrate on my job.”

							
</p>
<p>
<Image  width='100%' src='/img/flight/uae/profits.jpg' />  
Burhan’s account balance after one day…

								
</p>
<p>
  <b>
    
  Day 3:
							
  </b>
  
</p>
<p>
  
“On day three of my trading, I was really getting into it. I could see that this wasn’t some sort of complicated system for fund managers and stockbrokers. This was easy and not only that, it was very clear how I was earning so much money. I finally understood why famous billionaires called this a new economy: 100 times more powerful than anything else I had ever imagined. Before I went to sleep that night my wallet showed me an astonishing 56,677 dirham.”

							
</p>
<p>
 <b>
   
 Day 4:
							</b> 
</p>
<p>
  
“Today, things really took off. My mentor at Immediate Edge 
								explained that the more money I made, the more I could potentially earn. I made a few more trades. The end of day balance was an astounding 111,367 dirham. This was much more than I earned in a year. In just 4 remarkable days, I had earned enough to travel the world with my family, first class! They didn’t even know about my success yet.
								I booked a table at a 5 star hotel for the weekend to tell my wife about this amazing story. I decided I would pay off her student debt so that she could continue to pursue her dream as a fashion buyer. This money was going to change our lives.”
							
								
</p>
<p>
  <b>
    
  Day 5:
							
  </b>
</p>
<p>
  
“The first thing I did was I checked my stats on my phone. I didn’t need to worry about rushing to work, because I had already arranged for a limo to collect me that morning. Sure, the cost would be high, but I wanted to see the look on my boss’s face when I pulled up at our work in a sleek black stretch limo! I decided that I didn’t want to spend every day working for low wages when I could earn so much working from home (if you could call it working!).
								I quit my job and gave a huge gift basket to all my colleagues at the office. Some people thought maybe I had won the lottery. I didn’t tell them about my secret. I wanted to wait and reveal it first to my wife.”

							
</p>

<p>
<b>
								Day 6:
							</b>  
              
	
							
</p>
<p>
“This is the last day of my trading journal. It's a Sunday and our “family day”, so I'm not working. Luckily, my balance keeps growing, even today. It doesn't matter if I spend time with my family or do something else, every day the markets are open I'll be making profits. My total balance right now is 200,000 dirham and it just keeps growing.

</p>

<p>
  

I decided to withdraw 80,000 dirham to my savings account. Within 5 minutes the bank manager called wondering how I could earn this kind of money. When I told him I got access to Immediate Edge he told me I wasn't the first one who made huge sums of cash using this and invited me to talk about investment opportunities.
							
</p>
<p>
  
Barely three weeks ago I couldn't get a mortgage and now the bank invited me to a private business event. Incredible how fast times can change...”

							
</p> */}

{/* <h2>
  
Final Thoughts
						
</h2>
<br/>
<p>
  
As a consumer, you may have your doubts about the effects of Immediate Edge 
							, but you should give it a try; the results are real. The proof from testimonials speak for itself. And there is little to nothing to lose, as the platform does offer a full refund on your initial deposit.
						
							
</p>
<p>
  
You won't hear about this in the mainstream media because it’s one of Wall Street's best-kept secrets. They don't want regular citizens to gain this much wealth. Because wealth equals power. And that's something they are not willing to share.
						
</p> */}
<p>

In these difficult economic times, everyone deserves an opportunity to earn extra cash, unfortunately programs like these are only available for a selected group.

						
</p>
<p>
  
How to know if a <b>Immediate Edge </b> 
							account is right for you? Well, you don’t but if you have at few moments you can register below and an agent will call to guide you with the proccess and you can decide if an account is right for you. You have a moral obligation to your family – for your own well-being and that of your future generations – to at least look into this.

						
							
</p>
{/* <p>
  
We believe that everybody has what it takes to be like Nassima.
<u>
								But the time to act is now, if you don't want to miss out.
							</u>							
</p> */}
<p className={styles.by}>
   <strong>
								Due to extremely high demand, there are only 100 spots left. Applicants will be accepted on a “First come, first serve basis.”
							</strong>
</p>



  <p  ref={signupRef}>
  {/* <p>
    First you create your account if it’s still possible. </p> */}
    <LeadForm 
                         offer='Immediate Edge'
                         geo='AE' 
                         savedSuccess={() => savedSuccess()} 
                         saveError={(error) =>saveError(error)}
                         btnDisabled={loading}
                         onClickRegister={()=> onClickRegister()}
                         trackingId = {props.trackingId}
                        />            
  

  
            
  </p>
 
  {/* <p>
  Once registered,  Make Deposit a deposit of 1,100 dirham or higher into your account. The amount you deposit is the amount of money you will have to trade with - Immediate Edge is completely free to use and you can withdraw your money at any time!

  </p>
								
  
<p>
  
As long as the registration form still shows on the this page, you still have a shot.
<i>
  
  *Fill out all the details with the correct information to avoid disappointment.
                
  </i>				
</p>



<p>
  
When we asked Nassima if she would show us her e-wallet as we’d never seen such amount of money she eagerly agreed to do so:
						
</p>
<p>
  
When we asked Nassima if she would show us her e-wallet as we’d never seen such amount of money she eagerly agreed to do so:
						
</p>
<p>
  
When we asked Nassima if she would show us her e-wallet as we’d never seen such amount of money she eagerly agreed to do so:
						
</p>

<p>
  
For those who are still in doubt (so was I) here’s the photo of her e-wallet:
<br/>
<Image  width='100%' src='/img/flight/uae/results.jpg' />  						
</p>

<br/>
<br/>




                     
                                */}
                     
                        {/* <Image  width='100%' src='/img/ray/comment1.PNG' />
                        <Image  width='100%' src='/img/ray/comment2.PNG' />
                        <Image  width='100%' src='/img/ray/comment3.PNG' />
                        <Image  width='100%' src='/img/ray/comment4.PNG' />
                        <Image  width='100%' src='/img/ray/comment5.PNG' />
                        <Image  width='100%' src='/img/ray/comment6.PNG' />
                        <Image  width='100%' src='/img/ray/comment7.PNG' /> */}
             {
             isBottomScreen && !isLeadSaved ?<Button className="fixed-bottom btn btn-success" size="lg" block onClick={() => scollToRegister()}>            
             Click To Join
            </Button>:''
             }
           </Col>
         
           </Row>
       
        </Container>
    )
}

export default Lp