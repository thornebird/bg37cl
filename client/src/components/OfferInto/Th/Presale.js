import React ,{useState ,useEffect }  from 'react';
import Quiz from '../../Quiz/THQuiz/Quiz.js';

import OfferInto  from './Into/OfferInto/OfferInto.js';
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
     {title:"ท่านอายุมากกว่า 18 ปีหรือไม่" ,
      questionList:[
          "ใช่",
          "ไม่ใช่"
      ]},
      {title:"ท่านเป็นคนไทยหรือไม่" ,
      questionList:[
        "ใช่",
        "ไม่ใช่"
      ]},
      {title:"ท่านใช้ภาษาใดเป็นภาษาหลัก" ,
      questionList:[
          "อังกฤษ",
          "ไทย"
      ]},
      {title:"ท่านมีความสนใจในเรื่องใดมากที่สุดในโปรแกรมนี้" ,
      questionList:[
          "ใช้เวลากับครอบครัวให้มากขึ้นและมีคุณภาพชีวิตที่ดีขึ้น",
          "มีรายได้เพียงพอต่อค่าใช้จ่าย",
          "มองหาตัวเลือกในการเพิ่มรายได้",
        
      ]},
      {title:"ท่านอาศัยอยู่ในภาคใดของประเทศ" ,
      questionList:[
          "ภาคกลาง",
          "ภาคเหนือ",
          "ภาคตะวันออกเฉียงเหนือ",
          "ภาคใต้",
          "ภาคตะวันออก",
          "ภาคตะวันตก"
      ]}
 ];

 const popup ={
   title :'ยินดีด้วย',
   body : 'ท่านมีคุณสมบัติในการสมัครโปรแกรมนี้',
   button :'ไปที่คู่มือ'
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