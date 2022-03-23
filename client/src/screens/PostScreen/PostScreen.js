import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './PostScreen.module.css'
import { Container, Row, Col, Image ,ListGroup } from 'react-bootstrap';
import parse from 'html-react-parser';
import Loading from  './../../components/Loading/Loading.js';
import BannerSales from './../../components/BannerSales/BannerSales.js'
import DateText from '../../components/DateText.js';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const PostScreen = props => {
  const [category,setCategory] = useState('');
  const [post, setPost] = useState({});
  const [paragaraphs, setParagaraphs] = useState([]);
  const history = useHistory()
  const { postId } = useParams();

  useEffect(() => {     
    window.scrollTo(0, 0);
    axios.get(`/api/blog/posts/${postId}`)
      .then(response => {
      
        setParagaraphs(response.data.post.body);
        setPost(response.data.post);
        setCategory(response.data.category);      
      })
      .catch(error => {
     //   console.log(error);       
      })
  
  }, []);

 const clickApply = ()=>{
  history.push("/contact-us")
 }
 


  return (
    <Container className={styles.postContainer}>
      <Row>
        <Col>
        <ListGroup variant="flush">
        <ListGroup.Item> <h1>{post.title}</h1></ListGroup.Item>       
        <ListGroup.Item><span>{category}</span></ListGroup.Item>
        </ListGroup>
        <Image className={styles.postImg} width='100%'  src={post.image} />
        </Col>
      </Row>
      <Row>
        {paragaraphs.length > 0 ? <Col>
        
        
        
        
      
        <Col  >
     
          <Col>
          {
            paragaraphs.map((p, i) => {
              return <div className={styles.text} key={i}>{parse(p)}</div>
            }) 
          }
          </Col>          
        </Col>          
        </Col>:  <Loading/>}
        <Col md={2} sm={4}>
         <BannerSales/>
        </Col>
      
        
      </Row>
 
    </Container>
  )
}

export default PostScreen;