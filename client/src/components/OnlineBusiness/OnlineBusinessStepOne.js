import React from 'react'
import axios from 'axios'

import OnlineBusiness from './OnlineBusiness.js'
import MLP  from './../OfferInto/Za/Flight/index.js'

export default class WorkHomeInto extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            isLoading : true,
            isBtnClicked : false            
       } 
      }

    componentWillMount(){  
     this.checkClick()     
    }

    checkClick(){
        let isValidClick = false
        axios.post(`/api/clicks`,{
            "campaignId": "60aa792983e3a893e732a23a"
       }).then(response =>{
           console.log(response)
           isValidClick = response.data.isValid
           this.updateClick(isValidClick)
       }).catch(error =>{
        console.log(error)
      })
      window.scrollTo(0, 0)
    }


    updateClick = isValid =>{
        this.setState({
            isValid : isValid,
            isLoading : false
        })
       
    }
    
    onStepOneClicked = ()=>{
        this.setState({
            isBtnClicked : true
        })
        this.checkClick() 
    } 

    showComponent = ()=>{
        
     const comp = this.state.isLoading ? 'Loading...' 
                 : !this.state.isLoading && this.state.isValid ? <MLP/>
                 : <OnlineBusiness/>
     return comp
    }
    render() {
        return <>
       {
           this.showComponent()
       }
      
        </>
    }
}

 