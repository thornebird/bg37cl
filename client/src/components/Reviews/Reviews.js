import React from 'react';
import Review from './Review/Review.js';

const Reviews  = props =>{
 
 return(
     <>
      {
          props.reviews.map((review,index) =>{
              return  <Review key={index} review={review}/>
          })
      }
     </>
 )
};
export default Reviews;