import React ,{useState,useEffect} from  'react';
import styles from './Quiz.module.css';
import {Row,Col,Button,Spinner} from 'react-bootstrap';


const Quiz  = props =>{
 const [count,setCount] = useState(0);
 const [completed,setCompleted] = useState(false);
 const [isAnswered,setIsAnswered] = useState(false);
 const [isIp,setIsIp] = useState(false);
 const [loops, setLoops] = useState(0);
 const [loadingPrize, setIsLoadingPrize] =useState(false);

 useEffect(() => {
  
   if(completed){
    props.checkingAnswers();
    ///  need to load quiz questions from mongo db by cid  

    const interval = setInterval(() => {  
      if(loops === 0){
        setIsAnswered(true);
      }
      if(loops === 1){       
        setIsIp(true);
      }      
      if(loops === 2) {
        setIsLoadingPrize(true);
      }
      if(loops === 4){
        props.completed();
      }
      let newLoops  = loops;
      setLoops(newLoops+1); 
     
    }, 1000);

    return () => clearInterval(interval);
  }
  }, [completed,props,loops]);


 const answered = () =>{
   let newCount = count;
   newCount++;
    
   if(newCount !== props.questions.length){
    setCount(newCount);
   }else{  
    setCompleted(true);
   }
 };

 

 return (
     <>
       
    { !completed ? <Row className={styles.background}>
         <Col sm={12} md={12}>
           <span className={styles.title}>คำถาม {count+1}/{props.questions.length}: </span> 
           <span className={styles.title}>{ props.questions[count].title} </span> 
          {
              props.questions[count].questionList.map((q,i) =>{
              return <Button size="lg" block variant="primary" onClick={()=> answered()} key={i}>{q}</Button>
              })
          }       
   
         </Col>
         
     </Row>:
     <Row className={styles.center}  >
        <Col sm={12} md={12}>
           <span className={styles.title}>เรากำลังทำการตรวจสอบคำตอบของท่าน</span>    
          {
            isAnswered ?<p>
             ทั้ง {props.questions.length} คำถามได้รับคำตอบแล้ว
           </p> :''
          }
          {
            isIp ?<p>
             Ip {props.ip} มีคุณสมบัติในการสมัคร
           </p> :''
          } 
          {
            loadingPrize ? <p>
            กำลังดาวน์โหลด
          </p> :''
          }         
         </Col>
         <Col sm={12} md={12}>
          <Spinner animation="border" size="lg" />
         </Col>
     </Row>
}  
     </>
 )
};

export default Quiz;