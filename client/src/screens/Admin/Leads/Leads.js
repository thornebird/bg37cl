import React ,{useEffect,useState} from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';
import {Pagination,Button}  from 'react-bootstrap';

const Leads =props=>{
const [at,setAt] =useState('')
const [leads,setLeads] = useState([])
const [pageNumber,setPageNumber] = useState(1)
const [maxPage,setMaxPage] = useState(1)
useEffect(()=>{
    const cookies = new Cookies();
    const getAt =cookies.get('at')
    setAt(getAt)
    loadLeads()
},[pageNumber])

const loadLeads = ()=>{
    axios.get('/api/contact/c_lead?pageNumber='+pageNumber,{
        headers: {
           'authorization':  at
    }}).then(response => {
        setLeads(response.data.leads)
        setMaxPage(response.data.maxPage)
    })
  
}



const pagination = ()=>{
    let buttons = []
   

    if(pageNumber<maxPage){
      
    for(let i= pageNumber; i < pageNumber+5 ;i++){
        if(i === pageNumber && pageNumber >= 3){
            
            buttons.push(
                <Pagination.Item onClick={changePage} key={Math.random()} >
                 {pageNumber-1}
               </Pagination.Item>
            )
        }
        if(pageNumber > 1 && i === pageNumber ){
            buttons.unshift(
                <Pagination.Item onClick={changePage} key={Math.random()} >
                 1
               </Pagination.Item>
            )
        }
        if(i <= maxPage ){
        buttons.push(
            <Pagination.Item onClick={changePage} key={Math.random()} active={i === pageNumber}>
            {i}
           </Pagination.Item>
        )
        }
    }
   
   
}else{
    console.log('else')
    for(let i = pageNumber; i > maxPage - 5;i--){
        console.log('else push')
            buttons.push(
                <Pagination.Item onClick={changePage} key={Math.random()} active={i === pageNumber}>
                {i}
               </Pagination.Item>
            )
 
    }
    buttons.reverse() 
    buttons.unshift(
        <Pagination.Item onClick={changePage} key={Math.random()} >
        1
      </Pagination.Item>
    )
     
}
    
    return buttons
}

const changePage = (event) => {
    let selected = Number(event.target.textContent)
   
   
    if(!isNaN(selected)){
        setPageNumber(selected)
    }else{
        alert('Page already active')
    }
}

const formatDate = date =>{
    const newDate =  new Date(date)
    return newDate.toDateString()  
}


 return(
     <div>
  
     {
         leads.map(lead =>{
             return <div key={lead._id}> {lead.createdAt !== '' ?  formatDate(lead.createdAt) : lead.email}  / {lead.firstName} / {lead.lastName}</div>
         })
     }
     <Pagination>
     {
        leads.length > 0 ?  pagination() :'Loading'
     }
     </Pagination> 
     </div>
 )
}

export default Leads