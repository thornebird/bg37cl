import React from 'react'
import axios from 'axios'
import Flight from './Flight/index.js'
import WorkGuideWH from './WorkGuideWH.js'
import StepOne from './Flight/StepOne/StepOne.js'
import {Container} from 'react-bootstrap'

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
            "campaignId": "6083b747f53fcd4db769980b"
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
                 : !this.state.isLoading && this.state.isValid ? <Flight/>
                 : <WorkGuideWH/>
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

 