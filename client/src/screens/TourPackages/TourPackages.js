import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import TourPackage  from './TourPackage/TourPackage.js'
import {Container,Col,Row} from 'react-bootstrap'
import styles from './TourPackage/TourPackage.module.css'
const TourPackages = ()=>{
    const [tours,setTours] = useState([])
    useEffect(()=>{
     loadPackages()
    },[])


    const loadPackages = ()=>{
      
      axios.get('/api/tours')
      .then(response =>{
        console.log('response tours',response.data)
        setTours(response.data.tours)
      })
      .catch(error=>{
        console.log(error)
      })
    }

    return(
        <Container className={styles.container}>
        {/* <h3>
          NEED TO ADD GDPR
        Tour packages
        </h3>  */}
        
        <p>
          *Please note these tour packages are not sold by {window.location.hostname}. These are top rated tour packages.
        </p>
        <Row>
        {
          tours.map((tour,index) =>{
            return <Col      key={index}  md={4} sm={12}>
              <TourPackage
       
            title={tour.title} 
            city={tour.city}
            link={tour.link}
            image={tour.image}
            price={tour.price}
            description={tour.description}/>
            </Col>
          })
        }
        </Row>
        </Container>
    )

}

export default TourPackages