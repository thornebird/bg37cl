import React ,{useState ,useEffect }  from 'react';
import Quiz from '../../Quiz/Quiz.js';

import OfferInto  from './OfferInto/OfferInto.js';
import PopupMessage from '../../PopupMessage/PopupMessage.js';
import { useHistory } from "react-router-dom";
import Header from './Header/Header.js';

import { Container } from 'react-bootstrap';
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
  // load quiz questions from cid & isTracked is valid click if not valid show fake quiz
  // alert(props.cid);
  // if(props.tracked){
  //   alert('Valid click');
  // }else{
  //   alert('inValid click');    
  // }
 },[props])
 const questions = [
     {title:"Are you older than 18?" ,
      questionList:[
          "Yes",
          "No"
      ]},
      {title:"Are you a Malaysian resident?" ,
      questionList:[
        "Yes",
        "No"
      ]},
      {title:"What language do you prefer?" ,
      questionList:[
          "English",
          "Malay"
      ]},
      {title:"What interests you most about this program?" ,
      questionList:[
          "Enjoying time with my family and a better quality of life.",
          "Covering my monthly expenses",
          "Looking for an alternative source of income",
        
      ]},
    //   {title:"Which part of the country do yo live in?" ,
    //   questionList:[
    //       "Eastern Cape",
    //       "Free State",
    //       "Gauteng",
    //       "KwaZulu-Natal",
    //       "Limpopo",
    //       "Mpumalanga",
    //       "Northern Cape",
    //       "North West",
    //       "Western Cape"
    //   ]}
 ];

 const popup ={
   title :'Congratulations!',
   body : 'You are eligible for the program.',
   button :'Continue to the guide.'
 }
 

 const completed = () =>{
    window.scrollTo(0, 0)
    setShowPopup(true);
    setQuizDone(true);
 };

 const checkingAnswers = ()=>{
    setcheckAnswers(true);
 }

 const handleClose = () =>{
    setShowPopup(false);
    props.completeQuiz()
 };

//  const claim  = ()=>{
//     //setClaimed(true);
//   // setAddress(props.url);
//  };

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

 
 return(
     <Container>

     <Header/> 
     <PopupMessage show={showPopup} handleClose={handleClose} 
     title={popup.title} 
     body={popup.body}
     button={popup.button}/>
     
     {
         <OfferInto/> 
     }
     {
    
       !quizDone  ? <Quiz ip={props.ip} questions={questions} completed={() => completed()} checkingAnswers={() => checkingAnswers()}/> : ''
     } 
     {/* {
       quizDone && !claimed ?<Congratulations claim={claim}/>:''
     } */}
    
     {/* {
       quizDone && checkAnswers?     <PhoneForm
            
        smsId='5fcd3462b32abe6b015535ad'
        geoCode='ZA'
        showPhone='true'
        landingPage='ZA iPhone v3'
        title='Continue to claim your prize from Takealot'
        buttonText='Claim your iPhone' />:''
     } */}
     {/* <Reviews reviews={reviews}/> */}
     
     </Container>
 )
};

export default ThankYou;