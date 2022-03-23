import React from 'react'
import Travel from '../../screens/PostScreen/PostScreen.js'

import Lp from './index.js'
import axios from'axios'
import Intro  from './Into/Intro.js'

class Trip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            isLoading : true,
            introComplete : false,
            c:'62398573a451629457fff0da'
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

        let isValid = false
        axios.post(`/api/clicks`,{
            "campaignId": this.state.c ,
            "urlReferrer": urlReferrer,
            "tracked":tracked
       }).then(response =>{
           isValid = response.data.isValid
           this.updateTrack(isValid)
       }).catch(error =>{
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
                    : !this.state.isLoading && this.state.isValid ? <Lp trackingId={this.state.c}/>
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