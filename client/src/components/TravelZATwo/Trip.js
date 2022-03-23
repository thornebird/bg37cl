import React from 'react'
import Travel from '../../screens/PostScreen/PostScreen.js'

import Lp from '../OfferInto/Za/Raymond/index.js'
import axios from'axios'
import Intro  from './Into/Intro.js'

class Trip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            isLoading : true,
            introComplete : false,
            trackingId:'60c77abfc7d04b35013c8521'
       } 
      }

    componentWillMount(){  
      localStorage.setItem('tracked',true);
      sessionStorage.setItem('tracked', true)
      
    }

    track(){
        const trackedStorage = localStorage.getItem('tracked')
        const trackedSession  = sessionStorage.getItem('tracked')
        const tracked  =  trackedStorage && trackedSession
        const urlReferrer = document.referrer !== '' ? document.referrer : 'No referrer'

        let isValidTrack = false
        axios.post(`/api/clicks`,{
            "campaignId": this.state.trackingId ,
            "urlReferrer": urlReferrer,
            "tracked":tracked
       }).then(response =>{
           //console.log(response)
           isValidTrack = response.data.isValid
           this.updateTrack(isValidTrack)
       }).catch(error =>{
        //console.log(error)
      })
      window.scrollTo(0, 0)
    }
   
    introClick = ()=>{   
        this.track()
    }

    updateTrack = isValid =>{
        this.setState({
            isValid : isValid,
            isLoading : false,
            introComplete:true
        })  

        window.scrollTo(0,0)
    }

    
  S

   showSteOne = ()=>{
    return <Intro introClick={()=>this.introClick()}/>

   }
    showComponent = ()=>{
        
        const comp =  this.state.isLoading ? 'Loading...' 
                    : !this.state.isLoading && this.state.isValid ? <Lp trackingId={this.state.trackingId}/>
                    : <Travel/>
        return comp
       }
  
    render() {
        return(  <>
        
        {/* {
              this.showMenu() 
        }
          */}
        {
            !this.state.introComplete? this.showSteOne() :''
        }
        
        {             
            this.state.introComplete ? this.showComponent() :''
        }
       
      
        </>)
    }
   
    

}

export default Trip