import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './Loading.module.css';

const Loading = ()=>{
 return(
     <div className={styles.spinner}>
    <Spinner  animation="border" role="status"  size="xl">
    <span className="sr-only">Loading...</span>
    </Spinner>
     </div>
   
 )
};

export default Loading;