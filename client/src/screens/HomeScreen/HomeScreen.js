import React, { useEffect, useState } from 'react';
import BlogCard from './../../components/BlogCard/BlogCard.js';
import styles from './HomeScreen.module.css';
import RecommendedBlogs from './../../components/RecommendBlogs/RecommendBlogs.js';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import Loading from './../../components/Loading/Loading.js';
import BannerSales from './../../components/BannerSales/BannerSales.js'

import { Alert , Button } from 'react-bootstrap';
import Cookies from 'universal-cookie'
const HomeScreen = props => {
  // posts need to have a category, title ,  img , body 
  const cookies = new Cookies()
  const history = useHistory();
  const [blogs, setBlogs] = useState([]);
  const [recommended,setRecommended] = useState([]);
  const [category,setCategory] = useState('');
  const [gdpr,setGdpr] = useState(false)
  const [showLanguage,setShowLanguage] = useState(true)

  useEffect(() => {
   const gdprCheck = cookies.get('gdpr')
   setGdpr(gdprCheck)
    axios.get('/api/blog/thumnails')
      .then(response => {      
        if (props.location.pathname !== '/') {
          filterBlogs(props.location.pathname, response.data);
        } else {
          setBlogs(response.data);
          getRecentPosts()
          setCategory('Travel blogs');
        }

      })
      .catch(error => {
      //  console.log(error);
      });
  }, [props.location.pathname]);

  const filterBlogs = (path, list) => {
    let filterValue = '';

    switch (path) {
      case '/travel-africa':
        filterValue = 'Travel Africa';
        setCategory('Travel Africa Blogs');
        break;
      case '/africa':
          filterValue = 'Travel Africa';
          setCategory('Travel Africa Blogs');
          break;
      case '/travel-europe':
        filterValue = 'Travel Europe';
        setCategory('Travel Europe Blogs');
        break;
      case '/travel':
        filterValue = 'Travel';
        setCategory('Travel');
        break;
      case '/health':
        filterValue = 'Health';
        setCategory('Health');
        break;
      default:

        break;
    }

    if (filterValue !== '') {
      const newBlogs = list.filter((blog => { return blog.category === filterValue }));
      setBlogs(newBlogs);   
      getRecentPosts()   
    }

  };

  const shuffle =(array)=> {
  return  array.sort(() => Math.random() - 0.5);
  }

  const blogClicked = (blogId) => {
    history.push(`/post/${blogId}`);
  }


  const setGDPR = ()=>{
    setGdpr(true)
    cookies.set('gdpr', true, { path: '/' })
  }

  const languageSelected = ()=>{
    setShowLanguage(false)
  }

  const getRecentPosts = ()=>{   
   return  blogs.map(blog =>{
      return { title:blog.title,
               id: blog._id
      }
    })
  }
  return (
    <Container  className={styles.container} >
        <Col className={styles.infoGdpr}> <Row>
        <Alert show={!gdpr} variant="info">        
        <p>
          We and our partners use cookies to personalise your experience, to show you content based on your interests. By using our website and our services you agree to these policies and terms
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setGDPR()} variant="outline-success">
            Continue
          </Button>
        </div>
      </Alert>
      </Row>
        </Col>
      <h3 className={styles.title}>Welcome to {window.location.hostname}</h3>
       <Col md={12} sm={2}>
      
        {blogs.length > 0 ? '' : <Loading/>} 
       </Col>
      <Row>
     
      {/* <Col md={3} sm={12}>
        <div className={styles.category}>
          { recommended.length >0 ? <h5>Recommended blogs</h5> :''}               
        </div>
          {
            recommended.length >0 ? <RecommendedBlogs blogClicked={(id) => blogClicked(id)} blogs={recommended}/> :''
          }
        </Col> */}
        <Col md={9} sm={2}>
        <div className={styles.category}>
         <h5 className={styles.subtitle}>{category}</h5> 
         
        </div>
          <Row>           
            {
               blogs.map(blog => {
                return <Col key={blog._id} md={6}>
                  <div  className={styles.cardBlog} onClick={() => blogClicked(blog._id)}>
                    <BlogCard
                      category={blog.category}
                      title={blog.title}
                      img={blog.image}
                      height='250px'
                    />
                  </div>
                </Col>
              })
            }
          </Row>
        </Col>
        <Col md={3} sm={12}>
      <h5 className={styles.subtitle}>Recent posts</h5> 
        { getRecentPosts().map(blog =>{
          return <div key={blog.id} className={styles.recentTitle} onClick={() => blogClicked(blog.id)}><h6>{blog.title}</h6></div>
        })}

       <BannerSales/>

      </Col>
 
        
      
      </Row>
      <Row>
     
      </Row>
  
    </Container>
  )
};

export default HomeScreen;