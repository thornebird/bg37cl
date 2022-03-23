import React from 'react';
import styles from './Header.module.css';
import { Image } from 'react-bootstrap';
const Header = ()=>{
    return(
        <>
        
        {/* <Image width='100%' src='/img/ie/iemobilemenu.jpg' className={styles.headerMenuContainer}/> */}
        <div className={styles.headerContainer}></div>
        </>
    );
}

export default Header;