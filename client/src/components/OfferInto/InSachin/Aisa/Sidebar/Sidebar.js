import React from 'react'
import Result from './Results/Result'
import styles from './Sidebar.module.css'

const SideBar =()=>{

 const results =[
     {
         image:'/img/india/results/side1.jpg',
         result:'₹395,980',
         comment:'"I havee been using Bitcoin Loophole for just over 2 weeks, I made my initial deposit from ₹214,000 to ₹413,811. That is far more than I make at work."',
         name:'Reyansh Chawla',
         city:'Mumbai',
     },
     {
        image:'/img/india/results/side2.jpg',
        result:'₹656,164',
        comment:'"I hit over ₹656,164 in profit after just a month of using Bitcoin Loophole. Because I can use it on my laptop, I have been travelling around India and making money the whole time!"',
        name:'Muhammad Apte',
        city:'Delhi',
    },
    {
        image:'/img/india/results/side3.jpg',
        result:'₹1,584,815',
        comment:'"It is so damn easy to use, even for me! I have never traded before, but I am making ₹213,981+ a week and loving life!"',
        name:'Bhagya Deol',
        city:'Bangalore',
    },
    {
        image:'/img/india/results/side4.jpg',
        result:'₹2,991,670',
        comment:'"I have been able to finally quit my job, thanks entirely to Bitcoin Loophole. I have made so much, so easily!"',
        name:'Shaurya Lal',
        city:'Hyderabad',
    },
    {
        image:'/img/india/results/side5.jpg',
        result:'₹536,450',
        comment:'"I have only been using the Bitcoin Loophole for 2 weeks and it has already paid for my holiday."',
        name:'Falguni Dewan',
        city:'Jaipur',
    },
    {
        image:'/img/india/results/side6.jpg',
        result:'₹4,189,382',
        comment:'"I teamed up with my best friends and together we hit the jackpot after just 3 weeks. The trading robot does all the work for you. Together we made over ₹1,212,370 a week"',
        name:'Krish Kohli & Atharv Mangal',
        city:'Bhopal',
    },
    {
        image:'/img/india/results/side7.jpg',
        result:'₹877,257',
        comment:'"My boyfriend was the one who told me about Bitcoin Loophole and it has changed my live. I have been making over ₹142,631 a week for over a month, with less than 30 minutes of work a day"',
        name:'Fulki Balakrishnan',
        city:'Srinagar',
    }
 ]
  return(
      <div className={styles.sideBox}>
      <h5 className={styles.sidebarTitle}>READER RESULTS</h5>
      
     {
         results.map((item,i)=>{
             return <Result
               image={item.image}
               result={item.result}
               comment={item.comment}
               name={item.name}
               city={item.city}
             />
         })
     }
      
      </div>
  )
}

export default SideBar