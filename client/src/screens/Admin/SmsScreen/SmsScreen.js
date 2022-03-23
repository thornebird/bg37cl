import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { Container, Form, Button } from 'react-bootstrap'
import axios from 'axios'

const Sms = (props) => {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [smsUrl, setSmsUrl] = useState('')
    const [smsMessage, setSmsMessage] = useState('')

    useEffect(() => {
        setOptions(countryList().getData());
    }, [])


    const changeHandler = value => {
        setValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validated = datesValid() && datesValid() && messageValid() && urlValid()
        if(validated){
            alert('Validated')
            sendBulksSms()
        }else{
            alert('Pls check your input fields...')
        }
    }

    const sendBulksSms = ()=>{
     const sms = {
         countryCode : value,
         startDate : startDate,
         endDate : endDate,
         smsUrl : smsUrl,
         smsMessage : smsMessage
     }
     console.log(sms)
     axios.post('/api/sms/send',sms)
     .then(response=>{
         if(response.data.smsSent){
             alert('Bulk sms sent')
         }else{
            alert('Bulk sms error')
         }
     })
    }


    const datesValid =()=>{
        return startDate && endDate !== '' && startDate && endDate !== null
    }

    const urlValid = ()=>{
        return smsUrl !== '' && smsUrl !==  null
    }

    const messageValid = ()=>{
        return smsMessage !== '' && smsMessage !==  null
    }

    const setChangeVal = e => {
      
        switch (e.target.id) {
            case 'campaignMessage':
                setSmsMessage(e.target.value)
                break;
            case 'campaignUrl':
                setSmsUrl(e.target.value)
                break;
            default:
                break;

        }
    }

    return (
        <Container>

            Sms leads from geo
            <Select
                options={options}
                value={value}
                onChange={changeHandler}
            />

            <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                placeholder="Due date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
            <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                placeholder="End date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Form.Group>


                <Form.Group controlId="campaignMessage">
                    <Form.Label>Sms message</Form.Label>
                    <Form.Control type="text" value={smsMessage} onChange={(e) => setChangeVal(e)} placeholder="Sms message" />
                </Form.Group>
                <Form.Group controlId="campaignUrl">
                    <Form.Label>Sms url</Form.Label>
                    <Form.Control type="text" value={smsUrl} placeholder="Sms link" onChange={(e) => setChangeVal(e)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        </Container>
    )
};

export default Sms;