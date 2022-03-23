import React from 'react'
import Result from './Results/Result'
import styles from './Sidebar.module.css'

const SideBar =()=>{

 const results =[
     {
         image:'/img/au/results/side1.jpg',
         result:'AU$5,552',
         comment:'"I have been using Immediate Edge for just over 2 weeks, I have taken my initial deposit from AU$350 to AU$5,802. That is far more than I make at work."',
         name:'Kyle McLennan',
         city:'Subiaco, WA',
     },
     {
        image:'/img/au/results/side2.jpg',
        result:'AU$9,200',
        comment:'"I hit over AU$9,200 in profit after just a month of using Immediate Edge. Because I can use it on my laptop, I  been travelling around Australia and making money the whole time!"',
        name:'Jonathan Morris',
        city:'Willunga, SA',
    },
    {
        image:'/img/au/results/side3.jpg',
        result:'AU$22,219',
        comment:'"It is so damn easy to use, even for me! I have never traded before, but I am making AU$3,000+ a week and loving life!"',
        name:'Lilly Peterson',
        city:'Rockhampton, QLD',
    },
    {
        image:'/img/au/results/side4.jpg',
        result:'AU$41,943',
        comment:'"I have been able to finally quit my job, thanks entirely to Immediate Edge. I made so much, so easily!"',
        name:'Fredic Paul',
        city:'Perth, WA',
    },
    {
        image:'/img/au/results/side5.jpg',
        result:'AU$7,521',
        comment:'"I have only been using the Immediate Edge for 2 weeks and it has already paid for my European holiday."',
        name:'Julia Keaton',
        city:'Werribee, VIC',
    },
    {
        image:'/img/au/results/side6.jpg',
        result:'AU$58,744',
        comment:'"I teamed up with my best friends and together we  hit the jackpot after just 3 weeks. The trading robot does all the work for you. Together we made over AU$17,000 a week"',
        name:'Jordan Moss & Travis Parks',
        city:'Essendon, VIC',
    },
    {
        image:'/img/au/results/side7.jpg',
        result:'AU$12,301',
        comment:'"My Boyfriend was the one who told me about Immediate Edge and it has changed my live. I  been making over AU$2,000 a week for over a month, with less than 30 minutes of work a day"',
        name:'Brianna Wiggans',
        city:'Tamworth, NSW',
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