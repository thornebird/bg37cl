import React, { useEffect, useState } from 'react';
import QuizCard from '../../components/Quiz/QuizCard/QuizCard.js';
import { Container, Row, Col, Button, } from 'react-bootstrap';
import styles from './QuizzesScreen.module.css';
import { useHistory } from "react-router-dom";
import axios from 'axios'
const QuizzesScreen = () => {
    // need menu with quiz categories sport/geography/food

    const history = useHistory();
    // const newQuizes = [
    //     {
    //         title: 'Quiz title 1',
    //         description: "Quiz description",
    //         img: 'https://i2.wp.com/howsmart.net/wp-content/uploads/2020/10/apple_iphone-12-e1602678942481.jpg?w=628&ssl=1'
    //     }
    //     , {
    //         title: 'Quiz title 1',
    //         description: "Quiz description",
    //         img: 'https://i2.wp.com/howsmart.net/wp-content/uploads/2020/10/apple_iphone-12-e1602678942481.jpg?w=628&ssl=1'
    //     }
    //     , {
    //         title: 'Quiz title 1',
    //         description: "Quiz description",
    //         img: 'https://i2.wp.com/howsmart.net/wp-content/uploads/2020/10/apple_iphone-12-e1602678942481.jpg?w=628&ssl=1'
    //     }
    //     , {
    //         title: 'Quiz title 1',
    //         description: "Quiz description",
    //         img: 'https://i2.wp.com/howsmart.net/wp-content/uploads/2020/10/apple_iphone-12-e1602678942481.jpg?w=628&ssl=1'
    //     },
    //     {
    //         title: 'Quiz title 1',
    //         description: "Quiz description",
    //         img: 'https://i2.wp.com/howsmart.net/wp-content/uploads/2020/10/apple_iphone-12-e1602678942481.jpg?w=628&ssl=1'
    //     }
    //     , {
    //         title: 'Quiz title 1',
    //         description: "Quiz description",
    //         img: 'https://i2.wp.com/howsmart.net/wp-content/uploads/2020/10/apple_iphone-12-e1602678942481.jpg?w=628&ssl=1'
    //     }
    //     , {
    //         title: 'Quiz title 1',
    //         description: "Quiz description",
    //         img: 'https://i2.wp.com/howsmart.net/wp-content/uploads/2020/10/apple_iphone-12-e1602678942481.jpg?w=628&ssl=1'
    //     }
    //     , {
    //         title: 'Quiz title 1',
    //         description: "Quiz description",
    //         img: 'https://i2.wp.com/howsmart.net/wp-content/uploads/2020/10/apple_iphone-12-e1602678942481.jpg?w=628&ssl=1'
    //     }
    // ];
    const [quizzes, setQuizzes] = useState([]);

    useEffect(()=>{
        axios.get('/api/quiz/thumnails')
        .then(response => {
         console.log(response.data)
         const quizArray =  response.data
         setQuizzes(quizArray)
        })
        .catch(error=>{
         console.log('quizz load error'+error)
        })
     // load all quizes if menu item is set for example sport than load sport quizes
    },[])

    const startQuiz = (index) => {
        console.log(index);
        history.push(`/quiz/${index}`);
    };


    return (
        <Container>
            Quiz screen
            <Row>

                {
                    quizzes.map((quiz, index) => {
                        return <Col md={6} sm={6} key={index}>
                            <QuizCard
                                title={quiz.title}
                                description={quiz.description}
                                img={quiz.img}
                                startQuiz={() => startQuiz(quiz.quizPost._id)} />
                        </Col>
                    })
                }

            </Row>
        </Container>
    )
};

export default QuizzesScreen;