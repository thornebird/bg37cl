import React ,{useEffect,useState} from 'react';
import axios from 'axios';
const QuizScreen = props =>{
const [quiz,setQuiz] = useState({});

 useEffect(()=>{
 // load quiz by id here from server
 },[]);

 return(
     <>
     Quiz screen id : {props.match.params.quizId}
     </>
 )
};

export default QuizScreen;