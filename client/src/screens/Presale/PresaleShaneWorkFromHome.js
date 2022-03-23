import React ,{useState ,useEffect }  from 'react';
import Quiz from '../../components/Quiz/Quiz.js';
import Reviews from '../../components/Reviews/Reviews.js';
import OfferIntoInvestShane  from '../../components/OfferInto/OfferIntoInvestShane.js';
import PopupMessage from '../../components/PopupMessage/PopupMessage.js'
import PhoneForm from '../../components/PhoneForm/PhoneForm.js';
import { Container , Row } from 'react-bootstrap';

/// https://trf.promotrck.com/c/e29eaf5619988cc6
// flow step 1 quiz
// step 2 - checking your answers
// step  3 - congratulation claim your prize
const ThankYou = (props) =>{


 const [quizDone,setQuizDone] = useState(false);
 const [checkAnswers,setcheckAnswers] = useState(false);
 const [showPopup,setShowPopup] = useState(false);
 const [address,setAddress] = useState(false);
 
 useEffect(()=>{
 },[props])
 const questions = [
     {title:"How old are you?" ,
      questionList:[
          "25-30",
          "35-40",
          "40-45",
          "45+"
      ]},
      {title:"Are you currently employed?" ,
      questionList:[
          "Yes",
           "No",
      ]},
      {title:"Why do you want to join my work from home program" ,
      questionList:[
          "Looking to repalce my monthly income",
          "Looking for additional income",
          "Currently unemployed and looking for an income",
          "Looking to earn from home",
      ]},
      {title:"When will you start if accepted into our program?" ,
      questionList:[
          "Today",
          "Tomorrow",
          "This week",
          "Next week"        
      ]}
 ];


 const reviews = [
    {
        img:'/img/1.jpg',
        name:"Jack Williams",
        review :"Are there still more positions available other options to register?",
        date : "today date",
        likes: 34
    },
    {
       img:'/img/2.jpg',
       name:"Amelia Taylor",
       review :"Did you see anything like this? Maybe you've had a hard time, try again!",
       date : "today date",
       likes: 45
   },
   {
       img:'/img/4.jpg',
       name:"George Brown",
       review :"I thought it was a joke but this morning I received my first cheque:)",
       date : "today date",
       likes: 8
   },
   {
       img:'/img/5.jpg',
       name:"John Standing",
       review :"Fantastic! I can finally work from home without worrying!",
       date : "today date",
       likes: 13
   },
   {   img:'/img/6.jpg',
       name:"Olivia Smith",
       review :"I wasn't accepted can I try again?",
       date : "today date",
       likes: 13
   },
   {
       img:'/img/7.jpg',
       name:"Emma Davies",
       review :"Can I receive my access today? Thank you",
       date : "today date",
       likes: 56
   },
   {
       img:'/img/8.jpg',
       name:"Lily Walker",
       review :"I participated. Thank you so much guys!",
       date : "today date",
       likes: 56
   },
   {
       img:'/img/9.jpg',
       name:"Oscar Thomson",
       review :"I received a call and have been approved. I am very happy!",
       date : "today date",
       likes: 18
   }
  ];

 const completed = () =>{
    setShowPopup(true);
    setQuizDone(true);
 };

 const checkingAnswers = ()=>{
    setcheckAnswers(true);
 }

 const handleClose = () =>{
    setShowPopup(false);
 };

 const popup ={
    title :'Congratulations!',
    body : 'You are able to join my work from home program. Enter your phone number and you will recieve an sms with the details of my program.',
    button :'Continue'
  }
  
//  const claim  = ()=>{
//     //setClaimed(true);
//   // setAddress(props.url);
//  };
 
 return(
     <Container>

     <Row>
         
     </Row>
     <PopupMessage show={showPopup} handleClose={handleClose} 
     title={popup.title} 
     body={popup.body}
     button={popup.button}/>
     
    <OfferIntoInvestShane/> 
     {
    
       !quizDone  ? <Quiz ip={props.ip} questions={questions} completed={() => completed()} checkingAnswers={() => checkingAnswers()}/> : ''
     } 
     {/* {
       quizDone && !claimed ?<Congratulations claim={claim}/>:''
     } */}
    
     {
       quizDone && checkAnswers?     <PhoneForm
            
        smsId='5fed6fc530a2916f1171ad42'
        geoCode='AU'
        showPhone='true'
        landingPage='Work from home'
        title='Get access to this project'
        buttonText='Claim your guide' />:''
     }
      <Reviews reviews={reviews}/>
     
     </Container>
 )
};

export default ThankYou;