import React from 'react';
import styles from './BlogCard.module.css';
import {Card} from 'react-bootstrap';

const BlogCard = ({title ,category,img ,height})=>{
 return(
    
   
 <Card >
  <Card.Img variant="top" src={img} height={height}/>
  <Card.Body>
   <Card.Title>{category}</Card.Title>
   <p>{title}</p>
  </Card.Body>
</Card>
     
 )
};

export default BlogCard;