import React ,{useState,useEffect} from 'react';
import {  Col, Row, Form, Button, ListGroup , Image } from 'react-bootstrap';
import styles from './CheckoutForm.module.css';

import PopupMessage  from './../../components/PopupMessage/PopupMessage.js';
import FormInput from './../../components/CheckoutForm/FormInput/FormInput.js';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary.js';
import PayPal from './PayPal/PayPal.js';

const CheckoutForm = (props) =>{

    const [price, setPrice] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(4.30);
    const [totalPrice,setTotalPrice] = useState(price+shippingPrice);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [postCode, setPostCode] = useState('');
    const [checkout,setCheckout] = useState(false);
    const [orderId,setOrderId] = useState('');
    const [showDealError,setShowDealError] = useState(false); 
    const [showCheckOut,setShowCheckOut] = useState(false);
    const [animateCheckout,setAnimateCheckout] = useState(false);
    const [paymentSucces,setPaymentSucces] = useState(false);
   



    const dealError = {
        title: 'You have not selected a deal',
        message : 'In order to complete the order you need to selected a deal',
        cta :'Select a deal'
    };


    const checkOutMessage ={
        title: 'Continue to payment',
        message : 'To complete your order proceed to the payment',
        cta:' Continue to payment'
    };

    

    const provinces  = [
        'Gauteng',
        'Western Cape',
        'KwaZulu-Natal',
        'Eastern Cape',
        'Free State',
        'Limpopo',
        'Mpumalanga',
        'Northern Cape',
        'North West'
    ];

    
 
    
    useEffect(()=>{
    setProvince(provinces[0]);
    
    },[provinces]);

    const deals =  [
        {
        label :"Buy 1, Get 1 FREE (Normally $80) now $39.95",
        name:"deal",
        id:"deal_buy_1",
        price :39.95
       },
       {
        label :"Popular Deal: Buy 2, Get 3 FREE now $79.95",
        name:"deal",
        id:"deal_buy_2",
        price:79.95
       },
       {
        label :"Buy 3, Get 7 FREE now $112.95",
        name :"deal",
        id:"deal_buy_3",
        price:112.95
       },
       {
        label :"Out of stock. Buy 5, Get 15 FREE now $195.95",
        name:"deal",
        id : "deal_buy_5",
        price:195.95
       }
        
      
    ];


    const [selectedDeal,setSelectedDeal] = useState(deals[0]);

    const [customerInformation,setcustomerInformation] = useState([        
           {
            id : 'firstName',
            values:{
                label : 'First name',
                placeholder:'First name',
                value : firstName,
                type: 'text'
            },
            error :{
                hasError : false,
                errorMessage :'First name is required'
            }
           },                      
           {
             id : 'lastName',
             values:{
             label : 'Last name',
             placeholder:'Last name',
             value : lastName,
             type: 'text'
             },
             error :{
                 hasError : false,
                 errorMessage :'Last name is required'
             }
           },
           {
            id : 'email',
            values:{
            label : 'Email address',
            placeholder:'Email address',
            value : email,
            type: 'email'
            },
            error :{
                hasError : false,
                errorMessage :'Email address is required'
            }
          },
          {
            id : 'phone',
            values:{
            label : 'Phone number',
            placeholder:'Phone number',
            value : phone,
            type: 'phone'
            },
            error :{
                hasError : false,
                errorMessage :'Phone number is required'
            }
          }       
    ]);

    const [shippingInfo,setshippingInfo] = useState([
            {
             id : 'addressLine1',
             values:{
             label : 'Address Line 1',
             placeholder:'Address Line 1',
             value : addressLine1,
             type: 'text'
            },
            error :{
                hasError : false,
                errorMessage :'Address line 1 is required'
            }
            },
            {
               id : 'addressLine2',
               values:{
               label : 'Address Line 2',
               placeholder:'Address Line 2',
               value : addressLine2,
               type: 'text'
               },
               error :{
                   hasError : false,
                   errorMessage :'Address line 2 is required'
               }
              },              
              {
                id : 'city',
                values:{
               label : 'City',
               placeholder:'City',
               value : city,
               type: 'text'
               },
               error :{
                   hasError : false,
                   errorMessage :'City is required'
               }
              },{
                id : 'postCode',
                values:{
               label : 'Post code',
               placeholder:'Post code',
               value : postCode,
               type: 'text'
               },
               error :{
                   hasError : false,
                   errorMessage :'Post code is required'
               }
              },
        ]);
        
    const handleSubmit = (e) => {
        e.preventDefault();
        checkInput();
    };

    const checkInput = () => {       
        const newInfo = [...customerInformation];
        Object.entries(customerInformation).forEach(element => {
            console.log('v',element[1].id);
            console.log('v',element[1]);
        
            if(element[1].id === 'firstName'){               
                if(firstName === ''){
                    element[1].error.hasError = true;
                }else{
                    element[1].error.hasError = false;
                }
               
            }else if(element[1].id === 'lastName'){
                if(lastName === ''){
                    element[1].error.hasError = true;
                }else{
                    element[1].error.hasError = false;
                }
            }else if(element[1].id === 'email'){
                if(email === ''){
                    element[1].error.hasError = true;
                }else{
                    element[1].error.hasError = false;
                }
            }else if(element[1].id === 'phone'){
                if(phone === ''){
                    element[1].error.hasError = true;
                }else{
                    element[1].error.hasError = false;
                }
            }
        });


        const newShippingnfo = [...shippingInfo];

        Object.entries(shippingInfo).forEach(element =>{
            if(element[1].id === 'addressLine1'){
               
                if(addressLine1 === ''){
                    element[1].error.hasError = true;
                }else{
                    element[1].error.hasError = false;
                }
               
            }else if(element[1].id === 'addressLine2'){
               
                if(addressLine2 === ''){
                    element[1].error.hasError = true;
                }else{
                    element[1].error.hasError = false;
                }
               
            }else if(element[1].id === 'postCode'){
               
                if(postCode === ''){
                    element[1].error.hasError = true;
                }else{
                    element[1].error.hasError = false;
                }
               
            }else if(element[1].id === 'city'){
               
                if(city === ''){
                    element[1].error.hasError = true;
                }else{
                    element[1].error.hasError = false;
                }
               
            }
        });

        // need to check selectedDeal is set
        setcustomerInformation(newInfo);
        setshippingInfo(newShippingnfo);

        
  

        if (price !== '' &&
            shippingPrice !== '' &&
            firstName !== '' &&
            lastName !== '' &&
            email !== '' &&
            phone !== '' &&
            addressLine1 !== '' &&
            addressLine2 !== '' &&
            city !== '' &&
            province !== '' &&
            postCode !== '' &&
            selectedDeal) {
         
            setShowCheckOut(true);
            setCheckout(true);
 
           
        }else if(!selectedDeal){
            setCheckout(false);            
            setShowDealError(true);
        }
         else{
            setCheckout(false);        
        }
    };

    const saveOrder = (payment) => {
        if(!checkout)
        return;
       alert('thanks for your order')
    };

    const onValueChange = (e) => {
        console.log(e.target);
     
        switch (e.target.id) {
            case 'firstName':
                
                setFirstName(e.target.value);
                break;
            case 'lastName':
                setLastName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;

            case 'phone':
                setPhone(e.target.value);
                break;

            case 'addressLine1':
                setAddressLine1(e.target.value);
                break;

            case 'addressLine2':
                setAddressLine2(e.target.value);
                break;
            case 'city':
                setCity(e.target.value);
                break;
            case 'postCode':
                setPostCode(e.target.value);
                break;
            case 'province':
                setProvince(e.target.value);
                break;
            default:
                break;
        }
    
    };

    const updatePaymentFailed = (err)=>{
        alert(err);
    }

    const updatePaymentSuccess = (statusPayment)=>{
      // console.log(statusPayment);
     // const payment = statusPayment;
    //   console.log('a',payment.create_time);
    //   console.log('b',payment.id);
    //   console.log('c',payment.payer.email_address);
    //   console.log('d',payment.payer.payer_id);
    //   console.log('e',payment.payer.address);
    //   console.log('f',payment.status);
    //   console.log('g',payment.purchase_units[0].amount.currency_code);
    //   console.log('h',payment.purchase_units[0].amount.value);
    //   console.log('des',payment.purchase_units[0].description);
    //   console.log('payee',payment.purchase_units[0].payee.email_address);   
     setPaymentSucces(true);
     saveOrder(statusPayment);
      
    };

    const onDealSelected = (e) => {
        //console.log(e.target.id);
        const deal = deals.find(element => element.id === e.target.id);        
       
        
        setPrice(deal.price);
        setSelectedDeal(deal);
 
        setTotalPrice(deal.price+shippingPrice);
    }

    const handleClose =()=>{
        setShowDealError(false);        
    }

    const continuePayment  = ()=>{
         setShowCheckOut(false);
         setAnimateCheckout(true);       
    };
 
    const paymentSuccesfull = ()=>{
      setPaymentSucces(false);
    }
    return (
    <>
                   
                    {/* <PopupMessage  
                    show={showDealError} 
                    handleClose={handleClose} 
                    title={dealError.title} 
                    message={dealError.message}
                    cta={dealError.cta}
                    />   */}

                   {/* <PopupMessage  
                    show={showCheckOut} 
                    handleClose={continuePayment} 
                    title={checkOutMessage.title} 
                    message={checkOutMessage.message}
                    cta={checkOutMessage.cta}
                    />  */}

                   
                  <Row style={{textAlign :'center' }}>
                       <Col >
                        <h2>Get your Iphone 11 pro case</h2>
                       </Col>
                   </Row>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                        <Image className={styles.img} src='/img/case2.jpg' fluid/>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                           <Image className={styles.img} src='/img/case.jpg' fluid/>
                        </Col>
                    </Row>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            
                            <ListGroup className={styles.formContainer}>
                            <ListGroup.Item>
                            {
                               props.discountApplied ? 
                               
                               <div ><span  className={styles.discount}>YOUR 50% DISCOUNT HAS BEEN APPLIED</span></div>:''
                               
                            }
                            <br/>
                            {props.discountApplied ? <span  className={styles.sellout}>(Normally $80 Retail)</span> :''}
                            <h6 className={styles.sellout}>Stock is extremely limited: Sell Out Risk: HIGH</h6> 
                            </ListGroup.Item>
                            <ListGroup.Item  >
        
                           <h4>STEP 1: SELECT ORDER QUANTITY</h4> 
            
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                            <Form.Group as={Row} onChange={(e) => onDealSelected(e)}>
                                
                                <Col   sm={10}>
                                    {

                                        deals.map((deal,index) =>{
                                         
                                         let disabled = index === 3 ? true :false;
                                     
                                         return <Form.Check
                                        
                                        //  checked={checked}
                                         key={index}
                                         id={index}
                                         type="radio"
                                         disabled={disabled}
                                         label={deal.label}
                                         name={deal.name}
                                         id={deal.id}/>                                 
                                    })}
                                   
                                </Col>
                            </Form.Group>
                            </ListGroup.Item>                    
                                
                            </ListGroup>
                            <ListGroup className={styles.formContainer}>
                            <ListGroup.Item>
                              STEP 2: CUSTOMER INFORMATION
                            </ListGroup.Item>
                                <ListGroup.Item>
                                {/* <Form.Group controlId='firstName'>
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" placeholder="First name" value={firstName} onChange={(e) => onValueChange(e)} />
        
                            </Form.Group>
                            <Form.Group controlId='lastName' >
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" value={lastName} onChange={(e) => onValueChange(e)} />
                            </Form.Group>
                            <Form.Group controlId='email'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="Email address" value={email} onChange={(e) => onValueChange(e)} />
                            </Form.Group>
                            <Form.Group controlId='phone'>
                                <Form.Label>Phone number </Form.Label>
        
                                <Form.Control type="tel" placeholder="Phone number" value={phone} onChange={(e) => onValueChange(e)} />
        
                            </Form.Group> */}
        
                        {customerInformation.map((info,index) =>{ 
                            let val  =''
                            if(info.id === 'firstName'){
                                val  = firstName
                            }else if(info.id === 'lastName'){
                                val  = lastName
                            }else if(info.id === 'phone'){
                                val  = phone
                            }else if(info.id === 'email'){
                                val  = email
                            }
                            return   <FormInput  key={index} 
                                 id={info.id} 
                                 label={info.values.label}
                                 placeholder={info.values.placeholder} 
                                 value= {val}
                                 type={info.values.type} 
                                 onValueChange={onValueChange} 
                                 error={info.error.hasError}
                                 errorMessage={info.error.errorMessage}/>
                                 })}
                                </ListGroup.Item>
                          
        
                            </ListGroup>
                        
        
                        </Col>
        
                        <Col xs={12} md={6} lg={6}>
                            <ListGroup className={styles.formContainer}>
                            <ListGroup.Item>
                              STEP 3: SHIPPING INFORMATION
                            </ListGroup.Item>
                                <ListGroup.Item>
                                    {
                                        shippingInfo.map((info,index) =>{
                                            let val  =''
                                            if(info.id === 'addressLine1'){
                                                val  = addressLine1
                                            }else if(info.id === 'addressLine2'){
                                                val  = addressLine2
                                            }else if(info.id === 'city'){
                                                val  = city
                                            }else if(info.id === 'postCode'){
                                                val  = postCode
                                            }

                                            return <FormInput key={index} id={info.id} 
                                            label={info.values.label}
                                            placeholder={info.values.placeholder} 
                                            value= {val}
                                            type={info.values.type} 
                                            onValueChange={onValueChange} 
                                            error={info.error.hasError}
                                            errorMessage={info.error.errorMessage}/>
                                        })
                                    }
                                {/* <Form.Group controlId='addressLine1'>
                                <Form.Label>Address Line 1 </Form.Label>
        
                                <Form.Control type="text" placeholder="Address Line 1" value={addressLine1} onChange={(e) => onValueChange(e)} />
        
                            </Form.Group>
                            <Form.Group controlId='addressLine2'>
                                <Form.Label>Address Line 2 </Form.Label>
                                <Form.Control type="text" placeholder="Address Line 2" value={addressLine2} onChange={(e) => onValueChange(e)} />
                            </Form.Group>
                            <Form.Group controlId='city'>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="City" value={city} onChange={(e) => onValueChange(e)} />
        
                            </Form.Group>
                            <Form.Group controlId='postCode'>
                                <Form.Label>Prost code</Form.Label>
                                <Form.Control type="text" placeholder="Post code" value={postCode} onChange={(e) => onValueChange(e)} />
        
                            </Form.Group> */}
                            <Form.Group controlId="province">
                                <Form.Label>Select a province</Form.Label>
                                <Form.Control as="select" onChange={(e) => onValueChange(e)}>
                                    {/* <option>Gauteng</option>
                                    <option>Western Cape</option>
                                    <option>KwaZulu-Natal</option>
                                    <option>Eastern Cape</option>
                                    <option>Free State</option>
                                    <option>Limpopo</option>
                                    <option>Mpumalanga</option>
                                    <option>Northern Cape</option>
                                    <option>North West</option> */}
                                    {provinces.map((p,index)=>{
                                      return <option key={index}>{p}</option> 
                                    }
                                    )}
                                </Form.Control>
                            </Form.Group>
                            {/* <Form.Group controlId="country">
                                <Form.Label>Select a country</Form.Label>
                                <Form.Control as="select" onChange={(e) => onValueChange(e)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group> */}
                           {selectedDeal?
                           <CheckoutSummary 
                           productName={selectedDeal.label}
                           price={price}
                           shippingPrice={shippingPrice}
                           total={totalPrice}
                           /> :''
                        
                          } 
                            <Button   className={styles.checkoutBtn} variant="success" type="submit">
                                YES! Send Me My Safe Personal Alarm!
                            </Button>
                        
                                
                                    <PayPal 
                                     total={totalPrice} 
                                     description={selectedDeal.label} 
                                     updateSuccess={updatePaymentSuccess} 
                                     updateFailed={updatePaymentFailed}
                                     /> 
                            
                            <Image src='https://trysafepersonalalarm.com/img/warranty.jpg' width='100%'/>
                            </ListGroup.Item>
                            </ListGroup>
                            
                        </Col>
                    </Row>
        
        
                </Form>
                    
           
    
       
</>
      
   
 )
};

export default CheckoutForm;