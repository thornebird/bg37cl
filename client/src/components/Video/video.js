import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
 render(){
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url= {this.props.src}
            width='100%'
            height='50%'
            playing={true} 
            controls={true}         
            />
        </div>
        )
        }
}

export default Video;