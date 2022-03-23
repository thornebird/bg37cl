import React from 'react'
import Result from './Results/Result'
import styles from './Sidebar.module.css'

const SideBar =()=>{

 const results =[
     {
         image:'/img/au/results/side1.jpg',
         result:'€5,552',
         comment:'"I have been using Bitcoin Cirtcuit for just over 2 weeks, I have taken my initial deposit from €250 to €5,802. That is far more than I make at work."',
         name:'Kyle McLennan',
         city:'Athenry',
     },
     {
        image:'/img/au/results/side2.jpg',
        result:'€9,200',
        comment:'"I hit over €9,200 in profit after just a month of using Bitcoin Cirtcuit. Because I can use it on my laptop, I  been travelling around Australia and making money the whole time!"',
        name:'Jonathan Morris',
        city:'Kilrush',
    },
    {
        image:'/img/au/results/side3.jpg',
        result:'€22,219',
        comment:'"It is so damn easy to use, even for me! I have never traded before, but I am making €3,000+ a week and loving life!"',
        name:'Lydia Bartlett',
        city:'Listowel',
    },
    {
        image:'/img/au/results/side4.jpg',
        result:'€41,943',
        comment:'"I have been able to finally quit my job, thanks entirely to Bitcoin Cirtcuit. I made so much, so easily!"',
        name:'Matthew Stephens',
        city:'Cashel',
    },
    {
        image:'/img/au/results/side5.jpg',
        result:'€7,521',
        comment:'"I have only been using the Bitcoin Cirtcuit for 2 weeks and it has already paid for my European holiday."',
        name:'Julia Keaton',
        city:'Tullow',
    },
    {
        image:'/img/au/results/side6.jpg',
        result:'€58,744',
        comment:'"I teamed up with my best friends and together we  hit the jackpot after just 3 weeks. The trading robot does all the work for you. Together we made over €17,000 a week"',
        name:'Jordan Moss & Travis Parks',
        city:'Birr',
    },
    {
        image:'/img/au/results/side7.jpg',
        result:'€12,301',
        comment:'"My Boyfriend was the one who told me about Bitcoin Cirtcuit and it has changed my live. I  been making over €2,000 a week for over a month, with less than 30 minutes of work a day"',
        name:'Brianna Wiggans',
        city:'Tramore',
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