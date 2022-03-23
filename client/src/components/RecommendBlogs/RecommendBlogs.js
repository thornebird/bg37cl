import React from 'react';
import BlogCard from './../../components/BlogCard/BlogCard.js';

const RecommendedBlogs = props =>{
  const  clickedBlog =(blogId)=>{
   props.blogClicked(blogId);
  }
 return (
     props.blogs.map((blog)=>{
        return <div  key={blog._id} onClick={() => clickedBlog(blog._id)}>
            <BlogCard 
             category={blog.category}      
             title={blog.title}
             img={blog.image}
             height='100px'/>
            
        </div> 
     })
 )
     
};

export default RecommendedBlogs;