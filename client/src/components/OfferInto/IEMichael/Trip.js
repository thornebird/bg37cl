import React from 'react'
//import Travel from '../../screens/PostScreen/PostScreen.js'
import House from '../../../screens/BuyProperty/BuyProperty.js'

import Lp from './Europe/index.js'
import axios from'axios'
import Intro  from './Intro.js'

class Trip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            isLoading : true,
            introComplete : false,
            tracker:'61fbb6bbd0e918a7bcf14868',
            video:''
       } 
      }

    componentWillMount(){  
      localStorage.setItem('tracked',true);
      sessionStorage.setItem('tracked', true)
      this.track()
    }

    track(){
        const trackedStorage = localStorage.getItem('tracked')
        const trackedSession  = sessionStorage.getItem('tracked')
        const tracked  =  trackedStorage && trackedSession
        const urlReferrer = document.referrer !== '' ? document.referrer : 'No referrer'

        let isValidTrack = false
        axios.post(`/api/clicks`,{
            "campaignId": this.state.tracker ,
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
        //this.track()
        this.setState({
            introComplete:true
        })
    }

    updateTrack = isValid =>{
        let videoUrl = !isValid ? '/videos/buyhouse.mp4':'/videos/three.mp4'
        this.setState({
            isValid : isValid,
            isLoading : false, 
            video : videoUrl

        })  

        window.scrollTo(0,0)
    }

    
  S

   showSteOne = ()=>{
    return <Intro introClick={()=>this.introClick()} videoSrc={this.state.video}/>

   }
    showComponent = ()=>{
        
        const comp =  this.state.isLoading ? 'Loading...' 
                    : !this.state.isLoading && this.state.isValid ? <Lp trackingId={this.state.tracker} />
                    : <House/>
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