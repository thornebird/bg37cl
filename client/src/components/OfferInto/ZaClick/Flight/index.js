import React, { useState, useEffect, useRef } from 'react'
import Offer from './Offer/offer.js'
import Cookies from 'universal-cookie'
import { Button, Container } from 'react-bootstrap'
import styles from './index.module.css'
import Lp from './Offer/lp.js'
import queryString from 'query-string'


class RaymondLp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      iFrameHeight: 0,
      iFrameWidth: 0,
      cta: false,
      url:''
    }
  }

  componentWillMount(){

    const query=queryString.parse(window.location.search);
    const placement = query.placement
    const creative = query.creative
    
    const url = `https://www.invester-2021.xyz/go/cca247bb-8ef0-4681-a00e-cc1edba84efb?placement=${placement}&creative=${creative}`
    this.setState({
      iFrameHeight: window.innerHeights,
      url
    })

  }

  componentDidMount() {

    this.setState({
      iFrameHeight: window.innerHeights,
     
    })
  }

  renderHTMLFrame() {
    return this.state.url !== ''? <Offer
      url={this.state.url}
      height={window.innerHeight}
    /> :''
  }

  cta() {
    this.setState({ cta: true })
  }

  lp() {
    return <Lp />
  }

  render() {
    return (
      <>

        {
           this.renderHTMLFrame() 
        }


        {/* {
      this.state.cta ? this.renderHTMLFrame() :this.lp()
    }
    <br/>
    <br/>
    <div className={styles.btnContainer}>
    {
      !this.state.cta ? <Button className="fixed-bottom btn btn-success" size="lg" block onClick={() => this.cta()}>            
             Continue to Bitcoin Era 
     </Button>  :''
    }
    </div>    */}


      </>
    )
  }
}

export default RaymondLp