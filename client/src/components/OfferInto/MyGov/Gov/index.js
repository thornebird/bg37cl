import React, { useState, useEffect, useRef } from 'react'
import LeadForm from '../../../Forms/LeadForm/LeadForm.js'

import Cookies from 'universal-cookie'
import { Container, Image, Col, Row, Modal, Button } from 'react-bootstrap'
import RegisterMessage from '../../../Forms/LeadForm/RegisterMessage/RegisterMessage.js'
import styles from './index.module.css'


const RaymondLp = props => {
  const [showRegisterMessage, setShowRegisterMessage] = useState(false)
  const [registerTitle, setRegisterTitle] = useState('')
  const [registerMessage, setRegisterMessage] = useState('')
  const [loading, setIsLoading] = useState(false)

  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [isBottomScreen, setIsBottomScreen] = useState(true)

  const signupRef = useRef(null)

  useEffect(() => {
    setDates()
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const setDates = () => {
    const date = new Date()
    switch (date.getDay()) {
      case 0:
        setDay('Sunday');
        break;
      case 1:
        setDay('Monday');
        break;
      case 2:
        setDay('Tuesday');
        break;
      case 3:
        setDay('Wednesday');
        break;
      case 4:
        setDay('Thursday');
        break;
      case 5:
        setDay('Friday');
        break;
      case 6:
        setDay('Saturday');
        break;

      default:
        break;
    }

    setMonth(date.getMonth() + 1)
    setDate(date.getDate());
    setYear(date.getFullYear());
  }

  const saveError = (error) => {
    setRegisterTitle('Registeration Failed...')
    setRegisterMessage(error)
    setShowRegisterMessage(true)
    setIsLoading(false)
  }

  const savedSuccess = () => {
    setRegisterTitle('Thank you for registering.')
    setRegisterMessage('Stay tuned and available for a call from your personal manager to help you get started')
    setShowRegisterMessage(true)
    setIsLoading(false)
  }

  const modalclose = () => {
    setShowRegisterMessage(false)
  }

  const onClickRegister = () => {
    setIsLoading(true)
  }


  const scollToRegister = () => {
    signupRef.current.scrollIntoView()
  }

  const scrollHandler = () => {
    if (window.pageYOffset + window.innerHeight >= signupRef.current.offsetTop) {
      setIsBottomScreen(false)
    } else {
      setIsBottomScreen(true)
    }
  }
  return (
    <Container className={styles.bodyContainer}>
      <Row>

        <Col>
        <Image width='100%' src='/img/my/yah.jpg' />
        <h2>
          <b><u>SPECIAL REPORT-</u></b> Malaysians are making money from home thanks to a government program
        </h2>
        <Image width='100%' src='/img/my/gov/spon.jpg' />
        <Image width='100%' src='/img/my/gov/int.jpg' />
        <p>
        
          <em>
          Malaysian citizens are already raking in millions of Ringgit from home using this government program

          </em>
        </p>
        <p>
        Last week, the Malaysian prime minister Muhyiddin Yassin appeared on RTM  and announced a new "government program called Bitcoin UP" which they say can guarantee anyone a monthly income within 3-4 weeks. 
        
        </p>
        <p>
        This will give Malaysian residents the possibility to become financially independent with an investment of 1,000 MYR. Muhyiddin Yassin urged everyone in Malaysia to jump on this amazing opportunity before the big banks try to shut it down for good.

        </p>
        <Image width='100%' src='/img/my/gov/main.jpg' />
        <p>
          <em>
            "After many months of reflection and internal discussions, we have decided to create an income program for Malaysian citizens.
We intend to help Malaysian families after our country was hit by the pandemic that has had a major impact on Malaysia so we have decided to step in and boost the Malaysian economy through bitcoin investments on a platform called Bitcoin UP. 
 "
          </em>
        </p>
        <p>
          <em>
            "We urge all Malaysians to sign up without any hesitation. 
It's the single biggest opportunity we've seen in our country. Since the government aims to build a fortune fast. We urge everyone to check this out. All Malaysians can now turn an investment of 1,000 MYR into a monthly income"

          </em>
        </p>
        <Image width='100%' src='/img/my/w17-check.jpg' />
        <p><em> "Payments made to Malaysians will appear in their bank account from Bitcoin UP</em></p>
        <h3>
        The idea behind Bitcoin UP is straightforward:
        </h3>
        <p>
        To allow the average person to cash in on the cryptocurrency boom which is still the most lucrative investment of the 21st century, despite what most people think.

        </p>
        <p>
        The bitcoin price recently hit an all time high of $58,000 per Bitcoin, ordinary people are still making a killing. Why? Because there are thousands of other cryptocurrencies besides Bitcoin that are being traded for huge profits on a daily basis.

        </p>
        <p>
        Some of these cryptocurrencies include Ripple, Ethereum, Monero, Zcash and Ripple and they are still making returns of over 10,000% and higher for ordinary people in Malaysia.
        </p>
        <p>
        Bitcoin UP lets you profit from all of these cryptocurrencies, even during a pandemic. It uses artificial intelligence (AI) to automatically handle long and short investing for you so you can make money around the clock, even while you sleep.
        </p>
        <p>
        Malaysians can now join a new income system that’s been gaining popularity here in Malaysia. And what’s so incredible is how quickly a small investment in this account can create a monthly income – even during the current pandemic. The Malaysian government has taken this step in order to secure the future of the country.
        </p>
        <h2>
        HOW TO GET STARTED WITH BITCOIN UP (LIMITED SPOTS AVAILABLE)

        </h2>
        <p>
        Malaysian residents will be able to register one account per person.
        </p>
        <p>
        Once you have registered you will receive a call from an agent verifying that you are a Malaysian resident, your age, your marital status and current employment status.

        </p>
          <RegisterMessage
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage}
            modalclose={() => modalclose()}
          />


         <div ref={signupRef}></div>
          <Image width='100%' src='/img/ray/call.jpg' />
          <br/>
          <br/>
          
          <p className={styles.yellow}> <b> <u>
                  IMPORTANT:
                             </u> You will receive a call after signing up. Don't ignore it since this call is essential. </b></p>
                             
          

          <LeadForm
            offer='Bitcoin UP'
            geo='MY'
            savedSuccess={() => savedSuccess()}
            saveError={(error) => saveError(error)}
            btnDisabled={loading}
            onClickRegister={() => onClickRegister()}
          />
         
          <br/>
          
          
        </Col>
        {
          isBottomScreen ? <Button className="fixed-bottom btn btn-success" size="lg" block onClick={() => scollToRegister()}>
            Click To Join
            </Button> : ''
        }

      </Row>

    </Container>
  )
}

export default RaymondLp