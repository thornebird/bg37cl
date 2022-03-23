import React ,{useState,useEffect,useRef} from 'react';
import { Row, Col, } from 'react-bootstrap';
import {createRef} from 'react'
import styles from './ShippingFrame.module.css';



const ShippingFrame = (props) => {
   
    const [height,setHeight] = useState('500px');


    useEffect(() => {

      setHeight(window.screen.height);      
    }, [height]);

 
    return (
        <Row styles={{width:'100%' ,padding:'0px'}}>
            <Col className={styles.container}>
            
                <iframe 
                    frameBorder={0}
                    width="100%"
                    height={height}
                    src={props.src}
                    title='frame'></iframe>
            </Col>
        </Row>


    )
};

export default ShippingFrame;