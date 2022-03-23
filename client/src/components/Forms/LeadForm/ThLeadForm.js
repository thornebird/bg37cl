import React, {useEffect, useState } from 'react'
import styles from './LeadForm.module.css'
import { Form, Button , Spinner } from 'react-bootstrap'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from 'axios'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { getCountryCallingCode } from 'react-phone-number-input'
import { parsePhoneNumber } from 'react-phone-number-input'
import ContactError from '../../../screens/Contact/ContactError/ContactError.js'
import queryString from 'query-string'
const LeadForm = props => {
  const [country,setCountry] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [termsAgreed,setTermsAgreed] = useState(true)
  const [isLoading,setIsLoading] = useState(false)
  const [campId,setCampId] = useState('0')


  useEffect(()=>{
   
    let id  = window.location.hostname
    setCampId(id)
  },[])
  const errorsValidation = {
    firstName: {
      message: "กรุณากรอกชื่อ",
      hasError: false
  },
  lastName: {
      message: "กรุณากรอกนามสกุล",
      hasError: false
  },
  email: {
      message: "กรุณากรอกอีเมลให้ถูกต้อง",
      hasError: false
  },
  phone: {
      message: "กรุณากรอกหมายเลขโทรศัพท์ให้ถูกต้อง",
      hasError: false
  },
  
}
  const [formErrors,setFormErrors] = useState(errorsValidation)
  

  const inputFieldChange = e => {

    switch (e.target.id) {
      case 'firstName':
       setFirstName(e.target.value)
        break;
      case 'lastName':
        setLastName(e.target.value)
        break;
      case 'email':
         setEmail(e.target.value)
        break;
      default:
        break;
    }
  }

  const termsOnChange = e =>{
 
    setTermsAgreed(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    checkInput()
  }

  const checkInput = ()=>{
    const isEmailValid = checkEmailValid()
    const isNamesValid = checkNameValid()
    const isValidPhone = isValidPhoneNumber(phoneValue)
  
     
    showFormErrors(isEmailValid,isValidPhone)
  
    if(isValidPhone && isEmailValid && isNamesValid){
      try{
        const prefix = parsePhoneNumber(phoneValue)
        sendLead(prefix.countryCallingCode)
      }catch(error){
        console.log(error)
      }
    
    }
  }

  const showFormErrors = (isEmailValid,isValidPhone)=>{
    const newErrors = { ...formErrors }
    firstName.length < 3  ? newErrors.firstName.hasError = true : newErrors.firstName.hasError = false;
    lastName.length < 3 ? newErrors.lastName.hasError = true : newErrors.lastName.hasError = false;
    !isEmailValid ? newErrors.email.hasError = true : newErrors.email.hasError = false;
    !isValidPhone  ? newErrors.phone.hasError = true : newErrors.phone.hasError = false;
    setFormErrors(newErrors)   

  }

  const checkEmailValid =()=>{    
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  const checkNameValid = ()=>{
    return firstName.length >= 3 && lastName.length >= 3
  }

  const sendLead = prefix =>{
    const lead = {
        firstName : firstName,
        lastName : lastName,
        email:email,
        phone : phoneValue,
        prefix: prefix,
        countryCode : props.geo,
        offer : props.offer,
        campId : campId,
        trackingId :props.trackingId
    }
    props.onClickRegister()
    axios.post(`/api/contact/c_lead`,lead).then(response => {
     console.log('save',response.data)
     if(response.data.savedStatus){         
      window.gtag('event', 'conversion', {'send_to': 'AW-10868816711/_yfYCITh2KkDEMf2074o'});
     props.savedSuccess()
     }else{
      props.saveError('Error registering please try again.')
     }
    })
    .catch(error =>{
      console.log(error)
      props.saveError('Error registering please try again.')
    })
  }
  return (
    <div className={styles.formBox}>
    <h3 className={styles.formTitle}>เปลี่ยนชีวิตตัวคุณเองวันนี้    </h3>
    <Form className={styles.formBody} onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="firstName">
        
        <Form.Control onChange={(e) => inputFieldChange(e)} type="text" placeholder="ชื่อ" />
        {
          formErrors.firstName.hasError ? <ContactError message={formErrors.firstName.message} /> : ''
        }
      </Form.Group>
      <Form.Group controlId="lastName">
        
        <Form.Control onChange={(e) => inputFieldChange(e)} type="text" placeholder="นามสกุล" />
        {
          formErrors.lastName.hasError ? <ContactError message={formErrors.lastName.message} /> : ''
        }
      </Form.Group>
      <Form.Group controlId="email">
        
        <Form.Control onChange={(e) => inputFieldChange(e)} type="email" placeholder="อีเมล" />
        {
          formErrors.email.hasError ? <ContactError message={formErrors.email.message} /> : ''
        }
      </Form.Group>
      <PhoneInput
        placeholder="หมายเลยโทรศัพท์"
        value={phoneValue}
        onChange={setPhoneValue}
        defaultCountry={props.geo} 
        />
         {
            formErrors.phone.hasError ? <ContactError message={formErrors.phone.message} /> : ''
         }
      <Form.Group>
        <Form.Check
          defaultChecked={termsAgreed}
          onChange={(e) => termsOnChange(e)}
          label="ยอมรับข้อกำหนดและเงื่อนไข"
          feedback="You must agree before submitting."
          required
        />
      </Form.Group>
      <Button type="submit" size="lg" block disabled={props.btnDisabled} className='btn btn-success'>
       
        {
        props.btnDisabled ? <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner> :'ขอสิทธิ์เข้าใช้งาน'
        
       }
      </Button>
     
    </Form>
    </div>
  )
}
export default LeadForm