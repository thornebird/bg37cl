import React ,{useState} from 'react';
import styles from './PayPal.module.css';
import PopupMessage from '../../PopupMessage/PopupMessage.js';

export default function PayPal (props) {
  
    const [paid, setPaid] = React.useState(false);
    const [error, setError] = React.useState(null);
   
    const paypalRef = React.useRef();

    const closeError = ()=>{
      setError(false);
    }

    const closePayment = ()=>{
      setPaid(false);
    }
 
    const paymentMessage ={
      title: 'Your payment was succesfull',
      message : 'Thank you for shopping with us',
      cta:'Close'
  };

  const errortMessage ={
    title: 'Your payment was unsuccesfull',
    message : 'Please verify your details and try again',
    cta:'Close'
};


React.useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          layout:  'vertical',
          color:   'gold',
          shape:   'pill',
          label:   'paypal',
          size: 'small',
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: props.description,
                amount: {
                  currency_code: "USD",
                  value: props.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          props.updateSuccess(order);
          setError(false);
          
        },
        onError: (err) => {
       
           props.updateFailed(err);        
           setError(true);
        },
      })
      .render(paypalRef.current);
  }, []);

    return (
        <div className={styles.container}>
               {
                 paid? <PopupMessage  
                 show={paid} 
                 handleClose={closePayment} 
                 title={paymentMessage.title} 
                 message={paymentMessage.message}
                 cta={paymentMessage.cta}
                 /> :''
               }  
               {
                 error ?  <PopupMessage  
                 show={error} 
                 handleClose={closeError} 
                 title={errortMessage.title} 
                 message={errortMessage.message}
                 cta={errortMessage.cta}
                 /> :''
               }
               
            {
             <div  className={styles.btn} ref={ paypalRef }></div>

            }

        </div>
    )
}
